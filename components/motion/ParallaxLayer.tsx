'use client'
import { useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'

interface Props {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxLayer({ children, speed = 0.3, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}

/* Lightweight inline parallax (no wrapper div) */
export function useParallax(speed = 0.3): [React.RefObject<HTMLDivElement>, MotionValue<string>] {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 120}px`, `${speed * 120}px`])
  return [ref, y]
}
