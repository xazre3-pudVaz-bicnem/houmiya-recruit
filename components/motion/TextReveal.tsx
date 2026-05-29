'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  text: string
  className?: string
  delay?: number
  duration?: number
  /** 'words' | 'chars' | 'lines' */
  mode?: 'words' | 'chars' | 'lines'
  once?: boolean
  as?: keyof JSX.IntrinsicElements
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  duration = 0.7,
  mode = 'words',
  once = true,
  as: Tag = 'span',
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once, margin: '-5% 0px' })

  const words = text.split(' ')
  const chars = text.split('')

  if (mode === 'chars') {
    return (
      // @ts-ignore
      <Tag ref={ref} className={`inline overflow-hidden ${className}`} aria-label={text}>
        {chars.map((char, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '110%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{
                delay: delay + i * 0.025,
                duration,
                ease,
              }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          </span>
        ))}
      </Tag>
    )
  }

  if (mode === 'lines') {
    const lines = text.split('\n')
    return (
      // @ts-ignore
      <Tag ref={ref} className={`block ${className}`} aria-label={text}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '100%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{ delay: delay + i * 0.12, duration, ease }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    )
  }

  // words (default)
  return (
    // @ts-ignore
    <Tag ref={ref} className={`overflow-hidden ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0, rotateX: 20 }}
            animate={inView ? { y: 0, opacity: 1, rotateX: 0 } : { y: '110%', opacity: 0, rotateX: 20 }}
            transition={{
              delay: delay + i * 0.08,
              duration,
              ease,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
