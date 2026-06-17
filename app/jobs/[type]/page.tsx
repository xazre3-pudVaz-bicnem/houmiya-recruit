import type { Metadata } from 'next'
import Link from 'next/link'
import { jobs, getJobByType } from '@/data/jobs'
import { notFound } from 'next/navigation'
import EntrySection from '@/components/EntrySection'

export function generateStaticParams() {
  return jobs.map((j) => ({ type: j.type }))
}

export async function generateMetadata({ params }: { params: { type: string } }): Promise<Metadata> {
  const job = getJobByType(params.type)
  if (!job) return {}
  return {
    title: `${job.title}｜宝宮設備`,
    description: job.description,
    keywords: job.keywords,
    openGraph: {
      title: `${job.title}｜宝宮設備`,
      description: job.description,
      locale: 'ja_JP',
      type: 'website',
    },
    alternates: { canonical: `https://www.houmiya-recruit.com/jobs/${job.type}` },
  }
}

const BASE_URL = 'https://www.houmiya-recruit.com'

export default function JobPage({ params }: { params: { type: string } }) {
  const job = getJobByType(params.type)
  if (!job) notFound()

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.jobTitle,
    description: job.description,
    datePosted: '2025-01-01',
    validThrough: '2026-12-31T23:59:59',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: '株式会社宝宮設備',
      sameAs: BASE_URL,
      logo: `${BASE_URL}/images/logo.png`,
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
      '@type': 'Country',
      name: 'JP',
    },
    jobLocationType: 'TELECOMMUTE',
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
    jobBenefits: '社会保険完備・資格取得支援（会社全額負担）・車両貸出・昼食補助・制服貸与・社宅相談可',
    qualifications: '未経験歓迎。普通自動車免許（AT限定可）があれば尚可。',
    industry: '設備工事業',
    occupationalCategory: job.jobTitle,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'トップ', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '職種別求人', item: `${BASE_URL}/jobs` },
      { '@type': 'ListItem', position: 3, name: job.jobTitle, item: `${BASE_URL}/jobs/${job.type}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-orange-400 font-black mb-3">Job Detail</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            {job.title}
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">{job.lead}</p>
          <nav className="mt-6 flex items-center gap-2 text-xs text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">トップ</Link>
            <span>›</span>
            <Link href="/jobs" className="hover:text-white/60 transition-colors">職種別求人</Link>
            <span>›</span>
            <span className="text-white/50">{job.jobTitle}</span>
          </nav>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Article sections */}
          <div className="prose-sm max-w-none mb-14">
            {job.sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-lg sm:text-xl font-black text-navy mb-4 pb-3 border-b border-gray-200">
                  {section.h2}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-sm text-gray-700 leading-relaxed mb-3">{p}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Conditions table */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-navy tracking-tight mb-5 pb-3 border-b border-gray-200">
              募集条件
            </h2>
            <table className="recruit-table">
              <tbody>
                {job.conditions.map(({ label, value }) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="bg-orange-50 border border-orange-100 p-6 sm:p-8 mb-12">
            <p className="text-sm font-bold text-navy mb-2">
              宝宮設備では、{job.jobTitle}として活躍したい方を募集しています
            </p>
            <p className="text-xs text-gray-600 mb-5 leading-relaxed">
              未経験でも大丈夫。入社後の研修と資格取得支援（費用全額会社負担）で、プロの技術者を目指せます。
              残業なし・社会保険完備・車両貸出で、安心して長く働ける環境をご用意しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/entry"
                className="flex-1 block text-center bg-orange-500 text-white font-black py-4 text-sm tracking-widest hover:bg-orange-400 transition-colors"
              >
                応募フォームへ →
              </Link>
              <a
                href="tel:046-205-4558"
                className="flex-1 block text-center border border-navy text-navy font-bold py-4 text-sm tracking-wide hover:bg-navy hover:text-white transition-colors"
              >
                TEL: 046-205-4558
              </a>
            </div>
          </div>

          {/* Related columns */}
          {job.relatedColumnSlugs.length > 0 && (
            <div className="mb-12">
              <h3 className="text-sm font-bold text-gray-400 tracking-widest mb-4">関連コラム</h3>
              <div className="flex flex-col gap-2">
                {job.relatedColumnSlugs.map((slug) => (
                  <Link key={slug} href={`/column/${slug}`} className="text-sm text-navy hover:text-orange-500 transition-colors underline-offset-2 hover:underline">
                    /{slug} →
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Other jobs */}
          <div className="bg-gray-50 p-6">
            <h3 className="text-sm font-bold text-navy mb-4">その他の職種求人</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {jobs.filter((j) => j.type !== job.type).map((j) => (
                <Link
                  key={j.type}
                  href={`/jobs/${j.type}`}
                  className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {j.jobTitle} →
                </Link>
              ))}
            </div>
          </div>

          {/* Page links */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: '/recruit', label: '募集要項' },
                { href: '/column', label: '求人コラム' },
                { href: '/area', label: '地域別求人' },
                { href: '/faq', label: 'よくある質問' },
                { href: '/beginner', label: '未経験の方へ' },
                { href: '/welfare', label: '福利厚生' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-gray-500 hover:text-orange-500 transition-colors">
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
