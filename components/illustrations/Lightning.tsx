export default function Lightning({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Glow effect */}
      <ellipse cx="100" cy="140" rx="80" ry="90" fill="#F9C846" opacity="0.08" />
      <ellipse cx="100" cy="140" rx="60" ry="70" fill="#F9C846" opacity="0.08" />
      {/* Main bolt */}
      <path d="M120 10 L72 120 L108 120 L80 270 L148 110 L108 110 Z" fill="url(#bolt-grad)" />
      {/* Highlight */}
      <path d="M120 10 L95 85 L115 85 L120 10Z" fill="rgba(255,255,255,0.4)" />
      {/* Inner bright line */}
      <path d="M118 20 L82 108 L107 108 L82 248 L140 118 L112 118 Z" fill="#FFD740" opacity="0.5" />
      {/* Sparkles */}
      <circle cx="48" cy="60" r="5" fill="#F9C846" opacity="0.6" />
      <circle cx="155" cy="80" r="7" fill="#F9C846" opacity="0.5" />
      <circle cx="42" cy="180" r="4" fill="#F9C846" opacity="0.4" />
      <circle cx="162" cy="200" r="6" fill="#F9C846" opacity="0.5" />
      {/* Small spark lines */}
      <line x1="38" y1="55" x2="48" y2="65" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <line x1="58" y1="55" x2="48" y2="65" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <line x1="48" y1="50" x2="48" y2="60" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <line x1="148" y1="73" x2="158" y2="83" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="168" y1="73" x2="158" y2="83" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="158" y1="68" x2="158" y2="78" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <defs>
        <linearGradient id="bolt-grad" x1="80" y1="10" x2="80" y2="270" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="0.5" stopColor="#F9C846" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  )
}
