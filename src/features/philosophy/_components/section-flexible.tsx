import { MotionUp } from '@/components/motion-up'
import Image from 'next/image'

type Props = {
  language: 'en' | 'ja'
}

export const SectionFlexible = ({ language }: Props) => {
  return (
    <div className="bg-ivory py-10 md:py-20">
      <MotionUp>
        <div className="w-[800px] lg:w-[1200px] mx-auto max-w-[calc(100vw-32px)] flex flex-col lg:flex-row items-center gap-x-10 gap-y-6">
          <Image
            src="/consulting-image.jpg"
            alt="consulting"
            width={1280}
            height={960}
            className="lg:w-[51%]"
          />
          <div className="lg:w-1/2 flex flex-col gap-y-4">
            {language === 'ja' ? (
              <>
                <p className="text-2xl font-bold text-darkNavy">
                  変化を機会と捉え、事業成長を実現します。
                </p>
                <div className="leading-7">
                  <p>
                    従来のコンサルティングがフレームワークに基づく経営戦略を中心としてきたのに対し、私たちは顧客企業それぞれの状況を深く理解し、真に個別最適化された戦略を設計します。
                  </p>
                  <p>
                    柔軟な発想で変化に対応し、共に未来を切り拓く戦略パートナーとして、顧客企業の持続的な成長を力強く支援いたします。
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold text-darkNavy">
                  We see change as an opportunity and drive business growth.
                </p>
                <div className="leading-7">
                  <p>
                    While traditional consulting has focused on management
                    strategies based on frameworks, we deeply understand each
                    client's unique situation and design truly customized
                    strategies.
                  </p>
                  <p>
                    As a strategic partner who embraces change with a flexible
                    mindset, we strongly support our clients' sustainable growth
                    and help shape the future together.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </MotionUp>
    </div>
  )
}
