import Image from 'next/image'

const examples = [
  {
    title: '大手外資金融機関の社内レストラン運営',
    image: '/restaurant.jpg',
    description: (
      <>
        <p>
          外資系IT企業や、日本の大手企業、金融機関などでは福利厚生の一つとして豪華な社内レストランが設置されているケースが多く、それらがフィーチャーされる姿を目にしたことがある方も多いのではないでしょうか。
        </p>
        <p>
          なぜ、これらの兆円企業は社内カフェやレストランに投資を行うのでしょうか？
        </p>
        <p>
          我々MUSICOはこれらの場所は単に社員が食事をする為の場所ではなく、社員が集まる理由を作り、語り合う場所であり、クリエイティブの最前線であると考えています。
        </p>
        <p>
          我々MUSICOはコンサルタントの視点から、費用対効果も鑑み、「集まり、語り合い、創造する」場所づくりをお手伝いしてきました。
        </p>
      </>
    ),
  },
  {
    title: 'マネジメントゲームを活用した経営研修',
    image: '/ninomiya-sontoku.jpg',
    description: (
      <>
        <p>『道徳なき経済は罪悪であり、経済なき道徳は寝言である。』</p>
        <p>
          江戸時代に活躍した二宮尊徳の思想をコンセプトとした経営研修を開催しております。
        </p>
        <p>
          「理想」だけでなく「利益」を併せて実現することこそが真の経営であると我々は考えています。
        </p>
        <p>
          一方、初めから利益を掴むという感覚を得ることは難しく、資金もない中社外取締役を雇うことも難しいという問題があります。
        </p>
        <p>
          そこで、我々MUSICOはこれまで経営のプロフェッショナルとして活動してきた我々や、同じ志を持つ仲間と交流できる環境、
          ゲームを通じて経営学や会計学について学ぶことのできるプログラムなどを用意しております。
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
    <div className="bg-lightBlue py-10">
      <div className="w-[600px] lg:w-[1200px] mx-auto max-w-[calc(100vw-32px)] flex flex-col gap-y-8 md:gap-y-10">
        <div className="text-center flex flex-col gap-y-2">
          <p className="text-4xl md:text-5xl font-bold text-darkNavy">
            事例紹介
          </p>
          <p className="text-xl md:text-2xl font-bold text-darkNavy">
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
                <p className="text-xl font-bold">{example.title}</p>
                <div>{example.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
