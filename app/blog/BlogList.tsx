'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { WpPost } from '@/lib/wordpress'
import { getFeaturedImageUrl, getCategories, formatDate, stripHtml } from '@/lib/wordpress'

const WP_API = 'https://wp.houmiya-recruit.com/wp-json/wp/v2'

type Status = 'loading' | 'ok' | 'empty' | 'error'

export default function BlogList() {
  const [posts, setPosts] = useState<WpPost[]>([])
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    fetch(`${WP_API}/posts?_embed&per_page=12`)
      .then(async (r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        const data: WpPost[] = await r.json()
        setPosts(data)
        setStatus(data.length > 0 ? 'ok' : 'empty')
      })
      .catch(() => setStatus('error'))
  }, [])

  /* ── loading skeleton ── */
  if (status === 'loading') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-slate-100" style={{ aspectRatio: '16/9' }} />
            <div className="mt-4 space-y-2">
              <div className="h-3 bg-slate-100 rounded w-1/3" />
              <div className="h-5 bg-slate-100 rounded" />
              <div className="h-5 bg-slate-100 rounded w-4/5" />
              <div className="h-3 bg-slate-100 rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  /* ── empty / error ── */
  if (status === 'empty' || status === 'error') {
    return (
      <div className="py-16 text-center">
        <div className="w-12 h-px bg-orange-500 mx-auto mb-6" />
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          現在、採用ブログを準備中です。<br className="hidden sm:inline" />
          求人情報や仕事内容・職場環境などを発信していく予定です。
        </p>
        <div className="mt-10">
          <Link
            href="/entry"
            className="inline-flex items-center gap-2 text-sm font-black tracking-widest px-8 py-4 bg-orange-500 text-white hover:bg-orange-400 transition-colors"
          >
            応募フォームへ →
          </Link>
        </div>
      </div>
    )
  }

  /* ── post grid ── */
  return (
    <>
      <div className="mb-12 flex items-center gap-4">
        <div className="w-6 h-px bg-orange-500" />
        <span className="text-[10px] font-black tracking-[0.28em] uppercase text-orange-500">
          Latest Articles
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {posts.map((post) => {
          const img = getFeaturedImageUrl(post)
          const cats = getCategories(post)
          const excerpt = stripHtml(post.excerpt.rendered).slice(0, 80)

          return (
            <article key={post.id} className="group flex flex-col">

              {/* Thumbnail */}
              <Link
                href={`/blog/${post.slug}`}
                className="block overflow-hidden bg-slate-100 relative mb-5"
                style={{ aspectRatio: '16 / 9' }}
              >
                {img ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={img}
                    alt={stripHtml(post.title.rendered)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <time dateTime={post.date} className="text-[11px] text-slate-400 tracking-wide font-medium">
                  {formatDate(post.date)}
                </time>
                {cats.length > 0 && (
                  <>
                    <span className="text-slate-200" aria-hidden="true">|</span>
                    <span className="text-[11px] text-orange-500 font-bold tracking-wide">{cats[0]}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`}>
                <h2
                  className="text-base font-black text-slate-800 leading-snug mb-3 group-hover:text-orange-500 transition-colors"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </Link>

              {/* Excerpt */}
              {excerpt && (
                <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{excerpt}…</p>
              )}

              {/* Read more */}
              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 group-hover:text-orange-500 transition-colors tracking-wide"
              >
                続きを読む
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 2.5l3.5 3.5L7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </article>
          )
        })}
      </div>
    </>
  )
}
