import { HeaderJa } from '@/components/header-ja'
import type { ReactNode } from 'react'
import '../globals.css'
import { Footer } from '@/components/footer'
import { HeaderEn } from '@/components/header-en'
import { JsonLd } from '@/components/json-ld'
import { organizationJsonLd, webSiteJsonLd } from '@/lib/structured-data'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Fraunces, Roboto, Sawarabi_Gothic, Shippori_Mincho } from 'next/font/google'
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

// Display (heading) fonts — editorial serif. Latin via Fraunces, JP via
// Shippori Mincho. Falls back to system serif when blocked locally.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

const shipporiMincho = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-shippori',
})

type Props = {
  children: ReactNode
  params: Promise<{ language: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { language: rawLanguage } = await params
  const language = rawLanguage === 'en' ? 'en' : 'ja'

  return (
    <html lang={language}>
      {process.env.GTM_ID && <GoogleTagManager gtmId={process.env.GTM_ID} />}
      {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
      <body
        className={twMerge(
          `${sawarabiGothic.variable} ${roboto.variable} ${fraunces.variable} ${shipporiMincho.variable}`,
          language === 'ja' ? 'font-sawarabiGothic' : 'font-roboto',
        )}
      >
        <JsonLd data={organizationJsonLd(language)} />
        <JsonLd data={webSiteJsonLd(language)} />
        {language === 'ja' && <HeaderJa />}
        {language === 'en' && <HeaderEn />}
        <main className="pt-16">{children}</main>
        <Footer language={language} />
      </body>
    </html>
  )
}
