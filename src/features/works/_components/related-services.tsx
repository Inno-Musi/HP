import Link from 'next/link'

type Language = 'ja' | 'en'

type ServiceLink = {
  path: string
  labelJa: string
  labelEn: string
  keywords: string[]
}

// Ordered by specificity so the most relevant service surfaces first.
const SERVICE_LINKS: ServiceLink[] = [
  {
    path: 'office-cafe',
    labelJa: 'オフィスカフェ運営',
    labelEn: 'Office Café',
    keywords: ['オフィスカフェ', 'カフェ', 'office café', 'cafe'],
  },
  {
    path: 'executive-dining',
    labelJa: 'エグゼクティブダイニング',
    labelEn: 'Executive Dining',
    keywords: ['エグゼクティブ', '役員', 'executive', 'dining'],
  },
  {
    path: 'corporate-food',
    labelJa: '法人向けフードサービス',
    labelEn: 'Corporate Food Service',
    keywords: ['コーポレートf&b', 'コーポレートフード', 'f&b', '社員食堂', 'food'],
  },
  {
    path: 'catering',
    labelJa: 'ケータリング・イベント',
    labelEn: 'Catering & Events',
    keywords: ['ケータリング', 'イベント', 'catering', 'event'],
  },
  {
    path: 'dx-ai',
    labelJa: 'AI/DX × Hospitality',
    labelEn: 'AI/DX × Hospitality',
    keywords: ['ai', 'dx', 'ax', 'デジタル', 'digital'],
  },
  {
    path: 'talent',
    labelJa: '人材支援',
    labelEn: 'Talent Solutions',
    keywords: ['人材', 'talent', 'hr', '採用'],
  },
  {
    path: 'regional',
    labelJa: '地方創生支援',
    labelEn: 'Regional Revitalization',
    keywords: ['地方創生', '地域', 'リゾート', 'regional', 'resort'],
  },
]

const pickServices = (category: string | undefined): ServiceLink[] => {
  const haystack = (category ?? '').toLowerCase()
  const matched = SERVICE_LINKS.filter((service) =>
    service.keywords.some((keyword) => haystack.includes(keyword.toLowerCase())),
  )
  // Always give the reader at least one route back into a service page.
  return matched.length > 0 ? matched.slice(0, 3) : [SERVICE_LINKS[2]]
}

type Props = {
  language: Language
  category?: string
}

export const RelatedServices = ({ language, category }: Props) => {
  const services = pickServices(category)

  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-sm font-roboto tracking-widest uppercase text-brass">
        {language === 'ja' ? '関連サービス' : 'Related Services'}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <Link
            key={service.path}
            href={`/${language}/${service.path}`}
            className="group flex items-center justify-between bg-paper rounded-md px-5 py-4 border border-hairline hover:border-brass transition-colors"
          >
            <span className="text-darkNavy font-bold text-sm md:text-base">
              {language === 'ja' ? service.labelJa : service.labelEn}
            </span>
            <span className="text-brass group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
