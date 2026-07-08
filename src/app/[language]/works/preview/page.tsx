import { WorkArticle } from '@/features/works/_components/work-content'
import { fetchWorkById } from '@/services/works/fetch-work-by-id'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Draft preview for works: opened from the microCMS admin with
// ?id={CONTENT_ID}&draftKey={DRAFT_KEY}. Never indexed, never cached.

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
  searchParams: Promise<{ id?: string; draftKey?: string }>
}

export const metadata: Metadata = {
  title: '下書きプレビュー | 株式会社MUSICO',
  robots: { index: false, follow: false },
}

export default async function WorkPreviewPage({ params, searchParams }: Props) {
  const { language: rawLanguage } = await params
  const language = rawLanguage === 'en' ? 'en' : 'ja'
  const { id, draftKey } = await searchParams

  if (!id || !draftKey) {
    notFound()
  }

  const work = await fetchWorkById(id, draftKey)

  if (!work) {
    notFound()
  }

  return (
    <>
      <div className="bg-darkNavy text-white text-center text-sm py-2 px-4">
        {language === 'ja'
          ? '下書きプレビュー — このページは公開されていません'
          : 'Draft preview — this page is not published'}
      </div>
      <WorkArticle work={work} language={language} />
    </>
  )
}
