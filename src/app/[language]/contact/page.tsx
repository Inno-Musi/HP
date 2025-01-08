import { TitleMain } from '@/components/title-main'
import { FormContact } from '@/features/contact/_components/form-contact'
import { twMerge } from 'tailwind-merge'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export default async function ContactPage({ params }: Props) {
  const { language } = await params
  return (
    <div className="max-w-[calc(100vw-32px)] mx-auto py-14 flex flex-col gap-y-10">
      <TitleMain titleJa="お問い合わせ" titleEn="Contact" language={language} />
      <FormContact language={language} />
    </div>
  )
}
