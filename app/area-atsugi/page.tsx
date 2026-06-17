import type { Metadata } from 'next'
import Link from 'next/link'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '厚木市で設備工事スタッフを募集',
  description:
    '神奈川県厚木市の設備工事求人。厚木の電気工事・エアコン工事求人で未経験歓迎。宝宮設備は厚木市温水西に拠点を置く設備工事会社です。',
  keywords: ['厚木 設備工事 求人', '厚木 電気工事 求人', '厚木 エアコン工事 求人', '厚木市 現場仕事 求人'],
}

export default function AreaAtsugi() {
  return (
    <>
      <PageHero
        en="Atsugi Area"
        title="厚木市で設備工事スタッフを募集"
        subtitle="神奈川県厚木市・周辺エリア"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { href: '/area-kanagawa', label: '神奈川エリア' }, { label: '厚木エリア' }]}
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">
              厚木市の設備工事求人
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              株式会社宝宮設備は、神奈川県厚木市温水西1-4-39に本社を構える設備工事会社です。
              厚木市を拠点として、エアコン工事・給湯器交換・電気工事スタッフの求人を行っています。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              厚木市での設備工事求人として、未経験者・18〜35歳の若手を積極採用しています。
              厚木市内はもちろん、周辺の大和市・座間市・海老名市・愛甲郡など厚木周辺エリアの現場も多く担当します。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              本社が厚木市にあるため、厚木市内にお住まいの方にとって通勤しやすい環境です。会社車両の貸出もあり、現場への移動も安心です。厚木市での電気工事求人・エアコン工事求人としてお気軽にご応募ください。
            </p>
          </div>

          {/* Company location */}
          <div className="mb-12 bg-navy py-8 px-6 sm:px-10">
            <h2 className="text-base font-black text-white tracking-tight mb-5">会社情報</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                { label: '会社名', value: '株式会社宝宮設備' },
                { label: '所在地', value: '神奈川県厚木市温水西1-4-39' },
                { label: '電話番号', value: '046-205-4558' },
                { label: '営業時間', value: '9:00〜18:00' },
                { label: '事業内容', value: 'エアコン工事・給湯器交換・電気工事' },
                { label: '対応エリア', value: '神奈川県全域' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-white/40 tracking-widest uppercase mb-0.5">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Atsugi & surroundings */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木・周辺エリアでの対応
            </h2>
            <div className="space-y-0">
              {[
                { title: '厚木市エリアの求人', body: '厚木市内の住宅・マンション・店舗でのエアコン工事・給湯器交換・電気工事の求人です。本社が厚木市にあるため、厚木市内での仕事が多く、移動時間が短く効率的に働けます。' },
                { title: '大和市・座間市・海老名市', body: '厚木市に隣接する大和市・座間市・海老名市でも多くの現場を担当しています。これらのエリアにお住まいの方もご応募いただけます。' },
                { title: '小田原・平塚方面', body: '神奈川県西部の小田原・平塚・秦野方面の現場も担当。神奈川県厚木市を中心に幅広い現場経験が積めます。' },
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

          {/* Three jobs in Atsugi */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              厚木の設備工事求人 3職種
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: '厚木 エアコン工事', link: '/jobs/aircon', desc: '厚木・神奈川県全域のエアコン取付・交換工事。未経験歓迎。' },
                { title: '厚木 給湯器交換', link: '/jobs/water-heater', desc: '厚木・神奈川県の給湯器撤去・新規取付工事。住宅設備の求人。' },
                { title: '厚木 電気工事', link: '/jobs/electrical', desc: '厚木・神奈川県の電気工事。資格取得支援あり・未経験可。' },
              ].map((item) => (
                <div key={item.title} className="border border-gray-200 p-5">
                  <h3 className="text-sm font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                  <Link href={item.link} className="link-arrow text-xs">
                    詳細を見る <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/recruit" className="btn-outline text-sm px-6 py-3.5">
              募集要項を見る
            </Link>
            <a href="tel:046-205-4558" className="btn-tel text-sm px-6 py-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              046-205-4558
            </a>
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
