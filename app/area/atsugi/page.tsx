import type { Metadata } from 'next'
import Link from 'next/link'
import EntrySection from '@/components/EntrySection'

export const metadata: Metadata = {
  title: '厚木市の設備工事求人｜未経験歓迎・エアコン工事・給湯器交換・電気工事',
  description:
    '厚木市で設備工事求人を探している方へ。株式会社宝宮設備（厚木市温水西）では、エアコン工事・給湯器交換・電気工事スタッフを募集中。未経験歓迎・月給25万円〜70万円・資格取得支援あり・残業なし。',
  keywords: [
    '厚木市 設備工事 求人',
    '厚木市 電気工事 求人',
    '厚木市 エアコン工事 求人',
    '厚木市 給湯器交換 求人',
    '厚木市 未経験 求人',
    '厚木市 技術職 求人',
    '厚木市 手に職 求人',
    '厚木市 正社員 求人',
  ],
  openGraph: {
    title: '厚木市の設備工事求人｜株式会社宝宮設備',
    description:
      '厚木市で設備工事求人を探している方へ。エアコン工事・給湯器交換・電気工事スタッフ募集。未経験歓迎・月給25万〜70万円・資格取得支援あり。',
    locale: 'ja_JP',
    type: 'website',
    url: 'https://www.houmiya-recruit.com/area/atsugi',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.houmiya-recruit.com/area/atsugi' },
}

const BASE_URL = 'https://www.houmiya-recruit.com'

const faqItems = [
  {
    q: '厚木市から応募できますか？',
    a: 'はい。本社が厚木市温水西にあるため、厚木市在住の方にとって最も通いやすい求人です。本社周辺にお住まいの方は、自転車や路線バスで通勤できる距離の方もいます。',
  },
  {
    q: '勤務地は厚木市ですか？',
    a: '本社は厚木市温水西1-4-39です。現場は神奈川県全域を担当しますが、厚木市内やその近隣（海老名・大和・座間・伊勢原）の現場も多く、厚木市在住の方にとって移動しやすい環境です。8:30出発→17:00終業（現場直帰可）という働き方です。',
  },
  {
    q: '厚木市内の現場は多いですか？',
    a: '厚木市は住宅地が多く、エアコン工事・給湯器交換の依頼が安定して入ります。担当する現場の一定数が厚木市内です。日によっては近隣市（海老名・座間など）に出ることもあります。',
  },
  {
    q: '未経験でも厚木市で設備工事スタッフとして働けますか？',
    a: 'はい。入社者の多くが設備工事未経験スタートです。最初は先輩スタッフと2人組で現場に出て、工具の使い方・作業手順を実務の中で覚えていきます。3〜6ヶ月かけて基本技術を習得するカリキュラムがあります。厚木市在住で「手に職をつけたい」という方を積極採用しています。',
  },
  {
    q: '普通免許AT限定でも応募できますか？',
    a: 'はい、AT限定免許で応募可能です。現場への移動は会社の軽バン（AT車）を使います。MT免許は不要です。',
  },
  {
    q: '厚木市で電気工事の仕事を探していますが、応募できますか？',
    a: 'もちろんです。電気工事スタッフとしてご応募いただけます。「第二種電気工事士」の資格取得費用を会社が全額負担します。厚木市を拠点に神奈川県全域の電気工事現場を担当します。資格取得後は昇給につながります。',
  },
  {
    q: '厚木市でエアコン工事の経験がなくても大丈夫ですか？',
    a: '大丈夫です。エアコン工事の知識ゼロから始めた先輩スタッフが多数います。入社後の研修で工具の使い方・冷媒配管の接続・取付手順を丁寧に教えます。厚木市周辺でエアコン工事の需要は高く、実践経験を積みやすい環境です。',
  },
  {
    q: '厚木市で給湯器交換の仕事を覚えられますか？',
    a: 'はい。給湯器交換は作業工程が比較的明確で、未経験から習得しやすい仕事のひとつです。配管接続・機器固定・試運転の手順を先輩から実務で覚えます。厚木市・海老名市・伊勢原市などで給湯器交換の現場が多く、実践経験を積めます。',
  },
  {
    q: '厚木市外から通勤することもできますか？',
    a: 'もちろん可能です。海老名市・大和市・座間市・伊勢原市など近隣市からの通勤者もいます。本社（厚木市温水西）まで車で通勤していただく形になります。現場直行・直帰を活用することで実質的な移動負担を減らせます。',
  },
  {
    q: '車両貸出はありますか？',
    a: 'はい。現場への移動は会社の軽バン（AT車）を使います。工具・資材も車に積んで移動します。マイカーで本社まで通勤し、そこから軽バンで現場へ向かう流れです。燃料費・高速代は会社負担です。',
  },
  {
    q: '資格取得支援はありますか？',
    a: 'はい、費用は全額会社負担です。エアコン工事では「冷媒取扱技術者（第二種）」、電気工事では「第二種電気工事士」などの取得をサポートします。受験料・テキスト・講習費用はすべて会社が負担します。',
  },
  {
    q: '残業はありますか？',
    a: '残業はありません。勤務時間は8:30〜17:00で、繁忙期でも17:00に終業します。1日あたりの担当件数を適切に調整しているため、残業が発生しない業務量を維持しています。',
  },
  {
    q: '給与はどのくらいですか？',
    a: '月給25万円〜70万円です。未経験スタートの方は研修終了後から月給250,000円〜となります。技術・資格の習得に応じて随時昇給します。賞与（夏・冬の手当て）も年2回あります。',
  },
  {
    q: '応募から採用までの流れを教えてください。',
    a: 'エントリーフォームまたはお電話でご連絡→書類確認・日程調整→面接（厚木市の本社にて）→内定・入社日の決定、という流れです。面接日程は柔軟に調整できます。詳しくはエントリーフォームからお問い合わせください。',
  },
  {
    q: '厚木市温水西の本社周辺はどのような環境ですか？',
    a: '温水西は厚木市の住宅地で、周辺にはコンビニ・飲食店・スーパーがあります。国道129号からもアクセスしやすく、海老名・伊勢原方面への移動もスムーズです。本社には倉庫があり、工具・資材の管理をしています。',
  },
  {
    q: '厚木市在住ではありませんが、厚木市に引越したほうがよいですか？',
    a: '必須ではありませんが、厚木市在住だと通勤・現場直行が非常に楽になります。近隣市（海老名市・大和市・座間市・伊勢原市など）在住の方も多く在籍しています。社宅相談が可能ですので、転居を検討中の方はまずご相談ください。',
  },
  {
    q: '設備工事スタッフは将来的に収入を増やせますか？',
    a: 'はい。技術の向上・資格取得によって担当できる現場の幅が広がり、月給が随時見直されます。未経験スタート（月給25万円〜）から、複数の資格を持つベテランスタッフは月給70万円超も可能です。年功序列ではなく、実力主義の給与体系です。',
  },
  {
    q: '社会保険はどんな内容ですか？',
    a: '健康保険・厚生年金・雇用保険・労災保険の4種が完備されています。入社日から適用されます。厚生年金は国民年金より受給額が多く、長期的な安心につながります。保険料は会社と折半です。',
  },
  {
    q: '厚木市で長く安定して働くことはできますか？',
    a: 'はい。設備工事は需要が安定しており、景気に左右されにくい仕事です。残業なし・社会保険完備・資格取得支援という環境で、30代・40代まで現役で活躍できます。技術と資格は定年まで通用するポータブルスキルです。',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '株式会社宝宮設備',
  description:
    '神奈川県厚木市温水西1-4-39の設備工事会社。エアコン工事・給湯器交換・電気工事スタッフ求人。未経験歓迎・残業なし・資格取得支援あり。',
  url: BASE_URL,
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
  areaServed: { '@type': 'AdministrativeArea', name: '神奈川県' },
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
    { '@type': 'ListItem', position: 2, name: '地域別求人', item: `${BASE_URL}/area` },
    { '@type': 'ListItem', position: 3, name: '厚木市の設備工事求人', item: `${BASE_URL}/area/atsugi` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function AtsugiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-navy pt-16 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-orange-400 font-black mb-3">Area / Atsugi</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            厚木市の設備工事求人
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            エアコン工事・給湯器交換・電気工事スタッフを募集中。未経験歓迎・残業なし・資格取得支援あり。
            神奈川県厚木市温水西の株式会社宝宮設備が、厚木市で一緒に働く仲間を探しています。
          </p>
          <nav className="mt-6 flex items-center gap-2 text-xs text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">トップ</Link>
            <span>›</span>
            <Link href="/area" className="hover:text-white/60 transition-colors">地域別求人</Link>
            <span>›</span>
            <span className="text-white/50">厚木市</span>
          </nav>
        </div>
      </section>

      {/* Key stats */}
      <section className="bg-orange-500 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: '給与', value: '月25万〜70万円' },
              { label: '勤務時間', value: '8:30〜17:00' },
              { label: '残業', value: 'なし' },
              { label: '未経験', value: '歓迎' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] text-white/70 tracking-widest uppercase mb-0.5">{item.label}</p>
                <p className="text-white font-black text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-16">

          {/* 1. 厚木市で設備工事求人を探している方へ */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木市で設備工事求人を探している方へ
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                株式会社宝宮設備は、神奈川県厚木市温水西1-4-39に本社を置く設備工事会社です。
                エアコン工事・給湯器交換・電気工事の3職種でスタッフを募集しており、厚木市内の現場はもちろん、
                海老名市・大和市・座間市・伊勢原市など神奈川県全域の現場を担当しています。
              </p>
              <p>
                「厚木市で手に職をつけたい」「設備工事は未経験だけど技術職にチャレンジしたい」という方を積極採用しています。
                普通自動車免許（AT限定可）があれば応募でき、工具の使い方・工事の手順は入社後の研修でゼロから教えます。
                資格取得費用も全額会社が負担します。
              </p>
              <p>
                本社が厚木市にあるため、厚木市在住の方は通勤距離が短く、プライベートの時間も確保しやすい環境です。
                勤務時間は8:30〜17:00、残業なし。家族との時間を大切にしながら、設備工事のプロとして長く働ける職場です。
              </p>
            </div>
          </div>

          {/* 2. 宝宮設備は厚木市温水西の設備工事会社 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              宝宮設備は厚木市温水西に拠点を置く設備工事会社です
            </h2>
            <div className="bg-navy py-8 px-6 sm:px-10 mb-6">
              <h3 className="text-base font-black text-white tracking-tight mb-5">会社・求人情報</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {[
                  { label: '会社名', value: '株式会社宝宮設備' },
                  { label: '本社所在地', value: '神奈川県厚木市温水西1-4-39' },
                  { label: '電話番号', value: '046-205-4558' },
                  { label: '事業内容', value: 'エアコン工事・給湯器交換・電気工事' },
                  { label: '対応エリア', value: '神奈川県全域' },
                  { label: '採用職種', value: '設備工事スタッフ（正社員）' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] text-white/40 tracking-widest uppercase mb-0.5">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <Link href="/company" className="text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors">
                株式会社宝宮設備の会社概要を見る →
              </Link>
            </div>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed mt-4">
              <p>
                厚木市は神奈川県のほぼ中央に位置し、東名高速道路インター・圏央道へのアクセスが良好なエリアです。
                本社を厚木市に構えることで、海老名市・大和市・座間市・伊勢原市・相模原市・平塚市・藤沢市など
                神奈川県内各方面の現場に効率よく移動できます。
              </p>
              <p>
                厚木市内では住宅地のエアコン取付・給湯器交換・電気工事の依頼が安定して入ります。
                市内の戸建て・マンション・賃貸物件を担当するケースが多く、地元の現場で働く実感を持てます。
                東名厚木ICから各方面へのアクセスも良好で、神奈川県内のどのエリアへも対応できる体制です。
              </p>
            </div>
          </div>

          {/* 3. 厚木市で募集している3職種 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              厚木市で募集している職種
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  title: 'エアコン工事スタッフ',
                  link: '/jobs/aircon',
                  badge: '夏の需要が急増',
                  desc: '住宅・マンション・店舗のエアコン取付・交換・移設。厚木市内を含む神奈川県全域対応。冷媒取扱技術者の資格取得を支援。',
                },
                {
                  title: '給湯器交換スタッフ',
                  link: '/jobs/water-heater',
                  badge: '年間を通じて安定需要',
                  desc: 'ガス給湯器・エコキュートの撤去・新規取付。厚木市内の戸建て・マンション対応。未経験から習得しやすい仕事。',
                },
                {
                  title: '電気工事スタッフ',
                  link: '/jobs/electrical',
                  badge: '第二種電気工事士を目指せる',
                  desc: '照明・コンセント・分電盤・配線工事。国家資格「第二種電気工事士」取得を全額会社負担でサポート。',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 overflow-hidden hover:border-orange-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="bg-navy px-4 py-2">
                    <p className="text-white font-black text-sm">{item.title}</p>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] bg-orange-50 text-orange-600 border border-orange-200 px-2 py-0.5 font-bold">
                      {item.badge}
                    </span>
                    <p className="text-xs text-gray-600 leading-relaxed my-3">{item.desc}</p>
                    <Link href={item.link} className="text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors">
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. エアコン工事スタッフ求人 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木市のエアコン工事求人
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                厚木市では毎年6〜9月のエアコン取付・交換シーズンに依頼が急増します。市内の住宅地・マンション・賃貸物件からの問い合わせが多く、
                繁忙期には1日3〜5件の現場を担当します。
                エアコン工事は作業の流れが決まっており、未経験から比較的早く一通りを覚えられる仕事です。
              </p>
              <p>
                厚木市はマンションと戸建ての両方が多いエリア。室外機を2〜3階のベランダに設置する作業や、
                スリムダクト（配管カバー）を使った仕上げを行うケースも豊富です。
                入社後は先輩と一緒に現場を経験しながら、フレアツール・真空ポンプ・電動ドリルなどの専門工具の使い方を覚えます。
              </p>
              <p>
                冷媒取扱技術者（第二種）の資格は、入社6ヶ月〜1年を目安に取得を目指します。
                受験料・テキスト・講習費用はすべて会社負担です。資格取得後は昇給に直結します。
              </p>
            </div>
            <div className="mt-4">
              <Link href="/jobs/aircon" className="text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors">
                エアコン工事スタッフ求人の詳細を見る →
              </Link>
            </div>
          </div>

          {/* 5. 給湯器交換スタッフ求人 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木市の給湯器交換求人
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                給湯器は平均10〜15年で寿命を迎えます。厚木市は住宅地が多く、給湯器の老朽化による交換需要が年間を通じて安定しています。
                特に冬の時期（11〜2月）は故障による緊急交換が増え、仕事量が増加します。
              </p>
              <p>
                給湯器交換の流れは「古い機器の撤去→新しい機器の設置・固定→配管接続→試運転・動作確認→お客様への説明」です。
                1件あたり2〜4時間程度、1日に2〜3件担当します。
                「お湯が出るようになって助かった」と直接感謝される機会が多く、やりがいを感じやすい仕事です。
              </p>
              <p>
                厚木市内は戸建て住宅も多く、ガス給湯器・エコキュートの交換需要がバランスよく発生しています。
                「簡易内管施工士」などの資格取得も会社が費用を全額負担します。
              </p>
            </div>
            <div className="mt-4">
              <Link href="/jobs/water-heater" className="text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors">
                給湯器交換スタッフ求人の詳細を見る →
              </Link>
            </div>
          </div>

          {/* 6. 電気工事スタッフ求人 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木市の電気工事求人
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                電気工事は住宅リフォーム・リノベーション需要の拡大とともに、厚木市内でも依頼が増えています。
                照明の交換・コンセントの増設・分電盤の取替え・エアコン専用回路の新設など、日常生活に密着した工事を担当します。
              </p>
              <p>
                「第二種電気工事士」の国家資格は、取得費用を会社が全額負担してサポートします。
                この資格があると電気設備の配線工事（100V・200V）を一人で担当できるようになります。
                厚木市の中古住宅・リフォーム物件では電気設備の更新需要が高く、資格取得後すぐに活かせる場面が豊富です。
              </p>
              <p>
                電気工事は細かい配線作業が多く、丁寧さと正確さが求められます。
                「精密な仕事が得意」「コツコツ集中して作業したい」という方に向いている仕事です。
                電気の知識がなくても、入社後の研修でゼロから学べます。
              </p>
            </div>
            <div className="mt-4">
              <Link href="/jobs/electrical" className="text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors">
                電気工事スタッフ求人の詳細を見る →
              </Link>
            </div>
          </div>

          {/* 7. 未経験から厚木市で手に職をつける */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              未経験から厚木市で手に職をつける働き方
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed mb-6">
              <p>
                設備工事は「手に職をつける」代表的な技術職です。資格を取得するほど技術の幅が広がり、収入アップにもつながります。
                宝宮設備では、設備工事が未経験の方が一から技術を身につけられる環境を整えています。
                厚木市在住で「転職して手に職をつけたい」という方は、ぜひご応募ください。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                {
                  period: '1ヶ月目',
                  title: '道具・現場の基礎',
                  body: '工具の名前・使い方を覚える。先輩と一緒に毎日現場へ。養生・搬入・補助を担当しながら、現場の流れを体で覚える。',
                },
                {
                  period: '3ヶ月目',
                  title: '基本作業に挑戦',
                  body: 'エアコン室内機の取付・配管カバー設置など、基本的な作業を担当。先輩の確認を受けながら精度を上げていく。',
                },
                {
                  period: '6ヶ月目',
                  title: '独り立ちへ',
                  body: 'シンプルな交換作業を一人でこなせるようになる。資格取得の勉強を開始（費用は会社全額負担）。昇給が視野に。',
                },
                {
                  period: '1年後',
                  title: '資格取得・昇給',
                  body: '冷媒取扱技術者・第二種電気工事士などを取得。担当できる仕事の幅が広がり、月給アップを実現。',
                },
              ].map((item) => (
                <div key={item.period} className="bg-slate-50 p-5">
                  <div className="text-xs text-orange-500 font-black tracking-wider mb-2">{item.period}</div>
                  <div className="text-sm font-black text-navy mb-2">{item.title}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Link href="/beginner" className="text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors">
                未経験から設備工事を始める方へ →
              </Link>
            </div>
          </div>

          {/* 8. 厚木市で働く1日の流れ */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木市を拠点に働く1日の流れ
            </h2>
            <div className="space-y-0">
              {[
                {
                  time: '8:30',
                  title: '出発（本社または現場直行）',
                  body: '厚木市の本社（温水西1-4-39）または現場に直行。会社の軽バンに工具・資材を積んで出発します。',
                },
                {
                  time: '9:00〜',
                  title: '午前の現場（1〜2件）',
                  body: 'エアコン取付・給湯器交換・電気工事のうち担当する作業を実施。未経験のうちは先輩と2人体制。',
                },
                {
                  time: '12:00',
                  title: '昼休憩（昼食補助あり）',
                  body: '近くの飲食店や弁当で昼食。宝宮設備には昼食補助制度があります。',
                },
                {
                  time: '13:00〜',
                  title: '午後の現場（1〜2件）',
                  body: '午後の現場へ移動。仕上げ・試運転・動作確認後、お客様に説明して完工。',
                },
                {
                  time: '17:00',
                  title: '終業（現場から直帰）',
                  body: '最後の現場から直接帰宅。本社に戻る必要はありません。17:00には仕事を終えて、プライベートの時間へ。',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-none">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-xs font-black text-orange-500">{item.time}</span>
                  </div>
                  <div>
                    <p className="text-sm font-black text-navy mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 9. 厚木市から応募するメリット */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木市から応募するメリット
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: '本社が厚木市温水西にあるため通勤が便利',
                  body: '本社（厚木市温水西1-4-39）まで自転車や路線バスで通勤できる方もいます。通勤時間が短いと、朝の余裕が生まれます。',
                },
                {
                  num: '02',
                  title: '厚木市内の現場が多く、移動時間を有効に使える',
                  body: '本社から市内の現場に向かう場合、移動時間は15〜30分程度。現場間の移動も厚木市・海老名市・伊勢原市などの近距離が中心です。移動に時間をとられにくい分、実働時間を有効に使えます。',
                },
                {
                  num: '03',
                  title: '車両貸出で通勤以外の車代がかからない',
                  body: '現場への移動・工具の運搬はすべて会社の軽バンを使います。マイカーは本社までの通勤のみ。燃料費・高速代は会社負担です。自分の車の消耗を抑えられます。',
                },
                {
                  num: '04',
                  title: '社宅相談で厚木市への移住・転居も可能',
                  body: '遠方からの応募の方、または厚木市に引っ越して通勤したい方には社宅相談に応じています。厚木市在住になることで、通勤・生活コストをさらに最適化できます。',
                },
                {
                  num: '05',
                  title: '残業なしで厚木市でのプライベートを充実できる',
                  body: '17:00終業・残業なしのため、仕事後に厚木市内でスポーツ・趣味・家族との時間を過ごせます。市内には相模川・七沢温泉・鳶尾山など自然も豊かで、アウトドアを楽しみながら技術職として働けます。',
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-none">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 flex items-center justify-center text-white text-[10px] font-black mt-0.5">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-sm font-black text-navy mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 10. 厚木市周辺で設備工事需要がある理由 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木市周辺で設備工事の需要が多い理由
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                厚木市は神奈川県のほぼ中央に位置し、戸建て住宅・マンション・賃貸物件・店舗が混在する住宅密集エリアです。
                1970〜1990年代に建設された住宅の設備更新需要が増加しており、エアコン・給湯器・電気設備の交換工事が年間を通じて安定して入ります。
              </p>
              <p>
                特にエアコン工事は、厚木市の夏（6〜9月）に需要が急増します。気温が高くなる時期は市内全域でエアコンの取付・交換依頼が集中し、
                宝宮設備のスタッフは繁忙期に多くの現場を経験することができます。これが技術習得スピードを加速させる一因です。
              </p>
              <p>
                給湯器は平均10〜15年で寿命を迎えます。厚木市・海老名市・伊勢原市など近隣市でも老朽化した給湯器の交換需要が続いており、
                冬場（11〜2月）を中心に急な故障対応の依頼が増えます。電気工事は住宅リフォーム・省エネ化の流れで年中需要があります。
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'エアコン工事', body: '普及率90%超・10〜15年の交換サイクル。厚木市内の戸建て・マンションから安定した依頼。' },
                { label: '給湯器交換', body: '老朽化更新に加え、エコキュートへの省エネ切替需要が増加。冬の緊急交換依頼も多い。' },
                { label: '電気工事', body: 'リフォーム・LED化・EV充電設備など電気工事の需要が拡大。厚木市の中古住宅でも電気設備更新が進む。' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 p-4">
                  <p className="text-xs font-black text-navy mb-2">{item.label}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 11. 資格取得支援とキャリアアップ */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              資格取得支援とキャリアアップロードマップ
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed mb-6">
              <p>
                設備工事は資格があるほど「担当できる作業の幅」と「収入」が広がる仕事です。
                宝宮設備では、エアコン工事・給湯器交換・電気工事に関連する主要資格の取得費用を全額会社が負担します。
                受験料・テキスト代・講習費用の自己負担はゼロです。
              </p>
              <p>
                厚木市を拠点に毎日現場を経験しながら資格の勉強を進めることで、効率的にスキルアップできます。
                17:00終業・残業なしのため、勉強時間を確保しやすい環境です。
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  name: '冷媒取扱技術者（第一種・第二種）',
                  when: '入社後6ヶ月〜1年',
                  desc: 'エアコンに使用される冷媒（フロンガス）の回収・充填に必要。エアコン工事の担当範囲が大幅に広がります。費用：会社全額負担。',
                },
                {
                  name: '第二種電気工事士',
                  when: '入社後1〜2年',
                  desc: '住宅・小規模店舗の電気工事（100V・200V）を行うための国家資格。取得後は電気工事を本格担当でき、月給が大幅アップします。費用：会社全額負担。',
                },
                {
                  name: '簡易内管施工士',
                  when: '入社後1〜2年',
                  desc: 'ガス給湯器に関連する配管工事に必要な資格。給湯器交換の作業範囲が広がります。費用：会社全額負担。',
                },
              ].map((item) => (
                <div key={item.name} className="border border-gray-100 p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
                    <p className="text-sm font-black text-navy">{item.name}</p>
                    <span className="text-[10px] bg-orange-50 text-orange-600 border border-orange-200 px-2 py-0.5 font-bold whitespace-nowrap w-fit">{item.when}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 12. 車両貸出・直行直帰について */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木市での車両貸出・直行直帰の働き方
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed mb-5">
              <p>
                宝宮設備のスタッフは、会社の軽バン（AT車）を使って毎日現場へ移動します。
                工具・資材はあらかじめ車に積んであるため、現場に直行して作業を開始できます。
                燃料費・高速料金など現場移動に伴う費用はすべて会社が負担します。
              </p>
              <p>
                現場から直接帰宅できる「直帰」が基本のため、毎日本社（厚木市温水西）に戻る必要はありません。
                厚木市在住の方は、自宅付近の現場であれば通勤時間がほぼゼロになる日もあります。
                AT限定免許でも運転できる車両を使用しているため、MT免許は不要です。
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: '車両', value: '軽バン（AT車）' },
                { label: '燃料代', value: '会社全額負担' },
                { label: '免許', value: 'AT限定でOK' },
                { label: '直行直帰', value: '毎日可能' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 p-4 text-center">
                  <p className="text-[10px] text-gray-400 tracking-widest mb-1">{item.label}</p>
                  <p className="text-sm font-black text-navy">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 13. 本厚木エリア・厚木市内の生活環境 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木市で働きながら生活する
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                本厚木駅は小田急線・相鉄線の主要駅で、横浜・新宿方面へのアクセスが良好です。
                本社（厚木市温水西）は本厚木駅から車で10〜15分程度。
                厚木市内にはスーパー・ホームセンター・飲食店が充実しており、仕事帰りの買い物も便利です。
              </p>
              <p>
                17:00終業・残業なしのため、平日の夕方を自由に使えます。厚木市内には相模川での釣り・七沢温泉・鳶尾山（ハイキング）など自然アクティビティも豊富です。
                アウトドアを楽しみながら技術職として安定して働ける、バランスの良い生活環境です。
              </p>
              <p>
                厚木市での生活を始めたい神奈川県外からの応募者向けに、社宅相談にも対応しています。
                厚木市内または近隣市での住居探しをサポートしますので、まずはお気軽にご相談ください。
              </p>
            </div>
          </div>

          {/* 14. 給与・勤務時間・福利厚生 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              給与・勤務時間・福利厚生
            </h2>
            <table className="recruit-table">
              <tbody>
                {[
                  ['雇用形態', '正社員'],
                  ['給与', '月給25万円〜70万円（未経験：研修後250,000円〜）'],
                  ['賞与', '夏・冬 手当てあり（年2回）'],
                  ['勤務時間', '8:30〜17:00'],
                  ['残業', 'なし（繁忙期も残業なし）'],
                  ['勤務地', '神奈川県厚木市温水西1-4-39（本社）および各現場'],
                  ['応募資格', '未経験可・要普通自動車免許（AT限定可）'],
                  ['福利厚生', '社会保険完備・資格取得支援（全額会社負担）・車両貸出・昼食補助・制服貸与・社宅相談可'],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 15. FAQ */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              厚木市から応募する前によくある質問（20問）
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
          </div>

          {/* 12. CTA */}
          <div className="bg-slate-50 p-6 sm:p-10 text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-orange-500 font-black mb-3">Apply</p>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-3">
              厚木市で設備工事スタッフとして働きませんか
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto">
              厚木市温水西の本社で、一緒に働く仲間を募集しています。
              未経験歓迎・残業なし・資格取得支援あり。まずはお気軽にエントリーください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
              <a
                href="tel:046-205-4558"
                className="inline-flex items-center justify-center font-medium text-sm px-8 py-4 border border-gray-300 text-gray-600 hover:border-gray-500 transition-colors"
              >
                TEL: 046-205-4558
              </a>
            </div>
          </div>

          {/* 周辺エリア */}
          <div>
            <h2 className="text-lg font-black text-navy tracking-tight mb-4 pb-3 border-b border-gray-200">
              厚木市周辺の対応エリア
            </h2>
            <div className="flex flex-wrap gap-2">
              {['海老名市', '大和市', '座間市', '伊勢原市', '相模原市', '平塚市', '秦野市', '綾瀬市', '藤沢市'].map((area) => (
                <span key={area} className="text-xs px-3 py-1.5 border border-gray-200 text-gray-500">
                  {area}
                </span>
              ))}
              <span className="text-xs px-3 py-1.5 bg-orange-50 border border-orange-200 text-orange-600 font-medium">
                神奈川県全域対応
              </span>
            </div>
          </div>

          {/* Internal links */}
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-3 tracking-wider uppercase">関連ページ</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/company',           label: '宝宮設備 会社概要' },
                { href: '/jobs',              label: '職種別求人一覧' },
                { href: '/jobs/aircon',       label: 'エアコン工事求人' },
                { href: '/jobs/water-heater', label: '給湯器交換求人' },
                { href: '/jobs/electrical',   label: '電気工事求人' },
                { href: '/jobs/setsubi',      label: '設備工事総合求人' },
                { href: '/beginner',          label: '未経験の方へ' },
                { href: '/welfare',           label: '福利厚生' },
                { href: '/faq',               label: 'よくある質問' },
                { href: '/recruit',           label: '募集要項' },
                { href: '/work',              label: '仕事内容' },
                { href: '/area',              label: '地域別求人一覧' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-gray-500 hover:text-orange-500 transition-colors">
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
