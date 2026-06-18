import Image from 'next/image'

type Props = {
  language: 'en' | 'ja'
}

const businessAreas = [
  {
    titleJa: 'コーポレートフードサービス',
    titleEn: 'Corporate Food Service',
    image: '/restaurant.jpg',
  },
  {
    titleJa: 'ケータリングサービス',
    titleEn: 'Catering Service',
    image: '/buffet-2.jpg',
  },
  {
    titleJa: '地方創生支援',
    titleEn: 'Regional Revitalization Support',
    image: '/agriculture.jpg',
  },
  {
    titleJa: 'AI導入支援',
    titleEn: 'AI Implementation Support',
    image: '/technology.png',
  },
  {
    titleJa: '人材支援',
    titleEn: 'Talent Support',
    image: '/collaborate.jpg',
  },
]

export const SectionBusinessArea = ({ language }: Props) => {
  return (
    <div className="bg-ivory py-10 lg:py-20">
      <div className="w-[800px] lg:w-[1200px] mx-auto max-w-[calc(100vw-32px)] flex flex-col gap-y-8 lg:gap-y-12">
        <p className="text-2xl md:text-4xl font-bold text-center text-darkNavy">
          {language === 'ja' ? '事業概要' : 'Business Overview'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {businessAreas.map((businessArea) => (
            <div
              key={businessArea.titleJa}
              className="shadow-md rounded-sm overflow-hidden bg-paper"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={businessArea.image}
                  alt={
                    language === 'ja'
                      ? businessArea.titleJa
                      : businessArea.titleEn
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-5">
                <p className="text-center text-lg font-bold text-darkNavy leading-snug">
                  {language === 'ja'
                    ? businessArea.titleJa
                    : businessArea.titleEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
