import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import { areas } from '@/data/areas'

export const metadata: Metadata = {
  title: '【神奈川県 地域別 設備工事求人】厚木市・海老名市・相模原市など10エリア｜宝宮設備',
  description:
    '神奈川県の地域別設備工事求人。厚木市・海老名市・大和市・座間市・伊勢原市・平塚市・相模原市・綾瀬市・藤沢市・秦野市から通勤OK。未経験歓迎・月給25万〜・残業なし。宝宮設備（厚木市本社）。',
  keywords: [
    '神奈川県 設備工事 求人',
    '厚木市 設備工事 求人',
    '海老名市 設備工事 求人',
    '大和市 設備工事 求人',
    '相模原市 設備工事 求人',
    '神奈川 手に職 求人',
    '神奈川 技術職 未経験',
  ],
  alternates: { canonical: 'https://www.houmiya-recruit.com/area' },
  openGraph: {
    title: '【神奈川県 地域別 設備工事求人】厚木市・海老名市・相模原市など10エリア｜宝宮設備',
    description: '神奈川県各地からの設備工事求人情報。10市対応。未経験歓迎・月給25万〜・残業なし。',
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
        <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-16">

          {/* Intro */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-orange-500" />
              <span className="text-[10px] font-black tracking-[0.28em] uppercase text-orange-500">Service Area</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-5">
              神奈川県内10エリアから通勤できます
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
              <p>
                株式会社宝宮設備は、神奈川県厚木市温水西1-4-39に本社を構える設備工事会社です。エアコン工事・給湯器交換・電気工事の3分野で、神奈川県全域を対応エリアとしています。
              </p>
              <p>
                現場直行・直帰・会社車両貸出の制度があるため、本社から離れたエリアにお住まいの方でも通勤負担を抑えて働けます。神奈川県内10エリア（厚木市・海老名市・大和市・座間市・伊勢原市・平塚市・相模原市・綾瀬市・藤沢市・秦野市）から求人情報をご確認いただけます。
              </p>
              <p>
                お住まいの市区町村のページで、アクセス情報・よくある質問・担当現場の傾向をご確認ください。
              </p>
            </div>
          </div>

          {/* Area grid */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-6 pb-3 border-b border-slate-200">
              対応エリア一覧（10市）
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>

          {/* Why Kanagawa */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-5 pb-3 border-b border-slate-200">
              神奈川県で設備工事を仕事にする3つの理由
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  title: '首都圏屈指の住宅需要',
                  body: '神奈川県は人口約920万人（全国2位）。横浜・川崎のほか、相模原・厚木などの内陸部でも住宅・マンション建設が続いています。エアコン工事・給湯器交換の需要が年間を通じて安定しています。',
                },
                {
                  title: '老朽化リノベーション需要の増加',
                  body: '1970〜90年代に建てられた住宅が更新期を迎え、給湯器・電気設備のリフォーム需要が急増しています。神奈川県内では特に戸建て住宅が多い厚木・伊勢原・秦野エリアで更新工事の問い合わせが増えています。',
                },
                {
                  title: '交通網が整備された働きやすいエリア',
                  body: '神奈川県は小田急線・相模線・JR横浜線・東海道線・圏央道など交通網が充実。どのエリアに住んでいても、車を使えば現場への移動がしやすく、1日に複数件の現場を効率よくこなせます。',
                },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 p-5">
                  <div className="w-1.5 h-1.5 bg-orange-500 mb-3" />
                  <h3 className="text-sm font-black text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How direct-to-site commute works */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-5 pb-3 border-b border-slate-200">
              現場直行・直帰の仕組み
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                宝宮設備では、スタッフが自宅（または最寄りの集合場所）から現場に直接向かい、作業完了後に自宅に直帰できる「現場直行・直帰」制度を採用しています。この制度により、本社（厚木市温水西）から離れたエリアにお住まいの方も、通勤時間を大幅に短縮して働けます。
              </p>
              <p>
                現場への移動には会社の軽バン（AT車）を使用します。ガソリン代・高速道路代はすべて会社負担です。毎日の担当現場は前日の夕方に確認でき、翌朝の準備ができます。
              </p>
              <p>
                たとえば藤沢市在住のスタッフが藤沢市内の現場を担当する日は、自宅から現場に直行し、作業完了後に自宅に直帰できます。本社（厚木市）への移動が不要なため、実質的な「通勤時間」がほぼゼロになります。
              </p>
            </div>

            <div className="mt-6 bg-slate-50 p-5 sm:p-6">
              <h3 className="text-sm font-black text-slate-800 mb-3">1日のスケジュール例（現場直行・直帰の場合）</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-[10px] text-orange-500 font-black tracking-widest uppercase mb-2">本社出発の日</p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>8:00 本社到着・準備</li>
                    <li>8:30 本社を車で出発</li>
                    <li>9:00〜 1件目の現場で作業</li>
                    <li>12:00 近くで昼食</li>
                    <li>13:00〜 2件目・3件目の現場</li>
                    <li>17:00 本社または現場近くから退勤</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] text-orange-500 font-black tracking-widest uppercase mb-2">現場直行・直帰の日</p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>8:30 自宅から現場へ直行</li>
                    <li>9:00〜 1件目の現場で作業</li>
                    <li>12:00 近くで昼食（昼食補助あり）</li>
                    <li>13:00〜 2〜3件目の現場</li>
                    <li>17:00 自宅に直帰</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Access info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-5 pb-3 border-b border-slate-200">
              宝宮設備 本社・アクセス情報
            </h2>
            <div className="bg-slate-50 p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3 text-slate-600">
                  <p><span className="font-bold text-slate-700">会社名　</span>株式会社宝宮設備</p>
                  <p><span className="font-bold text-slate-700">所在地　</span>神奈川県厚木市温水西1-4-39</p>
                  <p><span className="font-bold text-slate-700">電話番号　</span><a href="tel:046-205-4558" className="text-orange-500">046-205-4558</a></p>
                  <p><span className="font-bold text-slate-700">対応エリア　</span>神奈川県全域</p>
                </div>
                <div className="space-y-3 text-slate-600">
                  <p><span className="font-bold text-slate-700">事業内容　</span>エアコン工事・給湯器交換・電気工事</p>
                  <p><span className="font-bold text-slate-700">勤務形態　</span>現場直行・直帰あり（車両貸出）</p>
                  <p><span className="font-bold text-slate-700">勤務時間　</span>8:30〜17:00（残業なし）</p>
                  <p><span className="font-bold text-slate-700">給与　</span>月給25万円〜70万円</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-navy py-10 px-6 sm:px-12 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-orange-400 font-black mb-3">Apply Now</p>
            <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
              お住まいの地域から応募する
            </h2>
            <p className="text-sm text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
              通勤方法・担当エリアについてご不明な点は、エントリーフォームまたはお電話でお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto">
              <Link href="/entry" className="flex-1 block text-center bg-orange-500 text-white font-black py-4 text-sm tracking-widest hover:bg-orange-400 transition-colors">
                応募フォームへ →
              </Link>
              <a href="tel:046-205-4558" className="flex-1 block text-center border border-white/30 text-white font-bold py-4 text-sm hover:border-white/60 transition-colors">
                TEL: 046-205-4558
              </a>
            </div>
          </div>

          {/* Internal links */}
          <div className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/jobs', label: '職種別求人' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/recruit', label: '募集要項' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/knowledge', label: '転職ナレッジ' },
                { href: '/column', label: '求人コラム' },
                { href: '/entry', label: 'エントリー' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-slate-500 hover:text-orange-500 transition-colors">
                  {link.label} →
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
