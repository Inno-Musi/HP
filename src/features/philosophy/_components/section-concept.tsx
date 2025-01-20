type Props = {
  language: 'en' | 'ja'
}

export const SectionConcept = ({ language }: Props) => {
  return (
    <div className="text-center">
      <p>オーダーメイドのコンサルティング</p>
      <div>
        <p>人とモノを繋ぎ、人と人を繋ぐ種</p>
        <p>その種はやがて調和の芽を出し、</p>
        <p>人の心を動かす幸せの花を咲かせる。</p>
      </div>
      <div>
        <p>我々MUSICOは、コンサルティング・業務支援を通じて</p>
        <p>あなたのための「種」を届けたい。</p>
        <p>さぁ、私たちと一緒に、大きな大きな花を咲かせましょう。</p>
      </div>
    </div>
  )
}
