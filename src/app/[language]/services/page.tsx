import { BreadCrumbs } from '@/components/bread-crumbs'
import { Button } from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: Promise<{ language: 'ja' | 'en' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return {
      title: '事業内容 | 株式会社MUSICO',
      description:
        '株式会社MUSICOの事業内容。コーポレートフードサービス・ケータリング・地方創生支援・AI導入支援・人材支援の5領域でホスピタリティ×テクノロジーの力を提供します。',
    }
  }

  return {
    title: 'Services | MUSICO Inc.',
    description:
      'MUSICO Inc. services: corporate food service, catering, regional revitalization, AI implementation support, and talent support — delivering hospitality × technology across five domains.',
  }
}

const services = [
  {
    titleJa: 'コーポレートフードサービス',
    titleEn: 'Corporate Food Service',
    descJa:
      '外資・大手企業のオフィスカフェ・社員食堂を企画から運営まで一貫して支援。品質とコストを両立する現場設計を提供します。',
    descEn:
      'End-to-end support for office cafés and employee dining at global and major corporations — delivering quality and cost-efficient operations.',
    image: '/restaurant.jpg',
    href: '/corporate-food',
  },
  {
    titleJa: 'ケータリングサービス',
    titleEn: 'Catering Service',
    descJa:
      'VIPイベント・社内パーティー・ビジネスランチまで、グレードに応じた食体験を設計・運営します。',
    descEn:
      'Designing and delivering food experiences for VIP events, internal parties, and business lunches — tailored to the occasion and standard required.',
    image: '/buffet-2.jpg',
    href: '/catering',
  },
  {
    titleJa: '地方創生支援',
    titleEn: 'Regional Revitalization',
    descJa:
      '食・農・観光を掛け合わせた地域ブランディングと事業開発を支援。自治体・地域事業者と共に持続可能な仕組みを構築します。',
    descEn:
      'Supporting regional branding and business development by combining food, agriculture, and tourism — building sustainable models with local governments and businesses.',
    image: '/agriculture.jpg',
    href: '/regional',
  },
  {
    titleJa: 'AI導入支援',
    titleEn: 'AI Implementation',
    descJa:
      'AIを導入するだけでは現場は変わらない。現場理解・業務設計・人材育成まで含めた実行支援で、定着するDXを実現します。',
    descEn:
      "Simply deploying AI doesn't change the floor. We deliver DX that sticks — through operations understanding, workflow design, and people development.",
    image: '/technology.png',
    href: '/dx-ai',
  },
  {
    titleJa: '人材支援',
    titleEn: 'Talent Support',
    descJa:
      'ホスピタリティ領域に特化した人材紹介・派遣サービス。採用要件の定義から定着支援まで、現場を知るチームが伴走します。',
    descEn:
      'Staffing and placement services specialized in hospitality — from defining hiring requirements to supporting retention, with a team that knows the floor.',
    image: '/collaborate.jpg',
    href: '/talent',
  },
]

export default async function ServicesPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-zinc-50">
        <div className="max-w-[calc(100vw-32px)] mx-auto py-16 md:py-20 flex flex-col gap-y-16 lg:gap-y-24">
          {/* ヘッダー */}
          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase">
                Services
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-darkNavy">
                {language === 'ja' ? '事業内容' : 'What We Do'}
              </h1>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600">
              {language === 'ja'
                ? 'ホスピタリティとテクノロジーを掛け合わせ、戦略立案から現場運営まで一気通貫で支援します。5つの領域で、企業・地域・社会に新しい価値を生み出します。'
                : 'Combining hospitality and technology, we support everything from strategy to on-site operations. Across five domains, we create new value for businesses, communities, and society.'}
            </p>
          </div>

          {/* サービスカード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            {services.map((service) => (
              <Link
                key={service.titleJa}
                href={`/${language}${service.href}`}
                className="group bg-white rounded-md overflow-hidden shadow-sm border border-zinc-100 flex flex-col hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={language === 'ja' ? service.titleJa : service.titleEn}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="px-6 py-5 flex flex-col gap-y-2 flex-1">
                  <p className="text-darkNavy font-bold text-base">
                    {language === 'ja' ? service.titleJa : service.titleEn}
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {language === 'ja' ? service.descJa : service.descEn}
                  </p>
                  <p className="text-xs font-roboto text-darkNavy mt-auto pt-2 group-hover:underline underline-offset-2">
                    {language === 'ja' ? '詳しく見る →' : 'Learn more →'}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-darkNavy rounded-md px-8 md:px-12 py-10 text-white">
            <p className="text-xl md:text-2xl font-bold">
              {language === 'ja'
                ? 'どの領域でもまずはご相談ください'
                : 'Talk to Us About Any Domain'}
            </p>
            <p className="text-sm leading-relaxed opacity-80">
              {language === 'ja'
                ? '掲載以外のご要望にも対応します。ホスピタリティ領域の課題があれば、まずはお気軽にお問い合わせください。'
                : "We handle requests beyond what's listed. If you have a challenge in the hospitality domain, feel free to reach out."}
            </p>
            <Link href={`/${language}/contact`}>
              <Button
                type="button"
                text={language === 'ja' ? 'お問い合わせはこちら' : 'Contact Us'}
                className="rounded-full bg-white text-darkNavy px-8 py-3 hover:opacity-80 duration-300 font-roboto w-fit"
              />
            </Link>
          </div>
        </div>
      </div>

      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '事業内容',
            labelEn: 'Services',
            href: '/services',
          },
        ]}
      />
    </>
  )
}
