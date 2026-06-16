import devSeed from './dev-seed.json'
import type { WorkItem, WorksListResponse } from './types'

// Local-only preview: when the CMS has no published works yet, fall back to
// the seed data in development so /works can be previewed before publishing.
// This never runs in production builds.
const devSeedFallback = (
  limit?: number,
  filters?: string,
): WorksListResponse => {
  let items = devSeed as WorkItem[]
  const slugMatch = filters?.match(/slug\[equals\](.+)/)
  if (slugMatch) {
    items = items.filter((w) => w.slug === slugMatch[1])
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

const createEmptyWorksList = (limit?: number): WorksListResponse => ({
  contents: [],
  totalCount: 0,
  offset: 0,
  limit: limit ?? 0,
})

export const fetchWorksList = async ({
  limit,
  offset,
  fields,
  filters,
  orders,
}: Props): Promise<WorksListResponse> => {
  const apiKey = process.env.MICROCMS_API_KEY

  if (!apiKey) {
    return createEmptyWorksList(limit)
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
      `https://musico-hp.microcms.io/api/v1/works${queryString}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': apiKey,
        },
      },
    )

    if (!res.ok) throw new Error('Failed to fetch works')

    const data = (await res.json()) as WorksListResponse

    if (
      data.contents.length === 0 &&
      process.env.NODE_ENV === 'development'
    ) {
      return devSeedFallback(limit, filters)
    }

    return data
  } catch (error) {
    console.warn('Failed to fetch works', error)
    if (process.env.NODE_ENV === 'development') {
      return devSeedFallback(limit, filters)
    }
    return createEmptyWorksList(limit)
  }
}
