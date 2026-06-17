import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'

export const metadata: Metadata = {
  title: 'よくある質問（FAQ）｜設備工事の求人に関するQ&A｜宝宮設備',
  description:
    '宝宮設備への応募・転職に関するよくある質問（40問以上）。未経験・資格・給与・昇給・AT限定・勤務地・残業・社宅・応募方法・選考の流れなど網羅。神奈川県厚木市の設備工事求人。',
  keywords: [
    '設備工事 求人 よくある質問',
    '設備工事 未経験 応募',
    '設備工事 資格 不要',
    '宝宮設備 求人 FAQ',
    '神奈川 設備工事 FAQ',
  ],
  alternates: { canonical: 'https://www.houmiya-recruit.com/faq' },
  openGraph: {
    title: 'よくある質問（FAQ）｜宝宮設備 採用サイト',
    description: '設備工事の求人に関するよくある質問40問以上。未経験・資格・給与・勤務地など。',
    url: 'https://www.houmiya-recruit.com/faq',
    locale: 'ja_JP',
    type: 'website',
  },
}

const faqCategories = [
  {
    label: '応募について',
    id: 'apply',
    items: [
      {
        q: '未経験でも応募できますか？',
        a: 'はい、応募できます。宝宮設備では設備工事が未経験の方を積極的に採用しています。入社後の研修期間（1〜2ヶ月）に先輩スタッフが現場で一から丁寧に指導します。「体を動かす仕事がしたい」「手に職をつけたい」という意欲があれば大丈夫です。',
      },
      {
        q: '応募から採用までの流れを教えてください。',
        a: '①応募フォーム・LINE・お電話でご連絡→②書類確認・日程調整のご連絡→③面談（30〜60分）→④採用決定のご連絡→⑤入社日の決定、という流れです。書類選考はありません。面談日程はご都合に合わせて調整します。',
      },
      {
        q: '面接で必要な持ち物はありますか？',
        a: '特に必要なものはありません。履歴書（手書き・印刷どちらでも可）をお持ちいただけると面談がスムーズです。私服で問題ありません。まずはリラックスしてお越しください。',
      },
      {
        q: '相談だけでも問い合わせできますか？',
        a: 'もちろんです。「まだ迷っている」「応募するかどうか迷っている」という方でも、お気軽にご連絡ください。フォーム・LINE・お電話のいずれでも受け付けています。プレッシャーなくご相談いただけます。',
      },
      {
        q: '在職中でも応募できますか？',
        a: 'はい、在職中の方の応募を歓迎しています。面談日程は平日夕方・土曜日なども調整可能です。現在の職場の退職スケジュールに合わせて入社日を決めることができますので、まずはご相談ください。',
      },
      {
        q: '年齢制限はありますか？',
        a: '主な採用ターゲットは18〜35歳ですが、設備工事の経験・資格をお持ちの方は年齢に関わらずご応募いただけます。詳しくはお問い合わせください。',
      },
    ],
  },
  {
    label: '未経験・研修について',
    id: 'beginner',
    items: [
      {
        q: '入社後の研修はありますか？',
        a: 'はい、入社後1〜2ヶ月は先輩スタッフとの同行研修があります。研修中は先輩とペアで現場を回り、道具の使い方・安全確認・施工手順・お客様対応などを実際の現場で学びます。研修期間中も月給250,000円が保証されています。',
      },
      {
        q: '20代で転職しても遅くないですか？',
        a: '全く遅くありません。20代は設備工事を始めるのに最適な時期です。若いうちに技術と資格を積み上げることで、30代には高収入の技術者として活躍できます。現在のスタッフの多くが20代のうちに入社しています。',
      },
      {
        q: 'エアコン工事の経験がなくても大丈夫ですか？',
        a: '大丈夫です。エアコン工事は入社後の研修と先輩との同行作業を通じて覚えることができます。冷媒取扱技術者などの資格も入社後に会社負担で取得できます。',
      },
      {
        q: '給湯器工事の経験がなくても大丈夫ですか？',
        a: '大丈夫です。給湯器工事は入社後の研修で一から習得できます。先輩スタッフが現場で丁寧に指導するため、経験ゼロでも安心してスタートできます。関連資格（簡易内管施工士など）も入社後に取得できます。',
      },
      {
        q: '第二種電気工事士の資格がなくても電気工事を担当できますか？',
        a: '入社当初は電気工事士資格が必要ない補助作業からスタートします。並行して第二種電気工事士の資格取得（費用は全額会社負担）を進め、取得後に本格的な電気工事を担当できるようになります。',
      },
      {
        q: '設備工事の仕事に向いているのはどんな人ですか？',
        a: '①体を動かすことが好き②ものの仕組みに興味がある③丁寧・几帳面な作業が得意④お客様への説明が苦にならない⑤コツコツ技術を積み上げることが好き、という方に向いています。学歴・職歴は問いません。',
      },
      {
        q: '将来的に独立を目指せますか？',
        a: 'はい、目指せます。宝宮設備で経験を積み、資格を取得した後に独立・開業を目指す方もいます。設備工事の技術・資格・現場経験を積むことで、将来的に自分の事業を立ち上げる基盤をつくることができます。会社としても応援しています。',
      },
    ],
  },
  {
    label: '仕事内容について',
    id: 'work',
    items: [
      {
        q: '住宅設備工事はどのような仕事ですか？',
        a: '住宅設備工事とは、住宅に設置されているエアコン・給湯器・電気設備などを取付・交換・修理する仕事です。主な作業は①エアコン工事（室内機・室外機の取付・交換）②給湯器工事（ガス給湯器・エコキュートの交換・設置）③電気工事（照明・コンセント・分電盤の工事）の3種類です。',
      },
      {
        q: '1日に何件の現場を担当しますか？',
        a: '通常は2〜4件の現場を担当します。夏の繁忙期（6〜9月）はエアコン工事が増え、1日4〜5件になることもあります。現場の作業内容・移動距離・難易度によって1日の件数は調整されます。17時に終わるよう件数を管理しています。',
      },
      {
        q: '高所作業はありますか？',
        a: 'はしごや脚立を使った高所作業があります。主にエアコン室外機のベランダ設置・室内機の高い場所への取付などです。最初は低い場所から始め、安全帯・ヘルメットなど適切な安全装備を使用しながら慣れていきます。',
      },
      {
        q: 'お客様のご自宅に上がる仕事ですか？',
        a: 'はい、エアコン工事・電気工事では基本的にお客様のご自宅やお店に上がって作業します。礼儀正しく明るく接することが大切です。販売や接客の専門的なスキルは不要ですが、丁寧な言葉遣いを大切にしています。',
      },
      {
        q: '神奈川県内の全エリアで仕事がありますか？',
        a: '神奈川県全域の現場を担当しています。厚木市・海老名市・大和市・座間市・伊勢原市・平塚市・相模原市・綾瀬市・藤沢市・秦野市など、神奈川県内の幅広いエリアで仕事があります。現場直行・直帰が基本です。',
      },
    ],
  },
  {
    label: '給与・待遇について',
    id: 'salary',
    items: [
      {
        q: '給与はどのくらいですか？',
        a: '月給25万円〜70万円（未経験：研修後250,000円〜）です。技術・習熟度・保有資格に応じて随時昇給します。夏・冬の手当てもあります。経験を積むにつれて収入を伸ばすことができます。',
      },
      {
        q: '昇給の仕組みを教えてください。',
        a: '技術・習熟度・保有資格に応じて随時昇給します。決まった時期の一斉昇給ではなく、スキルアップのタイミングで給与が上がります。資格取得や担当現場の拡大など、成長の節目に昇給が発生することが多いです。',
      },
      {
        q: '夏・冬の手当て（賞与）はありますか？',
        a: 'はい、夏・冬の手当てがあります。金額は業績・勤務状況に応じて変動しますが、毎年支給しています。詳細は面談時にご説明します。',
      },
      {
        q: '試用期間中の給与は下がりますか？',
        a: '試用期間（1ヶ月）中も本採用と同条件の給与（月給250,000円〜）が適用されます。試用期間中だからといって給与が下がることはありません。',
      },
      {
        q: '深夜手当・休日手当はありますか？',
        a: 'はい、深夜手当・休日手当が対象の作業では別途支給されます。通常の勤務は8:30〜17:00で残業なしですが、例外的な休日対応などは手当てが適用されます。',
      },
    ],
  },
  {
    label: '勤務時間・休日について',
    id: 'hours',
    items: [
      {
        q: '残業はありますか？',
        a: '基本的に残業はありません。勤務時間は8:30〜17:00です。現場作業は日中に完了するよう件数を調整しており、プライベートの時間をしっかり確保できます。',
      },
      {
        q: '休日はどのくらいありますか？',
        a: '月〜土の勤務が基本で、日曜・祝日はお休みです。夏季休暇・冬季休暇・年末年始休暇もあります。年間の休日数は約75〜80日程度です。',
      },
      {
        q: '現場直行・直帰は可能ですか？',
        a: 'はい、可能です。自宅から直接現場に向かい、終わったら直帰できます。会社の車両を使って移動するため、通勤の手間を大幅に減らせます。',
      },
      {
        q: '夏の繁忙期は残業が増えますか？',
        a: 'エアコン工事の需要が増える6〜9月は件数が増えますが、1日の終了時間は17:00を維持します。件数が多い日は作業ペースを上げることで対応し、残業ではなく効率で乗り越えます。',
      },
    ],
  },
  {
    label: '福利厚生について',
    id: 'welfare',
    items: [
      {
        q: '車両は自分で用意する必要がありますか？',
        a: '必要ありません。現場への移動は会社が貸し出す車両（軽バン）を使います。燃料代も会社負担です。自家用車は通勤以外では原則不要です。',
      },
      {
        q: '工具は自分で購入する必要がありますか？',
        a: '入社時に必要な基本工具は会社が支給・貸出します。自分のものにしたい工具は購入を推奨することもありますが、最初は自費での購入は不要です。',
      },
      {
        q: '社宅はありますか？',
        a: '社宅の相談に応じています。神奈川県外からの転職・引越しをご検討の方はお気軽にご相談ください。状況に応じて対応します。詳細は面談時にご説明します。',
      },
      {
        q: '交通費は支給されますか？',
        a: 'はい、交通費は別途支給されます。現場直行・直帰の場合は、自宅から最初の現場への交通費が支給されます。詳細は面談時にお伝えします。',
      },
      {
        q: '制服はありますか？',
        a: 'はい、制服（作業着）は会社から貸与されます。自分で購入・用意する必要はありません。',
      },
    ],
  },
  {
    label: '資格・スキルについて',
    id: 'qualification',
    items: [
      {
        q: '資格がなくても応募できますか？',
        a: 'はい、資格がなくても応募できます。入社後に会社が費用を全額負担して資格取得をサポートします。第二種電気工事士・冷媒取扱技術者・簡易内管施工士など、仕事に必要な資格を働きながら取得できます。',
      },
      {
        q: '資格取得支援はありますか？',
        a: 'はい、あります。第二種電気工事士・冷媒取扱技術者（第一種・第二種）・簡易内管施工士など、設備工事に関連する資格の取得費用を全額会社が負担します。試験代・テキスト代・講習費用はすべて会社負担です。',
      },
      {
        q: '普通自動車免許は必要ですか？',
        a: '普通自動車免許（AT限定可）があれば尚可ですが、入社時の必須条件ではありません。現場への移動は会社の車両を使います。将来的に車両を自分で運転して現場に向かうためには取得が必要になります。取得支援も相談可能です。',
      },
      {
        q: 'AT（オートマ）限定免許でも大丈夫ですか？',
        a: 'はい、AT限定免許でも大丈夫です。会社が貸し出す車両はATの軽バンが中心のため、AT限定でも問題なく現場に移動できます。免許なしの方も採用後に相談に応じます。',
      },
      {
        q: '第二種電気工事士の取得にはどのくらいかかりますか？',
        a: '第二種電気工事士は年2回（上期・下期）の試験があり、筆記試験と技能試験の2段階です。合格率は60〜70%程度で、しっかり準備すれば1〜2回の受験で合格する方が多いです。受験費用（約9,300円）・テキスト代・講習費用はすべて会社負担です。',
      },
    ],
  },
  {
    label: '職場・環境について',
    id: 'workplace',
    items: [
      {
        q: '職場の雰囲気はどのような感じですか？',
        a: '若いスタッフが多く、明るく活気のある職場です。わからないことは何でも気軽に質問できる環境で、先輩スタッフが丁寧にサポートします。仕事の後や休日にスタッフ同士で交流することもあります。職場写真はギャラリーページでご確認ください。',
      },
      {
        q: '上下関係は厳しいですか？',
        a: '年功序列的な厳しい上下関係はありません。先輩スタッフが教える立場として責任を持っていますが、気軽に話せる関係性です。わからないことをわからないと言える雰囲気を大切にしています。',
      },
      {
        q: 'スタッフの年齢層はどのくらいですか？',
        a: 'スタッフの多くが20代です。20代前半で入社した方が多く、若いチームが中心です。年齢が近いスタッフが多いため、仕事の悩みや目標を共有しやすい環境です。',
      },
      {
        q: '未経験から入社した先輩スタッフはいますか？',
        a: 'はい、多くいます。スタッフの大半が業界未経験でスタートしており、現在は現場をしっかりこなしています。「自分も同じような状況で入ってきた」という先輩が多いため、未経験の不安を理解してもらいやすい環境です。',
      },
    ],
  },
  {
    label: '勤務地・転居について',
    id: 'location',
    items: [
      {
        q: '勤務地はどこですか？',
        a: '神奈川県全域の各現場が勤務地です。本社は神奈川県厚木市温水西1-4-39にあります。現場直行・直帰も可能で、自宅から直接現場に向かい、終わったら直帰できます。会社車両の貸出があります。',
      },
      {
        q: '転勤はありますか？',
        a: 'ありません。主な活動エリアは神奈川県内です。厚木市・海老名市・大和市・座間市・伊勢原市・平塚市・相模原市など、神奈川県内の現場を担当します。',
      },
      {
        q: '神奈川県外からの応募は可能ですか？',
        a: '応募は可能です。ただし、勤務地が神奈川県内のため、通勤可能な場所にお住まいの方を優先してご連絡します。社宅の相談も可能ですので、遠方にお住まいの方もまずはお問い合わせください。',
      },
      {
        q: '神奈川県内に引越しが必要ですか？',
        a: '神奈川県全域の現場に車両で移動するため、神奈川県内または近県（東京・埼玉・静岡など）にお住まいであれば通勤可能なケースが多いです。まずはご自宅から厚木市（本社）までの距離をご確認いただき、ご相談ください。',
      },
    ],
  },
  {
    label: '選考について',
    id: 'selection',
    items: [
      {
        q: '選考は何段階ありますか？',
        a: '基本的に面談1回です。書類選考・筆記試験・複数回の面接はありません。まず応募いただき、面談でお互いの話をするシンプルな選考フローです。',
      },
      {
        q: '面談はどこで行いますか？',
        a: '宝宮設備の事務所（神奈川県厚木市温水西1-4-39）で行います。場合によっては現場近くでの面談も相談可能です。事前にご確認ください。',
      },
      {
        q: '採用結果はいつごろわかりますか？',
        a: '面談後、数日以内にご連絡します。可能な限り早くお伝えするよう努めています。連絡が遅い場合はお気軽にご確認ください。',
      },
    ],
  },
]

