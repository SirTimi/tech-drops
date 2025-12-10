// src/lib/email.ts
import nodemailer from 'nodemailer'
import type { WaitlistSignup } from '@/generated/prisma/client'

const host = process.env.EMAIL_HOST || 'smtp.gmail.com'
const port = Number(process.env.EMAIL_PORT || 465)
const user = process.env.EMAIL_USER
const pass = process.env.EMAIL_PASS
const from = process.env.EMAIL_FROM || 'Tech Drops <noreply@example.com>'

if (!user || !pass) {
  console.warn(
    'EMAIL_USER or EMAIL_PASS is not set – waitlist emails will not be sent.',
  )
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: true,
  auth: {
    user,
    pass,
  },
})

export async function sendWaitlistWelcomeEmail(entry: WaitlistSignup) {
  if (!user || !pass) return

  const name = entry.name?.trim() || 'there'

  const subject = "You're on the Tech Drops early access list"

  const html = `
    <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #111827; line-height: 1.5;">
      <p>Hey ${name},</p>

      <p>Thanks for joining the Tech Drops early access list.</p>

      <p>Here’s what will happen next:</p>

      <ul>
        <li>You’ll start getting one short email that explains a tech concept in plain English.</li>
        <li>No code, no jargon – just enough understanding to hold your own in conversations with devs, CTOs, vendors and clients.</li>
        <li>We’ll use your answers (role, comfort level, interests) to pick topics that make sense for your world.</li>
      </ul>

      <p>You don’t need to do anything else for now – just watch your inbox.</p>

      <p style="margin-top: 16px;">Talk soon,</p>
      <p>Tech Drops</p>
    </div>
  `

  await transporter.sendMail({
    from,
    to: entry.email,
    subject,
    html,
  })
}
