import { BreadCrumbs } from '@/components/bread-crumbs'
import { TitleMain } from '@/components/title-main'
import { WorksList } from '@/features/works/_components/works-list'
import { buildMetadata } from '@/lib/metadata'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return buildMetadata({
      language,
      path: 'works',
      title: '実績・事例 | 株式会社MUSICO',
      description:
        '外資系金融機関のオフィスカフェ・エグゼクティブダイニング運営から、AI・自動化による業務再設計、地方創生まで。株式会社MUSICOの実績・導入事例をご紹介します。',
    })
  }

  return buildMetadata({
    language,
    path: 'works',
    title: 'Works | MUSICO Inc.',
    description:
      'Case studies from MUSICO Inc. — office café and executive dining operations for global financial institutions, AI-driven operational redesign, and regional revitalization.',
  })
}

export default async function WorksPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-ivory">
        <div className="max-w-[calc(100vw-32px)] w-[800px] lg:w-[1200px] mx-auto py-24 md:py-32 flex flex-col gap-y-10">
          <TitleMain titleJa="実績・事例" titleEn="Works" language={language} />
          <WorksList language={language} />
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '実績・事例',
            labelEn: 'Works',
            href: `/${language}/works`,
          },
        ]}
      />
    </>
  )
}
