import devSeed from './dev-seed.json'
import type { InsightItem, InsightsListResponse } from './types'

// Local-only preview: when the CMS has no published insights yet, fall back to
// the seed data in development so /insights can be previewed before the
// microCMS `insights` API exists. This never runs in production builds.
const devSeedFallback = (
  limit?: number,
  filters?: string,
): InsightsListResponse => {
  let items = devSeed as InsightItem[]
  const slugMatch = filters?.match(/slug\[equals\](.+)/)
  if (slugMatch) {
    items = items.filter((item) => item.slug === slugMatch[1])
  }
  const sliced = typeof limit === 'number' ? items.slice(0, limit) : items
  return {
    contents: sliced,
    totalCount: items.length,
    offset: 0,
    limit: limit ?? items.length,
  }
}

type Props = {
  limit?: number
  offset?: number
  fields?: string[]
  filters?: string
  orders?: string
}

const createEmptyList = (limit?: number): InsightsListResponse => ({
  contents: [],
  totalCount: 0,
  offset: 0,
  limit: limit ?? 0,
})

export const fetchInsightsList = async ({
  limit,
  offset,
  fields,
  filters,
  orders = '-publishedAt',
}: Props): Promise<InsightsListResponse> => {
  const apiKey = process.env.MICROCMS_API_KEY

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') return devSeedFallback(limit, filters)
    return createEmptyList(limit)
  }

  const queries = new URLSearchParams()
  if (limit) queries.set('limit', String(limit))
  if (offset) queries.set('offset', String(offset))
  if (fields?.length) queries.set('fields', fields.join(','))
  if (filters) queries.set('filters', filters)
  if (orders) queries.set('orders', orders)

  const queryString = queries.size ? `?${queries.toString()}` : ''

  try {
    const res = await fetch(
      `https://musico-hp.microcms.io/api/v1/insights${queryString}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': apiKey,
        },
      },
    )

    if (!res.ok) throw new Error('Failed to fetch insights')

    const data = (await res.json()) as InsightsListResponse

    if (data.contents.length === 0 && process.env.NODE_ENV === 'development') {
      return devSeedFallback(limit, filters)
    }

    return data
  } catch (error) {
    console.warn('Failed to fetch insights', error)
    if (process.env.NODE_ENV === 'development') {
      return devSeedFallback(limit, filters)
    }
    return createEmptyList(limit)
  }
}
