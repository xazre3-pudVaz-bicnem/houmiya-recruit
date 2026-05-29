'use client'
import { motion } from 'framer-motion'

interface Props {
  className?: string
}

export default function CityScene({ className = '' }: Props) {
  const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]
  const floatA = {
    y: [0, -14, 0],
    transition: { duration: 5, ease: 'easeInOut' as const, repeat: Infinity },
  }
  const floatB = {
    y: [0, -20, 0],
    transition: { duration: 7, ease: 'easeInOut' as const, repeat: Infinity, delay: 1 },
  }
  const floatC = {
    y: [0, -10, 0],
    transition: { duration: 4, ease: 'easeInOut' as const, repeat: Infinity, delay: 0.5 },
  }

  return (
    <svg
      viewBox="0 0 560 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Orange glow filter */}
        <filter id="glow-o" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Strong glow */}
        <filter id="glow-strong" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Soft shadow */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.6)" />
        </filter>
        {/* Worker skin gradient */}
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4956a" />
          <stop offset="100%" stopColor="#c07840" />
        </linearGradient>
        {/* Building gradient */}
        <linearGradient id="bldg-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141928" />
          <stop offset="100%" stopColor="#0a0d14" />
        </linearGradient>
        {/* Orange glow gradient */}
        <radialGradient id="orb-orange" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orb-blue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="scaffold-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(249,115,22,0.6)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0.2)" />
        </linearGradient>
      </defs>

      {/* ── BACKGROUND GLOW ORBS ── */}
      <ellipse cx="420" cy="200" rx="180" ry="180" fill="url(#orb-orange)" opacity="0.35" />
      <ellipse cx="100" cy="500" rx="140" ry="140" fill="url(#orb-blue)" opacity="0.25" />

      {/* ── FAR BACKGROUND BUILDINGS ── */}
      <motion.g
        opacity="0.25"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.25, y: 0 }}
        transition={{ delay: 0.2, duration: 1.2, ease }}
      >
        {/* Building far-left */}
        <rect x="0" y="310" width="60" height="370" fill="#111827" />
        {/* Windows */}
        {[0,1,2,3,4,5,6].map(r => [0,1,2].map(c => (
          <rect key={`fl${r}${c}`} x={6+c*18} y={316+r*48} width="10" height="16" rx="1"
            fill={Math.random() > 0.4 ? '#f97316' : '#1e2d3f'} opacity={Math.random() > 0.4 ? 0.6 : 0.3} />
        )))}

        {/* Building center-back */}
        <rect x="80" y="240" width="50" height="440" fill="#0f1520" />
        {[0,1,2,3,4,5,6,7].map(r => [0,1].map(c => (
          <rect key={`fb${r}${c}`} x={85+c*22} y={248+r*48} width="14" height="18" rx="1"
            fill={r < 3 || Math.random() > 0.5 ? '#1e3a5f' : '#3b82f6'} opacity={0.4} />
        )))}

        {/* Building far-right */}
        <rect x="490" y="350" width="70" height="330" fill="#111827" />
        {[0,1,2,3].map(r => [0,1,2].map(c => (
          <rect key={`fr${r}${c}`} x={496+c*20} y={358+r*72} width="12" height="28" rx="1"
            fill="#f97316" opacity={0.25 + Math.random() * 0.2} />
        )))}

        {/* Antenna on center building */}
        <line x1="105" y1="240" x2="105" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <circle cx="105" cy="198" r="3" fill="#f97316" opacity="0.7" />
      </motion.g>

      {/* ── MAIN BUILDING FRAME ── */}
      <motion.g
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.4, ease }}
      >
        {/* Building shell */}
        <rect x="160" y="180" width="240" height="500" fill="url(#bldg-grad)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* Floor dividers */}
        {[280, 380, 480, 580].map((y, i) => (
          <line key={i} x1="160" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        ))}

        {/* Column lines */}
        <line x1="240" y1="180" x2="240" y2="680" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="320" y1="180" x2="320" y2="680" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

        {/* Windows — various states */}
        {/* Floor 4 (top) — dark, incomplete */}
        <rect x="170" y="195" width="55" height="70" rx="1" fill="#0d1420" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <rect x="248" y="195" width="55" height="70" rx="1" fill="#0d1420" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <rect x="326" y="195" width="55" height="70" rx="1" fill="#f97316" opacity="0.12" stroke="rgba(249,115,22,0.25)" strokeWidth="0.5" />

        {/* Floor 3 — partially lit */}
        <rect x="170" y="295" width="55" height="70" rx="1" fill="#1a2a42" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
        <rect x="248" y="295" width="55" height="70" rx="1" fill="#3b82f6" opacity="0.1" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" />
        <rect x="326" y="295" width="55" height="70" rx="1" fill="#f97316" opacity="0.15" stroke="rgba(249,115,22,0.3)" strokeWidth="0.5" />

        {/* Floor 2 */}
        <rect x="170" y="395" width="55" height="70" rx="1" fill="#0d1420" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        <rect x="248" y="395" width="55" height="70" rx="1" fill="#0d1420" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        <rect x="326" y="395" width="55" height="70" rx="1" fill="#0d1420" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

        {/* Floor 1 */}
        <rect x="170" y="495" width="55" height="70" rx="1" fill="#1a2a42" />
        <rect x="248" y="495" width="55" height="70" rx="1" fill="#1a2a42" />
        <rect x="326" y="495" width="55" height="70" rx="1" fill="#1a2a42" />

        {/* Orange accent stripe */}
        <rect x="160" y="178" width="240" height="3" fill="url(#scaffold-grad)" />
      </motion.g>

      {/* ── SCAFFOLDING / FRAME ── */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1, ease }}
        filter="url(#shadow)"
      >
        {/* Left vertical pole */}
        <rect x="145" y="150" width="6" height="540" rx="3" fill="#1c2535" />
        {/* Right vertical pole */}
        <rect x="409" y="150" width="6" height="540" rx="3" fill="#1c2535" />

        {/* Horizontal platforms */}
        {[180, 280, 380, 480].map((y, i) => (
          <rect key={i} x="138" y={y - 5} width="284" height="8" rx="2"
            fill={i === 0 ? '#f97316' : '#1c2535'}
            opacity={i === 0 ? 0.7 : 0.9}
          />
        ))}

        {/* Orange accent on top scaffold */}
        <rect x="138" y="175" width="284" height="2" fill="#f97316" opacity="0.4" />

        {/* Cross braces */}
        <line x1="145" y1="180" x2="415" y2="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
        <line x1="415" y1="180" x2="145" y2="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
        <line x1="145" y1="280" x2="415" y2="380" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
        <line x1="415" y1="280" x2="145" y2="380" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
      </motion.g>

      {/* ── WORKER 1: AC INSTALLATION (floor 3, right wall) ── */}
      <motion.g
        animate={floatB}
        style={{ transformOrigin: '370px 300px' }}
        initial={{ opacity: 0, x: 30 }}
        // @ts-ignore
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {/* AC unit on wall */}
        <rect x="410" y="295" width="55" height="32" rx="3" fill="#1a2540" stroke="rgba(69,183,209,0.4)" strokeWidth="1.5" />
        <rect x="414" y="299" width="47" height="24" rx="2" fill="#0d1a2e" />
        {/* AC vents */}
        {[0,1,2,3].map(i => <line key={i} x1={418+i*10} y1="306" x2={418+i*10} y2="318" stroke="rgba(69,183,209,0.4)" strokeWidth="1" />)}
        {/* LED */}
        <motion.circle cx="454" cy="316" r="2.5" fill="#f97316"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        {/* Pipe from AC */}
        <path d="M437 327 Q437 340 420 340 L400 340" stroke="rgba(69,183,209,0.3)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Worker 1 body — in hard hat, arms up */}
        {/* Hard hat */}
        <ellipse cx="376" cy="288" rx="15" ry="8" fill="#f97316" />
        <rect x="363" y="292" width="26" height="4" rx="2" fill="#cc5f0e" />
        {/* Head */}
        <circle cx="376" cy="302" r="11" fill="url(#skin)" />
        {/* Hi-vis vest body */}
        <path d="M363 314 L363 355 Q376 362 389 355 L389 314 Q382 310 376 313 Q370 310 363 314Z" fill="#f97316" opacity="0.9" />
        {/* Dark collar */}
        <rect x="370" y="312" width="12" height="6" rx="1" fill="#1a2030" />
        {/* Reflective strips */}
        <line x1="363" y1="330" x2="389" y2="330" stroke="#ffdd80" strokeWidth="2.5" opacity="0.7" />
        <line x1="363" y1="345" x2="389" y2="345" stroke="#ffdd80" strokeWidth="2.5" opacity="0.7" />
        {/* Arm reaching up toward AC */}
        <path d="M389 320 Q400 310 408 298" stroke="url(#skin)" strokeWidth="9" fill="none" strokeLinecap="round" />
        {/* Hand holding tool */}
        <circle cx="409" cy="296" r="5" fill="#888" />
        <path d="M409 291 L409 284 M406 294 L402 290" stroke="#aaa" strokeWidth="2" strokeLinecap="round" />
        {/* Other arm down */}
        <path d="M363 320 L355 338" stroke="url(#skin)" strokeWidth="8" fill="none" strokeLinecap="round" />
        {/* Pants */}
        <path d="M363 355 L358 400 M389 355 L394 400" stroke="#1a2642" strokeWidth="12" strokeLinecap="round" />
        {/* Shoes */}
        <ellipse cx="357" cy="401" rx="8" ry="4" fill="#0d1020" />
        <ellipse cx="395" cy="401" rx="8" ry="4" fill="#0d1020" />
      </motion.g>

      {/* ── WORKER 2: WATER HEATER (floor 1, left) ── */}
      <motion.g
        animate={floatC}
        style={{ transformOrigin: '195px 530px' }}
        initial={{ opacity: 0, x: -20 }}
        // @ts-ignore
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {/* Water heater unit */}
        <rect x="168" y="485" width="36" height="70" rx="4" fill="#162030" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Cylinder top */}
        <ellipse cx="186" cy="485" rx="18" ry="6" fill="#1c2840" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Dial */}
        <circle cx="186" cy="510" r="8" fill="#0a0e18" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <circle cx="186" cy="510" r="3" fill="#f97316" opacity="0.8" />
        {/* Flame indicator */}
        <path d="M183 548 Q184 542 186 546 Q188 540 189 548" stroke="#f97316" strokeWidth="1.5" fill="rgba(249,115,22,0.15)" strokeLinecap="round" filter="url(#glow-o)" />
        {/* Pipes */}
        <path d="M186 555 L186 570 L160 570" stroke="rgba(180,200,220,0.3)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M186 490 L186 475 L210 475" stroke="rgba(180,200,220,0.3)" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Worker 2 — crouching, examining heater */}
        {/* Hard hat */}
        <ellipse cx="218" cy="498" rx="14" ry="7" fill="#f97316" />
        <rect x="206" y="502" width="24" height="3" rx="1.5" fill="#cc5f0e" />
        {/* Head */}
        <circle cx="218" cy="511" r="10" fill="url(#skin)" />
        {/* Torso (crouching) */}
        <path d="M208 522 Q218 518 228 522 L226 555 Q218 558 210 555 Z" fill="#2563eb" opacity="0.85" />
        {/* Reflective strip */}
        <line x1="208" y1="538" x2="228" y2="538" stroke="#ffdd80" strokeWidth="2" opacity="0.6" />
        {/* Arm forward (examining) */}
        <path d="M208 530 Q198 525 190 520" stroke="url(#skin)" strokeWidth="8" fill="none" strokeLinecap="round" />
        {/* Crouched legs */}
        <path d="M210 555 L200 585 M226 555 L236 585" stroke="#1a2642" strokeWidth="11" strokeLinecap="round" />
        <ellipse cx="199" cy="586" rx="8" ry="3.5" fill="#0d1020" />
        <ellipse cx="237" cy="586" rx="8" ry="3.5" fill="#0d1020" />
        {/* Clipboard/tablet in hand */}
        <rect x="155" y="510" width="28" height="20" rx="2" fill="#1c2535" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Lines on clipboard */}
        {[0,1,2].map(i => <line key={i} x1={159} y1={514+i*5} x2={179} y2={514+i*5} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />)}
      </motion.g>

      {/* ── WORKER 3: ELECTRICAL (floor 2, center) ── */}
      <motion.g
        animate={floatA}
        style={{ transformOrigin: '280px 440px' }}
        initial={{ opacity: 0, y: 20 }}
        // @ts-ignore
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        {/* Electrical panel */}
        <rect x="318" y="400" width="52" height="65" rx="3" fill="#0f1822" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Panel header */}
        <rect x="318" y="400" width="52" height="12" rx="3" fill="#1a2535" />
        {/* Breakers */}
        {[0,1,2,3].map(r => [0,1].map(c => (
          <rect key={`br${r}${c}`} x={322+c*22} y={416+r*10} width="18" height="6" rx="1"
            fill={r < 2 ? '#f97316' : '#1a2535'} opacity={r < 2 ? 0.7 : 0.4}
          />
        )))}
        {/* Cable coming out */}
        <path d="M318 440 Q305 440 300 435 L265 435" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Worker 3 — standing, working on panel */}
        {/* Hard hat */}
        <ellipse cx="265" cy="398" rx="15" ry="8" fill="#fbbf24" opacity="0.9" />
        <rect x="252" y="402" width="26" height="4" rx="2" fill="#d97706" />
        {/* Head */}
        <circle cx="265" cy="413" r="11" fill="url(#skin)" />
        {/* Vest */}
        <path d="M252 425 L252 470 Q265 476 278 470 L278 425 Q271 421 265 424 Q259 421 252 425Z" fill="#dc2626" opacity="0.85" />
        {/* Reflective */}
        <line x1="252" y1="443" x2="278" y2="443" stroke="#ffdd80" strokeWidth="2.5" opacity="0.65" />
        <line x1="252" y1="458" x2="278" y2="458" stroke="#ffdd80" strokeWidth="2.5" opacity="0.65" />
        {/* Arm toward panel */}
        <path d="M278 435 Q292 433 315 436" stroke="url(#skin)" strokeWidth="9" fill="none" strokeLinecap="round" />
        {/* Screwdriver in hand */}
        <line x1="315" y1="436" x2="323" y2="428" stroke="#bbb" strokeWidth="3" strokeLinecap="round" />
        <rect x="321" y="427" width="5" height="8" rx="1" fill="#f97316" opacity="0.8" />
        {/* Other arm down */}
        <path d="M252 432 L244 452" stroke="url(#skin)" strokeWidth="8" fill="none" strokeLinecap="round" />
        {/* Legs */}
        <path d="M252 470 L247 520 M278 470 L283 520" stroke="#1e3a5f" strokeWidth="12" strokeLinecap="round" />
        <ellipse cx="246" cy="521" rx="8" ry="3.5" fill="#0d1020" />
        <ellipse cx="284" cy="521" rx="8" ry="3.5" fill="#0d1020" />
      </motion.g>

      {/* ── FLOATING TOOLS / ELEMENTS ── */}
      {/* Wrench floating */}
      <motion.g
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        style={{ transformOrigin: '460px 430px' }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
        filter="url(#glow-o)"
      >
        <path d="M468 420 C472 416 478 418 476 424 L460 440 L464 444 L460 448 L452 440 L456 436 L472 420Z"
          fill="#f97316" opacity="0.75" />
        <circle cx="472" cy="416" r="5" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.75" />
      </motion.g>

      {/* Lightning bolt */}
      <motion.g
        animate={{ y: [0, -12, 0], opacity: [0.7, 1, 0.7] }}
        style={{ transformOrigin: '125px 250px' }}
        transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
        filter="url(#glow-o)"
      >
        <path d="M132 238 L123 258 L129 258 L120 278 L134 254 L127 254 Z"
          fill="#fbbf24" opacity="0.8" />
      </motion.g>

      {/* Water drop */}
      <motion.g
        animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
        style={{ transformOrigin: '450px 570px' }}
        transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
      >
        <path d="M450 558 C450 558 440 568 440 575 C440 581 444 586 450 586 C456 586 460 581 460 575 C460 568 450 558 450 558Z"
          fill="#45b7d1" opacity="0.55" />
        <ellipse cx="446" cy="572" rx="3" ry="5" fill="rgba(255,255,255,0.2)" transform="rotate(-15 446 572)" />
      </motion.g>

      {/* Gear/cog */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        style={{ transformOrigin: '490px 160px' }}
        transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
        opacity="0.3"
      >
        <circle cx="490" cy="160" r="16" fill="none" stroke="rgba(249,115,22,0.6)" strokeWidth="3" />
        <circle cx="490" cy="160" r="8" fill="none" stroke="rgba(249,115,22,0.4)" strokeWidth="2" />
        {[0,45,90,135,180,225,270,315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x1 = 490 + 16 * Math.cos(rad)
          const y1 = 160 + 16 * Math.sin(rad)
          const x2 = 490 + 22 * Math.cos(rad)
          const y2 = 160 + 22 * Math.sin(rad)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(249,115,22,0.6)" strokeWidth="3.5" strokeLinecap="round" />
        })}
      </motion.g>

      {/* Pipe cross-fitting */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease }}
        style={{ transformOrigin: '100px 380px' }}
      >
        <rect x="86" y="376" width="28" height="8" rx="4" fill="#2a3a5c" />
        <rect x="96" y="366" width="8" height="28" rx="4" fill="#2a3a5c" />
        <circle cx="100" cy="380" r="5" fill="#f97316" opacity="0.5" filter="url(#glow-o)" />
      </motion.g>

      {/* Small orange dots (accent particles) */}
      {[
        { cx: 135, cy: 170, r: 2.5, delay: 0 },
        { cx: 445, cy: 480, r: 2, delay: 0.5 },
        { cx: 155, cy: 460, r: 1.5, delay: 1 },
        { cx: 430, cy: 200, r: 3, delay: 1.5 },
        { cx: 290, cy: 155, r: 2, delay: 0.8 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="#f97316"
          animate={{ opacity: [0.3, 1, 0.3], r: [dot.r, dot.r * 1.4, dot.r] }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: dot.delay }}
          filter="url(#glow-o)"
        />
      ))}

      {/* Scan line / orange highlight line across building */}
      <motion.line
        x1="160" y1="250" x2="400" y2="250"
        stroke="#f97316"
        strokeWidth="1"
        opacity="0.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1.5, ease }}
      />

      {/* Ground line */}
      <line x1="100" y1="650" x2="460" y2="650" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <motion.line
        x1="160" y1="650" x2="400" y2="650"
        stroke="#f97316"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 2, duration: 1.2, ease }}
      />
    </svg>
  )
}
