'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const ITEMS = [
  {
    id: 1,
    label: 'エアコン 取付工事',
    en: 'AC Installation',
    accent: '#0ea5e9',
    photo: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=75&auto=format&fit=crop',
    wide: false,
  },
  {
    id: 2,
    label: '給湯器 交換作業',
    en: 'Water Heater',
    accent: '#f97316',
    photo: 'https://images.unsplash.com/photo-1581092160607-ee22731c9b3f?w=700&q=75&auto=format&fit=crop',
    wide: true,
  },
  {
    id: 3,
    label: '電気 配線工事',
    en: 'Electrical Wiring',
    accent: '#f59e0b',
    photo: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=75&auto=format&fit=crop',
    wide: false,
  },
  {
    id: 4,
    label: '現場 チーム作業',
    en: 'Team Work',
    accent: '#10b981',
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75&auto=format&fit=crop',
    wide: false,
  },
  {
    id: 5,
    label: '配管 接続工事',
    en: 'Piping Work',
    accent: '#0ea5e9',
    photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75&auto=format&fit=crop',
    wide: true,
  },
  {
    id: 6,
    label: '施工 完了引渡し',
    en: 'Handover',
    accent: '#8b5cf6',
    photo: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=75&auto=format&fit=crop',
    wide: false,
  },
]

function GalleryItem({ item, index }: { item: typeof ITEMS[0]; index: number }) {
  return (
    <motion.div
      className="relative flex-shrink-0 overflow-hidden group"
      style={{
        width: item.wide ? 380 : 270,
        height: 340,
        background: '#f1f5f9',
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.7, ease }}
    >
      <Image
        src={item.photo}
        alt={item.label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="380px"
      />

      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)',
        }}
      />

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[8px] font-black tracking-[0.22em] uppercase mb-0.5" style={{ color: item.accent }}>
          {item.en}
        </p>
        <p className="text-sm font-bold text-white/80">{item.label}</p>
      </div>

      {/* Accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ background: item.accent }}
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4, ease }}
      />

      {/* Number */}
      <div
        className="absolute top-3 right-3 font-black leading-none select-none pointer-events-none"
        style={{ fontSize: 32, color: 'rgba(255,255,255,0.12)', letterSpacing: '-0.05em' }}
        aria-hidden
      >
        {String(item.id).padStart(2, '0')}
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative bg-slate-50 overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 mb-12">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Gallery</span>
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
              施工ギャラリー
            </motion.h2>
          </div>
          <motion.p
            className="text-slate-400 text-xs tracking-widest uppercase sm:text-right pb-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Drag to explore →
          </motion.p>
        </div>
      </div>

      {/* Drag scroll track */}
      <div className="relative z-10 overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #f8fafc, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #f8fafc, transparent)' }}
        />

        <motion.div
          ref={trackRef}
          className="flex gap-3 px-5 sm:px-10 cursor-grab active:cursor-grabbing select-none"
          drag="x"
          dragConstraints={{
            left: -(ITEMS.length * 300 - (typeof window !== 'undefined' ? window.innerWidth : 1200)),
            right: 0,
          }}
          dragElastic={0.08}
          whileTap={{ cursor: 'grabbing' }}
        >
          {ITEMS.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} />
          ))}
          <div className="w-5 flex-shrink-0" />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 mt-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 text-xs text-slate-400 hover:text-orange-500 transition-colors tracking-widest uppercase"
          >
            ギャラリーをすべて見る
            <span className="block w-8 h-px bg-slate-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
