import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '現場ギャラリー｜厚木市の設備工事現場写真・職場の雰囲気｜宝宮設備',
  description:
    '宝宮設備（厚木市）の実際の現場写真・スタッフ写真を紹介。エアコン工事・給湯器交換・電気工事の現場から、社用車・倉庫・社内の雰囲気まで。神奈川県厚木市の設備工事求人の職場をご覧ください。',
  keywords: ['宝宮設備 現場写真', '設備工事 職場 厚木市', 'エアコン工事 現場 神奈川', '給湯器交換 現場', '宝宮設備 スタッフ', '厚木市 設備工事会社'],
  openGraph: {
    title: '現場ギャラリー｜宝宮設備の仕事現場・スタッフ写真',
    description: 'エアコン工事・給湯器交換・電気工事の現場写真、スタッフの様子を紹介。神奈川県厚木市の設備工事会社。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/gallery' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: 'ギャラリー', item: 'https://www.houmiya-recruit.com/gallery' },
  ],
}

const photosAircon = [
  { src: '/images/photo-aircon-outdoor.jpg',      alt: '室外機への配管接続作業',      caption: 'エアコン室外機工事' },
  { src: '/images/photo-aircon-balcony.jpg',      alt: 'バルコニーでの配管引き回し',  caption: '配管引き回し作業' },
  { src: '/images/photo-aircon-install.jpg',      alt: '室内機の取付作業',            caption: 'エアコン室内機取付' },
  { src: '/images/photo-aircon-complete-1.jpg',   alt: '工事完了の達成感',            caption: 'エアコン設置完了' },
  { src: '/images/photo-aircon-complete-2.jpg',   alt: 'お客様宅でのエアコン設置確認', caption: '設置確認・試運転' },
  { src: '/images/photo-customer-service.jpg',    alt: 'お客様への工事説明',          caption: '工事後のご説明' },
]

const photosCompany = [
  { src: '/images/photo-vehicle-white.jpg',       alt: '社用車（ハイエース）',         caption: '会社の車両（軽バン）' },
  { src: '/images/photo-vehicle-loading.jpg',     alt: '現場へ向けて積み込み作業',    caption: '朝の積み込み作業' },
  { src: '/images/photo-vehicle-departure-1.jpg', alt: '脚立を持って現場へ出発',      caption: '現場へ出発' },
  { src: '/images/photo-vehicle-departure-2.jpg', alt: '梯子を積み込む',              caption: '資材の積み込み' },
  { src: '/images/photo-warehouse-aircon.jpg',    alt: '倉庫でのエアコン搬出作業',    caption: '倉庫・資材管理' },
  { src: '/images/photo-warehouse-staff.jpg',     alt: '倉庫前でのスタッフ',          caption: '倉庫・拠点の様子' },
]

const photosStaff = [
  { src: '/images/photo-morning-briefing.jpg',    alt: '朝の引き継ぎ・書類確認',      caption: '朝のミーティング' },
  { src: '/images/photo-staff-office.jpg',        alt: 'オフィスで電話対応するスタッフ', caption: 'オフィスでの業務' },
  { src: '/images/photo-staff-meeting.jpg',       alt: 'スタッフ同士の打合せ',        caption: 'スタッフ間の打合せ' },
  { src: '/images/photo-staff-chat.jpg',          alt: '休憩中のスタッフの会話',      caption: '休憩中の一コマ' },
  { src: '/images/photo-staff-relax.jpg',         alt: 'オフィスでのリラックスタイム', caption: '職場の雰囲気' },
]

