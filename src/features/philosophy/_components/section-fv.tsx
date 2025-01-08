import Image from 'next/image'
import imageAboutPC from '../_assets/images/about_pc.png'
import imageAboutSP from '../_assets/images/about_sp.png'

type Props = {
  language: 'en' | 'ja'
}

export const SectionFv = ({ language }: Props) => {
  return (
    <div className="relative aspect-[1000/600] md:aspect-[1000/480]">
      <div className="absolute z-10 bg-white w-[40%] md:w-1/3 aspect-[480/298] shadow-md flex justify-center items-center">
        {language === 'ja' ? (
          <div className="flex flex-col items-center gap-y-2 md:gap-y-3">
            <h1 className="font-bold text-2xl md:text-4xl text-emerald">
              経営理念
            </h1>
            <p className="flex gap-x-2 md:flex-row flex-col leading-none font-semibold text-sm md:text-lg">
              <span>
                <span className="text-moss">C</span>ORPORATE
              </span>
              <span>
                <span className="text-moss">P</span>HILOSOPHY
              </span>
            </p>
          </div>
        ) : (
          <h1 className="text-xl md:text-4xl lg:text-5xl font-roboto font-semibold flex flex-col items-center gap-y-1 md:gap-y-4">
            <p>
              <span className="text-moss">C</span>ORPORATE
            </p>
            <p>
              <span className="text-moss">P</span>HILOSOPHY
            </p>
          </h1>
        )}
      </div>
      <Image
        src={imageAboutPC}
        width={2874}
        height={1316}
        alt="about us"
        className="w-[91%] absolute bottom-0 right-0 hidden md:block"
      />
      <Image
        src={imageAboutSP}
        width={980}
        height={589}
        alt="about us"
        className="w-[91%] absolute bottom-0 right-0 block md:hidden"
      />
      {language === 'ja' ? (
        <div className="absolute text-emerald top-[20%] right-[6%] z-10 font-semibold text-base sm:text-xl md:text-4xl flex flex-col gap-y-2 items-end font-serif leading-none">
          <p className="flex sm:flex-row flex-col gap-y-2 items-end">
            <span>調和の</span>
            <span>メロディーを奏でる</span>
          </p>
          <p>幸せの種を届ける</p>
        </div>
      ) : (
        <div className="absolute text-emerald top-[18%] md:top-[20%] right-[3%] lg:right-[6%] z-10 flex flex-col gap-y-1 font-bold text-base sm:text-lg lg:text-3xl items-end leading-none">
          <p className="flex flex-col gap-y-1 items-end sm:flex-row">
            <span>Delivering </span>
            <span>the seeds of happiness</span>
          </p>
          <p className="flex flex-col gap-y-1 items-end sm:flex-row">
            <span>Orchestrating </span>
            <span>melodies of harmony</span>
          </p>
        </div>
      )}
    </div>
  )
}
