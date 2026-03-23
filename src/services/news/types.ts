export type NewsImage = {
  url: string
}

export type NewsItem = {
  id: string
  titleJa: string
  titleEn: string
  contentJa: string
  contentEn: string
  publishedAt: string
  fvImage?: NewsImage
  fvImageEn?: NewsImage
}

export type NewsListResponse = {
  contents: NewsItem[]
  totalCount: number
  offset: number
  limit: number
}
