import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import { areas } from '@/data/areas'

export const metadata: Metadata = {
  title: '地域別求人｜神奈川県の設備工事スタッフ募集',
  description:
    '神奈川県厚木市・海老名市・大和市・座間市・伊勢原市・平塚市・相模原市の設備工事求人情報。宝宮設備は神奈川県全域で設備工事スタッフを募集しています。未経験歓迎。',
  keywords: [
    '神奈川県 設備工事 求人',
    '厚木市 設備工事 求人',
    '海老名市 設備工事 求人',
    '大和市 設備工事 求人',
    '相模原市 設備工事 求人',
  ],
  alternates: { canonical: 'https://www.houmiya-recruit.com/area' },
  openGraph: {
    title: '地域別求人｜神奈川県の設備工事スタッフ募集',
    description: '神奈川県各地からの設備工事求人情報。厚木市・海老名市・大和市・座間市・伊勢原市・平塚市・相模原市。',
    url: 'https://www.houmiya-recruit.com/area',
    locale: 'ja_JP',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '地域別求人', item: 'https://www.houmiya-recruit.com/area' },
  ],
}

export default function AreaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        en="Area"
        title="地域別求人"
        subtitle="神奈川県全域で設備工事スタッフを募集"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '地域別求人' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* Intro */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-orange-500" />
              <span className="text-[10px] font-black tracking-[0.28em] uppercase text-orange-500">Service Area</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-4">
              神奈川県各地から通勤できます
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              宝宮設備は神奈川県厚木市に本社を置き、県内全域の現場を担当しています。
              現場直行・直帰・会社車両貸出があるため、神奈川県内のさまざまなエリアから通勤可能です。
              お住まいの地域から詳細をご確認ください。
            </p>
          </div>

          {/* Area grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {areas.map((area) => (
              <Link
                key={area.city}
                href={`/area/${area.city}`}
                className="group border border-slate-200 p-6 hover:border-orange-300 transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[10px] text-slate-400 tracking-widest uppercase mb-1">{area.nameKana}</p>
                    <h3 className="text-lg font-black text-slate-800 group-hover:text-orange-500 transition-colors">
                      {area.name}
                    </h3>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border border-slate-200 group-hover:border-orange-300 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 2.5l3.5 3.5L7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-orange-500 transition-colors" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  <p className="text-[11px] text-slate-400">{area.keyword}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Map embed info */}
          <div className="bg-slate-50 p-6 sm:p-8 mb-12">
            <h2 className="text-base font-black text-slate-800 mb-4">宝宮設備 本社・アクセス</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2 text-slate-600">
                <p><span className="font-bold text-slate-700">会社名</span>　株式会社宝宮設備</p>
                <p><span className="font-bold text-slate-700">所在地</span>　神奈川県厚木市温水西1-4-39</p>
                <p><span className="font-bold text-slate-700">電話番号</span>　<a href="tel:046-205-4558" className="text-orange-500">046-205-4558</a></p>
                <p><span className="font-bold text-slate-700">対応エリア</span>　神奈川県全域</p>
              </div>
              <div className="space-y-2 text-slate-600">
                <p><span className="font-bold text-slate-700">事業内容</span>　エアコン工事・給湯器交換・電気工事</p>
                <p><span className="font-bold text-slate-700">勤務形態</span>　現場直行・直帰あり（車両貸出）</p>
                <p><span className="font-bold text-slate-700">勤務時間</span>　8:30〜17:00（残業なし）</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-6">
              お住まいのエリアから通勤できるか、まずはお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/entry" className="inline-flex items-center justify-center gap-2 font-black text-sm px-8 py-4 tracking-widest text-white bg-orange-500 hover:bg-orange-400 transition-colors">
                応募フォームへ →
              </Link>
              <Link href="/recruit" className="inline-flex items-center justify-center gap-2 font-medium text-sm px-8 py-4 border border-slate-300 text-slate-600 hover:border-slate-500 transition-colors">
                募集要項を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
