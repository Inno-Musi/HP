import { BreadCrumbs } from '@/components/bread-crumbs'
import { Button } from '@/components/button'
import { MaskReveal } from '@/components/mask-reveal'
import { Reveal } from '@/components/reveal'
import { buildMetadata } from '@/lib/metadata'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params
  if (language === 'ja') {
    return buildMetadata({
      language,
      path: 'corporate-food',
      title: 'コーポレートフードサービス | 株式会社MUSICO',
      description:
        '外資・大手企業のオフィスカフェ・社員食堂を企画から運営まで一貫支援。品質・コスト・従業員エンゲージメントを同時に実現するMUSICOのコーポレートフードサービス。',
    })
  }
  return buildMetadata({
    language,
    path: 'corporate-food',
    title: 'Corporate Food Service | MUSICO Inc.',
    description:
      'End-to-end support for office cafés and employee dining at global corporations — balancing quality, cost, and employee engagement.',
  })
}

const painPoints = [
  {
    ja: '食堂・カフェの品質がスタッフによってバラつく',
    en: 'Food quality varies too much depending on the staff',
  },
  {
    ja: '運営コストが高く、収益改善の見通しが立たない',
    en: 'Operating costs are high with no clear path to improvement',
  },
  {
    ja: '従業員の利用率が低く、設備が活かせていない',
    en: "Utilization is low — the facility isn't earning its keep",
  },
  {
    ja: '外部委託したが、現場管理が社内に残り負担になっている',
    en: 'Outsourced operations, but internal management burden remains',
  },
  {
    ja: 'インバウンド社員の食事ニーズ（ハラル・ベジタリアン等）に対応できていない',
    en: "Can't accommodate dietary needs of international staff (halal, vegetarian, etc.)",
  },
  {
    ja: 'コンセプトと実際の運営がズレていて、ブランドイメージと合わない',
    en: 'Operations have drifted from the original concept — no longer aligned with brand image',
  },
]

const valueSteps = [
  {
    step: '01',
    titleJa: 'コンセプト設計',
    titleEn: 'Concept Design',
    descJa:
      '企業文化・従業員構成・予算を踏まえ、「何のための食堂か」を明確化。利用率・エンゲージメント・コストの目標KPIを設定します。',
    descEn:
      'Clarifying the purpose of the dining space based on company culture, workforce, and budget. Setting KPI targets for utilization, engagement, and cost.',
  },
  {
    step: '02',
    titleJa: 'オペレーション構築',
    titleEn: 'Operations Build-Out',
    descJa:
      'メニュー開発・スタッフ採用・育成・マニュアル整備まで一括対応。IT活用によるコスト最適化と品質の標準化を同時に実現します。',
    descEn:
      'All-in-one: menu development, hiring, training, and manual creation. Simultaneously achieving cost optimization through IT and quality standardization.',
  },
  {
    step: '03',
    titleJa: 'KPIモニタリング・改善',
    titleEn: 'KPI Monitoring & Improvement',
    descJa:
      '利用データ・満足度調査・コストレポートを定期的に分析。PDCAサイクルを回し、常に最適な状態を維持します。',
    descEn:
      'Regular analysis of usage data, satisfaction surveys, and cost reports. Running PDCA cycles to maintain optimal operations at all times.',
  },
]

const strengths = [
  {
    titleJa: 'OLC出身の現場知見',
    titleEn: 'On-Site Expertise from OLC',
    descJa:
      'テーマパークのF&B事業で培った現場オペレーションの知見を活かし、グレードの高い食体験をオフィス環境に実装します。',
    descEn:
      'We bring F&B operational expertise built at a theme park to deliver premium dining experiences in the office environment.',
  },
  {
    titleJa: 'データドリブンな品質管理',
    titleEn: 'Data-Driven Quality Management',
    descJa:
      '利用ログ・満足度・原価率をリアルタイムで把握。感覚ではなくデータで改善の優先度を決定します。',
    descEn:
      'Real-time tracking of usage, satisfaction, and cost ratios. Improvement priorities determined by data, not intuition.',
  },
  {
    titleJa: 'グローバル対応の食体験設計',
    titleEn: 'Global-Ready Dining Design',
    descJa:
      'ハラル・ベジタリアン・アレルギー対応など、多様な食事ニーズに対応した献立設計と衛生管理体制を構築します。',
    descEn:
      'Menu planning and hygiene management systems built to accommodate diverse dietary needs — halal, vegetarian, allergen-conscious and more.',
  },
]

// Anonymized sectors served (real track record, no client names).
const trustSectors = [
  { ja: '米系投資銀行', en: 'US Investment Bank' },
  { ja: '米系金融機関', en: 'US Financial Institution' },
  { ja: '大手エンタープライズ', en: 'Major Enterprise' },
  { ja: 'グローバルIT', en: 'Global Tech' },
]

