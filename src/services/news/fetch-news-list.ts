import devSeed from './dev-seed.json'
import type { NewsItem, NewsListResponse } from './types'

// Local-only preview: when the CMS has no published news (the `news` API
// does not exist yet), fall back to seed data in development so /news can
// be previewed. Never runs in production builds.
const devSeedFallback = (limit?: number): NewsListResponse => {
  const items = devSeed as NewsItem[]
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
  fields?: string[]
}

const createEmptyNewsList = (limit?: number): NewsListResponse => ({
  contents: [],
  totalCount: 0,
  offset: 0,
  limit: limit ?? 0,
})

export const fetchNewsList = async ({
  limit,
  fields,
}: Props): Promise<NewsListResponse> => {
  const apiKey = process.env.MICROCMS_API_KEY

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') return devSeedFallback(limit)
    return createEmptyNewsList(limit)
  }

  const queries = []
  if (limit) queries.push(`limit=${limit}`)
  if (fields?.length) queries.push(`fields=${fields.join(',')}`)

  const queryString = queries.length ? `?${queries.join('&')}` : ''

  try {
    const res = await fetch(
      `https://musico-hp.microcms.io/api/v1/news${queryString}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': apiKey,
        },
      },
    )

    if (!res.ok) throw new Error('Failed to fetch news')

    const data = (await res.json()) as NewsListResponse

    if (data.contents.length === 0 && process.env.NODE_ENV === 'development') {
      return devSeedFallback(limit)
    }

    return data
  } catch (error) {
    console.warn('Failed to fetch news', error)
    if (process.env.NODE_ENV === 'development') return devSeedFallback(limit)
    return createEmptyNewsList(limit)
  }
}
