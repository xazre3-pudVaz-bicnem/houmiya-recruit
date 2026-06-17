import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '募集要項｜設備工事スタッフ求人（神奈川県厚木市）｜宝宮設備',
  description:
    '宝宮設備の設備工事スタッフ（エアコン工事・給湯器交換・電気工事）募集要項。未経験歓迎・月給25万〜70万円・残業なし（8:30〜17:00）・資格取得支援あり（全額会社負担）。神奈川県厚木市。',
  keywords: [
    '神奈川 設備工事 求人',
    '厚木 設備工事 求人',
    '未経験 設備工事 求人',
    '神奈川 エアコン工事 求人',
    '設備工事スタッフ 募集',
    '神奈川 残業なし 求人',
  ],
  openGraph: {
    title: '募集要項｜設備工事スタッフ求人（神奈川県厚木市）｜宝宮設備',
    description: '未経験歓迎・月給25万〜70万円・残業なし・資格取得支援あり。神奈川の設備工事求人。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/recruit' },
}

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: '設備工事スタッフ（エアコン工事・給湯器交換・電気工事）',
  description:
    '神奈川県厚木市の設備工事会社・株式会社宝宮設備では、エアコン工事・給湯器交換・電気工事スタッフを募集しています。未経験歓迎・研修あり・資格取得支援あり（全額会社負担）・残業なし（8:30〜17:00）。',
  datePosted: '2025-01-01',
  validThrough: '2026-12-31T23:59:59',
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: '株式会社宝宮設備',
    sameAs: 'https://www.houmiya-recruit.com',
    logo: 'https://www.houmiya-recruit.com/images/logo.png',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '温水西1-4-39',
      addressLocality: '厚木市',
      addressRegion: '神奈川県',
      postalCode: '243-0036',
      addressCountry: 'JP',
    },
  },
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'JPY',
    value: { '@type': 'QuantitativeValue', minValue: 250000, maxValue: 700000, unitText: 'MONTH' },
  },
  workHours: '8:30〜17:00（残業なし）',
  jobBenefits: '社会保険完備 / 資格取得支援（会社全額負担） / 車両貸出 / 昼食補助 / 制服貸与 / 交通費支給 / 社宅相談可',
  qualifications: '未経験歓迎。普通自動車免許（AT限定可）。',
  industry: '設備工事業',
  occupationalCategory: '設備工事スタッフ',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '募集要項', item: 'https://www.houmiya-recruit.com/recruit' },
  ],
}

