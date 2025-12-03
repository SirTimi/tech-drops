import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { name, email, role } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { ok: false, message: 'Email is required' },
        { status: 400 },
      )
    }

    const trimmedEmail = email.trim().toLowerCase()
    const trimmedName = typeof name === 'string' ? name.trim() : null
    const trimmedRole = typeof role === 'string' ? role.trim() : null

    // Basic duplicate protection
    const existing = await prisma.waitlistSignup.findUnique({
      where: { email: trimmedEmail },
    })

    if (existing) {
      return NextResponse.json(
        { ok: true, message: 'Already on the waitlist' },
        { status: 200 },
      )
    }

    await prisma.waitlistSignup.create({
      data: {
        email: trimmedEmail,
        name: trimmedName || null,
        role: trimmedRole || null,
      },
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error('Waitlist error', err)
    return NextResponse.json(
      { ok: false, message: 'Server error' },
      { status: 500 },
    )
  }
}
