const BASE_URL = 'https://www.musico.co.jp'

type Language = 'en' | 'ja'

// AIが引用しやすい定義文。about本文・OG description と文言を揃えて使う。
const ORGANIZATION_DESCRIPTION = {
  ja: '株式会社MUSICO（ムジコ）は、東京を拠点とするHospitality Innovation Firmです。外資系金融機関をはじめとする企業向けに、オフィスカフェ・社員食堂・エグゼクティブダイニングの運営、ケータリング、ホスピタリティ業界向けAI/DX支援、人材支援、地方創生支援を提供しています。食・空間・運用・テクノロジーを一気通貫で設計・実装することを強みとしています。',
  en: 'MUSICO Inc. is a Tokyo-based Hospitality Innovation Firm. We operate office cafés, employee dining, and executive dining for corporations including global financial institutions, and provide catering, AI/DX solutions for the hospitality industry, talent solutions, and regional revitalization support. Our strength is designing and implementing food, space, operations, and technology as one continuous system.',
} as const

export const organizationJsonLd = (language: Language) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: language === 'ja' ? '株式会社MUSICO' : 'MUSICO Inc.',
  alternateName: ['MUSICO', 'ムジコ'],
  url: BASE_URL,
  logo: `${BASE_URL}/musico-logo-bg-white.png`,
  description: ORGANIZATION_DESCRIPTION[language],
  foundingDate: '2022-05',
  founder: {
    '@type': 'Person',
    name: language === 'ja' ? '瀬本 頼一' : 'Yorikazu Semoto',
    jobTitle:
      language === 'ja' ? '代表取締役' : 'Representative Director',
  },
  address: {
    '@type': 'PostalAddress',
    postalCode: '152-0023',
    addressRegion: language === 'ja' ? '東京都' : 'Tokyo',
    addressLocality: language === 'ja' ? '目黒区' : 'Meguro-ku',
    streetAddress: language === 'ja' ? '八雲3-17-20' : '3-17-20 Yakumo',
    addressCountry: 'JP',
  },
  sameAs: ['https://www.wantedly.com/companies/company_3531768'],
})

export const webSiteJsonLd = (language: Language) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: language === 'ja' ? '株式会社MUSICO' : 'MUSICO Inc.',
  url: `${BASE_URL}/${language}`,
  inLanguage: language,
  publisher: { '@id': `${BASE_URL}/#organization` },
})

type FaqItem = { qJa: string; qEn: string; aJa: string; aEn: string }

export const faqPageJsonLd = (language: Language, faqs: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: language === 'ja' ? faq.qJa : faq.qEn,
    acceptedAnswer: {
      '@type': 'Answer',
      text: language === 'ja' ? faq.aJa : faq.aEn,
    },
  })),
})

type ServiceInfo = {
  nameJa: string
  nameEn: string
  path: string
  descriptionJa: string
  descriptionEn: string
}

export const serviceJsonLd = (language: Language, service: ServiceInfo) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: language === 'ja' ? service.nameJa : service.nameEn,
  serviceType: language === 'ja' ? service.nameJa : service.nameEn,
  url: `${BASE_URL}/${language}/${service.path}`,
  description:
    language === 'ja' ? service.descriptionJa : service.descriptionEn,
  provider: { '@id': `${BASE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'Japan' },
})

type ArticleInfo = {
  title: string
  description?: string
  url: string
  image?: string
  datePublished?: string
}

export const articleJsonLd = (language: Language, article: ArticleInfo) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  ...(article.description ? { description: article.description } : {}),
  url: article.url,
  ...(article.image ? { image: [article.image] } : {}),
  ...(article.datePublished
    ? { datePublished: article.datePublished, dateModified: article.datePublished }
    : {}),
  inLanguage: language,
  author: { '@id': `${BASE_URL}/#organization` },
  publisher: { '@id': `${BASE_URL}/#organization` },
})

type PersonInfo = { nameJa: string; nameEn: string; titleJa: string; titleEn: string }

export const aboutPageJsonLd = (language: Language, people: PersonInfo[]) => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: `${BASE_URL}/${language}/about`,
  mainEntity: { '@id': `${BASE_URL}/#organization` },
  about: people.map((person) => ({
    '@type': 'Person',
    name: language === 'ja' ? person.nameJa : person.nameEn,
    jobTitle: language === 'ja' ? person.titleJa : person.titleEn,
    worksFor: { '@id': `${BASE_URL}/#organization` },
  })),
})

export const breadcrumbJsonLd = (
  language: Language,
  crumbs: { labelJa: string; labelEn: string; href: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: language === 'ja' ? 'トップページ' : 'Homepage',
      item: `${BASE_URL}/${language}`,
    },
    ...crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: language === 'ja' ? crumb.labelJa : crumb.labelEn,
      item: `${BASE_URL}/${language}${crumb.href}`,
    })),
  ],
})
