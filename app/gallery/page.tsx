import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '現場ギャラリー｜宝宮設備の仕事現場・スタッフ写真',
  description:
    '宝宮設備の実際の現場写真・スタッフ写真を紹介。エアコン工事・給湯器交換・電気工事の現場から、社内の雰囲気まで。神奈川県の設備工事求人の実際の職場をご覧ください。',
  keywords: ['宝宮設備 現場写真', '設備工事 職場 神奈川', 'エアコン工事 現場', '宝宮設備 スタッフ'],
}

const photos = [
  { src: '/images/photo-aircon-outdoor.jpg',      alt: '室外機への配管接続作業',      caption: 'エアコン工事',       category: '現場' },
  { src: '/images/photo-aircon-balcony.jpg',      alt: 'バルコニーでの配管引き回し',  caption: '配管工事',           category: '現場' },
  { src: '/images/photo-aircon-install.jpg',      alt: '室内機の取付作業',            caption: 'エアコン取付',       category: '現場' },
  { src: '/images/photo-aircon-complete-1.jpg',   alt: '工事完了の達成感',            caption: '工事完了',           category: '現場' },
  { src: '/images/photo-aircon-complete-2.jpg',   alt: 'お客様宅でのエアコン設置確認', caption: '設置確認',           category: '現場' },
  { src: '/images/photo-customer-service.jpg',    alt: 'お客様への工事説明',          caption: 'お客様対応',         category: '現場' },
  { src: '/images/photo-vehicle-white.jpg',       alt: '社用車（ハイエース）',         caption: '社用車',             category: '会社' },
  { src: '/images/photo-vehicle-loading.jpg',     alt: '現場へ向けて積み込み作業',    caption: '朝の準備',           category: '会社' },
  { src: '/images/photo-vehicle-departure-1.jpg', alt: '脚立を持って現場へ出発',      caption: '出発準備',           category: '会社' },
  { src: '/images/photo-vehicle-departure-2.jpg', alt: '梯子を積み込む',              caption: '出発準備',           category: '会社' },
  { src: '/images/photo-warehouse-aircon.jpg',    alt: '倉庫でのエアコン搬出作業',    caption: '資材管理',           category: '会社' },
  { src: '/images/photo-warehouse-staff.jpg',     alt: '倉庫前でのスタッフ',          caption: '倉庫・拠点',         category: '会社' },
  { src: '/images/photo-morning-briefing.jpg',    alt: '朝の引き継ぎ・書類確認',      caption: '朝礼',               category: 'スタッフ' },
  { src: '/images/photo-staff-office.jpg',        alt: 'オフィスで電話対応するスタッフ', caption: 'オフィス業務',     category: 'スタッフ' },
  { src: '/images/photo-staff-meeting.jpg',       alt: 'スタッフ同士の打合せ',        caption: 'ミーティング',       category: 'スタッフ' },
  { src: '/images/photo-staff-chat.jpg',          alt: '休憩中のスタッフの会話',      caption: '社内コミュニケーション', category: 'スタッフ' },
  { src: '/images/photo-staff-relax.jpg',         alt: 'オフィスでのリラックスタイム', caption: '職場の雰囲気',       category: 'スタッフ' },
]

export default function Gallery() {
  return (
    <>
      <PageHero
        en="Gallery"
        title="現場ギャラリー"
        subtitle="宝宮設備の仕事現場・スタッフ写真"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: 'ギャラリー' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="mb-10">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              宝宮設備の実際の現場・スタッフの様子をご覧ください。
              エアコン工事・給湯器交換・電気工事の現場から、倉庫・車両・社内の雰囲気まで、
              日々の仕事のリアルをお伝えします。
            </p>
          </div>

          {/* Full photo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-200 mb-14">
            {photos.map((photo) => (
              <div key={photo.src} className="relative overflow-hidden bg-white group">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="py-2 px-3 bg-white border-t border-gray-100">
                  <span className="text-[10px] text-orange-500 font-bold tracking-widest uppercase">{photo.category}</span>
                  <p className="text-xs text-gray-600 font-medium leading-tight">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured large photo */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              現場の一コマ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src="/images/photo-aircon-outdoor.jpg"
                  alt="エアコン室外機への専門的な作業"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="bg-navy px-8 py-10 flex flex-col justify-center">
                <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3">Real Work</p>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-4">
                  毎日の現場が、<br />プロへの道。
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  宝宮設備のスタッフは、神奈川県全域の住宅・マンション・店舗で毎日現場仕事をこなしています。
                  未経験から入社した方も、先輩の指導のもとで確実に技術を積み上げています。
                </p>
                <Link href="/entry" className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-orange-400 hover:text-orange-300 transition-colors">
                  応募する
                  <span className="block w-5 h-px bg-orange-400" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/work" className="btn-outline text-sm px-6 py-3.5">
              仕事内容を見る
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
