import { twMerge } from 'tailwind-merge'

type Props = {
  titleJa: string
  titleEn: string
  language: 'en' | 'ja'
  className?: string
}

export const TitleMain = ({ titleJa, titleEn, language, className }: Props) => {
  return (
    <h1
      className={twMerge(
        'text-center font-semibold text-3xl md:text-4xl text-darkNavy',
        language === 'ja' && 'font-extrabold',
        language === 'en' && 'md:text-5xl',
        className,
      )}
    >
      {language === 'ja' ? titleJa : titleEn}
    </h1>
  )
}
