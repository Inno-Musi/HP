import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbJsonLd } from '@/lib/structured-data'

type Props = {
  language: 'en' | 'ja'
  crumbs: {
    labelJa: string
    labelEn: string
    href: string
  }[]
  className?: string
}

export const BreadCrumbs = ({ language, crumbs, className }: Props) => {
  return (
    <div className="bg-ivory">
      <JsonLd data={breadcrumbJsonLd(language, crumbs)} />
      <div
        className={twMerge(
          'flex gap-x-2 items-center w-[1200px] mx-auto max-w-[calc(100vw-32px)] py-2 text-darkNavy',
          className,
        )}
      >
        <div className="flex items-center gap-x-2">
          <Link
            href={`/${language}`}
            className="hover:underline underline-offset-2 font-semibold text-sm"
          >
            {language === 'ja' ? 'トップページ' : 'Homepage'}
          </Link>
          <FaChevronRight size={15} />
        </div>
        {crumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center gap-x-2">
            <Link
              href={`/${language}${crumb.href}`}
              className={twMerge(
                'hover:underline underline-offset-2 font-semibold text-sm',
                index === crumbs.length - 1 && 'pointer-events-none',
              )}
            >
              {language === 'ja' ? crumb.labelJa : crumb.labelEn}
            </Link>
            {index !== crumbs.length - 1 && <FaChevronRight size={15} />}
          </div>
        ))}
      </div>
    </div>
  )
}
