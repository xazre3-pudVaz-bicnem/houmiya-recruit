'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const COPY_LINES = [
  { text: '未経験でもいい。', color: 'rgba(255,255,255,0.95)' },
  { text: '続ける覚悟があれば、', color: 'rgba(255,255,255,0.95)' },
  { text: '技術は身につく。', color: '#f97316' },
]

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)

  const contentInView = useInView(contentRef as React.RefObject<Element>, { once: true, margin: '-10% 0px' })
  const dividerInView = useInView(dividerRef as React.RefObject<Element>, { once: true })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 sm:py-40"
      style={{ background: '#0f172a' }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/aircon-installation.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(15,23,42,0.92)' }} />
      </div>

      <div className="noise-overlay" />

      <div
        className="absolute left-0 top-0 bottom-0 pointer-events-none"
        style={{ width: 4, background: '#f97316', zIndex: 1 }}
      />

      <div
        className="absolute pointer-events-none select-none font-black"
        style={{
          right: '2%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(200px, 28vw, 400px)',
          color: 'rgba(255,255,255,0.018)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          zIndex: 0,
        }}
        aria-hidden
      >
        未
      </div>

      <div ref={contentRef} className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="mb-10">
          <span className="section-label-inv">About Us</span>
        </div>

        <div style={{ lineHeight: 1.06 }}>
          {COPY_LINES.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                className="block font-black"
                style={{
                  fontSize: 'clamp(36px, 6.5vw, 88px)',
                  letterSpacing: '-0.03em',
                  color: line.color,
                }}
                initial={{ y: '110%' }}
                animate={contentInView ? { y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.9, ease }}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </div>

        <div ref={dividerRef} className="overflow-hidden my-10">
          <motion.div
            className="h-px"
            style={{ background: 'rgba(255,255,255,0.08)', transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={dividerInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.9, ease }}
          />
        </div>

        <motion.div
          className="text-base sm:text-lg leading-[2]"
          style={{ color: 'rgba(255,255,255,0.55)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.9, ease }}
        >
          <p>道具の名前から、現場での動き方まで。</p>
          <p>先輩と一緒に覚えながら、少しずつできる仕事を増やしていけます。</p>
        </motion.div>
      </div>
    </section>
  )
}
