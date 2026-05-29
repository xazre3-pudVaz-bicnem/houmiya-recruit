'use client'
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Props {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  decimals?: number
}

export default function CountUp({ target, suffix = '', prefix = '', duration = 1.8, className = '', decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10% 0px' })
  const value = useMotionValue(0)
  const spring = useSpring(value, { damping: 30, stiffness: 80, duration: duration * 1000 })

  useEffect(() => {
    if (inView) value.set(target)
  }, [inView, target, value])

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {prefix}
      <motion.span>
        {spring.get().toFixed(decimals)}
      </motion.span>
      <CountDisplay spring={spring} suffix={suffix} decimals={decimals} />
    </motion.span>
  )
}

function CountDisplay({ spring, suffix, decimals }: { spring: ReturnType<typeof useSpring>, suffix: string, decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = v.toFixed(decimals) + suffix
      }
    })
    return unsub
  }, [spring, suffix, decimals])

  return <span ref={ref}>{`0${suffix}`}</span>
}
