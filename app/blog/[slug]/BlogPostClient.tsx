'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { WpPost } from '@/lib/wordpress'
import {
  getFeaturedImageUrl,
  getFeaturedImageAlt,
  getCategories,
  formatDate,
} from '@/lib/wordpress'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'

const WP_API =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ??
  'https://wp.houmiya-recruit.com/wp-json/wp/v2'

type Props = { slug: string }

export default function BlogPostClient({ slug }: Props) {
  const [post, setPost] = useState<WpPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed`)
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status}`)
        return r.json()
      })
      .then((data: WpPost[]) => {
        if (!data || data.length === 0) {
          setNotFound(true)
        } else {
          setPost(data[0])
        }
        setLoading(false)
      })
      .catch(() => {
        setNotFound(true)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <>
        <div style={{ background: '#1e293b', height: 200 }} />
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 animate-pulse">
            <div className="h-6 bg-gray-100 rounded mb-4 w-1/3" />
            <div className="h-10 bg-gray-100 rounded mb-6" />
            <div className="h-10 bg-gray-100 rounded w-2/3 mb-8" />
            <div className="bg-gray-100 aspect-video mb-8" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-100 rounded mb-3" />
            ))}
          </div>
        </section>
      </>
    )
  }

  if (notFound || !post) {
    return (
      <>
        <PageHero
          en="Blog"
          title="記事が見つかりません"
          subtitle="お探しの記事は存在しないか、削除された可能性があります"
          breadcrumbs={[
            { href: '/', label: 'トップ' },
            { href: '/blog', label: '採用ブログ' },
            { label: '記事が見つかりません' },
          ]}
        />
        <section className="py-20 bg-white text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-500 transition-colors"
          >
            ← ブログ一覧に戻る
          </Link>
        </section>
        <EntrySection />
      </>
    )
  }

  const title = post.title.rendered.replace(/<[^>]*>/g, '')
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
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
            <time className="text-sm text-slate-400 font-medium tracking-wide">
              {formatDate(post.date)}
            </time>
            {cats.length > 0 && (
              <div className="flex items-center gap-2">
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

          {/* Content */}
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-slate-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-500 transition-colors tracking-wide"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10 7H2M5 3.5L1.5 7 5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </article>

      {/* Entry CTA */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[10px] font-black tracking-[0.28em] uppercase text-orange-500 mb-4">Entry</p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-4 leading-tight">
            宝宮設備で働きませんか？
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-8">
            未経験・経験者ともに歓迎。<br />
            まずはお気軽にご応募・ご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/entry"
              className="btn-primary text-sm px-8 py-4"
            >
              応募フォームへ →
            </Link>
            <a
              href="tel:046-205-4558"
              className="btn-outline text-sm px-8 py-4"
            >
              TEL: 046-205-4558
            </a>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
