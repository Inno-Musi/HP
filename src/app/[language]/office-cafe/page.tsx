import { BreadCrumbs } from '@/components/bread-crumbs'
import { Button } from '@/components/button'
import { JsonLd } from '@/components/json-ld'
import { MaskReveal } from '@/components/mask-reveal'
import { Reveal } from '@/components/reveal'
import {
  TrustBar,
  companyTrustSectors,
  companyTrustStats,
} from '@/components/trust-bar'
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
      path: 'office-cafe',
      title: 'オフィスカフェ運営代行・導入支援 | 株式会社MUSICO',
      description:
        '外資系金融機関で実績のあるオフィスカフェ運営。バリスタ採用・育成、メニュー開発、利用データに基づく改善までワンストップ。従業員体験を高めるオフィスカフェの導入・運営代行はMUSICOへ。',
    })
  }
  return buildMetadata({
    language,
    path: 'office-cafe',
    title: 'Office Café Operation & Setup | MUSICO Inc.',
    description:
      'Office café operation proven at global financial institutions. Barista hiring and training, menu development, and data-driven improvement — end to end. For office café setup and operation, choose MUSICO.',
  })
}

// Value an office café creates.
const values = [
  {
    titleJa: '採用競争力の向上',
    titleEn: 'Stronger Talent Attraction',
    descJa:
      '質の高いオフィスカフェは、採用候補者に伝わる分かりやすい福利厚生。オフィス回帰を後押しし、企業ブランドを高めます。',
    descEn:
      'A high-quality office café is a benefit candidates immediately understand. It encourages a return to the office and elevates the employer brand.',
  },
  {
    titleJa: '定着とエンゲージメント',
    titleEn: 'Retention & Engagement',
    descJa:
      '毎日の一杯が従業員体験の質を押し上げ、満足度と定着につながります。日常に埋め込まれた小さな価値の積み重ねです。',
    descEn:
      'A great daily cup lifts the everyday employee experience — driving satisfaction and retention through small value compounded day after day.',
  },
  {
    titleJa: '社内交流の活性化',
    titleEn: 'More Cross-Team Interaction',
    descJa:
      'カフェは部署を越えた自然な交流の起点。偶発的な会話が生まれる場をデザインし、社内コミュニケーションを促します。',
    descEn:
      'The café becomes a natural hub for cross-team encounters — a designed space where spontaneous conversation and internal communication happen.',
  },
]

// How MUSICO runs the operation.
const operations = [
  {
    step: '01',
    titleJa: 'バリスタの内製採用・育成',
    titleEn: 'In-House Barista Hiring & Training',
    descJa:
      '採用から育成まで内製で行い、属人化しない品質管理の仕組みを構築。安定した提供品質とホスピタリティを担保します。',
    descEn:
      'Hiring and training handled in house, with a quality-management system that never depends on any single person — ensuring consistent quality and hospitality.',
  },
  {
    step: '02',
    titleJa: 'メニュー開発と品質管理',
    titleEn: 'Menu Development & Quality Control',
    descJa:
      '企業文化や利用者層に合わせたメニューを設計し、レシピと提供基準を標準化。誰が淹れても同じ品質を実現します。',
    descEn:
      'Menus designed for your culture and user base, with standardized recipes and service standards — the same quality regardless of who is behind the bar.',
  },
  {
    step: '03',
    titleJa: '利用データに基づく改善PDCA',
    titleEn: 'Data-Driven Improvement PDCA',
    descJa:
      '利用ログ・満足度・原価をデータで把握し、メニューと運営を継続改善。感覚ではなくデータで打ち手を決めます。',
    descEn:
      'Usage logs, satisfaction, and cost tracked as data to continuously improve the menu and operation — decisions made by data, not intuition.',
  },
]

// Introduction case study (links into /works).
const works = [
  {
    slug: 'us-bank-office-cafe',
    titleJa: '米国系金融機関 オフィスカフェ運営',
    titleEn: 'US Financial Institution — Office Café',
    categoryJa: 'オフィスカフェ',
    categoryEn: 'Office Café',
  },
]

const faqs = [
  {
    qJa: 'どのくらいの規模から導入できますか？',
    qEn: 'What size of office can start an office café?',
    aJa: '数十名規模から導入可能です。人数・利用頻度に応じて運営体制とコストを設計します。まずは現状をお聞かせください。',
    aEn: 'You can start from a few dozen people. We design the operating model and cost to your headcount and usage frequency — start by telling us your current situation.',
  },
  {
    qJa: '既存のカフェ運営からの切り替えはできますか？',
    qEn: 'Can you take over an existing café operation?',
    aJa: '現運営からの引き継ぎ実績があります。品質を落とさず段階的に移行します。',
    aEn: 'We have experience taking over existing operations, transitioning in phases without dropping quality.',
  },
  {
    qJa: 'バリスタやスタッフはどう確保しますか？',
    qEn: 'How do you secure baristas and staff?',
    aJa: '採用から育成まで内製で行い、属人化しない品質管理の仕組みを構築します。',
    aEn: 'We handle hiring and training in house, building a quality-management system that never depends on any single person.',
  },
  {
    qJa: '相談だけでも費用はかかりますか？',
    qEn: 'Is the initial consultation free?',
    aJa: '初回のご相談は無料です。提案・売り込みは一切ありません。',
    aEn: 'The first consultation is free, with no pitch and no sales.',
  },
]

