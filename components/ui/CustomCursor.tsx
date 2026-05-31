'use client'
import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

function isDesktopPointer(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(hover: hover)').matches &&
    window.matchMedia('(pointer: fine)').matches &&
    window.innerWidth >= 1024
  )
}

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  const springConfig = { damping: 28, stiffness: 280, mass: 0.5 }
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 500 })
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 500 })
  const ringX = useSpring(cursorX, springConfig)
  const ringY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const checkDevice = () => setActive(isDesktopPointer())
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    if (!active) return

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)

    window.addEventListener('mousemove', move)

    const interactives = document.querySelectorAll('a,button,[data-cursor]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [active, cursorX, cursorY])

  if (!active) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{ width: hovered ? 6 : 5, height: hovered ? 6 : 5 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border border-white/40"
          animate={{
            width: hovered ? 48 : 32,
            height: hovered ? 48 : 32,
            opacity: hovered ? 1 : 0.6,
            borderColor: hovered ? 'rgba(249,115,22,0.8)' : 'rgba(255,255,255,0.4)',
          }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
    </>
  )
}
