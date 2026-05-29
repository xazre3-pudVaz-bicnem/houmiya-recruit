export default function WaterHeater({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Shadow */}
      <ellipse cx="100" cy="295" rx="70" ry="8" fill="rgba(0,0,0,0.12)" />
      {/* Back panel */}
      <rect x="30" y="20" width="140" height="240" rx="12" fill="#1A2642" />
      {/* Main tank cylinder */}
      <rect x="40" y="30" width="120" height="220" rx="18" fill="url(#wh-grad)" />
      {/* Tank highlight */}
      <rect x="50" y="40" width="30" height="200" rx="12" fill="rgba(255,255,255,0.06)" />
      {/* Control panel */}
      <rect x="50" y="100" width="100" height="80" rx="8" fill="#243555" />
      <rect x="55" y="105" width="90" height="70" rx="6" fill="#1e3055" />
      {/* Temperature dial */}
      <circle cx="100" cy="135" r="24" fill="#1A2642" stroke="#45B7D1" strokeWidth="2" />
      <path d="M100 116 L100 125" stroke="#45B7D1" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M100 145 L100 154" stroke="#45B7D1" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M81 135 L90 135" stroke="#45B7D1" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M110 135 L119 135" stroke="#45B7D1" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="100" cy="135" r="8" fill="#F59E0B" />
      <circle cx="100" cy="135" r="4" fill="#FCD34D" />
      {/* Status LED */}
      <circle cx="68" cy="158" r="5" fill="#10B981" />
      <circle cx="68" cy="158" r="3" fill="#6EE7B7" />
      {/* Brand label */}
      <rect x="62" y="166" width="76" height="10" rx="3" fill="rgba(255,255,255,0.07)" />
      {/* Top pipe */}
      <rect x="82" y="8" width="18" height="28" rx="6" fill="#8A9BB0" />
      <circle cx="91" cy="8" r="9" fill="#6B7A8D" />
      {/* Bottom pipes */}
      <rect x="62" y="248" width="16" height="28" rx="6" fill="#8A9BB0" />
      <rect x="122" y="248" width="16" height="28" rx="6" fill="#8A9BB0" />
      <rect x="48" y="270" width="30" height="10" rx="4" fill="#6B7A8D" />
      <rect x="122" y="270" width="30" height="10" rx="4" fill="#6B7A8D" />
      {/* Flame indicator at bottom */}
      <path d="M86 240 C86 230 94 232 94 220 C94 232 106 228 100 240 C106 240 104 248 96 248 C88 248 86 240 86 240Z" fill="#F97316" opacity="0.8" />
      <path d="M92 238 C92 232 98 234 96 228 C98 234 104 230 100 238 C104 238 102 244 96 244 C90 244 92 238 92 238Z" fill="#FCD34D" opacity="0.9" />
      <defs>
        <linearGradient id="wh-grad" x1="40" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2D4A6E" />
          <stop offset="0.5" stopColor="#243555" />
          <stop offset="1" stopColor="#1A2642" />
        </linearGradient>
      </defs>
    </svg>
  )
}
