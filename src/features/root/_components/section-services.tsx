import { Button } from '@/components/button'
import { MotionUp } from '@/components/motion-up'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  language: 'en' | 'ja'
}

const focusServices = [
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
    titleJa: 'コーポレートフード',
    titleEn: 'Corporate Food',
    image: '/service-corporate-food.jpg',
    href: '/corporate-food',
  },
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
    <div className="bg-white py-12 lg:py-20">
      <div className="w-[1200px] max-w-[calc(100vw-32px)] mx-auto flex flex-col gap-y-10 lg:gap-y-14">
        {/* Heading + intro */}
        <MotionUp>
          <div className="flex flex-col gap-y-4 max-w-[760px]">
            <p className="text-3xl lg:text-4xl font-bold text-darkNavy font-roboto">
              OUR SERVICES
            </p>
            <p className="text-base lg:text-lg leading-relaxed text-zinc-700">
              {language === 'ja'
                ? 'ホスピタリティを再設計する Hospitality Innovation Firm。「現場のAI/DX」と「人材課題のソリューション」を注力領域に、コーポレートフード・ケータリング・地方創生の現場で日々ホスピタリティを実装しています。'
                : 'A Hospitality Innovation Firm. With on-the-floor AI/DX and end-to-end Talent Solutions as our focus areas, we implement hospitality every day across corporate food, catering, and regional revitalization.'}
            </p>
          </div>
        </MotionUp>

        {/* Focus areas */}
        <MotionUp>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-3">
              <span className="inline-block w-2 h-2 rounded-full bg-darkNavy" />
              <p className="text-xs font-roboto tracking-[0.2em] font-semibold text-darkNavy uppercase">
                {language === 'ja' ? '注力領域 / Focus Areas' : 'Focus Areas'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {focusServices.map((s) => (
                <Link
                  key={s.titleJa}
                  href={`/${language}${s.href}`}
                  className="group relative rounded-md overflow-hidden border-2 border-darkNavy aspect-[16/9]"
                >
                  <Image
                    src={s.image}
                    alt={language === 'ja' ? s.titleJa : s.titleEn}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkNavy/85 via-darkNavy/30 to-transparent" />
                  <span className="absolute top-3 left-3 inline-block px-3 py-1 bg-darkNavy text-white text-[10px] font-roboto font-semibold tracking-widest rounded">
                    FOCUS
                  </span>
                  <p className="absolute bottom-4 left-5 right-5 text-white font-bold text-lg md:text-xl">
                    {language === 'ja' ? s.titleJa : s.titleEn}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </MotionUp>

        {/* Execution domains */}
        <MotionUp>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-3">
              <span className="inline-block w-2 h-2 rounded-full bg-zinc-400" />
              <p className="text-xs font-roboto tracking-[0.2em] font-semibold text-zinc-500 uppercase">
                {language === 'ja'
                  ? '現場で実装する3領域 / Execution Domains'
                  : 'Execution Domains'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {coreServices.map((s) => (
                <Link
                  key={s.titleJa}
                  href={`/${language}${s.href}`}
                  className="group relative rounded-md overflow-hidden border border-zinc-200 aspect-[16/10]"
                >
                  <Image
                    src={s.image}
                    alt={language === 'ja' ? s.titleJa : s.titleEn}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkNavy/80 via-darkNavy/20 to-transparent" />
                  <p className="absolute bottom-3 left-4 right-4 text-white font-bold text-sm md:text-base">
                    {language === 'ja' ? s.titleJa : s.titleEn}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </MotionUp>

        <MotionUp>
          <Link href={`/${language}/services`} className="mx-auto lg:mx-0 w-fit">
            <Button
              type="button"
              text={language === 'ja' ? '事業内容をすべて見る' : 'See All Services'}
              className="rounded-full bg-white text-darkNavy border border-darkNavy px-12 py-3 hover:opacity-100 hover:bg-darkNavy hover:text-white duration-300 text-lg font-roboto"
            />
          </Link>
        </MotionUp>
      </div>
    </div>
  )
}
