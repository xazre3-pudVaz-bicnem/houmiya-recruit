import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '1日の流れ｜設備工事スタッフの働き方｜株式会社宝宮設備',
  description:
    '宝宮設備の設備工事スタッフとして働く1日の流れを紹介。8:30〜17:00・残業なし・現場直行直帰。エアコン工事・給湯器交換・電気工事スタッフのリアルな1日を詳しく解説します。',
  keywords: ['設備工事 1日の流れ', '電気工事 1日の流れ', '現場仕事 1日の流れ', '設備工事 働き方'],
  openGraph: {
    title: '1日の流れ｜設備工事スタッフの働き方｜宝宮設備',
    description: '8:30〜17:00・残業なし・現場直行直帰。宝宮設備スタッフの1日を詳しく紹介。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/day' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '1日の流れ', item: 'https://www.houmiya-recruit.com/day' },
  ],
}

export default function Day() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        en="Daily Schedule"
        title="1日の流れ"
        subtitle="設備工事スタッフの働き方"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '1日の流れ' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <div className="mb-10">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
              宝宮設備の設備工事スタッフとして働く1日の流れを紹介します。勤務時間は8:30〜17:00・残業なし。現場直行・直帰が基本なので、毎日会社に来る必要がありません。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              1日の現場件数はおよそ2〜4件。エアコン取付・給湯器交換・電気工事など、担当する工事の種類は日によって異なります。現場によってスケジュールは変動しますが、以下がおおよその1日の流れです。
            </p>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 mb-12 -mx-4 sm:-mx-6">
            {[
              { src: '/images/photo-morning-briefing.jpg', label: '朝の準備' },
              { src: '/images/photo-vehicle-departure-1.jpg', label: '現場へ出発' },
              { src: '/images/photo-aircon-outdoor.jpg', label: '現場での作業' },
              { src: '/images/photo-aircon-complete-1.jpg', label: '工事完了' },
            ].map((p) => (
              <div key={p.src} className="overflow-hidden">
                <div className="relative h-36 sm:h-44">
                  <Image src={p.src} alt={p.label} fill className="object-cover" sizes="(min-width: 640px) 25vw, 50vw" />
                </div>
                <p className="text-[10px] text-gray-500 text-center py-1.5 bg-white tracking-wider">{p.label}</p>
              </div>
            ))}
          </div>

          {/* Main timeline */}
          <div className="relative mb-14">
            <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-gray-200" />
            {[
              {
                time: '8:00',
                title: '出発前の準備',
                body: '自宅で当日の現場情報を確認します。住所・作業内容・必要な部材をチェック。会社からの指示は前日夕方にLINEや電話で共有されます。',
                note: '現場直行の場合は自宅から直接出発',
              },
              {
                time: '8:30',
                title: '現場へ出発（または作業開始）',
                body: '会社からの出発か、自宅から直行かはその日の現場によります。軽バンに工具と部材を積んで、神奈川県内の現場へ向かいます。カーナビで目的地を設定して移動します。',
                note: '勤務開始：8:30',
              },
              {
                time: '9:00〜10:00',
                title: '現場到着・段取り確認',
                body: 'お客様に挨拶し、作業内容と手順を確認します。養生シートを敷いて床や壁を保護し、工具を準備してから作業を開始します。安全確認（電源・ガス・水道）を忘れずに行います。',
                note: '養生・安全確認は毎回必須',
              },
              {
                time: '10:00〜12:00',
                title: '午前の作業',
                body: 'エアコン取付の場合は室内機の設置・穴あけ・配管引き回しを進めます。給湯器交換の場合は古い機器の撤去と新しい機器の設置を行います。電気工事の場合は配線・器具取付を進めます。1現場あたり1〜4時間が目安です。',
                note: '工事の種類によって作業内容が異なります',
              },
              {
                time: '12:00〜13:00',
                title: '昼休憩（昼食補助あり）',
                body: '現場近くのお弁当屋・コンビニ・飲食店でランチを取ります。昼食補助があるので食費の負担が軽減されます。先輩と一緒のときは昼食の時間が自然な情報交換の場にもなります。',
                note: '昼食補助制度あり',
              },
              {
                time: '13:00〜15:00',
                title: '午後の現場',
                body: '午前の現場が終わっていれば次の現場へ移動。午前の現場が続く場合は作業を継続します。午後は複数の現場を担当することもあります。給湯器交換なら試運転・お客様説明、エアコン取付なら室外機設置・試運転へと進みます。',
                note: '1日2〜4件の現場が基本',
              },
              {
                time: '15:00〜16:30',
                title: '作業完了・後片付け・お客様説明',
                body: '作業が完了したら試運転で正常動作を確認します。養生シートを片付け、現場をきれいにします。最後にお客様へ使い方の説明を行い、サインをいただきます。この説明が丁寧かどうかで印象が大きく変わります。',
                note: '完工確認・お客様説明は丁寧に',
              },
              {
                time: '17:00',
                title: '終業（直帰または帰社）',
                body: '当日の最終現場が終わったら直帰します。翌日の確認がある場合は帰社しますが、基本は直帰です。残業はありません。17時以降の時間はプライベート・資格の勉強・趣味に使えます。',
                note: '勤務終了：17:00（残業なし）',
              },
            ].map((item, i) => (
              <div key={item.time} className="flex gap-6 mb-10 last:mb-0 relative">
                <div className="flex-shrink-0 w-14 text-right">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-navy bg-white inline-block relative z-10" style={{ marginRight: '-1px' }} />
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-navy text-white text-xs font-bold px-3 py-1.5 tracking-wider leading-tight">{item.time}</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-navy tracking-tight mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.body}</p>
                  {item.note && (
                    <span className="text-[11px] text-orange-500 font-bold">{item.note}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mb-12 border border-gray-200 px-4 py-3">
            ※ 現場の状況や担当業務により、スケジュールは変動します。上記は一般的な例です。
          </p>

          {/* Beginner day */}
          <div className="mb-12 bg-gray-50 p-6 sm:p-8">
            <h2 className="text-lg font-black text-navy tracking-tight mb-4">未経験者の1日の流れ</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              入社後1〜2ヶ月は先輩スタッフと同行します。未経験者の場合は「先輩の横で作業を見る→補助をする→少しずつ担当する」という順番で覚えます。
            </p>
            <div className="space-y-3">
              {[
                { step: '現場到着時', body: '先輩の挨拶を横で聞き、段取り確認の仕方を覚えます。' },
                { step: '養生・準備', body: '最初に任せてもらえる補助作業。丁寧さが身につく重要な仕事です。' },
                { step: '工具準備', body: '先輩が使う工具を事前に準備・管理します。工具の名前と用途を覚える機会です。' },
                { step: '作業補助', body: '先輩が本作業をしている間、部材の受け渡し・ライトで照らすなどのサポートをします。' },
                { step: '確認作業', body: '試運転時の動作確認など、先輩に「これを確認して」と頼まれる役割を担います。' },
                { step: 'お客様対応見学', body: '先輩のお客様説明を横で聞き、言葉遣い・説明の順番を覚えます。' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 bg-navy text-white text-xs font-bold px-2 py-1">{item.step}</span>
                  <p className="text-xs text-gray-600 leading-relaxed pt-0.5">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Busy vs normal */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              繁忙期と通常期の違い
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
              <div className="bg-white p-6">
                <h3 className="text-sm font-bold text-navy mb-3">繁忙期（6〜9月・1〜2月）</h3>
                <ul className="space-y-2">
                  {[
                    '夏：エアコン取付件数が大幅増加（1日4〜5台も）',
                    '冬：給湯器交換の需要が高まる',
                    '仕事量が多い分、技術の成長が一番早い時期',
                    'スケジュールが詰まることもあるが17時終業は維持',
                    '「たくさん動ける」という達成感が大きい',
                  ].map((item) => (
                    <li key={item} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-orange-400 flex-shrink-0 mt-0.5">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="text-sm font-bold text-navy mb-3">通常期（10〜11月・3〜5月）</h3>
                <ul className="space-y-2">
                  {[
                    '1日2〜3件のペースで落ち着いた作業量',
                    '丁寧に作業を覚えるための時間が取りやすい',
                    '資格取得の勉強を進めやすい時期',
                    '先輩から技術的なアドバイスを受ける余裕がある',
                    '体力的にも精神的にも無理なく働ける',
                  ].map((item) => (
                    <li key={item} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-gray-400 flex-shrink-0 mt-0.5">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Work style features */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              宝宮設備の働き方の特徴
            </h2>
            <div className="space-y-0">
              {[
                { title: '現場直行・直帰が基本', body: '毎朝会社に来なくてよいので、通勤時間が短縮されます。会社の車両で自宅近くから現場に向かえます。' },
                { title: '8:30〜17:00・残業なし', body: '現場のスケジュールを17時に完了するよう組んでいます。仕事後の時間を自分のために使えます。' },
                { title: '昼食補助で食費を節約', body: '昼食代を会社が補助するため、毎日の食費負担が軽減されます。体力仕事だからこそ、ちゃんと食べることを大切にしています。' },
                { title: '神奈川県全域の現場を経験', body: '厚木市を拠点に、神奈川県全域の現場を担当します。さまざまな条件の現場を経験することで、技術の幅が広がります。' },
                { title: '先輩が現場でサポート', body: '特に入社後の1〜2ヶ月は先輩が常にそばにいます。わからないことはその場で聞ける環境が整っています。' },
              ].map((item) => (
                <div key={item.title} className="reason-row">
                  <div className="flex-shrink-0"><div className="w-2 h-2 rounded-full bg-navy mt-1.5" /></div>
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/recruit" className="btn-outline text-sm px-6 py-3.5">募集要項を見る</Link>
            <Link href="/entry" className="btn-primary text-sm px-6 py-3.5">応募フォームへ</Link>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: '/area/atsugi', label: '厚木市の求人詳細' },
                { href: '/company',     label: '会社概要' },
                { href: '/work',        label: '仕事内容' },
                { href: '/beginner',    label: '未経験の方へ' },
                { href: '/welfare',     label: '福利厚生' },
                { href: '/recruit',     label: '募集要項' },
                { href: '/faq',         label: 'よくある質問' },
                { href: '/entry',       label: '応募フォーム' },
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
