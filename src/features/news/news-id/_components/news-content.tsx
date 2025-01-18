import { BreadCrumbs } from '@/components/bread-crumbs'
import dayjs from '@/lib/dayjs'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import { fetchNewsDetail } from '../_services/fetch-news-detail'

type Props = {
  language: 'ja' | 'en'
  id: string
}

export const NewsContent = async ({ language, id }: Props) => {
  const news = await fetchNewsDetail(id)
  const imageUrlJa = news.fvImage ? news.fvImage.url : '/musico-logo.png'
  const imageUrlEn = news.fvImageEn
    ? news.fvImageEn.url
    : news.fvImage
      ? news.fvImage.url
      : '/musico-logo.png'

  const xShareUrlJa = `https://x.com/intent/tweet?text=【株式会社Musico】${news.titleJa}&url=${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/ja/news/${id}`
  const xShareUrlEn = `https://x.com/intent/tweet?text=【Musico Inc.】${news.titleEn}&url=${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/en/news/${id}`
  const facebookShareUrlJa = `https://www.facebook.com/share.php?u=${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/ja/news/${id}`
  const facebookShareUrlEn = `https://www.facebook.com/share.php?u=${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/en/news/${id}`

  return (
    <>
      <div className="py-[100px] w-[900px] max-w-[calc(100vw-32px)] mx-auto flex flex-col gap-y-16">
        <h1 className="text-3xl font-bold text-center">
          {language === 'ja' ? news.titleJa : news.titleEn}
        </h1>
        <div className="bg-white">
          <div className="relative aspect-[16/9]">
            <Image
              src={language === 'ja' ? imageUrlJa : imageUrlEn}
              alt={news.titleJa}
              fill
              className="object-contain bg-emerald/10"
            />
          </div>
          <div className="px-10 pb-14 pt-8 flex flex-col gap-y-6">
            <div className="flex justify-between items-center">
              <p className="text-zinc-500 font-bold text-lg">
                {dayjs(news.publishedAt).format('YYYY/MM/DD')}
              </p>
              <div className="flex gap-x-3 items-center">
                <p className="font-bold text-lg text-zinc-500 underline underline-offset-2">
                  Share
                </p>
                <Link
                  href={language === 'ja' ? xShareUrlJa : xShareUrlEn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/x-logo.svg"
                    alt="X logo"
                    width={1200}
                    height={1227}
                    className="w-8 rounded-md p-1 bg-black"
                  />
                </Link>
                <Link
                  href={
                    language === 'ja' ? facebookShareUrlJa : facebookShareUrlEn
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/facebook-logo.png"
                    alt="Facebook logo"
                    width={1200}
                    height={1227}
                    className="w-8"
                  />
                </Link>
              </div>
            </div>
            <div className="prose prose-md min-w-full">
              {language === 'ja'
                ? parse(news.contentJa)
                : parse(news.contentEn)}
            </div>
          </div>
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: 'お知らせ一覧',
            labelEn: 'Notifications',
            href: '/news',
          },
          {
            labelJa: news.titleJa,
            labelEn: news.titleEn,
            href: `/news/${id}`,
          },
        ]}
      />
    </>
  )
}
