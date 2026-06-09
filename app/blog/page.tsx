import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import BlogListClient from './BlogListClient'

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

export default function BlogPage() {
  return (
    <>
      <PageHero
        en="Blog"
        title="採用ブログ"
        subtitle="仕事内容・職場環境・求人情報を発信"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '採用ブログ' }]}
      />
      <BlogListClient />
      <EntrySection />
    </>
  )
}
