import { Button } from '@/components/button'
import { MotionUp } from '@/components/motion-up'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  language: 'en' | 'ja'
}

export const SectionServices = ({ language }: Props) => {
  return (
    <div className="bg-white py-12 lg:py-20">
      <MotionUp>
        <div className="w-[600px] lg:w-[1200px] max-w-[calc(100vw-32px)] mx-auto flex flex-col lg:flex-row items-center gap-x-10 gap-y-8">
          <Image
            src="/consulting-buffet.png"
            alt="consulting-buffet"
            width={1848}
            height={1010}
            className="lg:w-1/2"
          />

          <div className="lg:w-1/2 flex flex-col gap-y-3 lg:gap-y-4">
            <p className="text-3xl lg:text-4xl font-bold text-darkNavy font-roboto">
              OUR SERVICES
            </p>
            {language === 'ja' ? (
              <div className="flex flex-col gap-y-2 leading-7">
                <p>
                  私たちは戦略立案から実行支援まで、包括的に支援を行う
                  <span className="font-bold text-darkNavy">サポート領域</span>
                  と、専任部隊を配置し運営する
                  <span className="font-bold text-darkNavy">
                    オペレーション領域
                  </span>
                  を大きな2本の柱として、企業の経営資源を最大限活用し、成長を加速させるお手伝いを行なっています。
                </p>
              </div>
            ) : (
              <>
                <p className="leading-7">
                  We, MUSICO, provide comprehensive support from the strategy
                  planning phase to the execution phase. Our two main pillars
                  are the{' '}
                  <span className="font-bold text-darkNavy">
                    consulting domain
                  </span>
                  , which covers everything from strategic planning to execution
                  support, and the{' '}
                  <span className="font-bold text-darkNavy">
                    food service domain
                  </span>
                  , which supports the establishment and operation of in-house
                  cafés and restaurants. We help client companies maximize their
                  management resources and accelerate their growth.
                </p>
              </>
            )}
            <Link href="/ja/services" className="mx-auto lg:mx-0">
              <Button
                type="button"
                text="See More"
                className="rounded-full bg-white text-darkNavy border border-darkNavy px-12 hover:opacity-100 hover:bg-darkNavy hover:text-white duration-300 text-lg font-roboto"
              />
            </Link>
          </div>
        </div>
      </MotionUp>
    </div>
  )
}
