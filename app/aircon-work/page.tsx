import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'エアコン工事スタッフ求人｜未経験歓迎・神奈川県対応',
  description:
    '神奈川県のエアコン工事スタッフ求人。未経験歓迎、資格取得支援あり。エアコン取付・エアコン職人を目指す方を積極採用中。宝宮設備で技術を身につけてください。',
  keywords: ['エアコン工事 求人', 'エアコン取付 求人', 'エアコン職人 未経験', 'エアコン工事 神奈川'],
}

export default function AirconWork() {
  return (
    <>
      <PageHero
        en="Air Conditioning Work"
        title="エアコン工事スタッフ求人"
        subtitle="未経験歓迎・神奈川県対応"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { href: '/work', label: '仕事内容' }, { label: 'エアコン工事' }]}
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Lead photo */}
          <div className="h-52 sm:h-72 mb-12 relative overflow-hidden">
            <Image
              src="/images/photo-aircon-outdoor.jpg"
              alt="エアコン工事の現場"
              fill
              className="object-cover"
              sizes="(min-width: 896px) 896px, 100vw"
              priority
            />
          </div>

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">
              エアコン工事の仕事とは
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              エアコン工事スタッフは、家庭用・業務用エアコンの取付・交換・撤去を担当する仕事です。神奈川県内の住宅・マンション・店舗・オフィスなどさまざまな現場で活躍できます。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              エアコン取付の工事は、室内機の取付・配管の引き回し・室外機の設置・冷媒ガスの充填・試運転確認まで一連の工程があります。最初は先輩と一緒に作業を覚え、徐々に自分で担当できる範囲を広げていきます。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              エアコン職人として一人立ちするまでの期間は個人差がありますが、多くのスタッフが3〜6ヶ月で基本的な工事を一人でこなせるようになっています。神奈川県全域の現場を経験することで、多様な状況に対応できる技術が身につきます。
            </p>
          </div>

          {/* Photo row */}
          <div className="grid grid-cols-3 gap-px bg-gray-200 mb-12 -mx-4 sm:-mx-6">
            <div className="relative h-32 sm:h-52 overflow-hidden">
              <Image src="/images/photo-aircon-balcony.jpg" alt="バルコニーでの配管工事" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative h-32 sm:h-52 overflow-hidden">
              <Image src="/images/photo-aircon-install.jpg" alt="室内機取付作業" fill className="object-cover object-top" sizes="33vw" />
            </div>
            <div className="relative h-32 sm:h-52 overflow-hidden">
              <Image src="/images/photo-aircon-complete-1.jpg" alt="エアコン工事完了" fill className="object-cover object-top" sizes="33vw" />
            </div>
          </div>

          {/* What you'll do */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              具体的な業務内容
            </h2>
            <div className="space-y-0">
              {[
                { num: '01', title: '現場到着・段取り確認', body: '先輩スタッフと一緒に現場へ。工具や部材を確認し、当日の作業の段取りを話し合います。' },
                { num: '02', title: '室内機の取付', body: 'エアコン本体の取付位置を確認し、背板を固定。室内機を設置します。' },
                { num: '03', title: '配管・電線の引き回し', body: '室内から室外への配管・電線の取り回し。穴あけや配管カバーの設置も行います。' },
                { num: '04', title: '室外機の設置', body: '屋外の室外機を設置し、配管と電線を接続します。架台設置や壁面固定も担当します。' },
                { num: '05', title: '試運転・確認', body: '工事完了後に試運転を行い、正常に動作するか確認。お客様への説明も大切な業務です。' },
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

          {/* Growth path */}
          <div className="bg-gray-50 p-6 sm:p-8 mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5">
              エアコン職人へのキャリアパス
            </h2>
            <div className="space-y-4">
              {[
                { period: '入社〜3ヶ月', title: '基礎習得期', body: '先輩と一緒に現場に入り、道具の使い方・現場のルール・基本的な取付手順を習得' },
                { period: '3〜6ヶ月', title: '独立作業開始', body: '基本的なエアコン取付を一人でこなせるようになる。先輩がそばでサポート' },
                { period: '6ヶ月〜1年', title: '一人立ち', body: '複数台の現場や難易度の高い取付にも対応。資格取得も目指せる段階' },
                { period: '1年以降', title: '職人として活躍', body: '後輩の指導や現場リーダーとして活躍。技術の幅を広げながらキャリアアップ' },
              ].map((stage) => (
                <div key={stage.period} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 bg-navy text-white text-xs font-bold tracking-wide px-3 py-1.5 leading-tight whitespace-nowrap">
                    {stage.period}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{stage.title}</p>
                    <p className="text-sm text-gray-500">{stage.body}</p>
                  </div>
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
                <tr><th>資格</th><td>普通自動車免許（AT可）。エアコン関連資格は入社後取得サポートあり</td></tr>
                <tr><th>勤務地</th><td>神奈川県全域（厚木市を拠点）</td></tr>
                <tr><th>車両</th><td>会社車両貸出あり</td></tr>
                <tr><th>給与・休日</th><td>詳細は面談時にご説明します</td></tr>
              </tbody>
            </table>
          </div>

          {/* Links */}
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
