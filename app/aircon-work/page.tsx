import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'エアコン工事スタッフ求人｜未経験歓迎・神奈川県厚木市',
  description:
    '神奈川県のエアコン工事スタッフ求人。宝宮設備では未経験からエアコン取付・交換工事に挑戦できます。月給25万〜70万円・残業なし（8:30〜17:00）・資格取得支援（会社全額負担）。',
  keywords: [
    'エアコン工事 求人',
    'エアコン工事 求人 神奈川',
    'エアコン取付 求人',
    '空調工事 求人',
    '空調設備 求人 神奈川',
    'エアコン工事 未経験',
  ],
  openGraph: {
    title: 'エアコン工事スタッフ求人｜未経験歓迎・神奈川県厚木市',
    description: '神奈川県のエアコン工事求人。未経験歓迎・月給25万〜70万円・残業なし。宝宮設備。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/aircon-work' },
}

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'エアコン工事スタッフ',
  description: '神奈川県厚木市の宝宮設備では、家庭用・業務用エアコンの取付・交換・撤去工事を担当するスタッフを募集しています。未経験歓迎・研修あり・資格取得支援あり。',
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
  qualifications: '未経験歓迎。普通自動車免許（AT限定可）。',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '仕事内容', item: 'https://www.houmiya-recruit.com/work' },
    { '@type': 'ListItem', position: 3, name: 'エアコン工事', item: 'https://www.houmiya-recruit.com/aircon-work' },
  ],
}

