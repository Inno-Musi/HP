import { BreadCrumbs } from '@/components/bread-crumbs'
import { MotionUp } from '@/components/motion-up'
import { SectionAction } from '@/features/philosophy/_components/section-action'
import { SectionConcept } from '@/features/philosophy/_components/section-concept'
import { SectionFlexible } from '@/features/philosophy/_components/section-flexible'
import { SectionFv } from '@/features/philosophy/_components/section-fv'

type Props = {
  params: Promise<{
    language: 'en' | 'ja'
  }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return {
      title: '経営理念 | 株式会社MUSICO',
      description:
        'MUSICOは「幸せの種を蒔く」をビジョンに掲げ、戦略段階から実行段階までオーダーメイドのコンサルティングとフードサービスを提供します。',
    }
  }

  return {
    title: 'Corporate Philosophy | MUSICO Inc.',
    description:
      'MUSICO upholds the vision of "Sowing the Seeds of Happiness" and provides tailor-made consulting and food services from the strategy phase to execution.',
  }
}

export default async function PhilosophyPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <SectionFv language={language} />
      <SectionConcept language={language} />
      <SectionFlexible language={language} />
      <SectionAction language={language} />
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '経営理念',
            labelEn: 'Corporate Philosophy',
            href: `/${language}/philosophy`,
          },
        ]}
      />
    </>
  )
}
