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
  return [
    {
      url: `https://www.musico.co.jp/ja/news/${id}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: `https://www.musico.co.jp/ja/news/${id}`,
          en: `https://www.musico.co.jp/en/news/${id}`,
        },
      },
    },
  ]
}
