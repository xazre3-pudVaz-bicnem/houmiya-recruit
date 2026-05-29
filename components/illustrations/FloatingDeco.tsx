'use client'

import type { CSSProperties } from 'react'

interface DecoProps {
  className?: string
  style?: CSSProperties
}

/* Floating background decorations - wrench, bolt, drop, gear etc. */
export function FloatingWrench({ className, style }: DecoProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M56 14 C60 18 62 24 60 30 L38 52 L42 56 L36 62 L28 54 L32 48 L36 52 L56 32 C50 30 44 28 42 22 C40 14 46 8 54 8 C56 8 58 10 56 14Z"
        fill="currentColor"
        opacity="0.7"
      />
      <circle cx="56" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.7" />
    </svg>
  )
}

export function FloatingBolt({ className, style }: DecoProps) {
  return (
    <svg viewBox="0 0 50 80" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M30 4 L14 42 L24 42 L20 76 L42 34 L28 34 Z" fill="currentColor" opacity="0.75" />
    </svg>
  )
}

export function FloatingDrop({ className, style }: DecoProps) {
  return (
    <svg viewBox="0 0 60 80" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M30 4 C30 4 6 36 6 52 C6 66 16 76 30 76 C44 76 54 66 54 52 C54 36 30 4 30 4Z" fill="currentColor" opacity="0.7" />
      <ellipse cx="22" cy="44" rx="5" ry="8" fill="white" opacity="0.3" transform="rotate(-20 22 44)" />
    </svg>
  )
}

export function FloatingGear({ className, style }: DecoProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M32 4 L36 14 C37.5 14.5 39 15 40 16 L50 12 L58 20 L54 30 C55 31.5 55.5 33 56 34.5 L66 38 L66 48 L56 52 C55.5 53.5 54.5 55 53.5 56.5 L57.5 67 L49.5 75 L39 71 C37.5 71.5 36 72 34.5 72 L30.5 82 H20.5 L16.5 72 C15 71.5 13.5 71 12 70 L1.5 74 L-6.5 66 L-2.5 55.5 C-3.5 54 -4 52.5 -4.5 51 L-14.5 47 V37 L-4.5 33 C-4 31.5 -3.5 30 -2.5 28.5 L-6.5 18 L1.5 10 L12 14 C13.5 13 15 12.5 16.5 12 L20.5 2 Z"
        fill="currentColor"
        opacity="0.65"
        transform="translate(20 0) scale(0.75)"
      />
      <circle cx="40" cy="40" r="12" fill="none" stroke="white" strokeWidth="3" opacity="0.3" />
    </svg>
  )
}

export function FloatingHat({ className, style }: DecoProps) {
  return (
    <svg viewBox="0 0 80 60" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M14 42 C14 28 36 14 40 12 C44 14 66 28 66 42" fill="currentColor" opacity="0.7" />
      <rect x="6" y="40" width="68" height="14" rx="7" fill="currentColor" opacity="0.7" />
      <rect x="22" y="40" width="36" height="6" rx="3" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function FloatingStar({ className, style }: DecoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M20 2 L23 16 L36 10 L26 20 L36 30 L23 24 L20 38 L17 24 L4 30 L14 20 L4 10 L17 16 Z" fill="currentColor" opacity="0.75" />
    </svg>
  )
}

export function FloatingCircle({ className, style }: DecoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} style={style} aria-hidden="true">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <circle cx="20" cy="20" r="10" fill="currentColor" opacity="0.25" />
    </svg>
  )
}
