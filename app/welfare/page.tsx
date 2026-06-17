import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '福利厚生・働く環境｜資格取得支援・車両貸出・昼食補助あり｜宝宮設備',
  description:
    '宝宮設備の福利厚生を詳しく紹介。社会保険完備・車両貸出・昼食補助・資格取得支援（全額会社負担）・社宅相談・制服貸与。残業なし（8:30〜17:00）で長く働ける設備工事求人。',
  keywords: [
    '設備工事 福利厚生',
    '資格取得支援 求人 神奈川',
    '社宅相談 求人',
    '車両貸出 求人',
    '残業なし 求人 神奈川',
    '厚木市 技術職 求人',
  ],
  openGraph: {
    title: '福利厚生・働く環境｜宝宮設備（神奈川県厚木市）',
    description: '社会保険完備・車両貸出・資格取得支援（全額会社負担）・残業なし。神奈川の設備工事求人。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/welfare' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '福利厚生', item: 'https://www.houmiya-recruit.com/welfare' },
  ],
}

const faqItems = [
  { q: '社会保険はどのような内容ですか？', a: '健康保険・厚生年金・雇用保険・労災保険の4つが完備されています。入社日から適用されます。' },
  { q: '車両貸出はどのような車ですか？自分で燃料代を払いますか？', a: '軽バン・ハイエースなどのAT車を会社が用意します。燃料代・高速料金など現場移動に必要な費用は会社が全額負担します。マイカーは不要です。' },
  { q: 'AT限定免許でも問題ありませんか？', a: '問題ありません。会社の社用車はAT車のため、AT限定免許で運転できます。' },
  { q: '昼食補助はどのように使えますか？', a: '現場近くのコンビニ・弁当店・飲食店などで利用できます。詳細な金額・利用方法は入社時にご案内します。' },
  { q: '資格取得の費用はどこまで会社が負担してくれますか？', a: '受験費用・テキスト代・技能試験練習セット・講習費を会社が全額負担します。自己負担はありません。' },
  { q: '社宅相談とは具体的にどういうことですか？', a: '神奈川県外からの転職者などに対して、住居の手配・物件選びのサポートを行います。詳細は面接時に個別にご相談ください。' },
  { q: '制服は自分で購入しますか？', a: '制服は会社が貸与します。購入の必要はありません。' },
  { q: '有給休暇はいつから取得できますか？', a: '法定通り、入社6ヶ月後から取得できます。詳細は入社時にご確認ください。' },
  { q: '賞与はいつ支給されますか？', a: '夏と冬の年2回、手当として支給されます。金額は経験・評価によって変わります。' },
  { q: '資格を取得した後、給与に反映されますか？', a: 'はい。資格取得は昇給の評価対象です。第二種電気工事士・冷媒取扱技術者などを取得するたびに、担当できる作業が増え、月給が見直されます。' },
  { q: '神奈川県外に住んでいますが、社宅は具体的にどのエリアにありますか？', a: '厚木市および周辺エリアでの住居探しをサポートしています。具体的な物件・エリアは面接時にご相談ください。遠方からの転職者でも安心して入社できるよう支援します。' },
  { q: '現場直行・直帰をした日は経費の精算はどうなりますか？', a: '高速道路代・燃料代はすべて会社負担です。スタッフが現場移動で個人負担することはありません。精算の手続きは月次でまとめて行います。' },
  { q: '将来、独立や副業を考えていますが会社の規定はありますか？', a: '副業に関する規定は入社時にご確認ください。独立については、宝宮設備での経験・資格・人脈を活かして独立した先輩スタッフもいます。独立を目標に技術を積む方も歓迎します。' },
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

export default function Welfare() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        en="Welfare"
        title="福利厚生・働く環境"
        subtitle="社宅相談・車両貸出・資格取得支援あり"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '福利厚生' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="mb-10">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              宝宮設備は、スタッフが長く・安心して働けるよう、生活面のサポートを会社全体で大切にしています。
              資格取得支援・車両貸出・社宅相談など、現場職特有の不安を一つひとつ解消できる制度を整えています。
            </p>
          </div>

          {/* Quick list */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-14">
            {[
              '社会保険完備',
              '車両貸出',
              '昼食補助',
              '資格取得支援（全額会社負担）',
              '社宅相談可',
              '制服貸与',
              '交通費支給',
              '夏・冬手当てあり',
              '残業なし（8:30〜17:00）',
            ].map((item) => (
              <div key={item} className="bg-gray-50 border border-gray-100 px-4 py-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                <span className="text-xs font-bold text-navy">{item}</span>
              </div>
            ))}
          </div>

          {/* Detail sections */}
          <div className="space-y-0 mb-14">

            {/* Social insurance */}
            <div className="border-t border-gray-200 py-10 first:border-t-0">
              <div className="flex flex-col lg:flex-row lg:gap-16">
                <div className="lg:w-1/3 mb-4 lg:mb-0">
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Social Insurance</p>
                  <h2 className="text-lg font-black text-navy tracking-tight">社会保険完備</h2>
                  <div className="line-blue mt-3" />
                </div>
                <div className="lg:w-2/3">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    健康保険・厚生年金・雇用保険・労災保険のすべてに加入します。保険料は会社と折半で、手取りに大きく影響する社会保険コストを会社が半分負担します。
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    健康保険では医療費の自己負担が3割に抑えられます。厚生年金は国民年金より受給額が多く、長期的な老後の安心につながります。雇用保険は万が一仕事を離れることになった場合の給付を保障します。
                  </p>
                  <div className="bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">健康保険 / 厚生年金保険 / 雇用保険 / 労働者災害補償保険（全員加入）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle */}
            <div className="border-t border-gray-200 py-10">
              <div className="flex flex-col lg:flex-row lg:gap-16">
                <div className="lg:w-1/3 mb-4 lg:mb-0">
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Company Vehicle</p>
                  <h2 className="text-lg font-black text-navy tracking-tight">車両貸出</h2>
                  <div className="line-blue mt-3" />
                </div>
                <div className="lg:w-2/3">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    現場への移動に使用する会社車両（軽バン・ハイエースなど）を貸し出します。エアコン・給湯器・工具などを積んで現場へ直行できるため、自家用車は不要です。燃料代は会社負担です。
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    現場直行・直帰が基本のため、自宅から直接現場に向かい、終わったら直帰できます。会社への往復分の時間を節約でき、実質的な生産時間が増えます。
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    車両はAT（オートマ）が中心のため、AT限定免許でも問題なく使用できます。マイカーがない方・持ちたくない方でも安心して働けます。
                  </p>
                  <div className="bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">現場移動用車両（軽バン中心）/ 燃料代会社負担 / 直行直帰対応 / AT限定可</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lunch */}
            <div className="border-t border-gray-200 py-10">
              <div className="flex flex-col lg:flex-row lg:gap-16">
                <div className="lg:w-1/3 mb-4 lg:mb-0">
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Lunch Allowance</p>
                  <h2 className="text-lg font-black text-navy tracking-tight">昼食補助</h2>
                  <div className="line-blue mt-3" />
                </div>
                <div className="lg:w-2/3">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    毎日の昼食代を会社が一部補助します。現場仕事は体力を使うため、昼にしっかり食事を取ることが重要です。昼食補助があることで、毎日の食費負担を抑えながら働けます。
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    現場近くのお弁当屋・定食屋・コンビニなど、その日の現場に応じて自由に選べます。先輩スタッフと一緒に昼を取ることも多く、自然とコミュニケーションが生まれる時間でもあります。
                  </p>
                  <div className="bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">毎日の昼食代を一部補助（詳細は面談にてご案内）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div className="border-t border-gray-200 py-10">
              <div className="flex flex-col lg:flex-row lg:gap-16">
                <div className="lg:w-1/3 mb-4 lg:mb-0">
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Certification Support</p>
                  <h2 className="text-lg font-black text-navy tracking-tight">資格取得支援</h2>
                  <div className="line-blue mt-3" />
                </div>
                <div className="lg:w-2/3">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    設備工事に役立つ資格の取得費用を全額会社が負担します。受験費用・テキスト代・講習費用のすべてが対象で、自己負担ゼロで国家資格を目指せます。
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    資格を取得することで担当できる作業の幅が広がり、月給の昇給にも直結します。「電気工事士を取って、もっと高い仕事をしたい」「複数の資格でオールラウンダーになりたい」という方の目標を全力で支援します。
                  </p>
                  <div className="space-y-2 mb-4">
                    {[
                      { name: '第二種電気工事士', desc: '住宅・小規模店舗の電気工事に必要な国家資格' },
                      { name: '冷媒取扱技術者（第一種・第二種）', desc: 'エアコンの冷媒ガスを取り扱うための資格' },
                      { name: '簡易内管施工士', desc: 'ガス給湯器に関連する工事に役立つ資格' },
                    ].map((cert) => (
                      <div key={cert.name} className="bg-gray-50 px-4 py-3">
                        <p className="text-xs font-bold text-navy">{cert.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{cert.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">受験費用・テキスト代・講習費用 すべて会社全額負担</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company housing */}
            <div className="border-t border-gray-200 py-10">
              <div className="flex flex-col lg:flex-row lg:gap-16">
                <div className="lg:w-1/3 mb-4 lg:mb-0">
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Company Housing</p>
                  <h2 className="text-lg font-black text-navy tracking-tight">社宅相談可</h2>
                  <div className="line-blue mt-3" />
                </div>
                <div className="lg:w-2/3">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    神奈川県外から転職・引越しを検討している方の社宅相談に応じています。「今の家賃が高くて生活が苦しい」「神奈川県内で家を探しているが費用が心配」という方にご利用いただける制度です。
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    社宅を利用することで、住居費を抑えながら働き始めることができます。入社初期の生活費の負担を軽減したい方にとって、重要な支援です。詳細は面談時にご説明します。
                  </p>
                  <div className="bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">社宅相談可能（詳細は面談にてご案内）/ 神奈川県外からの転職者も相談歓迎</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work hours */}
            <div className="border-t border-gray-200 py-10">
              <div className="flex flex-col lg:flex-row lg:gap-16">
                <div className="lg:w-1/3 mb-4 lg:mb-0">
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Work Hours</p>
                  <h2 className="text-lg font-black text-navy tracking-tight">残業なし・固定時間</h2>
                  <div className="line-blue mt-3" />
                </div>
                <div className="lg:w-2/3">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    勤務時間は8:30〜17:00（残業なし）。現場の作業が17:00に完了するようスケジュールを組んでいます。残業なしを徹底しているため、仕事後の時間をプライベート・勉強・趣味に使えます。
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    現場仕事は「現場が終わらなければ残業」という会社が多いですが、宝宮設備では1日の件数を無理のない範囲に設定しています。スタッフが長く働き続けられることを、会社全体で大切にしています。
                  </p>
                  <div className="bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">勤務時間：8:30〜17:00 / 残業なし / 時間外手当も一部対象あり</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Salary and bonus */}
            <div className="border-t border-gray-200 py-10">
              <div className="flex flex-col lg:flex-row lg:gap-16">
                <div className="lg:w-1/3 mb-4 lg:mb-0">
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Salary & Bonus</p>
                  <h2 className="text-lg font-black text-navy tracking-tight">給与・夏冬手当て</h2>
                  <div className="line-blue mt-3" />
                </div>
                <div className="lg:w-2/3">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    月給25万円〜70万円（未経験：研修後250,000円〜）。夏・冬に手当てがあります。技術・習熟度・保有資格に応じて随時昇給します。年1回の一斉昇給ではなく、スキルアップのタイミングで給与が上がる仕組みです。
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    残業なし（8:30〜17:00）のため、月給がそのまま実収入になります。深夜手当・休日手当の対象となる作業についても別途支給します。
                  </p>
                  <div className="bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">月給25万円〜70万円 / 夏・冬手当てあり / 随時昇給 / 深夜・休日手当あり</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Why long-term work */}
          <div className="border-t border-gray-200 py-10">
            <div className="flex flex-col lg:flex-row lg:gap-16">
              <div className="lg:w-1/3 mb-4 lg:mb-0">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Work-Life Balance</p>
                <h2 className="text-lg font-black text-navy tracking-tight">長く働ける職場環境</h2>
                <div className="line-blue mt-3" />
              </div>
              <div className="lg:w-2/3">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  設備工事業界では「体力仕事のため若いうちしか続けられない」というイメージがありますが、宝宮設備では違います。残業なし・適切な業務量・チームサポートにより、ベテランスタッフが長期間にわたって活躍しています。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  設備工事の技術は年齢と経験を重ねるほど精度が上がります。「体力より技術と判断力」で差がつく仕事のため、30代・40代以降も第一線で働き続けられます。資格と経験を積むことで、現場作業だけでなく後輩指導・工程管理など幅広い役割も担えます。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: '平均在籍期間', value: 'スタッフの平均在籍が長い職場' },
                    { label: '残業ゼロ', value: '17:00終業を全繁忙期でも維持' },
                    { label: '体への配慮', value: '重作業は2人体制で無理をさせない' },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 px-4 py-3 text-center">
                      <p className="text-[10px] text-gray-400 tracking-widest mb-1">{item.label}</p>
                      <p className="text-xs font-bold text-navy">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Uniform */}
          <div className="border-t border-gray-200 py-10">
            <div className="flex flex-col lg:flex-row lg:gap-16">
              <div className="lg:w-1/3 mb-4 lg:mb-0">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Uniform & Tools</p>
                <h2 className="text-lg font-black text-navy tracking-tight">制服・工具の貸与</h2>
                <div className="line-blue mt-3" />
              </div>
              <div className="lg:w-2/3">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  作業着（制服）・安全靴・ヘルメットなど現場で必要な装備は会社が貸与します。入社時に自費で購入する必要はありません。毎日の現場に出かける準備が整っています。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  工具類（ドリル・フレアツール・真空ポンプなど）もすべて会社が準備します。高額な工具を個人で揃える必要がなく、手ぶらで入社してすぐに仕事が始められます。
                </p>
                <div className="bg-gray-50 px-4 py-3">
                  <p className="text-xs text-gray-500">制服（会社貸与）/ 安全靴・ヘルメット / 工具一式（会社所有）/ 入社時の自己負担なし</p>
                </div>
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">働く環境</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200">
              <div className="relative h-44 sm:h-56 overflow-hidden">
                <Image src="/images/photo-vehicle-white.jpg" alt="会社の車両" fill className="object-cover" sizes="(min-width: 640px) 33vw, 50vw" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                  <p className="text-white text-xs font-bold">社用車あり</p>
                </div>
              </div>
              <div className="relative h-44 sm:h-56 overflow-hidden">
                <Image src="/images/photo-staff-chat.jpg" alt="スタッフ同士の会話" fill className="object-cover" sizes="(min-width: 640px) 33vw, 50vw" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                  <p className="text-white text-xs font-bold">20代中心のチーム</p>
                </div>
              </div>
              <div className="relative h-44 sm:h-56 overflow-hidden col-span-2 sm:col-span-1">
                <Image src="/images/photo-warehouse-staff.jpg" alt="倉庫前のスタッフ" fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                  <p className="text-white text-xs font-bold">充実した設備</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary table */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">福利厚生まとめ</h2>
            <table className="recruit-table">
              <tbody>
                <tr><th>社会保険</th><td>健康保険・厚生年金・雇用保険・労災保険 完備</td></tr>
                <tr><th>給与</th><td>月給25万円〜70万円（未経験：研修後250,000円〜）</td></tr>
                <tr><th>賞与</th><td>夏・冬手当てあり</td></tr>
                <tr><th>昇給</th><td>技術・習熟度・資格に応じて随時昇給</td></tr>
                <tr><th>勤務時間</th><td>8:30〜17:00（残業なし）</td></tr>
                <tr><th>車両貸出</th><td>現場移動用の会社車両あり（普通免許AT可）</td></tr>
                <tr><th>昼食補助</th><td>毎日の昼食代を一部補助</td></tr>
                <tr><th>資格取得支援</th><td>受験費用・テキスト代・講習費用 全額会社負担</td></tr>
                <tr><th>制服貸与</th><td>制服あり（会社支給）</td></tr>
                <tr><th>交通費</th><td>交通費 別途支給</td></tr>
                <tr><th>深夜・休日手当</th><td>深夜手当・休日手当 支給</td></tr>
                <tr><th>社宅相談</th><td>相談可能（詳細は面談にてご案内）</td></tr>
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">福利厚生についてよくある質問（13問）</h2>
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

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/recruit" className="btn-outline text-sm px-6 py-3.5">募集要項を見る</Link>
            <Link href="/entry" className="btn-primary text-sm px-6 py-3.5">応募フォームへ</Link>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400 tracking-widest mb-4">関連ページ</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: '/work', label: '仕事内容' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/day', label: '1日の流れ' },
                { href: '/recruit', label: '募集要項' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/entry', label: '応募フォーム' },
                { href: '/knowledge/sharyo-kashidashi-kyujin', label: '車両貸出求人の詳細' },
                { href: '/knowledge/shikaku-shien-setsubi-kouji', label: '資格取得支援の詳細' },
                { href: '/knowledge/chushoku-hojo-kyujin', label: '昼食補助求人の詳細' },
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
