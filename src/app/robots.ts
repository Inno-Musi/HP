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
          '/ja/materials/completed',
          '/en/materials/completed',
          '/ja/works/preview',
          '/en/works/preview',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://www.musico.co.jp/sitemap.xml',
  }
}
