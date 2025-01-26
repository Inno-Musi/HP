'use client'

import Lottie from 'lottie-react'
import Image from 'next/image'
import animationData from '../_assets/animation/top-animation.json'

export const SectionFv = () => {
  return (
    <div className="relative aspect-[16/12] sm:aspect-[16/8]">
      <div className="absolute w-full h-full flex flex-col gap-y-3 justify-center items-center z-10">
        <p className="text-moss text-5xl sm:text-6xl lg:text-8xl">MUSICO</p>
        <p className="text-lg sm:text-xl lg:text-2xl font-bold">
          Sow the Seeds of Happiness
        </p>
        <div className="text-center leading-7 md:leading-8 text-sm lg:text-base">
          <p>我々MUSICOは総合コンサルタントとして</p>
          <p>オーダーメイドの戦略立案から専門チームによる実行まで</p>
          <p>顧客のビジョン実現に伴奏します。</p>
          <p>さぁ、未来に大きな花を咲かせましょう。</p>
        </div>
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
