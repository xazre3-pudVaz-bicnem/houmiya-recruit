import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '給湯器交換スタッフ求人｜神奈川県厚木市の設備工事求人',
  description:
    '神奈川県の給湯器交換スタッフ求人。宝宮設備では未経験から給湯器工事に挑戦できます。月給25万〜70万円・残業なし（8:30〜17:00）・資格取得支援あり。ガス給湯器・エコキュート対応。',
  keywords: [
    '給湯器交換 求人',
    '給湯器工事 求人',
    '給湯器交換 仕事',
    '住宅設備工事 求人',
    '神奈川 給湯器交換 求人',
    '給湯器 未経験',
  ],
  openGraph: {
    title: '給湯器交換スタッフ求人｜神奈川県厚木市の設備工事求人',
    description: '神奈川県の給湯器交換求人。未経験歓迎・月給25万〜70万円・残業なし。宝宮設備。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/water-heater-work' },
}

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: '給湯器交換スタッフ',
  description: '神奈川県厚木市の宝宮設備では、ガス給湯器・エコキュートの取替え・新規設置を担当するスタッフを募集しています。未経験歓迎・研修あり・資格取得支援あり。',
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
    { '@type': 'ListItem', position: 3, name: '給湯器交換', item: 'https://www.houmiya-recruit.com/water-heater-work' },
  ],
}

