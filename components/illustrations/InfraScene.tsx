'use client'
import { motion } from 'framer-motion'

import type { CSSProperties } from 'react'

export default function InfraScene({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        {/* Patterns */}
        <pattern id="bp-fine" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0L0 0 0 20" fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5"/>
        </pattern>
        <pattern id="bp-major" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="url(#bp-fine)"/>
          <path d="M80 0L0 0 0 80" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5"/>
        </pattern>

        {/* Crosshatch fill */}
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(59,130,246,0.08)" strokeWidth="1"/>
        </pattern>

        {/* Filters */}
        <filter id="glow-o" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow-c" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        {/* Gradients */}
        <linearGradient id="bldg-main" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1830" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#060c18" stopOpacity="1"/>
        </linearGradient>
        <linearGradient id="bldg-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#08101e" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#040810" stopOpacity="0.9"/>
        </linearGradient>
        <linearGradient id="pipe-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(249,115,22,0.4)"/>
          <stop offset="100%" stopColor="rgba(249,115,22,0.05)"/>
        </linearGradient>
        <linearGradient id="ground-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(59,130,246,0)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0.06)"/>
        </linearGradient>
      </defs>

      {/* ── BACKGROUND GRID ── */}
      <rect width="1440" height="640" fill="url(#bp-major)" opacity="0.6"/>

      {/* ── FAR BACKGROUND BUILDINGS ── */}
      {/* Left cluster */}
      <rect x="0" y="380" width="55" height="260" fill="url(#bldg-bg)" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5"/>
      <rect x="60" y="340" width="70" height="300" fill="url(#bldg-bg)" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5"/>
      <rect x="135" y="400" width="50" height="240" fill="url(#bldg-bg)" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5"/>
      <rect x="190" y="360" width="80" height="280" fill="url(#bldg-bg)" stroke="rgba(59,130,246,0.07)" strokeWidth="0.5"/>
      {/* Right cluster */}
      <rect x="1100" y="370" width="80" height="270" fill="url(#bldg-bg)" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5"/>
      <rect x="1185" y="340" width="65" height="300" fill="url(#bldg-bg)" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5"/>
      <rect x="1255" y="390" width="90" height="250" fill="url(#bldg-bg)" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5"/>
      <rect x="1350" y="360" width="90" height="280" fill="url(#bldg-bg)" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5"/>

      {/* Window grids on far buildings */}
      {[65,90,115].map(y =>
        [60,75,90,105].map(x => (
          <rect key={`fl-${x}-${y}`} x={x} y={y*3.2+20} width="10" height="12"
            fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.06)" strokeWidth="0.3"/>
        ))
      )}
      {/* Orange lit window on bg building */}
      <rect x="80" y="365" width="10" height="12" fill="rgba(249,115,22,0.18)" filter="url(#glow-o)"/>
      <rect x="1210" y="370" width="10" height="12" fill="rgba(249,115,22,0.14)" filter="url(#glow-o)"/>

      {/* ── MID-GROUND BUILDINGS (more detail) ── */}
      {/* Left mid */}
      <rect x="250" y="280" width="120" height="360" fill="url(#bldg-main)" stroke="rgba(59,130,246,0.12)" strokeWidth="0.5"/>
      <rect x="250" y="280" width="120" height="360" fill="url(#bp-major)" opacity="0.3"/>
      {/* Floors */}
      {[...Array(9)].map((_,i) => (
        <line key={`lf${i}`} x1="250" y1={280+i*40} x2="370" y2={280+i*40}
          stroke="rgba(59,130,246,0.07)" strokeWidth="0.5"/>
      ))}
      {/* Windows */}
      {[0,1,2].map(c => [0,1,2,3,4,5,6,7].map(r => {
        const isLit = (c===1&&r===3)||(c===0&&r===6)
        return (
          <rect key={`mw-${c}-${r}`} x={258+c*38} y={290+r*40} width="26" height="28"
            fill={isLit ? "rgba(249,115,22,0.12)" : "rgba(59,130,246,0.04)"}
            stroke="rgba(59,130,246,0.08)" strokeWidth="0.3"/>
        )
      })).flat()}
      {/* Orange stripe accent left side */}
      <rect x="370" y="280" width="2" height="360" fill="rgba(249,115,22,0.3)" filter="url(#glow-o)"/>

      {/* Right mid */}
      <rect x="1000" y="300" width="100" height="340" fill="url(#bldg-main)" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5"/>
      <rect x="1000" y="300" width="100" height="340" fill="url(#bp-major)" opacity="0.25"/>
      {[...Array(8)].map((_,i) => (
        <line key={`rfl${i}`} x1="1000" y1={300+i*42} x2="1100" y2={300+i*42}
          stroke="rgba(59,130,246,0.07)" strokeWidth="0.5"/>
      ))}
      {[0,1].map(c => [0,1,2,3,4,5,6].map(r => {
        const isLit = (c===0&&r===2)||(c===1&&r===5)
        return (
          <rect key={`rw-${c}-${r}`} x={1008+c*46} y={312+r*42} width="34" height="30"
            fill={isLit ? "rgba(249,115,22,0.1)" : "rgba(59,130,246,0.04)"}
            stroke="rgba(59,130,246,0.08)" strokeWidth="0.3"/>
        )
      })).flat()}

      {/* ── MAIN BUILDING (CENTER) ── */}
      {/* Main body */}
      <rect x="540" y="60" width="320" height="580" fill="url(#bldg-main)" stroke="rgba(59,130,246,0.22)" strokeWidth="0.8"/>
      {/* Blueprint grid on face */}
      <rect x="540" y="60" width="320" height="580" fill="url(#bp-major)" opacity="0.45"/>
      {/* Structural columns */}
      {[0,1,2,3].map(i => (
        <line key={`col${i}`} x1={540+i*80} y1="60" x2={540+i*80} y2="640"
          stroke="rgba(59,130,246,0.14)" strokeWidth="1"/>
      ))}
      <line x1="860" y1="60" x2="860" y2="640" stroke="rgba(59,130,246,0.14)" strokeWidth="1"/>
      {/* Floor lines */}
      {[...Array(14)].map((_,i) => (
        <line key={`mfl${i}`} x1="540" y1={60+i*40} x2="860" y2={60+i*40}
          stroke="rgba(59,130,246,0.09)" strokeWidth="0.5"/>
      ))}
      {/* Windows grid */}
      {[0,1,2,3].map(col => [0,1,2,3,4,5,6,7,8,9,10].map(row => {
        const wx = 552 + col * 77
        const wy = 75 + row * 50
        const hotW = (col===1&&row===3)||(col===3&&row===7)||(col===2&&row===1)||(col===0&&row===9)
        return (
          <rect key={`mwin-${col}-${row}`} x={wx} y={wy} width="55" height="34"
            fill={hotW ? "rgba(249,115,22,0.15)" : "rgba(59,130,246,0.05)"}
            stroke="rgba(59,130,246,0.1)" strokeWidth="0.4"/>
        )
      })).flat()}
      {/* Hot windows glow */}
      <rect x="629" y="225" width="55" height="34" fill="rgba(249,115,22,0.22)" filter="url(#glow-o)"/>
      <rect x="783" y="415" width="55" height="34" fill="rgba(249,115,22,0.18)" filter="url(#glow-o)"/>
      {/* Orange accent stripe */}
      <rect x="860" y="60" width="3" height="580" fill="rgba(249,115,22,0.5)" filter="url(#glow-o)"/>
      {/* Horizontal orange band (mid) */}
      <rect x="540" y="318" width="323" height="2" fill="rgba(249,115,22,0.25)" filter="url(#glow-o)"/>

      {/* Level annotations */}
      {[0,1,2,3].map(i => (
        <g key={`ann${i}`} opacity="0.3">
          <line x1="520" y1={120+i*120} x2="540" y2={120+i*120} stroke="rgba(59,130,246,0.6)" strokeWidth="0.5"/>
          <text x="515" y={124+i*120} textAnchor="end" fontSize="7"
            fill="rgba(59,130,246,0.7)" fontFamily="monospace">
            {`${(4-i)*4}F`}
          </text>
        </g>
      ))}
      {/* Width annotation */}
      <g opacity="0.25">
        <line x1="540" y1="44" x2="860" y2="44" stroke="rgba(59,130,246,0.8)" strokeWidth="0.5"/>
        <line x1="540" y1="40" x2="540" y2="48" stroke="rgba(59,130,246,0.8)" strokeWidth="0.5"/>
        <line x1="860" y1="40" x2="860" y2="48" stroke="rgba(59,130,246,0.8)" strokeWidth="0.5"/>
        <text x="700" y="40" textAnchor="middle" fontSize="7"
          fill="rgba(59,130,246,0.7)" fontFamily="monospace">32,000 mm</text>
      </g>

      {/* ── SCAFFOLDING (right side of main building) ── */}
      {/* Vertical poles */}
      {[0,1,2].map(i => (
        <line key={`sp${i}`} x1={868+i*20} y1="60" x2={868+i*20} y2="620"
          stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
      ))}
      {/* Horizontal planks */}
      {[...Array(15)].map((_,i) => (
        <line key={`shp${i}`} x1="868" y1={60+i*37} x2="908" y2={60+i*37}
          stroke="rgba(255,255,255,0.09)" strokeWidth="1.5"/>
      ))}
      {/* Diagonal braces */}
      {[...Array(7)].map((_,i) => (
        <line key={`sdb${i}`} x1="868" y1={60+i*74} x2="888" y2={60+i*74+37}
          stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
      ))}
      {/* Orange safety netting */}
      <rect x="868" y="60" width="40" height="560" fill="rgba(249,115,22,0.02)" stroke="none"/>

      {/* ── CRANE ── */}
      {/* Tower */}
      <line x1="420" y1="640" x2="420" y2="20" stroke="rgba(255,255,255,0.18)" strokeWidth="2"/>
      <line x1="432" y1="640" x2="432" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* Tower lattice */}
      {[...Array(7)].map((_,i) => (
        <g key={`cl${i}`}>
          <line x1="420" y1={20+i*88} x2="432" y2={20+i*88+44} stroke="rgba(255,255,255,0.05)" strokeWidth="0.7"/>
          <line x1="432" y1={20+i*88} x2="420" y2={20+i*88+44} stroke="rgba(255,255,255,0.04)" strokeWidth="0.7"/>
        </g>
      ))}
      {/* Animated crane jib */}
      <motion.g
        style={{ transformOrigin: '426px 20px' }}
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 9, ease: 'easeInOut' as const, repeat: Infinity }}
      >
        {/* Main jib */}
        <line x1="426" y1="20" x2="620" y2="20" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5"/>
        {/* Counter jib */}
        <line x1="426" y1="20" x2="310" y2="20" stroke="rgba(255,255,255,0.16)" strokeWidth="2"/>
        {/* Counter weight */}
        <rect x="290" y="14" width="22" height="12" fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.18)" strokeWidth="0.5"/>
        {/* Support cables from tower top */}
        <line x1="426" y1="20" x2="540" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="4,3"/>
        <line x1="426" y1="20" x2="350" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="4,3"/>
        {/* Hook cable */}
        <line x1="570" y1="20" x2="570" y2="130" stroke="rgba(255,255,255,0.14)" strokeWidth="0.5" strokeDasharray="3,4"/>
        {/* Hook */}
        <circle cx="570" cy="140" r="7" fill="none" stroke="rgba(249,115,22,0.55)" strokeWidth="1.5" filter="url(#glow-o)"/>
        <path d="M566,140 Q570,145 574,140" stroke="rgba(249,115,22,0.55)" strokeWidth="1.5" fill="none"/>
      </motion.g>

      {/* ── ROOFTOP EQUIPMENT ── */}
      {/* AC units */}
      {[560, 648, 736, 814].map(x => (
        <g key={`ac${x}`}>
          <rect x={x} y="52" width="48" height="22" fill="#0c1422"
            stroke="rgba(59,130,246,0.3)" strokeWidth="0.5"/>
          {/* Louvres */}
          {[5,10,15,20,25,30,35].map(dx => (
            <line key={dx} x1={x+dx} y1="55" x2={x+dx} y2="71"
              stroke="rgba(59,130,246,0.18)" strokeWidth="0.5"/>
          ))}
          {/* Fan */}
          <circle cx={x+40} cy="63" r="7" fill="rgba(59,130,246,0.05)"
            stroke="rgba(59,130,246,0.3)" strokeWidth="0.5"/>
          <motion.g
            style={{ transformOrigin: `${x+40}px 63px` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3 + Math.random(), ease: 'linear' as const, repeat: Infinity }}
          >
            <line x1={x+33} y1="63" x2={x+47} y2="63" stroke="rgba(59,130,246,0.5)" strokeWidth="0.7"/>
            <line x1={x+40} y1="56" x2={x+40} y2="70" stroke="rgba(59,130,246,0.4)" strokeWidth="0.7"/>
          </motion.g>
        </g>
      ))}
      {/* Satellite dish */}
      <g transform="translate(840, 40)">
        <ellipse cx="0" cy="0" rx="12" ry="8" fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" transform="rotate(-20)"/>
        <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        <circle cx="0" cy="0" r="2" fill="rgba(249,115,22,0.5)" filter="url(#glow-o)"/>
      </g>

      {/* ── VERTICAL PIPE RUN (orange, right of main building) ── */}
      <rect x="918" y="60" width="8" height="580" fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.2)" strokeWidth="0.5"/>
      {/* Pipe joints */}
      {[160, 280, 400, 520].map(y => (
        <circle key={y} cx="922" cy={y} r="9" fill="rgba(249,115,22,0.12)"
          stroke="rgba(249,115,22,0.35)" strokeWidth="0.8" filter="url(#glow-o)"/>
      ))}
      {/* Flow animation */}
      <motion.rect
        x="918" width="8" height="60"
        fill="rgba(249,115,22,0.25)"
        animate={{ y: [60, 580] }}
        transition={{ duration: 4, ease: 'linear' as const, repeat: Infinity }}
        style={{ filter: 'url(#glow-o)' }}
      />

      {/* ── CONDUIT (electrical, yellow-tinted) ── */}
      <rect x="940" y="200" width="4" height="440" fill="rgba(251,191,36,0.1)"
        stroke="rgba(251,191,36,0.15)" strokeWidth="0.5"/>
      {/* Junction box */}
      <rect x="933" y="195" width="18" height="24" fill="#08101e"
        stroke="rgba(251,191,36,0.3)" strokeWidth="0.5"/>
      <motion.circle cx="942" cy="207" r="3.5" fill="rgba(251,191,36,0.7)"
        filter="url(#glow-o)"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.2, ease: 'easeInOut' as const, repeat: Infinity }}
      />

      {/* ── HORIZONTAL PIPE RUNS (ground level) ── */}
      {/* Main water pipe */}
      <rect x="0" y="550" width="530" height="7" fill="rgba(59,130,246,0.08)"
        stroke="rgba(59,130,246,0.18)" strokeWidth="0.5"/>
      {/* Pipe flanges */}
      {[100, 220, 350, 460].map(x => (
        <g key={`flange${x}`}>
          <rect x={x-4} y="546" width="8" height="15" fill="rgba(59,130,246,0.12)"
            stroke="rgba(59,130,246,0.25)" strokeWidth="0.5"/>
          <line x1={x-8} y1="553" x2={x+8} y2="553" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5"/>
        </g>
      ))}
      {/* Flow particle */}
      <motion.rect x="0" y="551" width="40" height="5" fill="rgba(59,130,246,0.25)"
        animate={{ x: [0, 530] }}
        transition={{ duration: 6, ease: 'linear' as const, repeat: Infinity }}
      />

      {/* Second pipe level */}
      <rect x="960" y="520" width="480" height="7" fill="rgba(59,130,246,0.07)"
        stroke="rgba(59,130,246,0.14)" strokeWidth="0.5"/>
      {[1050, 1180, 1310].map(x => (
        <g key={`rf${x}`}>
          <rect x={x-4} y="516" width="8" height="15" fill="rgba(59,130,246,0.1)"
            stroke="rgba(59,130,246,0.2)" strokeWidth="0.5"/>
        </g>
      ))}

      {/* ── POWER POLES & LINES ── */}
      {[120, 350].map(x => (
        <g key={`pole${x}`}>
          <line x1={x} y1="640" x2={x} y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
          <line x1={x-18} y1="64" x2={x+18} y2="64" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2"/>
          <circle cx={x-18} cy="64" r="2.5" fill="rgba(255,255,255,0.2)"/>
          <circle cx={x+18} cy="64" r="2.5" fill="rgba(255,255,255,0.2)"/>
        </g>
      ))}
      {/* Power lines */}
      <path d="M102,64 Q200,72 332,64 Q380,60 408,68" fill="none"
        stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
      <path d="M118,64 Q200,75 332,68 Q380,62 408,72" fill="none"
        stroke="rgba(255,255,255,0.05)" strokeWidth="0.7"/>

      {/* ── ELECTRICITY ARC ── */}
      <motion.path
        d="M332,64 L338,60 L335,66 L342,62 L340,68"
        stroke="rgba(251,191,36,0.9)" strokeWidth="0.8" fill="none" filter="url(#glow-o)"
        animate={{ opacity: [0, 0, 1, 0.3, 1, 0, 0, 0, 0, 0] }}
        transition={{ duration: 0.5, ease: 'linear' as const, repeat: Infinity, repeatDelay: 5 }}
      />

      {/* ── WORKERS ── */}
      {/* Worker A: Scaffolding level ~5 (installing AC) */}
      <g transform="translate(878, 250)">
        {/* Hard hat */}
        <path d="M-9,-13 Q0,-22 9,-13 Z" fill="rgba(249,115,22,0.85)" filter="url(#glow-o)"/>
        <line x1="-11" y1="-13" x2="11" y2="-13" stroke="rgba(249,115,22,0.5)" strokeWidth="1"/>
        {/* Head */}
        <circle cy="-4" r="7" fill="rgba(190,140,100,0.75)"/>
        {/* Torso */}
        <rect x="-6" y="4" width="12" height="18" rx="1" fill="rgba(30,50,100,0.7)" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5"/>
        {/* Left arm (reaching to wall) */}
        <line x1="-6" y1="8" x2="-18" y2="14" stroke="rgba(190,140,100,0.65)" strokeWidth="3" strokeLinecap="round"/>
        {/* Tool */}
        <rect x="-26" y="11" width="9" height="4" rx="1.5" fill="rgba(180,180,180,0.6)"/>
        <line x1="-17" y1="13" x2="-22" y2="9" stroke="rgba(180,180,180,0.4)" strokeWidth="1"/>
        {/* Right arm */}
        <line x1="6" y1="8" x2="10" y2="20" stroke="rgba(190,140,100,0.65)" strokeWidth="3" strokeLinecap="round"/>
        {/* Legs */}
        <line x1="-3" y1="22" x2="-4" y2="38" stroke="rgba(20,35,70,0.8)" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="3" y1="22" x2="4" y2="38" stroke="rgba(20,35,70,0.8)" strokeWidth="3.5" strokeLinecap="round"/>
        {/* Feet */}
        <line x1="-4" y1="38" x2="-10" y2="39" stroke="rgba(80,60,40,0.7)" strokeWidth="3" strokeLinecap="round"/>
        <line x1="4" y1="38" x2="10" y2="39" stroke="rgba(80,60,40,0.7)" strokeWidth="3" strokeLinecap="round"/>
      </g>

      {/* Worker B: Scaffolding level ~10 (electrical) */}
      <g transform="translate(884, 460)">
        <path d="M-8,-13 Q0,-21 8,-13 Z" fill="rgba(255,255,255,0.6)"/>
        <line x1="-10" y1="-13" x2="10" y2="-13" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
        <circle cy="-4" r="7" fill="rgba(190,140,100,0.65)"/>
        <rect x="-6" y="4" width="12" height="16" rx="1" fill="rgba(40,60,110,0.6)" stroke="rgba(59,130,246,0.15)" strokeWidth="0.5"/>
        <line x1="6" y1="8" x2="18" y2="4" stroke="rgba(190,140,100,0.6)" strokeWidth="3" strokeLinecap="round"/>
        {/* Electrical tool */}
        <rect x="18" y="0" width="7" height="6" rx="1" fill="rgba(251,191,36,0.5)" filter="url(#glow-o)"/>
        <line x1="-6" y1="8" x2="-8" y2="18" stroke="rgba(190,140,100,0.55)" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-3" y1="20" x2="-3" y2="34" stroke="rgba(20,35,70,0.7)" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="3" y1="20" x2="3" y2="34" stroke="rgba(20,35,70,0.7)" strokeWidth="3.5" strokeLinecap="round"/>
      </g>

      {/* Worker C: Ground level (pipe work) */}
      <g transform="translate(490, 545)">
        <path d="M-8,-13 Q0,-21 8,-13 Z" fill="rgba(249,115,22,0.65)"/>
        <circle cy="-4" r="6" fill="rgba(190,140,100,0.6)"/>
        <rect x="-5" y="3" width="10" height="14" rx="1" fill="rgba(30,50,90,0.55)"/>
        {/* Crouching */}
        <line x1="-5" y1="6" x2="-14" y2="8" stroke="rgba(190,140,100,0.55)" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="5" y1="6" x2="10" y2="12" stroke="rgba(190,140,100,0.55)" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="-3" y1="17" x2="-8" y2="26" stroke="rgba(20,35,70,0.65)" strokeWidth="3" strokeLinecap="round"/>
        <line x1="3" y1="17" x2="8" y2="22" stroke="rgba(20,35,70,0.65)" strokeWidth="3" strokeLinecap="round"/>
        <line x1="8" y1="22" x2="16" y2="22" stroke="rgba(80,60,40,0.6)" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Pipe wrench */}
        <rect x="-18" y="4" width="6" height="3" fill="rgba(200,200,200,0.5)"/>
        <path d="M-12,4 L-12,7 Q-14,7 -14,4 Z" fill="rgba(200,200,200,0.4)"/>
      </g>

      {/* ── SCAN LINE (animated, over main building) ── */}
      <motion.rect
        x="540" width="323" height="1.5"
        fill="rgba(34,211,238,0.2)"
        initial={{ y: 60 }}
        animate={{ y: [60, 640, 60] }}
        transition={{ duration: 7, ease: 'linear' as const, repeat: Infinity }}
        style={{ filter: 'url(#glow-c)' }}
      />

      {/* ── GROUND LINE ── */}
      <line x1="0" y1="630" x2="1440" y2="630" stroke="rgba(59,130,246,0.12)" strokeWidth="0.5"/>
      {/* Hatching */}
      {[...Array(24)].map((_,i) => (
        <line key={`hatch${i}`} x1={i*60} y1="630" x2={i*60-24} y2="650"
          stroke="rgba(59,130,246,0.06)" strokeWidth="0.5"/>
      ))}
      {/* Ground fill */}
      <rect x="0" y="630" width="1440" height="10" fill="url(#ground-fade)"/>

      {/* ── DATA STREAMS (glowing lines up/down) ── */}
      <motion.line
        x1="700" y1="640" x2="700" y2="0"
        stroke="rgba(34,211,238,0.06)" strokeWidth="1"
        strokeDasharray="8 12"
        animate={{ strokeDashoffset: [0, -160] }}
        transition={{ duration: 4, ease: 'linear' as const, repeat: Infinity }}
      />
      <motion.line
        x1="650" y1="640" x2="650" y2="0"
        stroke="rgba(249,115,22,0.05)" strokeWidth="0.8"
        strokeDasharray="6 16"
        animate={{ strokeDashoffset: [0, -176] }}
        transition={{ duration: 5.5, ease: 'linear' as const, repeat: Infinity }}
      />
    </svg>
  )
}
