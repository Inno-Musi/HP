import { BreadCrumbs } from '@/components/bread-crumbs'
import { GeometricBackground } from '@/components/geometric-background'
import { TitleMain } from '@/components/title-main'
import { FormContactEn } from '@/features/contact/_components/form-contact-en'
import { FormContactJa } from '@/features/contact/_components/form-contact-ja'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return {
      title: 'お問い合わせ | 株式会社MUSICO',
      description: '株式会社MUSICOへのお問い合わせフォームです。',
    }
  }

  return {
    title: 'Contact | MUSICO Inc.',
    description: 'Contact form for MUSICO Inc.',
  }
}

export default async function ContactPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="relative max-w-[calc(100vw-32px)] mx-auto py-16 md:py-20 flex flex-col gap-y-6 md:gap-y-12">
        <GeometricBackground className="fixed" />
        <TitleMain
          titleJa="お問い合わせ"
          titleEn="Contact"
          language={language}
          className="text-white"
        />
        {language === 'ja' ? (
          <div className="max-w-[600px] w-full mx-auto text-sm md:text-base text-center leading-6 md:leading-7 text-white">
            <p>
              当社へのお問い合わせは、
              <br className="block md:hidden" />
              下記のフォームからお願い致します。
            </p>
            <p>
              ご入力頂いたメールアドレス宛に
              <br className="block md:hidden" />
              担当者からご連絡させて頂きます。
            </p>
          </div>
        ) : (
          <div className="max-w-[600px] w-full mx-auto text-center leading-6 text-sm md:text-base md:leading-7 text-white">
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
