import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, role } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { ok: false, message: 'Email is required' },
        { status: 400 },
      )
    }

    // TODO: plug into real storage (Postgres, Airtable, Notion, etc).
    // For now we just log it so we can see it in server logs.
    console.log('New waitlist signup:', { name, email, role })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Waitlist error', err)
    return NextResponse.json(
      { ok: false, message: 'Server error' },
      { status: 500 },
    )
  }
}
