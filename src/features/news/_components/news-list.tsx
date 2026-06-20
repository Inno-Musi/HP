import dayjs from '@/lib/dayjs'
import { fetchNewsList } from '@/services/news/fetch-news-list'
import Link from 'next/link'

type Props = {
  language: 'ja' | 'en'
}

export const NewsList = async ({ language }: Props) => {
  const data = await fetchNewsList({})
  const { contents: news } = data

  if (news.length === 0) {
    return (
      <p className="text-center text-muted">
        {language === 'ja'
          ? 'お知らせは現在準備中です。'
          : 'No news at the moment.'}
      </p>
    )
  }

  return (
    <ul className="w-[760px] max-w-[calc(100vw-32px)] mx-auto border-t border-hairline">
      {news.map((item) => {
        const title = language === 'ja' ? item.titleJa : item.titleEn
        return (
          <li key={item.id} className="border-b border-hairline">
            <Link
              href={`/${language}/news/${item.id}`}
              className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8 sm:py-6"
            >
              <time
                dateTime={item.publishedAt}
                className="shrink-0 font-display text-sm tracking-wider text-brass tabular-nums sm:w-28"
              >
                {dayjs(item.publishedAt).format('YYYY.MM.DD')}
              </time>
              <span className="font-display text-lg leading-snug text-ink transition-colors duration-300 group-hover:text-brass sm:text-xl">
                {title}
              </span>
              <span
                aria-hidden
                className="ml-auto hidden shrink-0 self-center text-brass opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:block"
              >
                →
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
