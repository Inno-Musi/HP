import { InsightContent } from '@/features/insights/_components/insight-content'
import { removeHtmlTag } from '@/helpers/remove-html-tag'
import { buildMetadata } from '@/lib/metadata'
import { fetchInsightDetail } from '@/services/insights/fetch-insight'
import { fetchInsightsList } from '@/services/insights/fetch-insights-list'
import { Suspense } from 'react'

type Props = {
  params: Promise<{ language: 'ja' | 'en'; slug: string }>
}

export const revalidate = 600

export const generateStaticParams = async () => {
  const data = await fetchInsightsList({ limit: 100, fields: ['slug'] })

  return (['ja', 'en'] as const).flatMap((language) =>
    data.contents
      .filter((insight) => insight.slug)
      .map((insight) => ({ language, slug: insight.slug as string })),
  )
}

export const generateMetadata = async ({ params }: Props) => {
  const { language, slug } = await params
  const insight = await fetchInsightDetail(slug)

  if (!insight) {
    return {
      title:
        language === 'ja'
          ? 'インサイト | 株式会社MUSICO'
          : 'Insights | MUSICO Inc.',
    }
  }

  const image =
    language === 'en'
      ? insight.imageEn?.url ?? insight.image?.url
      : insight.image?.url

  if (language === 'ja') {
    return buildMetadata({
      language,
      path: `insights/${slug}`,
      title: `${insight.titleJa} | 株式会社MUSICO`,
      description: (
        insight.descriptionJa ||
        removeHtmlTag(insight.contentJa || '').slice(0, 120)
      ).trim(),
      ogImage: image,
      ogType: 'article',
    })
  }

  const title = insight.titleEn || insight.titleJa
  const description =
    insight.descriptionEn ||
    removeHtmlTag(insight.contentEn || insight.contentJa || '').slice(0, 120)

  return buildMetadata({
    language,
    path: `insights/${slug}`,
    title: `${title} | MUSICO Inc.`,
    description: description.trim(),
    ogImage: image,
    ogType: 'article',
  })
}

export default async function InsightDetailPage({ params }: Props) {
  const { language, slug } = await params

  return (
    <Suspense>
      <InsightContent language={language} slug={slug} />
    </Suspense>
  )
}
