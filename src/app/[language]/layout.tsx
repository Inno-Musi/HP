import { HeaderJa } from '@/components/header-ja'
import type { ReactNode } from 'react'
import '../globals.css'
import { Footer } from '@/components/footer'
import { HeaderEn } from '@/components/header-en'
import { GoogleTagManager } from '@next/third-parties/google'
import { Roboto, Sawarabi_Gothic } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const sawarabiGothic = Sawarabi_Gothic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sawarabi-gothic',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
})

type Props = {
  children: ReactNode
  params: Promise<{ language: 'ja' | 'en' }>
}

export default async function RootLayout({ children, params }: Props) {
  const { language } = await params

  return (
    <html lang={language}>
      <GoogleTagManager gtmId={process.env.GTM_ID as string} />
      <body
        className={twMerge(
          `${sawarabiGothic.variable}  ${roboto.variable}`,
          language === 'ja' ? 'font-sawarabiGothic' : 'font-roboto',
        )}
      >
        {language === 'ja' && <HeaderJa />}
        {language === 'en' && <HeaderEn />}
        <main className="pt-16">{children}</main>
        <Footer language={language} />
      </body>
    </html>
  )
}
