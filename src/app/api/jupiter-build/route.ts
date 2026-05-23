import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const IDEAS_FILE = path.join(process.cwd(), "public", "ideas.json");

interface IdeaSubmission {
  name: string;
  business: string;
  industry: string;
  idea: string;
  email: string;
  timestamp: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST handler - submit idea
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, business, industry, idea, email } = body;

    // Validate required fields
    if (!name || !business || !idea || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Read existing entries
    let entries: IdeaSubmission[] = [];
    try {
      const data = await fs.readFile(IDEAS_FILE, "utf-8");
      entries = JSON.parse(data);
    } catch {
      // File doesn't exist or is empty, start with empty array
      entries = [];
    }

    // Add new entry
    const newEntry: IdeaSubmission = {
      name: name.trim(),
      business: business.trim(),
      industry: industry || "Other",
      idea: idea.trim(),
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
    };
    entries.push(newEntry);

    // Write back to file
    await fs.writeFile(IDEAS_FILE, JSON.stringify(entries, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
