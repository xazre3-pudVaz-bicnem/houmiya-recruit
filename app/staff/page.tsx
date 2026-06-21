import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'スタッフ紹介・職場環境｜厚木市の設備工事会社 宝宮設備の仲間たち',
  description:
    '厚木市・神奈川の設備工事会社 宝宮設備のスタッフ・職場環境を紹介。20代中心の若いチームで、エアコン工事・給湯器交換・電気工事に取り組んでいます。未経験入社のスタッフも多数活躍中。',
  keywords: ['宝宮設備 スタッフ', '設備工事 職場環境 厚木市', '宝宮設備 会社紹介', '厚木市 設備工事 スタッフ', '厚木市 求人 職場'],
  openGraph: {
    title: 'スタッフ紹介・職場環境｜宝宮設備',
    description: '20代中心の若いチームで神奈川県全域を動かす設備工事会社・宝宮設備のスタッフを紹介。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/staff' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: 'スタッフ紹介', item: 'https://www.houmiya-recruit.com/staff' },
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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

          {/* Voice section - staff voices */}
          <div className="mb-14">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              スタッフの声
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              宝宮設備で実際に働くスタッフのリアルな声を紹介します。未経験からスタートしたスタッフが多く、どのように技術を身につけてきたかを語ってもらいました。
            </p>
            <div className="space-y-0">
              {[
                {
                  role: '現場スタッフ（入社2年目）',
                  title: '前職は全く別の仕事。でも今は「手に職」がある。',
                  body: '入社前はエアコンの仕組みなんて全然知りませんでした。配管？フレア？という状態です。でも現場で先輩に教えてもらいながら作業を続けていたら、気づいたら一人でこなせるようになっていました。資格の勉強も先輩が「ここ重要だよ」と教えてくれるので、テキストだけより全然頭に入ります。今は電気工事士の資格も取れて、できる仕事の幅が増えました。',
                  since: '未経験入社',
                },
                {
                  role: '現場スタッフ（入社1年半）',
                  title: 'AT限定しか持ってなかったけど、普通に働けています。',
                  body: '「AT限定でも大丈夫」と聞いて入社しましたが、本当に問題なかったです。会社の軽バンはATなので普通に運転できます。現場に行くたびに神奈川県内のいろんな地域を走れるのが意外と楽しくて。お客様からありがとうと言ってもらえる仕事なので、体力的に大変でも達成感があります。17時に終われるのも、プライベートの予定が立てやすくて助かっています。',
                  since: '未経験入社',
                },
                {
                  role: '現場スタッフ（入社3年目）',
                  title: '給湯器交換から始めて、今は電気工事まで担当できる。',
                  body: '最初は給湯器交換の補助から始めました。最初の1ヶ月は先輩の横で見て覚えることに徹しました。ガスと水道と電気が一緒に絡む仕事なので、慣れるまで時間がかかりましたが、3ヶ月目には一人で基本的な交換ができるようになりました。今は電気工事士も取得して、エアコン専用回路の新設まで対応しています。給与も入社時よりしっかり上がりました。',
                  since: '未経験入社',
                },
              ].map((voice, i) => (
                <div key={i} className="border-t border-gray-100 py-8 first:border-t-0">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                    <div className="sm:w-1/3">
                      <span className="text-xs font-bold text-orange-500 tracking-wider block mb-1">{voice.role}</span>
                      <h3 className="text-sm font-black text-navy leading-snug">{voice.title}</h3>
                      <div className="mt-3 inline-block">
                        <span className="text-[10px] bg-navy text-white px-2 py-1 font-bold tracking-widest">{voice.since}</span>
                      </div>
                    </div>
                    <div className="sm:w-2/3">
                      <p className="text-sm text-gray-600 leading-relaxed">{voice.body}</p>
                    </div>
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
                  body: 'マイカーがなくても安心。現場移動用の車両を会社が用意します。AT限定でも対応できる軽バンが中心です。',
                },
                {
                  title: '昼食補助あり',
                  body: '毎日の昼食代を会社が一部補助。現場近くのお弁当屋やランチをみんなで楽しむのが日課です。',
                },
                {
                  title: '資格取得サポート',
                  body: '電気工事士など、仕事に役立つ資格の取得費用を会社が全額負担。働きながら資格が取れます。',
                },
                {
                  title: '残業なし（8:30〜17:00）',
                  body: '1日の件数は17時に終わるよう管理しています。仕事後の時間を勉強・趣味・家族のために使えます。',
                },
                {
                  title: '先輩が教える文化',
                  body: '「見て覚えろ」ではなく、先輩が言語化して教えます。わからないことをその場で聞ける空気があります。',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white px-6 py-6 border-l-2 border-orange-500">
                  <h3 className="text-sm font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team culture */}
          <div className="mb-14">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              宝宮設備の文化・大切にしていること
            </h2>
            <div className="space-y-5">
              {[
                { title: '丁寧さを最優先する', body: 'スピードより丁寧さを優先します。「早くやった」より「きれいに仕上げた」を評価します。お客様の生活空間に入る仕事だからこそ、丁寧さが信頼につながります。' },
                { title: '安全を絶対に省略しない', body: 'どんなに慣れてきても安全確認は省略しない。これは全スタッフ共通のルールです。ガス・電気・高所と複数のリスクが現場にある以上、安全第一が最優先です。' },
                { title: '成長を正当に評価する', body: '技術が上がれば給与も上がる。資格を取れば月給に反映される。「頑張っても報われない」環境を作らないことを意識しています。' },
                { title: 'わからないことを言える空気をつくる', body: 'わからないことをわからないと言える職場であることが、実は安全にもつながります。「ちょっと待って、確認します」と言える職場を大切にしています。' },
              ].map((item) => (
                <div key={item.title} className="reason-row">
                  <div className="flex-shrink-0"><div className="w-2 h-2 rounded-full bg-navy mt-1.5" /></div>
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily scene photos */}
          <div className="mb-14">
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

          {/* Company data */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              会社情報
            </h2>
            <table className="recruit-table">
              <tbody>
                <tr><th>会社名</th><td>株式会社宝宮設備</td></tr>
                <tr><th>所在地</th><td>神奈川県厚木市温水西1-4-39</td></tr>
                <tr><th>事業内容</th><td>エアコン工事・給湯器交換・電気工事（神奈川県全域対応）</td></tr>
                <tr><th>採用エリア</th><td>神奈川県全域</td></tr>
                <tr><th>電話番号</th><td>046-205-4558</td></tr>
                <tr><th>メールアドレス</th><td>homiya@houmiyasetubi.com</td></tr>
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href="/welfare" className="btn-outline text-sm px-6 py-3.5">
              福利厚生を見る
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
                { href: '/gallery',     label: '現場ギャラリー' },
                { href: '/day',         label: '1日の流れ' },
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
