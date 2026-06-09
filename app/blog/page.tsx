import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import {
  fetchPosts,
  getFeaturedImageUrl,
  getCategories,
  formatDate,
  stripHtml,
} from '@/lib/wordpress'

export const revalidate = 60

export const metadata: Metadata = {
  title: '採用ブログ｜株式会社宝宮設備 採用サイト',
  description:
    '株式会社宝宮設備の採用ブログです。神奈川県・厚木市で設備工事、エアコン工事、給湯器交換、電気工事の求人を探している方へ、仕事内容や働く環境を発信します。',
  keywords: [
    '神奈川 設備工事 求人',
    '厚木 設備工事 求人',
    'エアコン工事 求人 神奈川',
    '設備工事 未経験 求人',
    '手に職 求人 神奈川',
    '資格取得支援 求人',
  ],
  openGraph: {
    title: '採用ブログ｜株式会社宝宮設備 採用サイト',
    description:
      '株式会社宝宮設備の採用ブログ。神奈川県厚木市の設備工事求人情報や仕事内容・職場環境を発信します。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default async function BlogPage() {
  const posts = await fetchPosts(12)

  return (
    <>
      <PageHero
        en="Blog"
        title="採用ブログ"
        subtitle="仕事内容・職場環境・求人情報を発信"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '採用ブログ' }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {posts.length === 0 ? (
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
          ) : (
            <>
              {/* Section header */}
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
                            <svg
                              className="w-10 h-10 text-slate-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )}
                        {/* Orange accent bar on hover */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                      </Link>

                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-3">
                        <time
                          dateTime={post.date}
                          className="text-[11px] text-slate-400 tracking-wide font-medium"
                        >
                          {formatDate(post.date)}
                        </time>
                        {cats.length > 0 && (
                          <>
                            <span className="text-slate-200" aria-hidden="true">|</span>
                            <span className="text-[11px] text-orange-500 font-bold tracking-wide">
                              {cats[0]}
                            </span>
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
                        <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
                          {excerpt}…
                        </p>
                      )}

                      {/* Read more */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 group-hover:text-orange-500 transition-colors tracking-wide"
                      >
                        続きを読む
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6h8M7 2.5l3.5 3.5L7 9.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </article>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <EntrySection />
    </>
  )
}
