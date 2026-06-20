'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** stagger delay in seconds */
  delay?: number
  y?: number
  blur?: boolean
  duration?: number
  className?: string
}

// Calm, premium scroll reveal: fade + lift + slight de-blur on enter.
// Honors prefers-reduced-motion (renders static).
export const Reveal = ({
  children,
  delay = 0,
  y = 24,
  blur = true,
  duration = 0.9,
  className,
}: Props) => {
  const reduce = useReducedMotion()

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-10% 0px' }}
    >
      {children}
    </motion.div>
  )
}
