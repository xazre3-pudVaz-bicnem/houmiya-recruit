import type { Metadata } from 'next'
import Link from 'next/link'
import EntrySection from '@/components/EntrySection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: '福利厚生・働く環境｜社宅相談・車両貸出・資格取得支援あり',
  description:
    '宝宮設備の福利厚生を詳しく紹介。社宅あり求人、車両貸出、資格取得支援が充実。神奈川県の設備工事求人として、長く働けるサポート体制を整えています。',
  keywords: ['社宅あり 求人 神奈川', '車両貸出 求人', '資格取得支援 求人 神奈川', '設備工事 福利厚生'],
}

const welfareItems = [
  {
    title: '社会保険完備',
    subtitle: 'Social Insurance',
    body: '健康保険・厚生年金・雇用保険・労災保険をすべて完備しています。社会保険に加入することで、医療費の自己負担軽減・老後の年金受給・失業時の給付など、生活の安心を得られます。安心して長く働ける基盤として、宝宮設備では全スタッフが社会保険に加入しています。',
    detail: '健康保険 / 厚生年金保険 / 雇用保険 / 労働者災害補償保険',
  },
  {
    title: '車両貸出',
    subtitle: 'Company Vehicle',
    body: '現場への移動・現場間の移動に使用できる会社車両を貸出します。マイカーがなくても仕事ができるため、「車を持っていない」という方でも安心です。神奈川県全域の現場を担当するため、車両があると移動の自由度が大きく上がります。普通自動車免許（AT可）があればご利用いただけます。',
    detail: '現場移動用車両 / 直行直帰対応',
  },
  {
    title: '昼食補助',
    subtitle: 'Lunch Allowance',
    body: '毎日の昼食代を会社が一部補助します。現場仕事では体力を使うため、しっかり食事を取ることが大切です。食費の負担を軽減することで、生活コストを抑えながら働けます。現場近くのお弁当屋さんや飲食店でランチを取ることが多く、スタッフ同士のコミュニケーションの場にもなっています。',
    detail: '毎日の昼食代を一部補助',
  },
  {
    title: '資格取得支援',
    subtitle: 'Certification Support',
    body: '電気工事士・エアコン関連資格など、仕事に役立つ資格取得を会社が費用面で全額サポートします。受験費用・テキスト代・講習費用などを会社が負担するため、自己負担なしで資格取得を目指せます。資格を取得することで担当できる工事の範囲が広がり、収入アップやキャリアアップにもつながります。',
    detail: '受験費用・テキスト代 会社負担 / 業務時間内に学習機会確保',
  },
  {
    title: '社宅相談可能',
    subtitle: 'Company Housing',
    body: '「神奈川県に引越ししたい」「家賃を抑えて働きたい」という方には、社宅の相談に応じます。特に県外からの転入者や、住む場所が決まっていない方に活用いただける制度です。まずはお気軽にご相談ください。詳細は面談時にご説明します。',
    detail: '詳細は面談にてご案内します',
  },
]

export default function Welfare() {
  return (
    <>
      <PageHero
        en="Welfare"
        title="福利厚生・働く環境"
        subtitle="社宅相談・車両貸出・資格取得支援あり"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '福利厚生' }]}
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="mb-10">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              宝宮設備は、スタッフが長く安心して働けるよう、福利厚生の充実に力を入れています。
              資格取得支援・車両貸出・社宅相談など、現場職ならではの不安をひとつひとつ解消できる制度を整えています。
              神奈川県での設備工事求人として、生活面のサポートも大切にしています。
            </p>
          </div>

          {/* Welfare list */}
          <div className="space-y-0 mb-14">
            {welfareItems.map((item) => (
              <div key={item.title} className="border-t border-gray-200 py-10 first:border-t-0">
                <div className="flex flex-col lg:flex-row lg:gap-16">
                  <div className="lg:w-1/3 mb-4 lg:mb-0">
                    <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">{item.subtitle}</p>
                    <h2 className="text-lg font-black text-navy tracking-tight">{item.title}</h2>
                    <div className="line-blue mt-3" />
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{item.body}</p>
                    <div className="bg-gray-50 px-4 py-3">
                      <p className="text-xs text-gray-500 tracking-wide">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary table */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              福利厚生まとめ
            </h2>
            <table className="recruit-table">
              <tbody>
                <tr><th>社会保険</th><td>健康保険・厚生年金・雇用保険・労災保険 完備</td></tr>
                <tr><th>車両貸出</th><td>現場移動用の会社車両あり（普通免許AT可）</td></tr>
                <tr><th>昼食補助</th><td>毎日の昼食代を一部補助</td></tr>
                <tr><th>資格取得支援</th><td>受験費用・テキスト代 会社全額負担</td></tr>
                <tr><th>社宅相談</th><td>詳細は面談にてご案内（相談可）</td></tr>
                <tr><th>チーム環境</th><td>20代中心の若いスタッフが活躍中</td></tr>
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
