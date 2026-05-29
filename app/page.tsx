import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TickerSection from '@/components/sections/TickerSection'
import PhilosophySection from '@/components/sections/PhilosophySection'
import WorkSection from '@/components/sections/WorkSection'
import StatsSection from '@/components/sections/StatsSection'
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
      {/* 未経験でも安心できる理由 */}
      <StatsSection />
      {/* 選ばれる理由 */}
      <ReasonSection />
      {/* 1日の流れ */}
      <TimelineSection />
      {/* 福利厚生 */}
      <WelfareSection />
      {/* 募集要項 */}
      <RecruitSummarySection />
      {/* 応募フォーム */}
      <EntryCTA />
    </>
  )
}
