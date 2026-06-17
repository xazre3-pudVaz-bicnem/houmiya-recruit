import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import { knowledge, knowledgeCategoryLabels } from '@/data/knowledge'

export const metadata: Metadata = {
  title: '設備工事 転職・求人ナレッジ｜宝宮設備 採用サイト',
  description:
    '設備工事の転職・求人に関する情報をまとめたナレッジページ。未経験からの始め方・資格・仕事内容・年収・将来性など23記事。神奈川の設備工事求人・宝宮設備。',
  keywords: ['設備工事 転職 情報', '設備工事 未経験 資格', '設備工事 求人 ナレッジ'],
  openGraph: {
    title: '設備工事 転職・求人ナレッジ｜宝宮設備',
    description: '設備工事への転職・就職を考える方向けの解説記事を23本掲載。',
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: { canonical: 'https://www.houmiya-recruit.com/knowledge' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
    { '@type': 'ListItem', position: 2, name: '転職ナレッジ', item: 'https://www.houmiya-recruit.com/knowledge' },
  ],
}

const categories = Object.entries(knowledgeCategoryLabels)

export default function KnowledgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        en="Knowledge"
        title="転職ナレッジ"
        subtitle="設備工事の転職・求人を考える方へ"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '転職ナレッジ' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-12 max-w-2xl">
            設備工事への転職・就職を検討している方へ。未経験からの始め方・資格・仕事内容・年収・将来性・求人条件まで、知りたいテーマを記事で解説しています。
          </p>

          {categories.map(([catKey, catLabel]) => {
            const articles = knowledge.filter((k) => k.category === catKey)
            if (articles.length === 0) return null
            return (
              <div key={catKey} className="mb-14">
                <h2 className="text-base font-black text-navy tracking-tight mb-6 pb-3 border-b border-gray-200 flex items-center gap-3">
                  <span
                    className="inline-block px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase"
                    style={{ background: '#1a2642', color: 'white' }}
                  >
                    {catKey.toUpperCase()}
                  </span>
                  {catLabel}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/knowledge/${article.slug}`}
                      className="group block border border-gray-100 hover:border-gray-300 transition-colors p-5"
                    >
                      <p className="text-[10px] text-orange-500 font-bold tracking-widest uppercase mb-2">
                        {article.categoryLabel}
                      </p>
                      <h3 className="text-sm font-black text-navy leading-snug mb-2 group-hover:text-navy/70 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {article.lead}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-orange-500">
                        詳しく読む
                        <span className="block w-4 h-px bg-orange-500" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="mt-12 p-6 sm:p-8 bg-gray-50 border border-gray-100">
            <h2 className="text-sm font-black text-navy mb-3">宝宮設備について詳しく見る</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/recruit" className="btn-outline text-xs px-4 py-2.5">募集要項</Link>
              <Link href="/beginner" className="btn-outline text-xs px-4 py-2.5">未経験の方へ</Link>
              <Link href="/welfare" className="btn-outline text-xs px-4 py-2.5">福利厚生</Link>
              <Link href="/work" className="btn-outline text-xs px-4 py-2.5">仕事内容</Link>
              <Link href="/entry" className="btn-primary text-xs px-4 py-2.5">応募フォーム</Link>
            </div>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
