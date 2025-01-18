import Image from 'next/image'
import Link from 'next/link'

export default async function NotFound() {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col gap-y-6 lg:flex-row items-center justify-center h-screen">
          <Image
            src="/musico_logo.png"
            alt="musico logo"
            width={252}
            height={114}
          />
          <div className="lg:border-l border-gray lg:pl-12 lg:ml-12 lg:h-[250px] flex flex-col justify-center text-center lg:text-left max-w-[calc(100%-32px)]">
            <p className="text-3xl font-medium mb-4">404 Not Found</p>
            <p>お探しのページは見つかりませんでした。</p>
            <p>
              <span className="inline-block">ページが存在しないか、</span>
              <span className="inline-block">削除された可能性があります。</span>
            </p>
            <Link
              href="/ja"
              className="text-vividBlue underline font-medium mt-1"
            >
              トップページに戻る / Return to the homepage
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
