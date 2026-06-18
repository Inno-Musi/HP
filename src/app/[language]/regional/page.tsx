import { BreadCrumbs } from '@/components/bread-crumbs'
import { Button } from '@/components/button'
import Image from 'next/image'
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

const trustSectors = [
  { ja: '自治体', en: 'Local Government' },
  { ja: 'まちづくり会社', en: 'Town-Development Co.' },
  { ja: '一次産業・地域事業者', en: 'Primary Industry' },
  { ja: 'リゾート・観光', en: 'Resort & Tourism' },
]

const trustStats = [
  {
    valueJa: '戦略→現場運営',
    valueEn: 'Strategy → Ops',
    labelJa: '一気通貫で伴走',
    labelEn: 'end-to-end partnership',
  },
  {
    valueJa: 'ホスピタリティ×一次産業',
    valueEn: 'Hospitality × Primary',
    labelJa: 'サプライチェーンを設計',
    labelEn: 'supply chains designed',
  },
  {
    valueJa: 'インバウンド対応',
    valueEn: 'Inbound-Ready',
    labelJa: '国際水準の食体験',
    labelEn: 'international-standard dining',
  },
]

const relatedCases = [
  {
    slug: 'dohoku-regional-revitalization',
    titleJa: '北海道道東エリア 地方創生 共創プロジェクト',
    titleEn: 'Eastern Hokkaido — Regional Revitalization',
    categoryJa: '地方創生 / 地域価値創造',
    categoryEn: 'Regional Revitalization',
  },
  {
    slug: 'hakuba-resort-fb',
    titleJa: '白馬エリア スキーリゾート F&B施設支援',
    titleEn: 'Hakuba Ski Resort — F&B Support',
    categoryJa: 'リゾートF&B / 観光',
    categoryEn: 'Resort F&B / Tourism',
  },
  {
    slug: 'smb-new-business-launch',
    titleJa: '中小企業の新規事業 立ち上げ支援',
    titleEn: 'SMB New-Business Launch Support',
    categoryJa: '事業開発 / 一次産業',
    categoryEn: 'Business Development',
  },
]

const faqs = [
  {
    qJa: '構想段階からでも相談できますか？',
    qEn: 'Can we consult from the conceptual stage?',
    aJa: '地域資源の調査・診断から伴走します。「何から始めるか」が定まっていない段階でも結構です。',
    aEn: 'We partner from resource mapping and diagnosis — even before you know where to start.',
  },
  {
    qJa: '行政と民間の連携設計も依頼できますか？',
    qEn: 'Can you design public-private coordination?',
    aJa: '自治体・地域事業者・民間の連携設計を含めて、持続可能な推進体制を構築します。',
    aEn: 'Yes — we build a sustainable structure that aligns local government, regional operators, and the private sector.',
  },
  {
    qJa: '単発のイベントではなく継続的な仕組みにできますか？',
    qEn: 'Can you build something lasting, not a one-off event?',
    aJa: '収益モデルと運営体制まで設計し、地域に根付く「定着する仕組み」を目指します。',
    aEn: 'We design the revenue model and operating structure to create a model that takes root in the region.',
  },
  {
    qJa: '相談だけでも費用はかかりますか？',
    qEn: 'Is the initial consultation free?',
    aJa: '初回のご相談は無料です。提案・売り込みは一切ありません。',
    aEn: 'The first consultation is free, with no pitch and no sales.',
  },
]

