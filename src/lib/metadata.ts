import type { Metadata } from 'next'

const BASE_URL = 'https://www.musico.co.jp'
const DEFAULT_OG_IMAGE = '/og-image.jpg'

type Language = 'en' | 'ja'

type BuildMetadataArgs = {
  language: Language
  /** Path without the language prefix, e.g. 'about' or 'works/foo'. Empty for top. */
  path?: string
  title: string
  description?: string
  ogImage?: string
  ogType?: 'article' | 'website'
}

// Canonical/hreflang always point at production so preview deploys never
// register their own URLs with search engines.
export const buildMetadata = ({
  language,
  path = '',
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
}: BuildMetadataArgs): Metadata => {
  const suffix = path ? `/${path}` : ''
  const jaUrl = `${BASE_URL}/ja${suffix}`
  const enUrl = `${BASE_URL}/en${suffix}`
  const canonical = language === 'ja' ? jaUrl : enUrl

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical,
      languages: {
        ja: jaUrl,
        en: enUrl,
        'x-default': jaUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: language === 'ja' ? '株式会社MUSICO' : 'MUSICO Inc.',
      locale: language === 'ja' ? 'ja_JP' : 'en_US',
      type: ogType,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
