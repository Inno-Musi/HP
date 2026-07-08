import { BreadCrumbs } from '@/components/bread-crumbs'
import { JsonLd } from '@/components/json-ld'
import dayjs from '@/lib/dayjs'
import { articleJsonLd } from '@/lib/structured-data'
import { removeHtmlTag } from '@/helpers/remove-html-tag'
import { fetchWorkDetail } from '@/services/works/fetch-work-detail'
import type { WorkItem } from '@/services/works/types'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/button'
import { RelatedServices } from './related-services'

type Props = {
  language: 'ja' | 'en'
  slug: string
}

export const WorkContent = async ({ language, slug }: Props) => {
  const work = await fetchWorkDetail(slug)

  if (!work) {
    notFound()
  }

  return <WorkArticle work={work} language={language} />
}

type ArticleProps = {
  work: WorkItem
  language: 'ja' | 'en'
}

// Presentational body shared by the public detail page and the draft
// preview route (/works/preview).
export const WorkArticle = ({ work, language }: ArticleProps) => {
  const slug = work.slug ?? work.id
  const cmsImage = language === 'en' ? work.imageEn || work.image : work.image
  const imageUrl =
    cmsImage?.url ?? (work.slug ? `/works/${work.slug}.jpg` : undefined)
  const title = language === 'ja' ? work.titleJa : work.titleEn || work.titleJa
  const category =
    language === 'ja' ? work.categoryJa : work.categoryEn || work.categoryJa
  const content =
    language === 'ja' ? work.contentJa : work.contentEn || work.contentJa
  const description =
    language === 'ja'
      ? work.descriptionJa
      : work.descriptionEn || work.descriptionJa
  const absoluteImage = imageUrl?.startsWith('http')
    ? imageUrl
    : imageUrl
      ? `https://www.musico.co.jp${imageUrl}`
      : undefined

  return (
    <div className="bg-ivory">
      <JsonLd
        data={articleJsonLd(language, {
          title,
          description: description
            ? removeHtmlTag(description).slice(0, 160)
            : undefined,
          url: `https://www.musico.co.jp/${language}/works/${slug}`,
          image: absoluteImage,
          datePublished: work.publishedAt,
        })}
      />
      <div className="py-24 md:py-32 w-[900px] max-w-[calc(100vw-32px)] mx-auto flex flex-col gap-y-10 md:gap-y-12">
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
        <div className="bg-paper">
          <div className="relative aspect-[16/9] bg-zinc-100">
            {imageUrl ? (
              <Image
                src={imageUrl}
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

        <RelatedServices language={language} category={category} />

        <div className="flex flex-col gap-y-5 bg-darkNavy rounded-md px-8 md:px-12 py-10 md:py-12 text-white text-center items-center">
          <p className="text-xl md:text-2xl font-display">
            {language === 'ja'
              ? '同様の課題をお持ちですか？'
              : 'Facing a similar challenge?'}
          </p>
          <p className="text-sm leading-relaxed opacity-80 max-w-[520px]">
            {language === 'ja'
              ? '現場の課題をお聞かせください。最適な支援範囲をご提案します。提案・売り込みは一切なし、まずは率直にお話ししましょう。'
              : "Tell us what you're facing on the floor. We'll propose the right scope of support — no pitch, no sales, just a candid conversation."}
          </p>
          <Link href={`/${language}/contact`}>
            <Button
              type="button"
              text={language === 'ja' ? 'お問い合わせはこちら →' : 'Contact Us →'}
              className="rounded-full bg-paper text-darkNavy border border-paper px-8 py-3 hover:opacity-80 duration-300 font-roboto w-fit"
            />
          </Link>
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
