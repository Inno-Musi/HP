import { BreadCrumbs } from '@/components/bread-crumbs'
import { NewsList } from '@/features/news/_components/news-list'
import type { SearchParams } from 'next/dist/server/request/search-params'

type Props = {
  params: Promise<{
    language: 'ja' | 'en'
  }>
}

export default async function NewsPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="py-[100px] flex flex-col gap-y-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {language === 'ja' ? 'お知らせ一覧' : 'Notifications'}
        </h1>
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