export default async function OfficeCafePage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <JsonLd
        data={serviceJsonLd(language, {
          nameJa: 'オフィスカフェ運営',
          nameEn: 'Office Café Operation',
          path: 'office-cafe',
          descriptionJa:
            '外資系金融機関で実績のあるオフィスカフェ運営。バリスタ採用・育成、メニュー開発、利用データに基づく改善までワンストップ。従業員体験を高めるオフィスカフェの導入・運営代行はMUSICOへ。',
          descriptionEn:
            'Office café operation proven at global financial institutions. Barista hiring and training, menu development, and data-driven improvement — end to end. For office café setup and operation, choose MUSICO.',
        })}
      />
      <JsonLd data={faqPageJsonLd(language, faqs)} />
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
                  ? 'オフィスカフェ運営'
                  : 'Office Café Operation'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-200 max-w-[620px]">
                {language === 'ja'
                  ? '外資系金融機関で実績のあるオフィスカフェ運営。バリスタの採用・育成からメニュー開発、利用データに基づく改善まで、ワンストップで従業員体験を高めます。'
                  : 'Office café operation proven at global financial institutions. From barista hiring and training to menu development and data-driven improvement, we raise the employee experience end to end.'}
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
                  ? 'グローバル金融機関のハイエンドな現場で実証。'
                  : 'Proven on high-end floors at global financial institutions.'}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Trust bar */}
        <TrustBar
          language={language}
          labelJa="支援実績のある業種"
          labelEn="Sectors We Serve"
          sectors={companyTrustSectors}
          stats={companyTrustStats}
        />

        <div className="max-w-[calc(100vw-32px)] mx-auto py-24 md:py-32 flex flex-col gap-y-20 lg:gap-y-28">
          {/* 1. Value an office café creates */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Why Office Café
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja'
                      ? 'オフィスカフェが生む価値'
                      : 'The Value an Office Café Creates'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((v) => (
                <div
                  key={v.titleJa}
                  className="flex flex-col gap-y-3 bg-paper rounded-md px-6 py-8 border border-hairline"
                >
                  <p className="text-darkNavy font-bold text-lg">
                    {language === 'ja' ? v.titleJa : v.titleEn}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {language === 'ja' ? v.descJa : v.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. MUSICO operating system */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Our Operation
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja'
                      ? 'MUSICOの運営体制'
                      : 'How MUSICO Runs the Café'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {operations.map((op) => (
                <div
                  key={op.step}
                  className="flex flex-col gap-y-3 bg-paper rounded-md px-6 py-8 border border-hairline"
                >
                  <span className="text-5xl font-display text-brass/40 leading-none">
                    {op.step}
                  </span>
                  <p className="text-darkNavy font-bold text-lg">
                    {language === 'ja' ? op.titleJa : op.titleEn}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {language === 'ja' ? op.descJa : op.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Adoption patterns & cost thinking */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Patterns & Cost
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja'
                      ? '導入パターンと費用の考え方'
                      : 'Adoption Patterns & How Cost Works'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="bg-paper rounded-md px-6 md:px-10 py-8 md:py-10 border border-hairline flex flex-col gap-y-4">
              <p className="text-base text-ink/80 leading-relaxed">
                {language === 'ja'
                  ? '費用は「規模・利用人数・提供時間帯」で大きく変わります。数十名規模のシンプルな運営から、複数フロア・ピークタイム対応の本格運営まで、体制はフルオーダーで設計します。'
                  : 'Cost varies significantly by scale, headcount, and service hours. From a simple operation for a few dozen people to a full setup spanning multiple floors and peak-time demand, we design the model to fit.'}
              </p>
              <p className="text-base text-ink/80 leading-relaxed">
                {language === 'ja'
                  ? '決まったパッケージを当てはめるのではなく、まず現状のヒアリングから。目的・予算・利用見込みを踏まえ、最適な運営体制とコストをご提案します。'
                  : "Rather than forcing a fixed package, we start from a hearing of your current situation. Based on your goals, budget, and expected usage, we propose the right operating model and cost."}
              </p>
            </div>
          </div>

          {/* 4. Case study */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Case Study
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja' ? '導入事例' : 'Case Study'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {works.map((c) => (
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

          {/* 5. FAQ */}
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

          {/* 6. CTA */}
          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-darkNavy rounded-md px-8 md:px-12 py-12 text-white text-center items-center">
            <p className="text-2xl md:text-3xl font-display">
              {language === 'ja'
                ? 'まずは無料相談から'
                : 'Start with a Free Consultation'}
            </p>
            <p className="text-sm leading-relaxed opacity-80 max-w-[520px]">
              {language === 'ja'
                ? 'オフィスカフェの課題や構想をヒアリングし、最適な運営体制をご提案します。提案・売り込みは一切なし。まずは率直に話しましょう。'
                : "We'll listen to your office café challenges and vision and propose the right operating model. No pitch, no sales — just a candid conversation."}
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
            labelJa: 'オフィスカフェ運営',
            labelEn: 'Office Café',
            href: '/office-cafe',
          },
        ]}
      />
    </>
  )
}
