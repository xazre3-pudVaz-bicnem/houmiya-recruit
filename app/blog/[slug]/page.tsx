import type { Metadata } from 'next'
import BlogPost from './BlogPost'

export const metadata: Metadata = {
  title: '採用ブログ記事｜株式会社宝宮設備 採用サイト',
  description: '株式会社宝宮設備の採用ブログ記事です。神奈川県厚木市の設備工事求人情報を発信します。',
  openGraph: {
    locale: 'ja_JP',
    type: 'article',
  },
}

type Props = { params: { slug: string } }

export default function BlogPostPage({ params }: Props) {
  return <BlogPost slug={params.slug} />
}
