import Image from 'next/image'

type Props = {
  language: 'en' | 'ja'
}

export const SectionFlexible = ({ language }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-x-10 gap-y-6">
      <Image
        src="/consulting.jpg"
        alt="consulting"
        width={1920}
        height={1280}
        className="lg:w-[51%]"
      />
      <div className="lg:w-1/2 flex flex-col gap-y-4">
        <p className="text-2xl font-bold">しなやかに、変化を制する</p>
        <div className="leading-7">
          <p>
            従来のコンサルティングがフレームワークに基づく経営戦略を中心としてきた中、我々MUSICOは顧客のビジョンとニーズに寄り添い、オーダーメイドの戦略を設計します。
          </p>
          <p>
            柔軟な発想で変化を制し、共に未来を切り拓く伴走者として、皆さまの成長を力強く支援します。
          </p>
        </div>
      </div>
    </div>
  )
}
