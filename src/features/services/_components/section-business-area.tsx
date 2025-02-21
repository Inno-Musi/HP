import Image from 'next/image'

type Props = {
  language: 'en' | 'ja'
}

const businessAreas = [
  {
    titleJa: 'コーポレートサービス支援',
    titleEn: 'Corporate Service Support',
    image: '/technology.png',
    descriptionJa: (
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
      </>
    ),
    descriptionEn: (
      <>
        <ol className="list-decimal pl-5 mb-2">
          <li>Accurate identification of management challenges</li>
          <li>Flexible strategy planning</li>
          <li>Strong execution support</li>
        </ol>
        <p>
          We provide corporate service support based on these three pillars.
        </p>
        <p>
          In particular, we excel in the IT domain by
          <span className="text-darkNavy font-bold">
            {' '}
            actively utilizing AI
          </span>
          .
        </p>
        <p>
          We also offer support for corporate services, maximizing our clients'
          management resources as a business partner, and driving their growth
          with strength and confidence.
        </p>
      </>
    ),
  },
  {
    titleJa: 'フードサービス',
    titleEn: 'Food Service',
    image: '/buffet-2.jpg',
    descriptionJa: (
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
    descriptionEn: (
      <>
        <ul className="list-disc pl-5">
          <li>Support and management of in-house cafés/restaurants</li>
          <li>Operation of in-house catering services</li>
          <li>Management of fine dining services for VIPs</li>
        </ul>
        <p>
          We have extensive experience providing services to companies,
          including major foreign financial institutions, in the food service
          domain.
        </p>
        <p>
          Based on our rich track record and expertise, we offer food services
          tailored to client needs, from casual to luxurious.
        </p>
        <p>
          Additionally, as part of our{' '}
          <span className="text-darkNavy font-bold">
            CSR (Corporate Social Responsibility)
          </span>{' '}
          activities, we are committed to fair trade and food waste reduction,
          working daily to contribute to building a better society through food
          services.
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
          {language === 'ja'
            ? 'コーポレートサービス支援'
            : 'Corporate Service Support'}{' '}
          <br className="md:hidden block" />×
          <br className="md:hidden block" />{' '}
          {language === 'ja' ? 'フードサービス' : 'Food Service'}
        </p>
        <div className="flex gap-x-4 gap-y-6 flex-col lg:flex-row">
          {businessAreas.map((businessArea) => (
            <div
              key={businessArea.titleJa}
              className="lg:w-1/2 shadow-md rounded-sm overflow-hidden bg-white"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={businessArea.image}
                  alt={businessArea.titleJa}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-6 lg:py-8 flex flex-col gap-y-6 lg:gap-y-8">
                <p className="text-center text-2xl lg:text-3xl font-bold text-darkNavy">
                  {language === 'ja'
                    ? businessArea.titleJa
                    : businessArea.titleEn}
                </p>
                <div className="leading-6 text-sm lg:leading-7 lg:text-base">
                  {language === 'ja'
                    ? businessArea.descriptionJa
                    : businessArea.descriptionEn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
