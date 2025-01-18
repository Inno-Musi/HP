'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

// biome-ignore lint/suspicious/noShadowRestrictedNames:
export default function Error() {
  const { language } = useParams()

  return (
    <div className="flex flex-col lg:flex-row gap-y-6 items-center justify-center py-[100px]">
      <Image
        src="/musico_logo.png"
        alt="musico logo"
        width={252}
        height={114}
      />
      <div className="lg:border-l border-gray lg:pl-12 lg:ml-12 h-[250px] flex flex-col justify-center text-center lg:text-left max-w-[calc(100%-32px)]">
        <p className="text-3xl font-medium mb-4">500 Internal Server Error</p>
        <p>
          {language === 'ja'
            ? 'サーバーでエラーが発生しました。'
            : 'An error occurred on the server.'}
        </p>
        <p>
          {language === 'ja'
            ? '後ほど再度お試しください。'
            : 'Please try again later.'}
        </p>
        <Link
          href={`/${language}`}
          className="text-vividBlue underline font-medium mt-1"
        >
          {language === 'ja' ? 'トップページに戻る' : 'Return to the homepage'}
        </Link>
      </div>
    </div>
  )
}
