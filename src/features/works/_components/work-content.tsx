import { BreadCrumbs } from '@/components/bread-crumbs'
import dayjs from '@/lib/dayjs'
import { fetchWorkDetail } from '@/services/works/fetch-work-detail'
import parse from 'html-react-parser'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Props = {
  language: 'ja' | 'en'
  slug: string
}

export const WorkContent = async ({ language, slug }: Props) => {
  const work = await fetchWorkDetail(slug)

  if (!work) {
    notFound()
  }

  const image = language === 'en' ? work.imageEn || work.image : work.image
  const title = language === 'ja' ? work.titleJa : work.titleEn || work.titleJa
  const category =
    language === 'ja' ? work.categoryJa : work.categoryEn || work.categoryJa
  const content =
    language === 'ja' ? work.contentJa : work.contentEn || work.contentJa

  return (
    <div className="bg-zinc-50">
      <div className="py-16 md:py-20 w-[900px] max-w-[calc(100vw-32px)] mx-auto flex flex-col gap-y-10 md:gap-y-12">
        <div className="flex flex-col gap-y-4 text-center">
          {category && (
            <p className="text-sm font-roboto tracking-widest uppercase text-zinc-500">
              {category}
            </p>
          )}
          <h1 className="text-3xl font-bold text-darkNavy">{title}</h1>
          {work.publishedAt && (
            <p className="text-zinc-500 font-bold">
              {dayjs(work.publishedAt).format('YYYY/MM/DD')}
            </p>
          )}
        </div>
        <div className="bg-white">
          <div className="relative aspect-[16/9] bg-zinc-100">
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
          <div className="px-6 md:px-10 py-8 md:py-12">
            {content ? (
              <div className="prose prose-md min-w-full">{parse(content)}</div>
            ) : (
              <p className="text-zinc-500">
                {language === 'ja'
                  ? '本文は現在準備中です。'
                  : 'The article content is currently being prepared.'}
              </p>
            )}
          </div>
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '実績・事例',
            labelEn: 'Works',
            href: '/works',
          },
          {
            labelJa: work.titleJa,
            labelEn: work.titleEn || work.titleJa,
            href: `/works/${slug}`,
          },
        ]}
      />
    </div>
  )
}
