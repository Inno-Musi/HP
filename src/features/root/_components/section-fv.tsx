'use client'

import { Button } from '@/components/button'
import { MotionUp } from '@/components/motion-up'
import Lottie from 'lottie-react'
import Link from 'next/link'
import animationData from '../_assets/animation/top-animation.json'

type Props = {
  language: 'en' | 'ja'
}

export const SectionFv = ({ language }: Props) => {
  return (
    <div className="relative aspect-[16/14] md:aspect-[16/8] max-w-[1400px] w-full mx-auto">
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
          <div className="text-center leading-7 md:!leading-8 text-sm lg:text-base">
            {language === 'ja' ? (
              <>
                <p>我々MUSICOは総合コンサルタントとして</p>
                <p>オーダーメイドの戦略立案から専門チームによる実行まで</p>
                <p>顧客のビジョン実現に伴走します。</p>
                <p>さぁ、未来に大きな花を咲かせましょう。</p>
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
        animationData={animationData}
        loop={true}
        className="w-[25%] absolute left-0 bottom-0"
      />
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-1/3 absolute right-0 top-0"
      />
    </div>
  )
}
