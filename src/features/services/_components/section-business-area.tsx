import Image from 'next/image'

type Props = {
  language: 'en' | 'ja'
}

const businessAreas = [
  {
    title: 'コーポレートサービス支援',
    image: '/technology.png',
    description: (
      <>
        <ol className="list-decimal pl-5 mb-2">
          <li>的確な経営課題の抽出</li>
          <li>柔軟な戦略立案</li>
          <li>力強い実行支援</li>
        </ol>
        <p>の3本の柱を基礎としたコーポレートサービス支援を提供します。</p>
        <p>
          特に、IT領域では
          <span className="text-darkNavy font-bold">AIを積極的に活用</span>
          したアプローチを強みとしています。
        </p>
        <p>
          クライアントのコーポレートサービスへの支援等も承っており、ビジネスパートナーとしてお客様の経営資源を最大限活用し、成長を力強く後押しいたします。
        </p>
        <p>
          ビジネスパートナーとしてお客様の経営資源を最大限活用し、成長を力強く後押しいたします。
        </p>
      </>
    ),
  },
  {
    title: 'フードサービス',
    image: '/buffet-2.jpg',
    description: (
      <>
        <ul className="list-disc pl-5">
          <li>企業内カフェ／レストランの開業支援や運営</li>
          <li>企業内ケータリングの運営</li>
          <li>VIP向けのファインダイニングサービス運営</li>
        </ul>
        <p>
          などのフードサービス領域において、大手外資金融機関をはじめとした企業様にサービスを数多く展開している実績があります。
        </p>
        <p>
          豊富な実績とノウハウを基に、カジュアルからラグジュアリーまでお客様のニーズに合わせたフードサービスを提供いたします。
        </p>
        <p>
          また、
          <span className="text-darkNavy font-bold">
            CSR(Corporate Social Responsibility)活動
          </span>
          としてフェアトレードやフードロス削減などに取り組んでおり、フードサービスを通じてより良い社会を創ることへの貢献に日々取り組んでいます。
        </p>
      </>
    ),
  },
]

export const SectionBusinessArea = ({ language }: Props) => {
  return (
    <div className="bg-zinc-50 py-10 lg:py-20">
      <div className="w-[800px] lg:w-[1200px] mx-auto max-w-[calc(100vw-32px)] flex flex-col gap-y-8 lg:gap-y-12">
        <p className="text-2xl md:text-4xl font-bold text-center text-darkNavy">
          コーポレートサービス支援 <br className="md:hidden block" />×
          <br className="md:hidden block" /> フードサービス
        </p>
        <div className="flex gap-x-4 gap-y-6 flex-col lg:flex-row">
          {businessAreas.map((businessArea) => (
            <div
              key={businessArea.title}
              className="lg:w-1/2 shadow-md rounded-sm overflow-hidden bg-white"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={businessArea.image}
                  alt={businessArea.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-6 lg:py-8 flex flex-col gap-y-6 lg:gap-y-8">
                <p className="text-center text-2xl lg:text-3xl font-bold text-darkNavy">
                  {businessArea.title}
                </p>
                <div className="leading-6 text-sm lg:leading-7 lg:text-base">
                  {businessArea.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
