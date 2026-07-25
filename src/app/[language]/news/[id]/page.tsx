import { NewsContent } from '@/features/news/news-id/_components/news-content'
import { removeHtmlTag } from '@/helpers/remove-html-tag'
import { buildMetadata } from '@/lib/metadata'
import { fetchNewsDetail } from '@/services/news/fetch-news'
import { fetchNewsList } from '@/services/news/fetch-news-list'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type Props = {
  params: Promise<{ language: 'ja' | 'en'; id: string }>
}

export const revalidate = 600

export const generateStaticParams = async () => {
  const data = await fetchNewsList({ limit: 100, fields: ['id'] })

  return (['ja', 'en'] as const).flatMap((language) =>
    data.contents.map((news) => ({ language, id: news.id })),
  )
}

export const generateMetadata = async ({ params }: Props) => {
  const { language, id } = await params

  const news = await fetchNewsDetail(id)

  if (!news) {
    return {
      title:
        language === 'ja' ? 'お知らせ | 株式会社MUSICO' : 'News | MUSICO Inc.',
    }
  }

  const ogImage =
    (language === 'en' ? news.fvImageEn?.url : news.fvImage?.url) ??
    news.fvImage?.url

  if (language === 'ja') {
    return buildMetadata({
      language,
      path: `news/${id}`,
      title: `${news.titleJa} | 株式会社MUSICO`,
      description: removeHtmlTag(news.contentJa).slice(0, 80),
      ogImage,
      ogType: 'article',
    })
  }

  return buildMetadata({
    language,
    path: `news/${id}`,
    title: `${news.titleEn} | MUSICO Inc.`,
    description: removeHtmlTag(news.contentEn).slice(0, 120),
    ogImage,
    ogType: 'article',
  })
}

export default async function NewsDetailPage({ params }: Props) {
  const { language, id } = await params

  // ストリーミング開始前にここで判定する。Suspense の内側で notFound() を
  // 呼ぶとヘッダー送出後になり、404ページの見た目のまま HTTP 200 が返る
  // （＝ソフト404）。fetch は Next にメモ化されるため追加コストは無い。
  const news = await fetchNewsDetail(id)

  if (!news) {
    notFound()
  }

  return (
    <Suspense>
      <NewsContent language={language} id={id} />
    </Suspense>
  )
}
