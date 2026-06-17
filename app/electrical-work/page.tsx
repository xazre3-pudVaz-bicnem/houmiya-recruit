import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '電気工事スタッフ求人｜未経験から資格取得を目指せる環境',
  description:
    '神奈川県の電気工事スタッフ求人。宝宮設備では第二種電気工事士の資格取得を全額会社負担でサポート。月給25万〜70万円・残業なし（8:30〜17:00）。未経験歓迎・厚木市。',
  keywords: [
    '電気工事 求人 神奈川',
    '電気工事 未経験',
    '電気工事士 資格取得支援',
    '第二種電気工事士 求人',
    '厚木市 電気工事 求人',
    '電気工事 未経験 求人',
  ],
  openGraph: {
    title: '電気工事スタッフ求人｜未経験から資格取得を目指せる環境',
    description: '神奈川県の電気工事求人。第二種電気工事士の取得費用全額会社負担。未経験歓迎。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/electrical-work' },
}

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: '電気工事スタッフ',
  description: '神奈川県厚木市の宝宮設備では、住宅・店舗の電気工事（照明・コンセント・分電盤・配線工事）を担当するスタッフを募集しています。未経験歓迎・第二種電気工事士取得費用全額会社負担。',
  datePosted: '2025-01-01',
  validThrough: '2026-12-31T23:59:59',
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: '株式会社宝宮設備',
    sameAs: 'https://www.houmiya-recruit.com',
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
  qualifications: '未経験歓迎。第二種電気工事士（入社後取得サポートあり）。普通自動車免許（AT限定可）。',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '仕事内容', item: 'https://www.houmiya-recruit.com/work' },
    { '@type': 'ListItem', position: 3, name: '電気工事', item: 'https://www.houmiya-recruit.com/electrical-work' },
  ],
}

