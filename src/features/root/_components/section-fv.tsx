'use client'

import Lottie from 'lottie-react'
import animationData from '../_assets/animation/top-animation.json'

export const SectionFv = () => {
  return (
    <div className="relative aspect-video">
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-1/2 absolute right-0"
      />
    </div>
  )
}
