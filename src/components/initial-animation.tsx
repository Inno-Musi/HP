import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import topAnimationNew from '@/features/root/_assets/animation/top-animation-new.json'

export const InitialAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [showLogo, setShowLogo] = useState(true)
  const [showFirstLottie, setShowFirstLottie] = useState(false)
  const [showSecondLottie, setShowSecondLottie] = useState(false)
  const [showThirdLottie, setShowThirdLottie] = useState(false)

  useEffect(() => {
    // Lottieアニメーションの表示とフェードアウト
    const timer2 = setTimeout(() => setShowFirstLottie(true), 1500)
    const timer2Hide = setTimeout(() => setShowFirstLottie(false), 2000)

    const timer3 = setTimeout(() => setShowSecondLottie(true), 2200)
    const timer3Hide = setTimeout(() => setShowSecondLottie(false), 2700)

    const timer4 = setTimeout(() => setShowThirdLottie(true), 3200)
    const timer4Hide = setTimeout(() => setShowThirdLottie(false), 3700)

    // 最後にロゴとアニメーション全体を終了
    const timer5 = setTimeout(() => {
      setShowLogo(false)
    }, 4000)

    const timer6 = setTimeout(() => {
      onComplete()
    }, 4500)

    return () => {
      clearTimeout(timer2)
      clearTimeout(timer2Hide)
      clearTimeout(timer3)
      clearTimeout(timer3Hide)
      clearTimeout(timer4)
      clearTimeout(timer4Hide)
      clearTimeout(timer5)
      clearTimeout(timer6)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-white z-50">
      <AnimatePresence>
        {showLogo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/icon-512.png"
              width={512}
              height={512}
              alt="musico"
              className="w-[50px] md:w-[100px]"
            />
            <Image
              src="/musico-company-name.png"
              width={472}
              height={158}
              alt="musico"
              className="w-[100px] md:w-[200px]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFirstLottie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Lottie
              animationData={topAnimationNew}
              loop={false}
              autoplay={true}
              className="absolute top-1/3 left-0 w-1/3"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSecondLottie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Lottie
              animationData={topAnimationNew}
              loop={false}
              autoplay={true}
              className="absolute -bottom-0 right-0 w-[20%]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showThirdLottie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Lottie
              animationData={topAnimationNew}
              loop={false}
              autoplay={true}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[300vh] w-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 
