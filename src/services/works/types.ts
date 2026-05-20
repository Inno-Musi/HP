export type WorkImage = {
  url: string
}

export type WorkItem = {
  id: string
  titleJa: string
  titleEn?: string
  descriptionJa?: string
  descriptionEn?: string
  categoryJa?: string
  categoryEn?: string
  image?: WorkImage
  imageEn?: WorkImage
  publishedAt?: string
}

export type WorksListResponse = {
  contents: WorkItem[]
  totalCount: number
  offset: number
  limit: number
}
