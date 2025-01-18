import Link from 'next/link'
import './globals.css'

export default function NotFound() {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col lg:flex-row gap-y-6 items-center justify-center h-screen">
          <div className="lg:border-l border-gray lg:pl-12 lg:ml-12 h-[250px] flex flex-col justify-center text-center lg:text-left max-w-[calc(100%-32px)]">
            <p className="text-3xl font-medium mb-4">404 Not Found</p>
            <p>お探しのページは見つかりませんでした。</p>
            <p>
              <span className="inline-block">ページが存在しないか、</span>
              <span className="inline-block">
                アクセス権限がない可能性があります。
              </span>
            </p>
            <Link
              href="/sign-in"
              className="text-vividBlue underline font-medium mt-1"
            >
              ログイン画面へ戻る
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
