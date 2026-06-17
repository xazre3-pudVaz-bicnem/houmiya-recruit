import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'

export const metadata: Metadata = {
  title: 'よくある質問（FAQ）｜設備工事の求人に関するQ&A',
  description:
    '設備工事求人に関するよくある質問。未経験・資格・給与・勤務地・残業・応募方法など15項目を掲載。神奈川県厚木市の宝宮設備 採用サイト。',
  keywords: [
    '設備工事 求人 よくある質問',
    '設備工事 未経験 応募',
    '設備工事 資格 不要',
    '宝宮設備 求人 FAQ',
  ],
  alternates: { canonical: 'https://www.houmiya-recruit.com/faq' },
  openGraph: {
    title: 'よくある質問（FAQ）｜宝宮設備 採用サイト',
    description: '設備工事の求人に関するよくある質問をまとめました。未経験・資格・給与・勤務地など。',
    url: 'https://www.houmiya-recruit.com/faq',
    locale: 'ja_JP',
    type: 'website',
  },
}

const faqs = [
  {
    q: '未経験でも応募できますか？',
    a: 'はい、応募できます。宝宮設備では設備工事が未経験の方を積極的に採用しています。入社後1ヶ月間の研修期間を設け、先輩スタッフが現場で一から丁寧に指導します。「体を動かす仕事がしたい」「手に職をつけたい」という意欲があれば大丈夫です。',
  },
  {
    q: '資格がなくても応募できますか？',
    a: 'はい、資格がなくても応募できます。入社後に会社が費用を全額負担して資格取得をサポートします。第二種電気工事士・冷媒取扱技術者・簡易内管施工士など、仕事に必要な資格を働きながら取得できます。',
  },
  {
    q: '普通自動車免許は必要ですか？',
    a: '普通自動車免許（AT限定可）があれば尚可ですが、必須ではありません。現場への移動は会社の車両を使います。ただし、将来的に車両を自分で運転して現場に向かうためには取得が必要になります。取得支援も相談可能です。',
  },
  {
    q: '残業はありますか？',
    a: '基本的に残業はありません。勤務時間は8:30〜17:00です。現場作業は日中に完了するよう調整しており、プライベートの時間もしっかり確保できます。',
  },
  {
    q: '勤務地はどこですか？',
    a: '神奈川県全域の各現場が勤務地です。本社は神奈川県厚木市温水西1-4-39にあります。現場直行・直帰も可能で、自宅から直接現場に向かい、終わったら直帰できます。会社車両の貸出があります。',
  },
  {
    q: '転勤はありますか？',
    a: 'ありません。主な活動エリアは神奈川県内です。厚木市・海老名市・大和市・座間市・伊勢原市・平塚市・相模原市など、神奈川県内の現場を担当します。',
  },
  {
    q: '給与はどのくらいですか？',
    a: '月給25万円〜70万円（未経験：研修後250,000円〜）です。技術・習熟度・保有資格に応じて随時昇給します。夏・冬の手当てもあります。経験を積むにつれて収入を伸ばすことができます。',
  },
  {
    q: '資格取得支援はありますか？',
    a: 'はい、あります。第二種電気工事士・冷媒取扱技術者（第一種・第二種）・簡易内管施工士など、設備工事に関連する資格の取得費用を全額会社が負担します。試験代・テキスト代・講習費用はすべて会社負担です。',
  },
  {
    q: '給湯器工事の経験がなくても大丈夫ですか？',
    a: '大丈夫です。給湯器工事は入社後の研修で一から習得できます。先輩スタッフが現場で丁寧に指導するため、経験ゼロでも安心してスタートできます。関連資格（簡易内管施工士など）も入社後に取得できます。',
  },
  {
    q: '住宅設備工事はどのような仕事ですか？',
    a: '住宅設備工事とは、住宅に設置されているエアコン・給湯器・電気設備などを取付・交換・修理する仕事です。主な作業は①エアコン工事（室内機・室外機の取付・交換）②給湯器工事（ガス給湯器・エコキュートの交換・設置）③電気工事（照明・コンセント・分電盤の工事）の3種類です。',
  },
  {
    q: '入社後の研修はありますか？',
    a: 'はい、入社後1ヶ月間の研修期間があります。研修中は先輩スタッフとペアで現場を回り、道具の使い方・安全確認・施工手順・お客様対応などを実際の現場で学びます。研修期間中も月給250,000円が保証されています。',
  },
  {
    q: '応募から採用までの流れを教えてください。',
    a: '①応募フォーム・LINE・お電話でご連絡→②お電話または対面での面談（30〜60分程度）→③採用決定のご連絡→④入社日の決定、という流れです。書類選考はございません。面談日程はご都合に合わせて調整します。',
  },
  {
    q: '職場の雰囲気はどのような感じですか？',
    a: '若いスタッフが多く、明るく活気のある職場です。わからないことは何でも気軽に質問できる環境で、先輩スタッフが丁寧にサポートします。仕事の後や休日にスタッフ同士で交流することもあります。職場写真はギャラリーページでご確認ください。',
  },
  {
    q: '神奈川県外からの応募は可能ですか？',
    a: '応募は可能です。ただし、勤務地が神奈川県内のため、通勤可能な場所にお住まいの方を優先してご連絡します。社宅の相談も可能ですので、遠方にお住まいの方もまずはお問い合わせください。',
  },
  {
    q: '将来的に独立を目指せますか？',
    a: 'はい、目指せます。宝宮設備で経験を積み、資格を取得した後に独立・開業を目指す方もいます。設備工事の技術・資格・現場経験を積むことで、将来的に自分の事業を立ち上げる基盤をつくることができます。会社としても応援しています。',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              宝宮設備へのご応募にあたり、よくいただくご質問をまとめました。
              その他ご不明な点はお気軽にお問い合わせください。
            </p>
          </div>

          {/* FAQ list */}
          <div className="space-y-0 border-t border-slate-100">
            {faqs.map((faq, i) => (
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
