import { BreadCrumbs } from '@/components/bread-crumbs'
import { SectionBusinessArea } from '@/features/services/_components/section-business-area'
import { SectionExample } from '@/features/services/_components/section-example'

type Props = {
  params: Promise<{ language: 'ja' | 'en' }>
}

export default async function ServicesPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div>
        <SectionBusinessArea language={language} />
        <SectionExample language={language} />
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
