import { Button } from '@/components/button'
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
  const res = await fetchNewsList({ limit: FETCH_LIMIT })
  const { contents: newsList } = res

  return (
    <div className="flex flex-col gap-y-10 items-center">
      <MotionUp>
        <div className="text-center">
          <p className="text-6xl font-medium text-darkNavy font-roboto">NEWS</p>
          {language === 'ja' && <p className="text-lg font-medium">お知らせ</p>}
        </div>
      </MotionUp>
      <div className="w-[1200px] max-w-[calc(100vw-32px)] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {newsList.map((news: any) => (
          <MotionUp key={news.id}>
            <NewsCard news={news} language={language} />
          </MotionUp>
        ))}
      </div>
      <MotionUp>
        <Link href="/ja/news">
          <Button
            type="button"
            text="See More"
            className="rounded-full bg-white text-darkNavy border border-darkNavy py-3 px-12 hover:opacity-100 hover:bg-darkNavy hover:text-white duration-300 text-lg font-roboto"
          />
        </Link>
      </MotionUp>
    </div>
  )
}
