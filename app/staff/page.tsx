import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'スタッフ紹介・会社紹介｜宝宮設備の職場環境',
  description:
    '宝宮設備のスタッフ・職場環境を紹介。20代中心の若いチームで、エアコン工事・給湯器交換・電気工事に取り組む神奈川県の設備工事会社です。',
  keywords: ['宝宮設備 スタッフ', '設備工事 職場環境', '宝宮設備 会社紹介', '厚木 設備工事 スタッフ'],
}

const teamPhotos = [
  { src: '/images/photo-aircon-install.jpg',      alt: 'エアコン取付作業中のスタッフ',    caption: '現場スタッフ',       objectPos: 'object-top' },
  { src: '/images/photo-aircon-complete-1.jpg',   alt: '工事完了を喜ぶスタッフ',          caption: '完工の達成感',       objectPos: 'object-top' },
  { src: '/images/photo-customer-service.jpg',    alt: 'お客様へ説明するスタッフ',        caption: 'お客様対応',         objectPos: 'object-center' },
  { src: '/images/photo-staff-office.jpg',        alt: 'オフィスで業務するスタッフ',      caption: '事務スタッフ',       objectPos: 'object-top' },
  { src: '/images/photo-warehouse-staff.jpg',     alt: '倉庫前のスタッフ',               caption: '倉庫担当',           objectPos: 'object-center' },
  { src: '/images/photo-vehicle-white.jpg',       alt: '社用車とスタッフ',               caption: '出発前の一コマ',     objectPos: 'object-center' },
]

export default function Staff() {
  return (
    <>
      <PageHero
        en="Our Team"
        title="スタッフ・会社紹介"
        subtitle="宝宮設備の職場環境"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: 'スタッフ紹介' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Company intro */}
          <div className="flex flex-col lg:flex-row gap-0 overflow-hidden mb-14">
            <div className="lg:w-1/2 relative h-72 lg:h-auto overflow-hidden">
              <Image
                src="/images/photo-staff-meeting.jpg"
                alt="スタッフ同士の打合せ"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="lg:w-1/2 bg-navy px-8 sm:px-12 py-10 sm:py-14 flex flex-col justify-center">
              <p className="text-[10px] tracking-widest text-white/40 uppercase mb-4">About Us</p>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-5">
                20代中心の若いチームで、<br />
                神奈川県全域を動かしています。
              </h2>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                宝宮設備は、神奈川県厚木市を拠点とする設備工事会社です。エアコン工事・給湯器交換・電気工事を専門とし、
                神奈川県全域のお客様の暮らしを支えています。
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                スタッフの多くは20代。明るく元気なメンバーが多く、チームワークと向上心を大切にした職場です。
                未経験から入社したスタッフも多く、仲間と一緒に成長できる環境が整っています。
              </p>
            </div>
          </div>

          {/* Team photos grid */}
          <div className="mb-14">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              スタッフの様子
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200">
              {teamPhotos.map((photo) => (
                <div key={photo.src} className="relative overflow-hidden group">
                  <div className="relative h-52 sm:h-64">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className={`object-cover ${photo.objectPos} transition-transform duration-500 group-hover:scale-105`}
                      sizes="(min-width: 640px) 33vw, 50vw"
                    />
                  </div>
                  <div className="py-2 px-3 bg-white">
                    <p className="text-xs text-gray-500 font-medium">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Working style */}
          <div className="mb-14">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              働く環境の特徴
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100">
              {[
                {
                  title: '現場直行・直帰',
                  body: '毎日会社に来なくてOK。会社車両で現場へ直接向かいます。通勤の負担が少なく、効率的に働けます。',
                },
                {
                  title: '社用車完備',
                  body: 'マイカーがなくても安心。現場移動用の車両を会社が用意します。駐車場確保の心配も不要です。',
                },
                {
                  title: '昼食補助あり',
                  body: '毎日の昼食代を会社が一部補助。現場近くのお弁当屋やランチをみんなで楽しむのが日課です。',
                },
                {
                  title: '資格取得サポート',
                  body: '電気工事士など、仕事に役立つ資格の取得費用を会社が全額負担。働きながら資格が取れます。',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white px-6 py-6 border-l-2 border-orange-500">
                  <h3 className="text-sm font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Daily scene photos */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              1日の現場風景
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200">
              {[
                { src: '/images/photo-vehicle-loading.jpg',     alt: '朝の積み込み',         label: '朝の準備' },
                { src: '/images/photo-aircon-outdoor.jpg',      alt: '室外機への作業',       label: '午前の現場' },
                { src: '/images/photo-aircon-balcony.jpg',      alt: 'バルコニー工事',       label: '配管工事' },
                { src: '/images/photo-aircon-complete-2.jpg',   alt: '工事完了確認',         label: '完工確認' },
              ].map((p) => (
                <div key={p.src} className="relative overflow-hidden">
                  <div className="relative h-36 sm:h-48">
                    <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(min-width: 640px) 25vw, 50vw" />
                  </div>
                  <p className="text-[10px] text-gray-500 text-center py-1.5 bg-white tracking-wider">{p.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/welfare" className="btn-outline text-sm px-6 py-3.5">
              福利厚生を見る
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
