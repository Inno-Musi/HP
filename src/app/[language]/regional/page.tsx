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
      title: '地方創生支援 | 株式会社MUSICO',
      description:
        '食・農・観光を掛け合わせた地域ブランディングと事業開発を支援。自治体・地域事業者と共に持続可能なホスピタリティの仕組みを構築します。',
    }
  }
  return {
    title: 'Regional Revitalization | MUSICO Inc.',
    description:
      'Supporting regional branding and business development through food, agriculture, and tourism — building sustainable hospitality models with local governments and businesses.',
  }
}

const painPoints = [
  {
    ja: '観光客が来ても地域にお金が落ちる仕組みが作れていない',
    en: "Tourists visit but spending doesn't circulate within the local economy",
  },
  {
    ja: '地域の食・農産物の魅力を、外部に効果的に発信できていない',
    en: "Local food and agriculture can't be effectively communicated to the outside world",
  },
  {
    ja: 'インバウンド観光客に対応できる食体験が不足している',
    en: 'Lack of food experiences that meet inbound tourist expectations',
  },
  {
    ja: '単発のイベントで終わり、継続的な経済効果に繋がらない',
    en: 'One-off events with no sustained economic impact',
  },
  {
    ja: '行政と民間事業者の連携がうまく取れず、施策がバラバラになっている',
    en: "Disconnected initiatives — government and private sector aren't aligned",
  },
  {
    ja: '外部コンサルに頼んでも、現地に根ざした実行力が伴わない',
    en: 'External consultants lack the local execution capability to follow through',
  },
]

const valueSteps = [
  {
    step: '01',
    titleJa: '地域診断・資源調査',
    titleEn: 'Regional Diagnosis & Resource Mapping',
    descJa:
      '食・農・観光・人材など地域固有のリソースを調査。強みと課題を整理し、ブランディングの方向性を定めます。',
    descEn:
      'Mapping region-specific resources across food, agriculture, tourism, and talent. Clarifying strengths and challenges to define a branding direction.',
  },
  {
    step: '02',
    titleJa: 'コンセプト設計・事業化',
    titleEn: 'Concept Design & Commercialization',
    descJa:
      '地域らしさを活かしたホスピタリティコンセプトを設計し、持続可能な収益モデルへと落とし込みます。行政・民間との連携設計も含みます。',
    descEn:
      'Designing hospitality concepts that leverage regional character, then translating them into sustainable revenue models. Includes coordination between public and private stakeholders.',
  },
  {
    step: '03',
    titleJa: '実装・運営支援',
    titleEn: 'Implementation & Operations Support',
    descJa:
      '施設開業・イベント運営・人材育成まで現場に入って支援。定着する仕組みとして地域に根付かせます。',
    descEn:
      'Hands-on support through facility launch, event operations, and staff development — embedding the model as something that lasts.',
  },
]

const strengths = [
  {
    titleJa: 'ホスピタリティ×農業の複合知見',
    titleEn: 'Combined Hospitality & Agriculture Expertise',
    descJa:
      'オリエンタルランドでのアグリビジネス経験とホスピタリティ運営の知見を掛け合わせ、食を軸とした地方創生を設計します。',
    descEn:
      'Combining agribusiness experience from Oriental Land with hospitality operations expertise to design food-centered regional revitalization.',
  },
  {
    titleJa: '実行まで一貫して伴走',
    titleEn: 'End-to-End Execution Partnership',
    descJa:
      '「提案して終わり」ではなく、開業・運営・育成まで現場に関わり続けます。外部コンサルではなく、地域の実行パートナーとして機能します。',
    descEn:
      "We don't stop at proposals — we stay involved through launch, operations, and development. We function as an execution partner embedded in the region, not an outside consultant.",
  },
  {
    titleJa: 'インバウンド・グローバル視点',
    titleEn: 'Inbound & Global Perspective',
    descJa:
      '外資金融・グローバル企業でのホスピタリティ経験を活かし、国際水準の食体験を地方に実装します。',
    descEn:
      'Drawing on hospitality experience with global financial institutions and corporations to bring international-standard dining experiences to regional settings.',
  },
]

export default async function RegionalPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-zinc-50">
        <div className="bg-darkNavy text-white">
          <div className="max-w-[calc(100vw-32px)] mx-auto py-20 md:py-28">
            <div className="flex flex-col gap-y-4 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase">
                Regional Revitalization
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {language === 'ja'
                  ? '地方創生支援'
                  : 'Regional\nRevitalization'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-300 max-w-[600px]">
                {language === 'ja'
                  ? '食・農・観光を掛け合わせた地域ブランディングと事業開発を支援。自治体・地域事業者と共に持続可能な仕組みを構築します。'
                  : 'Supporting regional branding and business development by combining food, agriculture, and tourism — building sustainable models with local governments and businesses.'}
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
                ? '地域の課題・強み・目標をお聞きし、最適な支援の入り口をご提案します。提案・売り込みは一切なし。'
                : "Share your region's challenges, assets, and goals — we'll propose the right entry point for support. No pitch, no sales."}
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
            labelJa: '地方創生支援',
            labelEn: 'Regional Revitalization',
            href: '/regional',
          },
        ]}
      />
    </>
  )
}
