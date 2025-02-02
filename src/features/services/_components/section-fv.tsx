import Image from 'next/image'

type Props = {
  language: 'en' | 'ja'
}

export const SectionFv = ({ language }: Props) => {
  return (
    <div className="relative aspect-[1848/1010]">
      <Image
        src="/consulting-buffet.png"
        alt="consulting-buffet"
        width={1848}
        height={1010}
        className="absolute"
        priority
      />
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white text-center px-8 sm:px-16 lg:px-24 py-4 sm:py-8 lg:py-12 flex flex-col gap-y-1 sm:gap-y-2 lg:gap-y-4 rounded-sm shadow-md">
          <p className="text-darkNavy text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
            事業内容
          </p>
          <p className="text-darkNavy text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold">
            OUR SERVICES
          </p>
        </div>
      </div>
    </div>
  )
}
