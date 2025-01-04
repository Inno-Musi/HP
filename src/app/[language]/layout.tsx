import { HeaderJa } from '@/components/header-ja'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: Promise<{ language: string }>
}

export default async function UnderLanguageLayout({ children, params }: Props) {
  const { language } = await params
  if (language !== 'en' && language !== 'ja') notFound()

  return (
    <>
      {language === 'ja' && <HeaderJa />}
      {children}
    </>
  )
}
