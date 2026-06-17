import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import { columns, getColumnBySlug } from '@/data/columns'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return columns.map((col) => ({ slug: col.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const col = getColumnBySlug(params.slug)
  if (!col) return { title: 'Not Found' }
  return {
    title: `${col.title}｜求人コラム`,
    description: col.description,
    keywords: col.keywords,
    alternates: { canonical: `https://www.houmiya-recruit.com/column/${col.slug}` },
    openGraph: {
      title: `${col.title}｜株式会社宝宮設備 採用サイト`,
      description: col.description,
      url: `https://www.houmiya-recruit.com/column/${col.slug}`,
      locale: 'ja_JP',
      type: 'article',
    },
  }
}

export default function ColumnDetailPage({ params }: Props) {
  const col = getColumnBySlug(params.slug)
  if (!col) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: col.title,
    description: col.description,
    datePublished: col.publishedAt,
    author: { '@type': 'Organization', name: '株式会社宝宮設備' },
    publisher: {
      '@type': 'Organization',
      name: '株式会社宝宮設備',
      logo: { '@type': 'ImageObject', url: 'https://www.houmiya-recruit.com/images/logo.png' },
    },
    url: `https://www.houmiya-recruit.com/column/${col.slug}`,
    mainEntityOfPage: `https://www.houmiya-recruit.com/column/${col.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'トップ', item: 'https://www.houmiya-recruit.com/' },
      { '@type': 'ListItem', position: 2, name: '求人コラム', item: 'https://www.houmiya-recruit.com/column' },
      { '@type': 'ListItem', position: 3, name: col.title, item: `https://www.houmiya-recruit.com/column/${col.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        en="Column"
        title={col.title}
        subtitle={col.keywords[0]}
        breadcrumbs={[
          { href: '/', label: 'トップ' },
          { href: '/column', label: '求人コラム' },
          { label: col.title },
        ]}
      />

      {/* Article body */}
      <article className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">

          {/* Meta bar */}
          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
            <time className="text-xs text-slate-400 font-medium">
              {col.publishedAt.replace(/-/g, '.')}
            </time>
            <span className="text-xs text-orange-500 font-bold bg-orange-50 px-2 py-0.5">
              {col.category}
            </span>
          </div>

          {/* Lead */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-12 font-medium">
            {col.lead}
          </p>

          {/* Sections */}
          <div className="space-y-12">
            {col.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-lg sm:text-xl font-black text-slate-800 mb-4 pb-2 border-l-4 border-orange-500 pl-4">
                  {section.h2}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 p-6 sm:p-8 bg-slate-50 border-l-4 border-orange-500">
            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-orange-500 mb-3">まとめ</p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {col.summary}
            </p>
          </div>

          {/* CTA to apply */}
          <div className="mt-12 p-6 sm:p-8 bg-navy text-white">
            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-white/40 mb-3">採用情報</p>
            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
              宝宮設備では、未経験から設備工事・給湯器工事に挑戦したい方を募集しています。
              仕事内容や働き方を詳しく知りたい方は、採用情報ページをご確認ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/recruit"
                className="inline-flex items-center justify-center gap-2 text-sm font-black tracking-widest px-6 py-3.5 bg-orange-500 text-white hover:bg-orange-400 transition-colors"
              >
                採用情報を見る →
              </Link>
              <Link
                href="/entry"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-widest px-6 py-3.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
              >
                応募フォームへ
              </Link>
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400 tracking-widest uppercase mb-4">関連ページ</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { href: '/work', label: '仕事内容を見る' },
                { href: '/welfare', label: '福利厚生を見る' },
                { href: '/beginner', label: '未経験の方へ' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium px-4 py-3 border border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-500 transition-colors text-center"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>

          {/* Back to list */}
          <div className="mt-8">
            <Link
              href="/column"
              className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 6H2M5 2.5L1.5 6 5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              コラム一覧に戻る
            </Link>
          </div>
        </div>
      </article>

      <EntrySection />
    </>
  )
}
