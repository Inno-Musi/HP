import { twMerge } from 'tailwind-merge'

type Props = {
  titleJa: string
  titleEn: string
  language: 'en' | 'ja'
}

export const TitleMain = ({ titleJa, titleEn, language }: Props) => {
  return (
    <h1
      className={twMerge(
        'text-center font-semibold text-4xl',
        language === 'ja' && 'font-extrabold',
        language === 'en' && 'text-5xl',
      )}
    >
      {language === 'ja' ? titleJa : titleEn}
    </h1>
  )
}
