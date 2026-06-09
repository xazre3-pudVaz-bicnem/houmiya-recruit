import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import {
  fetchPostBySlug,
  getFeaturedImageUrl,
  getFeaturedImageAlt,
  getCategories,
  formatDate,
  stripHtml,
  decodeHtml,
} from '@/lib/wordpress'

export const revalidate = 60

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchPostBySlug(params.slug)
  if (!post) {
    return { title: '記事が見つかりません｜採用ブログ' }
  }

  const title = decodeHtml(post.title.rendered)
  const description = stripHtml(post.excerpt.rendered).slice(0, 120) ||
    '株式会社宝宮設備の採用ブログ記事です。'
  const image = getFeaturedImageUrl(post)

  return {
    title: `${title}｜採用ブログ`,
    description,
    openGraph: {
      title: `${title}｜株式会社宝宮設備 採用ブログ`,
      description,
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
      locale: 'ja_JP',
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await fetchPostBySlug(params.slug)

  if (!post) notFound()

  const title = decodeHtml(post.title.rendered)
  const img = getFeaturedImageUrl(post)
  const imgAlt = getFeaturedImageAlt(post)
  const cats = getCategories(post)

  return (
    <>
      <PageHero
        en="Blog"
        title={title}
        breadcrumbs={[
          { href: '/', label: 'トップ' },
          { href: '/blog', label: '採用ブログ' },
          { label: title },
        ]}
      />

      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">

          {/* Article meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-slate-100">
            <time
              dateTime={post.date}
              className="text-sm text-slate-400 font-medium tracking-wide"
            >
              {formatDate(post.date)}
            </time>
            {cats.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {cats.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs font-bold text-orange-500 bg-orange-50 px-2.5 py-1 tracking-wide"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Featured image */}
          {img && (
            <div className="mb-10 overflow-hidden bg-slate-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={imgAlt}
                className="w-full h-auto object-cover"
                style={{ maxHeight: 480 }}
              />
            </div>
          )}

          {/* Article body */}
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Back to list */}
          <div className="mt-14 pt-8 border-t border-slate-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-500 transition-colors tracking-wide"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M10 7H2M5 3.5L1.5 7 5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </article>

      {/* Entry CTA */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[10px] font-black tracking-[0.28em] uppercase text-orange-500 mb-4">
            Entry
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-4 leading-tight">
            宝宮設備で働きませんか？
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-8">
            未経験・経験者ともに歓迎。<br />
            まずはお気軽にご応募・ご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/entry" className="btn-primary text-sm px-8 py-4">
              応募フォームへ →
            </Link>
            <a href="tel:046-205-4558" className="btn-outline text-sm px-8 py-4">
              TEL: 046-205-4558
            </a>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
