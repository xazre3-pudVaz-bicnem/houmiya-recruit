import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '仕事内容｜エアコン工事・給湯器交換・電気工事の仕事',
  description:
    '宝宮設備のエアコン工事・給湯器交換・電気工事スタッフとしての仕事内容を紹介。神奈川県全域での求人で、未経験から技術を身につけられます。',
  keywords: ['エアコン工事 求人 神奈川', '給湯器交換 求人 神奈川', '電気工事 求人 神奈川', '設備工事 仕事内容'],
}

const works = [
  {
    num: '01',
    slug: '/aircon-work',
    title: 'エアコン工事',
    subtitle: 'Air Conditioning Installation',
    photo: '/images/photo-aircon-outdoor.jpg',
    body: `家庭用・業務用エアコンの取付・交換・撤去工事を担当します。神奈川県内の住宅・マンション・店舗・オフィスなど、様々な現場に出向きます。

エアコン工事は夏季を中心に繁忙期があり、多くの現場を経験できます。配管の取り回し・室外機の設置・試運転まで一連の作業を習得することで、エアコン職人としての確かな技術が身につきます。未経験からでも3〜6ヶ月で一人前の作業ができるようになるスタッフが多く、成長スピードを実感できる仕事です。`,
    tags: ['エアコン取付', '室外機設置', '配管工事', '未経験歓迎'],
  },
  {
    num: '02',
    slug: '/water-heater-work',
    title: '給湯器交換',
    subtitle: 'Water Heater Replacement',
    photo: '/images/photo-customer-service.jpg',
    body: `老朽化した給湯器の撤去・新規給湯器の取付工事を担当します。住宅・マンションのお風呂・台所・洗面所などで使用される給湯器を適切に交換します。

給湯器交換は生活に欠かせない設備の工事であり、お客様からの感謝を直接受けることの多い仕事です。ガス・水道・電気が絡む複合的な工事のため、幅広い知識を身につけられます。神奈川県内の住宅設備求人として、安定した需要があります。`,
    tags: ['給湯器取付', '住宅設備', '接客対応', '成長できる'],
  },
  {
    num: '03',
    slug: '/electrical-work',
    title: '電気工事',
    subtitle: 'Electrical Work',
    photo: '/images/photo-aircon-balcony.jpg',
    body: `配線工事・照明設置・分電盤の工事など、電気に関わる様々な工事を担当します。住宅・店舗・オフィスの電気設備を安全に施工します。

電気工事士の資格は会社が費用を全額サポートして取得をアシストします。資格を取得することで収入アップや担当できる工事の幅が広がります。神奈川県内の電気工事求人として、資格取得支援が充実しているのが宝宮設備の特徴です。`,
    tags: ['電気工事士', '資格取得支援', '配線工事', 'キャリアアップ'],
  },
]

export default function Work() {
  return (
    <>
      <PageHero
        en="Work"
        title="仕事内容"
        subtitle="エアコン工事・給湯器交換・電気工事"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '仕事内容' }]}
      />

      {/* Intro */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            宝宮設備では、エアコン工事・給湯器交換・電気工事の3分野で求人を行っています。
            いずれも未経験からのスタートが可能で、神奈川県全域の現場で多様な経験を積めます。
            資格取得支援制度も整っているため、働きながらスキルアップを目指せます。
          </p>
        </div>
      </section>

      {/* Photo strip */}
      <div className="grid grid-cols-3 gap-px bg-gray-200">
        <div className="relative h-44 sm:h-64 overflow-hidden">
          <Image src="/images/photo-aircon-outdoor.jpg" alt="エアコン室外機工事" fill className="object-cover" sizes="33vw" />
        </div>
        <div className="relative h-44 sm:h-64 overflow-hidden">
          <Image src="/images/photo-aircon-balcony.jpg" alt="バルコニーでの配管工事" fill className="object-cover" sizes="33vw" />
        </div>
        <div className="relative h-44 sm:h-64 overflow-hidden">
          <Image src="/images/photo-customer-service.jpg" alt="お客様への引き渡し" fill className="object-cover" sizes="33vw" />
        </div>
      </div>

      {/* Work sections - alternating layout */}
      <div className="bg-gray-50">
        {works.map((work, i) => (
          <div
            key={work.num}
            className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Photo */}
            <div className="lg:w-3/5 h-64 sm:h-96 lg:h-auto lg:min-h-[420px] relative overflow-hidden">
              <Image
                src={work.photo}
                alt={`${work.title}の現場`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>

            {/* Text */}
            <div className={`lg:w-2/5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} px-6 sm:px-10 lg:px-14 py-10 lg:py-16 flex flex-col justify-center`}>
              <span className="section-number mb-2">{work.num}</span>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">{work.subtitle}</p>
              <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mb-5">
                {work.title}
              </h2>
              <div className="text-sm text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                {work.body}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {work.tags.map((tag) => (
                  <span key={tag} className="tag-badge text-xs">{tag}</span>
                ))}
              </div>
              <Link href={work.slug} className="link-arrow text-sm">
                {work.title}の詳細を見る <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Links */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-500 mb-6">気になる仕事内容があればお気軽にご相談ください</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/recruit" className="btn-outline text-sm px-8 py-3.5">
              募集要項を見る
            </Link>
            <Link href="/entry" className="btn-primary text-sm px-8 py-3.5">
              応募フォームへ
            </Link>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
