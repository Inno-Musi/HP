import { fetchWorksList } from './fetch-works-list'
import type { WorkItem } from './types'

export const fetchWorkDetail = async (
  slug: string,
): Promise<WorkItem | null> => {
  const data = await fetchWorksList({
    limit: 1,
    filters: `slug[equals]${slug}`,
  })

  return data.contents[0] ?? null
}
