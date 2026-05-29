'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const BADGES = ['未経験歓迎', '資格取得支援', '車両貸出', '社宅相談可', '神奈川県全域対応']

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const imgY    = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      style={{ height: '100svh', minHeight: 680 }}
    >
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{ top: '40%', left: 0, right: 0, height: '1px', background: 'rgba(14,165,233,0.18)' }}
      />

      <div
        className="absolute left-0 top-0 pointer-events-none"
        style={{
          width: 4,
          height: '50%',
          background: 'linear-gradient(to bottom, #f97316, rgba(249,115,22,0))',
        }}
      />

      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero-v2.jpg"
          alt="設備工事の現場"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.88) 42%, rgba(255,255,255,0.55) 70%, rgba(255,255,255,0.15) 100%)',
          }}
        />
      </div>

      <div
        className="absolute inset-y-0 right-0 hidden lg:block pointer-events-none"
        style={{ width: '52%' }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: imgY, clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          <Image
            src="/images/hero-v2.jpg"
            alt="エアコン工事の現場"
            fill
            priority
            className="object-cover object-center"
            sizes="52vw"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 flex flex-col justify-center z-10"
        style={{ y: textY, opacity: fadeOut }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <div className="max-w-2xl">

            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease }}
            >
              <span className="block w-8 h-px bg-sky-500" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-sky-500">
                Houmiya Setsubi Recruit 2025
              </span>
            </motion.div>

            <div style={{ lineHeight: 1.04 }}>
              {[
                { text: '技術で、', gradient: false },
                { text: '未来をつくる。', gradient: true },
              ].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    className={`block font-black ${line.gradient ? 'text-gradient-orange' : 'text-slate-900'}`}
                    style={{ fontSize: 'clamp(52px, 9vw, 120px)', letterSpacing: '-0.03em' }}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45 + i * 0.15, duration: 0.95, ease }}
                  >
                    {line.text}
                  </motion.span>
                </div>
              ))}
            </div>

            <motion.div
              className="mt-8 mb-8 pl-5 border-l-4 border-orange-500"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8, ease }}
            >
              <p className="font-black text-slate-900 text-base sm:text-lg leading-snug">
                未経験から、設備工事のプロへ。
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-1">
                神奈川の現場で、一生使える技術を身につける。
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease }}
            >
              {BADGES.map((badge, i) => (
                <span
                  key={badge}
                  className="text-[11px] font-bold px-3 py-1.5 tracking-wide"
                  style={
                    i === 0
                      ? { border: '1px solid #f97316', color: '#f97316' }
                      : { border: '1px solid #94a3b8', color: '#64748b' }
                  }
                >
                  {badge}
                </span>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute z-20 flex flex-col items-center gap-2"
        style={{ bottom: 36, left: '50%', x: '-50%', opacity: fadeOut }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-slate-400">Scroll</span>
        <div className="w-px h-10 bg-slate-200 overflow-hidden relative">
          <motion.div
            className="w-full bg-orange-500"
            style={{ height: '42%' }}
            animate={{ y: ['-100%', '260%'] }}
            transition={{ duration: 1.5, ease: 'easeInOut' as const, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
