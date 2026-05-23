import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Environment validation
function validateEnv() {
  const required = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  }

  const missing = Object.entries(required)
    .filter(([, value]) => !value)
    .map(([key]) => key)

  if (missing.length > 0) {
    return { valid: false, missing }
  }

  return { valid: true, missing: [] as string[] }
}

export async function POST(req: Request) {
  const startTime = Date.now()
  const requestId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

  try {
    // 1. Validate environment variables
    const envCheck = validateEnv()
    if (!envCheck.valid) {
      console.error(`[${requestId}] Missing environment variables:`, envCheck.missing)
      return NextResponse.json(
        { success: false, error: 'Server configuration error', requestId },
        { status: 500 }
      )
    }

    // 2. Parse request body
    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch (parseError) {
      console.error(`[${requestId}] Failed to parse request body:`, parseError)
      return NextResponse.json(
        { success: false, error: 'Invalid request body', requestId },
        { status: 400 }
      )
    }

    console.log(`[${requestId}] Incoming lead:`, {
      formType: body.formType,
      sourcePage: body.sourcePage,
      email: body.email,
      timestamp: new Date().toISOString()
    })

    const {
      formType,
      sourcePage,
      name,
      email,
      businessName,
      website,
      industry,
      message,
      metadata
    } = body as {
      formType?: string
      sourcePage?: string
      name?: string
      email?: string
      businessName?: string
      website?: string
      industry?: string
      message?: string
      metadata?: Record<string, unknown>
    }

    // 3. Validate required fields
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required', requestId },
        { status: 400 }
      )
    }

    if (!formType) {
      return NextResponse.json(
        { success: false, error: 'Form type is required', requestId },
        { status: 400 }
      )
    }

    // 4. Initialize Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // 5. Insert into Supabase
    const { error: supabaseError } = await supabase.from('leads').insert([
      {
        form_type: formType ?? null,
        source_page: sourcePage ?? null,
        name: name ?? null,
        email: email ?? null,
        business_name: businessName ?? null,
        website: website ?? null,
        industry: industry ?? null,
        message: message ?? null,
        metadata: metadata ?? null,
        created_at: new Date().toISOString()
      }
    ])

    if (supabaseError) {
      console.error(`[${requestId}] Supabase insert error:`, {
        message: supabaseError.message,
        code: supabaseError.code,
        details: supabaseError.details
      })

      return NextResponse.json(
        { success: false, error: 'Failed to save lead data', requestId },
        { status: 500 }
      )
    }

    console.log(`[${requestId}] Supabase insert successful`)

    // 6. Send email notification (non-blocking - don't fail if email fails)
    let emailSent = false
    try {
      const resend = new Resend(process.env.RESEND_API_KEY!)

      const { error: emailError } = await resend.emails.send({
        from: 'Jupiter AI <onboarding@resend.dev>',
        to: 'info@jupiter-ai.co',
        subject: `[New Lead] ${formType} - ${businessName || name || 'Unknown'}`,
        html: `
          <h2 style="color: #7C3AED;">New Lead Submission</h2>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 20px 0;" />

          <table style="font-family: system-ui, sans-serif; font-size: 14px; line-height: 1.6;">
            <tr><td style="font-weight: 600; padding-right: 16px;">Form Type:</td><td>${formType}</td></tr>
            <tr><td style="font-weight: 600; padding-right: 16px;">Source Page:</td><td>${sourcePage || 'N/A'}</td></tr>
            <tr><td style="font-weight: 600; padding-right: 16px;">Name:</td><td>${name || 'N/A'}</td></tr>
            <tr><td style="font-weight: 600; padding-right: 16px;">Email:</td><td>${email}</td></tr>
            <tr><td style="font-weight: 600; padding-right: 16px;">Business:</td><td>${businessName || 'N/A'}</td></tr>
            <tr><td style="font-weight: 600; padding-right: 16px;">Website:</td><td>${website || 'N/A'}</td></tr>
            <tr><td style="font-weight: 600; padding-right: 16px;">Industry:</td><td>${industry || 'N/A'}</td></tr>
          </table>

          <h3 style="margin-top: 24px; font-size: 14px; color: #374151;">Message:</h3>
          <p style="background: #F3F4F6; padding: 12px; border-radius: 8px; font-size: 14px; white-space: pre-wrap;">${message || 'No message provided'}</p>

          <p style="margin-top: 24px; font-size: 12px; color: #6B7280;">
            Request ID: ${requestId}<br>
            Timestamp: ${new Date().toISOString()}
          </p>
        `
      })

      if (emailError) {
        console.error(`[${requestId}] Resend email error:`, emailError)
      } else {
        emailSent = true
        console.log(`[${requestId}] Email notification sent successfully`)
      }
    } catch (emailError) {
      console.error(`[${requestId}] Failed to send email notification:`, emailError)
      // Don't return error - email is non-critical
    }

    const duration = Date.now() - startTime
    console.log(`[${requestId}] Request completed in ${duration}ms (emailSent: ${emailSent})`)

    return NextResponse.json({
      success: true,
      requestId,
      emailSent
    })

  } catch (err) {
    const duration = Date.now() - startTime
    console.error(`[${requestId}] Unhandled error after ${duration}ms:`, err)

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred',
        requestId
      },
      { status: 500 }
    )
  }
}

