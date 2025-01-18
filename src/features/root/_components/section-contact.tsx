import { Button } from '@/components/button'
import { MotionUp } from '@/components/motion-up'

type Props = {
  language: 'en' | 'ja'
}

export const SectionContact = ({ language }: Props) => {
  return (
    <MotionUp>
      <div className="w-[800px] mx-auto max-w-[calc(100vw-32px)]">
        <div className="bg-white flex flex-col items-center py-10 px-4 gap-y-6">
          <div className="flex flex-col items-center gap-y-1">
            <p className="text-4xl md:text-5xl text-darkNavy font-semibold">
              Contact
            </p>
            {language === 'ja' && (
              <p className="text-base md:text-xl font-medium">お問い合わせ</p>
            )}
          </div>
          <p className="text-sm md:text-lg flex flex-col items-center md:flex-row">
            {language === 'ja' ? (
              <>
                <span>協業・事業に関するご相談・採用などに関する</span>
                <span>お問い合わせはこちらから</span>
              </>
            ) : (
              <>
                <span className="pr-1">
                  For inquiries about business collaboration,
                </span>
                <span>business consulting, and recruitment</span>
              </>
            )}
          </p>
          <Button
            text={language === 'en' ? 'Contact' : 'お問い合わせ'}
            className="py-3 md:py-4 text-base md:text-xl rounded-full px-12 md:px-16 border-2 border-darkNavy hover:opacity-100 hover:bg-white hover:text-darkNavy duration-300 font-medium"
          />
        </div>
      </div>
    </MotionUp>
  )
}
