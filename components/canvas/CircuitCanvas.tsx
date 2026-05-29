'use client'
import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  active: boolean
  phase: number
}

interface Particle {
  fromIdx: number
  toIdx: number
  t: number
  speed: number
  orange: boolean
}

interface Edge { a: number; b: number }

export default function CircuitCanvas({
  className = '',
  opacity = 1,
}: {
  className?: string
  opacity?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    if (!ctx) return

    let raf: number
    let nodes: Node[] = []
    let edges: Edge[] = []
    let particles: Particle[] = []
    let W = 0
    let H = 0

    function resize() {
      if (!canvas) return
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * devicePixelRatio
      canvas.height = H * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      build()
    }

    function build() {
      nodes = []
      edges = []
      particles = []

      const colGap = 80
      const rowGap = 80
      const cols = Math.ceil(W / colGap) + 2
      const rows = Math.ceil(H / rowGap) + 2

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({
            x: c * colGap - colGap / 2 + (Math.random() - 0.5) * 24,
            y: r * rowGap - rowGap / 2 + (Math.random() - 0.5) * 24,
            active: Math.random() > 0.82,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }

      // Build edges (right-angle circuit traces)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x
          const dy = nodes[j].y - nodes[i].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110 && Math.random() > 0.55) {
            edges.push({ a: i, b: j })
          }
        }
      }

      // Seed particles
      for (let k = 0; k < 18; k++) spawnParticle()
    }

    function spawnParticle() {
      if (!edges.length) return
      const edge = edges[Math.floor(Math.random() * edges.length)]
      particles.push({
        fromIdx: Math.random() > 0.5 ? edge.a : edge.b,
        toIdx: Math.random() > 0.5 ? edge.b : edge.a,
        t: 0,
        speed: 0.0035 + Math.random() * 0.005,
        orange: Math.random() > 0.72,
      })
    }

    function drawEdge(a: Node, b: Node, tick: number) {
      // Right-angle circuit trace
      ctx.beginPath()
      const mid = Math.abs(b.x - a.x) > Math.abs(b.y - a.y)
        ? { x: (a.x + b.x) / 2, y: a.y }
        : { x: a.x, y: (a.y + b.y) / 2 }

      ctx.moveTo(a.x, a.y)
      if (Math.abs(b.x - a.x) > Math.abs(b.y - a.y)) {
        ctx.lineTo(mid.x, a.y)
        ctx.lineTo(mid.x, b.y)
        ctx.lineTo(b.x, b.y)
      } else {
        ctx.lineTo(a.x, mid.y)
        ctx.lineTo(b.x, mid.y)
        ctx.lineTo(b.x, b.y)
      }
      ctx.strokeStyle = 'rgba(59,130,246,0.1)'
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    function drawNode(n: Node, tick: number) {
      const pulse = (Math.sin(tick * 0.018 + n.phase) + 1) / 2
      const baseAlpha = n.active ? 0.35 + pulse * 0.65 : 0.07 + pulse * 0.06
      const r = n.active ? 2.5 : 1.5

      ctx.beginPath()
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
      ctx.fillStyle = n.active
        ? `rgba(34,211,238,${baseAlpha})`
        : `rgba(59,130,246,${baseAlpha})`
      ctx.fill()

      if (n.active && pulse > 0.7) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, r + 3 * pulse, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(34,211,238,${0.25 * (1 - pulse)})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    function drawParticle(p: Particle) {
      const a = nodes[p.fromIdx]
      const b = nodes[p.toIdx]
      const x = a.x + (b.x - a.x) * p.t
      const y = a.y + (b.y - a.y) * p.t
      const tx = a.x + (b.x - a.x) * Math.max(0, p.t - 0.12)
      const ty = a.y + (b.y - a.y) * Math.max(0, p.t - 0.12)

      const clr = p.orange ? 'rgba(249,115,22,' : 'rgba(34,211,238,'

      // Trail
      ctx.beginPath()
      ctx.moveTo(tx, ty)
      ctx.lineTo(x, y)
      ctx.strokeStyle = clr + '0.25)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Glow halo
      const g = ctx.createRadialGradient(x, y, 0, x, y, 5)
      g.addColorStop(0, clr + '0.7)')
      g.addColorStop(1, clr + '0)')
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fillStyle = g
      ctx.fill()

      // Core dot
      ctx.beginPath()
      ctx.arc(x, y, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = clr + '0.9)'
      ctx.fill()
    }

    let tick = 0
    function frame() {
      ctx.clearRect(0, 0, W, H)
      tick++

      for (const e of edges) drawEdge(nodes[e.a], nodes[e.b], tick)
      for (const n of nodes) drawNode(n, tick)

      particles = particles.filter(p => {
        p.t += p.speed
        if (p.t >= 1) {
          // Try to continue from arrival node
          const arrivedIdx = p.toIdx
          const departing = edges.filter(e => e.a === arrivedIdx || e.b === arrivedIdx)
          if (departing.length && Math.random() > 0.25) {
            const next = departing[Math.floor(Math.random() * departing.length)]
            p.fromIdx = arrivedIdx
            p.toIdx = next.a === arrivedIdx ? next.b : next.a
            p.t = 0
            return true
          }
          return false
        }
        drawParticle(p)
        return true
      })

      while (particles.length < 22) spawnParticle()

      raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', opacity }}
    />
  )
}
