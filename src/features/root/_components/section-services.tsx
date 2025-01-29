import { Button } from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  language: 'en' | 'ja'
}

export const SectionServices = ({ language }: Props) => {
  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="w-[600px] lg:w-[1200px] max-w-[calc(100vw-32px)] mx-auto flex flex-col lg:flex-row items-center gap-x-10 gap-y-8">
        <Image
          src="/consulting-buffet.png"
          alt="consulting-buffet"
          width={1848}
          height={1010}
          className="lg:w-1/2"
        />
        <div className="lg:w-1/2 flex flex-col gap-y-3 lg:gap-y-4">
          <p className="text-3xl lg:text-4xl font-bold text-darkNavy">
            OUR SERVICES
          </p>
          <p className="leading-7">
            我々MUSICOは戦略立案段階から実行支援段階まで、包括的に支援を行う
            <span className="font-bold text-darkNavy">
              コンサルティング領域
            </span>
            と、企業内で運営されるカフェやレストランなどを設立支援・運営する
            <span className="font-bold text-darkNavy">フードサービス領域</span>
            を大きな2本の柱として、クライアント企業の経営資源を最大限活用し、成長を加速させるお手伝いを行なっています。
          </p>
          <Link href="/ja/services" className="mx-auto lg:mx-0">
            <Button
              type="button"
              text="See More"
              className="rounded-full bg-white text-darkNavy border border-darkNavy px-12 hover:opacity-100 hover:bg-darkNavy hover:text-white duration-300 text-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