export default function ElectricalWork() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        en="Electrical Work"
        title="電気工事スタッフ求人"
        subtitle="未経験から技術を身につける"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { href: '/work', label: '仕事内容' }, { label: '電気工事' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="h-52 sm:h-72 mb-12 relative overflow-hidden">
            <Image src="/images/photo-aircon-balcony.jpg" alt="電気工事の現場" fill className="object-cover" sizes="(min-width: 896px) 896px, 100vw" priority />
          </div>

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">電気工事スタッフとは</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              電気工事スタッフは、住宅・マンション・店舗・オフィスの電気設備（照明・コンセント・スイッチ・分電盤・配線）の設置・交換・修理を担当します。私たちの生活に不可欠な「電気」を安全に届ける仕事です。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              電気工事の一部には「電気工事士」の国家資格が必要です。宝宮設備では、第二種電気工事士の取得費用（試験代・テキスト代・講習費用）を全額会社が負担します。入社時に資格がない方でも、働きながら国家資格を目指せます。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              宝宮設備では電気工事をエアコン工事・給湯器交換と組み合わせて担当します。電気の知識は他の設備工事のすべてにつながるため、身につけた技術が様々な場面で活きます。
            </p>
          </div>

          {/* Certification block */}
          <div className="mb-12 flex flex-col lg:flex-row gap-0">
            <div className="lg:w-2/5 h-48 lg:h-auto relative overflow-hidden" style={{ minHeight: '200px' }}>
              <Image src="/images/welfare-certification.png" alt="電気工事士テキストと資格取得サポート" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
              <div className="absolute inset-0" style={{ background: 'rgba(15,23,42,0.55)' }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white/60 text-xs tracking-widest uppercase mb-2">Qualification</span>
                <span className="text-white text-3xl font-black tracking-tight">資格取得</span>
                <span className="text-white/70 text-sm mt-1">費用全額会社負担</span>
              </div>
            </div>
            <div className="lg:w-3/5 bg-gray-50 px-6 sm:px-10 py-8 flex flex-col justify-center">
              <h2 className="text-lg font-black text-navy tracking-tight mb-4">第二種電気工事士 資格取得支援</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                第二種電気工事士は、住宅・小規模店舗の電気工事を合法的に行うための国家資格です。年2回（上期・下期）に受験機会があり、筆記試験と技能試験の2段階で合格を目指します。
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                宝宮設備では、受験費用（9,300円）・テキスト代・講習費用のすべてを会社が負担します。また、先輩スタッフが実技練習をサポートするため、独学よりも効率よく学べます。
              </p>
              <div className="space-y-2">
                {[
                  '受験費用・テキスト代・講習費用 全額会社負担',
                  '先輩スタッフによる実技練習サポート',
                  '資格取得後は担当できる工事が大幅に拡大',
                  '資格取得→昇給に直結する仕組み',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold text-xs mt-0.5 flex-shrink-0">—</span>
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Work details */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">主な業務内容</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: '照明器具の取付・交換', body: 'シーリングライト・ダウンライト・スポットライトなど各種照明の取付・交換。脚立を使った高所作業も含まれます。新築・リフォーム・単品交換と様々な場面があります。' },
                { title: 'コンセント・スイッチの増設・交換', body: 'コンセントが足りない場所への増設、老朽化したスイッチ・コンセントの交換。テレビコンセント（情報コンセント）など多様な種類があります。' },
                { title: '分電盤（ブレーカー）の交換・増設', body: '老朽化した分電盤の撤去と新しい分電盤への交換。契約アンペアの変更に伴う増設工事も担当します。電気の安全を守る重要な工事です。' },
                { title: 'エアコン・給湯器の専用回路工事', body: 'エアコン・エコキュート・IHクッキングヒーターなど、大容量機器のための専用コンセント・専用回路の新設工事。エアコン工事・給湯器交換と連携して行うことが多い工事です。' },
                { title: '新築・リフォーム時の配線工事', body: '新築住宅やリフォーム現場での電気配線工事。壁の中の配線ルートを設計し、コンセント・照明の位置に合わせて電線を通します。' },
                { title: '電気設備の点検・修理', body: 'ブレーカーが落ちる・電気がつかないなどのトラブル対応。検電器・テスターを使って原因を特定し、修理・交換を行います。' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 p-5">
                  <h3 className="text-sm font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning path for beginners */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">未経験から電気工事を学ぶ流れ</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              電気工事は安全確認が非常に重要です。入社直後は必ず先輩と一緒に動き、安全の基礎を徹底的に身につけてから作業を担当します。
            </p>
            <div className="space-y-4">
              {[
                { period: '入社〜1ヶ月', title: '安全教育と補助作業', body: '電気の基礎知識（電圧・電流・アース）と安全確認の方法を先輩から教わります。工具の使い方・検電器の使い方を覚え、照明交換などシンプルな作業の補助から始めます。' },
                { period: '1〜3ヶ月', title: '基本的な電気工事を担当', body: '照明器具の交換・コンセント交換など、比較的シンプルな作業を先輩の確認のもとで担当します。作業前の安全確認（ブレーカーオフ・検電確認）を習慣化します。' },
                { period: '3〜6ヶ月', title: '資格取得の勉強を本格化', body: '第二種電気工事士の筆記試験に向けて学習を開始します。仕事で学んだ知識が試験内容とリンクするため、理解が早まります。現場では独自の作業範囲が増えていきます。' },
                { period: '資格取得後', title: '担当できる工事が大幅に拡大', body: '第二種電気工事士取得後は、配線工事・分電盤工事など法的に資格が必要な作業も担当できます。給与が上がり、現場でのポジションも変わります。' },
              ].map((stage) => (
                <div key={stage.period} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 bg-navy text-white text-xs font-bold tracking-wide px-3 py-1.5 leading-tight whitespace-nowrap">{stage.period}</div>
                  <div>
                    <p className="text-sm font-bold text-navy">{stage.title}</p>
                    <p className="text-sm text-gray-500">{stage.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety */}
          <div className="mb-12 bg-gray-50 p-6 sm:p-8">
            <h2 className="text-lg font-black text-navy tracking-tight mb-4">安全管理の重要性</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              電気工事で最も重要なのは安全確認です。作業前に必ずブレーカーを落とし、検電器で電気が流れていないことを確認してから作業を開始します。この手順を省略することは絶対にありません。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: '必ず守る安全手順', items: ['ブレーカーオフ（電源遮断）', '検電器で通電確認', 'アース接続の確認', '作業前・作業中・作業後の確認'] },
                { title: '使用する安全器具', items: ['検電器（電気が流れているか確認）', '絶縁手袋・絶縁ドライバー', 'テスター（電圧・抵抗の測定）', 'ヘルメット・安全靴'] },
              ].map((col) => (
                <div key={col.title}>
                  <h3 className="text-xs font-bold text-navy mb-3">{col.title}</h3>
                  <ul className="space-y-1.5">
                    {col.items.map((item) => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-orange-400 flex-shrink-0 mt-0.5">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Connection to other work */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">エアコン工事・給湯器交換との関連</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              宝宮設備では3つの仕事（エアコン工事・給湯器交換・電気工事）を担当します。電気工事は他の2つと深く関連しています。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-l-4 border-orange-400 pl-5 py-2">
                <h3 className="text-sm font-bold text-navy mb-2">エアコン工事との関連</h3>
                <p className="text-sm text-gray-500 leading-relaxed">エアコンに専用回路がない場合、分電盤から専用コンセントを新設する電気工事が必要です。電気工事士の資格があると、このセットで対応できます。</p>
              </div>
              <div className="border-l-4 border-navy pl-5 py-2">
                <h3 className="text-sm font-bold text-navy mb-2">給湯器交換との関連</h3>
                <p className="text-sm text-gray-500 leading-relaxed">給湯器の電源コンセント取付・アース接続は電気工事の知識が必要です。両方を一人でできる技術者は、現場での対応力が大幅に高まります。</p>
              </div>
            </div>
          </div>

          {/* Career path */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">電気工事のキャリアパス</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              電気工事士の資格は全国で通用する国家資格です。資格と経験を積むことで、設備工事全般の技術者として長く活躍できます。将来的に独立を目指す方にとっても、基盤となるキャリアです。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200">
              {[
                { title: '電気工事士取得（1〜2年目）', body: '第二種電気工事士を取得。担当できる電気工事の範囲が広がり、月給がアップします。' },
                { title: '3職種オールラウンダー（2〜3年目）', body: 'エアコン・給湯器・電気の3職種すべてに対応。難しい現場・複合的な工事も担当します。' },
                { title: 'リーダー・独立（3年以降）', body: '後輩の指導を担当したり、将来的に独立・開業の道を目指す技術者もいます。' },
              ].map((stage) => (
                <div key={stage.title} className="bg-white p-5">
                  <h3 className="text-sm font-bold text-navy mb-2">{stage.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{stage.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-navy tracking-tight mb-4 pb-3 border-b border-gray-200">募集条件</h2>
            <table className="recruit-table">
              <tbody>
                <tr><th>職種</th><td>電気工事スタッフ（照明・コンセント・分電盤・配線工事）</td></tr>
                <tr><th>雇用形態</th><td>正社員</td></tr>
                <tr><th>対象年齢</th><td>未経験歓迎 / 18歳〜35歳 / 第二種電気工事士なしでも可</td></tr>
                <tr><th>給与</th><td>月給25万円〜70万円（未経験：研修後250,000円〜）</td></tr>
                <tr><th>勤務時間</th><td>8:30〜17:00（残業なし）</td></tr>
                <tr><th>勤務地</th><td>神奈川県全域の各現場（本社：神奈川県厚木市温水西1-4-39）</td></tr>
                <tr><th>資格支援</th><td>第二種電気工事士 取得費用全額会社負担 / 先輩スタッフによる実技サポートあり</td></tr>
                <tr><th>福利厚生</th><td>社会保険完備 / 車両貸出 / 昼食補助 / 資格取得支援 / 社宅相談可 / 制服貸与 / 交通費支給</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-orange-50 border border-orange-100 p-6 sm:p-8 mb-10">
            <p className="text-sm font-black text-navy mb-2">宝宮設備では、電気工事に挑戦したい方を募集しています</p>
            <p className="text-xs text-gray-600 leading-relaxed mb-5">資格なし・未経験でも大丈夫。第二種電気工事士の取得費用は全額会社負担です。神奈川県で電気工事のプロを目指しませんか。</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/recruit" className="flex-1 block text-center border border-navy text-navy font-bold py-3.5 text-sm hover:bg-navy hover:text-white transition-colors">募集要項を見る</Link>
              <Link href="/entry" className="flex-1 block text-center bg-orange-500 text-white font-black py-3.5 text-sm hover:bg-orange-400 transition-colors">応募フォームへ →</Link>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: '/aircon-work', label: 'エアコン工事求人' },
                { href: '/water-heater-work', label: '給湯器交換求人' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/jobs/electrical', label: '職種別求人詳細' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-gray-500 hover:text-orange-500 transition-colors">{link.label} →</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
