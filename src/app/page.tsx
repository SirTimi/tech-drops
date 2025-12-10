import { WaitlistForm } from '@/components/waitlist-form'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-amber-500/10 via-black to-black" />

      {/* Navbar */}
      <header className="border-b border-zinc-900/80 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/tech-drops-logo.png"
              alt="Tech Drops logo"
              width={50}
              height={50}
              className="rounded-lg"
              priority
            />
            <span className="text-sm font-semibold tracking-wide">
              Tech Drops
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-xs text-zinc-400 md:flex">
            <a href="#how-it-works" className="hover:text-amber-300">
              How it works
            </a>
            <a href="#who-its-for" className="hover:text-amber-300">
              Who it&apos;s for
            </a>
            <a href="#faq" className="hover:text-amber-300">
              FAQ
            </a>
            <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-[11px] font-medium text-amber-300">
              Pre-launch waitlist open
            </span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-zinc-900/60">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center md:py-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] text-amber-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              For founders, PMs, marketers & business people
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl lg:text-5xl">
              Understand tech without
              <span className="block text-amber-300">
                learning to code.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-zinc-400 md:text-base">
              Tech Drops sends you one tech concept explained in plain English
              to your inbox every day. No jargon. No code. Just clear
              understanding in 5 minutes, so you can stop nodding along in tech
              conversations and actually know what&apos;s going on.
            </p>

            {/* Waitlist form */}
            <WaitlistForm />

            <div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>• 3–5 minute read</span>
              <span>• Written for non-technical people</span>
              <span>• One email at 8am in your timezone</span>
            </div>
          </div>

          {/* Right side: sample card preview */}
          <div className="flex-1" id="sample-drop">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-xl shadow-amber-500/10">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-400">
                Sample Tech Drop
              </p>
              <h2 className="mt-3 text-lg font-semibold text-zinc-50">
                What your dev team means when they say &quot;the API is down&quot;
              </h2>
              <p className="mt-2 text-xs text-zinc-400">
                You&apos;re in a meeting and someone says, &quot;The API is
                down, that&apos;s why the app is broken.&quot; Everyone nods.
                You smile… but you&apos;re not fully sure what that actually
                means.
              </p>

              <ul className="mt-3 space-y-2 text-xs text-zinc-400">
                <li>
                  <span className="font-medium text-zinc-200">
                    Why this matters:
                  </span>{' '}
                  When the API is down, features your customers rely on simply
                  stop working. Understanding this helps you make better
                  decisions about timelines, communication and expectations.
                </li>
                <li>
                  <span className="font-medium text-zinc-200">
                    What it is:
                  </span>{' '}
                  Think of an API as a waiter in a restaurant. Your app (the
                  customer) tells the API (the waiter) what it wants, and the
                  API goes to the kitchen (the server) to bring back the food
                  (the data). If the waiter can&apos;t work, nothing gets
                  served.
                </li>
                <li>
                  <span className="font-medium text-zinc-200">
                    For you as a founder/PM:
                  </span>{' '}
                  When you hear &quot;the API is down,&quot; you know it&apos;s
                  not &quot;the devs are lazy&quot; – it&apos;s an actual
                  technical outage. The right response is: &quot;What&apos;s
                  the impact on users, and how do we communicate this
                  clearly?&quot;
                </li>
                <li>
                  <span className="font-medium text-zinc-200">
                    Remember this:
                  </span>{' '}
                  The API is the messenger between parts of your system. If the
                  messenger can&apos;t move, everything that depends on it
                  pauses.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section
        id="who-its-for"
        className="border-b border-zinc-900/60 bg-zinc-950/40"
      >
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            Tech Drops is for you if…
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            You work around technology but you&apos;re not a developer – and
            you&apos;re tired of feeling lost when the conversation gets
            technical.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• You&apos;re a non-technical founder working with devs.</li>
              <li>
                • You&apos;re in product or project management coming from a
                non-tech background.
              </li>
              <li>
                • You&apos;re in marketing or sales at a tech company and want
                to actually understand what you&apos;re selling.
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                • You manage or collaborate with technical teams and don&apos;t
                want to look confused in meetings.
              </li>
              <li>
                • You&apos;ve Googled terms like &quot;API&quot; or
                &quot;cloud&quot; and ended up more confused.
              </li>
              <li>
                • You want practical understanding you can use in real
                conversations, not a computer science degree.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-b border-zinc-900/60 bg-black/60"
      >
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            How Tech Drops works
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Simple, email-first learning built for busy non-technical
            professionals.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-black/70 p-4">
              <p className="text-xs font-medium text-amber-400">1. Tell us who you are</p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                30 seconds of context
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                On the waitlist, you tell us your role, how comfortable you are
                with tech, and what you most want to understand. That&apos;s it
                – no complicated onboarding.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-black/70 p-4">
              <p className="text-xs font-medium text-amber-400">2. Get one drop a day</p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                Plain-English explanation
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                Each morning at 8am, you get one short email breaking down a
                tech concept in everyday language, with analogies and real
                examples that make sense in your world.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-black/70 p-4">
              <p className="text-xs font-medium text-amber-400">3. Use it in real life</p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                For meetings, decisions & emails
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                Every drop ends with &quot;why this matters to you&quot; so you
                can immediately apply it in conversations with devs, CTOs,
                vendors, clients, and your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-zinc-900/60">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            FAQ
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                Do I need to know how to code?
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                No. Tech Drops is specifically for people who don&apos;t code
                and don&apos;t plan to – but still need to understand tech well
                enough to make smart decisions and have confident conversations.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                How many emails will I get?
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                One per day on weekdays at 8am in your timezone. No spam, no
                random promotions, no &quot;urgent&quot; blasts. Just one clear
                drop.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                Who is Tech Drops for?
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                Non-technical founders, product and project managers, marketers,
                sales and business professionals, small business owners, and
                curious learners who want to understand tech without doing a
                bootcamp.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                Is it free?
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                Yes. The daily drops and basic dashboard will be free. We&apos;ll
                add optional paid features later for teams and deeper learning,
                but the core habit stays free.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                When are you launching?
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                We&apos;re currently building the MVP and inviting a small group
                from the waitlist as early users. Join the list above and
                you&apos;ll be among the first to get access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900/80 bg-black/80">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Tech Drops. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-300">
              X (Twitter)
            </a>
            <a href="#" className="hover:text-amber-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-amber-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
