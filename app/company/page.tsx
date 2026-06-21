import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'

export const metadata: Metadata = {
  title: '会社概要｜厚木市の設備工事会社 株式会社宝宮設備',
  description:
    '株式会社宝宮設備は、神奈川県厚木市温水西を拠点に、エアコン工事・給湯器交換・電気工事を行う設備工事会社です。未経験歓迎の設備工事スタッフ求人も掲載しています。',
  keywords: [
    '株式会社宝宮設備',
    '宝宮設備 採用',
    '宝宮設備 会社概要',
    '厚木市 設備工事会社',
    '厚木市 設備工事 求人',
    '厚木市 電気工事 求人',
    '厚木市 エアコン工事 求人',
    '厚木市 給湯器交換 求人',
    '厚木市 技術職 求人',
  ],
  openGraph: {
    title: '会社概要｜株式会社宝宮設備 採用サイト',
    description:
      '厚木市を拠点に設備工事・エアコン工事・給湯器交換・電気工事を行う株式会社宝宮設備の会社概要ページです。',
    url: 'https://www.houmiya-recruit.com/company',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.houmiya-recruit.com/company' },
}

const BASE_URL = 'https://www.houmiya-recruit.com'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: '株式会社宝宮設備',
  alternateName: 'ほうみや設備',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/images/logo.png`,
  description:
    '神奈川県厚木市温水西1-4-39に本社を置く設備工事会社。エアコン工事・給湯器交換・電気工事・住宅設備工事を神奈川県全域で手がける。',
  telephone: '046-205-4558',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '温水西1-4-39',
    addressLocality: '厚木市',
    addressRegion: '神奈川県',
    postalCode: '243-0036',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.4432,
    longitude: 139.3614,
  },
  areaServed: { '@type': 'State', name: '神奈川県' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:30',
    closes: '17:00',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: '会社概要', item: `${BASE_URL}/company` },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '会社概要｜株式会社宝宮設備',
  url: `${BASE_URL}/company`,
  description:
    '株式会社宝宮設備の会社概要。神奈川県厚木市温水西を拠点に、エアコン工事・給湯器交換・電気工事を行う設備工事会社。',
  isPartOf: { '@type': 'WebSite', url: BASE_URL },
  about: { '@type': 'Organization', name: '株式会社宝宮設備' },
}

const faqItems = [
  {
    q: '宝宮設備はどこにある会社ですか？',
    a: '神奈川県厚木市温水西1-4-39に本社があります。神奈川県のほぼ中央に位置するエリアで、東名高速道路インターチェンジからも近く、神奈川県全域の現場に対応しています。厚木市在住の方は通勤しやすい立地です。',
  },
  {
    q: '主にどのような工事を行っていますか？',
    a: 'エアコン工事・給湯器交換・電気工事・住宅設備工事および各種設備メンテナンスを行っています。住宅を中心に、賃貸物件・マンション・店舗などの設備に関わる工事全般に対応しています。',
  },
  {
    q: '厚木市に住んでいますが、通勤できますか？',
    a: 'はい、もちろんです。本社が厚木市温水西にあるため、厚木市在住の方にとって最も通いやすい職場のひとつです。8:30出発・17:00終業・残業なしなので、プライベートの時間も確保しやすい環境です。',
  },
  {
    q: '設備工事の経験がまったくなくても応募できますか？',
    a: '応募できます。入社者の多くが設備工事未経験スタートです。入社後は先輩スタッフと一緒に現場に出て、工具の使い方・作業手順をゼロから教えます。普通自動車免許（AT限定可）をお持ちであれば、設備工事の知識はなくても大丈夫です。',
  },
  {
    q: '入社後に資格を取得できますか？',
    a: 'はい。第二種電気工事士・冷媒取扱技術者などの資格取得を会社が全額支援します。受験料・テキスト・講習費用はすべて会社負担です。資格取得後は担当できる作業の範囲が広がり、月給のアップにつながります。',
  },
  {
    q: '電気工事士の資格を目指せますか？',
    a: 'はい。第二種電気工事士の取得を目指せます。資格取得費用は全額会社負担で、残業なし（8:30〜17:00）の環境なので仕事後に勉強時間を確保しやすいです。入社後1〜2年を目安に取得できます。',
  },
  {
    q: 'マイカーを持っていなくても働けますか？',
    a: '現場への移動は会社の軽バン（AT車）を使うため、仕事でマイカーを使う必要はありません。ただし本社（厚木市温水西）までの通勤手段をご確認ください。バス・電車の場合など、まずはご相談ください。',
  },
  {
    q: '応募する前に見学や相談はできますか？',
    a: 'もちろんです。「まだ迷っている」「仕事内容を実際に見てから決めたい」という方も、お気軽にお電話またはフォームからご連絡ください。見学・面談の日程は柔軟に調整します。プレッシャーなくご相談いただけます。',
  },
  {
    q: '給与・待遇を教えてください。',
    a: '月給25万円〜70万円（未経験スタートは研修終了後に月給250,000円〜）。賞与年2回（夏・冬の手当て）、社会保険完備、資格取得支援（全額会社負担）、車両貸出、昼食補助、制服貸与、社宅相談可。残業なし（8:30〜17:00）です。',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function CompanyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        en="Company"
        title="会社概要"
        subtitle="株式会社宝宮設備について"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '会社概要' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-16">

          {/* 1. 会社概要テーブル */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              会社概要
            </h2>
            <div className="overflow-x-auto">
              <table className="recruit-table">
                <tbody>
                  <tr>
                    <th>会社名</th>
                    <td>株式会社宝宮設備</td>
                  </tr>
                  <tr>
                    <th>代表者</th>
                    <td>代表取締役 小宮龍亮</td>
                  </tr>
                  <tr>
                    <th>所在地</th>
                    <td>神奈川県厚木市温水西1-4-39</td>
                  </tr>
                  <tr>
                    <th>電話番号</th>
                    <td>
                      <a href="tel:046-205-4558" className="text-orange-500 font-bold hover:text-orange-400 transition-colors">
                        046-205-4558
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>事業内容</th>
                    <td>エアコン工事・給湯器交換・電気工事・住宅設備工事・各種設備メンテナンス</td>
                  </tr>
                  <tr>
                    <th>採用職種</th>
                    <td>エアコン工事・給湯器交換・電気工事スタッフ（正社員）</td>
                  </tr>
                  <tr>
                    <th>雇用形態</th>
                    <td>正社員</td>
                  </tr>
                  <tr>
                    <th>勤務時間</th>
                    <td>8:30〜17:00（残業なし）</td>
                  </tr>
                  <tr>
                    <th>備考</th>
                    <td>未経験歓迎・資格取得支援あり（全額会社負担）・車両貸出あり・社宅相談可</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. 宝宮設備について */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              宝宮設備について
            </h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                株式会社宝宮設備は、神奈川県厚木市温水西に拠点を置く設備工事会社です。
                エアコン工事・給湯器交換・電気工事を中心に、住宅・マンション・賃貸物件・店舗の設備に関わる工事全般を手がけています。
              </p>
              <p>
                設備工事は、人々の毎日の暮らしを直接支える仕事です。夏の暑さをしのぐエアコン、毎朝シャワーを使うための給湯器、
                照明やコンセントを支える電気設備——こうした当たり前の暮らしの裏側には、工事スタッフの技術があります。
              </p>
              <p>
                神奈川県全域の現場に対応していますが、拠点が厚木市にあるため、厚木市・海老名市・大和市・座間市・伊勢原市など
                神奈川県中央エリアの現場が中心です。厚木市在住の方にとって、通勤距離が短く働きやすい環境です。
              </p>
            </div>
          </div>

          {/* 3. 代表メッセージ */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              代表メッセージ
            </h2>
            <div className="border-l-4 border-orange-400 pl-6 py-2 mb-6">
              <p className="text-sm font-black text-navy mb-0.5">代表取締役</p>
              <p className="text-base font-black text-navy">小宮龍亮</p>
            </div>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                「ただ働くだけじゃない。一生使える技術を、ここで身につける。」——それが宝宮設備の考え方です。
              </p>
              <p>
                設備工事の技術は、一度身につければずっと使えるものです。「第二種電気工事士」などの国家資格を持つことで、
                転職・独立・副業と、将来の選択肢が広がります。手に職をつけることが、長い目で見て一番の安定だと思っています。
              </p>
              <p>
                宝宮設備では、未経験から入社したスタッフが多く在籍しています。設備工事の経験がゼロでも、
                道具の扱い方から作業の順番まで、先輩スタッフが現場で丁寧に教えます。資格取得の費用も全額会社が負担します。
                「やる気があれば、あとはこちらで育てる」という環境を整えています。
              </p>
              <p>
                厚木市を拠点に、一緒に働ける仲間を探しています。手に職をつけたい方、技術職にチャレンジしたい方のご応募をお待ちしています。
              </p>
            </div>
          </div>

          {/* 4. 事業内容 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              事業内容
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'エアコン工事',
                  badge: '家庭用・業務用',
                  link: '/jobs/aircon',
                  desc: '家庭用・業務用エアコンの取付・交換・移設・撤去・試運転確認を行います。室内機・室外機の設置から冷媒配管の接続、電気接続まで一貫して対応。夏の繁忙期（6〜9月）は神奈川県内の住宅・マンション・賃貸物件から多数の依頼があります。',
                  detail: 'エアコン工事を担当するスタッフは「冷媒取扱技術者（第二種）」の取得を支援します。受験費用・テキスト・講習費用は全額会社が負担します。',
                },
                {
                  title: '給湯器交換',
                  badge: 'ガス・エコキュート',
                  link: '/jobs/water-heater',
                  desc: '老朽化した給湯器の撤去・新規給湯器（ガス給湯器・エコキュート）の取付・配管接続・試運転確認を行います。厚木市内の住宅を中心に、年間を通じて安定した依頼があります。省エネ機器（エコキュート）への切り替えリフォームにも対応しています。',
                  detail: '給湯器交換は作業工程が明確で、未経験スタートの方が最初に担当しやすい職種のひとつです。先輩スタッフとの同行で実務を覚えます。',
                },
                {
                  title: '電気工事',
                  badge: '第二種電気工事士',
                  link: '/jobs/electrical',
                  desc: '住宅・マンション・小規模店舗の電気工事全般（照明器具交換・コンセント増設・分電盤交換・電源工事・エアコン専用回路新設など）を行います。電気工事を担当するには「第二種電気工事士」の国家資格が必要で、宝宮設備では取得費用を全額会社が負担します。',
                  detail: '電気工事士の資格は年2回受験機会があります。仕事後（17:00終業）に勉強時間を確保しやすく、入社後1〜2年での取得を目標にサポートします。',
                },
                {
                  title: '住宅設備工事・メンテナンス',
                  badge: '総合対応',
                  link: '/jobs',
                  desc: 'エアコン・給湯器・電気設備以外の住宅設備に関わる工事やメンテナンスにも対応しています。住宅の暮らしを支える設備全般の維持・更新を担う仕事です。神奈川県全域の住宅・マンション・賃貸物件をカバーします。',
                  detail: '複数の職種をまたいで幅広く担当できるスタッフは、月給が高くなる傾向があります。3職種すべての基本技術を習得したスタッフが活躍しています。',
                },
              ].map((item) => (
                <div key={item.title} className="border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-3 bg-navy px-5 py-3">
                    <h3 className="text-white font-black text-sm">{item.title}</h3>
                    <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 font-bold flex-shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{item.desc}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 pl-3 border-l-2 border-orange-200">
                      {item.detail}
                    </p>
                    <Link href={item.link} className="text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors">
                      {item.title}の求人詳細を見る →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. 宝宮設備で働く特徴 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              宝宮設備で働く特徴
            </h2>
            <div className="space-y-0">
              {[
                {
                  title: '未経験歓迎',
                  body: '設備工事の経験・知識がなくても応募できます。入社者の多くが前職とは異なる業種からの転職者です。',
                },
                {
                  title: '資格取得支援（全額会社負担）',
                  body: '第二種電気工事士・冷媒取扱技術者などの資格取得費用（受験料・テキスト・講習費）をすべて会社が負担します。',
                },
                {
                  title: '車両貸出',
                  body: '現場への移動は会社の軽バン（AT車）を使います。燃料費・高速代は会社負担。マイカーは通勤のみ。',
                },
                {
                  title: '社宅相談可',
                  body: '神奈川県外から転職してくる方や、引越しを検討している方の社宅利用相談に応じます。',
                },
                {
                  title: '社会保険完備',
                  body: '健康保険・厚生年金・雇用保険・労災保険の社会保険4種を完備しています。正社員として長く安心して働ける環境です。',
                },
                {
                  title: '昼食補助',
                  body: '昼食代の補助制度があります。現場や本社での昼食費用を一部会社が負担します。',
                },
                {
                  title: '残業なし（8:30〜17:00）',
                  body: '勤務時間は8:30〜17:00で固定。繁忙期でも残業なし。プライベートと仕事の両立がしやすい環境です。',
                },
                {
                  title: '厚木市を拠点に働ける',
                  body: '本社が神奈川県厚木市温水西にあります。厚木市在住の方は通勤距離が短く、周辺市（海老名・大和・座間・伊勢原）からも通いやすい立地です。',
                },
              ].map((item) => (
                <div key={item.title} className="reason-row">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/welfare" className="text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors">
                福利厚生の詳細を見る →
              </Link>
            </div>
          </div>

          {/* 6. 厚木市で設備工事の仕事を探す方へ */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木市で設備工事の仕事を探す方へ
            </h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                宝宮設備の本社は神奈川県厚木市温水西1-4-39にあります。厚木市は神奈川県のほぼ中央に位置し、
                東名高速道路インターチェンジや圏央道が近く、神奈川県全域の現場に移動しやすい立地です。
                厚木市在住の方にとって、通勤距離が短く働きやすい職場です。
              </p>
              <p>
                厚木市内では住宅地・マンション・賃貸物件が多く、エアコン工事・給湯器交換・電気工事の依頼が年間を通じて安定しています。
                「厚木市で手に職をつけたい」「設備工事・電気工事・エアコン工事の仕事を厚木市で始めたい」という方を積極採用しています。
              </p>
              <p>
                厚木市周辺エリア（海老名市・大和市・座間市・伊勢原市）からの応募も歓迎しています。
                本社での面接後、会社の軽バンで現場へ向かう流れです。
              </p>
            </div>
            <div className="mt-5 p-5 bg-gray-50 border border-gray-200">
              <p className="text-xs text-gray-500 mb-3">厚木市の設備工事求人を詳しく確認する</p>
              <Link
                href="/area/atsugi"
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-navy px-5 py-2.5 hover:bg-navy/80 transition-colors"
              >
                厚木市の設備工事求人を見る →
              </Link>
            </div>
          </div>

          {/* 7. FAQ */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              よくある質問
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-gray-200 bg-white">
                  <div className="flex items-start gap-3 p-4 sm:p-5">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-xs font-black flex items-center justify-center mt-0.5">
                      Q
                    </span>
                    <p className="text-sm font-bold text-navy leading-snug">{item.q}</p>
                  </div>
                  <div className="flex items-start gap-3 px-4 sm:px-5 pb-4 sm:pb-5 bg-slate-50">
                    <span className="flex-shrink-0 w-6 h-6 bg-navy text-white text-xs font-black flex items-center justify-center mt-0.5">
                      A
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Link href="/faq" className="text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors">
                よくある質問をすべて見る（60問以上） →
              </Link>
            </div>
          </div>

          {/* 8. CTA */}
          <div className="bg-slate-50 p-6 sm:p-10 text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-orange-500 font-black mb-3">Apply</p>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-3">
              厚木市で設備工事スタッフを募集しています
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto">
              株式会社宝宮設備では、厚木市を拠点にエアコン工事・給湯器交換・電気工事スタッフを募集しています。
              未経験から手に職をつけたい方は、まず募集要項をご確認ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <Link
                href="/entry"
                className="inline-flex items-center justify-center font-black text-sm px-8 py-4 tracking-widest text-white bg-orange-500 hover:bg-orange-400 transition-colors"
              >
                応募フォームへ →
              </Link>
              <Link
                href="/recruit"
                className="inline-flex items-center justify-center font-medium text-sm px-8 py-4 border border-gray-300 text-gray-600 hover:border-gray-500 transition-colors"
              >
                募集要項を見る
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center font-medium text-sm px-8 py-4 border border-gray-300 text-gray-600 hover:border-gray-500 transition-colors"
              >
                職種別求人一覧
              </Link>
              <a
                href="tel:046-205-4558"
                className="inline-flex items-center justify-center font-medium text-sm px-8 py-4 border border-gray-300 text-gray-600 hover:border-gray-500 transition-colors"
              >
                TEL: 046-205-4558
              </a>
            </div>
          </div>

          {/* 内部リンク */}
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-3 tracking-wider uppercase">関連ページ</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/area/atsugi', label: '厚木市の設備工事求人' },
                { href: '/jobs', label: '職種別求人一覧' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/recruit', label: '募集要項' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/work', label: '仕事内容' },
                { href: '/entry', label: '応募フォーム' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-gray-500 hover:text-orange-500 transition-colors"
                >
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
