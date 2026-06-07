import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '電気工事スタッフ求人｜未経験から技術を身につける',
  description:
    '神奈川県の電気工事スタッフ求人。未経験から電気工事士の資格取得をサポート。電気工事 未経験でも大丈夫。宝宮設備で資格取得支援を受けながら働けます。',
  keywords: ['電気工事 求人 神奈川', '電気工事 未経験 求人', '電気工事士 資格取得支援', '電気工事 厚木'],
}

export default function ElectricalWork() {
  return (
    <>
      <PageHero
        en="Electrical Work"
        title="電気工事スタッフ求人"
        subtitle="未経験から技術を身につける"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { href: '/work', label: '仕事内容' }, { label: '電気工事' }]}
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Lead photo */}
          <div className="h-52 sm:h-72 mb-12 relative overflow-hidden">
            <Image
              src="/images/photo-aircon-balcony.jpg"
              alt="電気工事の現場"
              fill
              className="object-cover"
              sizes="(min-width: 896px) 896px, 100vw"
              priority
            />
          </div>

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">
              電気工事の仕事とは
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              電気工事スタッフは、住宅・店舗・オフィスの配線工事・照明器具の取付・分電盤の交換など、電気に関わる工事全般を担当します。神奈川県内の現場で、快適で安全な電気環境づくりを支えます。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              電気工事は「電気工事士」の国家資格が必要な作業もあります。宝宮設備では、入社後に第二種電気工事士の資格取得を全額会社負担でサポートします。資格を持つことで、担当できる工事の幅が広がり、収入アップにもつながります。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              電気工事の未経験求人として、神奈川県内で積極採用中です。電気のことを全く知らなくても、先輩スタッフが丁寧に一から教えます。「手に職をつけたい」という意欲があれば、スタートは今からでも遅くありません。
            </p>
          </div>

          {/* Qualification support - feature section */}
          <div className="mb-12 flex flex-col lg:flex-row gap-0">
            <div
              className="lg:w-2/5 h-48 lg:h-auto relative overflow-hidden"
              style={{ minHeight: '200px' }}
            >
              <Image
                src="/images/welfare-certification.png"
                alt="電気工事士テキストと資格取得サポート"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(15,23,42,0.55)' }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white/60 text-xs tracking-widest uppercase mb-2">Qualification</span>
                <span className="text-white text-3xl font-black tracking-tight">資格取得</span>
                <span className="text-white/70 text-sm mt-1">会社全額サポート</span>
              </div>
            </div>
            <div className="lg:w-3/5 bg-gray-50 px-6 sm:px-10 py-8 flex flex-col justify-center">
              <h2 className="text-lg font-black text-navy tracking-tight mb-4">
                電気工事士 資格取得支援
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                第二種電気工事士は、住宅・小規模店舗の電気工事を行うために必要な国家資格です。筆記試験と技能試験の2段階がありますが、宝宮設備では受験費用・テキスト代・講習費用を会社が負担します。
              </p>
              <div className="space-y-2">
                {[
                  '受験費用・テキスト代 会社負担',
                  '業務時間内に学習時間を確保',
                  '先輩スタッフによる実技サポート',
                  '資格取得後は担当できる工事が拡大',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-accent-blue font-bold text-xs mt-0.5" style={{ color: 'var(--color-blue)' }}>✓</span>
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Work details */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200">
              主な業務内容
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {[
                { title: '配線工事', body: '新築・リフォーム現場での配線工事。電線の引き回しやコンセント・スイッチの取付を行います。' },
                { title: '照明器具の取付', body: 'シーリングライト・ダウンライトなど各種照明器具の取付・交換。高所作業もあります。' },
                { title: '分電盤の交換', body: '老朽化した分電盤の撤去・新規分電盤の設置。電気の安全を守る重要な工事です。' },
                { title: 'エアコン用電源工事', body: 'エアコン専用回路の増設・電源コンセントの新設。エアコン工事と連携することも多い工事です。' },
              ].map((item) => (
                <div key={item.title} className="welfare-item px-1">
                  <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
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
                <tr><th>対象</th><td>未経験歓迎 / 18〜35歳 / 電気工事士資格なしでも可</td></tr>
                <tr><th>資格支援</th><td>第二種電気工事士 取得費用全額会社負担</td></tr>
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
