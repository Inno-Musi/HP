import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/ja/contact/completed', 
          '/en/contact/completed',
          '/ja/recruit/apply/completed',
          '/en/recruit/apply/completed',
        ],
      },
    ],
    sitemap: 'https://www.musico.co.jp/sitemap.xml',
  }
}
