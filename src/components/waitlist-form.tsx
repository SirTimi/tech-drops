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

      if (!res.ok) {
        throw new Error('Failed to join waitlist')
      }

      setStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex w-full max-w-xl flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 backdrop-blur"
    >
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          name="name"
          type="text"
          placeholder="Your name (optional)"
          className="flex-1 rounded-xl border border-zinc-800 bg-black/60 px-4 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-amber-400"
        />
        <input
          name="email"
          type="email"
          placeholder="Work email"
          required
          className="flex-1 rounded-xl border border-zinc-800 bg-black/60 px-4 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-amber-400"
        />
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <select
          name="role"
          className="flex-1 rounded-xl border border-zinc-800 bg-black/60 px-4 py-2 text-sm text-zinc-100 outline-none focus:border-amber-400"
        >
          <option value="">I am a...</option>
          <option value="developer">Developer</option>
          <option value="founder">Founder</option>
          <option value="designer">Designer</option>
          <option value="product">Product person</option>
          <option value="other">Other</option>
        </select>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 rounded-xl bg-amber-400 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-amber-500/30 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Joining waitlist…' : 'Join the waitlist'}
        </button>
      </div>

      <p className="text-xs text-zinc-500">
        No spam. One curated tech drop per day when we go live.
      </p>

      {status === 'success' && (
        <p className="text-xs font-medium text-emerald-400">
          You’re in. We’ll email you when Tech Drops launches.
        </p>
      )}

      {status === 'error' && error && (
        <p className="text-xs font-medium text-red-400">{error}</p>
      )}
    </form>
  )
}
