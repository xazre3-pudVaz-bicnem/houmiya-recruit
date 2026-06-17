import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import { columns } from '@/data/columns'

export const metadata: Metadata = {
  title: '求人コラム｜設備工事の仕事・転職情報',
  description:
    '設備工事（エアコン工事・給湯器交換・電気工事）の仕事内容・求人情報・転職ノウハウをコラム形式で発信。神奈川県・厚木市の設備工事会社・宝宮設備が運営。',
  keywords: [
    '設備工事 求人 コラム',
    '神奈川 設備工事 求人',
    '厚木市 設備工事 求人',
    '設備工事 未経験',
    '給湯器工事 求人',
  ],
  alternates: { canonical: 'https://www.houmiya-recruit.com/column' },
  openGraph: {
    title: '求人コラム｜設備工事の仕事・転職情報',
    description: '設備工事の仕事内容・求人情報・転職ノウハウを発信するコラムページです。',
    url: 'https://www.houmiya-recruit.com/column',
    locale: 'ja_JP',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '求人コラム', item: 'https://www.houmiya-recruit.com/column' },
  ],
}

const categoryColors: Record<string, string> = {
  '地域求人情報': 'text-blue-600 bg-blue-50',
  '仕事内容': 'text-green-600 bg-green-50',
  '未経験の方へ': 'text-orange-600 bg-orange-50',
  'キャリア': 'text-purple-600 bg-purple-50',
}

export default function ColumnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        en="Column"
        title="求人コラム"
        subtitle="設備工事の仕事・転職・資格取得情報"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '求人コラム' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* Intro */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-orange-500" />
              <span className="text-[10px] font-black tracking-[0.28em] uppercase text-orange-500">Articles</span>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              神奈川県・厚木市で設備工事の求人を探している方に向け、仕事内容・未経験からの挑戦方法・資格取得情報などをコラム形式でお届けします。
            </p>
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {columns.map((col) => {
              const colorClass = categoryColors[col.category] ?? 'text-slate-600 bg-slate-50'
              return (
                <article key={col.slug} className="group flex flex-col">
                  {/* Color accent top bar */}
                  <div className="h-0.5 bg-orange-500 mb-5 scale-x-50 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-[11px] text-slate-400 tracking-wide font-medium">
                      {col.publishedAt.replace(/-/g, '.')}
                    </time>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${colorClass}`}>
                      {col.category}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/column/${col.slug}`}>
                    <h2 className="text-base font-black text-slate-800 leading-snug mb-3 group-hover:text-orange-500 transition-colors">
                      {col.title}
                    </h2>
                  </Link>

                  {/* Lead */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {col.lead}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {col.keywords.slice(0, 2).map((kw) => (
                      <span key={kw} className="text-[10px] text-slate-400 border border-slate-200 px-2 py-0.5">
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <Link
                    href={`/column/${col.slug}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 group-hover:text-orange-500 transition-colors tracking-wide"
                  >
                    続きを読む
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 2.5l3.5 3.5L7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </article>
              )
            })}
          </div>

          {/* Internal links */}
          <div className="mt-16 pt-12 border-t border-slate-100">
            <p className="text-xs text-slate-400 tracking-widest uppercase mb-5">関連ページ</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/recruit', label: '募集要項' },
                { href: '/work', label: '仕事内容' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/area', label: '地域別求人' },
                { href: '/faq', label: 'よくある質問' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium px-4 py-2 border border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
