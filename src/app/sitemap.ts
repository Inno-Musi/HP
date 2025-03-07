import { fetchNewsList } from '@/services/news/fetch-news-list'
import type { MetadataRoute } from 'next'

export async function generateSitemaps() {
  const res = await fetchNewsList({ fields: ['id'] })

  return res.contents as { id: string }[]
}

export default async function sitemap({
  id,
}: {
  id: string
}): Promise<MetadataRoute.Sitemap> {
  const baseUrls = [
    { path: '', priority: 1 },
    { path: 'about', priority: 0.8 },
    { path: 'contact', priority: 0.8 },
    { path: 'news', priority: 0.7 },
    { path: `news/${id}`, priority: 0.6 },
    { path: 'philosophy', priority: 0.5 },
    { path: 'privacy-policy', priority: 0.3 },
    { path: 'security-policy', priority: 0.3 },
    { path: 'services', priority: 0.7 },
  ]

  return baseUrls.flatMap(({ path, priority }) => {
    const jaUrl = `https://www.musico.co.jp/ja/${path}`
    const enUrl = `https://www.musico.co.jp/en/${path}`

    return [
      {
        url: jaUrl,
        lastModified: new Date(),
        alternates: {
          languages: {
            ja: jaUrl,
            en: enUrl,
          },
        },
        priority,
      },
      {
        url: enUrl,
        lastModified: new Date(),
        alternates: {
          languages: {
            ja: jaUrl,
            en: enUrl,
          },
        },
        priority,
      },
    ]
  })
}
