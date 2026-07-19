import { SectionContact } from '@/features/root/_components/section-contact'
import { SectionFv } from '@/features/root/_components/section-fv'
import { SectionNews } from '@/features/root/_components/section-news'
import { SectionServices } from '@/features/root/_components/section-services'
import { SectionWorks } from '@/features/root/_components/section-works'
import {
  TrustBar,
  companyTrustSectors,
  companyTrustStats,
} from '@/components/trust-bar'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{
    language: 'en' | 'ja'
  }>
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { language } = await params

  if (language === 'ja') {
    return buildMetadata({
      language,
      title: '株式会社MUSICO | A Hospitality Innovation Firm',
      description:
        'MUSICOは、ホスピタリティを再設計する Hospitality Innovation Firm。食・空間・運用・テクノロジーを一気通貫で組み立て、AI/DXと人材支援を注力領域に、コーポレートフード・ケータリング・地方創生の現場で価値を実装します。',
    })
  }

  return buildMetadata({
    language,
    title: 'MUSICO Inc. | A Hospitality Innovation Firm',
    description:
      'MUSICO is a Hospitality Innovation Firm. We weave food, space, operations, and technology into one continuous system — with AI/DX and Talent as focus areas, implemented on-site across corporate food, catering, and regional revitalization.',
  })
}

export default async function HomePage({ params }: Props) {
  const { language } = await params

  return (
    <div className="flex flex-col gap-y-12 lg:gap-y-20 bg-ivory overflow-hidden">
      <SectionFv language={language} />
      <TrustBar
        language={language}
        labelJa="支援実績のある業種"
        labelEn="Sectors We Serve"
        sectors={companyTrustSectors}
        stats={companyTrustStats}
      />
      <SectionServices language={language} />
      <SectionWorks language={language} />
      <SectionNews language={language} />
      <SectionContact language={language} />
    </div>
  )
}
