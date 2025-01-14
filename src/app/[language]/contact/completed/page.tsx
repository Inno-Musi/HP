import Link from 'next/link'

type Props = {
  language: 'ja' | 'en'
}

export default function ContactCompletedPage({ language }: Props) {
  return (
    <div className="py-[80px] md:py-[120px] px-4">
      <div className="bg-white max-w-[800px] w-full mx-auto px-4 md:px-10 py-8 md:py-10 rounded-md flex flex-col gap-y-10 text-center">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          お問い合わせ完了
        </h1>
        <div className="leading-7 md:leading-8 tracking-wide text-sm md:text-base">
          <p>お問い合わせ頂きありがとうございます。</p>
          <p>お問い合わせ内容を確認し、</p>
          <p>数日以内に担当者よりメールまたは電話にてご連絡させて頂きます。</p>
          <p>今しばらくお待ちください。</p>
        </div>
        <Link
          href="/ja"
          className="flex items-center gap-x-1 font-bold text-moss hover:underline underline-offset-2 mx-auto"
        >
          トップページへ戻る
        </Link>
      </div>
    </div>
  )
}
