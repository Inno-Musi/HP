import { Button } from '@/components/button'
import { MaskReveal } from '@/components/mask-reveal'
import { Reveal } from '@/components/reveal'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  language: 'en' | 'ja'
}

const focusServices = [
  {
    titleJa: 'フード／ホスピタリティ',
    titleEn: 'Food / Hospitality',
    image: '/service-corporate-food.jpg',
    href: '/corporate-food',
  },
  {
    titleJa: 'AI/DX × Hospitality',
    titleEn: 'AI/DX × Hospitality',
    image: '/service-ai-dx.jpg',
    href: '/dx-ai',
  },
  {
    titleJa: '人材支援',
    titleEn: 'Talent Solutions',
    image: '/service-talent.jpg',
    href: '/talent',
  },
]

const coreServices = [
  {
    titleJa: 'ケータリング・イベント',
    titleEn: 'Catering & Events',
    image: '/service-catering.jpg',
    href: '/catering',
  },
  {
    titleJa: '地方創生支援',
    titleEn: 'Regional Revitalization',
    image: '/service-regional.jpg',
    href: '/regional',
  },
]

export const SectionServices = ({ language }: Props) => {
  return (
    <div className="py-20 lg:py-32">
      <div className="w-[1100px] max-w-[calc(100vw-48px)] mx-auto flex flex-col gap-y-14 lg:gap-y-20">
        {/* Heading + intro */}
        <div className="flex flex-col gap-y-5 max-w-[720px]">
          <Reveal>
            <p className="text-xs font-roboto tracking-[0.25em] uppercase text-brass">
              Services
            </p>
          </Reveal>
          <h2 className="font-display text-darkNavy text-4xl lg:text-5xl leading-[1.2]">
            <MaskReveal delay={0.05}>
              {language === 'ja' ? '事業内容' : 'What We Do'}
            </MaskReveal>
          </h2>
          <Reveal delay={0.15}>
            <div className="w-10 h-px bg-brass" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base lg:text-lg leading-[1.9] text-ink/80">
              {language === 'ja'
                ? 'ホスピタリティを再設計する Hospitality Innovation Firm。フード／ホスピタリティ・AI/DX・人材支援の3領域を注力領域として、戦略から現場実装まで一気通貫で支援。ケータリングや地方創生といった関連領域でもホスピタリティを実装しています。'
                : 'A Hospitality Innovation Firm. Our three focus areas — Food/Hospitality, AI/DX, and Talent — are supported end to end from strategy to on-site execution, alongside related areas such as catering and regional revitalization.'}
            </p>
          </Reveal>
        </div>

        {/* Focus areas */}
        <div className="flex flex-col gap-y-6">
          <Reveal>
            <p className="text-xs font-roboto tracking-[0.25em] uppercase text-brass">
              {language === 'ja' ? 'Focus Areas — 注力領域' : 'Focus Areas'}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {focusServices.map((s, i) => (
              <Reveal key={s.titleJa} delay={i * 0.12}>
                <Link
                  href={`/${language}${s.href}`}
                  className="group flex flex-col gap-y-4"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={language === 'ja' ? s.titleJa : s.titleEn}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                    />
                    <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-ivory/95 text-brass text-[10px] font-roboto font-medium tracking-[0.2em]">
                      FOCUS
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p className="font-display text-xl lg:text-2xl text-darkNavy leading-snug">
                      {language === 'ja' ? s.titleJa : s.titleEn}
                    </p>
                    <p className="text-xs font-roboto tracking-widest text-muted group-hover:text-brass transition-colors duration-300">
                      {language === 'ja' ? '詳しく見る →' : 'Learn more →'}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Related areas */}
        <div className="flex flex-col gap-y-6 pt-6 border-t border-hairline">
          <Reveal>
            <p className="text-xs font-roboto tracking-[0.25em] uppercase text-muted">
              {language === 'ja' ? 'Related Areas — 関連領域' : 'Related Areas'}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {coreServices.map((s, i) => (
              <Reveal key={s.titleJa} delay={i * 0.12}>
                <Link
                  href={`/${language}${s.href}`}
                  className="group flex items-center gap-x-5"
                >
                  <div className="relative w-32 sm:w-40 aspect-[4/3] shrink-0 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={language === 'ja' ? s.titleJa : s.titleEn}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="font-display text-lg text-darkNavy leading-snug">
                      {language === 'ja' ? s.titleJa : s.titleEn}
                    </p>
                    <p className="text-xs font-roboto tracking-widest text-muted group-hover:text-brass transition-colors duration-300">
                      {language === 'ja' ? '詳しく見る →' : 'Learn more →'}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <Link href={`/${language}/services`} className="w-fit inline-block">
            <Button
              type="button"
              text={language === 'ja' ? '事業内容をすべて見る' : 'See All Services'}
              className="rounded-full bg-darkNavy text-ivory border border-darkNavy px-12 py-3 hover:bg-brass hover:border-brass duration-300 text-base font-roboto"
            />
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
