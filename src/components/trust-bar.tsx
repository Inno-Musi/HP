type Sector = {
  ja: string
  en: string
}

type Stat = {
  valueJa: string
  valueEn: string
  labelJa: string
  labelEn: string
}

type Props = {
  language: 'en' | 'ja'
  /** Section heading (small brass label above the chips). */
  labelJa: string
  labelEn: string
  /** Anonymized sectors / domains served, rendered as chips. */
  sectors: readonly Sector[]
  /** Optional fact-based stats. Omit to render the chip row only. */
  stats?: readonly Stat[]
}

/**
 * Social-proof "trust bar": a row of sector chips plus optional fact-based
 * stats. Extracted verbatim from the corporate-food page so the same
 * approved presentation can be reused across the top page and service LPs.
 */
export const TrustBar = ({
  language,
  labelJa,
  labelEn,
  sectors,
  stats,
}: Props) => {
  return (
    <div className="border-b border-hairline bg-paper">
      <div className="max-w-[800px] lg:max-w-[1000px] w-full mx-auto px-4 py-8 md:py-10 flex flex-col gap-y-6">
        <p className="text-center text-sm font-roboto tracking-[0.2em] uppercase text-brass">
          {language === 'ja' ? labelJa : labelEn}
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {sectors.map((s) => (
            <span
              key={s.ja}
              className="px-4 py-2 rounded-full border border-hairline bg-ivory text-xs md:text-sm font-semibold text-darkNavy"
            >
              {language === 'ja' ? s.ja : s.en}
            </span>
          ))}
        </div>
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {stats.map((st) => (
              <div
                key={st.labelJa}
                className="flex flex-col items-center text-center gap-y-1"
              >
                <p className="text-xl md:text-2xl font-bold text-darkNavy">
                  {language === 'ja' ? st.valueJa : st.valueEn}
                </p>
                <p className="text-xs md:text-sm text-muted leading-relaxed">
                  {language === 'ja' ? st.labelJa : st.labelEn}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Company-level social proof, reused verbatim from the corporate-food page.
// Do not add new sectors/numbers/client names here without a factual basis.
export const companyTrustSectors: readonly Sector[] = [
  { ja: '米系投資銀行', en: 'US Investment Bank' },
  { ja: '米系金融機関', en: 'US Financial Institution' },
  { ja: '大手エンタープライズ', en: 'Major Enterprise' },
  { ja: 'グローバルIT', en: 'Global Tech' },
]

export const companyTrustStats: readonly Stat[] = [
  {
    valueJa: '1,000名以上',
    valueEn: '1,000+',
    labelJa: '規模のオフィスF&Bを運営',
    labelEn: 'person office F&B operated',
  },
  {
    valueJa: '企画→運営',
    valueEn: 'Plan → Run',
    labelJa: '一気通貫で支援',
    labelEn: 'end-to-end support',
  },
  {
    valueJa: '多言語・多文化',
    valueEn: 'Multilingual',
    labelJa: 'グローバル基準の接遇',
    labelEn: 'global-standard service',
  },
]
