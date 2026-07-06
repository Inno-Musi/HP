import { WorkContent } from '@/features/works/_components/work-content'
import { removeHtmlTag } from '@/helpers/remove-html-tag'
import { buildMetadata } from '@/lib/metadata'
import { fetchWorkDetail } from '@/services/works/fetch-work-detail'
import { fetchWorksList } from '@/services/works/fetch-works-list'
import { Suspense } from 'react'

type Props = {
  params: Promise<{ language: 'ja' | 'en'; slug: string }>
}

export const revalidate = 600

export const generateStaticParams = async () => {
  const data = await fetchWorksList({ limit: 100, fields: ['slug'] })

  return (['ja', 'en'] as const).flatMap((language) =>
    data.contents
      .filter((work) => work.slug)
      .map((work) => ({ language, slug: work.slug as string })),
  )
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

  const ogImage =
    (language === 'en' ? work.imageEn?.url : work.image?.url) ??
    work.image?.url

  if (language === 'ja') {
    return buildMetadata({
      language,
      path: `works/${slug}`,
      title: `${work.titleJa} | 株式会社MUSICO`,
      description: removeHtmlTag(work.descriptionJa || work.contentJa || '')
        .slice(0, 80)
        .trim(),
      ogImage,
      ogType: 'article',
    })
  }

  const title = work.titleEn || work.titleJa
  const description =
    work.descriptionEn || work.contentEn || work.descriptionJa || work.contentJa

  return buildMetadata({
    language,
    path: `works/${slug}`,
    title: `${title} | MUSICO Inc.`,
    description: removeHtmlTag(description || '')
      .slice(0, 120)
      .trim(),
    ogImage,
    ogType: 'article',
  })
}

export default async function WorkDetailPage({ params }: Props) {
  const { language, slug } = await params

  return (
    <Suspense>
      <WorkContent language={language} slug={slug} />
    </Suspense>
  )
}
