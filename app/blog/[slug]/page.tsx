import type { Metadata } from 'next'
import { fetchPostBySlug, getFeaturedImageUrl, stripHtml } from '@/lib/wordpress'
import BlogPostClient from './BlogPostClient'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await fetchPostBySlug(params.slug)
    if (!post) {
      return {
        title: '記事が見つかりません｜採用ブログ',
        description: '株式会社宝宮設備の採用ブログ',
      }
    }
    const title = post.title.rendered.replace(/<[^>]*>/g, '')
    const description = stripHtml(post.excerpt.rendered).slice(0, 120)
    const image = getFeaturedImageUrl(post)
    return {
      title: `${title}｜採用ブログ`,
      description: description || '株式会社宝宮設備の採用ブログ記事です。',
      openGraph: {
        title: `${title}｜株式会社宝宮設備 採用ブログ`,
        description: description || '株式会社宝宮設備の採用ブログ記事です。',
        ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
        locale: 'ja_JP',
        type: 'article',
      },
    }
  } catch {
    return {
      title: '採用ブログ記事｜株式会社宝宮設備',
      description: '株式会社宝宮設備の採用ブログ',
    }
  }
}

export default function BlogPostPage({ params }: Props) {
  return <BlogPostClient slug={params.slug} />
}
