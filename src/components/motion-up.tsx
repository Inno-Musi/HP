'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  duration?: number
  initialY?: number
}

export const MotionUp = ({
  children,
  duration = 0.5,
  initialY = 20,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
