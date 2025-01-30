import { NewsContent } from '@/features/news/news-id/_components/news-content'
import { removeHtmlTag } from '@/helpers/remove-html-tag'
import { fetchNewsDetail } from '@/services/news/fetch-news'

type Props = {
  params: Promise<{ language: 'ja' | 'en'; id: string }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language, id } = await params

  const news = await fetchNewsDetail(id)

  if (language === 'ja') {
    return {
      title: `${news.titleJa} | 株式会社MUSICO`,
      description: removeHtmlTag(news.contentJa).slice(0, 80),
    }
  }

  return {
    title: `${news.titleEn} | MUSICO Inc.`,
    description: removeHtmlTag(news.contentEn).slice(0, 120),
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { language, id } = await params

  return <NewsContent language={language} id={id} />
}
