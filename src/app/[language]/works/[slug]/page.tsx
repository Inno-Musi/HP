import { WorkContent } from '@/features/works/_components/work-content'
import { removeHtmlTag } from '@/helpers/remove-html-tag'
import { fetchWorkDetail } from '@/services/works/fetch-work-detail'
import { Suspense } from 'react'

type Props = {
  params: Promise<{ language: 'ja' | 'en'; slug: string }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language, slug } = await params
  const work = await fetchWorkDetail(slug)

  if (!work) {
    return {
      title:
        language === 'ja'
          ? '実績・事例 | 株式会社MUSICO'
          : 'Works | MUSICO Inc.',
    }
  }

  if (language === 'ja') {
    return {
      title: `${work.titleJa} | 株式会社MUSICO`,
      description: removeHtmlTag(work.descriptionJa || work.contentJa || '')
        .slice(0, 80)
        .trim(),
    }
  }

  const title = work.titleEn || work.titleJa
  const description =
    work.descriptionEn || work.contentEn || work.descriptionJa || work.contentJa

  return {
    title: `${title} | MUSICO Inc.`,
    description: removeHtmlTag(description || '')
      .slice(0, 120)
      .trim(),
  }
}

export default async function WorkDetailPage({ params }: Props) {
  const { language, slug } = await params

  return (
    <Suspense>
      <WorkContent language={language} slug={slug} />
    </Suspense>
  )
}
