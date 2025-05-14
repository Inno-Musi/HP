import { NewsCard } from '@/components/news-card'
import { fetchNewsList } from '@/services/news/fetch-news-list'

type Props = {
  language: 'ja' | 'en'
}

export const NewsList = async ({ language }: Props) => {
  const data = await fetchNewsList({})
  const { contents: news } = data

  return (
    <div className="w-[1200px] max-w-[calc(100vw-32px)] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {news.map((news: any) => (
        <NewsCard key={news.id} news={news} language={language} />
      ))}
    </div>
  )
}
