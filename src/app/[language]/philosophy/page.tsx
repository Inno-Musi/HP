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

export default async function PhilosophyPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="pb-[100px]">
        <SectionFv language={language} />
        <SectionConcept language={language} />
        <SectionFlexible language={language} />
        <SectionAction language={language} />
      </div>
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
