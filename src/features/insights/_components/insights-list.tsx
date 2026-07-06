import dayjs from '@/lib/dayjs'
import { fetchInsightsList } from '@/services/insights/fetch-insights-list'
import type { InsightItem } from '@/services/insights/types'
import Link from 'next/link'

type Props = {
  language: 'ja' | 'en'
}

const InsightCard = ({
  insight,
  language,
}: {
  insight: InsightItem
  language: 'ja' | 'en'
}) => {
  const title =
    language === 'ja' ? insight.titleJa : insight.titleEn || insight.titleJa
  const category =
    language === 'ja'
      ? insight.categoryJa
      : insight.categoryEn || insight.categoryJa
  const description =
    language === 'ja'
      ? insight.descriptionJa
      : insight.descriptionEn || insight.descriptionJa

  if (!insight.slug) return null

  return (
    <Link
      href={`/${language}/insights/${insight.slug}`}
      className="group flex flex-col gap-y-3 bg-paper rounded-md px-6 py-6 border border-hairline hover:border-brass transition-colors duration-300"
    >
      <div className="flex items-center gap-x-3 text-xs font-roboto tracking-widest uppercase">
        {category && <span className="text-brass">{category}</span>}
        {insight.publishedAt && (
          <span className="text-zinc-400">
            {dayjs(insight.publishedAt).format('YYYY/MM/DD')}
          </span>
        )}
      </div>
      <h2 className="font-display text-lg md:text-xl text-darkNavy leading-snug group-hover:underline underline-offset-4 decoration-brass/40">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-muted leading-relaxed line-clamp-3">
          {description}
        </p>
      )}
      <span className="text-xs font-roboto text-darkNavy mt-auto pt-1 group-hover:underline underline-offset-2">
        {language === 'ja' ? '記事を読む →' : 'Read article →'}
      </span>
    </Link>
  )
}

export const InsightsList = async ({ language }: Props) => {
  const data = await fetchInsightsList({ orders: '-publishedAt' })
  const insights = data.contents

  if (insights.length === 0) {
    return (
      <div className="border border-hairline bg-paper px-6 py-14 flex flex-col items-center gap-y-5 text-center">
        <p className="text-base text-ink/80 leading-relaxed max-w-2xl">
          {language === 'ja'
            ? 'フード・ホスピタリティ・AI/DX・人材など、現場の知見を発信する記事を順次公開してまいります。'
            : 'We will progressively publish articles sharing on-the-ground insights across food, hospitality, AI/DX, and talent.'}
        </p>
        <Link
          href={`/${language}/services`}
          className="inline-flex items-center gap-x-2 text-sm font-roboto tracking-wider uppercase text-brass border-b border-brass/40 pb-0.5 hover:border-brass transition-colors duration-300"
        >
          {language === 'ja' ? '事業内容を見る' : 'Explore our services'}
          <span aria-hidden>→</span>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {insights.map((insight) => (
        <InsightCard key={insight.id} insight={insight} language={language} />
      ))}
    </div>
  )
}
