'use client'

import { Button } from '@/components/button'
import { MotionUp } from '@/components/motion-up'
import { InitialAnimation } from '@/components/initial-animation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Lottie from 'lottie-react'
import topAnimationNew from '../_assets/animation/top-animation-new.json'

type Props = {
  language: 'en' | 'ja'
}

export const SectionFv = ({ language }: Props) => {
  const [showInitialAnimation, setShowInitialAnimation] = useState(true)

  return (
    <>
      {showInitialAnimation && (
        <InitialAnimation onComplete={() => setShowInitialAnimation(false)} />
      )}
      <AnimatePresence>
        {!showInitialAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/16] sm:aspect-[16/15] md:aspect-[16/8] max-w-[1400px] w-full mx-auto overflow-hidden"
          >
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center z-0 bg-black/30 scale-110" 
              style={{ backgroundImage: "url('/bg-fv-top.jpg')" }}
            />
            <div className="absolute w-full h-full flex flex-col gap-y-2 md:gap-y-4 items-start justify-end pb-16 pl-8 md:pl-16 z-10">
              {/* <MotionUp duration={0.2} initialY={0}>
                <p className="text-darkNavy text-5xl sm:text-6xl lg:text-8xl font-roboto">
                  MUSICO
                </p>
              </MotionUp> */}
              <MotionUp duration={0.4} initialY={0}>
                {/* <p className="text-lg sm:text-xl lg:text-2xl font-bold font-roboto"> */}
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-roboto text-white [text-shadow:_-0.5px_-0.5px_0_#99999980,_0.5px_-0.5px_0_#99999980,_-0.5px_0.5px_0_#99999980,_0.5px_0.5px_0_#99999980]">
                  Sow the Seeds of Happiness
                </p>
              </MotionUp>
              <MotionUp duration={0.7} initialY={0}>
                <div className="text-left leading-7 md:!leading-8 text-sm lg:text-base text-white [text-shadow:_-0.5px_-0.5px_0_#99999980,_0.5px_-0.5px_0_#99999980,_-0.5px_0.5px_0_#99999980,_0.5px_0.5px_0_#99999980]">
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
                      <p>
                        We support corporate services for businesses{' '}
                        <br className="block sm:hidden" />
                        as a tailor-made
                      </p>
                      <p>BPO (Business Process Outsourcing) company,</p>
                      <p>
                        optimizing operations in management,{' '}
                        <br className="block sm:hidden" />
                        finance, IT, and more,
                      </p>
                      <p>
                        to assist in efficient and sustainable business operations.
                      </p>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
