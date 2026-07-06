import { BreadCrumbs } from '@/components/bread-crumbs'
import { TitleMain } from '@/components/title-main'
import { InsightsList } from '@/features/insights/_components/insights-list'
import { buildMetadata } from '@/lib/metadata'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export const revalidate = 600

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return buildMetadata({
      language,
      path: 'insights',
      title: 'インサイト（記事・コラム） | 株式会社MUSICO',
      description:
        'フード・ホスピタリティ・AI/DX・人材など、MUSICOが現場で培った知見を発信する記事一覧。社員食堂・オフィスカフェ・ケータリング・ホスピタリティDXの実践的なノウハウをお届けします。',
    })
  }

  return buildMetadata({
    language,
    path: 'insights',
    title: 'Insights | MUSICO Inc.',
    description:
      'Articles sharing on-the-ground insights from MUSICO across food, hospitality, AI/DX, and talent — practical know-how on employee dining, office cafés, catering, and hospitality DX.',
  })
}

export default async function InsightsPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-ivory">
        <div className="max-w-[calc(100vw-32px)] w-[800px] lg:w-[1200px] mx-auto py-24 md:py-32 flex flex-col gap-y-10">
          <TitleMain
            titleJa="インサイト"
            titleEn="Insights"
            language={language}
          />
          <InsightsList language={language} />
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: 'インサイト',
            labelEn: 'Insights',
            href: '/insights',
          },
        ]}
      />
    </>
  )
}
