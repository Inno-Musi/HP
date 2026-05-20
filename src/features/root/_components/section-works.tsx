import { Button } from '@/components/button'
import { MotionUp } from '@/components/motion-up'
import { WorkCard } from '@/features/works/_components/work-card'
import { fetchWorksList } from '@/services/works/fetch-works-list'
import Link from 'next/link'

type Props = {
  language: 'ja' | 'en'
}

export const SectionWorks = async ({ language }: Props) => {
  const FETCH_LIMIT = 3
  const res = await fetchWorksList({
    limit: FETCH_LIMIT,
    orders: '-publishedAt',
  })
  const { contents: worksList } = res

  return (
    <div className="flex flex-col gap-y-10 items-center">
      <MotionUp>
        <div className="text-center">
          <p className="text-6xl font-medium text-darkNavy font-roboto">
            WORKS
          </p>
          {language === 'ja' && (
            <p className="text-lg font-medium">実績・事例</p>
          )}
        </div>
      </MotionUp>
      <div className="w-[1200px] max-w-[calc(100vw-32px)] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {worksList.map((work) => (
          <MotionUp key={work.id}>
            <WorkCard
              work={work}
              language={language}
              href={work.slug ? `/${language}/works/${work.slug}` : undefined}
            />
          </MotionUp>
        ))}
      </div>
      <MotionUp>
        <Link href={`/${language}/works`}>
          <Button
            type="button"
            text="See More"
            className="rounded-full bg-white text-darkNavy border border-darkNavy py-3 px-12 hover:opacity-100 hover:bg-darkNavy hover:text-white duration-300 text-lg font-roboto"
          />
        </Link>
      </MotionUp>
    </div>
  )
}
