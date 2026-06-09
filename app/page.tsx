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
    default: '株式会社宝宮設備 採用サイト｜神奈川県の設備工事スタッフ求人',
    template: '%s｜株式会社宝宮設備 採用サイト',
  },
  description:
    '神奈川県厚木市の株式会社宝宮設備では、エアコン工事・給湯器交換・電気工事スタッフを募集中。未経験歓迎、資格取得支援、車両貸出、社宅相談可能。若い世代が働きやすく成長できる環境です。',
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
      {/* 応募フォーム */}
      <EntryCTA />
    </>
  )
}
