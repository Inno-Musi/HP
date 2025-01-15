import { fetchNews } from '../_services/fetch-news'

export const NewsList = async () => {
  const data = await fetchNews()
  const { contents: news } = data

  return (
    <div>
      {news.map((news: any) => (
        <div key={news.id} className="bg-white">
          {news.title}
        </div>
      ))}
    </div>
  )
}
