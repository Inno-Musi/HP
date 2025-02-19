import Image from 'next/image'
import Link from 'next/link'

const examples = [
  {
    title: '大手外資金融機関の社内レストラン運営',
    image: '/restaurant.jpg',
    description: (
      <>
        <p>
          複数の大手外資企業にて、社内レストラン運営を企画から運営まで一貫して支援しております。
        </p>
        <p>
          質の高い食事と空間の提供により従業員のエンゲージメント向上を実現しつつ、長年のノウハウとITを最大限活用したコスト最適化の知見を活かして、効率的なレストラン運営を実現しています。
        </p>
      </>
    ),
  },
  {
    title: 'マネジメントゲームを活用した経営研修',
    image: '/ninomiya-sontoku.jpg',
    description: (
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
  },
  {
    title: 'カンボジアでの農業支援',
    image: '/agriculture.jpg',
    description: (
      <>
        <p>
          コンサルティング領域で培ってきた戦略立案・実行力に、我々が強みとする「食」の領域を掛け合わせ、海外への事業展開も行っております。
        </p>
        <p>
          国境を越え海外への支援を行い、得た知見をまたコンサルティングやフードサービスを通して顧客に還元することで、グローバルな視点を持った高品質なサービスの提供を実現しています。
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
        <div className="text-center flex flex-col gap-y-2">
          <p className="text-4xl md:text-5xl font-bold text-darkNavy">
            事例紹介
          </p>
          <p className="text-xl md:text-2xl font-bold text-darkNavy font-roboto">
            OUR WORK
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          {examples.map((example) => (
            <div
              key={example.title}
              className="flex flex-col lg:flex-row bg-white rounded-sm"
            >
              <div className="relative lg:w-[350px] aspect-[16/12] shrink-0">
                <Image
                  src={example.image}
                  alt={example.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-4 flex flex-col gap-y-2">
                <p className="text-xl font-bold text-darkNavy">
                  {example.title}
                </p>
                <div>{example.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
