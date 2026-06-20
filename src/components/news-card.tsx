import { removeHtmlTag } from '@/helpers/remove-html-tag'
import dayjs from '@/lib/dayjs'
import type { NewsItem } from '@/services/news/types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  news: NewsItem
  language: 'ja' | 'en'
}

export const NewsCard = ({ news, language }: Props) => {
  const imageUrlJa = news.fvImage ? news.fvImage.url : '/musico-logo.png'
  const imageUrlEn = news.fvImageEn
    ? news.fvImageEn.url
    : news.fvImage
      ? news.fvImage.url
      : '/musico-logo.png'

  const newsDetail =
    language === 'ja'
      ? removeHtmlTag(news.contentJa).slice(0, 50)
      : removeHtmlTag(news.contentEn).slice(0, 100)

  return (
    <div key={news.id} className="bg-paper flex flex-col h-full">
      <Link
        href={`/${language}/news/${news.id}`}
        className="relative aspect-[16/9] block group overflow-hidden"
      >
        <Image
          src={language === 'ja' ? imageUrlJa : imageUrlEn}
          alt={language === 'ja' ? news.titleJa : news.titleEn}
          fill
          className="object-cover group-hover:scale-110 transition-all duration-300"
        />
      </Link>
      <div className="p-3 flex flex-col gap-y-2 justify-between flex-grow">
        <div className="flex flex-col gap-y-1">
          <Link
            href={`/${language}/news/${news.id}`}
            className="font-bold text-lg text-darkNavy"
          >
            {language === 'ja' ? news.titleJa : news.titleEn}
          </Link>
          <p>{newsDetail}...</p>
        </div>
        <p className="text-gray text-end mt-1">
          {dayjs(news.publishedAt).format('YYYY/MM/DD')}
        </p>
      </div>
    </div>
  )
}