// Honest, fact-based numbers.
const trustStats = [
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

// Related case studies (links into /works).
const relatedCases = [
  {
    slug: 'us-ibank-executive-dining',
    titleJa: '米国系投資銀行 オフィスホスピタリティ運営',
    titleEn: 'US Investment Bank — Office Hospitality',
    categoryJa: 'エグゼクティブダイニング',
    categoryEn: 'Executive Dining',
  },
  {
    slug: 'us-bank-office-cafe',
    titleJa: '米国系金融機関 オフィスカフェ運営',
    titleEn: 'US Financial Institution — Office Café',
    categoryJa: 'オフィスカフェ',
    categoryEn: 'Office Café',
  },
  {
    slug: 'enterprise-office-relocation-fb',
    titleJa: 'エンタープライズ オフィス移転 F&B PM',
    titleEn: 'Enterprise Office Relocation — F&B PM',
    categoryJa: 'コーポレートF&B',
    categoryEn: 'Corporate F&B',
  },
]

const faqs = [
  {
    qJa: '小規模なオフィスでも依頼できますか？',
    qEn: 'Can we engage you for a smaller office?',
    aJa: '可能です。規模に応じて運営体制とコストを設計します。まずは現状の課題をお聞かせください。',
    aEn: 'Yes. We design the operating model and cost to your scale. Start by telling us your current challenges.',
  },
  {
    qJa: '既存の運営からの切り替えはできますか？',
    qEn: 'Can you take over an existing operation?',
    aJa: '現運営の引き継ぎ実績があります。移行リスクを抑えた段階的な切り替えを設計します。',
    aEn: 'We have experience taking over existing operations, designing a phased transition that minimizes risk.',
  },
  {
    qJa: 'ハラル・ヴィーガン等の食対応は可能ですか？',
    qEn: 'Can you accommodate halal, vegan, and other dietary needs?',
    aJa: 'ハラル・ベジタリアン・ヴィーガン・主要アレルゲン対応まで、グローバルゲスト向けの献立・衛生体制を構築します。',
    aEn: 'Yes — halal, vegetarian, vegan, and major allergens, with menus and hygiene systems built for a global guest list.',
  },
  {
    qJa: '相談だけでも費用はかかりますか？',
    qEn: 'Is the initial consultation free?',
    aJa: '初回のご相談は無料です。提案・売り込みは一切ありません。まずは率直にお話ししましょう。',
    aEn: 'The first consultation is free, with no pitch and no sales. Just a candid conversation.',
  },
]

export default async function CorporateFoodPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-ivory">
        <div className="relative bg-darkNavy text-white overflow-hidden">
          <Image
            src="/service-corporate-food.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darkNavy via-darkNavy/85 to-darkNavy/40" />
          <div className="relative max-w-[calc(100vw-32px)] mx-auto py-20 md:py-28">
            <Reveal className="flex flex-col gap-y-4 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
              <div className="flex items-center gap-x-3">
                <span className="inline-block px-2 py-1 bg-paper text-darkNavy text-[10px] font-roboto font-semibold tracking-widest rounded">
                  FOCUS
                </span>
                <p className="text-sm md:text-sm font-roboto tracking-widest text-brass uppercase font-semibold">
                  Food / Hospitality
                </p>
              </div>
              <h1 className="text-3xl md:text-5xl font-display leading-tight">
                {language === 'ja'
                  ? 'コーポレート\nフードサービス'
                  : 'Corporate\nFood Service'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-200 max-w-[620px]">
                {language === 'ja'
                  ? '外資・大手企業のオフィスカフェ・社員食堂・エグゼクティブダイニングを、企画から運営まで一気通貫で再設計。品質・コスト・従業員エンゲージメントを同時に高めます。'
                  : 'End-to-end redesign of office cafés, employee dining, and executive dining for global enterprises — raising quality, cost-efficiency, and employee engagement at once.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href={`/${language}/contact`}>
                  <Button
                    type="button"
                    text={
                      language === 'ja' ? 'まずは無料相談' : 'Book a Free Consultation'
                    }
                    className="rounded-full bg-paper text-darkNavy px-8 py-3 hover:opacity-80 duration-300 font-roboto text-sm font-semibold w-fit"
                  />
                </Link>
                <Link href={`/${language}/works`}>
                  <Button
                    type="button"
                    text={language === 'ja' ? '導入事例を見る →' : 'View Case Studies →'}
                    className="rounded-full border border-white text-white px-8 py-3 hover:bg-paper hover:text-darkNavy duration-300 font-roboto text-sm font-semibold w-fit"
                  />
                </Link>
              </div>
              <p className="text-xs md:text-sm text-zinc-300 pt-2">
                {language === 'ja'
                  ? 'グローバル金融機関から大手エンタープライズまで、ハイエンドな現場で実証。'
                  : 'Proven on high-end floors, from global financial institutions to major enterprises.'}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-b border-hairline bg-paper">
          <div className="max-w-[800px] lg:max-w-[1000px] w-full mx-auto px-4 py-8 md:py-10 flex flex-col gap-y-6">
            <p className="text-center text-sm font-roboto tracking-[0.2em] uppercase text-brass">
              {language === 'ja' ? '支援実績のある業種' : 'Sectors We Serve'}
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {trustSectors.map((s) => (
                <span
                  key={s.ja}
                  className="px-4 py-2 rounded-full border border-hairline bg-ivory text-xs md:text-sm font-semibold text-darkNavy"
                >
                  {language === 'ja' ? s.ja : s.en}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {trustStats.map((st) => (
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
          </div>
        </div>

        <div className="max-w-[calc(100vw-32px)] mx-auto py-24 md:py-32 flex flex-col gap-y-20 lg:gap-y-28">
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Pain Points
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja'
                      ? 'こんな課題はありませんか？'
                      : 'Do any of these resonate?'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {painPoints.map((p) => (
                <div
                  key={p.ja}
                  className="flex items-start gap-x-3 bg-paper rounded-md px-6 py-5 border border-hairline"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-darkNavy text-white flex items-center justify-center text-xs font-bold"
                  >
                    ✓
                  </span>
                  <p className="text-base text-ink/80 leading-relaxed">
                    {language === 'ja' ? p.ja : p.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Our Approach
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja' ? '支援の進め方' : 'How We Work'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {valueSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex flex-col gap-y-3 bg-paper rounded-md px-6 py-8 border border-hairline"
                >
                  <span className="text-5xl font-display text-brass/40 leading-none">
                    {step.step}
                  </span>
                  <p className="text-darkNavy font-bold text-lg">
                    {language === 'ja' ? step.titleJa : step.titleEn}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {language === 'ja' ? step.descJa : step.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Why MUSICO
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja'
                      ? 'MUSICOが選ばれる理由'
                      : 'Why Organizations Choose MUSICO'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="flex flex-col gap-y-4">
              {strengths.map((s) => (
                <div
                  key={s.titleJa}
                  className="flex flex-col md:flex-row md:items-start gap-4 bg-paper rounded-md px-6 py-6 border border-hairline"
                >
                  <div className="md:w-[240px] shrink-0">
                    <p className="text-darkNavy font-bold text-base">
                      {language === 'ja' ? s.titleJa : s.titleEn}
                    </p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {language === 'ja' ? s.descJa : s.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related cases */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Case Studies
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja' ? '関連する実績' : 'Related Work'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedCases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${language}/works/${c.slug}`}
                  className="group bg-paper rounded-md overflow-hidden border border-hairline flex flex-col hover:border-brass transition-colors duration-300"
                >
                  <div className="relative aspect-[16/10] bg-zinc-100">
                    <Image
                      src={`/works/${c.slug}.jpg`}
                      alt={language === 'ja' ? c.titleJa : c.titleEn}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div className="px-5 py-4 flex flex-col gap-y-2 flex-1">
                    <p className="text-sm font-roboto tracking-widest uppercase text-brass">
                      {language === 'ja' ? c.categoryJa : c.categoryEn}
                    </p>
                    <p className="text-sm font-bold text-darkNavy leading-snug">
                      {language === 'ja' ? c.titleJa : c.titleEn}
                    </p>
                    <p className="text-xs font-roboto text-darkNavy mt-auto pt-1 group-hover:underline underline-offset-2">
                      {language === 'ja' ? '詳しく見る →' : 'Read more →'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                href={`/${language}/works`}
                className="text-sm font-roboto text-darkNavy font-semibold hover:underline underline-offset-2"
              >
                {language === 'ja' ? 'すべての実績を見る →' : 'View all work →'}
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  FAQ
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja'
                      ? 'よくあるご質問'
                      : 'Frequently Asked Questions'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="flex flex-col gap-y-3">
              {faqs.map((f) => (
                <details
                  key={f.qJa}
                  className="group bg-paper rounded-md px-6 py-5 border border-hairline"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-darkNavy text-sm md:text-base">
                    <span>{language === 'ja' ? f.qJa : f.qEn}</span>
                    <span className="ml-4 shrink-0 text-brass group-open:rotate-45 transition-transform duration-200 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {language === 'ja' ? f.aJa : f.aEn}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-darkNavy rounded-md px-8 md:px-12 py-12 text-white text-center items-center">
            <p className="text-2xl md:text-3xl font-display">
              {language === 'ja'
                ? 'まずは無料相談から'
                : 'Start with a Free Consultation'}
            </p>
            <p className="text-sm leading-relaxed opacity-80 max-w-[520px]">
              {language === 'ja'
                ? 'オフィスF&Bの課題をヒアリングし、最適な支援範囲をご提案します。提案・売り込みは一切なし。まずは率直に話しましょう。'
                : "We'll listen to your office F&B challenges and propose the right scope of support. No pitch, no sales — just a candid conversation."}
            </p>
            <Link href={`/${language}/contact`}>
              <Button
                type="button"
                text={
                  language === 'ja' ? 'お問い合わせはこちら →' : 'Contact Us →'
                }
                className="rounded-full bg-paper text-darkNavy px-10 py-3 hover:opacity-80 duration-300 font-roboto font-semibold text-sm w-fit"
              />
            </Link>
          </div>
        </div>
      </div>

      <BreadCrumbs
        language={language}
        crumbs={[
          { labelJa: '事業内容', labelEn: 'Services', href: '/services' },
          {
            labelJa: 'コーポレートフードサービス',
            labelEn: 'Corporate Food Service',
            href: '/corporate-food',
          },
        ]}
      />
    </>
  )
}
