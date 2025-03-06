import { fetchNewsList } from '@/services/news/fetch-news-list'
import Link from 'next/link'
import { FETCH_LIMIT } from '../_assets/const/fetch-limit'

type Props = {
  language: 'ja' | 'en'
  page: number
}

export const Pagenation = async ({ page, language }: Props) => {
  const news = await fetchNewsList({})
  const totalCount = news.totalCount
  const totalPage = Math.ceil(totalCount / FETCH_LIMIT)

  return (
    <div className="w-fit mx-auto flex items-center gap-x-2">
      <Link
        href={`/${language}/news?page=${page - 1}`}
        className="underline underline-offset-4 text-lg"
      >
        prev
      </Link>
      {page - 1 !== 0 && (
        <Link
          href={`/${language}/news?page=${page - 1}`}
          className="bg-moss/30 h-10 w-10 flex items-center justify-center"
        >
          {page - 1}
        </Link>
      )}
      <Link
        href={`/${language}/news?page=${page}`}
        className="bg-moss h-10 w-10 flex items-center justify-center text-white"
      >
        {page}
      </Link>
      <Link
        href={`/${language}/news?page=${page + 1}`}
        className="bg-moss/30 h-10 w-10 flex items-center justify-center"
      >
        {page + 1}
      </Link>
      <p className="text-lg">・・・</p>
      <Link
        href={`/${language}/news?page=${totalPage}`}
        className="bg-moss/30 h-10 w-10 flex items-center justify-center"
      >
        {totalPage}
      </Link>
      <Link
        href={`/${language}/news?page=${page + 1}`}
        className="underline underline-offset-4 text-lg"
      >
        next
      </Link>
    </div>
  )
}
