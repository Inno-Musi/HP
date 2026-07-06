import { fetchNewsList } from '@/services/news/fetch-news-list'
import { fetchWorksList } from '@/services/works/fetch-works-list'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.musico.co.jp'

const bilingualEntries = (
  path: string,
  priority: number,
  lastModified?: Date,
): MetadataRoute.Sitemap => {
  const suffix = path ? `/${path}` : ''
  const jaUrl = `${BASE_URL}/ja${suffix}`
  const enUrl = `${BASE_URL}/en${suffix}`
  const alternates = { languages: { ja: jaUrl, en: enUrl } }

  return [
    { url: jaUrl, lastModified: lastModified ?? new Date(), alternates, priority },
    { url: enUrl, lastModified: lastModified ?? new Date(), alternates, priority },
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { path: '', priority: 1 },
    { path: 'about', priority: 0.8 },
    { path: 'services', priority: 0.8 },
    { path: 'corporate-food', priority: 0.7 },
    { path: 'catering', priority: 0.7 },
    { path: 'regional', priority: 0.7 },
    { path: 'dx-ai', priority: 0.7 },
    { path: 'talent', priority: 0.7 },
    { path: 'works', priority: 0.7 },
    { path: 'careers', priority: 0.7 },
    { path: 'contact', priority: 0.8 },
    { path: 'news', priority: 0.7 },
    { path: 'privacy-policy', priority: 0.3 },
    { path: 'security-policy', priority: 0.3 },
  ]

  const [works, news] = await Promise.all([
    fetchWorksList({ limit: 100, fields: ['slug', 'publishedAt'] }),
    fetchNewsList({ limit: 100, fields: ['id', 'publishedAt'] }),
  ])

  return [
    ...staticPages.flatMap(({ path, priority }) =>
      bilingualEntries(path, priority),
    ),
    ...works.contents
      .filter((work) => work.slug)
      .flatMap((work) =>
        bilingualEntries(
          `works/${work.slug}`,
          0.6,
          work.publishedAt ? new Date(work.publishedAt) : undefined,
        ),
      ),
    ...news.contents.flatMap((item) =>
      bilingualEntries(
        `news/${item.id}`,
        0.5,
        item.publishedAt ? new Date(item.publishedAt) : undefined,
      ),
    ),
  ]
}
