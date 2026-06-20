import { twMerge } from 'tailwind-merge'
import { Reveal } from './reveal'

type Props = {
  titleJa: string
  titleEn: string
  language: 'en' | 'ja'
  className?: string
}

export const TitleMain = ({ titleJa, titleEn, language, className }: Props) => {
  return (
    <Reveal>
      <div
        className={twMerge(
          'flex flex-col items-center text-center gap-y-3',
          className,
        )}
      >
        {language === 'ja' ? (
          <>
            <p className="text-sm font-roboto tracking-[0.25em] uppercase text-brass">
              {titleEn}
            </p>
            <h1 className="font-display text-3xl md:text-5xl text-darkNavy leading-[1.2]">
              {titleJa}
            </h1>
          </>
        ) : (
          <h1 className="font-display text-4xl md:text-5xl text-darkNavy leading-[1.2]">
            {titleEn}
          </h1>
        )}
        <div className="w-10 h-px bg-brass mt-2" />
      </div>
    </Reveal>
  )
}
