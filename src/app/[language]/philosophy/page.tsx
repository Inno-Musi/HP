import { BreadCrumbs } from '@/components/bread-crumbs'
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
        '私たちは、戦略策定に留まらず、実行と成果創出にコミットするコンサルティング&ソリューションパートナーです。豊富な事業実績と専門チームによる実行力を強みとしています。',
    }
  }

  return {
    title: 'Corporate Philosophy | MUSICO Inc.',
    description:
      'We are a consulting and solutions partner committed not only to strategy development but also to execution and delivering results. Our strengths lie in our extensive business track record and the execution capabilities of our expert team.',
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
