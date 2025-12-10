import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendWaitlistWelcomeEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Incoming waitlist body:', body)

    const { name, email, role, interests, experienceLevel } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { ok: false, message: 'Email is required' },
        { status: 400 },
      )
    }

    const trimmedEmail = email.trim().toLowerCase()
    const trimmedName =
      typeof name === 'string' && name.trim().length > 0 ? name.trim() : null
    const trimmedRole =
      typeof role === 'string' && role.trim().length > 0 ? role.trim() : null
    const trimmedInterests =
      typeof interests === 'string' && interests.trim().length > 0
        ? interests.trim()
        : null
    const trimmedExperienceLevel =
      typeof experienceLevel === 'string' &&
      experienceLevel.trim().length > 0
        ? experienceLevel.trim()
        : null

    const existing = await prisma.waitlistSignup.findUnique({
      where: { email: trimmedEmail },
    })

    if (existing) {
      console.log('Existing signup found:', existing.id)
      return NextResponse.json(
        { ok: true, message: 'Already on the waitlist' },
        { status: 200 },
      )
    }

    console.log('Creating new signup')
    const created = await prisma.waitlistSignup.create({
      data: {
        email: trimmedEmail,
        name: trimmedName,
        role: trimmedRole,
        interests: trimmedInterests,
        experienceLevel: trimmedExperienceLevel,
      },
    })

    // Fire-and-forget welcome email; log errors without breaking the API
    try {
      await sendWaitlistWelcomeEmail(created)
      await prisma.waitlistSignup.update({
        where: { id: created.id },
        data: { welcomeEmailSentAt: new Date() },
      })
    } catch (err) {
      console.error('Failed to send waitlist welcome email:', err)
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { ok: false, message: 'Server error' },
      { status: 500 },
    )
  }
}
