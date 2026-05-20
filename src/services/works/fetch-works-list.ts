import type { WorksListResponse } from './types'

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

    return data
  } catch (error) {
    console.warn('Failed to fetch works', error)
    return createEmptyWorksList(limit)
  }
}
