import type { Metadata } from 'next'
import Link from 'next/link'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '神奈川県で設備工事スタッフを募集',
  description:
    '神奈川県の設備工事求人なら宝宮設備へ。神奈川県全域の現場で活躍できます。手に職をつけたい方・現場仕事に興味がある方を神奈川で積極採用中。',
  keywords: ['神奈川 設備工事 求人', '神奈川県 現場仕事 求人', '神奈川 手に職 求人', '神奈川 未経験 設備工事'],
}

const areas = [
  { name: '厚木市', note: '拠点（本社）' },
  { name: '横浜市', note: '' },
  { name: '川崎市', note: '' },
  { name: '相模原市', note: '' },
  { name: '藤沢市', note: '' },
  { name: '平塚市', note: '' },
  { name: '小田原市', note: '' },
  { name: '大和市', note: '' },
  { name: '座間市', note: '' },
  { name: '海老名市', note: '' },
  { name: '綾瀬市', note: '' },
  { name: 'その他神奈川県内', note: '' },
]

export default function AreaKanagawa() {
  return (
    <>
      <PageHero
        en="Area"
        title="神奈川県で設備工事スタッフを募集"
        subtitle="神奈川県全域対応"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '神奈川エリア' }]}
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">
              神奈川県全域での求人募集
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              株式会社宝宮設備は、神奈川県厚木市を拠点として、神奈川県全域の現場を担当しています。
              横浜・川崎・相模原・藤沢・平塚・厚木・大和・座間・海老名など、神奈川県内の幅広いエリアに出動します。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              神奈川県での設備工事求人として、エアコン工事・給湯器交換・電気工事の3職種で採用しています。
              神奈川県での現場仕事に興味がある方、手に職をつけたい方を積極的に採用中です。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              会社車両の貸出があるため、現場へのアクセスは心配いりません。神奈川県内であれば、お住まいの場所を問わずご応募いただけます。社宅相談にも応じていますので、神奈川県への引越しを考えている方もぜひご連絡ください。
            </p>
          </div>

          {/* Area list */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              主な対応エリア
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className={`px-4 py-3 text-sm font-medium border ${
                    area.note ? 'border-navy bg-navy text-white' : 'border-gray-200 text-navy'
                  }`}
                >
                  {area.name}
                  {area.note && <span className="block text-xs font-normal mt-0.5 text-white/70">{area.note}</span>}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">※上記以外のエリアもご相談ください</p>
          </div>

          {/* Why Kanagawa */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              神奈川県で働く魅力
            </h2>
            <div className="space-y-0">
              {[
                { title: '人口が多く需要が豊富', body: '神奈川県は人口が多く、エアコン工事・給湯器交換・電気工事の需要が常に安定しています。多くの現場を経験できます。' },
                { title: '交通インフラが整備', body: '神奈川県内は鉄道・道路網が充実しており、車での移動がしやすい環境です。会社車両で効率よく現場を回れます。' },
                { title: '厚木を拠点に様々なエリアを経験', body: '厚木市の本社を拠点に、神奈川県各地の現場を担当します。多様な現場での経験が技術の幅を広げます。' },
                { title: '社宅制度で生活コストを抑えられる', body: '神奈川県は家賃が高めですが、社宅の相談に応じます。神奈川での生活スタートを会社がサポートします。' },
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

          {/* Related pages */}
          <div className="bg-gray-50 p-6 mb-10">
            <h3 className="text-sm font-bold text-navy mb-4 tracking-wide">関連ページ</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/area-atsugi', label: '厚木市の設備工事求人' },
                { href: '/recruit', label: '募集要項' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/entry', label: '応募フォーム' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="link-arrow text-sm">
                  {link.label} <span>→</span>
                </Link>
              ))}
            </div>
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
