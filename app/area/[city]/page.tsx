import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import { areas, getAreaByCity } from '@/data/areas'

interface Props {
  params: { city: string }
}

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.city }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getAreaByCity(params.city)
  if (!area) return { title: 'Not Found' }
  return {
    title: `${area.keyword}｜宝宮設備 採用サイト`,
    description: area.metaDescription,
    keywords: [area.keyword, '設備工事 求人', '宝宮設備 採用', '未経験 設備工事'],
    alternates: { canonical: `https://www.houmiya-recruit.com/area/${area.city}` },
    openGraph: {
      title: `${area.keyword}｜宝宮設備 採用サイト`,
      description: area.metaDescription,
      url: `https://www.houmiya-recruit.com/area/${area.city}`,
      locale: 'ja_JP',
      type: 'website',
    },
  }
}

export default function AreaDetailPage({ params }: Props) {
  const area = getAreaByCity(params.city)
  if (!area) notFound()

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '株式会社宝宮設備',
    description: area.metaDescription,
    url: 'https://www.houmiya-recruit.com',
    telephone: '046-205-4558',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '温水西1-4-39',
      addressLocality: '厚木市',
      addressRegion: '神奈川県',
      postalCode: '243-0036',
      addressCountry: 'JP',
    },
    areaServed: { '@type': 'AdministrativeArea', name: area.name },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
      { '@type': 'ListItem', position: 2, name: '地域別求人', item: 'https://www.houmiya-recruit.com/area' },
      { '@type': 'ListItem', position: 3, name: `${area.name}の設備工事求人`, item: `https://www.houmiya-recruit.com/area/${area.city}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        en="Area"
        title={`${area.name}の設備工事求人`}
        subtitle={area.keyword}
        breadcrumbs={[
          { href: '/', label: 'トップ' },
          { href: '/area', label: '地域別求人' },
          { label: area.name },
        ]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-6">
              {area.name}から設備工事の仕事を探す方へ
            </h2>
            {area.intro.map((p, i) => (
              <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>

          {/* Access & commute */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-50 p-6">
              <h3 className="text-sm font-black text-slate-700 mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-orange-500" />
                アクセス
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{area.access}</p>
            </div>
            <div className="bg-slate-50 p-6">
              <h3 className="text-sm font-black text-slate-700 mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-orange-500" />
                通勤について
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{area.commute}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-slate-800 tracking-tight mb-5 pb-3 border-b border-slate-200">
              {area.name}で宝宮設備が選ばれる理由
            </h2>
            <div className="space-y-4">
              {area.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-orange-500 flex items-center justify-center text-white text-[10px] font-black mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company info box */}
          <div className="bg-navy py-8 px-6 sm:px-10 mb-12">
            <h2 className="text-base font-black text-white tracking-tight mb-5">会社・求人情報</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                { label: '会社名', value: '株式会社宝宮設備' },
                { label: '本社所在地', value: '神奈川県厚木市温水西1-4-39' },
                { label: '電話番号', value: '046-205-4558' },
                { label: '給与', value: '月給25万円〜70万円（未経験：研修後250,000円〜）' },
                { label: '勤務時間', value: '8:30〜17:00（残業なし）' },
                { label: '福利厚生', value: '社会保険完備・資格取得支援・車両貸出' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] text-white/40 tracking-widest uppercase mb-0.5">{item.label}</p>
                  <p className="text-white font-medium text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby areas */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-slate-800 tracking-tight mb-5 pb-3 border-b border-slate-200">
              {area.name}周辺の対応エリア
            </h2>
            <div className="flex flex-wrap gap-2">
              {area.nearbyAreas.map((nearby) => (
                <span
                  key={nearby}
                  className="text-xs px-3 py-1.5 border border-slate-200 text-slate-500"
                >
                  {nearby}
                </span>
              ))}
              <span className="text-xs px-3 py-1.5 bg-orange-50 border border-orange-200 text-orange-600 font-medium">
                神奈川県全域対応
              </span>
            </div>
          </div>

          {/* Jobs at this area */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-slate-800 tracking-tight mb-5 pb-3 border-b border-slate-200">
              {area.name}エリアの求人職種
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'エアコン工事スタッフ', link: '/aircon-work', desc: `エアコン取付・交換工事。${area.name}エリア担当。未経験歓迎。` },
                { title: '給湯器交換スタッフ', link: '/water-heater-work', desc: `給湯器撤去・新規取付工事。${area.name}・神奈川県対応。` },
                { title: '電気工事スタッフ', link: '/electrical-work', desc: `電気配線・設備工事。資格取得支援あり。未経験可。` },
              ].map((item) => (
                <div key={item.title} className="border border-slate-200 p-5">
                  <h3 className="text-sm font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{item.desc}</p>
                  <Link href={item.link} className="text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors">
                    詳細を見る →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/entry" className="inline-flex items-center justify-center gap-2 font-black text-sm px-8 py-4 tracking-widest text-white bg-orange-500 hover:bg-orange-400 transition-colors">
              応募フォームへ →
            </Link>
            <Link href="/recruit" className="inline-flex items-center justify-center gap-2 font-medium text-sm px-8 py-4 border border-slate-300 text-slate-600 hover:border-slate-500 transition-colors">
              募集要項を見る
            </Link>
            <a href="tel:046-205-4558" className="inline-flex items-center justify-center gap-2 font-medium text-sm px-8 py-4 border border-slate-300 text-slate-600 hover:border-slate-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              046-205-4558
            </a>
          </div>

          {/* Back */}
          <div className="mt-10">
            <Link href="/area" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-600 transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 6H2M5 2.5L1.5 6 5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              地域一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
