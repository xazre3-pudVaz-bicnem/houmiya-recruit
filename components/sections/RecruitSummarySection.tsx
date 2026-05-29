'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const ROWS = [
  { label: '募集職種',   value: 'エアコン工事・給湯器交換・電気工事スタッフ（全職種未経験歓迎）' },
  { label: '雇用形態',   value: '正社員' },
  { label: '給与',       value: '月給 22万円〜（経験・スキルにより優遇）' },
  { label: '勤務地',     value: '神奈川県全域（拠点：厚木市温水西1-4-39）' },
  { label: '勤務時間',   value: '8:00〜18:00（実働8時間）' },
  { label: '休日',       value: '土日祝休み・年間休日105日以上' },
  { label: '応募資格',   value: '未経験可・要普通自動車免許（AT限定可）' },
  { label: '福利厚生',   value: '社会保険完備・車両貸出・昼食補助・資格取得支援・社宅相談可' },
]

export default function RecruitSummarySection() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />

      <div className="max-w-5xl mx-auto px-5 sm:px-10 py-24 sm:py-32">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Recruit</span>
          </motion.div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div className="overflow-hidden">
              <motion.h2
                className="font-black text-slate-900 tracking-tight"
                style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', lineHeight: 1.04 }}
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.85, ease }}
              >
                募集要項
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/recruit"
                className="inline-flex items-center gap-2.5 text-[11px] font-black tracking-[0.2em] uppercase text-orange-500 hover:text-orange-400 transition-colors pb-1"
              >
                詳細を見る
                <span className="block w-6 h-px bg-orange-500" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Table */}
        <motion.div
          className="bg-white border border-slate-200 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
        >
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col sm:flex-row sm:items-start ${
                i < ROWS.length - 1 ? 'border-b border-slate-100' : ''
              }`}
            >
              <div
                className="flex-shrink-0 px-6 py-4 sm:py-5 sm:w-40 lg:w-48"
                style={{ background: 'rgba(249,115,22,0.03)', borderRight: '1px solid rgba(0,0,0,0.05)' }}
              >
                <span className="text-xs font-black text-slate-500 tracking-wide">{row.label}</span>
              </div>
              <div className="flex-1 px-6 py-4 sm:py-5">
                <p className="text-sm text-slate-700 leading-relaxed">{row.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7, ease }}
        >
          <Link
            href="/entry"
            className="inline-flex items-center justify-center gap-3 font-black text-sm px-10 py-4 tracking-widest text-white"
            style={{ background: '#f97316' }}
          >
            応募フォームへ
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/recruit"
            className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-slate-700 transition-colors"
          >
            募集要項の詳細を見る
            <span className="block w-5 h-px bg-slate-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
