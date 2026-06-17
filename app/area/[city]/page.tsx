import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EntrySection from '@/components/EntrySection'
import { areas, getAreaByCity } from '@/data/areas'

interface Props {
  params: { city: string }
}

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.city }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getAreaByCity(params.city)
  if (!area) return { title: 'Not Found' }
  return {
    title: `${area.keyword}｜宝宮設備 採用サイト`,
    description: area.metaDescription,
    keywords: [area.keyword, '設備工事 求人', '宝宮設備 採用', '未経験 設備工事', `${area.name} エアコン工事 求人`, `${area.name} 給湯器交換 求人`],
    alternates: { canonical: `https://www.houmiya-recruit.com/area/${area.city}` },
    openGraph: {
      title: `${area.keyword}｜宝宮設備 採用サイト`,
      description: area.metaDescription,
      url: `https://www.houmiya-recruit.com/area/${area.city}`,
      locale: 'ja_JP',
      type: 'website',
    },
  }
}

const BASE_URL = 'https://www.houmiya-recruit.com'

export default function AreaDetailPage({ params }: Props) {
  const area = getAreaByCity(params.city)
  if (!area) notFound()

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '株式会社宝宮設備',
    description: area.metaDescription,
    url: BASE_URL,
    telephone: '046-205-4558',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '温水西1-4-39',
      addressLocality: '厚木市',
      addressRegion: '神奈川県',
      postalCode: '243-0036',
      addressCountry: 'JP',
    },
    areaServed: { '@type': 'AdministrativeArea', name: area.name },
  }

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: `${area.name}の設備工事スタッフ求人`,
    description: area.metaDescription,
    datePosted: '2025-01-01',
    validThrough: '2026-12-31T23:59:59',
    employmentType: 'FULL_TIME',
    directApply: true,
    hiringOrganization: {
      '@type': 'Organization',
      name: '株式会社宝宮設備',
      sameAs: BASE_URL,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '温水西1-4-39',
        addressLocality: '厚木市',
        addressRegion: '神奈川県',
        postalCode: '243-0036',
        addressCountry: 'JP',
      },
    },
    applicantLocationRequirements: {
      '@type': 'AdministrativeArea',
      name: area.name,
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'JPY',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 250000,
        maxValue: 700000,
        unitText: 'MONTH',
      },
    },
    workHours: '8:30〜17:00（残業なし）',
    jobBenefits: '社会保険完備・資格取得支援（会社全額負担）・車両貸出・昼食補助・制服貸与',
    qualifications: '未経験可・要普通自動車免許（AT限定可）',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'トップ', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '地域別求人', item: `${BASE_URL}/area` },
      { '@type': 'ListItem', position: 3, name: `${area.name}の設備工事求人`, item: `${BASE_URL}/area/${area.city}` },
    ],
  }

  const faqSchema = area.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: area.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <PageHero
        en="Area"
        title={`${area.name}の設備工事求人`}
        subtitle={area.keyword}
        breadcrumbs={[
          { href: '/', label: 'トップ' },
          { href: '/area', label: '地域別求人' },
          { label: area.name },
        ]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-6">
              {area.name}から設備工事の仕事を探す方へ
            </h2>
            {area.intro.map((p, i) => (
              <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>

          {/* Access & commute */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-50 p-6">
              <h3 className="text-sm font-black text-slate-700 mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-orange-500" />
                アクセス情報
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{area.access}</p>
            </div>
            <div className="bg-slate-50 p-6">
              <h3 className="text-sm font-black text-slate-700 mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-orange-500" />
                通勤について
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{area.commute}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-slate-800 tracking-tight mb-5 pb-3 border-b border-slate-200">
              {area.name}で宝宮設備が選ばれる理由
            </h2>
            <div className="space-y-4">
              {area.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-orange-500 flex items-center justify-center text-white text-[10px] font-black mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company info box */}
          <div className="bg-navy py-8 px-6 sm:px-10 mb-12">
            <h2 className="text-base font-black text-white tracking-tight mb-5">会社・求人情報</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                { label: '会社名', value: '株式会社宝宮設備' },
                { label: '本社所在地', value: '神奈川県厚木市温水西1-4-39' },
                { label: '電話番号', value: '046-205-4558' },
                { label: '給与', value: '月給25万円〜70万円（未経験：研修後250,000円〜）' },
                { label: '勤務時間', value: '8:30〜17:00（残業なし）' },
                { label: '福利厚生', value: '社会保険完備・資格取得支援・車両貸出・昼食補助' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] text-white/40 tracking-widest uppercase mb-0.5">{item.label}</p>
                  <p className="text-white font-medium text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Jobs at this area */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-slate-800 tracking-tight mb-5 pb-3 border-b border-slate-200">
              {area.name}エリアで募集中の職種
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'エアコン工事スタッフ', link: '/jobs/aircon', desc: `エアコン取付・交換工事。${area.name}エリア担当。未経験歓迎。` },
                { title: '給湯器交換スタッフ', link: '/jobs/water-heater', desc: `給湯器撤去・新規取付工事。${area.name}・神奈川県対応。` },
                { title: '電気工事スタッフ', link: '/jobs/electrical', desc: `電気配線・設備工事。資格取得支援あり。未経験可。` },
              ].map((item) => (
                <div key={item.title} className="border border-slate-200 p-5">
                  <h3 className="text-sm font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{item.desc}</p>
                  <Link href={item.link} className="text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors">
                    詳細を見る →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ section */}
          {area.faq.length > 0 && (
            <div className="mb-12">
              <h2 className="text-lg font-black text-slate-800 tracking-tight mb-6 pb-3 border-b border-slate-200">
                {area.name}からの設備工事求人 よくある質問
              </h2>
              <div className="space-y-4">
                {area.faq.map((item, i) => (
                  <div key={i} className="border border-slate-200 bg-white">
                    <div className="flex items-start gap-3 p-4 sm:p-5">
                      <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-xs font-black flex items-center justify-center mt-0.5">
                        Q
                      </span>
                      <p className="text-sm font-bold text-slate-800 leading-snug">{item.q}</p>
                    </div>
                    <div className="flex items-start gap-3 px-4 sm:px-5 pb-4 sm:pb-5 bg-slate-50">
                      <span className="flex-shrink-0 w-6 h-6 bg-navy text-white text-xs font-black flex items-center justify-center mt-0.5">
                        A
                      </span>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nearby areas */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-slate-800 tracking-tight mb-5 pb-3 border-b border-slate-200">
              {area.name}周辺の対応エリア
            </h2>
            <div className="flex flex-wrap gap-2">
              {area.nearbyAreas.map((nearby) => (
                <span
                  key={nearby}
                  className="text-xs px-3 py-1.5 border border-slate-200 text-slate-500"
                >
                  {nearby}
                </span>
              ))}
              <span className="text-xs px-3 py-1.5 bg-orange-50 border border-orange-200 text-orange-600 font-medium">
                神奈川県全域対応
              </span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/entry" className="flex-1 inline-flex items-center justify-center font-black text-sm px-8 py-4 tracking-widest text-white bg-orange-500 hover:bg-orange-400 transition-colors">
              応募フォームへ →
            </Link>
            <Link href="/recruit" className="flex-1 inline-flex items-center justify-center font-medium text-sm px-8 py-4 border border-slate-300 text-slate-600 hover:border-slate-500 transition-colors">
              募集要項を見る
            </Link>
            <a href="tel:046-205-4558" className="flex-1 inline-flex items-center justify-center font-medium text-sm px-8 py-4 border border-slate-300 text-slate-600 hover:border-slate-500 transition-colors">
              TEL: 046-205-4558
            </a>
          </div>

          {/* Internal links */}
          <div className="pt-8 border-t border-slate-100">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/jobs', label: '職種別求人' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/knowledge', label: '転職ナレッジ' },
                { href: '/area', label: '地域一覧に戻る' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-slate-500 hover:text-orange-500 transition-colors">
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EntrySection />
    </>
  )
}
