'use client'
import React, { useEffect, useState } from 'react'

const DURATION = 60
const CIRC = 175.93

function Clock({ className = '' }: { className?: string }) {
  const [left, setLeft] = useState(DURATION)

  useEffect(() => {
    const id = setInterval(() => {
      setLeft((prev) => (prev > 0 ? prev - 1 : DURATION))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const offset = CIRC * (1 - left / DURATION)
  const formatted = `0:${left.toString().padStart(2, '0')}`

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Every story runs 60 seconds">
      <svg viewBox="0 0 64 64" aria-hidden className="w-16 h-16 -rotate-90">
        <circle cx="32" cy="32" r="28" fill="none" strokeWidth="5" stroke="rgba(255,255,255,0.2)" />
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          strokeWidth="5"
          stroke="var(--volt)"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      <div>
        <div className="font-heading text-2xl tabular-nums leading-none">{formatted}</div>
        <div className="text-[0.75rem] uppercase tracking-widest opacity-75 mt-1">Per story. No more.</div>
      </div>
    </div>
  )
}

export default Clock
