'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/recruit',  label: '採用情報', en: 'Recruit' },
  { href: '/work',     label: '仕事内容', en: 'Work' },
  { href: '/beginner', label: '未経験の方へ', en: 'Beginner' },
  { href: '/welfare',  label: '福利厚生', en: 'Welfare' },
  { href: '/column',   label: 'コラム', en: 'Column' },
  { href: '/blog',     label: 'ブログ', en: 'Blog' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.88)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between" style={{ height: '68px' }}>
          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="株式会社宝宮設備 ロゴ"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              style={{ maxWidth: 180 }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-slate-600 hover:text-orange-500 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:046-205-4558" className="flex flex-col items-end leading-tight">
              <span className="text-[8px] font-black tracking-[0.25em] uppercase text-slate-400">Tel</span>
              <span className="text-[13px] font-bold tracking-wide text-slate-700 hover:text-orange-500 transition-colors">
                046-205-4558
              </span>
            </a>
            <Link
              href="/entry"
              className="text-[11px] font-black tracking-[0.18em] uppercase px-5 py-2.5 bg-orange-500 text-white hover:bg-orange-400 transition-colors"
            >
              応募する
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <motion.span
              className="block w-6 h-[1.5px] bg-slate-700 origin-center"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-slate-700"
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-slate-700 origin-center"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-50 flex flex-col bg-white px-6 pt-6 pb-8 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="株式会社宝宮設備 ロゴ"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
                style={{ maxWidth: 160 }}
              />
              <button
                className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="閉じる"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M1 1L19 19M19 1L1 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col mb-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-5 border-b border-slate-100 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-300 w-14">{link.en}</span>
                      <span className="text-lg font-bold text-slate-800 group-hover:text-orange-500 transition-colors">{link.label}</span>
                    </div>
                    <span className="text-slate-300 group-hover:text-orange-400 transition-colors">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.45 }}
              className="space-y-3"
            >
              <Link
                href="/entry"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-orange-500 text-white font-black py-4 tracking-widest text-sm hover:bg-orange-400 transition-colors"
              >
                応募フォームへ →
              </Link>
              <a
                href="tel:046-205-4558"
                className="block text-center border border-slate-200 text-slate-600 font-medium py-4 tracking-widest text-sm hover:border-slate-400 transition-colors"
              >
                TEL: 046-205-4558
              </a>
            </motion.div>

            <p className="pt-8 text-center text-slate-300 text-[10px] tracking-widest">© 株式会社宝宮設備</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[68px]" />
    </>
  )
}
