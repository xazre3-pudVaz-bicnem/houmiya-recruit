import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: '株式会社宝宮設備 採用サイト｜神奈川県の設備工事スタッフ求人',
    template: '%s｜株式会社宝宮設備 採用サイト',
  },
  description:
    '神奈川県厚木市の株式会社宝宮設備では、エアコン工事・給湯器交換・電気工事スタッフを募集中。未経験歓迎、資格取得支援、車両貸出、社宅相談可能。若い世代が働きやすく成長できる環境です。',
  keywords: [
    '設備工事 求人',
    '神奈川 設備工事 求人',
    '厚木 設備工事 求人',
    '未経験 設備工事 求人',
    'エアコン工事 求人',
    '給湯器交換 求人',
    '電気工事 求人',
    '宝宮設備 採用',
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '株式会社宝宮設備 採用サイト',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
