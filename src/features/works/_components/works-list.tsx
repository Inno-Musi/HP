import { fetchWorksList } from '@/services/works/fetch-works-list'
import { WorksFilter } from './works-filter'

type Props = {
  language: 'ja' | 'en'
}

export const WorksList = async ({ language }: Props) => {
  const data = await fetchWorksList({ orders: '-publishedAt' })
  const works = data.contents

  if (works.length === 0) {
    return (
      <div className="bg-paper rounded-md px-6 py-10 text-center text-zinc-500">
        {language === 'ja'
          ? '事例は現在準備中です。'
          : 'Works are currently being prepared.'}
      </div>
    )
  }

  return <WorksFilter works={works} language={language} />
}
