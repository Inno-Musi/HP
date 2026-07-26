import { Button } from '@/components/button'
import { GeometricBackground } from '@/components/geometric-background'
import { MATERIAL_FILE } from '@/features/materials/_helpers/material-file'
import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'

type Props = {
  params: Promise<{ language: 'ja' | 'en' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return {
      ...buildMetadata({
        language,
        path: 'materials/completed',
        title: '資料ダウンロード完了 | 株式会社MUSICO',
        description: '株式会社MUSICOの資料ダウンロード完了ページです。',
      }),
      robots: { index: false, follow: false },
    }
  }

  return {
    ...buildMetadata({
      language,
      path: 'materials/completed',
      title: 'Download Ready | MUSICO Inc.',
      description: 'Material download page for MUSICO Inc.',
    }),
    robots: { index: false, follow: false },
  }
}

export default async function MaterialsCompletedPage({ params }: Props) {
  const { language } = await params
  const isJa = language === 'ja'

  return (
    <>
      <GeometricBackground className="fixed" />
      <div className="py-[100px] md:py-[160px] px-4">
        <div className="bg-paper max-w-[720px] w-full mx-auto px-4 md:px-10 py-8 md:py-10 rounded-md flex flex-col gap-y-6 text-center">
          <h1 className="text-2xl md:text-3xl font-display text-darkNavy">
            {isJa ? 'ありがとうございます' : 'Thank you'}
          </h1>
          <p className="leading-7 md:leading-8 tracking-wide text-sm md:text-base text-zinc-700">
            {isJa
              ? '以下のボタンから会社紹介資料をダウンロードいただけます。'
              : 'You can download the company profile from the button below.'}
          </p>
          <Link
            href={MATERIAL_FILE}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto"
          >
            <Button
              type="button"
              text={isJa ? '資料をダウンロード（PDF）' : 'Download the PDF'}
              className="rounded-full bg-darkNavy text-white px-10 py-4 text-base md:text-lg hover:opacity-80 duration-300"
            />
          </Link>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {isJa ? (
              <>
                個別のご相談は
                <Link
                  href={`/${language}/contact`}
                  className="text-vividBlue underline underline-offset-2 mx-1"
                >
                  お問い合わせ
                </Link>
                からお気軽にどうぞ。
              </>
            ) : (
              <>
                For a specific consultation, please reach out via
                <Link
                  href={`/${language}/contact`}
                  className="text-vividBlue underline underline-offset-2 mx-1"
                >
                  Contact
                </Link>
                .
              </>
            )}
          </p>
        </div>
      </div>
    </>
  )
}
