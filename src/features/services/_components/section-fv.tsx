import Image from 'next/image'

type Props = {
  language: 'en' | 'ja'
}

export const SectionFv = ({ language }: Props) => {
  return (
    <div className="relative aspect-[1000/1000] md:aspect-[1000/480]">
      <div className="fixed w-full -z-10 top-16 left-0 aspect-[1000/1000] md:aspect-[1000/480]">
        <Image
          src="/consulting-buffet.png"
          width={1848}
          height={1010}
          alt="about us"
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute bottom-0 right-0 w-full h-full bg-black opacity-50" />
      </div>
      <div className="absolute z-10 bg-paper w-[40%] md:w-1/3 max-w-[500px] aspect-[480/298] shadow-md flex justify-center items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        {language === 'ja' ? (
          <div className="flex flex-col items-center gap-y-1 md:gap-y-3">
            <h1 className="font-bold text-2xl md:text-4xl text-darkNavy">
              事業内容
            </h1>
            <p className="flex gap-x-2 md:flex-row flex-col gap-y-0.5 items-center leading-none font-semibold text-sm md:text-lg text-darkNavy">
              <span>OUR</span>
              <span>SERVICES</span>
            </p>
          </div>
        ) : (
          <h1 className="text-xl md:text-4xl lg:text-5xl font-roboto font-semibold flex flex-col items-center gap-y-1 md:gap-y-4 text-darkNavy">
            <span>OUR</span>
            <span>SERVICES</span>
          </h1>
        )}
      </div>
    </div>
  )
}
