import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '仕事内容｜エアコン工事・給湯器交換・電気工事スタッフ求人｜株式会社宝宮設備',
  description:
    '神奈川県厚木市の株式会社宝宮設備では、エアコン工事・給湯器交換・電気工事スタッフを募集中。未経験から設備工事の技術を学べる仕事内容を詳しく紹介します。月給25万〜70万円・残業なし・資格取得支援あり。',
  keywords: [
    '設備工事 仕事内容',
    '設備工事 求人 神奈川',
    '厚木市 設備工事 求人',
    'エアコン工事 仕事内容',
    '給湯器交換 仕事',
    '電気工事 未経験',
  ],
  openGraph: {
    title: '仕事内容｜エアコン工事・給湯器交換・電気工事｜宝宮設備',
    description: '神奈川県厚木市の宝宮設備。設備工事3職種の仕事内容を詳しく解説。未経験歓迎・月給25万〜70万円。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/work' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '仕事内容', item: 'https://www.houmiya-recruit.com/work' },
  ],
}

const internalLinks = [
  { href: '/jobs/aircon', label: 'エアコン工事スタッフ求人詳細' },
  { href: '/jobs/water-heater', label: '給湯器交換スタッフ求人詳細' },
  { href: '/jobs/electrical', label: '電気工事スタッフ求人詳細' },
  { href: '/jobs/setsubi', label: '設備工事総合スタッフ求人' },
  { href: '/beginner', label: '未経験の方へ' },
  { href: '/welfare', label: '福利厚生' },
  { href: '/area', label: '地域別求人' },
  { href: '/recruit', label: '募集要項' },
  { href: '/entry', label: '応募フォーム' },
]

