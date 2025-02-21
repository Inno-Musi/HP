import { MotionUp } from '@/components/motion-up'

type Props = {
  language: 'en' | 'ja'
}

export const SectionConcept = ({ language }: Props) => {
  return (
    <div className="text-start sm:text-center bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[calc(100vw-32px)] flex flex-col gap-y-2 sm:gap-y-4">
        <MotionUp>
          <p className="text-2xl sm:text-3xl font-extrabold text-darkNavy">
            {language === 'ja'
              ? 'オーダーメイドのコーポレートサービス支援'
              : 'Tailor-made corporate service support'}
          </p>
        </MotionUp>
        <MotionUp>
          <div className="flex flex-col gap-y-1 sm:gap-y-2 text-base sm:text-lg">
            {language === 'ja' ? (
              <>
                <p className="leading-7 sm:leading-8">
                  私たちは、戦略策定に留まらず、実行と成果創出にコミットするコンサルティング&ソリューションパートナーです。
                </p>
                <p className="leading-7 sm:leading-8">
                  従来のコンサルティングが戦略提案に偏りがちであったのに対し、私たちは豊富な事業実績と専門チームによる実行力を強みとしています。
                </p>
                <p className="leading-7 sm:leading-8">
                  御社それぞれの事業状況を深く理解し、個別最適化された戦略を実行することで、確実な事業成長を実現します。
                </p>
                <p className="leading-7 sm:leading-8">
                  変化の激しい時代において、真に成果に繋がる成長戦略を、私たちと共につくり上げ、実現しませんか。
                </p>
              </>
            ) : (
              <>
                <p className="text-sm sm:text-base">
                  We are a consulting & solution partner committed not only to
                  strategy formulation but also to execution and delivering
                  results.
                </p>
                <p className="text-sm sm:text-base">
                  While traditional consulting tends to focus heavily on
                  strategy proposals, our strength lies in our proven business
                  track record and the execution capabilities of our expert
                  teams.
                </p>
                <p className="text-sm sm:text-base">
                  By deeply understanding your company's unique business
                  situation and implementing customized strategies, we ensure
                  solid business growth.
                </p>
                <p className="text-sm sm:text-base">
                  In this rapidly changing era, let's create and execute truly
                  effective growth strategies together.
                </p>
              </>
            )}
          </div>
        </MotionUp>
      </div>
    </div>
  )
}
