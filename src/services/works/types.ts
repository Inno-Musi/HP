export type WorkImage = {
  url: string
}

export type WorkItem = {
  id: string
  slug?: string
  titleJa: string
  titleEn?: string
  descriptionJa?: string
  descriptionEn?: string
  contentJa?: string
  contentEn?: string
  categoryJa?: string
  categoryEn?: string
  image?: WorkImage
  imageEn?: WorkImage
  isFeatured?: boolean
  publishedAt?: string
}

export type WorksListResponse = {
  contents: WorkItem[]
  totalCount: number
  offset: number
  limit: number
}
