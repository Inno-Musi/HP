import { BreadCrumbs } from '@/components/bread-crumbs'
import { TitleMain } from '@/components/title-main'
import { FormContactEn } from '@/features/contact/_components/form-contact-en'
import { FormContactJa } from '@/features/contact/_components/form-contact-ja'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export default async function ContactPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="max-w-[calc(100vw-32px)] mx-auto pt-20 pb-[120px] flex flex-col gap-y-10">
        <TitleMain
          titleJa="お問い合わせ"
          titleEn="Contact"
          language={language}
        />
        {language === 'ja' ? (
          <div className="max-w-[600px] w-full mx-auto text-center leading-7">
            <p>当社へのお問い合わせは、下記のフォームからお願い致します。</p>
            <p>
              ご入力頂いたメールアドレス宛に担当者からご連絡させて頂きます。
            </p>
          </div>
        ) : (
          <div className="max-w-[600px] w-full mx-auto text-center leading-7 text-lg">
            <p>For inquiries to our company, please use the form below.</p>
            <p>
              Our representative will contact you at the email address you
              provided.
            </p>
          </div>
        )}
        {language === 'ja' ? <FormContactJa /> : <FormContactEn />}
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          { labelJa: 'お問い合わせ', labelEn: 'Contact', href: '/contact' },
        ]}
      />
    </>
  )
}
