type Props = {
  language: 'en' | 'ja'
}

export const SectionConcept = ({ language }: Props) => {
  return (
    <div className="text-start sm:text-center flex flex-col gap-y-2 sm:gap-y-4">
      <p className="text-2xl sm:text-3xl font-extrabold">
        オーダーメイドのコンサルティング
      </p>
      <div className="flex flex-col gap-y-1 sm:gap-y-2 text-base sm:text-lg">
        <div className="leading-7 sm:leading-8">
          <p>人とモノを繋ぎ、人と人を繋ぐ種</p>
          <p>その種はやがて調和の芽を出し、</p>
          <p>人の心を動かす幸せの花を咲かせる。</p>
        </div>
        <div className="leading-7 sm:leading-8">
          <p>我々MUSICOは、コンサルティング・業務支援を通じて</p>
          <p>あなたのための「種」を届けたい。</p>
          <p className="">
            さぁ、私たちと一緒に、大きな大きな花を咲かせましょう。
          </p>
        </div>
      </div>
    </div>
  )
}
