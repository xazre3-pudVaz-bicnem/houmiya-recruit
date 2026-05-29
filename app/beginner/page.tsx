import type { Metadata } from 'next'
import Link from 'next/link'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '未経験から設備工事スタッフへ｜宝宮設備の教育環境',
  description:
    '設備工事の未経験求人なら宝宮設備へ。現場仕事未経験・第二新卒・手に職をつけたい若手を神奈川県で採用中。入社後の研修・教育体制を詳しく紹介します。',
  keywords: ['設備工事 未経験 求人', '現場仕事 未経験 神奈川', '手に職 未経験 求人', '第二新卒 設備工事'],
}

export default function Beginner() {
  return (
    <>
      <PageHero
        en="For Beginners"
        title="未経験から設備工事スタッフへ"
        subtitle="宝宮設備の教育環境"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '未経験の方へ' }]}
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Reassurance message */}
          <div className="mb-14">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="lg:w-1/3 flex-shrink-0">
                <p className="text-6xl font-black text-silver-light leading-none select-none">&quot;</p>
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight leading-snug mb-5">
                  工具の名前も知らなくていい。
                  <br />
                  やる気があれば、それで十分。
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  現場仕事が初めての方、第二新卒で転職を考えている方、「手に職をつけたい」と思っている若手の方—宝宮設備はそんな方々を歓迎しています。
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  設備工事未経験の方でも安心してスタートできるよう、入社後は先輩スタッフが丁寧にサポートします。
                  神奈川県内の現場で実際の仕事をしながら、確実に技術を身につけられる環境を整えています。
                </p>
              </div>
            </div>
          </div>

          {/* Who we welcome */}
          <div className="mb-14">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              こんな方を歓迎しています
            </h2>
            <div className="space-y-0">
              {[
                { title: '現場仕事が初めての方', body: '工具の使い方や現場のルールから、一から丁寧に教えます。設備工事の未経験求人として、スタート地点は気にしません。' },
                { title: '第二新卒・転職を考えている方', body: '前職がどんな業種でも関係ありません。神奈川県での現場仕事に興味があれば、転職のタイミングを問わず歓迎します。' },
                { title: '手に職をつけたい若手の方', body: '「資格を取って長く働ける仕事をしたい」という方にぴったり。電気工事士などの資格取得を会社がサポートします。' },
                { title: '引越しや新生活を検討している方', body: '社宅の相談に応じます。神奈川県内への移住を考えている方も、まずはご相談ください。' },
              ].map((item) => (
                <div key={item.title} className="reason-row">
                  <div className="flex-shrink-0 pt-0.5">
                    <div className="w-2 h-2 rounded-full bg-navy mt-1.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training flow */}
          <div className="mb-14">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              入社後の流れ
            </h2>
            <div className="relative">
              <div className="absolute left-6 top-4 bottom-4 w-px bg-gray-200" />
              {[
                { period: '入社直後', title: '現場見学・基礎習得', body: '先輩スタッフに同行し、現場の流れを体で覚えます。工具の名前・使い方・現場のマナーを習得。焦らずゆっくり進めます。' },
                { period: '1〜2ヶ月', title: '補助作業から参加', body: '道具の準備・片付け・資材の運搬など、補助的な役割から少しずつ実作業に参加。先輩がそばでサポートします。' },
                { period: '3〜6ヶ月', title: '基本工事を自分で担当', body: '基本的な作業を一人でこなせるようになります。資格取得に向けた勉強もこの時期に並行して進めます。' },
                { period: '6ヶ月〜1年', title: '独立した現場対応', body: '一人で現場を担当できるレベルに成長。後輩に教える側になることも。資格取得でキャリアアップも目指せます。' },
              ].map((stage, i) => (
                <div key={stage.period} className="flex gap-6 mb-8 last:mb-0 relative">
                  <div className="flex-shrink-0 w-12 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-navy bg-white relative z-10" />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="bg-navy text-white text-xs font-bold px-3 py-1 tracking-wide inline-block w-fit">
                        {stage.period}
                      </span>
                      <h3 className="text-sm font-bold text-navy">{stage.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{stage.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Q&A */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              よくある質問
            </h2>
            <div className="space-y-5">
              {[
                { q: '全くの未経験でも大丈夫ですか？', a: 'はい、問題ありません。入社後は先輩スタッフと一緒に現場に出て、一から丁寧に教えます。設備工事の知識がゼロでもスタートできます。' },
                { q: '資格がないと採用されませんか？', a: '資格は不要です。入社後に会社が費用を負担して資格取得をサポートします。働きながら資格を取得できます。' },
                { q: '車を持っていなくても大丈夫ですか？', a: 'マイカーがなくても大丈夫です。現場への移動に使用できる会社車両を貸出ししています。普通自動車免許があればご利用いただけます。' },
                { q: '住む場所が決まっていないのですが…', a: '社宅の相談に応じます。神奈川県への引越しを考えている方も、まずはお気軽にご相談ください。' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200">
                  <div className="bg-gray-50 px-5 py-3.5 border-b border-gray-200">
                    <p className="text-sm font-bold text-navy flex items-start gap-2">
                      <span className="text-accent-blue font-black" style={{ color: 'var(--color-blue)' }}>Q.</span>
                      {item.q}
                    </p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                      <span className="font-black text-navy flex-shrink-0">A.</span>
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/recruit" className="btn-outline text-sm px-6 py-3.5">
              募集要項を見る
            </Link>
            <Link href="/entry" className="btn-primary text-sm px-6 py-3.5">
              応募フォームへ
            </Link>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
