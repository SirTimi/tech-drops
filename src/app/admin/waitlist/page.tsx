import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'
import { redirect } from 'next/navigation'

type WaitlistAdminPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function WaitlistAdminPage(props: WaitlistAdminPageProps) {
  const searchParams = await props.searchParams
  const key = typeof searchParams.key === 'string' ? searchParams.key : undefined

  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    // Basic gate – not production-grade auth, just early internal access
    return (
      <main className="min-h-screen bg-black text-zinc-100">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-20">
          <h1 className="text-xl font-semibold text-zinc-50">Unauthorized</h1>
          <p className="mt-2 text-sm text-zinc-400">
            You need a valid admin key to view this page.
          </p>
        </div>
      </main>
    )
  }

  const signups = await prisma.waitlistSignup.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Tech Drops – Waitlist
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Total signups:{' '}
              <span className="font-mono text-amber-300">{signups.length}</span>
            </p>
          </div>
          <p className="text-xs text-zinc-500">
            Accessed with admin key. Early internal view only.
          </p>
        </header>

        {signups.length === 0 ? (
          <p className="text-sm text-zinc-400">
            No one has joined the waitlist yet.
          </p>
        ) : (
          <div className="overflow-auto rounded-2xl border border-zinc-800 bg-zinc-950/70">
            <table className="min-w-full text-left text-xs">
              <thead className="bg-zinc-900/80 text-[11px] uppercase tracking-wide text-zinc-400">
                <tr>
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">Email</th>
                  <th className="px-3 py-2">Role</th>
                  <th className="px-3 py-2">Level</th>
                  <th className="px-3 py-2">Interests</th>
                  <th className="px-3 py-2">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/80">
                {signups.map((s) => (
                  <tr key={s.id} className="hover:bg-zinc-900/40">
                    <td className="px-3 py-2 text-xs text-zinc-100">
                      {s.name || '—'}
                    </td>
                    <td className="px-3 py-2 text-xs font-mono text-amber-200">
                      {s.email}
                    </td>
                    <td className="px-3 py-2 text-xs text-zinc-200">
                      {s.role || '—'}
                    </td>
                    <td className="px-3 py-2 text-xs text-zinc-200">
                      {s.experienceLevel || '—'}
                    </td>
                    <td className="px-3 py-2 text-xs text-zinc-300 max-w-xs">
                      <div className="line-clamp-2">
                        {s.interests || '—'}
                      </div>
                    </td>
                    <td className="px-3 py-2 text-[11px] text-zinc-400 whitespace-nowrap">
                      {format(s.createdAt, 'yyyy-MM-dd HH:mm')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
