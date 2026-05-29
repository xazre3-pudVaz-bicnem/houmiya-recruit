export default function Worker({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Ground shadow */}
      <ellipse cx="130" cy="348" rx="72" ry="11" fill="rgba(0,0,0,0.18)" />

      {/* Hard hat dome */}
      <path d="M74 100 C74 56 186 56 186 100" fill="#F9C846" />
      {/* Hard hat brim */}
      <rect x="56" y="96" width="148" height="22" rx="11" fill="#F9C846" />
      <rect x="58" y="106" width="144" height="10" rx="5" fill="#E6B200" />
      {/* Hat band */}
      <rect x="74" y="88" width="112" height="12" rx="4" fill="#FFD740" opacity="0.6" />

      {/* Head */}
      <circle cx="130" cy="148" r="44" fill="#F5C798" />
      {/* Cheeks */}
      <circle cx="106" cy="158" r="10" fill="#F2A97A" opacity="0.5" />
      <circle cx="154" cy="158" r="10" fill="#F2A97A" opacity="0.5" />
      {/* Eyes */}
      <ellipse cx="114" cy="142" rx="8" ry="9" fill="white" />
      <ellipse cx="146" cy="142" rx="8" ry="9" fill="white" />
      <circle cx="116" cy="143" r="5" fill="#1A2642" />
      <circle cx="148" cy="143" r="5" fill="#1A2642" />
      <circle cx="117" cy="141" r="2" fill="white" />
      <circle cx="149" cy="141" r="2" fill="white" />
      {/* Eyebrows */}
      <path d="M106 132 Q114 127 122 132" stroke="#9B6A4A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M138 132 Q146 127 154 132" stroke="#9B6A4A" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Nose */}
      <ellipse cx="130" cy="155" rx="4" ry="3" fill="#E8A070" />
      {/* Smile */}
      <path d="M115 168 Q130 182 145 168" stroke="#C07040" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Neck */}
      <rect x="112" y="190" width="36" height="20" fill="#F5C798" />

      {/* Body - Work uniform */}
      <rect x="52" y="208" width="156" height="120" rx="14" fill="#1A2642" />
      {/* Uniform detail - chest */}
      <rect x="100" y="208" width="60" height="14" fill="rgba(255,255,255,0.06)" />
      {/* Pocket left */}
      <rect x="62" y="230" width="38" height="30" rx="5" fill="rgba(255,255,255,0.07)" />
      <rect x="68" y="226" width="26" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      {/* Company logo circle */}
      <circle cx="84" cy="252" r="14" fill="rgba(69,183,209,0.2)" stroke="#45B7D1" strokeWidth="2" />
      <path d="M77 252 L84 246 L91 252 L84 258 Z" fill="#45B7D1" />
      {/* Collar / V-neck */}
      <path d="M100 208 L130 236 L160 208" fill="rgba(255,255,255,0.05)" />
      {/* Belt */}
      <rect x="52" y="322" width="156" height="12" rx="4" fill="#243555" />
      <rect x="116" y="318" width="28" height="18" rx="3" fill="#45B7D1" />

      {/* Left arm */}
      <rect x="0" y="214" width="58" height="28" rx="14" fill="#1A2642" />
      {/* Left sleeve stripe */}
      <rect x="42" y="214" width="12" height="28" rx="6" fill="rgba(69,183,209,0.3)" />
      {/* Left hand */}
      <circle cx="18" cy="228" r="20" fill="#F5C798" />
      {/* Wrench in left hand */}
      <g transform="translate(0, 210) rotate(-25, 18, 18)">
        <rect x="12" y="0" width="12" height="42" rx="5" fill="#7A8B9E" />
        <path d="M6 0 A12 12 0 0 1 30 0 L28 8 L8 8 Z" fill="#8A9BAE" />
        <path d="M8 8 L28 8 L26 14 L10 14 Z" fill="#6B7A8D" />
      </g>

      {/* Right arm */}
      <rect x="202" y="214" width="58" height="28" rx="14" fill="#1A2642" />
      <rect x="206" y="214" width="12" height="28" rx="6" fill="rgba(69,183,209,0.3)" />
      {/* Right hand */}
      <circle cx="242" cy="228" r="20" fill="#F5C798" />
      {/* Clipboard in right hand */}
      <rect x="224" y="208" width="34" height="42" rx="4" fill="white" />
      <rect x="234" y="204" width="14" height="10" rx="5" fill="#8A9BB0" />
      <rect x="228" y="218" width="26" height="3" rx="1" fill="#C5CDD9" />
      <rect x="228" y="225" width="20" height="3" rx="1" fill="#C5CDD9" />
      <rect x="228" y="232" width="23" height="3" rx="1" fill="#C5CDD9" />
      <rect x="228" y="239" width="18" height="3" rx="1" fill="#C5CDD9" />

      {/* Legs */}
      <rect x="72" y="326" width="52" height="56" rx="10" fill="#0D1828" />
      <rect x="136" y="326" width="52" height="56" rx="10" fill="#0D1828" />
      {/* Leg stripe */}
      <rect x="90" y="326" width="8" height="56" rx="3" fill="rgba(69,183,209,0.2)" />
      <rect x="154" y="326" width="8" height="56" rx="3" fill="rgba(69,183,209,0.2)" />
      {/* Boots */}
      <rect x="60" y="358" width="68" height="20" rx="10" fill="#111827" />
      <rect x="132" y="358" width="68" height="20" rx="10" fill="#111827" />
    </svg>
  )
}
