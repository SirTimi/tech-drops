import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'

async function getWaitlist() {
  const entries = await prisma.waitlistSignup.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return entries
}

export default async function WaitlistAdminPage() {
  const entries = await getWaitlist()

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Tech Drops Waitlist
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              Total signups:{' '}
              <span className="font-medium text-amber-300">
                {entries.length}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/api/admin/waitlist/export"
              className="rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300 hover:bg-amber-400/20"
            >
              Export as CSV
            </a>
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[11px] font-medium text-zinc-300">
              Internal view
            </span>
          </div>
        </header>

        {entries.length === 0 ? (
          <p className="text-sm text-zinc-500">
            No one has joined the waitlist yet.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950/60">
            <table className="min-w-full text-left text-xs md:text-sm">
              <thead className="border-b border-zinc-800 bg-zinc-950/80">
                <tr>
                  <th className="px-4 py-3 font-medium text-zinc-400">
                    Date
                  </th>
                  <th className="px-4 py-3 font-medium text-zinc-400">
                    Name / Email
                  </th>
                  <th className="px-4 py-3 font-medium text-zinc-400">
                    Role
                  </th>
                  <th className="px-4 py-3 font-medium text-zinc-400">
                    Level
                  </th>
                  <th className="px-4 py-3 font-medium text-zinc-400">
                    Interests
                  </th>
                  <th className="px-4 py-3 font-medium text-zinc-400">
                    Email status
                  </th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr
                    key={entry.id}
                    className="border-t border-zinc-900/60 hover:bg-zinc-900/40"
                  >
                    <td className="px-4 py-3 align-top text-zinc-500">
                      {format(entry.createdAt, 'yyyy-MM-dd HH:mm')}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-zinc-100">
                          {entry.name || '—'}
                        </span>
                        <span className="text-xs text-zinc-400">
                          {entry.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 align-top text-xs text-zinc-300">
                      {entry.role || '—'}
                    </td>
                    <td className="px-4 py-3 align-top text-xs text-zinc-300 capitalize">
                      {entry.experienceLevel || '—'}
                    </td>
                    <td className="px-4 py-3 align-top text-xs text-zinc-300 max-w-xs">
                      {entry.interests || '—'}
                    </td>
                    <td className="px-4 py-3 align-top text-xs">
                      {entry.welcomeEmailSentAt ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Sent
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full border border-zinc-600 bg-zinc-900 px-2 py-0.5 text-[11px] font-medium text-zinc-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                          Not sent
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-4 text-xs text-zinc-500">
          Tip: keep this route private for now. In Phase 1 we&apos;ll wire
          proper auth and role-based access.
        </p>
      </div>
    </main>
  )
}
