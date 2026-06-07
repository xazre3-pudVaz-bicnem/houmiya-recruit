import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '1日の流れ｜設備工事スタッフの働き方',
  description:
    '宝宮設備の設備工事スタッフとして働く1日の流れを紹介。電気工事・エアコン工事・給湯器交換の現場仕事のリアルな働き方を詳しく解説します。',
  keywords: ['設備工事 1日の流れ', '電気工事 1日の流れ', '現場仕事 1日の流れ', '設備工事 働き方'],
}

const timeline = [
  {
    time: '08:00',
    title: '現場へ直行',
    body: '自宅から直接現場へ移動します。会社車両を使って現場に向かいます。朝の通勤ラッシュを避けて効率よく移動できます。',
    note: null,
  },
  {
    time: '09:00',
    title: '作業開始',
    body: '先輩スタッフと当日の段取りを確認し、作業をスタート。エアコン工事の場合は室内機の取付から始めることが多いです。一つひとつ丁寧に確認しながら進めます。',
    note: null,
  },
  {
    time: '12:00',
    title: '昼休憩（昼食補助あり）',
    body: '現場近くのお弁当屋や飲食店でランチタイム。昼食補助があるので食費の心配が少ないのはうれしいポイントです。スタッフ同士でゆっくり話す時間でもあります。',
    note: null,
  },
  {
    time: '13:00',
    title: '午後の作業',
    body: '午前中の続きや別の工程を担当。配管・試運転・確認作業など、工事の仕上げに向けて作業を進めます。複数台の現場では午後から次の現場へ移動することもあります。',
    note: null,
  },
  {
    time: '15:00〜16:00',
    title: '作業完了・後片付け',
    body: '工事完了後に試運転・最終確認を行い、現場の後片付けをします。お客様への説明や引き渡しも大切な業務です。お客様からの「ありがとう」が一日のモチベーションになります。',
    note: null,
  },
  {
    time: '17:00〜18:00',
    title: '帰社・片付け・終業',
    body: '会社に戻って工具・車両の片付け、翌日の準備を行います。当日の報告を終えて帰宅。残業は少なく、オンとオフのメリハリがついた働き方ができます。',
    note: null,
  },
]

export default function Day() {
  return (
    <>
      <PageHero
        en="Daily Schedule"
        title="1日の流れ"
        subtitle="設備工事スタッフの働き方"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '1日の流れ' }]}
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <div className="mb-8">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              設備工事スタッフとして働く1日の流れをご紹介します。基本的には現場直行・直帰で、会社への出社が少ないのが特徴です。
              現場によりスケジュールは変動しますが、おおよそのイメージとしてご参考ください。
            </p>
          </div>

          {/* Day-in-life photos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 mb-12 -mx-4 sm:-mx-6">
            <div className="relative overflow-hidden">
              <div className="relative h-36 sm:h-44">
                <Image src="/images/photo-morning-briefing.jpg" alt="朝の準備・確認" fill className="object-cover" sizes="(min-width: 640px) 25vw, 50vw" />
              </div>
              <p className="text-[10px] text-gray-500 text-center py-1.5 bg-white tracking-wider">朝の準備</p>
            </div>
            <div className="relative overflow-hidden">
              <div className="relative h-36 sm:h-44">
                <Image src="/images/photo-vehicle-departure-1.jpg" alt="現場へ出発" fill className="object-cover" sizes="(min-width: 640px) 25vw, 50vw" />
              </div>
              <p className="text-[10px] text-gray-500 text-center py-1.5 bg-white tracking-wider">現場へ出発</p>
            </div>
            <div className="relative overflow-hidden">
              <div className="relative h-36 sm:h-44">
                <Image src="/images/photo-aircon-outdoor.jpg" alt="現場で作業中" fill className="object-cover" sizes="(min-width: 640px) 25vw, 50vw" />
              </div>
              <p className="text-[10px] text-gray-500 text-center py-1.5 bg-white tracking-wider">現場での作業</p>
            </div>
            <div className="relative overflow-hidden">
              <div className="relative h-36 sm:h-44">
                <Image src="/images/photo-aircon-complete-1.jpg" alt="工事完了" fill className="object-cover object-top" sizes="(min-width: 640px) 25vw, 50vw" />
              </div>
              <p className="text-[10px] text-gray-500 text-center py-1.5 bg-white tracking-wider">工事完了</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mb-14">
            {/* Vertical line */}
            <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-gray-200" />

            {timeline.map((item, i) => (
              <div key={item.time} className="flex gap-6 mb-10 last:mb-0 relative">
                {/* Time marker */}
                <div className="flex-shrink-0 w-14 text-right">
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 border-navy bg-white inline-block relative z-10"
                    style={{ marginRight: '-1px' }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-navy text-white text-xs font-bold px-3 py-1.5 tracking-wider leading-tight">
                      {item.time}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-navy tracking-tight mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mb-12 border border-gray-200 px-4 py-3">
            ※ 現場の状況や担当業務により、スケジュールは変動することがあります。
          </p>

          {/* Work style features */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              宝宮設備の働き方の特徴
            </h2>
            <div className="space-y-0">
              {[
                { title: '現場直行・直帰', body: '毎朝会社に来なくてよいので、通勤時間が短縮されます。会社車両で現場まで直接向かえます。' },
                { title: '残業は少なめ', body: '現場の作業が完了すれば終業。長時間残業が少なく、オンとオフのメリハリがある働き方ができます。' },
                { title: '昼食補助で食費を節約', body: '昼食代を会社が補助するため、毎日の食費負担が軽減されます。昼休憩はスタッフ同士のコミュニケーションの場にも。' },
                { title: '神奈川県全域の現場を経験', body: '厚木市を拠点に、神奈川県全域の現場を担当します。多様な現場経験が技術の幅を広げます。' },
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
