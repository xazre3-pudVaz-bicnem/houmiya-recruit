export type WpPost = {
  id: number
  date: string
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details?: { width: number; height: number }
    }>
    'wp:term'?: Array<
      Array<{
        id: number
        name: string
        slug: string
        taxonomy: string
      }>
    >
  }
}

const WP_API =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ??
  'https://wp.houmiya-recruit.com/wp-json/wp/v2'

export async function fetchPosts(perPage = 12): Promise<WpPost[]> {
  try {
    const res = await fetch(`${WP_API}/posts?_embed&per_page=${perPage}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    return await res.json()
  } catch {
    return []
  }
}

export async function fetchPostBySlug(slug: string): Promise<WpPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return null
    const posts: WpPost[] = await res.json()
    return posts[0] ?? null
  } catch {
    return null
  }
}

export function getFeaturedImageUrl(post: WpPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
}

export function getFeaturedImageAlt(post: WpPost): string {
  return (
    post._embedded?.['wp:featuredmedia']?.[0]?.alt_text ??
    decodeHtml(post.title.rendered)
  )
}

export function getCategories(post: WpPost): string[] {
  const terms = post._embedded?.['wp:term'] ?? []
  return terms
    .flat()
    .filter((t) => t.taxonomy === 'category' && t.slug !== 'uncategorized')
    .map((t) => t.name)
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

export function decodeHtml(html: string): string {
  return stripHtml(html)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
}
