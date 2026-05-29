'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const STATS = [
  { value: '100', unit: '%', label: '未経験歓迎', sub: '経験・資格は一切不問', accent: '#f97316' },
  { value: '20', unit: '代', label: '若手スタッフ活躍中', sub: '20代中心のチーム', accent: '#0ea5e9' },
  { value: '3', unit: '職種', label: 'エアコン・給湯器・電気', sub: '専門技術を習得できる', accent: '#10b981' },
  { value: '神奈川', unit: '県全域', label: '現場対応エリア', sub: '厚木拠点・神奈川全域', accent: '#8b5cf6' },
]

function StatItem({ stat }: { stat: typeof STATS[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10% 0px' })

  return (
    <div
      ref={ref}
      className="relative flex flex-col justify-between px-6 sm:px-10 py-12 sm:py-16 border-r border-b lg:border-b-0 border-slate-100 last:border-r-0"
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: 3, background: stat.accent }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8, ease }}
      >
        <div
          className="font-black leading-none flex items-end gap-1"
          style={{ letterSpacing: '-0.04em' }}
        >
          <span style={{ fontSize: 'clamp(60px, 9vw, 100px)', color: '#1e293b' }}>
            {stat.value}
          </span>
          <span
            className="font-black text-2xl sm:text-3xl pb-2"
            style={{ color: stat.accent }}
          >
            {stat.unit}
          </span>
        </div>

        <p className="font-black text-slate-800 text-base sm:text-lg tracking-wide mt-3">
          {stat.label}
        </p>
        <p className="text-slate-400 text-sm mt-1">{stat.sub}</p>
      </motion.div>
    </div>
  )
}

export default function StatsSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef as React.RefObject<Element>, { once: true })

  return (
    <section className="bg-slate-50 py-20 sm:py-28 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div ref={headerRef} className="mb-12">
          <div className="mb-4">
            <span className="section-label">Numbers</span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-black text-slate-900"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.03em' }}
              initial={{ y: '100%' }}
              animate={headerInView ? { y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.85, ease }}
            >
              数字で見る宝宮設備
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200 bg-white">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
