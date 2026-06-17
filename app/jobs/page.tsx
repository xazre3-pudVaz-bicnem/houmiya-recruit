import type { Metadata } from 'next'
import Link from 'next/link'
import { jobs } from '@/data/jobs'

export const metadata: Metadata = {
  title: '【神奈川県 設備工事求人】エアコン・給湯器・電気工事スタッフ募集｜宝宮設備',
  description:
    '神奈川県の設備工事求人。厚木市の宝宮設備ではエアコン工事・給湯器交換・電気工事スタッフを募集。未経験歓迎・月給25万〜70万円・残業なし・資格取得費用全額会社負担。手に職をつけたい方へ。',
  keywords: [
    '神奈川県 設備工事 求人',
    '厚木市 設備工事 求人',
    '設備工事スタッフ 求人',
    '設備工事 未経験 求人',
    '技術職 求人 神奈川',
    '手に職 求人 神奈川',
    'エアコン工事 求人 神奈川',
    '給湯器交換 求人',
    '電気工事 求人 神奈川',
  ],
  openGraph: {
    title: '【神奈川県 設備工事求人】エアコン・給湯器・電気工事スタッフ募集｜宝宮設備',
    description: '神奈川県の設備工事求人。厚木市の宝宮設備。未経験歓迎・月給25万〜70万円・残業なし。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/jobs' },
}

const BASE_URL = 'https://www.houmiya-recruit.com'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: '職種別求人', item: `${BASE_URL}/jobs` },
  ],
}

