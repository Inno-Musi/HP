'use client'

import { Button } from '@/components/button'
import { InitialAnimation } from '@/components/initial-animation'
import { MotionUp } from '@/components/motion-up'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

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
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative min-h-[calc(100vh-64px)] w-full mx-auto overflow-hidden"
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/home-hero.jpg')" }}
            />

            <div className="absolute inset-0 bg-black/20 z-[1]" />

            <div className="absolute w-full h-full flex flex-col gap-y-4 items-start justify-end pb-16 pl-8 md:pl-16 z-10">
              <MotionUp duration={1} initialY={0}>
                <Link href={`/${language}/philosophy`}>
                  <Button
                    type="button"
                    text="OUR PHILOSOPHY"
                    className="rounded-full bg-white text-darkNavy border border-darkNavy px-8 sm:py-3 hover:opacity-100 hover:bg-darkNavy hover:text-white duration-300 font-roboto"
                  />
                </Link>
              </MotionUp>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
