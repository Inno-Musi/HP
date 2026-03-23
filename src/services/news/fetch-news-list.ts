import type { NewsListResponse } from './types'

type Props = {
  limit?: number
  fields?: string[]
}

export const fetchNewsList = async ({
  limit,
  fields,
}: Props): Promise<NewsListResponse> => {
  const queries = []
  if (limit) queries.push(`limit=${limit}`)
  if (fields?.length) queries.push(`fields=${fields.join(',')}`)

  const queryString = queries.length ? `?${queries.join('&')}` : ''

  const res = await fetch(
    `https://musico-hp.microcms.io/api/v1/news${queryString}`,
    {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
      },
    },
  )

  if (!res.ok) throw new Error('Failed to fetch news')

  const data = (await res.json()) as NewsListResponse

  return data
}
