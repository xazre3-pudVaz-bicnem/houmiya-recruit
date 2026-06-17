import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import { knowledge, getKnowledgeBySlug } from '@/data/knowledge'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return knowledge.map((k) => ({ slug: k.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getKnowledgeBySlug(params.slug)
  if (!article) return { title: 'Not Found' }
  return {
    title: `${article.title}｜転職ナレッジ`,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `https://www.houmiya-recruit.com/knowledge/${article.slug}` },
    openGraph: {
      title: `${article.title}｜宝宮設備 採用サイト`,
      description: article.description,
      url: `https://www.houmiya-recruit.com/knowledge/${article.slug}`,
      locale: 'ja_JP',
      type: 'article',
    },
  }
}

export default function KnowledgeDetailPage({ params }: Props) {
  const article = getKnowledgeBySlug(params.slug)
  if (!article) notFound()

  const relatedArticles = article.relatedSlugs
    .map((slug) => knowledge.find((k) => k.slug === slug))
    .filter(Boolean)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: { '@type': 'Organization', name: '株式会社宝宮設備' },
    publisher: {
      '@type': 'Organization',
      name: '株式会社宝宮設備',
      logo: { '@type': 'ImageObject', url: 'https://www.houmiya-recruit.com/images/logo.png' },
    },
    url: `https://www.houmiya-recruit.com/knowledge/${article.slug}`,
    mainEntityOfPage: `https://www.houmiya-recruit.com/knowledge/${article.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
      { '@type': 'ListItem', position: 2, name: '転職ナレッジ', item: 'https://www.houmiya-recruit.com/knowledge' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://www.houmiya-recruit.com/knowledge/${article.slug}` },
    ],
  }

  const faqSchema = article.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <PageHero
        en="Knowledge"
        title={article.title}
        subtitle={article.categoryLabel}
        breadcrumbs={[
          { href: '/', label: 'トップ' },
          { href: '/knowledge', label: '転職ナレッジ' },
          { label: article.title },
        ]}
      />

      <article className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Meta info */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="inline-block px-2.5 py-1 text-[10px] font-black tracking-widest uppercase text-white"
              style={{ background: '#1a2642' }}
            >
              {article.category.toUpperCase()}
            </span>
            <span className="text-xs text-gray-400">{article.categoryLabel}</span>
            <span className="text-xs text-gray-300">|</span>
            <time className="text-xs text-gray-400">{article.publishedAt}</time>
          </div>

          {/* Lead */}
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-10 border-l-2 border-orange-400 pl-4">
            {article.lead}
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {article.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-base sm:text-lg font-black text-navy mb-4 pb-2 border-b border-gray-200">
                  {section.h2}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-gray-700">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 p-5 sm:p-6 bg-gray-50 border border-gray-200">
            <p className="text-[10px] font-black tracking-widest uppercase text-orange-500 mb-2">Summary</p>
            <p className="text-sm leading-relaxed text-gray-700">{article.summary}</p>
          </div>

          {/* FAQ */}
          {article.faq.length > 0 && (
            <div className="mt-14">
              <h2 className="text-base font-black text-navy mb-6 pb-2 border-b border-gray-200">
                よくある質問
              </h2>
              <div className="space-y-6">
                {article.faq.map((item, i) => (
                  <div key={i}>
                    <p className="text-sm font-black text-navy mb-2 flex gap-2">
                      <span className="shrink-0 w-5 h-5 flex items-center justify-center bg-navy text-white text-[10px] font-black">Q</span>
                      {item.q}
                    </p>
                    <div className="pl-7">
                      <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-14 p-6 sm:p-8 bg-navy text-white">
            <p className="text-[10px] tracking-widest uppercase text-white/40 mb-3">Entry</p>
            <h2 className="text-base sm:text-lg font-black mb-3">
              宝宮設備では未経験・経験者ともに募集中
            </h2>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              月給25万〜70万円・残業なし・資格取得支援全額会社負担・AT限定可。<br />
              まずは気軽にご応募ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/entry" className="btn-primary text-sm px-6 py-4 text-center">
                応募フォームへ
              </Link>
              <Link href="/recruit" className="block text-center py-4 px-6 text-sm font-bold border border-white/20 text-white/70 hover:text-white transition-colors">
                募集要項を見る
              </Link>
            </div>
          </div>

          {/* Related pages */}
          {article.relatedPages.length > 0 && (
            <div className="mt-10">
              <h2 className="text-sm font-black text-navy mb-4">関連ページ</h2>
              <div className="flex flex-wrap gap-2">
                {article.relatedPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="text-xs border border-gray-200 px-3 py-2 text-gray-600 hover:border-gray-400 hover:text-navy transition-colors"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-10">
              <h2 className="text-sm font-black text-navy mb-4 pb-2 border-b border-gray-100">関連記事</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedArticles.map((rel) => {
                  if (!rel) return null
                  return (
                    <Link
                      key={rel.slug}
                      href={`/knowledge/${rel.slug}`}
                      className="group block border border-gray-100 hover:border-gray-300 transition-colors p-4"
                    >
                      <p className="text-[10px] text-orange-500 font-bold tracking-widest uppercase mb-1.5">
                        {rel.categoryLabel}
                      </p>
                      <p className="text-xs font-black text-navy leading-snug group-hover:text-navy/70 transition-colors">
                        {rel.title}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Back */}
          <div className="mt-10">
            <Link href="/knowledge" className="text-xs text-gray-500 hover:text-navy transition-colors flex items-center gap-1.5">
              ← 転職ナレッジ一覧へ
            </Link>
          </div>
        </div>
      </article>

      <EntrySection />
    </>
  )
}
