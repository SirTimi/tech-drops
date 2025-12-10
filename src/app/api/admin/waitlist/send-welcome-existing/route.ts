// src/app/api/admin/waitlist/send-welcome-existing/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendWaitlistWelcomeEmail } from '@/lib/email'

export async function POST(req: Request) {
  const authHeader = req.headers.get('authorization')
  const expected = `Bearer ${process.env.ADMIN_KEY}`

  if (!authHeader || authHeader !== expected) {
    return NextResponse.json(
      { ok: false, message: 'Unauthorized' },
      { status: 401 },
    )
  }

  const unsent = await prisma.waitlistSignup.findMany({
    where: { welcomeEmailSentAt: null },
    orderBy: { createdAt: 'asc' },
  })

  let sent = 0

  for (const entry of unsent) {
    try {
      await sendWaitlistWelcomeEmail(entry)
      await prisma.waitlistSignup.update({
        where: { id: entry.id },
        data: { welcomeEmailSentAt: new Date() },
      })
      sent++
    } catch (err) {
      console.error('Failed to send welcome to', entry.email, err)
    }
  }

  return NextResponse.json({
    ok: true,
    total: unsent.length,
    sent,
  })
}
