type Props = {
  language: 'en' | 'ja'
}

const businessAreas = [
  {
    title: 'コンサルティング',
    description: (
      <>
        <ol>
          <li>的確な経営課題の抽出</li>
          <li>柔軟な戦略立案</li>
          <li>力強い実行支援</li>
        </ol>
        <p>の3本の柱を基礎としたコンサルティングを提供します。</p>
        <p>
          特に、IT領域ではAIを積極的に活用したアプローチを強みとしています。
        </p>
        <p>
          経営に関するご相談以外にも、クライアントのコーポレートサービスへの支援等も承っており、
          我々MUSICOはビジネスパートナーとしてお客様の経営資源を最大限活用し、成長を加速させる起爆剤
          となることを目指しています。
        </p>
      </>
    ),
  },
  {
    title: 'フードサービス',
    description: (
      <>
        <p>我々MUSICOはこれまで</p>
        <ul>
          <li>社内カフェの開業支援</li>
          <li>社内レストランの運営</li>
          <li>ケータリングの運営</li>
        </ul>
        <p>
          などのフードサービス領域において、大手外資金融機関をはじめとした企業様にサービスを数多く展開してきた圧倒的実績があります。
        </p>
        <p>
          我々の豊富な実績とノウハウを基に、カジュアルなものからラグジュアリーなものまでお客様のニーズに合わせたフードサービスを提供いたします。
        </p>
        <p>
          また、CSR(Corporate Social
          Responsibility)活動としてフェアトレードやフードロス削減などに取り組んでおり、フードサービスを通じてより良い社会を創ることへの貢献に日々取り組んでいます。
        </p>
      </>
    ),
  },
  {
    title: '海外事業',
    description: (
      <>
        <p>
          コンサルティング領域で培ってきた戦略立案・実行力に我々が強みとする「食」の領域を掛け合わせ、海外への事業展開も行っております。
        </p>
        <p>
          国境を越え海外への支援を行い、得た知見をまたコンサルティングやフードサービスを通して顧客に還元することで、グローバルな視点を持った高品質なサービスの提供を実現しています。
        </p>
      </>
    ),
  },
]

export const SectionBusinessArea = ({ language }: Props) => {
  return (
    <div>
      <p>コンサルティング ✖︎ フードサービス</p>
      <div>
        {businessAreas.map((businessArea) => (
          <div key={businessArea.title}>
            <p>{businessArea.title}</p>
            <div>{businessArea.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
