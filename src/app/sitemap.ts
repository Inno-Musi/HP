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
      url: 'https://www.musico.co.jp/ja',
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: 'https://www.musico.co.jp/ja',
          en: 'https://www.musico.co.jp/en',
        },
      },
      priority: 1,
    },
    {
      url: 'https://www.musico.co.jp/ja/about',
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: 'https://www.musico.co.jp/ja/about',
          en: 'https://www.musico.co.jp/en/about',
        },
      },
      priority: 0.8,
    },
    {
      url: 'https://www.musico.co.jp/ja/contact',
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: 'https://www.musico.co.jp/ja/contact',
          en: 'https://www.musico.co.jp/en/contact',
        },
      },
      priority: 0.8,
    },
    {
      url: 'https://www.musico.co.jp/ja/news',
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: 'https://www.musico.co.jp/ja/news',
          en: 'https://www.musico.co.jp/en/news',
        },
      },
      priority: 0.7,
    },
    {
      url: `https://www.musico.co.jp/ja/news/${id}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: `https://www.musico.co.jp/ja/news/${id}`,
          en: `https://www.musico.co.jp/en/news/${id}`,
        },
      },
      priority: 0.6,
    },
    {
      url: 'https://www.musico.co.jp/ja/philosophy',
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: 'https://www.musico.co.jp/ja/philosophy',
          en: 'https://www.musico.co.jp/en/philosophy',
        },
      },
      priority: 0.5,
    },
    {
      url: 'https://www.musico.co.jp/ja/privacy-policy',
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: 'https://www.musico.co.jp/ja/privacy-policy',
          en: 'https://www.musico.co.jp/en/privacy-policy',
        },
      },
      priority: 0.3,
    },
    {
      url: 'https://www.musico.co.jp/ja/security-policy',
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: 'https://www.musico.co.jp/ja/security-policy',
          en: 'https://www.musico.co.jp/en/security-policy',
        },
      },
      priority: 0.3,
    },
    {
      url: 'https://www.musico.co.jp/ja/services',
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: 'https://www.musico.co.jp/ja/services',
          en: 'https://www.musico.co.jp/en/services',
        },
      },
      priority: 0.7,
    },
  ]
}
