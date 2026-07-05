import { BreadCrumbs } from '@/components/bread-crumbs'
import { TitleMain } from '@/components/title-main'
import { NewsList } from '@/features/news/_components/news-list'
import { buildMetadata } from '@/lib/metadata'

type Props = {
  params: Promise<{
    language: 'ja' | 'en'
  }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return buildMetadata({
      language,
      path: 'news',
      title: 'お知らせ一覧 | 株式会社MUSICO',
      description:
        '株式会社MUSICOのサービス情報や、プレスリリースなどお知らせの一覧です。',
    })
  }

  return buildMetadata({
    language,
    path: 'news',
    title: 'News | MUSICO Inc.',
    description: 'News and press releases from MUSICO Inc.',
  })
}

export default async function NewsPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="py-24 md:py-32 flex flex-col gap-y-10 md:gap-y-12 bg-ivory">
        <TitleMain
          titleJa="お知らせ一覧"
          titleEn="Notifications"
          language={language}
        />
        <NewsList language={language} />
        {/* <Pagenation language={language} page={page} /> */}
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: 'お知らせ一覧',
            labelEn: 'Notifications',
            href: `/${language}/news`,
          },
        ]}
      />
    </>
  )
}
