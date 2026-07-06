import { twMerge } from 'tailwind-merge'
import { Reveal } from './reveal'

type Props = {
  titleJa: string
  titleEn: string
  language: 'en' | 'ja'
  className?: string
  // Use on dark backgrounds so the heading stays readable (default dark navy).
  onDark?: boolean
  // Heading level. Default 'h1'; use 'h2' for secondary sections on pages
  // that already have a primary h1, to keep one h1 per page.
  as?: 'h1' | 'h2'
}

export const TitleMain = ({
  titleJa,
  titleEn,
  language,
  className,
  onDark = false,
  as: Heading = 'h1',
}: Props) => {
  const titleColor = onDark ? 'text-white' : 'text-darkNavy'

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
            <Heading
              className={`font-display text-3xl md:text-5xl ${titleColor} leading-[1.2]`}
            >
              {titleJa}
            </Heading>
          </>
        ) : (
          <Heading
            className={`font-display text-4xl md:text-5xl ${titleColor} leading-[1.2]`}
          >
            {titleEn}
          </Heading>
        )}
        <div className="w-10 h-px bg-brass mt-2" />
      </div>
    </Reveal>
  )
}
