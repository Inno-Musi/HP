import { BreadCrumbs } from '@/components/bread-crumbs'
import { Button } from '@/components/button'
import { JsonLd } from '@/components/json-ld'
import { removeHtmlTag } from '@/helpers/remove-html-tag'
import dayjs from '@/lib/dayjs'
import { articleJsonLd } from '@/lib/structured-data'
import { fetchInsightDetail } from '@/services/insights/fetch-insight'
import parse from 'html-react-parser'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  language: 'ja' | 'en'
  slug: string
}

export const InsightContent = async ({ language, slug }: Props) => {
  const insight = await fetchInsightDetail(slug)

  if (!insight) {
    notFound()
  }

  const title =
    language === 'ja' ? insight.titleJa : insight.titleEn || insight.titleJa
  const category =
    language === 'ja'
      ? insight.categoryJa
      : insight.categoryEn || insight.categoryJa
  const content =
    language === 'ja'
      ? insight.contentJa
      : insight.contentEn || insight.contentJa
  const description =
    language === 'ja'
      ? insight.descriptionJa
      : insight.descriptionEn || insight.descriptionJa
  const image =
    language === 'en' ? insight.imageEn?.url ?? insight.image?.url : insight.image?.url

  return (
    <div className="bg-ivory">
      <JsonLd
        data={articleJsonLd(language, {
          title,
          description: description
            ? removeHtmlTag(description).slice(0, 160)
            : undefined,
          url: `https://www.musico.co.jp/${language}/insights/${slug}`,
          image,
          datePublished: insight.publishedAt,
        })}
      />
      <div className="py-24 md:py-32 w-[840px] max-w-[calc(100vw-32px)] mx-auto flex flex-col gap-y-10 md:gap-y-12">
        <div className="flex flex-col gap-y-4 text-center">
          <div className="flex items-center justify-center gap-x-3 text-sm font-roboto tracking-widest uppercase">
            {category && <span className="text-brass">{category}</span>}
            {insight.publishedAt && (
              <span className="text-zinc-400">
                {dayjs(insight.publishedAt).format('YYYY/MM/DD')}
              </span>
            )}
          </div>
          <h1 className="text-2xl md:text-4xl font-display text-darkNavy leading-tight">
            {title}
          </h1>
        </div>

        <div className="bg-paper rounded-md px-6 md:px-10 py-8 md:py-12">
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

        <div className="flex flex-col gap-y-5 bg-darkNavy rounded-md px-8 md:px-12 py-10 md:py-12 text-white text-center items-center">
          <p className="text-xl md:text-2xl font-display">
            {language === 'ja'
              ? 'ご相談・お問い合わせ'
              : 'Talk to Us'}
          </p>
          <p className="text-sm leading-relaxed opacity-80 max-w-[520px]">
            {language === 'ja'
              ? '記事の内容に関するご相談や、フード・ホスピタリティ・AI/DXの課題について、お気軽にお問い合わせください。'
              : 'For questions about this article, or challenges across food, hospitality, and AI/DX, reach out anytime.'}
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
            labelJa: 'インサイト',
            labelEn: 'Insights',
            href: '/insights',
          },
          {
            labelJa: insight.titleJa,
            labelEn: insight.titleEn || insight.titleJa,
            href: `/insights/${slug}`,
          },
        ]}
      />
    </div>
  )
}
