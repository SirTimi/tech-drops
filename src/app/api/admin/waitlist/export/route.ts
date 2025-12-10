// src/app/api/admin/waitlist/export/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const entries = await prisma.waitlistSignup.findMany({
    orderBy: { createdAt: 'desc' },
  })

  const headers = [
    'id',
    'name',
    'email',
    'role',
    'experienceLevel',
    'interests',
    'createdAt',
  ]

  const escape = (value: unknown) => {
    if (value === null || value === undefined) return ''
    const str = String(value)
    if (str.includes('"') || str.includes(',') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`
    }
    return str
  }

  const rows = entries.map((e) =>
    [
      e.id,
      e.name,
      e.email,
      e.role,
      e.experienceLevel,
      e.interests,
      e.createdAt.toISOString(),
    ]
      .map(escape)
      .join(','),
  )

  const csv = [headers.join(','), ...rows].join('\n')

  return new NextResponse(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="tech-drops-waitlist.csv"',
    },
  })
}
