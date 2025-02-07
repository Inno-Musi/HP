import Image from 'next/image'
import imageAbout from '../_assets/images/bg-fv-about.jpeg'

type Props = {
  language: 'en' | 'ja'
}

export const SectionFv = ({ language }: Props) => {
  return (
    <div className="relative aspect-[1000/1000] md:aspect-[1000/480]">
      <Image
        src={imageAbout}
        width={7952}
        height={5304}
        alt="about us"
        className="absolute h-full w-full object-cover bottom-0 right-0"
        priority
      />
      <div className="absolute bottom-0 right-0 w-full h-full bg-black opacity-50" />
      <div className="absolute z-10 bg-white w-[40%] md:w-1/3 aspect-[480/298] shadow-md flex justify-center items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        {language === 'ja' ? (
          <div className="flex flex-col items-center gap-y-2 md:gap-y-3">
            <h1 className="font-bold text-2xl md:text-4xl text-darkNavy">
              経営理念
            </h1>
            <p className="flex gap-x-2 md:flex-row flex-col leading-none font-semibold text-sm md:text-lg text-darkNavy">
              <span>CORPORATE</span>
              <span>PHILOSOPHY</span>
            </p>
          </div>
        ) : (
          <h1 className="text-xl md:text-4xl lg:text-5xl font-roboto font-semibold flex flex-col items-center gap-y-1 md:gap-y-4 text-darkNavy">
            <p>CORPORATE</p>
            <p>PHILOSOPHY</p>
          </h1>
        )}
      </div>
    </div>
  )
}
