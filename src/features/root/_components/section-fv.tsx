'use client'

import { Button } from '@/components/button'
import { MotionUp } from '@/components/motion-up'
import Lottie from 'lottie-react'
import Link from 'next/link'
import topAnimationNew from '../_assets/animation/top-animation-new.json'
type Props = {
  language: 'en' | 'ja'
}

export const SectionFv = ({ language }: Props) => {
  return (
    <div className="relative aspect-[16/15] md:aspect-[16/8] max-w-[1400px] w-full mx-auto">
      <div className="absolute w-full h-full flex flex-col gap-y-4 justify-center items-center z-10">
        <MotionUp duration={0.2} initialY={0}>
          <p className="text-darkNavy text-5xl sm:text-6xl lg:text-8xl font-roboto">
            MUSICO
          </p>
        </MotionUp>
        <MotionUp duration={0.4} initialY={0}>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold font-roboto">
            Sow the Seeds of Happiness
          </p>
        </MotionUp>
        <MotionUp duration={0.7} initialY={0}>
          <div className="text-center leading-7 md:!leading-8 text-sm lg:text-base px-4">
            {language === 'ja' ? (
              <>
                <p>私たちは、企業のコーポレートサービスを支援する</p>
                <p>
                  オーダーメイドのBPO（ビジネス・プロセス・アウトソーシング）企業として、
                </p>
                <p>経営・財務・ITなどの業務最適化を通じて、</p>
                <p>効率的で持続可能なビジネス運営に伴走します。</p>
              </>
            ) : (
              <>
                <p>We, MUSICO, as a comprehensive consulting firm,</p>
                <p>
                  accompany our clients from tailor-made strategy planning to
                </p>
                <p>execution by a specialized team,</p>
                <p>helping them bring their vision to life.</p>
                <p>Now, let’s make a great future bloom.</p>
              </>
            )}
          </div>
        </MotionUp>
        <MotionUp duration={1} initialY={0}>
          <Link href="/ja/philosophy">
            <Button
              type="button"
              text="OUR PHILOSOPHY"
              className="rounded-full bg-white text-darkNavy border border-darkNavy px-8 sm:py-3 hover:opacity-100 hover:bg-darkNavy hover:text-white duration-300 font-roboto"
            />
          </Link>
        </MotionUp>
      </div>
      <Lottie
        animationData={topAnimationNew}
        loop={true}
        autoplay={true}
        className="absolute top-0 left-0 w-1/3"
      />
      <Lottie
        animationData={topAnimationNew}
        loop={true}
        autoplay={true}
        className="absolute -bottom-[50px] right-0 w-[20%]"
      />
      <Lottie
        animationData={topAnimationNew}
        loop={true}
        autoplay={true}
        className="absolute -bottom-[50px] right-0 w-1/3"
      />
      {/* <Fade>
        <Image
          src="/musico-pattern.png"
          alt="MUSICO"
          width={1298}
          height={428}
          className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[650px] rotate-90 absolute -top-[50px] md:top-[120px] lg:top-[160px] xl:top-[180px] -left-[100px] sm:-left-[40px] md:-left-[80px] lg:-left-[120px]"
        />
      </Fade>
      <Fade>
        <Image
          src="/musico-pattern.png"
          alt="MUSICO"
          width={1298}
          height={428}
          className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[700px] absolute -bottom-[50px] -right-[50px]"
        />
      </Fade> */}
    </div>
  )
}
