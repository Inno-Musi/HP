import { NewsContent } from '@/features/news/news-id/_components/news-content'

type Props = {
  params: Promise<{ language: 'ja' | 'en'; id: string }>
}

export default async function NewsDetailPage({ params }: Props) {
  const { language, id } = await params

  return <NewsContent language={language} id={id} />
}
