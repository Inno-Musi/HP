import { Button } from '@/components/button'
import { MotionUp } from '@/components/motion-up'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  language: 'en' | 'ja'
}

export const SectionContact = ({ language }: Props) => {
  return (
    <div className="relative py-12">
      <Image
        src="/bg-contact.jpg"
        width={1920}
        height={1280}
        alt="bg-contact"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-darkNavy opacity-70" />
      <MotionUp>
        <div className="relative z-20 w-[800px] mx-auto max-w-[calc(100vw-32px)]">
          <div className="bg-white flex flex-col items-center py-10 px-4 gap-y-6">
            <div className="flex flex-col items-center gap-y-1">
              <p className="text-4xl md:text-5xl text-darkNavy font-semibold font-roboto">
                Contact
              </p>
              {language === 'ja' && (
                <p className="text-base md:text-xl font-medium">お問い合わせ</p>
              )}
            </div>
            <p className="text-sm md:text-lg flex flex-col items-center md:flex-row">
              {language === 'ja' ? (
                <>
                  <span>事業・サービスに関するご相談・採用などに関する</span>
                  <span>お問い合わせはこちらから</span>
                </>
              ) : (
                <>
                  <span>For inquiries about our services, business matters,</span>
                  <span>or recruitment, please contact us here.</span>
                </>
              )}
            </p>
            <Link href={`/${language}/contact`}>
              <Button
                text={language === 'en' ? 'Contact' : 'お問い合わせ'}
                className="rounded-full bg-white text-darkNavy border border-darkNavy px-12 py-3 hover:opacity-100 hover:bg-darkNavy hover:text-white duration-300 text-lg"
              />
            </Link>
          </div>
        </div>
      </MotionUp>
    </div>
  )
}
