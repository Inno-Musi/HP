import dayjs from '@/lib/dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { fetchNews } from '../_services/fetch-news'

type Props = {
  language: 'ja' | 'en'
}

export const NewsList = async ({ language }: Props) => {
  const data = await fetchNews()
  const { contents: news } = data

  return (
    <div className="w-[1200px] max-w-[calc(100vw-32px)] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {news.map((news: any) => {
        const imageUrlJa = news.fvImage ? news.fvImage.url : '/musico-logo.png'
        const imageUrlEn = news.fvImageEn
          ? news.fvImageEn.url
          : news.fvImage
            ? news.fvImage.url
            : '/musico-logo.png'

        const newsDetail =
          language === 'ja'
            ? news.contentJa
                .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
                .slice(0, 50)
            : news.contentEn
                .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
                .slice(0, 100)

        return (
          <div key={news.id} className="bg-white flex flex-col">
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
                  className="font-bold text-lg"
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
      })}
    </div>
  )
}
