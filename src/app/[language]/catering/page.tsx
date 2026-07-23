import { BreadCrumbs } from '@/components/bread-crumbs'
import { Button } from '@/components/button'
import { JsonLd } from '@/components/json-ld'
import { MaskReveal } from '@/components/mask-reveal'
import { Reveal } from '@/components/reveal'
import { buildMetadata } from '@/lib/metadata'
import { faqPageJsonLd, serviceJsonLd } from '@/lib/structured-data'
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
      path: 'catering',
      title: '法人ケータリング｜VIPイベント・会食・オフィス対応 | 株式会社MUSICO',
      description:
        'VIPイベント・社内パーティー・ビジネスランチまで。グレードに応じた食体験を設計・運営するMUSICOのケータリングサービス。外資金融・大手企業での豊富な実績。',
    })
  }
  return buildMetadata({
    language,
    path: 'catering',
    title: 'Corporate Catering for Events & Offices | MUSICO Inc.',
    description:
      'From VIP events to business lunches — MUSICO designs and delivers food experiences calibrated to your occasion and standard. Proven track record with global financial institutions.',
  })
}

const painPoints = [
  {
    ja: 'イベントの格に合った食事の質を安定して提供できない',
    en: "Can't consistently deliver food quality that matches the event's prestige",
  },
  {
    ja: '参加人数・料理の量・タイミングのコントロールが難しい',
    en: 'Difficult to manage headcount, volume, and timing reliably',
  },
  {
    ja: 'VIPゲストへの対応で食事アレルギー・宗教上の制限に不安がある',
    en: 'Uncertain about handling dietary restrictions and religious requirements for VIP guests',
  },
  {
    ja: '社内に担当者がおらず、毎回外部に頼んでいるが品質がバラつく',
    en: 'No in-house coordinator — outsourcing each time with inconsistent results',
  },
  {
    ja: 'コストと体験のバランスが取れず、予算オーバーしやすい',
    en: 'Hard to balance cost and experience — budgets tend to overrun',
  },
  {
    ja: 'グローバルゲストへの接遇が、日本人スタッフだけでは限界がある',
    en: 'Japanese-only staff struggle to deliver the right hospitality for global guests',
  },
]

const valueSteps = [
  {
    step: '01',
    titleJa: '要件ヒアリング・企画',
    titleEn: 'Requirements & Planning',
    descJa:
      'イベントの目的・ゲスト属性・会場・予算を把握し、最適なケータリング企画を提案。食事制限・アレルギー・宗教対応も初期段階で整理します。',
    descEn:
      'Understanding event purpose, guest profile, venue, and budget to propose the optimal catering plan. Dietary, allergy, and religious accommodations addressed from the start.',
  },
  {
    step: '02',
    titleJa: 'メニュー開発・リハーサル',
    titleEn: 'Menu Development & Rehearsal',
    descJa:
      'コンセプトに沿ったメニューを開発し、味・見た目・提供タイミングをリハーサルで確認。当日に向けて品質を固めます。',
    descEn:
      'Developing menus aligned with the concept, then confirming taste, presentation, and service timing through rehearsal — locking in quality before the day.',
  },
  {
    step: '03',
    titleJa: '当日運営・フォローアップ',
    titleEn: 'Day-Of Operations & Follow-Up',
    descJa:
      '現場に精通したスタッフが当日の運営を統括。終了後はフィードバックを反映し、次回に向けて品質を向上させます。',
    descEn:
      'Experienced staff oversee all day-of operations. Post-event feedback is incorporated to raise quality for the next occasion.',
  },
]

const strengths = [
  {
    titleJa: '外資金融・大手企業での実績',
    titleEn: 'Proven Track Record with Global Firms',
    descJa:
      '米国系投資銀行・金融機関での社内ケータリング運営経験を持つチームが対応。グローバルグレードの接遇基準を熟知しています。',
    descEn:
      'Our team has hands-on experience running in-house catering at US investment banks and financial institutions — fluent in global hospitality standards.',
  },
  {
    titleJa: '食・空間・演出を一体で設計',
    titleEn: 'Food, Space & Atmosphere as One',
    descJa:
      '食事だけでなく、テーブルセッティング・フローアレンジメント・サービス動線まで含めて体験全体を設計します。',
    descEn:
      'We design the full experience — not just the food, but table setting, flow arrangement, and service choreography.',
  },
  {
    titleJa: '多様な食事ニーズへの対応',
    titleEn: 'Accommodating Diverse Dietary Needs',
    descJa:
      'ハラル・ベジタリアン・ヴィーガン・主要アレルゲン対応まで、グローバルゲストの多様なニーズに対応した献立を提供します。',
    descEn:
      'Menus that accommodate halal, vegetarian, vegan, and major allergen requirements — ready for a global guest list.',
  },
]

const trustSectors = [
  { ja: '米系投資銀行', en: 'US Investment Bank' },
  { ja: '外資系企業', en: 'Global Firms' },
  { ja: 'VIP・役員イベント', en: 'VIP & Board Events' },
  { ja: '大手エンタープライズ', en: 'Major Enterprise' },
]

