import type { MetadataRoute } from 'next'
import { columns } from '@/data/columns'
import { areas } from '@/data/areas'
import { jobs } from '@/data/jobs'
import { knowledge } from '@/data/knowledge'

const BASE_URL = 'https://www.houmiya-recruit.com'

// Split sitemap: 0=pages, 1=jobs, 2=area, 3=column, 4=knowledge
export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  if (id === 0) {
    return [
      { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
      { url: `${BASE_URL}/recruit`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE_URL}/entry`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE_URL}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${BASE_URL}/jobs`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE_URL}/area`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${BASE_URL}/beginner`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${BASE_URL}/welfare`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${BASE_URL}/knowledge`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${BASE_URL}/column`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
      { url: `${BASE_URL}/day`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
      { url: `${BASE_URL}/staff`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
      { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
      { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    ]
  }

  if (id === 1) {
    return jobs.map((job) => ({
      url: `${BASE_URL}/jobs/${job.type}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  }

  if (id === 2) {
    return areas.map((area) => ({
      url: `${BASE_URL}/area/${area.city}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  }

  if (id === 3) {
    return columns.map((col) => ({
      url: `${BASE_URL}/column/${col.slug}`,
      lastModified: new Date(col.publishedAt).toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  }

  if (id === 4) {
    return knowledge.map((k) => ({
      url: `${BASE_URL}/knowledge/${k.slug}`,
      lastModified: new Date(k.publishedAt).toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  }

  return []
}
