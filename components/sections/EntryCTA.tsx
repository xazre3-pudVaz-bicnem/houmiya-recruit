'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function EntryCTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10% 0px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineW = useTransform(scrollYProgress, [0.15, 0.6], ['0%', '100%'])
  const bgY   = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: '#0f172a', minHeight: '80vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Subtle grid */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute inset-[-5%]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Orange glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-10 py-28 sm:py-36">
        {/* Label */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label-inv section-label">Entry</span>
        </motion.div>

        {/* Headline */}
        <div className="mb-12" style={{ lineHeight: 1.04 }}>
          {[
            { text: '未経験から、', orange: false, delay: 0 },
            { text: '手に職を持つ。', orange: false, delay: 0.1 },
            { text: '宝宮設備で、始めよう。', orange: true, delay: 0.22 },
          ].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                className={`font-black tracking-tighter block ${line.orange ? 'text-gradient-orange' : 'text-white'}`}
                style={{ fontSize: 'clamp(34px, 6.5vw, 84px)' }}
                initial={{ y: '110%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.1 + line.delay, duration: 0.95, ease }}
              >
                {line.text}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative h-px mb-12 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <motion.div
            className="absolute left-0 top-0 h-full"
            style={{ width: lineW, background: 'linear-gradient(90deg, #f97316, rgba(249,115,22,0.15))' }}
          />
        </div>

        {/* Body + CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.85, ease }}
          >
            <p className="text-white/40 text-base sm:text-lg leading-[2] mb-7">
              経験ゼロでも、やる気があれば大丈夫。<br />
              宝宮設備では、あなたの成長をチーム全員で支えます。
            </p>
            <div className="flex flex-wrap gap-2.5">
              {['未経験OK', '20代活躍中', '社会保険完備', '車両貸出'].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="text-[10px] font-bold px-3.5 py-1.5 border"
                  style={{ borderColor: 'rgba(249,115,22,0.25)', color: 'rgba(249,115,22,0.65)' }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.65 + i * 0.07, duration: 0.5, ease }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.85, ease }}
          >
            <Link
              href="/entry"
              className="group relative flex flex-col items-center justify-center overflow-hidden"
              style={{
                width: 188,
                height: 188,
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #f97316 0%, #ea6600 100%)',
                flexShrink: 0,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <div className="absolute inset-3 rounded-full border border-white/20 pointer-events-none" />
              <div className="relative z-10 text-center pointer-events-none">
                <p className="text-[9px] font-black tracking-[0.26em] uppercase text-white/60 mb-1.5">Apply Now</p>
                <p className="text-xl font-black text-white leading-tight">
                  エントリー<br />
                  <span className="text-sm font-bold text-white/70">する</span>
                </p>
                <p className="text-[9px] text-white/45 mt-2">無料 · 1分で完了</p>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Sub links */}
        <motion.div
          className="mt-16 pt-8 flex flex-wrap gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.85, duration: 0.8 }}
        >
          {[
            { href: '/recruit', label: '募集要項' },
            { href: '/staff',   label: 'スタッフの声' },
            { href: '/day',     label: '1日の流れ' },
            { href: '/welfare', label: '福利厚生' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[11px] text-white/22 hover:text-white/55 transition-colors tracking-widest uppercase"
            >
              {label} →
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
