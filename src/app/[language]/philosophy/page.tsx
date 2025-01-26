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
      <div className="pb-[50px] md:pb-[100px]">
        <SectionFv language={language} />
        <div className="w-[800px] lg:w-[1200px] mx-auto max-w-[calc(100vw-32px)] flex flex-col gap-y-12 md:gap-y-[100px] pt-10 md:pt-16">
          <SectionConcept language={language} />
          <SectionFlexible language={language} />
          <SectionAction language={language} />
        </div>
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
