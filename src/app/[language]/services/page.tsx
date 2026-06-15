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
        'MUSICOは、ホスピタリティを再設計する Hospitality Innovation Firm。AI/DX と 人材支援 の2注力領域と、コーポレートフード・ケータリング・地方創生の現場領域で、ホスピタリティ業界の構造課題に挑みます。',
    }
  }

  return {
    title: 'Services | MUSICO Inc.',
    description:
      'MUSICO is a Hospitality Innovation Firm. Two focus areas — AI/DX and Talent — paired with three execution domains — Corporate Food, Catering, Regional Revitalization — tackling the structural challenges of the hospitality industry.',
  }
}

const featuredServices = [
  {
    titleJa: 'AI/DX × Hospitality',
    titleEn: 'AI/DX × Hospitality',
    descJa:
      '現場を知っているからこそ作れる、ホスピタリティ業界専用のAI/DX。属人化したノウハウを構造化し、現場で定着する仕組みへと再設計します。PoCパートナー募集中。',
    descEn:
      'Built by people who run the floor — AI/DX designed specifically for the hospitality industry. We structure knowledge trapped in individuals into systems that take root on-site. PoC partners welcome.',
    image: '/service-ai-dx.jpg',
    href: '/dx-ai',
  },
  {
    titleJa: '人材支援',
    titleEn: 'Talent Solutions',
    descJa:
      '人材紹介会社ではなく、人材課題ソリューションファーム。中立コンサルから入り、採用・育成・派遣・外部委託を組み合わせて根本解決します。',
    descEn:
      'Not a staffing agency — a talent solutions firm. Starting from a neutral diagnosis, we combine hiring, development, staffing, and outsourcing to solve at the root.',
    image: '/service-talent.jpg',
    href: '/talent',
  },
]

const coreServices = [
  {
    titleJa: 'コーポレートフードサービス',
    titleEn: 'Corporate Food Service',
    descJa:
      '外資・大手企業のオフィスカフェ・社員食堂・エグゼクティブダイニングを、企画から運営まで一気通貫で再設計。グローバル金融機関からITまで支援実績多数。',
    descEn:
      'End-to-end redesign of office cafés, employee dining, and executive dining for global enterprises — proven across leading financial institutions and tech firms.',
    image: '/service-corporate-food.jpg',
    href: '/corporate-food',
  },
  {
    titleJa: 'ケータリング・イベント',
    titleEn: 'Catering & Events',
    descJa:
      'VIPイベント・役員会・社内パーティー・ポップアップまで、目的とグレードに応じた食体験を設計・実装します。',
    descEn:
      'Designing and executing food experiences — from VIP events and board dinners to internal parties and pop-ups — calibrated to purpose and standard.',
    image: '/service-catering.jpg',
    href: '/catering',
  },
  {
    titleJa: '地方創生支援',
    titleEn: 'Regional Revitalization',
    descJa:
      '食・農・観光を掛け合わせた地域ブランディングと事業開発。自治体・地域事業者と共に、持続可能な仕組みを現場で設計します。',
    descEn:
      'Regional branding and business development built across food, agriculture, and tourism — designed on-site with local governments and operators for sustainability.',
    image: '/service-regional.jpg',
    href: '/regional',
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
            <div className="flex flex-col gap-y-4 text-base md:text-lg leading-relaxed text-zinc-700">
              <p className="text-darkNavy font-bold text-lg md:text-xl">
                {language === 'ja'
                  ? 'ホスピタリティを再設計する Hospitality Innovation Firm。'
                  : 'A Hospitality Innovation Firm — redesigning hospitality, end to end.'}
              </p>
              <p>
                {language === 'ja'
                  ? '私たちは、現場運用で培ったホスピタリティの知見を起点に、「現場のAI/DX」と「人材課題のソリューション」という2つの注力領域で、業界の構造課題に挑んでいます。'
                  : "Built on the hospitality know-how we've accumulated by running the floor, we tackle the industry's structural challenges through two focus areas: on-the-floor AI/DX, and end-to-end Talent Solutions."}
              </p>
              <p>
                {language === 'ja'
                  ? '加えて、コーポレートフード・ケータリング・地方創生の現場で日々ホスピタリティを実装し、そこで得た知見を注力領域の方法論に還元する。これが私たちの5領域の組み立て方です。'
                  : 'In parallel, we implement hospitality on-site every day across Corporate Food, Catering, and Regional Revitalization — feeding what we learn back into the methodologies of our focus areas. This is how our five domains are wired together.'}
              </p>
            </div>
          </div>

          {/* 注力領域 - Featured */}
          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex items-center gap-x-3">
              <span className="inline-block w-2 h-2 rounded-full bg-darkNavy" />
              <p className="text-xs font-roboto tracking-[0.2em] font-semibold text-darkNavy uppercase">
                {language === 'ja' ? '注力領域 / Focus Areas' : 'Focus Areas'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredServices.map((service) => (
                <Link
                  key={service.titleJa}
                  href={`/${language}${service.href}`}
                  className="group bg-white rounded-md overflow-hidden shadow-sm border-2 border-darkNavy flex flex-col hover:shadow-lg transition-shadow duration-200 relative"
                >
                  <span className="absolute z-10 top-3 left-3 inline-block px-3 py-1 bg-darkNavy text-white text-[10px] font-roboto font-semibold tracking-widest rounded">
                    {language === 'ja' ? 'FOCUS' : 'FOCUS'}
                  </span>
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={service.image}
                      alt={language === 'ja' ? service.titleJa : service.titleEn}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div className="px-6 py-6 flex flex-col gap-y-3 flex-1">
                    <p className="text-darkNavy font-bold text-lg md:text-xl">
                      {language === 'ja' ? service.titleJa : service.titleEn}
                    </p>
                    <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                      {language === 'ja' ? service.descJa : service.descEn}
                    </p>
                    <p className="text-xs font-roboto text-darkNavy mt-auto pt-2 group-hover:underline underline-offset-2 font-semibold">
                      {language === 'ja' ? '詳しく見る →' : 'Learn more →'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 現場領域 - Core (Execution Domains) */}
          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex items-center gap-x-3">
              <span className="inline-block w-2 h-2 rounded-full bg-zinc-400" />
              <p className="text-xs font-roboto tracking-[0.2em] font-semibold text-zinc-500 uppercase">
                {language === 'ja'
                  ? '現場で実装する3領域 / Execution Domains'
                  : 'Execution Domains'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service) => (
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
