import { MotionUp } from '@/components/motion-up'
import { NewsCard } from '@/components/news-card'
import { fetchNewsList } from '@/services/news/fetch-news-list'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

type Props = {
  language: 'ja' | 'en'
}

export const SectionNews = async ({ language }: Props) => {
  const FETCH_LIMIT = 3
  const res = await fetchNewsList(FETCH_LIMIT)
  const { contents: newsList } = res

  return (
    <div className="flex flex-col gap-y-10">
      <div className="text-center">
        <p className="text-6xl font-medium text-darkNavy">NEWS</p>
        {language === 'ja' && <p className="text-lg font-medium">お知らせ</p>}
      </div>
      <div className="w-[1200px] max-w-[calc(100vw-32px)] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {newsList.map((news: any) => (
          <MotionUp key={news.id}>
            <NewsCard news={news} language={language} />
          </MotionUp>
        ))}
      </div>
      <div className="w-[1200px] max-w-[calc(100vw-32px)] mx-auto flex justify-end">
        <Link
          href={`/${language}/news`}
          className="flex flex-col items-center group"
        >
          <span className="flex items-center gap-x-2">
            <span className="text-xl font-semibold">
              {language === 'ja' ? 'もっと見る' : 'See more'}
            </span>
            <FaArrowRight size={20} />
          </span>
          <span className="h-[1px] w-[0%] bg-darkNavy group-hover:w-[100%] duration-300" />
        </Link>
      </div>
    </div>
  )
}
