import type { WorkItem } from './types'

// Fetch a single work by content id, including drafts when a draftKey is
// given (microCMS draft preview). Always bypasses the cache so editors see
// the latest saved draft.
export const fetchWorkById = async (
  id: string,
  draftKey?: string,
): Promise<WorkItem | null> => {
  const apiKey = process.env.MICROCMS_API_KEY

  if (!apiKey) return null

  const query = draftKey ? `?draftKey=${encodeURIComponent(draftKey)}` : ''

  try {
    const res = await fetch(
      `https://musico-hp.microcms.io/api/v1/works/${encodeURIComponent(id)}${query}`,
      {
        headers: { 'X-MICROCMS-API-KEY': apiKey },
        cache: 'no-store',
      },
    )

    if (!res.ok) return null

    return (await res.json()) as WorkItem
  } catch (error) {
    console.warn('Failed to fetch work by id', error)
    return null
  }
}
