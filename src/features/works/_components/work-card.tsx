import type { WorkItem } from '@/services/works/types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  work: WorkItem
  language: 'ja' | 'en'
  href?: string
}

export const WorkCard = ({ work, language, href }: Props) => {
  const image = language === 'en' ? work.imageEn || work.image : work.image
  const title = language === 'ja' ? work.titleJa : work.titleEn || work.titleJa
  const category =
    language === 'ja' ? work.categoryJa : work.categoryEn || work.categoryJa
  const description =
    language === 'ja'
      ? work.descriptionJa
      : work.descriptionEn || work.descriptionJa

  const card = (
    <article className="bg-white rounded-md overflow-hidden shadow-sm border border-zinc-100 h-full">
      <div className="relative aspect-[16/10] bg-zinc-100">
        {image ? (
          <Image src={image.url} alt={title} fill className="object-cover" />
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
        <p className="text-lg font-bold text-darkNavy leading-snug">{title}</p>
        {description && (
          <p className="text-sm leading-relaxed text-zinc-600">{description}</p>
        )}
      </div>
    </article>
  )

  if (!href) return card

  return (
    <Link href={href} className="block h-full hover:opacity-80 duration-300">
      {card}
    </Link>
  )
}