export default function Work() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        en="Work"
        title="仕事内容"
        subtitle="エアコン工事・給湯器交換・電気工事"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '仕事内容' }]}
      />

      {/* Overview */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-5">
            設備工事スタッフとはどんな仕事か
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            宝宮設備の設備工事スタッフは、神奈川県内の住宅・マンション・店舗・オフィスを訪問し、エアコン工事・給湯器交換・電気工事の3つを担当します。現場に出て、お客様の生活を直接支える仕事です。
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            1日の現場件数は平均2〜4件。午前中に1〜2件こなし、昼食をはさんで午後に1〜2件というペースが基本です。作業時間は工事の種類によって異なりますが、エアコン取付なら1〜3時間、給湯器交換なら2〜4時間が目安です。
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            勤務時間は8:30〜17:00（残業なし）。現場直行・直帰が基本のため、通勤の手間を大幅に減らして働けます。現場で使う工具・車両はすべて会社が用意するため、手ぶらで入社しても問題ありません。
          </p>
        </div>
      </section>

      {/* 3 work types */}
      <div className="bg-gray-50">

        {/* Aircon */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/5 h-60 sm:h-80 lg:h-auto lg:min-h-[400px] relative overflow-hidden">
            <Image src="/images/aircon-v2.jpg" alt="エアコン工事の現場" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
          <div className="lg:w-2/5 bg-white px-6 sm:px-10 lg:px-14 py-10 lg:py-16 flex flex-col justify-center">
            <span className="section-number mb-2">01</span>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Air Conditioning</p>
            <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mb-4">エアコン工事</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              家庭用・業務用エアコンの取付・交換・移設・撤去を担当します。室内機の設置から配管の引き回し、室外機の固定、冷媒ガスの確認、試運転まで一連の工程をすべて行います。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              6〜9月の夏場は特に仕事量が多い繁忙期で、1日に4〜5台の現場をこなすこともあります。多くの現場を経験できる時期で、技術の成長が一番早い季節でもあります。
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {['エアコン取付', '配管工事', '室外機設置', '試運転確認', '未経験歓迎'].map((t) => (
                <span key={t} className="tag-badge text-xs">{t}</span>
              ))}
            </div>
            <Link href="/jobs/aircon" className="link-arrow text-sm">エアコン工事スタッフ求人を見る <span>→</span></Link>
          </div>
        </div>

        {/* Water heater */}
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="lg:w-3/5 h-60 sm:h-80 lg:h-auto lg:min-h-[400px] relative overflow-hidden">
            <Image src="/images/water-heater-v2.jpg" alt="給湯器交換工事" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
          <div className="lg:w-2/5 bg-gray-50 px-6 sm:px-10 lg:px-14 py-10 lg:py-16 flex flex-col justify-center">
            <span className="section-number mb-2">02</span>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Water Heater</p>
            <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mb-4">給湯器交換</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              老朽化した給湯器を新しいものに取り替える工事です。撤去・搬入・ガス管・給水管・電源の接続・試運転という流れで進みます。ガス・水道・電気の3要素が絡む複合的な作業です。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              給湯器はお客様の生活の中でも特に重要な設備。「お湯が出るようになった」という感謝の言葉を直接いただける仕事で、達成感が大きい現場です。冬場は需要が高まり、1日に複数件こなすこともあります。
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {['給湯器取付', '配管接続', 'ガス工事補助', '試運転確認', '接客対応'].map((t) => (
                <span key={t} className="tag-badge text-xs">{t}</span>
              ))}
            </div>
            <Link href="/jobs/water-heater" className="link-arrow text-sm">給湯器交換スタッフ求人を見る <span>→</span></Link>
          </div>
        </div>

        {/* Electrical */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/5 h-60 sm:h-80 lg:h-auto lg:min-h-[400px] relative overflow-hidden">
            <Image src="/images/electrical-v2.jpg" alt="電気工事の現場" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
          <div className="lg:w-2/5 bg-white px-6 sm:px-10 lg:px-14 py-10 lg:py-16 flex flex-col justify-center">
            <span className="section-number mb-2">03</span>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Electrical Work</p>
            <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mb-4">電気工事</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              照明器具の取付・交換、コンセント・スイッチの増設、分電盤の交換、エアコン専用回路の新設などを担当します。住宅設備のほぼすべてに電気が関わるため、他の工事と組み合わせて行うことが多い仕事です。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              「第二種電気工事士」の資格取得を会社が全額費用負担でサポートします。資格を持つことで担当できる作業の幅が大きく広がり、給与アップに直結します。
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {['電気工事士', '配線工事', '分電盤交換', '照明取付', '資格取得支援'].map((t) => (
                <span key={t} className="tag-badge text-xs">{t}</span>
              ))}
            </div>
            <Link href="/jobs/electrical" className="link-arrow text-sm">電気工事スタッフ求人を見る <span>→</span></Link>
          </div>
        </div>
      </div>

      {/* Beginner work */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
            未経験者が最初に担当する補助作業
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            入社後すぐに一人で現場に出ることはありません。最初の1〜2ヶ月は先輩スタッフに同行し、補助的な役割から始めます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: '工具・部材の準備と管理', body: 'ドライバー・レンチ・配管カッターなど、各工具の名前と使い方を覚えます。現場に持ち込む部材を間違えないよう確認することも重要な役割です。' },
              { title: '養生・後片付け', body: '作業前にお客様の家財を傷つけないよう養生シートを敷きます。作業後の掃除・片付けも丁寧に行います。お客様への印象が大きく変わる部分です。' },
              { title: '部材の搬入・搬出', body: 'エアコンの室外機・給湯器本体など重量物の運搬を担当します。体力を使う場面ですが、効率的な運び方を身につけると体への負担が減ります。' },
              { title: '先輩の作業の確認補助', body: '配管の接続箇所・ネジの締まり具合など、先輩が作業した箇所をダブルチェックします。細かいミスを防ぐ重要な役割で、同時に作業の正解を学べます。' },
              { title: 'お客様への受け渡し補助', body: '先輩のお客様対応を横で聞きながら、丁寧な説明の仕方・言葉遣いを学びます。工事後の使い方説明のポイントを実際の場面で覚えられます。' },
              { title: '試運転の確認', body: '工事完了後の動作確認を先輩と一緒に行います。エアコンが冷えるか・給湯器からお湯が出るかを確認するシンプルな作業から、正常動作の判断基準を学びます。' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-5">
                <h3 className="text-sm font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills acquired */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
            身につく技術と将来できるようになること
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200">
            {[
              {
                period: '入社〜6ヶ月',
                title: '補助から基本作業へ',
                items: ['工具の名前と使い方', '養生・片付けのコツ', '基本的なエアコン取付', '配管接続の基礎', 'お客様への挨拶・受け渡し'],
              },
              {
                period: '6ヶ月〜1年',
                title: '独り立ちへの準備',
                items: ['エアコン工事を一人で完結', '給湯器交換の補助から本担当', '安全確認の習慣化', '工具の選び方・使い分け', '資格取得の学習開始'],
              },
              {
                period: '1年以降',
                title: '一人前の技術者へ',
                items: ['3職種すべてを担当', '複数台の現場を一日でこなす', '難易度の高い現場対応', '後輩への指導', '資格取得→担当範囲の拡大'],
              },
            ].map((stage) => (
              <div key={stage.period} className="bg-white p-6">
                <div className="bg-navy text-white text-xs font-bold px-3 py-1 tracking-wide inline-block mb-3">{stage.period}</div>
                <h3 className="text-sm font-bold text-navy mb-3">{stage.title}</h3>
                <ul className="space-y-1.5">
                  {stage.items.map((item) => (
                    <li key={item} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-orange-400 mt-0.5 flex-shrink-0">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who fits */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
                この仕事に向いている人
              </h2>
              <div className="space-y-4">
                {[
                  { title: '体を動かすことが苦にならない', body: '現場仕事は立ち仕事・移動が多い仕事です。デスクワークが苦手な方にとって、むしろ快適に感じる環境です。' },
                  { title: 'ものの仕組みに興味がある', body: 'エアコンがなぜ冷えるのか、給湯器の構造はどうなっているのか。そういった疑問を持ちながら仕事をすると、技術の吸収が早くなります。' },
                  { title: '丁寧に作業できる', body: '配管の接続・ネジの締め付け・養生作業など、雑にやると後でトラブルになる作業が多いです。コツコツ丁寧に仕事ができる方が向いています。' },
                  { title: 'お客様の家に入ることに抵抗がない', body: 'お客様のご自宅に上がって作業する仕事です。礼儀を大切にしながら、テキパキと作業できる方に向いています。' },
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
            <div>
              <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
                大変なこと・正直なところ
              </h2>
              <div className="space-y-4">
                {[
                  { title: '夏場は暑い現場が多い', body: 'エアコンのない現場・屋外での作業が多い夏の繁忙期は、体力的にしんどい日もあります。こまめな水分補給と休憩が大切です。' },
                  { title: '最初は覚えることが多い', body: '工具の種類・部材の名前・現場のマナー・安全確認の手順など、最初の数ヶ月は覚えることが多いです。ただし繰り返すうちに自然と身につきます。' },
                  { title: '高所作業がある', body: 'はしごや脚立を使った高所作業があります。最初は慣れないかもしれませんが、安全装備を適切に使えば問題なく作業できます。' },
                  { title: '冬の屋外作業は寒い', body: '給湯器交換は屋外の壁面での作業が多く、冬場は寒い環境での仕事になります。防寒対策をしっかり行います。' },
                ].map((item) => (
                  <div key={item.title} className="reason-row">
                    <div className="flex-shrink-0"><div className="w-2 h-2 rounded-full bg-gray-400 mt-1.5" /></div>
                    <div>
                      <h3 className="text-sm font-bold text-navy mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools and safety */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
            現場で使う道具と安全確認の流れ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-navy mb-4">よく使う道具</h3>
              <dl className="space-y-2">
                {[
                  ['電動ドリル・ドライバー', '壁への穴あけ・ビス締めに使用'],
                  ['配管カッター', '銅管・配管を切断する専用工具'],
                  ['フレアツール', '配管の端部を加工する工具'],
                  ['真空ポンプ', 'エアコンの冷媒配管内の空気を抜く機器'],
                  ['トルクレンチ', '規定トルクでナットを締める工具'],
                  ['テスター（検電器）', '電気が流れているかを確認する安全器具'],
                  ['水平器・墨出し器', '取付位置を正確に決める測定器'],
                ].map(([name, desc]) => (
                  <div key={name} className="flex gap-3">
                    <dt className="text-xs font-bold text-navy w-36 shrink-0 pt-0.5">{name}</dt>
                    <dd className="text-xs text-gray-500">{desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="text-sm font-bold text-navy mb-4">現場での安全確認フロー</h3>
              <ol className="space-y-3">
                {[
                  '作業前：電源を切ってからブレーカーオフを確認',
                  'ガス機器：元栓の位置と遮断を確認',
                  '水道：止水栓を閉めてから配管を外す',
                  '高所作業：はしごの固定・足場の確認',
                  '作業中：検電器で通電状態を随時確認',
                  '作業後：試運転で動作と漏れを確認',
                  'お客様への説明：安全な使い方を必ず伝える',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-navy text-white text-xs font-black flex items-center justify-center">{i + 1}</span>
                    <p className="text-xs text-gray-600 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* What you learn at Houmiya */}
      <section className="py-14 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-black text-white tracking-tight mb-6">宝宮設備で学べること</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: '神奈川県全域の多様な現場経験', body: '厚木市・海老名市・大和市・相模原市・藤沢市など、神奈川県全域の現場を担当します。住宅・マンション・店舗・オフィスとさまざまな条件の現場を経験することで、幅広い技術が身につきます。' },
              { title: '3職種を横断するオールラウンドな技術', body: 'エアコン工事・給湯器交換・電気工事の3分野を担当する会社は多くありません。複数の技術を持つことで、対応できる現場の幅が広がり、転職市場での評価も高くなります。' },
              { title: '国家資格取得のサポート', body: '第二種電気工事士・冷媒取扱技術者・簡易内管施工士など、仕事に役立つ資格の取得費用を全額会社が負担します。働きながら国家資格を手に入れられます。' },
              { title: 'お客様対応力', body: 'お客様のご自宅に上がって作業するため、自然と礼儀・言葉遣い・丁寧な説明力が身につきます。どの仕事でも通用する「人への接し方」が磨かれます。' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 p-5">
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + internal links */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-orange-50 border border-orange-100 p-6 sm:p-8 mb-10">
            <h3 className="text-base font-black text-navy mb-2">宝宮設備では、エアコン工事・給湯器交換・電気工事に挑戦したい方を募集しています</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              未経験でも大丈夫。月給25万円〜70万円・残業なし・資格取得支援あり。まずは募集要項をご確認ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/recruit" className="flex-1 block text-center bg-navy text-white font-bold py-3.5 text-sm hover:bg-navy/80 transition-colors">募集要項を見る</Link>
              <Link href="/entry" className="flex-1 block text-center bg-orange-500 text-white font-black py-3.5 text-sm hover:bg-orange-400 transition-colors">応募フォームへ →</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-widest mb-4">関連ページ</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {internalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-gray-500 hover:text-orange-500 transition-colors border border-gray-100 px-3 py-2.5 text-center hover:border-orange-200">
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
