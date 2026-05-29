'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const COPY_LINES = [
  { text: 'ただ働くだけじゃない。', gradient: false },
  { text: '一生使える技術を、', gradient: false },
  { text: 'ここで身につける。', gradient: true },
]

const BODY_PARAS = [
  '宝宮設備は、神奈川県厚木市を拠点とする設備工事会社です。エアコン工事・給湯器交換・電気工事の3分野で、毎日神奈川県内の現場に向かっています。',
  '「技術を持つことで、人生の選択肢が広がる」という考え方を大切に、経験ゼロからでも2〜3年で確かな技術者になれる環境を整えています。',
  '道具の扱い方から資格取得まで、先輩スタッフが丁寧にサポート。若いうちに手に職をつけたい、という熱量を持った仲間を待っています。',
]

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  const leftInView = useInView(leftRef as React.RefObject<Element>, { once: true, margin: '-10% 0px' })
  const rightInView = useInView(rightRef as React.RefObject<Element>, { once: true, margin: '-10% 0px' })

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-28 sm:py-40">
      <div
        className="absolute left-0 top-0 bottom-0 pointer-events-none"
        style={{ width: 4, background: 'linear-gradient(to bottom, #f97316, rgba(249,115,22,0))' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-start gap-16 lg:gap-24">

          <div ref={leftRef}>
            <div className="mb-8">
              <span className="section-label">Message</span>
            </div>

            <div style={{ lineHeight: 1.08 }}>
              {COPY_LINES.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    className={`block font-black ${line.gradient ? 'text-gradient-orange' : 'text-slate-900'}`}
                    style={{ fontSize: 'clamp(28px, 4.5vw, 60px)', letterSpacing: '-0.025em' }}
                    initial={{ y: '110%' }}
                    animate={leftInView ? { y: 0 } : {}}
                    transition={{ delay: i * 0.12, duration: 0.9, ease }}
                  >
                    {line.text}
                  </motion.span>
                </div>
              ))}
            </div>

            <motion.div
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={leftInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="h-px w-10 bg-orange-500/50" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-orange-500/70">
                株式会社宝宮設備
              </span>
              <span className="text-slate-400 text-xs">代表取締役 小宮龍亮</span>
            </motion.div>
          </div>

          <div ref={rightRef} className="max-w-sm">
            <motion.div
              className="space-y-6 text-slate-500 text-sm sm:text-base leading-[2]"
              initial={{ opacity: 0, y: 24 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.9, ease }}
            >
              {BODY_PARAS.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            <motion.div
              className="relative mt-8 overflow-hidden"
              style={{ height: 220 }}
              initial={{ opacity: 0, y: 16 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.9, ease }}
            >
              <Image
                src="/images/aircon-condenser.jpg"
                alt="屋外エアコン室外機の点検"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ height: 3, background: '#f97316' }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
