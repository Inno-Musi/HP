import { BreadCrumbs } from '@/components/bread-crumbs'
import { Button } from '@/components/button'
import Link from 'next/link'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params
  if (language === 'ja') {
    return {
      title: 'ケータリングサービス | 株式会社MUSICO',
      description:
        'VIPイベント・社内パーティー・ビジネスランチまで。グレードに応じた食体験を設計・運営するMUSICOのケータリングサービス。外資金融・大手企業での豊富な実績。',
    }
  }
  return {
    title: 'Catering Service | MUSICO Inc.',
    description:
      'From VIP events to business lunches — MUSICO designs and delivers food experiences calibrated to your occasion and standard. Proven track record with global financial institutions.',
  }
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

export default async function CateringPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-zinc-50">
        <div className="bg-darkNavy text-white">
          <div className="max-w-[calc(100vw-32px)] mx-auto py-20 md:py-28">
            <div className="flex flex-col gap-y-4 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase">
                Catering Service
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {language === 'ja'
                  ? 'ケータリング\nサービス'
                  : 'Catering\nService'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-300 max-w-[600px]">
                {language === 'ja'
                  ? 'VIPイベント・社内パーティー・ビジネスランチまで。グレードに応じた食体験を設計・運営します。'
                  : 'From VIP events and internal parties to business lunches — designing and delivering food experiences calibrated to the occasion.'}
              </p>
              <div className="pt-4">
                <Link href={`/${language}/contact`}>
                  <Button
                    type="button"
                    text={
                      language === 'ja'
                        ? 'まずは無料相談'
                        : 'Book a Free Consultation'
                    }
                    className="rounded-full bg-white text-darkNavy px-8 py-3 hover:opacity-80 duration-300 font-roboto text-sm font-semibold"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[calc(100vw-32px)] mx-auto py-16 md:py-20 flex flex-col gap-y-20 lg:gap-y-28">
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                Pain Points
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center">
                {language === 'ja'
                  ? 'こんな課題はありませんか？'
                  : 'Do any of these resonate?'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {painPoints.map((p) => (
                <div
                  key={p.ja}
                  className="flex items-start gap-x-3 bg-white rounded-md px-6 py-5 shadow-sm border border-zinc-100"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-darkNavy text-white flex items-center justify-center text-xs font-bold"
                  >
                    ✓
                  </span>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    {language === 'ja' ? p.ja : p.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                Our Approach
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center">
                {language === 'ja' ? '支援の進め方' : 'How We Work'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {valueSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex flex-col gap-y-3 bg-white rounded-md px-6 py-8 shadow-sm border border-zinc-100"
                >
                  <span className="text-5xl font-bold font-roboto text-zinc-100 leading-none">
                    {step.step}
                  </span>
                  <p className="text-darkNavy font-bold text-lg">
                    {language === 'ja' ? step.titleJa : step.titleEn}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === 'ja' ? step.descJa : step.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                Why MUSICO
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center">
                {language === 'ja'
                  ? 'MUSICOが選ばれる理由'
                  : 'Why Organizations Choose MUSICO'}
              </h2>
            </div>
            <div className="flex flex-col gap-y-4">
              {strengths.map((s) => (
                <div
                  key={s.titleJa}
                  className="flex flex-col md:flex-row md:items-start gap-4 bg-white rounded-md px-6 py-6 shadow-sm border border-zinc-100"
                >
                  <div className="md:w-[240px] shrink-0">
                    <p className="text-darkNavy font-bold text-base">
                      {language === 'ja' ? s.titleJa : s.titleEn}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === 'ja' ? s.descJa : s.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-darkNavy rounded-md px-8 md:px-12 py-12 text-white text-center items-center">
            <p className="text-2xl md:text-3xl font-bold">
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
                className="rounded-full bg-white text-darkNavy px-10 py-3 hover:opacity-80 duration-300 font-roboto font-semibold text-sm w-fit"
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
            labelJa: 'ケータリングサービス',
            labelEn: 'Catering Service',
            href: '/catering',
          },
        ]}
      />
    </>
  )
}