const allFaqs = faqCategories.flatMap(cat => cat.items.map(item => ({ q: item.q, a: item.a })))

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: 'よくある質問', item: 'https://www.houmiya-recruit.com/faq' },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        en="FAQ"
        title="よくある質問"
        subtitle="設備工事の求人に関するQ&A"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: 'よくある質問' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-orange-500" />
              <span className="text-[10px] font-black tracking-[0.28em] uppercase text-orange-500">FAQ</span>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-2">
              宝宮設備へのご応募にあたり、よくいただくご質問をまとめました（{allFaqs.length}問）。
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              その他ご不明な点はお気軽にお問い合わせください。
            </p>
          </div>

          {/* Category nav */}
          <div className="flex flex-wrap gap-2 mb-12">
            {faqCategories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="text-xs font-bold border border-gray-200 text-gray-500 hover:border-orange-400 hover:text-orange-500 transition-colors px-3 py-1.5">
                {cat.label}
              </a>
            ))}
          </div>

          {/* FAQ by category */}
          <div className="space-y-14">
            {faqCategories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <h2 className="text-sm font-black text-navy tracking-widest mb-6 pb-3 border-b border-gray-200 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block flex-shrink-0" />
                  {cat.label}
                </h2>
                <div className="space-y-0 border-t border-slate-100">
                  {cat.items.map((faq, i) => (
                    <div key={i} className="border-b border-slate-100 py-6">
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white text-xs font-black flex items-center justify-center">
                          Q
                        </span>
                        <h3 className="text-sm sm:text-base font-black text-slate-800 pt-0.5 leading-snug">
                          {faq.q}
                        </h3>
                      </div>
                      <div className="flex items-start gap-4 mt-4">
                        <span className="flex-shrink-0 w-7 h-7 border border-slate-200 text-slate-400 text-xs font-black flex items-center justify-center">
                          A
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed pt-0.5">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-14 bg-navy p-8 text-center">
            <p className="text-[10px] font-black tracking-[0.28em] uppercase text-white/30 mb-3">Contact</p>
            <p className="text-white font-bold mb-2">その他のご質問はお気軽にどうぞ</p>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              フォーム・LINE・お電話にていつでも受け付けています。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/entry"
                className="inline-flex items-center justify-center gap-2 font-black text-sm px-6 py-3.5 bg-orange-500 text-white hover:bg-orange-400 transition-colors"
              >
                応募・お問い合わせフォーム →
              </Link>
              <a
                href="tel:046-205-4558"
                className="inline-flex items-center justify-center gap-2 font-medium text-sm px-6 py-3.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.65)' }}
              >
                046-205-4558
              </a>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400 tracking-widest uppercase mb-4">関連ページ</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: '/recruit', label: '募集要項' },
                { href: '/work', label: '仕事内容' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/column', label: '求人コラム' },
                { href: '/entry', label: '応募フォーム' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium px-4 py-3 border border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-500 transition-colors text-center"
                >
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
