import { SectionContact } from '@/features/root/_components/section-contact'
import { SectionFv } from '@/features/root/_components/section-fv'
import { SectionNews } from '@/features/root/_components/section-news'
import { SectionServices } from '@/features/root/_components/section-services'
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
    return {
      title: '株式会社MUSICO',
      description:
        'MUSICOは「幸せの種を蒔く」をビジョンに掲げ、戦略から実行まで伴走するコンサルティング領域と、企業内のレストランの運営、ケータリングの提供を行うフードサービス領域を軸として、クライアント企業の成長を加速させるお手伝いを行なっています。',
    }
  }

  return {
    title: 'MUSICO Inc.',
    description:
      'MUSICO embraces the vision of "Sowing the Seeds of Happiness" and supports client companies in accelerating their growth. We operate in two core areas: consulting, where we provide end-to-end support from strategy to execution, and food services, which include managing in-house corporate restaurants and offering catering services.',
  }
}

export default async function HomePage({ params }: Props) {
  const { language } = await params

  return (
    <div className="pb-[100px] flex flex-col gap-y-12 lg:gap-y-20">
      <SectionFv language={language} />
      <SectionServices language={language} />
      <SectionNews language={language} />
      <SectionContact language={language} />
    </div>
  )
}
