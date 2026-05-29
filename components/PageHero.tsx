import Link from 'next/link'

interface Breadcrumb {
  href?: string
  label: string
}

interface Props {
  en: string
  title: string
  subtitle?: string
  breadcrumbs: Breadcrumb[]
  accentColor?: string
}

export default function PageHero({ en, title, subtitle, breadcrumbs, accentColor = '#f97316' }: Props) {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: '#1e293b' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Orange glow */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 0% 0%, rgba(249,115,22,0.06) 0%, transparent 65%)' }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-7">
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {i > 0 && <span>/</span>}
              {b.href ? (
                <Link href={b.href} className="transition-colors" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {b.label}
                </Link>
              ) : (
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{b.label}</span>
              )}
            </span>
          ))}
        </div>

        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-px" style={{ background: accentColor }} />
          <p className="text-[10px] font-black tracking-[0.28em] uppercase" style={{ color: accentColor }}>
            {en}
          </p>
        </div>

        {/* Title */}
        <h1
          className="font-black text-white tracking-tight leading-tight"
          style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm mt-3 leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom diagonal to white */}
      <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full" aria-hidden="true">
          <path d="M0 48 L1440 0 L1440 48 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
