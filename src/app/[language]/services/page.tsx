import { BreadCrumbs } from '@/components/bread-crumbs'
import { SectionBusinessArea } from '@/features/services/_components/section-business-area'
import { SectionExample } from '@/features/services/_components/section-example'
import { SectionFv } from '@/features/services/_components/section-fv'

type Props = {
  params: Promise<{ language: 'ja' | 'en' }>
}

export default async function ServicesPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="flex flex-col gap-y-20 pb-[50px] lg:pb-[100px]">
        <SectionFv language={language} />
        <div className="flex flex-col gap-y-10">
          <SectionBusinessArea language={language} />
          <SectionExample language={language} />
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '事業内容',
            labelEn: 'Services',
            href: `/${language}/services`,
          },
        ]}
      />
    </>
  )
}
