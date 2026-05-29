'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const STAFF = [
  {
    id: 'tanaka',
    num: '01',
    name: '田中 大輔',
    nameEn: 'Daisuke Tanaka',
    age: 24,
    year: '入社2年目',
    job: 'エアコン工事',
    jobEn: 'Air Conditioning',
    prev: '前職：飲食店',
    quote: '最初は工具の名前もわからなかった。でも今は一人で何十台も取り付けている。',
    accent: '#0ea5e9',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop&crop=face',
  },
  {
    id: 'yamamoto',
    num: '02',
    name: '山本 健太',
    nameEn: 'Kenta Yamamoto',
    age: 22,
    year: '入社1年目',
    job: '給湯器交換',
    jobEn: 'Water Heater',
    prev: '前職：コンビニ',
    quote: '先輩から「任せる」と言われた瞬間、本当に嬉しかった。成長を実感できる仕事。',
    accent: '#f97316',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop&crop=face',
  },
  {
    id: 'sato',
    num: '03',
    name: '佐藤 翔太',
    nameEn: 'Shota Sato',
    age: 26,
    year: '入社3年目',
    job: '電気工事',
    jobEn: 'Electrical',
    prev: '前職：倉庫作業',
    quote: '資格取得を会社が全部サポートしてくれた。今は後輩に教える側になっている。',
    accent: '#f59e0b',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop&crop=face',
  },
]

function StaffCard({ s, index }: { s: typeof STAFF[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      className="border-b border-slate-100"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.85, ease }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">

        {/* Photo */}
        <div className="relative overflow-hidden bg-slate-100" style={{ minHeight: 260 }}>
          <Image
            src={s.photo}
            alt={s.name}
            fill
            className="object-cover object-top"
            sizes="300px"
          />
          {/* Bottom gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)' }}
          />
          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-[9px] font-black tracking-[0.2em] uppercase mb-0.5" style={{ color: `${s.accent}` }}>
              {s.num} — {s.jobEn}
            </p>
            <p className="text-white font-black text-base leading-tight">{s.name}</p>
          </div>
          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: s.accent }} />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-8 sm:px-10 py-10 bg-white">
          <p
            className="text-[10px] font-black tracking-[0.25em] uppercase mb-5"
            style={{ color: s.accent }}
          >
            Staff Voice — {s.nameEn}
          </p>

          <blockquote
            className="font-bold text-slate-700 leading-snug mb-6"
            style={{ fontSize: 'clamp(17px, 2.5vw, 24px)', lineHeight: 1.55 }}
          >
            &ldquo;{s.quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px" style={{ background: s.accent }} />
            <span className="text-xs text-slate-400">{s.name} / {s.year}</span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>{s.age}歳</span>
            <span className="text-slate-200">|</span>
            <span>{s.job}</span>
            <span className="text-slate-200">|</span>
            <span className="text-slate-300">{s.prev}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function StaffSection() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-24 sm:pb-32">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Staff Voice</span>
          </motion.div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="overflow-hidden">
              <motion.h2
                className="font-black text-slate-900 tracking-tight"
                style={{ fontSize: 'clamp(36px, 6vw, 76px)', lineHeight: 1.04 }}
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.85, ease }}
              >
                社員の声
              </motion.h2>
            </div>
            <motion.p
              className="text-slate-400 text-sm max-w-xs leading-relaxed sm:text-right pb-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              実際に働く仲間の声。未経験から成長した軌跡。
            </motion.p>
          </div>
        </div>

        <div className="border-t border-slate-200">
          {STAFF.map((s, i) => (
            <StaffCard key={s.id} s={s} index={i} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/staff"
            className="inline-flex items-center gap-3 text-xs text-slate-400 hover:text-orange-500 transition-colors tracking-widest uppercase"
          >
            全スタッフのインタビューを見る
            <span className="block w-8 h-px bg-slate-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