const faqItems = [
  {
    q: '設備工事の仕事は未経験でも始められますか？',
    a: 'はい。宝宮設備の入社者の大半が設備工事未経験です。入社後1ヶ月の研修（座学＋実技）と先輩スタッフとのペア作業を通じて、一から技術を習得できます。',
  },
  {
    q: '神奈川県のどのエリアの現場を担当しますか？',
    a: '主に神奈川県内全域が対象です。厚木市・海老名市・大和市・相模原市・座間市・平塚市・藤沢市などを中心に、神奈川県全域の現場を担当します。本社は厚木市温水西1-4-39にあります。',
  },
  {
    q: '資格がないと設備工事の仕事はできませんか？',
    a: '入社時に資格は不要です。資格取得費用は会社が全額負担しており、入社後のサポートで「冷媒取扱技術者」「第二種電気工事士」「簡易内管施工士」などを順番に取得していただきます。',
  },
  {
    q: '給与はいつから月給25万円になりますか？',
    a: '入社後1ヶ月の研修期間終了後から月給250,000円以上です。その後は技術・資格の習得に応じて随時昇給し、ベテランスタッフは月給70万円超も可能です。',
  },
  {
    q: '本当に残業はないのですか？',
    a: 'はい。8:30〜17:00の勤務時間を厳守しています。業務量は1日2〜5件に調整しており、夏の繁忙期でも17:00終業を維持しています。',
  },
  {
    q: 'どの職種から始めればいいかわかりません。どうやって決まりますか？',
    a: '入社時の面談で希望・経験・適性を確認し、最初に担当する職種を決定します。まったく希望がない場合は、その時期の需要が多い職種（夏なら「エアコン工事」、冬なら「給湯器交換」）から始めることが多いです。',
  },
  {
    q: 'AT限定免許しか持っていませんが大丈夫ですか？',
    a: 'はい、AT限定免許で応募可能です。会社の車両（軽バン：AT車）を使用しますので、MT免許は必要ありません。',
  },
  {
    q: '将来的に複数の職種に対応できますか？',
    a: 'はい。まず1職種を習得したあと、段階的に他の職種（エアコン・給湯器・電気）も覚えていただきます。複数職種に対応できるほど給与が上がる仕組みです。',
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

const typeLabels: Record<string, { label: string; color: string; text: string }> = {
  aircon: {
    label: 'エアコン工事',
    color: 'bg-sky-500',
    text: '夏の繁忙期に需要急増。冷媒配管・電源配線の専門技術を習得。冷媒取扱技術者の資格取得を支援。',
  },
  'water-heater': {
    label: '給湯器交換',
    color: 'bg-orange-500',
    text: '年間を通じて安定した需要。配管接続・機器設置の技術を習得。感謝される機会が多い仕事。',
  },
  electrical: {
    label: '電気工事',
    color: 'bg-yellow-500',
    text: '国家資格「第二種電気工事士」を全額会社負担で取得。精密な配線作業で高い専門性を身につける。',
  },
  setsubi: {
    label: '設備工事（総合）',
    color: 'bg-navy',
    text: '3職種すべてに対応できるオールラウンダーを目指す。複数資格で高収入も実現できるコース。',
  },
}

export default function JobsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-navy pt-16 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-orange-400 font-black mb-3">Jobs</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            神奈川県の設備工事求人<br className="sm:hidden" />職種別一覧
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            エアコン工事・給湯器交換・電気工事・設備工事（総合）の4職種。未経験歓迎・残業なし・資格取得費用全額会社負担。
            神奈川県厚木市の宝宮設備が、あなたが「手に職」をつけるお手伝いをします。
          </p>
          <nav className="mt-6 flex items-center gap-2 text-xs text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">トップ</Link>
            <span>›</span>
            <span className="text-white/50">職種別求人</span>
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
              { label: '資格支援', value: '全額会社負担' },
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">

          {/* Intro */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              神奈川県で設備工事の仕事を探している方へ
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                株式会社宝宮設備は、神奈川県厚木市温水西1-4-39に本社を構える設備工事会社です。エアコン工事・給湯器交換・電気工事の3分野で、神奈川県全域（厚木市・海老名市・大和市・相模原市・座間市・平塚市・藤沢市など）の現場を担当しています。
              </p>
              <p>
                現在、設備工事スタッフ（正社員）を積極採用中です。未経験の方も歓迎しており、入社後の研修と資格取得支援（費用全額会社負担）によって、一から技術を身につけていただけます。
              </p>
              <p>
                設備工事の仕事は「手に職をつける」代表的な技術職です。AI・ロボットでは代替できない現場作業が中心で、経験・資格を積むほど収入が上がる実力主義の仕事です。神奈川県で安定した技術職を探している方、転職して将来の安定を手に入れたい方は、ぜひ宝宮設備の求人をご覧ください。
              </p>
            </div>
          </div>

          {/* Job cards */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              4つの職種から選べる求人
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {jobs.map((job) => {
                const meta = typeLabels[job.type]
                return (
                  <Link
                    key={job.type}
                    href={`/jobs/${job.type}`}
                    className="block border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200 group overflow-hidden"
                  >
                    <div className={`${meta?.color ?? 'bg-navy'} py-2 px-4`}>
                      <p className="text-white font-black text-sm">{meta?.label ?? job.jobTitle}</p>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-black text-navy group-hover:text-orange-500 transition-colors mb-2 leading-tight">
                        {job.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">{meta?.text}</p>
                      <div className="flex items-center gap-3 flex-wrap mb-3">
                        <span className="text-[11px] text-orange-500 font-bold border border-orange-200 px-2 py-0.5">月給25万〜70万円</span>
                        <span className="text-[11px] text-gray-500 border border-gray-200 px-2 py-0.5">残業なし</span>
                        <span className="text-[11px] text-gray-500 border border-gray-200 px-2 py-0.5">未経験歓迎</span>
                      </div>
                      <span className="text-[11px] font-bold text-orange-500 group-hover:text-orange-600">
                        詳細を見る →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* What is 設備工事 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              設備工事とはどんな仕事か
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                設備工事とは、住宅・マンション・店舗・ビルに設置される各種設備（空調設備・給湯設備・電気設備など）を取付・交換・修理する仕事です。私たちの生活に欠かせない「エアコン」「給湯器」「電気」を扱うため、社会インフラを支える重要な職種です。
              </p>
              <p>
                宝宮設備が扱う設備工事は大きく3種類です。①エアコン工事：住宅・マンション・店舗のエアコン（室内機・室外機）の取付・交換・移設。②給湯器交換：ガス給湯器・エコキュートの取替え・新規設置。③電気工事：照明・コンセント・分電盤・配線工事（第二種電気工事士が必要な作業を含む）。
              </p>
              <p>
                これらの工事は毎年一定数の需要があり、かつ高齢化・省エネ化の流れから需要が増加傾向にあります。エアコンの普及率は90%超、給湯器の平均使用年数は10〜15年、電気設備リノベーション需要も年々拡大しています。景気の波に左右されにくい安定した仕事です。
              </p>
            </div>
          </div>

          {/* Why enter 設備工事 now */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              今、設備工事の技術者が求められている理由
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  title: '慢性的な人手不足',
                  body: '設備工事業界は全国的に職人・技術者不足が続いています。若い世代が入職することで、就職直後から高い需要があり、着実にキャリアを積める環境です。',
                },
                {
                  title: '省エネ化・更新需要の増加',
                  body: 'エコキュート・LED照明・高効率給湯器など省エネ機器への買い替え需要が増加。国の補助金制度も後押しし、交換工事の問い合わせが年々増えています。',
                },
                {
                  title: '代替困難な現場スキル',
                  body: '設備工事はAI・ロボットでは代替できない現場の手仕事が中心です。習得した技術と資格は生涯を通じて活用でき、独立も視野に入る実力主義の世界です。',
                },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 p-5">
                  <div className="w-1.5 h-1.5 bg-orange-500 mb-3" />
                  <h3 className="text-sm font-black text-navy mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common conditions */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              全職種共通の募集条件
            </h2>
            <table className="recruit-table">
              <tbody>
                {[
                  ['雇用形態', '正社員'],
                  ['給与', '月給25万円〜70万円（未経験：研修後250,000円〜）'],
                  ['賞与', '夏・冬 手当てあり（年2回）'],
                  ['勤務時間', '8:30〜17:00'],
                  ['残業', 'なし'],
                  ['勤務地', '神奈川県全域の各現場（本社：神奈川県厚木市温水西1-4-39）'],
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

          {/* Why Houmiya */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              宝宮設備が設備工事の求人として選ばれる5つの理由
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: '神奈川県全域で安定した仕事量',
                  body: '厚木市に本社を置き、神奈川県全域の住宅・マンション・店舗の設備工事を担当。エアコン工事・給湯器交換・電気工事すべてで年間を通じて安定した受注があります。閑散期に仕事がなくなる心配はありません。',
                },
                {
                  num: '02',
                  title: '残業なし（8:30〜17:00）を厳守',
                  body: '1日の業務量を適切に調整し、繁忙期でも17:00終業を維持します。残業代が発生しない代わりに、プライベートや家族との時間を確保できます。働き続けられる環境が長期雇用につながっています。',
                },
                {
                  num: '03',
                  title: '資格取得費用は全額会社負担',
                  body: '冷媒取扱技術者・第二種電気工事士・簡易内管施工士など、設備工事に必要な資格の受験料・テキスト代・講習費用をすべて会社が負担します。自己投資ゼロで国家資格・専門資格を取得できます。',
                },
                {
                  num: '04',
                  title: '先輩スタッフとの距離が近い環境',
                  body: '少人数チームのため、分からないことはすぐに先輩に聞ける環境です。入社後のペア作業期間中は毎日先輩と一緒に現場に出ます。一人で悩まず成長できる体制を整えています。',
                },
                {
                  num: '05',
                  title: '手厚い待遇で安心して長く働ける',
                  body: '社会保険完備（健康保険・厚生年金・雇用保険・労災保険）・会社車両貸出（現場への移動費不要）・昼食補助・制服貸与・社宅相談可能。転職後の生活基盤をしっかり整えられます。',
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 items-start">
                  <span className="flex-shrink-0 text-3xl font-black text-orange-100 leading-none">{item.num}</span>
                  <div>
                    <h3 className="text-sm font-black text-navy mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career growth */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              設備工事スタッフの給与・成長イメージ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { period: '入社〜1ヶ月', stage: '研修期間', salary: '月25万円〜', note: '先輩スタッフと一緒に現場研修' },
                { period: '3〜6ヶ月', stage: '独り立ち', salary: '随時昇給', note: '基本作業を自分でこなせるように' },
                { period: '1〜2年目', stage: '資格取得', salary: 'さらに昇給', note: '最初の専門資格を取得して評価アップ' },
                { period: '3年目以降', stage: 'ベテラン', salary: '月40万円〜', note: '複数資格・複数職種で高収入を実現' },
              ].map((item) => (
                <div key={item.period} className="bg-slate-50 p-4 text-center">
                  <p className="text-[10px] text-orange-500 font-black tracking-widest mb-1">{item.period}</p>
                  <p className="text-sm font-black text-navy mb-1">{item.stage}</p>
                  <p className="text-xs font-bold text-orange-500 mb-2">{item.salary}</p>
                  <p className="text-[11px] text-gray-500 leading-snug">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              ※給与は経験・資格・担当件数・担当職種によって異なります。月給70万円はベテランスタッフの実績値です。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-navy py-10 px-6 sm:px-12 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-orange-400 font-black mb-3">Entry</p>
            <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
              神奈川県の設備工事求人に応募する
            </h2>
            <p className="text-sm text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
              未経験歓迎・月給25万〜70万円・残業なし・資格取得費用全額会社負担。まずはお気軽にエントリーください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto">
              <Link
                href="/entry"
                className="flex-1 block text-center bg-orange-500 text-white font-black py-4 text-sm tracking-widest hover:bg-orange-400 transition-colors"
              >
                応募フォームへ →
              </Link>
              <a
                href="tel:046-205-4558"
                className="flex-1 block text-center border border-white/30 text-white font-bold py-4 text-sm tracking-wide hover:border-white/60 transition-colors"
              >
                TEL: 046-205-4558
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              よくある質問（設備工事求人 全般）
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
                  <div className="flex items-start gap-3 px-4 sm:px-5 pb-4 sm:pb-5 bg-gray-50">
                    <span className="flex-shrink-0 w-6 h-6 bg-navy text-white text-xs font-black flex items-center justify-center mt-0.5">
                      A
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internal links */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 tracking-widest mb-4">関連ページ</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/work', label: '仕事内容' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/area', label: '地域別求人' },
                { href: '/recruit', label: '募集要項' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/knowledge', label: '転職ナレッジ' },
                { href: '/entry', label: 'エントリー' },
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
