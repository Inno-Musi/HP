import { FormContact } from '@/features/contact/_components/form-contact'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export default async function ContactPage({ params }: Props) {
  const { language } = await params
  return (
    <div className="max-w-[calc(100vw-32px)] mx-auto py-14 flex flex-col gap-y-10">
      <h1
        className={`text-center font-semibold text-4xl text-darkNavy ${
          language === 'ja' && 'font-extrabold'
        }`}
      >
        {language === 'en' ? 'Contact' : 'お問い合わせ'}
      </h1>
      <FormContact language={language} />
    </div>
  )
}