export default function Gallery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        en="Gallery"
        title="現場ギャラリー"
        subtitle="宝宮設備の仕事現場・スタッフ写真"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: 'ギャラリー' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="mb-12">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              宝宮設備の実際の現場・スタッフの様子をご覧ください。
              エアコン工事・給湯器交換・電気工事の現場から、倉庫・車両・社内の雰囲気まで、
              日々の仕事のリアルをお伝えします。
            </p>
          </div>

          {/* Featured large photo */}
          <div className="mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src="/images/photo-aircon-outdoor.jpg"
                  alt="エアコン室外機への専門的な作業"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="bg-navy px-8 py-10 flex flex-col justify-center">
                <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3">Real Work</p>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-4">
                  毎日の現場が、<br />プロへの道。
                </h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  宝宮設備のスタッフは、神奈川県全域の住宅・マンション・店舗で毎日現場仕事をこなしています。
                  未経験から入社した方も、先輩の指導のもとで確実に技術を積み上げています。
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  8:30〜17:00・残業なし。限られた時間の中で、丁寧に、確実に仕事をする。
                  そのスタイルが、お客様からの信頼につながっています。
                </p>
                <Link href="/entry" className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-orange-400 hover:text-orange-300 transition-colors">
                  応募する
                  <span className="block w-5 h-px bg-orange-400" />
                </Link>
              </div>
            </div>
          </div>

          {/* Aircon section */}
          <div className="mb-14">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              エアコン工事・現場の様子
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              住宅・マンション・店舗のエアコン取付・交換・撤去工事の現場です。室内機の設置から配管引き回し・室外機設置・試運転まで、一連の工事を担当します。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200">
              {photosAircon.map((photo) => (
                <div key={photo.src} className="relative overflow-hidden bg-white group">
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 640px) 33vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="py-2 px-3 bg-white border-t border-gray-100">
                    <span className="text-[10px] text-orange-500 font-bold tracking-widest uppercase">現場</span>
                    <p className="text-xs text-gray-600 font-medium leading-tight">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company / vehicle section */}
          <div className="mb-14">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              社用車・倉庫・拠点
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              会社の車両（軽バン）で現場へ直行・直帰します。燃料代は会社負担。AT限定免許でも運転できる車両を使っています。厚木市の倉庫には工具・部材が管理されています。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200">
              {photosCompany.map((photo) => (
                <div key={photo.src} className="relative overflow-hidden bg-white group">
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 640px) 33vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="py-2 px-3 bg-white border-t border-gray-100">
                    <span className="text-[10px] text-orange-500 font-bold tracking-widest uppercase">会社</span>
                    <p className="text-xs text-gray-600 font-medium leading-tight">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Staff section */}
          <div className="mb-14">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              スタッフ・職場の雰囲気
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              スタッフの多くが20代。明るく元気なチームです。朝のミーティングからオフィスでの業務、休憩中の自然なコミュニケーションまで、宝宮設備の職場の雰囲気をご覧ください。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200">
              {photosStaff.map((photo) => (
                <div key={photo.src} className="relative overflow-hidden bg-white group">
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 640px) 33vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="py-2 px-3 bg-white border-t border-gray-100">
                    <span className="text-[10px] text-orange-500 font-bold tracking-widest uppercase">スタッフ</span>
                    <p className="text-xs text-gray-600 font-medium leading-tight">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              資格取得サポート
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/welfare-certification.png"
                  alt="資格取得サポート・電気工事士テキスト"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-sm font-black text-navy mb-3">資格取得費用は全額会社負担</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  第二種電気工事士・冷媒取扱技術者・簡易内管施工士など、設備工事に役立つ資格の受験費用・テキスト代・講習費用はすべて会社が負担します。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  資格を取得することで担当できる作業の幅が広がり、月給の昇給にも直結します。
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href="/work" className="btn-outline text-sm px-6 py-3.5">
              仕事内容を見る
            </Link>
            <Link href="/entry" className="btn-primary text-sm px-6 py-3.5">
              応募フォームへ
            </Link>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/area/atsugi', label: '厚木市の求人詳細' },
                { href: '/company',     label: '会社概要' },
                { href: '/staff',       label: 'スタッフ紹介' },
                { href: '/welfare',     label: '福利厚生' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-gray-500 hover:text-orange-500 transition-colors">{link.label} →</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
