import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '未経験から設備工事スタッフへ｜神奈川県厚木市の株式会社宝宮設備',
  description:
    '設備工事が未経験でも安心。神奈川県厚木市の宝宮設備では入社後の研修・資格取得支援・先輩同行でゼロから技術を習得できます。月給25万円〜70万円・残業なし・AT限定可。',
  keywords: [
    '設備工事 未経験',
    '設備工事 未経験 求人',
    '神奈川 未経験 技術職',
    '厚木市 未経験 求人',
    '手に職 未経験 神奈川',
    '給湯器工事 未経験',
    '電気工事 未経験',
  ],
  openGraph: {
    title: '未経験から設備工事スタッフへ｜宝宮設備（厚木市）',
    description: '神奈川県の設備工事未経験求人。入社後研修・資格支援・先輩同行でゼロからスタート。月給25万〜70万円。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/beginner' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '未経験の方へ', item: 'https://www.houmiya-recruit.com/beginner' },
  ],
}

export default function Beginner() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        en="For Beginners"
        title="未経験から設備工事スタッフへ"
        subtitle="宝宮設備の教育環境"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '未経験の方へ' }]}
      />

      {/* Main hero block */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="mb-14">
            <div className="flex flex-col lg:flex-row gap-0 overflow-hidden">
              <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden flex-shrink-0">
                <Image src="/images/photo-aircon-install.jpg" alt="先輩スタッフと一緒に現場で学ぶ" fill className="object-cover object-top" sizes="(min-width: 1024px) 40vw, 100vw" priority />
              </div>
              <div className="lg:w-3/5 bg-gray-50 px-6 sm:px-10 py-10 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight leading-snug mb-5">
                  工具の名前を知らなくていい。<br />
                  設備工事を知らなくていい。<br />
                  やる気があれば、それで十分。
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  宝宮設備に入社するスタッフの多くは、設備工事の経験がゼロの状態からスタートしています。前職が飲食・営業・物流・工場・接客と、まったく異なる業種からの転職者がほとんどです。
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  それでも半年から1年で一人前の技術者になれているのは、先輩が現場で丁寧に教える体制が整っているからです。入社後すぐに一人で現場に出ることはありません。
                </p>
              </div>
            </div>
          </div>

          {/* Why beginners can do it */}
          <div className="mb-14">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              未経験でも応募できる理由
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: '技術は現場で覚えるもの', body: '設備工事の技術の9割は、実際の現場作業を繰り返す中で身についていきます。入社前に知識がなくても、現場での経験がそのまま教材になります。' },
                { title: '先輩同行が最低1ヶ月', body: '入社後1ヶ月は先輩スタッフと一緒に現場に出ます。工具の名前・使い方・安全確認・作業の順番をすべて実際の現場で教えます。' },
                { title: '資格は入社後に取れる', body: '設備工事に必要な「第二種電気工事士」などの資格は、働きながら取得できます。取得費用は会社が全額負担するため、自己投資は不要です。' },
                { title: 'AT限定免許でOK', body: '会社の車両はAT（オートマ）の軽バンが中心。AT限定免許でも問題なく現場に行けます。免許なしの方は取得後の入社も相談可能です。' },
              ].map((item) => (
                <div key={item.title} className="border border-gray-100 p-5">
                  <h3 className="text-sm font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-3 gap-px bg-gray-200 mb-14 -mx-4 sm:-mx-6">
            <div className="relative h-28 sm:h-44 overflow-hidden">
              <Image src="/images/photo-staff-chat.jpg" alt="先輩スタッフとの会話" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative h-28 sm:h-44 overflow-hidden">
              <Image src="/images/photo-morning-briefing.jpg" alt="朝の確認" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative h-28 sm:h-44 overflow-hidden">
              <Image src="/images/photo-aircon-complete-1.jpg" alt="工事完了の達成感" fill className="object-cover object-top" sizes="33vw" />
            </div>
          </div>

          {/* First things to learn */}
          <div className="mb-14">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              最初に覚えること
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              入社後の最初の2週間は「観察と補助」が中心です。いきなり工具を持って作業するのではなく、先輩の動きを見て、現場のリズムと段取りを体で覚えます。
            </p>
            <div className="space-y-4">
              {[
                { week: '1週目', items: ['工具の名前と保管場所', '現場到着後の挨拶・確認', '養生シートの敷き方', '道具の持ち運び方', '現場でやってはいけないこと'] },
                { week: '2〜3週目', items: ['エアコン室内機の構造の見方', '配管の種類と使い分け', '電動ドリルの正しい使い方', '壁の材質を確認する方法', '後片付けの手順'] },
                { week: '1ヶ月目', items: ['基本的な取付補助を一人でこなす', '部材の発注・確認リスト', '安全確認の手順を暗記', 'お客様への挨拶・言葉遣い', '試運転時の確認ポイント'] },
              ].map((stage) => (
                <div key={stage.week} className="flex gap-4">
                  <div className="flex-shrink-0 bg-navy text-white text-xs font-bold px-3 py-1.5 tracking-wide h-fit">{stage.week}</div>
                  <ul className="flex flex-wrap gap-2">
                    {stage.items.map((item) => (
                      <li key={item} className="text-xs bg-gray-50 border border-gray-100 px-2 py-1 text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Growth timeline */}
          <div className="mb-14">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              入社後の成長イメージ
            </h2>
            <div className="relative">
              <div className="absolute left-6 top-4 bottom-4 w-px bg-gray-200" />
              {[
                {
                  period: '入社1ヶ月目',
                  title: '現場見学と基礎習得',
                  body: '先輩スタッフに同行して現場の流れを体で覚えます。工具の名前・作業の順番・安全確認の基礎を習得します。月給は250,000円（研修後）が保証されます。',
                },
                {
                  period: '3ヶ月目',
                  title: '補助作業を自分でこなせる',
                  body: '養生・工具準備・搬入・後片付けなどの補助作業を先輩なしでできるようになります。基本的なエアコン取付の手順も頭に入り始め、試運転確認を任されるようになります。',
                },
                {
                  period: '6ヶ月目',
                  title: '基本工事を一人で担当',
                  body: '標準的な条件のエアコン取付を一人で完結できるようになります。給湯器交換の現場でも補助から本作業へシフトします。資格取得の勉強も並行して始めます。',
                },
                {
                  period: '1年後',
                  title: '独り立ちと資格取得へ',
                  body: '3職種すべての基本的な工事を一人でこなせるレベルに成長。難易度の高い現場も担当できるようになり、資格取得によって月給がアップします。後輩への指導を任されることもあります。',
                },
              ].map((stage, i) => (
                <div key={stage.period} className="flex gap-6 mb-8 last:mb-0 relative">
                  <div className="flex-shrink-0 w-12 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-navy bg-white relative z-10" />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="bg-navy text-white text-xs font-bold px-3 py-1 tracking-wide inline-block w-fit">{stage.period}</span>
                      <h3 className="text-sm font-bold text-navy">{stage.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{stage.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Anxiety points */}
          <div className="mb-14">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              未経験の方がよく感じる不安と、宝宮設備の答え
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: '体力的についていけるか不安です。',
                  a: '設備工事は体力仕事ですが、慣れると体が自然と慣れていきます。重いものを持つコツ・効率的な動き方は先輩が教えます。最初から体力があることより、少しずつ慣れていく姿勢が大切です。',
                },
                {
                  q: '工具を扱ったことがまったくありません。',
                  a: '問題ありません。工具の名前さえ知らない状態で入社したスタッフが大半です。どの工具をどの場面で使うかは、現場で繰り返すうちに自然と身につきます。',
                },
                {
                  q: '失敗したときにどうなりますか。',
                  a: '最初の1〜2ヶ月は先輩が常にそばにいるので、一人でミスを犯すことはほぼありません。先輩が作業を確認しながら進めるため、致命的なミスは防げます。もし気になることがあれば、その場で必ず先輩に確認してください。',
                },
                {
                  q: '職場の人間関係が心配です。',
                  a: 'スタッフの多くは20代で、和やかな雰囲気の職場です。先輩が後輩に厳しく当たるような文化はなく、わからないことを気軽に聞ける環境を大切にしています。',
                },
                {
                  q: '神奈川県外に住んでいますが応募できますか。',
                  a: '応募は可能です。社宅の相談にも応じます。遠方からの転職者で入社したスタッフもいます。まずはお気軽にご連絡ください。',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200">
                  <div className="bg-gray-50 px-5 py-3.5 border-b border-gray-200">
                    <p className="text-sm font-bold text-navy flex items-start gap-2">
                      <span className="font-black text-orange-500">Q.</span>{item.q}
                    </p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                      <span className="font-black text-navy flex-shrink-0">A.</span>{item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Qualification path */}
          <div className="mb-14 bg-gray-50 p-6 sm:p-8">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5">資格取得の流れ</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              宝宮設備では、仕事に関連する資格の取得費用（試験代・テキスト代・講習費用）を全額会社が負担します。働きながら国家資格を手に入れられます。
            </p>
            <div className="space-y-4">
              {[
                { title: '冷媒取扱技術者（第一種・第二種）', when: '入社後6ヶ月〜1年', body: 'エアコンに使用される冷媒（フロンガス）の回収・充填に必要な資格。エアコン工事の担当範囲が広がります。' },
                { title: '第二種電気工事士', when: '入社後1〜2年', body: '住宅・小規模店舗の電気工事を行うための国家資格。取得後は電気工事を本格的に担当でき、月給がアップします。' },
                { title: '簡易内管施工士', when: '入社後1〜2年', body: 'ガス給湯器に関連する資格。給湯器交換の作業範囲が広がり、専門性が高まります。' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col sm:flex-row gap-4 bg-white p-4">
                  <div className="sm:w-1/3">
                    <p className="text-xs font-bold text-navy mb-1">{item.title}</p>
                    <p className="text-[11px] text-orange-500 font-bold">取得目安：{item.when}</p>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-xs text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="mb-14">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">転職を考えている方へ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="border-l-4 border-orange-400 pl-5 py-2">
                <h3 className="text-sm font-bold text-navy mb-2">20代・第二新卒の方へ</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  20代は設備工事を始めるのに最良の時期です。体力と吸収力がある今のうちに技術を積めば、30代には高収入の技術者になれます。「やりたいことがわからない」という方にこそ、手に職のつく仕事を試してほしいと思っています。
                </p>
              </div>
              <div className="border-l-4 border-navy pl-5 py-2">
                <h3 className="text-sm font-bold text-navy mb-2">異業種からの転職者へ</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  宝宮設備のスタッフは、飲食・販売・営業・工場など、まったく異なる業種からの転職者が多いです。設備工事の知識がなくても、前職で培った「人への接し方」「丁寧に仕事をする姿勢」は現場で十分に活きます。
                </p>
              </div>
            </div>
          </div>

          {/* Salary growth */}
          <div className="mb-10">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">未経験から給与アップを目指す道筋</h2>
            <div className="overflow-x-auto">
              <table className="recruit-table">
                <tbody>
                  <tr>
                    <th>入社直後（研修期間）</th>
                    <td>月給 250,000円〜（研修後）</td>
                  </tr>
                  <tr>
                    <th>技術習得・独り立ち後</th>
                    <td>技術と習熟度に応じて随時昇給</td>
                  </tr>
                  <tr>
                    <th>資格取得後（1〜2年目）</th>
                    <td>担当できる作業範囲拡大→昇給</td>
                  </tr>
                  <tr>
                    <th>複数資格・3〜5年目</th>
                    <td>月給 400,000〜700,000円を目指せる</td>
                  </tr>
                  <tr>
                    <th>昇給の基準</th>
                    <td>年1回の定期昇給ではなく、技術・習熟度に応じて随時昇給</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Who we welcome */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              こんな方を歓迎しています
            </h2>
            <div className="space-y-0">
              {[
                { title: '設備工事が未経験の方', body: '宝宮設備の採用において、設備工事の経験は問いません。入社後に一から覚えられる体制を整えています。' },
                { title: '第二新卒・転職を考えている方', body: '前職がどんな業種でも関係ありません。「次は長く続けられる仕事をしたい」という方に来てほしいです。' },
                { title: '手に職をつけたい若手の方', body: '「資格を取って、いつでも転職できる技術を持ちたい」という方にぴったりです。' },
                { title: '神奈川県外からの応募者', body: '社宅相談に応じます。神奈川県内への転居を検討している方も、まずはご相談ください。' },
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

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/recruit" className="btn-outline text-sm px-6 py-3.5">募集要項を見る</Link>
            <Link href="/entry" className="btn-primary text-sm px-6 py-3.5">応募フォームへ</Link>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400 tracking-widest mb-4">関連ページ</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: '/work', label: '仕事内容' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/day', label: '1日の流れ' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/jobs', label: '職種別求人' },
                { href: '/column', label: '求人コラム' },
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
