import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  switchTo: 'en' | 'ja'
  restPath: string
  className?: string
}

export const LinkSwitchLanguage = ({
  switchTo,
  restPath,
  className,
}: Props) => {
  return (
    <Link
      href={`/${switchTo}/${restPath}`}
      className={twMerge(
        'border border-darkNavy px-[10px] py-1 font-semibold',
        switchTo === 'ja' ? 'font-sawarabiGothic' : 'font-roboto',
        className,
      )}
    >
      {switchTo === 'en' ? 'English' : '日本語'}
    </Link>
  )
}
