import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  params: Promise<{
    language: 'ja' | 'en'
  }>
}

export default async function ContactCompletedPage({ params }: Props) {
  const { language } = await params
  return (
    <div className="py-[80px] md:py-[120px] px-4">
      <div className="bg-white max-w-[800px] w-full mx-auto px-4 md:px-10 py-8 md:py-10 rounded-md flex flex-col gap-y-6 text-center">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          {language === 'ja' ? 'お問い合わせ完了' : 'Inquiry Completed'}
        </h1>
        <div className="leading-7 md:leading-8 tracking-wide text-sm md:text-base">
          {language === 'ja' ? (
            <>
              <p>お問い合わせ頂きありがとうございます。</p>
              <p>お問い合わせ内容を確認し、</p>
              <p>
                数日以内に担当者よりメールまたは電話にてご連絡させて頂きます。
              </p>
              <p>今しばらくお待ちください。</p>
            </>
          ) : (
            <>
              <p>Thank you for your inquiry!</p>
              <p>We will review the details of your inquiry</p>
              <p>and get back to you via email or phone within a few days.</p>
              <p>We kindly ask for your patience in the meantime.</p>
            </>
          )}
        </div>
        <Link
          href={language === 'ja' ? '/ja' : '/en'}
          className="flex items-center gap-x-1 font-bold text-darkNavy hover:underline underline-offset-2 mx-auto"
        >
          {language === 'ja' ? 'トップページへ戻る' : 'Back to Homepage'}
        </Link>
      </div>
    </div>
  )
}
