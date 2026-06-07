import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '給湯器交換スタッフ求人｜神奈川県の設備工事求人',
  description:
    '神奈川県の給湯器交換スタッフ求人。住宅設備の求人で未経験から技術を習得。給湯器工事の仕事内容・待遇・キャリアパスを詳しく解説します。',
  keywords: ['給湯器交換 求人', '給湯器工事 求人', '住宅設備 求人 神奈川', '給湯器 未経験'],
}

export default function WaterHeaterWork() {
  return (
    <>
      <PageHero
        en="Water Heater Work"
        title="給湯器交換スタッフ求人"
        subtitle="神奈川県の設備工事求人"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { href: '/work', label: '仕事内容' }, { label: '給湯器交換' }]}
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Lead photo */}
          <div className="h-52 sm:h-72 mb-12 relative overflow-hidden">
            <Image
              src="/images/photo-customer-service.jpg"
              alt="給湯器交換工事の現場"
              fill
              className="object-cover"
              sizes="(min-width: 896px) 896px, 100vw"
              priority
            />
          </div>

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">
              給湯器交換の仕事とは
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              給湯器交換スタッフは、老朽化した給湯器の撤去と新しい給湯器の取付工事を担当します。住宅・マンションのお風呂・台所・洗面所など、生活に直結する大切な設備を正確・丁寧に施工します。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              給湯器工事はガス・水道・電気が組み合わさった複合的な作業です。最初は先輩スタッフのサポートとして現場に同行し、段階的に作業を覚えていきます。お客様の暮らしを守る責任ある仕事で、完工後の感謝の言葉が大きなやりがいになります。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              神奈川県内の住宅設備求人として、給湯器交換は安定した需要があります。冬季は特に需要が高まり、多くの現場を経験できる繁忙期になります。宝宮設備では、神奈川県全域の現場を担当するため、さまざまな種類の給湯器工事を経験できます。
            </p>
          </div>

          {/* Work detail */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              給湯器交換の主な作業内容
            </h2>
            <div className="space-y-0">
              {[
                { num: '01', title: '既存給湯器の撤去', body: '古い給湯器を安全に取り外します。ガス管・水道管・電源の接続を確認しながら慎重に作業します。' },
                { num: '02', title: '新規給湯器の取付', body: '新しい給湯器を所定の位置に設置し、ガス管・水道管・電源を正確に接続します。' },
                { num: '03', title: '配管の接続・調整', body: '給湯器から各蛇口・シャワーへの配管を確認・接続。水漏れがないかチェックします。' },
                { num: '04', title: '試運転・動作確認', body: '給湯器を起動し、お湯が正常に出るか・温度調整が正しく動作するかを確認します。' },
                { num: '05', title: 'お客様への説明', body: '新しい給湯器の操作方法や注意事項をお客様に丁寧に説明します。対人スキルも磨かれます。' },
              ].map((item) => (
                <div key={item.num} className="reason-row">
                  <div className="flex-shrink-0 w-12">
                    <span className="text-2xl font-black text-silver-light">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appeal points */}
          <div className="bg-navy py-10 px-6 sm:px-10 mb-12">
            <h2 className="text-lg font-black text-white tracking-tight mb-6">
              給湯器交換の仕事の魅力
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: '感謝が直接届く', body: 'お客様のお宅に伺い、工事完了後に直接「ありがとう」の言葉をいただける仕事。やりがいを実感できます。' },
                { title: '安定した需要', body: '給湯器は必ず老朽化し交換が必要になります。景気に左右されにくい安定した需要があります。' },
                { title: '複合スキルが身につく', body: 'ガス・水道・電気に関わる複合的な知識を習得できます。幅広い設備工事スキルが身につきます。' },
                { title: '短時間完結の現場', body: '1件の工事が半日〜1日で完結することが多く、達成感を日々感じられる仕事サイクルです。' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-navy tracking-tight mb-4 pb-3 border-b border-gray-200">
              募集条件
            </h2>
            <table className="recruit-table">
              <tbody>
                <tr><th>対象</th><td>未経験歓迎 / 18〜35歳</td></tr>
                <tr><th>資格</th><td>普通自動車免許（AT可）。関連資格は入社後サポートあり</td></tr>
                <tr><th>勤務地</th><td>神奈川県全域（厚木市を拠点）</td></tr>
                <tr><th>福利厚生</th><td>社会保険完備 / 車両貸出 / 昼食補助 / 資格取得支援 / 社宅相談可能</td></tr>
                <tr><th>給与・休日</th><td>詳細は面談時にご説明します</td></tr>
              </tbody>
            </table>
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
