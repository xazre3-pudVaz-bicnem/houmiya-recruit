import type { MetadataRoute } from 'next'
import { columns } from '@/data/columns'
import { areas } from '@/data/areas'
import { jobs } from '@/data/jobs'
import { knowledge } from '@/data/knowledge'

const BASE_URL = 'https://www.houmiya-recruit.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/company`,            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/recruit`,            lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/entry`,              lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/work`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/jobs`,               lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/area/atsugi`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/area`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/beginner`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/welfare`,            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/faq`,                lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/knowledge`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/column`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/day`,                lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/staff`,              lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/gallery`,            lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
  ]

  const jobPages: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${BASE_URL}/jobs/${job.type}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${BASE_URL}/area/${area.city}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const columnPages: MetadataRoute.Sitemap = columns.map((col) => ({
    url: `${BASE_URL}/column/${col.slug}`,
    lastModified: new Date(col.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const knowledgePages: MetadataRoute.Sitemap = knowledge.map((k) => ({
    url: `${BASE_URL}/knowledge/${k.slug}`,
    lastModified: new Date(k.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...jobPages, ...areaPages, ...columnPages, ...knowledgePages]
}
