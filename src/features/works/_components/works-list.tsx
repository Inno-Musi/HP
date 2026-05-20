import { fetchWorksList } from '@/services/works/fetch-works-list'
import Image from 'next/image'

type Props = {
  language: 'ja' | 'en'
}

export const WorksList = async ({ language }: Props) => {
  const data = await fetchWorksList({})
  const works = data.contents

  if (works.length === 0) {
    return (
      <div className="bg-white rounded-md px-6 py-10 text-center text-zinc-500">
        {language === 'ja'
          ? '事例は現在準備中です。'
          : 'Works are currently being prepared.'}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {works.map((work) => {
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
          <article
            key={work.id}
            className="bg-white rounded-md overflow-hidden shadow-sm border border-zinc-100"
          >
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
        )
      })}
    </div>
  )
}
