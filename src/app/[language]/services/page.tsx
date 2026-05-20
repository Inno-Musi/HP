import { BreadCrumbs } from '@/components/bread-crumbs'
import { SectionBusinessArea } from '@/features/services/_components/section-business-area'
import { SectionFv } from '@/features/services/_components/section-fv'

type Props = {
  params: Promise<{ language: 'ja' | 'en' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return {
      title: '事業内容 | 株式会社MUSICO',
      description:
        '株式会社MUSICOの事業内容です。コーポレートフードサービス、ケータリングサービス、地方創生支援、AI導入支援、人材支援を展開しています。',
    }
  }

  return {
    title: 'Services | MUSICO Inc.',
    description:
      'Services of MUSICO Inc., including corporate food service, catering, regional revitalization support, AI implementation support, and talent support.',
  }
}

export default async function ServicesPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <SectionFv language={language} />
      <SectionBusinessArea language={language} />
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
