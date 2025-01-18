type Props = {
  language: 'en' | 'ja'
  subtitleJa: string
  subtitleEn: string
}

export const SubtitlePolicy = ({ language, subtitleJa, subtitleEn }: Props) => {
  return (
    <h2 className="text-darkNavy bg-lightBlue font-bold py-3 px-4 text-base md:text-lg">
      {language === 'ja' ? subtitleJa : subtitleEn}
    </h2>
  )
}
