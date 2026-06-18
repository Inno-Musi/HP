'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
}

// Editorial heading reveal: text rises from behind a clip mask.
// Honors prefers-reduced-motion (renders static).
export const MaskReveal = ({ children, delay = 0, className }: Props) => {
  const reduce = useReducedMotion()

  if (reduce) return <span className={className}>{children}</span>

  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className ?? ''}`}
        initial={{ y: '115%' }}
        whileInView={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: '-10% 0px' }}
      >
        {children}
      </motion.span>
    </span>
  )
}
