'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const JOBS = [
  {
    num: '01',
    en: 'Air Conditioning',
    title: 'エアコン工事',
    tagline: '夏の繁忙期が、最速の成長機会。',
    body: '家庭用・業務用エアコンの取付・交換・撤去。配管から試運転まで一貫対応。夏季の繁忙期を経験すれば、短期間で圧倒的な現場スキルが身につく。',
    href: '/jobs/aircon',
    linkLabel: 'エアコン工事の詳細を見る',
    accent: '#0ea5e9',
    photo: '/images/aircon-v2.jpg',
    photoAlt: 'エアコン工事の現場',
  },
  {
    num: '02',
    en: 'Water Heater',
    title: '給湯器交換',
    tagline: 'ガス・水道・電気。複合スキルが身につく。',
    body: '老朽化した給湯器の撤去・新規取付。ガス・水道・電気が絡む複合工事で幅広いスキルが身につく。完工後にお客様から直接感謝される、達成感の大きい仕事。',
    href: '/jobs/water-heater',
    linkLabel: '給湯器交換の詳細を見る',
    accent: '#f97316',
    photo: '/images/water-heater-v2.jpg',
    photoAlt: '給湯器交換工事',
  },
  {
    num: '03',
    en: 'Electrical Work',
    title: '電気工事',
    tagline: '資格が、一生の財産になる。',
    body: '照明取付・配線・分電盤交換まで電気全般を担当。第二種電気工事士の取得を会社が全額サポート。資格は技術の証明であり、将来の可能性を広げる。',
    href: '/jobs/electrical',
    linkLabel: '電気工事の詳細を見る',
    accent: '#f59e0b',
    photo: '/images/electrical-v2.jpg',
    photoAlt: '電気工事の現場',
  },
]

function JobRow({ job, index }: { job: typeof JOBS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8% 0px' })
  const isOdd = index % 2 === 1

  return (
    <div
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden', minHeight: 'max(640px, 72vh)' }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.4, ease }}
      >
        <Image
          src={job.photo}
          alt={job.photoAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background: isOdd
            ? `linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.15) 100%)`
            : `linear-gradient(to left, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.15) 100%)`,
        }}
      />

      <div
        className="relative z-10 flex items-center"
        style={{ minHeight: 'max(640px, 72vh)' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <motion.div
            className="max-w-xl"
            style={{ marginLeft: isOdd ? 0 : 'auto' }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease }}
          >
            <div
              className="font-black select-none pointer-events-none"
              style={{
                fontSize: 'clamp(80px, 14vw, 180px)',
                color: 'rgba(255,255,255,0.05)',
                letterSpacing: '-0.05em',
                lineHeight: 0.9,
                marginBottom: -16,
              }}
              aria-hidden
            >
              {job.num}
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-6" style={{ background: job.accent }} />
              <span
                className="text-[10px] font-black tracking-[0.28em] uppercase"
                style={{ color: job.accent }}
              >
                {job.en}
              </span>
            </div>

            <h3
              className="font-black text-white"
              style={{
                fontSize: 'clamp(38px, 5.5vw, 72px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.0,
                marginBottom: 12,
              }}
            >
              {job.title}
            </h3>

            <p
              className="font-bold text-xl sm:text-2xl mb-5"
              style={{ color: job.accent }}
            >
              {job.tagline}
            </p>

            <p
              className="text-base sm:text-lg leading-[1.9] mb-8"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              {job.body}
            </p>

            <Link
              href={job.href}
              className="inline-flex items-center gap-3 text-[11px] font-black tracking-[0.2em] uppercase group"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              {job.linkLabel}
              <span
                className="block h-px transition-all duration-300 group-hover:w-10"
                style={{ width: 24, background: 'rgba(255,255,255,0.4)' }}
              />
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 2, background: `linear-gradient(to right, ${job.accent}, transparent)` }}
      />
    </div>
  )
}

export default function WorkSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef as React.RefObject<Element>, { once: true })

  return (
    <section className="relative bg-white overflow-hidden">
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 sm:px-10 pt-24 sm:pt-32 pb-14">
        <div className="mb-4">
          <span className="section-label">Work</span>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            className="font-black text-slate-900 tracking-tight"
            style={{ fontSize: 'clamp(44px, 7.5vw, 96px)', lineHeight: 1.02 }}
            initial={{ y: '100%' }}
            animate={headerInView ? { y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.85, ease }}
          >
            仕事内容
          </motion.h2>
        </div>
      </div>

      <div>
        {JOBS.map((job, i) => (
          <JobRow key={job.num} job={job} index={i} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
        <div className="text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-xs text-slate-400 hover:text-orange-500 transition-colors tracking-widest uppercase"
          >
            すべての仕事内容を見る →
          </Link>
        </div>
      </div>
    </section>
  )
}
