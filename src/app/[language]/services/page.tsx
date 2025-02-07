import { BreadCrumbs } from '@/components/bread-crumbs'
import { SectionBusinessArea } from '@/features/services/_components/section-business-area'
import { SectionExample } from '@/features/services/_components/section-example'
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
        '株式会社MUSICOではコンサルティングとフードサービスを主軸とした事業を展開しており、これまで社内レストラン運営や経営研修の開催、カンボジアでの農業支援などの実績を残してきました。',
    }
  }

  return {
    title: 'Services | MUSICO Inc.',
    description:
      'MUSICO Inc. provides consulting and food services as its main business, and has achieved results such as the operation of an internal restaurant, the holding of management training, and agricultural support in Cambodia.',
  }
}

export default async function ServicesPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <SectionFv language={language} />
      <SectionBusinessArea language={language} />
      <SectionExample language={language} />
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
