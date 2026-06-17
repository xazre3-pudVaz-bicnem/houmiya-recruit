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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: '株式会社宝宮設備',
  alternateName: 'ほうみや設備',
  url: 'https://www.houmiya-recruit.com',
  logo: 'https://www.houmiya-recruit.com/images/logo.png',
  image: 'https://www.houmiya-recruit.com/images/logo.png',
  description:
    '神奈川県厚木市に本社を置く設備工事会社。エアコン工事・給湯器交換・電気工事を神奈川県全域で手がける。未経験歓迎・資格取得支援・残業なし。',
  telephone: '046-205-4558',
  email: 'homiya@houmiyasetubi.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '温水西1-4-39',
    addressLocality: '厚木市',
    addressRegion: '神奈川県',
    postalCode: '243-0036',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.4519,
    longitude: 139.3406,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:30',
    closes: '17:00',
  },
  areaServed: {
    '@type': 'State',
    name: '神奈川県',
  },
  sameAs: ['https://www.houmiya-recruit.com'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '株式会社宝宮設備 採用サイト',
  url: 'https://www.houmiya-recruit.com',
  description: '神奈川県厚木市の設備工事会社・宝宮設備の採用サイト。エアコン工事・給湯器交換・電気工事スタッフ募集中。',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.houmiya-recruit.com/column?q={search_term_string}',
    'query-input': 'required name=search_term_string',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
