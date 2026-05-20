import { Button } from '@/components/button'
import { MotionUp } from '@/components/motion-up'
import { fetchWorksList } from '@/services/works/fetch-works-list'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  language: 'ja' | 'en'
}

export const SectionNews = async ({ language }: Props) => {
  const FETCH_LIMIT = 3
  const res = await fetchWorksList({ limit: FETCH_LIMIT })
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
        {worksList.map((work) => {
          const image =
            language === 'en' ? work.imageEn || work.image : work.image
          const title =
            language === 'ja' ? work.titleJa : work.titleEn || work.titleJa
          const category =
            language === 'ja'
              ? work.categoryJa
              : work.categoryEn || work.categoryJa
          const description =
            language === 'ja'
              ? work.descriptionJa
              : work.descriptionEn || work.descriptionJa

          return (
            <MotionUp key={work.id}>
              <article className="bg-white rounded-md overflow-hidden shadow-sm border border-zinc-100">
                <div className="relative aspect-[16/10] bg-zinc-100">
                  {image ? (
                    <Image
                      src={image.url}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-300 text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <div className="px-5 py-5 flex flex-col gap-y-3">
                  {category && (
                    <p className="text-xs font-roboto tracking-widest uppercase text-zinc-400">
                      {category}
                    </p>
                  )}
                  <p className="text-lg font-bold text-darkNavy leading-snug">
                    {title}
                  </p>
                  {description && (
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {description}
                    </p>
                  )}
                </div>
              </article>
            </MotionUp>
          )
        })}
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
