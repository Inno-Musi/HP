import { MotionUp } from '@/components/motion-up'
import Image from 'next/image'

type Props = {
  language: 'en' | 'ja'
}

export const SectionAction = ({ language }: Props) => {
  return (
    <div className="bg-white py-10 md:py-20">
      <MotionUp>
        <div className="w-[800px] lg:w-[1200px] mx-auto max-w-[calc(100vw-32px)] flex flex-col-reverse lg:flex-row items-center gap-x-10 gap-y-6">
          <div className="lg:w-1/2 flex flex-col gap-y-4">
            <p className="text-2xl font-bold text-darkNavy">
              アイデアを現実に。成果を未来に。
            </p>
            <div className="leading-7">
              <p>『コンサルは口だけ』</p>
              <p>──そんなイメージを払拭するのが、私たちMUSICOです。</p>
              <p>
                私たちは戦略の提案にとどまらず、専任チームを持ち、実行まで伴走します。
              </p>
              <p>
                カフェやケータリングなどのフードサービスや、AI含めたIT領域など、圧倒的実績と経験を持つ実行領域を複数有しており、これまで数多くの成果をクライアントと共に創り出してきました。
              </p>
              <p>
                共に描いたビジョンを現実に変え、未来に大きな大きな花を咲かせる。
              </p>
              <p>
                その一歩一歩を支えるパートナーであり続けること、それが私たちの使命です。
              </p>
            </div>
          </div>
          <Image
            src="/musico-strategy.png"
            alt="musico-strategy"
            width={1636}
            height={1516}
            className="lg:w-[51%] bg-darkNavy/95"
          />
        </div>
      </MotionUp>
    </div>
  )
}
