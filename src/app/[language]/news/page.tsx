import { BreadCrumbs } from '@/components/bread-crumbs'
import { NewsList } from '@/features/news/_components/news-list'
import type { SearchParams } from 'next/dist/server/request/search-params'

type Props = {
  params: Promise<{
    language: 'ja' | 'en'
  }>
  searchParams: Promise<SearchParams>
}

export default async function NewsPage({ params, searchParams }: Props) {
  const { language } = await params
  const { page: pageParam } = await searchParams
  let page: number
  if (!pageParam || Array.isArray(pageParam)) {
    page = 1
  } else {
    page = Number(pageParam)
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-center py-[100px]">
        {language === 'ja' ? 'お知らせ一覧' : 'Notifications'}
      </h1>
      <NewsList />
      {/* <Pagenation language={language} page={page} /> */}
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
    </div>
  )
}
