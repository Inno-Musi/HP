'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
}

export const RootMainTag = ({ children }: Props) => {
  const pathname = usePathname()
  const pathWithoutLanguage = pathname.split('/')[2]

  return (
    <main
      className={twMerge(
        'relative pt-16 bg-zinc-100',
        pathWithoutLanguage === 'contact' && 'bg-transparent',
      )}
    >
      {children}
    </main>
  )
}
