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
      title: 'コーポレートフードサービス | 株式会社MUSICO',
      description:
        '外資・大手企業のオフィスカフェ・社員食堂を企画から運営まで一貫支援。品質・コスト・従業員エンゲージメントを同時に実現するMUSICOのコーポレートフードサービス。',
    }
  }
  return {
    title: 'Corporate Food Service | MUSICO Inc.',
    description:
      'End-to-end support for office cafés and employee dining at global corporations — balancing quality, cost, and employee engagement.',
  }
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

export default async function CorporateFoodPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-zinc-50">
        <div className="bg-darkNavy text-white">
          <div className="max-w-[calc(100vw-32px)] mx-auto py-20 md:py-28">
            <div className="flex flex-col gap-y-4 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase">
                Corporate Food Service
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {language === 'ja'
                  ? 'コーポレート\nフードサービス'
                  : 'Corporate\nFood Service'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-300 max-w-[600px]">
                {language === 'ja'
                  ? '外資・大手企業のオフィスカフェ・社員食堂を企画から運営まで一貫支援。品質・コスト・従業員エンゲージメントを同時に実現します。'
                  : 'End-to-end support for office cafés and employee dining at global and major corporations — balancing quality, cost, and employee engagement simultaneously.'}
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
                ? 'オフィスF&Bの課題をヒアリングし、最適な支援範囲をご提案します。提案・売り込みは一切なし。まずは率直に話しましょう。'
                : "We'll listen to your office F&B challenges and propose the right scope of support. No pitch, no sales — just a candid conversation."}
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
            labelJa: 'コーポレートフードサービス',
            labelEn: 'Corporate Food Service',
            href: '/corporate-food',
          },
        ]}
      />
    </>
  )
}
