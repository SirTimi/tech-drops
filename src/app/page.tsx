import { WaitlistForm } from '@/components/waitlist-form'
import Image from 'next/image';

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
            <a href="#sample-drop" className="hover:text-amber-300">
              Sample drop
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
              Daily tech signal for anyone
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl lg:text-5xl">
              One high-signal tech drop,
              <span className="block text-amber-300">every morning.</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-zinc-400 md:text-base">
              Tech Drops scans the noise, picks one thing that actually matters
              in tech, AI or software, and delivers a short breakdown with
              clear action steps. Built for devs, founders and product people
              who want to stay sharp without doomscrolling.
            </p>

            <WaitlistForm />

            <div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>• 5 minute read</span>
              <span>• Tailored to your interests and level</span>
              <span>• Delivered once per day at 8am</span>
            </div>
          </div>

          {/* Right side: sample card preview */}
          <div className="flex-1">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-xl shadow-amber-500/10">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-400">
                Sample Tech Drop
              </p>
              <h2 className="mt-3 text-lg font-semibold text-zinc-50">
                Why everyone is talking about vector databases again
              </h2>
              <p className="mt-2 text-xs text-zinc-400">
                Vector databases store information as embeddings. This lets you
                build search and recommendation systems that understand meaning
                instead of exact keywords. With the latest wave of AI tools,
                they are quietly becoming part of the default stack.
              </p>
              <ul className="mt-3 space-y-2 text-xs text-zinc-400">
                <li>
                  <span className="font-medium text-zinc-200">
                    How it works:
                  </span>{' '}
                  Text is converted into high-dimensional vectors and stored in
                  a database that can perform fast similarity search.
                </li>
                <li>
                  <span className="font-medium text-zinc-200">
                    Why it matters:
                  </span>{' '}
                  Better search, personalization and AI features in your app
                  without rewriting everything.
                </li>
                <li>
                  <span className="font-medium text-zinc-200">
                    Action step:
                  </span>{' '}
                  If you are a dev, pick one provider (like pgvector on
                  Postgres) and ship a small feature using it.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-b border-zinc-900/60 bg-zinc-950/40"
      >
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            How Tech Drops works
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Behind the scenes, Tech Drops monitors trusted sources, filters
            them through AI and sends you one focused breakdown per day.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-black/60 p-4">
              <p className="text-xs font-medium text-amber-400">1. Scan</p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                Track what actually moves the needle
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                We watch places like Hacker News, GitHub Trending and curated
                blogs so you do not have to live on X all day.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-black/60 p-4">
              <p className="text-xs font-medium text-amber-400">2. Distill</p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                AI-assisted breakdowns, human-tuned
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                We use AI to summarise and structure the signal, then apply
                constraints so each drop is clear, concrete and under 5
                minutes to read.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-black/60 p-4">
              <p className="text-xs font-medium text-amber-400">3. Deliver</p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                One email at 8am in your timezone
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                You get one drop per day plus a simple dashboard where you can
                revisit past drops, search and bookmark what matters.
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
                How many emails will I get?
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                One per day on weekdays at 8am in your timezone. No spam, no
                random promotions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                Who is Tech Drops for?
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                Anyone who cares about tech, AI, software, etc but does not want to scroll
                timelines all day.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                Is it free?
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                Yes, It's completely free for everyone
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                When are you launching?
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                We are currently building the MVP and onboarding a small
                waitlist of early users first. Join the list above and we will
                keep you in the loop.
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