const trustStats = [
  {
    valueJa: 'グローバル基準',
    valueEn: 'Global-Standard',
    labelJa: '外資金融グレードの接遇',
    labelEn: 'finance-grade hospitality',
  },
  {
    valueJa: '食・空間・演出',
    valueEn: 'Food · Space · Flow',
    labelJa: '体験を一体で設計',
    labelEn: 'designed as one experience',
  },
  {
    valueJa: '多様な食対応',
    valueEn: 'Dietary-Ready',
    labelJa: 'ハラル/ヴィーガン/アレルゲン',
    labelEn: 'halal / vegan / allergens',
  },
]

const relatedCases = [
  {
    slug: 'us-ibank-executive-dining',
    titleJa: '米国系投資銀行 オフィスホスピタリティ運営',
    titleEn: 'US Investment Bank — Office Hospitality',
    categoryJa: 'エグゼクティブダイニング',
    categoryEn: 'Executive Dining',
  },
  {
    slug: 'enterprise-office-relocation-fb',
    titleJa: 'エンタープライズ オフィス移転 F&B PM',
    titleEn: 'Enterprise Office Relocation — F&B PM',
    categoryJa: 'コーポレートF&B',
    categoryEn: 'Corporate F&B',
  },
  {
    slug: 'sports-cx-basketball',
    titleJa: 'ベルテックス静岡 CX構想プロジェクト',
    titleEn: 'VELTEX SHIZUOKA — CX Initiative',
    categoryJa: '観戦体験・イベントフード',
    categoryEn: 'Experience & Event Food',
  },
]

const faqs = [
  {
    qJa: '少人数のイベントでも依頼できますか？',
    qEn: 'Can you cater smaller events?',
    aJa: '役員会・少人数の会食から大規模パーティーまで対応します。規模に応じて最適な体制を設計します。',
    aEn: 'From board dinners and small gatherings to large parties — we design the right setup for the scale.',
  },
  {
    qJa: '会場が未定でも相談できますか？',
    qEn: 'Can we consult before the venue is decided?',
    aJa: '会場選定の段階からご相談いただけます。動線・設備・演出を踏まえた会場アドバイスも可能です。',
    aEn: 'Yes — we can advise from the venue-selection stage, factoring in flow, facilities, and atmosphere.',
  },
  {
    qJa: '食事制限（ハラル・ヴィーガン等）に対応できますか？',
    qEn: 'Can you handle dietary restrictions?',
    aJa: 'ハラル・ベジタリアン・ヴィーガン・主要アレルゲンに対応した献立を設計します。グローバルゲストも安心です。',
    aEn: 'We design menus for halal, vegetarian, vegan, and major allergens — ready for a global guest list.',
  },
  {
    qJa: '当日のサービススタッフも手配できますか？',
    qEn: 'Can you provide day-of service staff?',
    aJa: '現場に精通したサービススタッフの手配・統括まで一括で対応します。',
    aEn: 'Yes — we arrange and oversee experienced service staff end-to-end.',
  },
]

export default async function CateringPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <JsonLd
        data={serviceJsonLd(language, {
          nameJa: 'ケータリングサービス',
          nameEn: 'Catering Service',
          path: 'catering',
          descriptionJa:
            'VIPイベント・社内パーティー・ビジネスランチまで。グレードに応じた食体験を設計・運営するMUSICOのケータリングサービス。外資金融・大手企業での豊富な実績。',
          descriptionEn:
            'From VIP events to business lunches — MUSICO designs and delivers food experiences calibrated to your occasion and standard. Proven track record with global financial institutions.',
        })}
      />
      <JsonLd data={faqPageJsonLd(language, faqs)} />
      <div className="bg-ivory">
        <div className="relative bg-darkNavy text-white overflow-hidden">
          <Image
            src="/catering-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darkNavy via-darkNavy/85 to-darkNavy/40" />
          <div className="relative max-w-[calc(100vw-32px)] mx-auto py-20 md:py-28">
            <Reveal className="flex flex-col gap-y-4 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
              <p className="text-sm font-roboto tracking-widest text-brass uppercase font-semibold">
                Catering & Events
              </p>
              <h1 className="text-3xl md:text-5xl font-display leading-tight">
                {language === 'ja'
                  ? 'ケータリング\n・イベント'
                  : 'Catering\n& Events'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-200 max-w-[620px]">
                {language === 'ja'
                  ? 'VIPイベント・役員会・社内パーティー・ポップアップまで。目的とグレードに応じた食体験を設計・実装します。'
                  : 'From VIP events and board dinners to internal parties and pop-ups — designing and executing food experiences calibrated to purpose and standard.'}
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
                  ? '外資金融グレードの接遇基準を、あらゆるイベントに。'
                  : 'Finance-grade hospitality standards, brought to every event.'}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-b border-hairline bg-paper">
          <div className="max-w-[800px] lg:max-w-[1000px] w-full mx-auto px-4 py-8 md:py-10 flex flex-col gap-y-6">
            <p className="text-center text-sm font-roboto tracking-[0.2em] uppercase text-brass">
              {language === 'ja' ? '支援実績のある領域' : 'Where We Serve'}
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
                    {language === 'ja' ? 'よくあるご質問' : 'Frequently Asked Questions'}
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
                ? 'イベントの規模・ゲスト層・予算をお聞きし、最適なプランをご提案します。提案・売り込みは一切なし。'
                : "Tell us about your event's scale, guests, and budget — we'll propose the right plan. No pitch, no sales."}
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
            labelJa: 'ケータリング・イベント',
            labelEn: 'Catering & Events',
            href: '/catering',
          },
        ]}
      />
    </>
  )
}
