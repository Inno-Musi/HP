'use client'

import { Button } from '@/components/button'
import { InitialAnimation } from '@/components/initial-animation'
import { MotionUp } from '@/components/motion-up'
import { motion } from 'framer-motion'
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

      {/* Hero is always rendered (server-side) so the h1 is crawlable; the
          InitialAnimation overlays it (z-50, opaque) until it fades out. */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative h-[64svh] min-h-[520px] max-h-[680px] md:h-auto md:min-h-[calc(100vh-64px)] md:max-h-none w-full mx-auto overflow-hidden"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 md:hidden animate-kenburns"
          style={{ backgroundImage: "url('/home-hero-mobile.jpg')" }}
        />
        <div
          className="absolute inset-0 hidden w-full h-full bg-cover bg-center z-0 md:block animate-kenburns"
          style={{ backgroundImage: "url('/home-hero.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10 z-[1]" />

        <div className="absolute w-full h-full flex flex-col gap-y-5 md:gap-y-7 items-start justify-end pb-14 md:pb-16 pl-8 pr-8 md:pl-16 md:pr-16 z-10 max-w-[1200px]">
          <MotionUp duration={1} initialY={0}>
            <div className="flex flex-col gap-y-3 md:gap-y-4 text-white">
              <h1 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.15] drop-shadow-sm">
                {language === 'ja' ? (
                  <>
                    ホスピタリティを、
                    <br className="hidden sm:block" />
                    再設計する。
                  </>
                ) : (
                  <>
                    Redesigning Hospitality,
                    <br className="hidden sm:block" />
                    End to End.
                  </>
                )}
              </h1>
              <p className="text-sm md:text-lg leading-relaxed max-w-[34rem] opacity-95">
                {language === 'ja'
                  ? 'MUSICOは、食・空間・運用・テクノロジーを一気通貫で設計・実装する Hospitality Innovation Firm です。'
                  : 'MUSICO is a Hospitality Innovation Firm that designs and implements food, space, operations, and technology as one continuous system.'}
              </p>
            </div>
          </MotionUp>
          <MotionUp duration={1} initialY={0}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={`/${language}/services`}>
                <Button
                  type="button"
                  text={language === 'ja' ? '事業内容を見る' : 'Our Services'}
                  className="rounded-full bg-darkNavy text-white border border-darkNavy px-8 py-3 hover:opacity-80 duration-300 font-roboto w-fit"
                />
              </Link>
              <Link href={`/${language}/contact`}>
                <Button
                  type="button"
                  text={language === 'ja' ? 'お問い合わせ' : 'Contact'}
                  className="rounded-full bg-paper text-darkNavy border border-darkNavy px-8 py-3 hover:bg-darkNavy hover:text-white duration-300 font-roboto w-fit"
                />
              </Link>
            </div>
          </MotionUp>
        </div>
      </motion.div>
    </>
  )
}
