import type { WorkItem } from '@/services/works/types'
import { fetchWorksList } from '@/services/works/fetch-works-list'
import Link from 'next/link'
import { WorkCard } from './work-card'

type Props = {
  language: 'ja' | 'en'
}

type HeadingProps = {
  eyebrowJa: string
  eyebrowEn: string
  titleJa: string
  titleEn: string
  language: 'ja' | 'en'
}

const CategoryHeading = ({
  eyebrowJa,
  eyebrowEn,
  titleJa,
  titleEn,
  language,
}: HeadingProps) => (
  <div className="flex flex-col gap-y-2">
    <p className="text-sm font-roboto tracking-[0.2em] uppercase text-brass">
      {language === 'ja' ? eyebrowJa : eyebrowEn}
    </p>
    <h2 className="font-display text-2xl md:text-3xl text-darkNavy leading-snug">
      {language === 'ja' ? titleJa : titleEn}
    </h2>
    <div className="w-10 h-px bg-brass mt-1" />
  </div>
)

const WorkGrid = ({
  works,
  language,
}: {
  works: WorkItem[]
  language: 'ja' | 'en'
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {works.map((work) => (
      <WorkCard
        key={work.id}
        work={work}
        language={language}
        href={work.slug ? `/${language}/works/${work.slug}` : undefined}
      />
    ))}
  </div>
)

// A work belongs to the AI focus category when its category text carries an
// AI / AX / DX tag (e.g. categoryJa "AI活用・AX・DX / 社内業務DX").
const isAiWork = (w: WorkItem) =>
  /AI|AX|DX/.test(`${w.categoryJa ?? ''} ${w.categoryEn ?? ''}`)

export const WorksList = async ({ language }: Props) => {
  const data = await fetchWorksList({ orders: '-publishedAt' })
  const works = data.contents
  const aiWorks = works.filter(isAiWork)
  const generalWorks = works.filter((w) => !isAiWork(w))

  return (
    <div className="flex flex-col gap-y-20">
      {/* Category: 事例・実績 (general case studies) */}
      <section className="flex flex-col gap-y-8">
        <CategoryHeading
          eyebrowJa="Case Studies"
          eyebrowEn="Case Studies"
          titleJa="事例・実績"
          titleEn="Case Studies"
          language={language}
        />
        {generalWorks.length === 0 ? (
          <div className="bg-paper rounded-md px-6 py-10 text-center text-muted">
            {language === 'ja'
              ? '事例は現在準備中です。'
              : 'Works are currently being prepared.'}
          </div>
        ) : (
          <WorkGrid works={generalWorks} language={language} />
        )}
      </section>

      {/* Category: AI活用・AX・DX事例 (focus area) */}
      <section className="flex flex-col gap-y-8">
        <CategoryHeading
          eyebrowJa="Focus ・ 注力領域"
          eyebrowEn="Focus Area"
          titleJa="AI活用・AX・DX事例"
          titleEn="AI / AX / DX"
          language={language}
        />
        {aiWorks.length === 0 ? (
          <div className="border border-hairline bg-paper px-6 py-14 flex flex-col items-center gap-y-5 text-center">
            <p className="text-base text-ink/80 leading-relaxed max-w-2xl">
              {language === 'ja'
                ? 'ホスピタリティ × テクノロジーの掛け合わせで、現場のオペレーションからお客様体験までを変革するAI活用・AX・DXの事例を、順次公開してまいります。'
                : 'We will progressively publish cases of AI / AX / DX — transforming everything from on-site operations to guest experience through hospitality × technology.'}
            </p>
            <Link
              href={`/${language}/dx-ai`}
              className="inline-flex items-center gap-x-2 text-sm font-roboto tracking-wider uppercase text-brass border-b border-brass/40 pb-0.5 hover:border-brass transition-colors duration-300"
            >
              {language === 'ja'
                ? 'AI/DX支援の詳細を見る'
                : 'Explore our AI / DX services'}
              <span aria-hidden>→</span>
            </Link>
          </div>
        ) : (
          <WorkGrid works={aiWorks} language={language} />
        )}
      </section>
    </div>
  )
}
