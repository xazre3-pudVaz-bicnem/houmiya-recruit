'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const REASONS = [
  {
    num: '01',
    en: 'From Zero',
    tagline: '道具の名前から覚えていい。',
    title: '未経験から始められる',
    body: '入社時に資格・経験は一切不要。先輩スタッフが現場で一から丁寧に教える。「何もわからない」を正直に言える環境が、最速の成長につながる。',
    accent: '#0ea5e9',
  },
  {
    num: '02',
    en: 'Qualification',
    tagline: '会社が全額サポート。受験費もテキスト代も。',
    title: '資格取得を会社が支援',
    body: '電気工事士・冷媒取扱資格などの受験費・テキスト代は全額会社負担。技術の証明が、給与アップに直結する制度がある。',
    accent: '#f97316',
  },
  {
    num: '03',
    en: 'No Car Needed',
    tagline: 'マイカー不要。AT免許でOK。',
    title: '車両貸出あり',
    body: '会社車両で現場直行直帰。マイカーなし・AT免許でOK。通勤費・駐車場代のストレスがない。そのぶん稼ぎに直結する。',
    accent: '#10b981',
  },
  {
    num: '04',
    en: 'Housing',
    tagline: '神奈川転入組も、安心して来てほしい。',
    title: '社宅相談可能',
    body: '「住む場所がない」方も事前に相談可能。神奈川への転入を考えている方も、まずは問い合わせてください。',
    accent: '#8b5cf6',
  },
  {
    num: '05',
    en: 'Young Team',
    tagline: '20代中心のチームで、一緒に成長できる。',
    title: '若い世代が働きやすい',
    body: '20代中心のスタッフ構成。先輩との距離が近く、気軽に相談できる雰囲気。技術を磨きながら、仲間と成長できる現場がある。',
    accent: '#f59e0b',
  },
]

function ReasonItem({ r, index }: { r: typeof REASONS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-[64px_1fr] sm:grid-cols-[80px_1fr] gap-6 sm:gap-8 pb-14 border-b border-slate-100 last:border-0 last:pb-0"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.8, ease }}
    >
      <div className="flex-shrink-0 pt-1">
        <span
          className="font-black text-5xl sm:text-6xl leading-none"
          style={{ color: `${r.accent}18` }}
        >
          {r.num}
        </span>
      </div>

      <div>
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-5 h-px" style={{ background: r.accent }} />
          <span
            className="text-[10px] font-black tracking-[0.25em] uppercase"
            style={{ color: r.accent }}
          >
            {r.en}
          </span>
        </div>

        <p className="text-slate-400 text-sm font-bold mb-2">{r.tagline}</p>

        <h3
          className="font-black text-slate-900 mb-4"
          style={{ fontSize: 'clamp(22px, 3vw, 32px)', letterSpacing: '-0.02em' }}
        >
          {r.title}
        </h3>

        <p className="text-slate-500 text-sm sm:text-base leading-[2]">{r.body}</p>
      </div>
    </motion.div>
  )
}

export default function ReasonSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef as React.RefObject<Element>, { once: true })

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-100" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-24 sm:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          <div ref={headerRef} className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6">
              <span className="section-label">Why Houmiya</span>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                className="font-black text-slate-900 tracking-tight leading-tight"
                style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
                initial={{ y: '100%' }}
                animate={headerInView ? { y: 0 } : {}}
                transition={{ delay: 0.08, duration: 0.85, ease }}
              >
                選ばれる<br />理由
              </motion.h2>
            </div>

            <motion.p
              className="text-slate-400 text-sm leading-[1.9] mb-8"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              なぜ宝宮設備で働くのか。<br />
              5つの理由がある。
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/beginner"
                className="inline-flex items-center gap-2.5 text-[11px] font-black tracking-[0.2em] uppercase text-orange-500 hover:text-orange-400 transition-colors"
              >
                未経験の方へ →
              </Link>
            </motion.div>
          </div>

          <div className="space-y-0 pt-1">
            {REASONS.map((r, i) => (
              <ReasonItem key={r.num} r={r} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
