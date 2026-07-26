import devSeed from './dev-seed.json'
import type { NewsItem } from './types'

const devSeedDetail = (id: string): NewsItem | undefined =>
  (devSeed as NewsItem[]).find((n) => n.id === id)

export const fetchNewsDetail = async (
  id: string,
): Promise<NewsItem | null> => {
  try {
    const res = await fetch(`https://musico-hp.microcms.io/api/v1/news/${id}`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
      },
    })

    // 削除済み・存在しないIDは null を返し、呼び出し側で 404 にする。
    // throw すると Next が 500 を返し、Google のクロールが抑制される。
    if (res.status === 404) {
      if (process.env.NODE_ENV === 'development') {
        return devSeedDetail(id) ?? null
      }
      return null
    }

    if (!res.ok) throw new Error('Failed to fetch news')

    return (await res.json()) as NewsItem
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      const seed = devSeedDetail(id)
      if (seed) return seed
    }
    throw error
  }
}
