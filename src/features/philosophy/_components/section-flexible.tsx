type Props = {
  language: 'en' | 'ja'
}

export const SectionFlexible = ({ language }: Props) => {
  return (
    <div>
      <p>しなやかに、変化を制する</p>
      <p>
        従来のコンサルティングがフレームワークに基づく経営戦略を中心としてきた中、我々MUSICOは顧客のビジョンとニーズに寄り添い、オーダーメイドの戦略を設計します。
      </p>
      <p>
        柔軟な発想で変化を制し、共に未来を切り拓く伴走者として、皆さまの成長を力強く支援します。
      </p>
    </div>
  )
}
