import type { Metadata } from 'next'
import Link from 'next/link'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '募集要項｜神奈川県の設備工事スタッフ求人',
  description:
    '神奈川県の設備工事スタッフ求人の詳細です。未経験歓迎、資格取得支援、車両貸出あり。厚木市を拠点に神奈川県全域で活躍できます。18〜35歳の若手を積極採用中。',
  keywords: ['神奈川 設備工事 求人', '厚木 設備工事 求人', '未経験 設備工事 求人', '設備工事スタッフ 募集'],
}

export default function Recruit() {
  return (
    <>
      <PageHero
        en="Recruit"
        title="募集要項"
        subtitle="神奈川県の設備工事スタッフ求人"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '募集要項' }]}
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">
              神奈川県で、設備工事の技術を身につけませんか
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              株式会社宝宮設備は、神奈川県厚木市を拠点に、エアコン工事・給湯器交換・電気工事を手がける設備工事会社です。
              現場経験ゼロでも大丈夫。先輩スタッフが一から教えるので、初めて現場に立つ方でも安心してスタートできます。
              神奈川県全域の現場を担当するため、多様な経験を積みながら着実に技術を身につけられます。
              資格取得支援・車両貸出・社宅相談可能など、長く働ける環境を整えています。
            </p>
          </div>

          {/* Recruit table */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              募集詳細
            </h2>
            <table className="recruit-table">
              <tbody>
                <tr>
                  <th>職種</th>
                  <td>設備工事スタッフ（エアコン工事・給湯器交換・電気工事）</td>
                </tr>
                <tr>
                  <th>雇用形態</th>
                  <td>正社員</td>
                </tr>
                <tr>
                  <th>仕事内容</th>
                  <td>
                    神奈川県内の各現場でのエアコン工事・給湯器交換・電気工事。
                    先輩スタッフとペアで動きながら技術を習得していただきます。
                  </td>
                </tr>
                <tr>
                  <th>対象年齢</th>
                  <td>18歳〜35歳（若手歓迎）</td>
                </tr>
                <tr>
                  <th>経験・資格</th>
                  <td>未経験歓迎。普通自動車免許（AT可）があれば尚可</td>
                </tr>
                <tr>
                  <th>勤務地</th>
                  <td>神奈川県全域の各現場（現場直行・直帰あり）<br />拠点：神奈川県厚木市妻田南2丁目7-21</td>
                </tr>
                <tr>
                  <th>勤務時間</th>
                  <td>8:30〜17:00（7時会社集合 / 残業あり）</td>
                </tr>
                <tr>
                  <th>給与</th>
                  <td>月給 250,000円〜（未経験：研修1ヶ月後 250,000円〜 / 経験者：技術に応じて要相談）</td>
                </tr>
                <tr>
                  <th>昇給</th>
                  <td>技術・習熟度に応じて随時昇給あり</td>
                </tr>
                <tr>
                  <th>賞与</th>
                  <td>夏季手当あり</td>
                </tr>
                <tr>
                  <th>試用期間</th>
                  <td>1ヶ月（本採用と同条件）</td>
                </tr>
                <tr>
                  <th>休日</th>
                  <td>月〜土勤務（夏季・冬季・お盆・年末年始休暇あり）</td>
                </tr>
                <tr>
                  <th>福利厚生</th>
                  <td>
                    社会保険完備（健康保険・厚生年金・雇用保険・労災保険）<br />
                    車両貸出 / 昼食補助 / 資格取得支援（会社負担）/ 制服貸与 / 交通費支給 / 深夜手当・休日手当 / 社宅相談可能
                  </td>
                </tr>
                <tr>
                  <th>応募方法</th>
                  <td>応募フォーム・LINE・お電話にて受け付けております</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Keyword-rich body text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-base font-bold text-navy mb-3 pb-2 border-b border-gray-200">
                神奈川県での設備工事求人について
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                宝宮設備の設備工事求人は、神奈川県全域を対象としています。厚木市を拠点として、横浜・川崎・相模原など神奈川県各地の現場で働けます。
                現場直行・直帰が可能なため、通勤に使う車両も貸出しします。神奈川での設備工事求人をお探しの方にとって、働きやすい環境です。
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-navy mb-3 pb-2 border-b border-gray-200">
                未経験からのスタートを全力サポート
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                設備工事の未経験求人として、宝宮設備は入社後の研修体制を整えています。
                最初は先輩スタッフとペアで動き、作業の流れや道具の使い方を実際の現場で覚えていただきます。
                焦らず、着実に成長できる環境を用意しています。
              </p>
            </div>
          </div>

          {/* Internal links */}
          <div className="bg-gray-50 p-6 sm:p-8">
            <h3 className="text-sm font-bold text-navy tracking-wide mb-4">詳細ページ</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/aircon-work', label: 'エアコン工事スタッフ求人' },
                { href: '/water-heater-work', label: '給湯器交換スタッフ求人' },
                { href: '/electrical-work', label: '電気工事スタッフ求人' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生について' },
                { href: '/entry', label: '応募フォーム' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="link-arrow text-sm">
                  {link.label} <span>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
