'use client'

import type { WorkItem } from '@/services/works/types'
import { useState } from 'react'
import { WorkCard } from './work-card'

type Props = {
  works: WorkItem[]
  language: 'ja' | 'en'
}

type Category = {
  key: string
  labelJa: string
  labelEn: string
  // Match against the combined JA + EN category text. Omit for "all".
  match?: (category: string) => boolean
}

// Tab order is intentional. "AI・AX・DX活用事例" is set up as a frame now;
// works tagged with AI / AX / DX in their category surface here automatically.
const CATEGORIES: Category[] = [
  { key: 'all', labelJa: 'すべて', labelEn: 'All' },
  {
    key: 'corporate',
    labelJa: 'コーポレートホスピタリティ',
    labelEn: 'Corporate Hospitality',
    match: (c) => /コーポレート/.test(c),
  },
  {
    key: 'resort',
    labelJa: 'リゾート・観光',
    labelEn: 'Resort & Tourism',
    match: (c) => /リゾート/.test(c),
  },
  {
    key: 'sports',
    labelJa: 'スポーツ&ホスピタリティ',
    labelEn: 'Sports & Hospitality',
    match: (c) => /スポーツ/.test(c),
  },
  {
    key: 'regional',
    labelJa: '地方創生',
    labelEn: 'Regional Revitalization',
    match: (c) => /地方創生/.test(c),
  },
  {
    key: 'bizdev',
    labelJa: '事業開発',
    labelEn: 'Business Development',
    match: (c) => /事業開発/.test(c),
  },
  {
    key: 'ai',
    labelJa: 'AI・AX・DX活用事例',
    labelEn: 'AI / AX / DX',
    match: (c) => /AI|AX|DX/.test(c),
  },
]

export const WorksFilter = ({ works, language }: Props) => {
  const [active, setActive] = useState('all')
  const category = CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0]

  const filtered =
    !category.match
      ? works
      : works.filter((w) =>
          category.match!(`${w.categoryJa ?? ''} ${w.categoryEn ?? ''}`),
        )

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(c.key)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors duration-300 ${
              active === c.key
                ? 'border-brass bg-brass text-white'
                : 'border-hairline text-muted hover:border-brass hover:text-brass'
            }`}
          >
            {language === 'ja' ? c.labelJa : c.labelEn}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="border border-hairline bg-paper px-6 py-16 text-center text-muted">
          {language === 'ja'
            ? 'この領域の事例は現在準備中です。'
            : 'Case studies in this area are coming soon.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              language={language}
              href={work.slug ? `/${language}/works/${work.slug}` : undefined}
            />
          ))}
        </div>
      )}
    </div>
  )
}
