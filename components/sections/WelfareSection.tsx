'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const BENEFITS = [
  {
    num: '01',
    en: 'Social Insurance',
    title: '社会保険完備',
    body: '健康保険・厚生年金・雇用保険・労災保険の4種を完備。長く安心して働ける土台を整えています。',
    accent: '#0ea5e9',
    photo: '',
    photoAlt: '',
  },
  {
    num: '02',
    en: 'Company Vehicle',
    title: '車両貸出',
    body: 'マイカーなし・AT免許でOK。会社車両で現場直行直帰。通勤コストゼロで、その分を生活に使える。',
    accent: '#14b8a6',
    photo: '/images/welfare-vehicles.jpg',
    photoAlt: '会社車両',
  },
  {
    num: '03',
    en: 'Lunch Subsidy',
    title: '昼食補助',
    body: '毎日の昼食代を会社が補助。食費の心配をなくし、現場仕事に集中できる環境を整えています。',
    accent: '#f97316',
    photo: '/images/welfare-lunch.jpg',
    photoAlt: '昼食補助あります',
  },
  {
    num: '04',
    en: 'Certification Support',
    title: '資格取得支援',
    body: '電気工事士・冷媒取扱資格などの受験費・テキスト・講習費を全額会社負担。資格は給与に直結。',
    accent: '#f59e0b',
    photo: '/images/welfare-certification.jpg',
    photoAlt: '電気工事士テキストとヘルメット',
  },
  {
    num: '05',
    en: 'Housing Support',
    title: '社宅相談可能',
    body: '「住む場所がない」方も事前に相談可能。神奈川への転入を検討中の方も、気軽に問い合わせを。',
    accent: '#8b5cf6',
    photo: '/images/welfare-housing.jpg',
    photoAlt: '社宅イメージ',
  },
]

function BenefitTile({ b, index, wide }: { b: typeof BENEFITS[0]; index: number; wide?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${wide ? 'sm:col-span-2' : ''}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        minHeight: 280,
      }}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.85, ease }}
    >
      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{ height: 3, background: b.accent }}
      />

      {b.photo && (
        <div className="relative w-full overflow-hidden" style={{ height: 180 }}>
          <Image
            src={b.photo}
            alt={b.photoAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, transparent 40%, rgba(30,41,59,0.9) 100%)` }}
          />
        </div>
      )}

      <div className={b.photo ? 'p-6 sm:p-8' : 'p-8 sm:p-10'}>

      <div className="flex items-center gap-3 mb-7">
        <span
          className="font-black text-[11px] tabular-nums tracking-wide"
          style={{ color: b.accent }}
        >
          {b.num}
        </span>
        <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <span
          className="text-[9px] font-black tracking-[0.25em] uppercase"
          style={{ color: `${b.accent}70` }}
        >
          {b.en}
        </span>
      </div>

      <h3
        className="font-black text-white mb-5"
        style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
      >
        {b.title}
      </h3>

      <p
        className="text-sm sm:text-base leading-[1.9]"
        style={{ color: 'rgba(255,255,255,0.52)' }}
      >
        {b.body}
      </p>
      </div>

      <div
        className="absolute bottom-6 right-8 font-black select-none pointer-events-none"
        style={{
          fontSize: 'clamp(60px, 8vw, 100px)',
          color: 'rgba(255,255,255,0.03)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
        aria-hidden
      >
        {b.num}
      </div>
    </motion.div>
  )
}

export default function WelfareSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef as React.RefObject<Element>, { once: true })

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: '#1e293b' }}
    >
      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div ref={headerRef} className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <motion.span
              className="section-label-inv block mb-6"
              initial={{ opacity: 0, x: -16 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              Welfare
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                className="font-black text-white"
                style={{ fontSize: 'clamp(42px, 7vw, 96px)', letterSpacing: '-0.03em', lineHeight: 1.0 }}
                initial={{ y: '100%' }}
                animate={headerInView ? { y: 0 } : {}}
                transition={{ delay: 0.08, duration: 0.85, ease }}
              >
                福利厚生
              </motion.h2>
            </div>
            <motion.p
              className="mt-5 text-sm sm:text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.45)' }}
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              長く、安心して働けるために。5つの制度を用意しています。
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            <Link
              href="/welfare"
              className="inline-flex items-center gap-3 text-[11px] font-black tracking-[0.2em] uppercase transition-colors hover:opacity-80"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              詳細を見る
              <span className="block w-6 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {BENEFITS.slice(0, 3).map((b, i) => (
            <BenefitTile key={b.num} b={b} index={i} />
          ))}
          {BENEFITS.slice(3).map((b, i) => (
            <BenefitTile key={b.num} b={b} index={i + 3} wide={i === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
