'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const SLOTS = [
  {
    time: '08:00',
    period: '午前',
    title: '現場へ直行',
    body: '会社に寄らず直接現場へ。会社車両で神奈川県内の現場に向かう。道具・資材は前日に準備済み。',
    accent: '#0ea5e9',
    bg: 'rgba(240,249,255,0.88)',
    photo: '/images/work-morning-van.jpg',
  },
  {
    time: '12:00',
    period: '昼',
    title: '昼休憩',
    body: '昼食補助あり。スタッフと近くの店でランチ。午後の作業に向けて体を休める。',
    accent: '#f97316',
    bg: 'rgba(255,247,237,0.88)',
    photo: '/images/lunch-bento.jpg',
  },
  {
    time: '13:00',
    period: '午後',
    title: '仕上げ・試運転',
    body: '午前の続きや次の工程へ。仕上げ・試運転・確認作業。完工後はお客様への説明と引渡し。',
    accent: '#10b981',
    bg: 'rgba(240,253,244,0.88)',
    photo: '/images/ceiling-work.jpg',
  },
  {
    time: '18:00',
    period: '帰社',
    title: '終業・直帰',
    body: '残業少なめ。現場から直接帰宅できる日も多い。オンとオフのメリハリがある生活を実現。',
    accent: '#8b5cf6',
    bg: 'rgba(250,245,255,0.88)',
    photo: '/images/tool-shelf.jpg',
  },
]

function SlotBlock({ slot }: { slot: typeof SLOTS[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8% 0px' })

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={slot.photo}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0" style={{ background: slot.bg }} />
      </div>

      <motion.div
        className="relative z-10 p-8 sm:p-10 lg:p-12"
        style={{
          borderLeft: `4px solid ${slot.accent}`,
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
      >
        <div
          className="absolute top-6 right-8 font-black pointer-events-none select-none"
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            color: `${slot.accent}18`,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
          aria-hidden
        >
          {slot.time}
        </div>

        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[10px] font-black tracking-[0.25em] uppercase px-2 py-0.5"
              style={{ background: slot.accent, color: 'white' }}
            >
              {slot.period}
            </span>
            <span
              className="font-black text-sm"
              style={{ color: slot.accent }}
            >
              {slot.time}
            </span>
          </div>

          <h3
            className="font-black text-slate-900 mb-3"
            style={{ fontSize: 'clamp(20px, 3vw, 28px)', letterSpacing: '-0.02em' }}
          >
            {slot.title}
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-[1.9]">
            {slot.body}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function TimelineSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef as React.RefObject<Element>, { once: true })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#f8fafc' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-100" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div ref={headerRef} className="mb-12">
          <div className="mb-4">
            <span className="section-label">Daily Schedule</span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-black text-slate-900"
              style={{ fontSize: 'clamp(38px, 6.5vw, 88px)', letterSpacing: '-0.03em' }}
              initial={{ y: '100%' }}
              animate={headerInView ? { y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.85, ease }}
            >
              1日の流れ
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {SLOTS.map((slot) => (
            <SlotBlock key={slot.time} slot={slot} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/day"
            className="inline-flex items-center gap-3 text-xs text-slate-400 hover:text-orange-500 transition-colors tracking-widest uppercase"
          >
            1日の流れを詳しく見る
            <span className="block w-8 h-px bg-slate-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