export default function AirconWork() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        en="Air Conditioning Work"
        title="エアコン工事スタッフ求人"
        subtitle="未経験歓迎・神奈川県対応"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { href: '/work', label: '仕事内容' }, { label: 'エアコン工事' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="h-52 sm:h-72 mb-12 relative overflow-hidden">
            <Image src="/images/photo-aircon-outdoor.jpg" alt="エアコン工事の現場" fill className="object-cover" sizes="(min-width: 896px) 896px, 100vw" priority />
          </div>

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">エアコン工事スタッフとは</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              エアコン工事スタッフは、住宅・マンション・店舗・オフィスにエアコン（室内機・室外機）を取付・交換・移設・撤去する仕事です。神奈川県内の現場を会社の車両で担当します。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              エアコンの普及率は全国で約90%以上。毎年100万台以上が交換需要を迎えており、仕事量が安定しています。特に6〜9月の夏の繁忙期は件数が増え、1日4〜5台の現場を担当することもあります。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              エアコン工事は未経験からでも始めやすい仕事のひとつです。最初は先輩と一緒に動き、3〜6ヶ月で基本的な取付を一人でこなせるようになるスタッフが多いです。
            </p>
          </div>

          {/* Photo row */}
          <div className="grid grid-cols-3 gap-px bg-gray-200 mb-12 -mx-4 sm:-mx-6">
            <div className="relative h-32 sm:h-52 overflow-hidden">
              <Image src="/images/photo-aircon-balcony.jpg" alt="バルコニーでの配管工事" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative h-32 sm:h-52 overflow-hidden">
              <Image src="/images/photo-aircon-install.jpg" alt="室内機取付作業" fill className="object-cover object-top" sizes="33vw" />
            </div>
            <div className="relative h-32 sm:h-52 overflow-hidden">
              <Image src="/images/photo-aircon-complete-1.jpg" alt="エアコン工事完了" fill className="object-cover object-top" sizes="33vw" />
            </div>
          </div>

          {/* Detailed work content */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">仕事内容と工事の流れ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-5">
                <h3 className="text-sm font-bold text-navy mb-2">家庭用エアコン工事（取付・交換）</h3>
                <p className="text-sm text-gray-600 leading-relaxed">住宅・マンションの各部屋へのエアコン取付・交換が主な仕事。1台あたり1〜3時間程度。設置場所の確認→背板固定→壁穴あけ→室内機取付→配管引き回し→室外機設置・接続→試運転という順番で進めます。</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h3 className="text-sm font-bold text-navy mb-2">業務用エアコン工事</h3>
                <p className="text-sm text-gray-600 leading-relaxed">店舗・オフィス・飲食店などの業務用エアコンの取付・交換。家庭用より機器が大きく、設置・接続の難易度が上がります。経験を積むにつれて担当できるようになっていきます。</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h3 className="text-sm font-bold text-navy mb-2">エアコン移設・撤去工事</h3>
                <p className="text-sm text-gray-600 leading-relaxed">引越しに伴うエアコンの取り外し・再取付（移設）、廃棄に伴う撤去工事も担当します。冷媒ガスの適切な処理（資格が必要）も覚えることで、担当できる作業の幅が広がります。</p>
              </div>
              <div className="bg-gray-50 p-5">
                <h3 className="text-sm font-bold text-navy mb-2">エアコン専用回路工事（電気工事と連携）</h3>
                <p className="text-sm text-gray-600 leading-relaxed">エアコンに専用の電源回路がない場合、電気工事士資格を持つスタッフが分電盤からコンセントを新設します。電気工事のスキルを身につけることで、この工事も担当できます。</p>
              </div>
            </div>

            <h3 className="text-sm font-bold text-navy mb-4">エアコン工事の基本的な作業手順</h3>
            <div className="space-y-0">
              {[
                { num: '01', title: '現場到着・段取り確認', body: 'お客様に挨拶し、設置場所の確認・養生を行います。当日の作業内容を先輩と確認します。' },
                { num: '02', title: '取付位置の決定・背板固定', body: '室内機の取付位置を水平器で確認し、背板（取付板）をビスで固定します。位置が正確でないと後の作業に影響するため、慎重に行います。' },
                { num: '03', title: '壁穴あけ・スリーブ設置', body: '配管を通すための穴を電動ドリルで開けます。壁の材質（木・コンクリート・サイディング）によって使う工具が変わります。スリーブ（配管保護管）を設置して端部を仕上げます。' },
                { num: '04', title: '室内機の取付', body: '背板に室内機を引っ掛けて固定します。配管・電線・ドレンホースを室内機に接続し、穴を通して屋外に出します。' },
                { num: '05', title: '室外機の設置・接続', body: '室外機を所定の場所（ベランダ・地面・架台）に設置し、配管・電線を接続します。フレア接続（配管端部の加工・接続）は精度が求められる重要な作業です。' },
                { num: '06', title: '試運転・動作確認', body: '電源を入れて冷暖房が正常に動作するかを確認します。風量・温度・異音の有無をチェックし、お客様に使い方を説明します。' },
              ].map((item) => (
                <div key={item.num} className="reason-row">
                  <div className="flex-shrink-0 w-12"><span className="text-2xl font-black text-gray-200">{item.num}</span></div>
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Beginner path */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">未経験からエアコン工事を覚えるステップ</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              入社時にエアコンの仕組みを知らなくても大丈夫です。まず「工具の名前を覚える」「先輩の手順を見て覚える」から始め、徐々に自分で作業を担当します。
            </p>
            <div className="bg-gray-50 p-6 sm:p-8">
              <div className="space-y-4">
                {[
                  { period: '入社〜1ヶ月', title: '見学と補助作業', body: '先輩と一緒に現場に出ます。工具の受け渡し・養生・後片付けなど、補助から始めながら全体の流れを覚えます。' },
                  { period: '1〜3ヶ月', title: '部分的な作業を担当', body: '養生・工具準備・室内機取付補助・後片付けなど、特定の作業を先輩の確認のもとで担当します。' },
                  { period: '3〜6ヶ月', title: '基本的な取付を一人でこなす', body: '標準的な条件のエアコン取付（1台・家庭用・木造住宅など）を一人で完結できるようになります。' },
                  { period: '6ヶ月〜1年', title: '複数台・様々な現場へ', body: '複数台・マンション・難しい配管条件など、バリエーションを増やします。冷媒取扱技術者資格の取得も目指します。' },
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
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">エアコン工事で身につく技術</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                '配管（銅管）のカット・フレア加工・接続',
                '電動ドリル・コアドリルの正しい使い方',
                '壁の材質に応じた穴あけ技術',
                '真空ポンプを使った配管処理',
                '室外機の設置・固定（架台設置含む）',
                '電気配線の基礎（電圧・ブレーカー確認）',
                '試運転時のトラブル診断の基礎',
                'お客様への丁寧な説明と対応スキル',
              ].map((skill) => (
                <div key={skill} className="flex items-start gap-2 bg-gray-50 px-4 py-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">—</span>
                  <span className="text-xs text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who fits */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">エアコン工事に向いている人</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: '夏に体を動かすのが苦にならない人', body: '夏の繁忙期は屋外作業・非空調の室内作業が多く、暑い環境で仕事をする日があります。体力がある・暑さに慣れやすい方は向いています。' },
                { title: '丁寧に作業できる人', body: '配管の接続・穴あけ位置の決定など、雑にやるとトラブルになる作業があります。正確さと丁寧さを大切にできる方が活躍しています。' },
                { title: 'ものの仕組みに興味がある人', body: 'エアコンが冷える仕組み（冷凍サイクル）、配管の種類と役割など、仕組みを知りたがる人は上達が早いです。' },
                { title: 'お客様対応が苦にならない人', body: '毎日違うお客様のご自宅に上がって作業します。礼儀正しく、明るく接客できる方に向いています。' },
              ].map((item) => (
                <div key={item.title} className="border border-gray-100 p-5">
                  <h3 className="text-sm font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Demand in Kanagawa */}
          <div className="mb-12 bg-navy py-8 px-6 sm:px-10">
            <h2 className="text-lg font-black text-white tracking-tight mb-4">神奈川県のエアコン工事需要</h2>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              神奈川県は全国有数の人口を抱え、住宅・マンション・商業施設の数が非常に多い地域です。エアコンの普及率が高く、10〜15年ごとの交換サイクルで毎年一定の仕事量が発生します。
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              宝宮設備は厚木市を拠点に、海老名市・大和市・座間市・相模原市・伊勢原市・平塚市・藤沢市・綾瀬市・秦野市など神奈川県全域の現場を担当しています。県内の安定した需要から、仕事量が安定しています。
            </p>
          </div>

          {/* Pre-application worries */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">応募前によくある不安</h2>
            <div className="space-y-4">
              {[
                { q: 'エアコンのことを何も知らなくて大丈夫ですか？', a: '大丈夫です。宝宮設備のスタッフの多くがエアコンの仕組みを知らない状態で入社しています。現場で繰り返し作業するうちに自然と理解できるようになります。' },
                { q: '夏の暑い時期の作業が心配です。', a: '屋外作業・非空調環境での作業があるため、夏は体力的にきつい日があります。こまめな水分補給・休憩を取りながら進めます。体が慣れてくる2〜3ヶ月で感覚が変わってきます。' },
                { q: '高所作業は怖くないですか？', a: 'はしごや脚立での高所作業があります。最初は低い場所から始め、慣れながら高い場所へとステップアップします。安全帯・ヘルメットなど適切な安全装備を使用します。' },
                { q: 'エアコン工事の資格は必要ですか？', a: '入社時は不要です。入社後に「冷媒取扱技術者（第一種・第二種）」の取得を目指します。取得費用は会社が全額負担します。' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200">
                  <div className="bg-gray-50 px-5 py-3.5 border-b border-gray-200">
                    <p className="text-sm font-bold text-navy flex items-start gap-2"><span className="font-black text-orange-500">Q.</span>{item.q}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed flex items-start gap-2"><span className="font-black text-navy flex-shrink-0">A.</span>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-navy tracking-tight mb-4 pb-3 border-b border-gray-200">募集条件</h2>
            <table className="recruit-table">
              <tbody>
                <tr><th>職種</th><td>エアコン工事スタッフ（取付・交換・移設・撤去）</td></tr>
                <tr><th>雇用形態</th><td>正社員</td></tr>
                <tr><th>対象年齢</th><td>未経験歓迎 / 18歳〜35歳（若手積極採用）</td></tr>
                <tr><th>給与</th><td>月給25万円〜70万円（未経験：研修後250,000円〜）</td></tr>
                <tr><th>勤務時間</th><td>8:30〜17:00（残業なし）</td></tr>
                <tr><th>勤務地</th><td>神奈川県全域の各現場（本社：神奈川県厚木市温水西1-4-39）</td></tr>
                <tr><th>資格</th><td>普通自動車免許（AT限定可）。エアコン関連資格は入社後取得サポートあり（全額会社負担）</td></tr>
                <tr><th>福利厚生</th><td>社会保険完備 / 車両貸出 / 昼食補助 / 資格取得支援 / 社宅相談可 / 制服貸与 / 交通費支給</td></tr>
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="bg-orange-50 border border-orange-100 p-6 sm:p-8 mb-10">
            <p className="text-sm font-black text-navy mb-2">宝宮設備では、エアコン工事に挑戦したい方を募集しています</p>
            <p className="text-xs text-gray-600 leading-relaxed mb-5">未経験でも大丈夫。入社後の研修と資格取得支援（費用全額会社負担）で、エアコン工事のプロを目指せます。</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/recruit" className="flex-1 block text-center border border-navy text-navy font-bold py-3.5 text-sm hover:bg-navy hover:text-white transition-colors">募集要項を見る</Link>
              <Link href="/entry" className="flex-1 block text-center bg-orange-500 text-white font-black py-3.5 text-sm hover:bg-orange-400 transition-colors">応募フォームへ →</Link>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: '/water-heater-work', label: '給湯器交換求人' },
                { href: '/electrical-work', label: '電気工事求人' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/jobs/aircon', label: '職種別求人詳細' },
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
