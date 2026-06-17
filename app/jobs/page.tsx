import type { Metadata } from 'next'
import Link from 'next/link'
import { jobs } from '@/data/jobs'

export const metadata: Metadata = {
  title: '職種別求人情報｜神奈川県の設備工事会社・宝宮設備',
  description:
    '神奈川県の設備工事求人。エアコン工事・給湯器交換・電気工事・設備工事（総合）の4職種別に詳細を掲載。未経験歓迎・月給25万〜70万円・残業なし。宝宮設備（厚木市）。',
  keywords: ['設備工事 求人 神奈川', 'エアコン工事 求人', '給湯器交換 求人', '電気工事 求人 神奈川'],
  openGraph: {
    title: '職種別求人情報｜神奈川県の設備工事会社・宝宮設備',
    description: '神奈川県の設備工事求人4職種。エアコン工事・給湯器交換・電気工事・設備工事スタッフ。未経験歓迎・月給25万〜70万円。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/jobs' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '職種別求人', item: 'https://www.houmiya-recruit.com/jobs' },
  ],
}

const typeIcons: Record<string, string> = {
  aircon: '❄',
  'water-heater': '🔥',
  electrical: '⚡',
  setsubi: '🔧',
}

export default function JobsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-navy pt-16 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-orange-400 font-black mb-3">Jobs</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            職種別求人情報
          </h1>
          <p className="text-sm text-white/60">神奈川県の設備工事スタッフ募集 — 4職種の詳細情報</p>
          <nav className="mt-6 flex items-center gap-2 text-xs text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">トップ</Link>
            <span>›</span>
            <span className="text-white/50">職種別求人</span>
          </nav>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
              株式会社宝宮設備では、エアコン工事・給湯器交換・電気工事・設備工事（総合）の4職種でスタッフを募集しています。
              すべての職種で未経験歓迎・資格取得支援（全額会社負担）・残業なし（8:30〜17:00）。
              興味のある職種の詳細ページをご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <Link
                key={job.type}
                href={`/jobs/${job.type}`}
                className="block border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200 p-6 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{typeIcons[job.type] ?? '🔨'}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-black text-navy group-hover:text-orange-500 transition-colors mb-2 leading-tight">
                      {job.jobTitle}
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{job.lead}</p>
                    <div className="mt-3 flex items-center gap-3 flex-wrap">
                      <span className="text-[11px] text-orange-500 font-bold">月給25万〜70万円</span>
                      <span className="text-[11px] text-gray-400">残業なし</span>
                      <span className="text-[11px] text-gray-400">未経験歓迎</span>
                    </div>
                    <span className="mt-3 inline-flex items-center text-[11px] font-bold text-orange-500 group-hover:text-orange-600">
                      詳細を見る →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-6 sm:p-8">
            <h3 className="text-sm font-bold text-navy mb-3">共通の募集条件</h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                ['雇用形態', '正社員'],
                ['給与', '月給25万円〜70万円（未経験：研修後250,000円〜）'],
                ['勤務時間', '8:30〜17:00（残業なし）'],
                ['勤務地', '神奈川県全域（本社：厚木市温水西1-4-39）'],
                ['資格', '未経験歓迎・資格取得費用は会社全額負担'],
                ['福利厚生', '社会保険完備・車両貸出・昼食補助・社宅相談可'],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <dt className="text-[11px] font-bold text-gray-500 w-20 shrink-0 pt-0.5">{k}</dt>
                  <dd className="text-[12px] text-gray-700">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/entry"
              className="flex-1 block text-center bg-orange-500 text-white font-black py-4 text-sm tracking-widest hover:bg-orange-400 transition-colors"
            >
              応募フォームへ →
            </Link>
            <Link
              href="/recruit"
              className="flex-1 block text-center border border-navy text-navy font-bold py-4 text-sm tracking-wide hover:bg-navy hover:text-white transition-colors"
            >
              募集要項を見る
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 tracking-widest mb-4">関連ページ</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: '/column', label: '求人コラム' },
                { href: '/area', label: '地域別求人' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/work', label: '仕事内容' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-gray-500 hover:text-orange-500 transition-colors">
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
