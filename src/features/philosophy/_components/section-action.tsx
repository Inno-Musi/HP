import Image from 'next/image'

type Props = {
  language: 'en' | 'ja'
}

export const SectionAction = ({ language }: Props) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-x-10 gap-y-6">
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
        src="/collaborate.jpg"
        alt="collaborate"
        width={1920}
        height={1310}
        className="lg:w-[51%]"
      />
    </div>
  )
}
