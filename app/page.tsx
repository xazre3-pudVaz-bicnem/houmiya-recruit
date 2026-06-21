import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import TickerSection from '@/components/sections/TickerSection'
import PhilosophySection from '@/components/sections/PhilosophySection'
import WorkSection from '@/components/sections/WorkSection'
import ImpactSection from '@/components/sections/ImpactSection'
import ReasonSection from '@/components/sections/ReasonSection'
import TimelineSection from '@/components/sections/TimelineSection'
import WelfareSection from '@/components/sections/WelfareSection'
import RecruitSummarySection from '@/components/sections/RecruitSummarySection'
import EntryCTA from '@/components/sections/EntryCTA'

export const metadata: Metadata = {
  title: {
    default: '株式会社宝宮設備 採用サイト｜厚木市の設備工事・電気工事スタッフ求人',
    template: '%s｜株式会社宝宮設備 採用サイト',
  },
  description:
    '神奈川県厚木市の株式会社宝宮設備では、エアコン工事・給湯器交換・電気工事スタッフを募集中。未経験歓迎、月給25万円〜70万円、資格取得支援あり。厚木市で手に職をつけたい方を歓迎します。',
  keywords: ['厚木市 設備工事 求人', '厚木市 電気工事 求人', '厚木市 エアコン工事 求人', '神奈川 設備工事 求人', '設備工事 未経験'],
  openGraph: {
    title: '株式会社宝宮設備 採用サイト｜厚木市の設備工事スタッフ求人',
    description: '神奈川県厚木市の設備工事スタッフ求人。エアコン工事・給湯器交換・電気工事。未経験歓迎・月給25万〜70万円・残業なし。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.houmiya-recruit.com/' },
}

export default function Home() {
  return (
    <>
      {/* ファーストビュー */}
      <HeroSection />
      <TickerSection />
      {/* 採用メッセージ */}
      <PhilosophySection />
      {/* 仕事内容 */}
      <WorkSection />
      {/* 黒帯インパクトセクション */}
      <ImpactSection />
      {/* 選ばれる理由 */}
      <ReasonSection />
      {/* 1日の流れ */}
      <TimelineSection />
      {/* 福利厚生 */}
      <WelfareSection />
      {/* 募集要項 */}
      <RecruitSummarySection />
      {/* 採用ブログ導線 */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black tracking-[0.28em] uppercase text-orange-500 mb-1.5">Blog</p>
            <h2 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight mb-1">採用ブログ</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              仕事内容・職場環境・キャリアパスを発信中
            </p>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-orange-500 border border-slate-200 hover:border-orange-400 px-6 py-3 transition-colors"
          >
            記事を読む
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
      {/* 厚木市エリア求人リンク */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-[10px] font-black tracking-[0.28em] uppercase text-orange-500 mb-2">Area</p>
          <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-tight mb-4">厚木市の設備工事求人</h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-5">
            株式会社宝宮設備の本社は神奈川県厚木市温水西にあります。厚木市在住の方はもちろん、近隣市（海老名・大和・座間・伊勢原）からの応募も歓迎しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/area/atsugi"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-navy px-5 py-2.5 hover:bg-navy/80 transition-colors"
            >
              厚木市の設備工事求人を見る →
            </Link>
            <Link
              href="/area"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 border border-slate-200 px-5 py-2.5 hover:border-slate-400 transition-colors"
            >
              地域別求人一覧
            </Link>
          </div>
        </div>
      </section>
      {/* 応募フォーム */}
      <EntryCTA />
    </>
  )
}
