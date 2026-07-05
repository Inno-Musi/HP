import { fetchInsightsList } from './fetch-insights-list'
import type { InsightItem } from './types'

export const fetchInsightDetail = async (
  slug: string,
): Promise<InsightItem | null> => {
  const data = await fetchInsightsList({
    limit: 1,
    filters: `slug[equals]${slug}`,
  })

  return data.contents[0] ?? null
}