const faqItems = [
  { q: '給湯器もガスも水道もわかりません。', a: '宝宮設備のスタッフの大半は、入社前に全く知識がない状態でした。まず先輩の作業を見て全体の流れを覚え、部分的な作業から担当します。給湯器の種類・配管の名前は、現場を繰り返すうちに自然に覚えます。' },
  { q: 'ガスの工事は危ないですか？', a: 'ガスを扱う作業は確かに注意が必要ですが、正しい手順と安全確認を徹底すれば安全に作業できます。最初は先輩が元栓の開閉・ガス漏れ確認を行い、その方法を見ながら学びます。' },
  { q: '給湯器交換だけでなく他の工事もしますか？', a: '宝宮設備では給湯器交換だけでなく、エアコン工事・電気工事も担当します。給湯器交換で培った配管・電気の基礎知識は、他の工事にもそのまま活かせます。' },
  { q: '重い給湯器を持つのが不安です。', a: '給湯器は機種によって20〜80kg程度の重さがあります。重い機器の搬入は2人で行います。持ち方・運び方のコツを先輩から教わりますので、最初から無理に一人でやる必要はありません。' },
  { q: '給湯器交換の資格は入社前に必要ですか？', a: '入社時は普通自動車免許（AT限定可）のみ必要です。簡易内管施工士・液化石油ガス設備士などは入社後に取得を目指します。資格取得費用は全額会社負担です。' },
  { q: '1件あたりの作業時間はどのくらいですか？', a: '同機種交換（配管・ガス接続位置が同じ場合）は2〜3時間が目安です。配管経路の変更・複数設備の移設がある場合は4〜6時間になることもあります。' },
  { q: '冬は特に忙しいですか？', a: 'はい、冬は給湯器が急に壊れるケースが増えるため、仕事量が増えます。ただし宝宮設備では残業なしの方針を維持しており、1日の件数を調整して対応しています。' },
  { q: 'ガス管の種類によって作業が変わりますか？', a: '都市ガスとプロパンガス（LPG）では配管・部品が異なります。入社後に両方の知識を覚えます。神奈川県内はエリアによって両方の現場があります。' },
  { q: '給湯器の運搬は腰に負担がかかりますか？', a: '重い機器の運搬は2人体制を基本としています。適切な姿勢と道具（台車など）を使うことで腰への負担を軽減します。' },
  { q: '残業はありますか？', a: '宝宮設備では残業なしを方針としています。8:30〜17:00で1日の作業が終わるようにスケジュールを組んでいます。' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function WaterHeaterWork() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        en="Water Heater Work"
        title="給湯器交換スタッフ求人"
        subtitle="神奈川県の設備工事求人"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { href: '/work', label: '仕事内容' }, { label: '給湯器交換' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="h-52 sm:h-72 mb-12 relative overflow-hidden">
            <Image src="/images/photo-customer-service.jpg" alt="給湯器交換工事の現場" fill className="object-cover" sizes="(min-width: 896px) 896px, 100vw" priority />
          </div>

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">給湯器交換スタッフとは</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              給湯器交換スタッフは、住宅・マンションで使用されるガス給湯器・エコキュート・電気温水器などを取り替える仕事です。お客様の生活に直結する「お湯」という重要なインフラを担います。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              給湯器は10〜15年で交換時期を迎えます。日本全国で毎年約300〜400万台が交換されており、需要が安定した仕事です。特に冬場は「急にお湯が出なくなった」という緊急依頼も増え、ありがたがられる仕事でもあります。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              給湯器工事はガス・水道・電気の3つが絡む複合的な作業ですが、手順が明確なため未経験でも習得しやすい仕事のひとつです。宝宮設備では先輩スタッフが丁寧に教えるため、ゼロからのスタートでも安心です。
            </p>
          </div>

          {/* Infrastructure appeal */}
          <div className="mb-12 bg-navy py-10 px-6 sm:px-10">
            <h2 className="text-lg font-black text-white tracking-tight mb-5">生活インフラを支える仕事</h2>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              お客様から「修理よりも交換した方がよい」と言われた後に、新しい給湯器でお湯が出るようになったとき、「ありがとう、助かりました」という言葉をいただけます。生活の一部を守る仕事をしているという実感を、毎日の現場で感じることができます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: '感謝が直接届く', body: 'お客様のお宅に伺い、工事完了後に直接「ありがとう」の言葉をいただける仕事です。' },
                { title: '安定した需要', body: '給湯器は必ず老朽化します。景気に左右されにくく、神奈川県内でも安定した仕事量があります。' },
                { title: '複合スキルが身につく', body: 'ガス・水道・電気の3分野に関わる知識を同時に習得できます。' },
                { title: '短時間完結', body: '1件が半日〜1日で完結することが多く、毎日達成感を感じられます。' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed work flow */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">給湯器交換の仕事の流れ</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              給湯器交換は、撤去→取付→接続→試運転というシンプルな流れで進みます。手順を覚えてしまえば、未経験者でも着実にスキルアップできる仕事です。
            </p>
            <div className="space-y-0">
              {[
                { num: '01', title: '現場確認・既存機器の点検', body: '現場に到着したら既存の給湯器の型番・設置状況を確認。必要な部材・工具が揃っているかチェックします。ガスの元栓・水道の止水栓・電源の位置を確認します。' },
                { num: '02', title: '既存給湯器の撤去', body: 'ガスを遮断し、給水・給湯の配管を外します。電源を切ってから電気配線を外し、給湯器本体を固定から外して搬出します。古い給湯器は適切に処分します。' },
                { num: '03', title: '新しい給湯器の搬入・設置', body: '新しい給湯器を設置場所まで運び込みます。給湯器が重い場合は2人で運ぶ場合もあります。壁または架台に固定し、水平を確認します。' },
                { num: '04', title: 'ガス管・給水管の接続', body: 'ガス配管・給水管・給湯管を新しい給湯器に接続します。配管の素材（銅管・樹脂管など）に応じて接続方法が変わります。水漏れがないかを必ず確認します。' },
                { num: '05', title: '電源配線の接続', body: '電源コンセントまたは端子台への配線接続を行います。アース接続も確実に行います。電気系統は安全確認を徹底します。' },
                { num: '06', title: '試運転・動作確認', body: 'ガスを開き、電源を入れて試運転します。お湯が正常に出るか・温度調整が機能するか・エラーコードが出ていないかを確認します。' },
                { num: '07', title: 'お客様への説明・使い方の案内', body: '操作方法・注意事項・保証書の確認などをお客様に丁寧に説明します。お客様の疑問に答えながら、安心して使っていただける状態で工事完了とします。' },
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

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">給湯器工事で身につく複合スキル</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              給湯器交換はガス・水道・電気の3分野が一つの工事に含まれています。この経験を積むことで、設備工事全般の基礎知識が身につきます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200">
              {[
                { category: 'ガス関連', skills: ['元栓の開閉操作', 'ガス管フレキ接続', 'ガス漏れ確認の方法', '簡易内管施工士への道'] },
                { category: '水道関連', skills: ['止水栓の操作', '配管（銅管・樹脂管）接続', '水漏れ確認', '給水・給湯管の違い'] },
                { category: '電気関連', skills: ['電源コンセント取付', 'アース接続', 'ブレーカーの確認', '電気工事士資格への道'] },
              ].map((col) => (
                <div key={col.category} className="bg-white p-5">
                  <h3 className="text-sm font-bold text-navy mb-3">{col.category}</h3>
                  <ul className="space-y-2">
                    {col.skills.map((s) => (
                      <li key={s} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-orange-400 flex-shrink-0">—</span>{s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Demand */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">神奈川県内での給湯器交換の需要</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              神奈川県は人口約920万人・住宅数約460万戸と全国3位の規模です。それだけの数の住宅に給湯器が設置されており、毎年一定数が交換時期を迎えます。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              宝宮設備では厚木市・海老名市・大和市・座間市・伊勢原市・平塚市・相模原市・綾瀬市・秦野市・藤沢市など神奈川県全域の給湯器交換を担当しています。年間を通じて安定した仕事量があります。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              ガスから電気（エコキュート）への移行も進んでおり、エコキュートの設置需要も増えています。電気温水器・エコキュートへの対応スキルを身につけることで、さらに仕事の幅が広がります。
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">よくある質問（給湯器交換求人）</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
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
                <tr><th>職種</th><td>給湯器交換スタッフ（ガス給湯器・エコキュート取替え・新規設置）</td></tr>
                <tr><th>雇用形態</th><td>正社員</td></tr>
                <tr><th>対象年齢</th><td>未経験歓迎 / 18歳〜35歳（若手積極採用）</td></tr>
                <tr><th>給与</th><td>月給25万円〜70万円（未経験：研修後250,000円〜）</td></tr>
                <tr><th>勤務時間</th><td>8:30〜17:00（残業なし）</td></tr>
                <tr><th>勤務地</th><td>神奈川県全域の各現場（本社：神奈川県厚木市温水西1-4-39）</td></tr>
                <tr><th>資格</th><td>普通自動車免許（AT限定可）。関連資格は入社後取得サポートあり（全額会社負担）</td></tr>
                <tr><th>福利厚生</th><td>社会保険完備 / 車両貸出 / 昼食補助 / 資格取得支援 / 社宅相談可 / 制服貸与 / 交通費支給</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-orange-50 border border-orange-100 p-6 sm:p-8 mb-10">
            <p className="text-sm font-black text-navy mb-2">宝宮設備では、給湯器交換に挑戦したい方を募集しています</p>
            <p className="text-xs text-gray-600 leading-relaxed mb-5">未経験でも大丈夫。入社後の研修と先輩スタッフのサポートで、給湯器工事のプロを目指せます。</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/recruit" className="flex-1 block text-center border border-navy text-navy font-bold py-3.5 text-sm hover:bg-navy hover:text-white transition-colors">募集要項を見る</Link>
              <Link href="/entry" className="flex-1 block text-center bg-orange-500 text-white font-black py-3.5 text-sm hover:bg-orange-400 transition-colors">応募フォームへ →</Link>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: '/aircon-work', label: 'エアコン工事求人' },
                { href: '/electrical-work', label: '電気工事求人' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/jobs/water-heater', label: '職種別求人詳細' },
                { href: '/knowledge/kyutoki-koukan-shigoto', label: '給湯器交換の仕事内容' },
                { href: '/knowledge/setsubi-kouji-mikeiken', label: '設備工事は未経験でも始められる？' },
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
