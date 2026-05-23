import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const WAITLIST_FILE = path.join(process.cwd(), "public", "waitlist.json");

interface WaitlistEntry {
  email: string;
  source: string;
  timestamp: string;
  // Extended fields for detailed forms (Jupiter Chat, etc.)
  name?: string;
  brand?: string;
  website?: string;
  monthlyOrders?: string;
  metadata?: Record<string, unknown>;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// GET handler - return count of emails
export async function GET() {
  try {
    const data = await fs.readFile(WAITLIST_FILE, "utf-8");
    const entries: WaitlistEntry[] = JSON.parse(data);
    return NextResponse.json({ count: entries.length });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

// POST handler - add email to waitlist
export async function POST(request: NextRequest) {
  const requestId = `wl_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  try {
    const body = await request.json();
    const {
      email,
      source = "unknown",
      name,
      brand,
      website,
      monthlyOrders,
      ...restMetadata
    } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required", requestId },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format", requestId },
        { status: 400 }
      );
    }

    // Read existing entries
    let entries: WaitlistEntry[] = [];
    try {
      const data = await fs.readFile(WAITLIST_FILE, "utf-8");
      entries = JSON.parse(data);
    } catch {
      // File doesn't exist or is empty, start with empty array
      entries = [];
    }

    // Check if email already exists
    if (entries.some((entry) => entry.email === email.toLowerCase().trim())) {
      return NextResponse.json(
        { error: "Email already registered", requestId },
        { status: 409 }
      );
    }

    // Build metadata from extra fields
    const metadata: Record<string, unknown> = {};
    if (Object.keys(restMetadata).length > 0) {
      Object.assign(metadata, restMetadata);
    }

    // Add new entry with extended fields
    const newEntry: WaitlistEntry = {
      email: email.toLowerCase().trim(),
      source,
      timestamp: new Date().toISOString(),
      ...(name && { name }),
      ...(brand && { brand }),
      ...(website && { website }),
      ...(monthlyOrders && { monthlyOrders }),
      ...(Object.keys(metadata).length > 0 && { metadata }),
    };

    entries.push(newEntry);

    // Write back to file
    await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2));

    console.log(`[${requestId}] Waitlist entry added:`, {
      email: newEntry.email,
      source,
      hasExtendedData: !!(name || brand || website || monthlyOrders)
    });

    return NextResponse.json({ success: true, requestId });
  } catch (error) {
    console.error(`[${requestId}] Waitlist error:`, error);
    return NextResponse.json(
      { error: "Failed to process request", requestId },
      { status: 500 }
    );
  }
}
