import Link from 'next/link'

export default function EntrySection() {
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-6 h-px bg-orange-500/60" />
          <span className="text-[10px] font-black tracking-[0.28em] uppercase text-orange-500/70">Entry</span>
          <div className="w-6 h-px bg-orange-500/60" />
        </div>

        <h2
          className="font-black text-white tracking-tight mb-4 leading-tight"
          style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
        >
          まずは気軽に<br />
          <span className="text-gradient-orange">ご応募ください</span>
        </h2>

        <p className="text-sm sm:text-base leading-[2] mb-10 mx-auto max-w-md"
          style={{ color: 'rgba(255,255,255,0.45)' }}>
          宝宮設備は未経験の方も大歓迎。<br />
          お電話・フォームからいつでもご連絡いただけます。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/entry"
            className="inline-flex items-center justify-center gap-3 font-black text-sm px-8 py-4 tracking-widest text-white transition-colors"
            style={{ background: '#f97316' }}
          >
            応募フォームへ
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a
            href="tel:046-205-4558"
            className="inline-flex items-center justify-center gap-3 font-medium text-sm px-8 py-4 tracking-widest transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.65)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            046-205-4558
          </a>
        </div>

        <p className="text-xs mt-6 tracking-wide" style={{ color: 'rgba(255,255,255,0.2)' }}>
          受付時間：9:00〜18:00（平日）
        </p>
      </div>
    </section>
  )
}
