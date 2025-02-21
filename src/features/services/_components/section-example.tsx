import { TitleMain } from '@/components/title-main'
import Image from 'next/image'
import Link from 'next/link'

const examples = [
  {
    titleJa: '大手外資金融機関の社内レストラン運営',
    titleEn: 'Management Game',
    image: '/restaurant.jpg',
    descriptionJa: (
      <>
        <p>
          複数の大手外資企業にて、社内レストラン運営を企画から運営まで一貫して支援しております。
        </p>
        <p>
          質の高い食事と空間の提供により従業員のエンゲージメント向上を実現しつつ、長年のノウハウとITを最大限活用したコスト最適化の知見を活かして、効率的なレストラン運営を実現しています。
        </p>
      </>
    ),
    descriptionEn: (
      <>
        <p>
          We provide comprehensive support for in-house restaurant operations,
          from planning to management, at multiple major foreign companies.
        </p>
        <p>
          By offering high-quality meals and environments, we enhance employee
          engagement while leveraging years of expertise and IT to optimize
          costs, achieving efficient restaurant operations.
        </p>
      </>
    ),
  },
  {
    titleJa: 'マネジメントゲームを活用した経営研修',
    titleEn: 'Management Game',
    image: '/ninomiya-sontoku.jpg',
    descriptionJa: (
      <>
        <p>事業再生M＆Aにて200事業以上の経験がある経営者を所長に迎え、</p>
        <p>
          <Link
            href="https://mgmtlab.stores.jp/about"
            target="_blank"
            rel="noopener"
            className="text-vividBlue underline underline-offset-2"
          >
            『Management Lab』
          </Link>
          を設立し、企業研修や業務支援を行い、次世代を担う企業と経営幹部のサポートを行っています。
        </p>
        <p>全国1000以上の各種学校の授業や実習で取り入れられている、</p>
        <p>
          40年の歴史ある体験型の経営戦略シミュレーションゲームを用いた研修や
        </p>
        <p>
          個別にお取引先様への業務支援を行い、相互に成長できる環境づくりを目指しています。
        </p>
      </>
    ),
    descriptionEn: (
      <>
        <p>
          With a leader who has over 200 experiences in business revitalization
          M&A, we have established
          <Link
            href="https://mgmtlab.stores.jp/about"
            target="_blank"
            rel="noopener"
            className="text-vividBlue underline underline-offset-2"
          >
            'Management Lab'
          </Link>{' '}
          to provide corporate training and business support, helping
          next-generation companies and management executives.
        </p>
        <p>
          Our training, which incorporates a 40-year history of hands-on
          management strategy simulation games, is used in over 1000 schools
          nationwide for various classes and practical exercises.
        </p>
        <p>
          We also provide individualized business support to our clients, aiming
          to create an environment where mutual growth is possible.
        </p>
      </>
    ),
  },
  {
    titleJa: 'カンボジアでの農業支援',
    titleEn: 'Agricultural Support in Cambodia',
    image: '/agriculture.jpg',
    descriptionJa: (
      <>
        <p>
          コンサルティング領域で培ってきた戦略立案・実行力に、我々が強みとする「食」の領域を掛け合わせ、海外への事業展開も行っております。
        </p>
        <p>
          国境を越え海外への支援を行い、得た知見をまたコンサルティングやフードサービスを通して顧客に還元することで、グローバルな視点を持った高品質なサービスの提供を実現しています。
        </p>
      </>
    ),
    descriptionEn: (
      <>
        <p>
          By combining the strategic planning and execution capabilities we have
          developed in the consulting field with our expertise in the "food"
          domain, we are expanding our business internationally.
        </p>
        <p>
          We provide cross-border support and, by returning the knowledge gained
          through this experience to our clients via consulting and food
          services, we are able to offer high-quality services with a global
          perspective.
        </p>
      </>
    ),
  },
]

type Props = {
  language: 'ja' | 'en'
}

export const SectionExample = ({ language }: Props) => {
  return (
    <div className="bg-lightBlue py-10 lg:py-20">
      <div className="w-[600px] lg:w-[1200px] mx-auto max-w-[calc(100vw-32px)] flex flex-col gap-y-8 md:gap-y-10">
        <TitleMain titleJa="事例紹介" titleEn="OUR WORK" language={language} />
        <div className="flex flex-col gap-y-4">
          {examples.map((example) => (
            <div
              key={example.titleJa}
              className="flex flex-col lg:flex-row bg-white rounded-sm"
            >
              <div className="relative lg:w-[350px] aspect-[16/12] shrink-0">
                <Image
                  src={example.image}
                  alt={example.titleJa}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-4 flex flex-col gap-y-2">
                <p className="text-xl font-bold text-darkNavy">
                  {language === 'ja' ? example.titleJa : example.titleEn}
                </p>
                <div>
                  {language === 'ja'
                    ? example.descriptionJa
                    : example.descriptionEn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
