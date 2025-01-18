export const fetchNewsDetail = async (id: string) => {
  const res = await fetch(`https://musico-hp.microcms.io/api/v1/news/${id}`, {
    headers: {
      'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
    },
  })

  if (!res.ok) throw new Error('Failed to fetch news')

  const data = await res.json()

  return data
}
