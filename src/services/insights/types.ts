export type InsightImage = {
  url: string
}

export type InsightItem = {
  id: string
  slug?: string
  titleJa: string
  titleEn?: string
  descriptionJa?: string
  descriptionEn?: string
  categoryJa?: string
  categoryEn?: string
  contentJa?: string
  contentEn?: string
  image?: InsightImage
  imageEn?: InsightImage
  publishedAt?: string
}

export type InsightsListResponse = {
  contents: InsightItem[]
  totalCount: number
  offset: number
  limit: number
}
