import Link from 'next/link'

const footerLinks = [
  { href: '/recruit',           label: '募集要項' },
  { href: '/work',              label: '仕事内容' },
  { href: '/aircon-work',       label: 'エアコン工事求人' },
  { href: '/water-heater-work', label: '給湯器交換求人' },
  { href: '/electrical-work',   label: '電気工事求人' },
  { href: '/beginner',          label: '未経験の方へ' },
  { href: '/staff',             label: 'スタッフ紹介' },
  { href: '/welfare',           label: '福利厚生' },
  { href: '/day',               label: '1日の流れ' },
  { href: '/gallery',           label: '現場ギャラリー' },
  { href: '/blog',              label: '採用ブログ' },
  { href: '/area-kanagawa',     label: '神奈川エリア' },
  { href: '/area-atsugi',       label: '厚木エリア' },
  { href: '/entry',             label: '応募フォーム' },
]

const snsLinks = [
  { href: 'https://www.instagram.com/', label: 'Instagram', abbr: 'IG', note: '施工現場・日常' },
  { href: 'https://www.tiktok.com/',    label: 'TikTok',    abbr: 'TT', note: '工事ショート動画' },
  { href: 'https://line.me/R/ti/p/@432ridrn?oat_content=url',           label: 'LINE',      abbr: 'LN', note: '気軽に問い合わせ' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1e293b', color: 'rgba(255,255,255,0.88)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Company info + logo */}
          <div>
            <div className="mb-6">
              <div className="mb-4 inline-flex" style={{ background: 'rgba(255,255,255,0.95)', padding: '6px 10px', borderRadius: '2px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="株式会社宝宮設備 ロゴ"
                  width={140}
                  height={42}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <p className="text-[11px] tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
                株式会社宝宮設備 採用サイト
              </p>
            </div>

            <div className="space-y-1.5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <p>神奈川県厚木市温水西1-4-39</p>
              <p className="mt-4">
                <a
                  href="tel:046-205-4558"
                  className="text-base font-bold"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  046-205-4558
                </a>
              </p>
              <p>受付時間：9:00〜18:00（平日）</p>
              <p>神奈川県全域対応</p>
            </div>

            {/* SNS — text links only, no embed */}
            <div className="mt-8 flex items-center gap-3 flex-wrap">
              {snsLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.note}
                  className="w-9 h-9 flex items-center justify-center text-[11px] font-bold transition-colors hover:border-white/40"
                  style={{ border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.5)' }}
                >
                  {s.abbr}
                </a>
              ))}
              <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
                SNS フォローはこちら
              </span>
            </div>
          </div>

          {/* Site links */}
          <div>
            <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.3)' }}>
              Site Map
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs transition-colors hover:text-white/80"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Entry */}
          <div>
            <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.3)' }}>
              Entry
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              未経験・経験者ともに歓迎。<br />
              まずは気軽にご応募ください。
            </p>
            <Link
              href="/entry"
              className="block text-center font-black py-4 tracking-widest text-sm"
              style={{ background: '#f97316', color: 'white' }}
            >
              応募フォームへ →
            </Link>
            <a
              href="tel:046-205-4558"
              className="block text-center mt-3 py-3.5 text-sm font-medium tracking-wide"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.55)' }}
            >
              TEL: 046-205-4558
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2025 株式会社宝宮設備. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
            神奈川県厚木市 / 設備工事 / 採用サイト
          </p>
        </div>
      </div>
    </footer>
  )
}
