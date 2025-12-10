'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError(null)

    const formData = new FormData(e.currentTarget)

    const payload = {
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      role: formData.get('role')?.toString().trim() || '',
      interests: formData.get('interests')?.toString().trim() || '',
      experienceLevel:
        formData.get('experienceLevel')?.toString().trim() || '',
    }

    if (!payload.email) {
      setStatus('error')
      setError('Email is required')
      return
    }

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(data?.message || 'Failed to join waitlist')
      }

      setStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch (err: any) {
      console.error('Waitlist submit error:', err)
      setStatus('error')
      setError(err?.message || 'Something went wrong. Please try again.')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex w-full max-w-xl flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 backdrop-blur"
    >
      {/* Intro text */}
      <div>
        <p className="text-xs font-medium text-zinc-200">
          Join the early access list
        </p>
        <p className="mt-1 text-[11px] text-zinc-500">
          Tell us who you are so we can send drops that actually match your
          world.
        </p>
      </div>

      {/* Name + email */}
      <div className="grid gap-3 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-[11px] font-medium text-zinc-300"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="rounded-xl border border-zinc-800 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-amber-400"
            placeholder="Optional"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-[11px] font-medium text-zinc-300"
          >
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-xl border border-zinc-800 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-amber-400"
            placeholder="We’ll send your drops here"
          />
        </div>
      </div>

      {/* Role + tech comfort */}
      <div className="grid gap-3 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="role"
            className="text-[11px] font-medium text-zinc-300"
          >
            How do you work with tech today?
          </label>
          <select
            id="role"
            name="role"
            className="rounded-xl border border-zinc-800 bg-black/60 px-3 py-2 text-xs md:text-sm text-zinc-100 outline-none focus:border-amber-400"
          >
            <option value="">Select one</option>
            <option value="I'm a founder/entrepreneur working with tech teams">
              I&apos;m a founder/entrepreneur working with tech teams
            </option>
            <option value="I'm in product/project management">
              I&apos;m in product/project management
            </option>
            <option value="I work in marketing/sales at a tech company">
              I work in marketing/sales at a tech company
            </option>
            <option value="I manage or work with technical teams">
              I manage or work with technical teams
            </option>
            <option value="I'm just curious and want to understand tech better">
              I&apos;m just curious and want to understand tech better
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="experienceLevel"
            className="text-[11px] font-medium text-zinc-300"
          >
            Your tech comfort level
          </label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            className="rounded-xl border border-zinc-800 bg-black/60 px-3 py-2 text-xs md:text-sm text-zinc-100 outline-none focus:border-amber-400"
          >
            <option value="">Select one</option>
            <option value="Complete beginner - explain like I'm 5">
              Complete beginner – explain like I&apos;m 5
            </option>
            <option value="I know some basics but get confused often">
              I know some basics but get confused often
            </option>
            <option value="I understand more than most non-tech people">
              I understand more than most non-tech people
            </option>
          </select>
        </div>
      </div>

      {/* Interests */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="interests"
          className="text-[11px] font-medium text-zinc-300"
        >
          What do you most want to understand?
        </label>
        <textarea
          id="interests"
          name="interests"
          rows={2}
          className="w-full rounded-xl border border-zinc-800 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-amber-400"
          placeholder="e.g. APIs, the cloud, AI, how my dev team works, why software takes so long…"
        />
      </div>

      {/* Button + status */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 w-full rounded-xl bg-amber-400 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-amber-500/30 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Saving your spot…' : 'Save my spot'}
      </button>

      <p className="text-xs text-zinc-500">
        Be among the first to get Tech Drops when we launch. No spam, ever.
      </p>

      {status === 'success' && (
        <p className="text-xs font-medium text-emerald-400">
          You&apos;re in. We&apos;ll email you when Tech Drops launches and send
          your first plain-English drop.
        </p>
      )}

      {status === 'error' && error && (
        <p className="text-xs font-medium text-red-400">{error}</p>
      )}
    </form>
  )
}