export default function Recruit() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        en="Recruit"
        title="募集要項"
        subtitle="神奈川県の設備工事スタッフ求人"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '募集要項' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Opening */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">
              神奈川県で、設備工事の技術を身につけませんか
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              株式会社宝宮設備は、神奈川県厚木市を拠点にエアコン工事・給湯器交換・電気工事を手がける設備工事会社です。
              現場経験ゼロからでも先輩スタッフが一から教えるので、初めて現場に立つ方でも安心してスタートできます。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              神奈川県全域の現場を担当するため、様々な条件の工事を経験しながら技術を着実に身につけられます。
              資格取得支援（全額会社負担）・車両貸出・社宅相談可能など、長く働ける環境を整えています。
            </p>
          </div>

          {/* Staff photos */}
          <div className="grid grid-cols-3 gap-px bg-gray-200 mb-12 -mx-4 sm:-mx-6">
            <div className="relative h-36 sm:h-52 overflow-hidden">
              <Image src="/images/photo-aircon-complete-2.jpg" alt="エアコン工事完了" fill className="object-cover object-top" sizes="33vw" />
            </div>
            <div className="relative h-36 sm:h-52 overflow-hidden">
              <Image src="/images/photo-vehicle-loading.jpg" alt="現場への準備" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative h-36 sm:h-52 overflow-hidden">
              <Image src="/images/photo-customer-service.jpg" alt="お客様への対応" fill className="object-cover" sizes="33vw" />
            </div>
          </div>

          {/* Why we're recruiting */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              今、宝宮設備が採用に力を入れている理由
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              神奈川県では住宅数の多さを背景に、エアコン・給湯器・電気工事の需要が年々増えています。宝宮設備は厚木市を拠点に、神奈川県全域で受注が増加しており、現在の人員では対応しきれない状況が続いています。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              「無理なく、長く働き続けられる職場を作ること」が宝宮設備の考え方です。残業なし・残業代込みではなく、本当に17時に仕事を終わらせる。その仕組みのまま事業を拡大するため、一緒に働いてくれる仲間を探しています。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              スタッフが増えれば、1人あたりの担当件数を適切に保ちながら仕事量を増やすことができます。「もっと稼ぎたい」人にも「プライベートを大切にしたい」人にも、両立できる働き方を目指しています。
            </p>
          </div>

          {/* Who we're looking for */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              求める人物像
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              設備工事の経験や知識は一切不要です。技術は現場で教えます。それより大切なのは、以下のような姿勢・性格です。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {[
                { title: '素直に学べる人', body: '先輩の言葉を素直に受け取り、自分の動き方に取り込める人。技術職で最も重要な資質です。経験者より素直な未経験者のほうが早く伸びることが多いです。' },
                { title: '体を動かすことが苦にならない人', body: '現場仕事は立ち仕事・運搬・屋外作業が含まれます。体力に自信がない方でも継続する中で慣れていきます。まず「動くことが嫌いでない」かどうかが大切です。' },
                { title: 'お客様と普通に話せる人', body: '毎日違うお客様のご自宅・お店に上がって作業します。礼儀正しく、明るく接することができれば十分です。販売や接客の経験は不要です。' },
                { title: '長く働くつもりのある人', body: '技術職は半年・1年・3年と続ける中で価値が積み上がります。「とりあえず」ではなく、腰を据えてスキルを身につけようと考えている方を歓迎します。' },
              ].map((item) => (
                <div key={item.title} className="border border-gray-100 p-5">
                  <h3 className="text-sm font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-5">
              <p className="text-xs font-bold text-navy mb-2">このような方も歓迎しています</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                {[
                  '20代で手に職をつけたい方',
                  '異業種からの転職を検討している方',
                  'アルバイト経験しかないが正社員になりたい方',
                  '前職が体力的・精神的にきつくて転職を考えている方',
                  'AT限定免許しか持っていない方',
                  '神奈川県外から引越しを検討している方',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-orange-400 text-xs flex-shrink-0 mt-0.5">—</span>
                    <span className="text-xs text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main recruit table */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              募集詳細
            </h2>
            <table className="recruit-table">
              <tbody>
                <tr>
                  <th>職種</th>
                  <td>設備工事スタッフ（エアコン工事・給湯器交換・電気工事）</td>
                </tr>
                <tr>
                  <th>雇用形態</th>
                  <td>正社員</td>
                </tr>
                <tr>
                  <th>仕事内容</th>
                  <td>
                    神奈川県内の各現場でのエアコン取付・交換工事、給湯器（ガス給湯器・エコキュート）の取替え・新設、電気工事（照明・コンセント・分電盤・配線）。
                    先輩スタッフとの同行研修から始まります。
                  </td>
                </tr>
                <tr>
                  <th>対象年齢</th>
                  <td>18歳〜35歳（若手積極採用）/ 35歳超でも経験・スキルに応じて応相談</td>
                </tr>
                <tr>
                  <th>経験・資格</th>
                  <td>未経験歓迎。普通自動車免許（AT限定可）。第二種電気工事士・冷媒取扱技術者は入社後取得サポートあり（全額会社負担）</td>
                </tr>
                <tr>
                  <th>勤務地</th>
                  <td>
                    神奈川県全域の各現場（現場直行・直帰あり）<br />
                    拠点：神奈川県厚木市温水西1-4-39
                  </td>
                </tr>
                <tr>
                  <th>勤務時間</th>
                  <td>8:30〜17:00（残業なし）</td>
                </tr>
                <tr>
                  <th>給与</th>
                  <td>
                    月給 250,000円〜700,000円<br />
                    未経験：研修後 250,000円〜<br />
                    経験者・資格保有者：技術・経験に応じて優遇
                  </td>
                </tr>
                <tr>
                  <th>昇給</th>
                  <td>技術・習熟度・資格取得に応じて随時昇給</td>
                </tr>
                <tr>
                  <th>賞与</th>
                  <td>夏、冬手当てあり</td>
                </tr>
                <tr>
                  <th>試用期間</th>
                  <td>1ヶ月（本採用と同条件）</td>
                </tr>
                <tr>
                  <th>休日</th>
                  <td>月〜土勤務 / 夏季・冬季・お盆・年末年始休暇あり</td>
                </tr>
                <tr>
                  <th>福利厚生</th>
                  <td>
                    社会保険完備（健康保険・厚生年金・雇用保険・労災保険）<br />
                    車両貸出 / 昼食補助 / 資格取得支援（全額会社負担）/ 制服貸与 / 交通費支給 / 深夜・休日手当 / 社宅相談可
                  </td>
                </tr>
                <tr>
                  <th>応募方法</th>
                  <td>応募フォーム・LINE・お電話にて受け付けております</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Salary explanation */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              給与・手当について
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              月給25万円〜70万円という幅は、未経験スタートから技術を積んだベテランスタッフまでの実際の給与幅です。入社時の月給が低くても、技術と資格を身につけることで着実に上げることができます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 mb-5">
              {[
                { label: '入社時（未経験）', amount: '250,000円〜', note: '研修後の基本月給' },
                { label: '資格取得後（1〜2年目）', amount: '〜350,000円', note: '冷媒・電気工事士取得後' },
                { label: 'オールラウンダー（3年目以降）', amount: '〜700,000円', note: '複数職種対応・資格複数保有' },
              ].map((item) => (
                <div key={item.label} className="bg-white p-5 text-center">
                  <p className="text-xs text-gray-400 mb-2">{item.label}</p>
                  <p className="text-xl font-black text-navy">{item.amount}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-5 space-y-2">
              {[
                '残業なし（8:30〜17:00）のため、月給がほぼそのまま実収入',
                '夏・冬手当てあり（賞与に相当）',
                '深夜手当・休日手当：対象現場では別途支給',
                '資格取得→昇給は随時（年1回ではなく、取得のタイミングで即反映）',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-orange-500 flex-shrink-0 font-bold text-xs mt-0.5">—</span>
                  <p className="text-sm text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Training details */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              研修・サポート体制
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              入社後1〜2ヶ月は必ず先輩スタッフが同行します。作業の手順・工具の使い方・安全確認の方法・お客様対応まで、現場を通して実践的に学べます。「見てまねる→補助する→担当する」というステップで着実に成長できます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: '1〜2ヶ月目', body: '先輩と常に同行。工具・作業手順・安全確認を覚えます。補助役として動きながら全体の流れをつかみます。' },
                { title: '3〜6ヶ月目', body: '一部の作業を自分で担当します。資格の勉強を会社サポートで本格的に始めます。' },
                { title: '1年以降', body: '独立した作業を担当。資格取得後は担当できる工事が広がり、給与がアップします。' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 p-5">
                  <div className="text-xs tracking-widest text-orange-400 font-bold mb-2 uppercase">{item.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selection flow */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              選考の流れ
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              選考はできるだけシンプルに進めます。難しい筆記試験や多段階の面接はありません。まず気軽にお問い合わせください。
            </p>
            <div className="relative">
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200" />
              {[
                { step: '01', title: '応募（フォーム・LINE・電話）', body: '応募フォーム・LINE・お電話のどれからでも応募できます。まず気軽にご連絡ください。「相談だけ」でも構いません。' },
                { step: '02', title: '書類確認・日程調整', body: '応募いただいた内容を確認し、面談の日程を調整します。数日以内にご連絡します。' },
                { step: '03', title: '面談（1回）', body: '宝宮設備の事務所または現場で面談します。服装は普段着でOKです。一方的に質問するのではなく、宝宮設備についての疑問にもその場でお答えします。' },
                { step: '04', title: '内定・入社日の調整', body: '面談後、数日以内にお伝えします。在職中の方は現在の会社の退職スケジュールに合わせて入社日を決めることができます。' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 mb-8 last:mb-0 relative">
                  <div className="flex-shrink-0 w-8 relative z-10">
                    <div className="w-8 h-8 bg-navy text-white text-xs font-black flex items-center justify-center">{item.step}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keyword-rich body text */}
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold text-navy mb-3 pb-2 border-b border-gray-200">
                  神奈川県での設備工事求人について
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  宝宮設備の設備工事求人は神奈川県全域を対象としています。厚木市を拠点として、海老名市・大和市・座間市・相模原市・横浜市・川崎市・藤沢市など神奈川県各地の現場で働けます。現場直行・直帰が可能なため、会社への往復分の移動時間が節約できます。
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy mb-3 pb-2 border-b border-gray-200">
                  未経験からのスタートを全力サポート
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  設備工事の未経験求人として、宝宮設備は入社後の研修体制を整えています。最初は先輩スタッフと同行し、作業の流れや道具の使い方を実際の現場で覚えます。資格取得支援（全額会社負担）で、電気工事士・冷媒取扱技術者を目指せます。
                </p>
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div className="bg-gray-50 p-6 sm:p-8 mb-8">
            <h3 className="text-sm font-bold text-navy tracking-wide mb-4">詳細ページ</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/jobs/aircon', label: 'エアコン工事スタッフ求人' },
                { href: '/jobs/water-heater', label: '給湯器交換スタッフ求人' },
                { href: '/jobs/electrical', label: '電気工事スタッフ求人' },
                { href: '/jobs/setsubi', label: '設備工事総合スタッフ求人' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生について' },
                { href: '/area', label: '地域別求人' },
                { href: '/faq', label: 'よくある質問' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="link-arrow text-sm">
                  {link.label} <span>→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/entry" className="flex-1 block text-center bg-orange-500 text-white font-black py-4 text-sm hover:bg-orange-400 transition-colors">応募フォームへ →</Link>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
