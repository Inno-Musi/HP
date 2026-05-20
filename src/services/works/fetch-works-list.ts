import type { WorksListResponse } from './types'

type Props = {
  limit?: number
  fields?: string[]
}

const createEmptyWorksList = (limit?: number): WorksListResponse => ({
  contents: [],
  totalCount: 0,
  offset: 0,
  limit: limit ?? 0,
})

export const fetchWorksList = async ({
  limit,
  fields,
}: Props): Promise<WorksListResponse> => {
  const apiKey = process.env.MICROCMS_API_KEY

  if (!apiKey) {
    return createEmptyWorksList(limit)
  }

  const queries = []
  if (limit) queries.push(`limit=${limit}`)
  if (fields?.length) queries.push(`fields=${fields.join(',')}`)

  const queryString = queries.length ? `?${queries.join('&')}` : ''

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