export default async function RegionalPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-ivory">
        <div className="relative bg-darkNavy text-white overflow-hidden">
          <Image
            src="/service-regional.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darkNavy via-darkNavy/85 to-darkNavy/40" />
          <div className="relative max-w-[calc(100vw-32px)] mx-auto py-20 md:py-28">
            <div className="flex flex-col gap-y-4 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
              <p className="text-xs font-roboto tracking-widest text-brass uppercase font-semibold">
                Regional Revitalization
              </p>
              <h1 className="text-3xl md:text-5xl font-display leading-tight">
                {language === 'ja'
                  ? '地方創生支援'
                  : 'Regional\nRevitalization'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-200 max-w-[620px]">
                {language === 'ja'
                  ? '食・農・観光を掛け合わせた地域ブランディングと事業開発。自治体・地域事業者と共に、現場に入って持続可能な仕組みを構築します。'
                  : 'Regional branding and business development across food, agriculture, and tourism — building sustainable models on-site, together with local governments and operators.'}
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
                  ? '構想だけで終わらせない。現場に入り、事業を立ち上げ、運営まで。'
                  : 'Beyond plans — we go on-site to launch and operate.'}
              </p>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-b border-hairline bg-paper">
          <div className="max-w-[800px] lg:max-w-[1000px] w-full mx-auto px-4 py-8 md:py-10 flex flex-col gap-y-6">
            <p className="text-center text-xs font-roboto tracking-[0.2em] uppercase text-zinc-400">
              {language === 'ja' ? '共創してきた相手' : 'Who We Work With'}
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
                  <p className="text-xs md:text-sm text-zinc-500 leading-relaxed">
                    {language === 'ja' ? st.labelJa : st.labelEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[calc(100vw-32px)] mx-auto py-24 md:py-32 flex flex-col gap-y-20 lg:gap-y-28">
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-brass uppercase text-center">
                Pain Points
              </p>
              <h2 className="text-3xl md:text-4xl font-display text-darkNavy text-center">
                {language === 'ja'
                  ? 'こんな課題はありませんか？'
                  : 'Do any of these resonate?'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {painPoints.map((p) => (
                <div
                  key={p.ja}
                  className="flex items-start gap-x-3 bg-paper rounded-md px-6 py-5 shadow-sm border border-hairline"
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
              <p className="text-xs font-roboto tracking-widest text-brass uppercase text-center">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-display text-darkNavy text-center">
                {language === 'ja' ? '支援の進め方' : 'How We Work'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {valueSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex flex-col gap-y-3 bg-paper rounded-md px-6 py-8 shadow-sm border border-hairline"
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
              <p className="text-xs font-roboto tracking-widest text-brass uppercase text-center">
                Why MUSICO
              </p>
              <h2 className="text-3xl md:text-4xl font-display text-darkNavy text-center">
                {language === 'ja'
                  ? 'MUSICOが選ばれる理由'
                  : 'Why Organizations Choose MUSICO'}
              </h2>
            </div>
            <div className="flex flex-col gap-y-4">
              {strengths.map((s) => (
                <div
                  key={s.titleJa}
                  className="flex flex-col md:flex-row md:items-start gap-4 bg-paper rounded-md px-6 py-6 shadow-sm border border-hairline"
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

          {/* Related cases */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-brass uppercase text-center">
                Case Studies
              </p>
              <h2 className="text-3xl md:text-4xl font-display text-darkNavy text-center">
                {language === 'ja' ? '関連する実績' : 'Related Work'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedCases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${language}/works/${c.slug}`}
                  className="group bg-paper rounded-md overflow-hidden shadow-sm border border-hairline flex flex-col hover:shadow-md transition-shadow duration-200"
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
                    <p className="text-xs font-roboto tracking-widest uppercase text-zinc-400">
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
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-brass uppercase text-center">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-display text-darkNavy text-center">
                {language === 'ja' ? 'よくあるご質問' : 'Frequently Asked Questions'}
              </h2>
            </div>
            <div className="flex flex-col gap-y-3">
              {faqs.map((f) => (
                <details
                  key={f.qJa}
                  className="group bg-paper rounded-md px-6 py-5 shadow-sm border border-hairline"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-darkNavy text-sm md:text-base">
                    <span>{language === 'ja' ? f.qJa : f.qEn}</span>
                    <span className="ml-4 shrink-0 text-zinc-400 group-open:rotate-45 transition-transform duration-200 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
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
                ? '地域の課題・強み・目標をお聞きし、最適な支援の入り口をご提案します。提案・売り込みは一切なし。'
                : "Share your region's challenges, assets, and goals — we'll propose the right entry point for support. No pitch, no sales."}
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
            labelJa: '地方創生支援',
            labelEn: 'Regional Revitalization',
            href: '/regional',
          },
        ]}
      />
    </>
  )
}
