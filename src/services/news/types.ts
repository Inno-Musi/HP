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
  /** 最終改訂日時。本文を直すと更新されるので sitemap の lastmod に使う */
  revisedAt?: string
  fvImage?: NewsImage
  fvImageEn?: NewsImage
}

export type NewsListResponse = {
  contents: NewsItem[]
  totalCount: number
  offset: number
  limit: number
}
