export default function ACUnit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Shadow */}
      <ellipse cx="140" cy="155" rx="110" ry="8" fill="rgba(0,0,0,0.12)" />
      {/* Main body */}
      <rect x="10" y="30" width="260" height="110" rx="14" fill="#EEF2FF" />
      <rect x="10" y="30" width="260" height="110" rx="14" fill="url(#ac-body-grad)" />
      {/* Front face */}
      <rect x="16" y="36" width="248" height="98" rx="10" fill="white" />
      {/* Grille area */}
      <rect x="24" y="72" width="180" height="52" rx="6" fill="#EEF2FF" />
      {/* Grille lines */}
      {[80, 90, 100, 110, 116].map((y, i) => (
        <line key={i} x1="28" y1={y} x2="200" y2={y} stroke="#C7D2FE" strokeWidth="2" />
      ))}
      {/* Vane hint */}
      <path d="M28 118 Q110 112 200 118" stroke="#A5B4FC" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Control panel right side */}
      <rect x="212" y="50" width="46" height="62" rx="6" fill="#F0F4FF" />
      {/* Power button */}
      <circle cx="235" cy="66" r="11" fill="#1A2642" />
      <path d="M235 59 L235 66" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M229 62 A8 8 0 1 0 241 62" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* LED strip */}
      <rect x="216" y="84" width="38" height="6" rx="3" fill="#0EA5E9" opacity="0.7" />
      {/* Temp display */}
      <rect x="216" y="96" width="38" height="12" rx="3" fill="#1A2642" />
      <text x="235" y="106" textAnchor="middle" fill="#45B7D1" fontSize="8" fontWeight="bold" fontFamily="monospace">26°</text>
      {/* Logo area */}
      <rect x="24" y="42" width="100" height="24" rx="4" fill="#F8FAFF" />
      <rect x="28" y="50" width="60" height="3" rx="1" fill="#C7D2FE" />
      <rect x="28" y="57" width="40" height="2" rx="1" fill="#E0E7FF" />
      {/* Top mount */}
      <rect x="60" y="16" width="160" height="18" rx="6" fill="#1A2642" />
      <rect x="90" y="20" width="100" height="10" rx="5" fill="#243555" />
      {/* Air waves (animated via CSS) */}
      <path className="ac-wave-1" d="M60 148 Q100 140 140 148 Q180 156 220 148" stroke="#45B7D1" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      <path className="ac-wave-2" d="M40 148 Q90 136 140 148 Q190 160 240 148" stroke="#45B7D1" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" />
      <defs>
        <linearGradient id="ac-body-grad" x1="10" y1="30" x2="10" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EEF2FF" />
          <stop offset="1" stopColor="#E0E7FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
