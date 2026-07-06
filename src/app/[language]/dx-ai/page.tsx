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
      path: 'dx-ai',
      title: 'AI/DX × Hospitality | 株式会社MUSICO',
      description:
        '現場を知っているからこそ作れる、ホスピタリティ業界専用のAI/DX。属人化したノウハウを構造化し、現場で定着する仕組みへと再設計するMUSICOの注力領域。PoCパートナー募集中。',
    })
  }

  return buildMetadata({
    language,
    path: 'dx-ai',
    title: 'AI/DX × Hospitality | MUSICO Inc.',
    description:
      'Built by people who run the floor — AI/DX designed specifically for the hospitality industry. We structure knowledge trapped in individuals into systems that take root on-site. PoC partners welcome.',
  })
}

const painPoints = [
  {
    ja: '熟練スタッフのノウハウが属人化し、品質が再現できない',
    en: 'Expertise is trapped in individuals — quality cannot be reproduced',
  },
  {
    ja: 'シフト・予約・在庫管理がアナログで、判断が現場任せ',
    en: 'Shift, reservation, and inventory data live in spreadsheets — decisions sit on the floor',
  },
  {
    ja: 'ツールを導入したが、現場スタッフが使いこなせていない',
    en: "Tools were introduced, but frontline staff can't actually use them",
  },
  {
    ja: '外部ベンダーに丸投げしたが、ホスピタリティの現場文脈が伝わらない',
    en: 'Outsourced to a vendor, but the hospitality context never lands',
  },
  {
    ja: 'AI活用の方向性が決まらず、PoC止まりになっている',
    en: 'No clear AI direction — stuck at proof-of-concept',
  },
  {
    ja: 'ROIや業界事例が見えず、経営層への説明に困っている',
    en: "Can't show ROI or industry precedent — struggling to make the case",
  },
]

const failureReasons = [
  {
    titleJa: 'ツール先行で業務設計が後回し',
    titleEn: 'Tool-first, workflow-design-later',
    descJa:
      '現場の業務フローを変えずにAIだけ入れても、誰も使わない。導入の前に「業務をどう変えるか」の設計が必要です。',
    descEn:
      'Deploying AI without changing workflows means no one uses it. Before implementation, you need to design how work changes.',
  },
  {
    titleJa: '現場の実態を知らない外部が設計',
    titleEn: 'Outsiders designing without operational context',
    descJa:
      'コンサルが描いた理想と現場の現実はズレる。ホスピタリティ業界の現場を知る人間が伴走することが不可欠です。',
    descEn:
      'Consulting blueprints diverge from operational reality. You need someone who understands the hospitality floor walking alongside you.',
  },
  {
    titleJa: '定着まで支援する体制がない',
    titleEn: 'No support structure for adoption',
    descJa:
      '導入後に放置されると現場は元に戻る。継続的なフォローと人材育成まで含めた伴走が定着の鍵です。',
    descEn:
      'Without follow-through after launch, the floor reverts. Sustained adoption requires continuous support and people development.',
  },
]

const valueSteps = [
  {
    step: '01',
    titleJa: '現場診断',
    titleEn: 'On-Site Diagnosis',
    descJa:
      '業務フロー・組織構造・データ活用状況を現場レベルで把握。課題の本質と優先度を特定します。',
    descEn:
      'We assess workflows, org structure, and data usage at the operational level — identifying root causes and priorities.',
  },
  {
    step: '02',
    titleJa: '業務設計・AI実装',
    titleEn: 'Workflow Design & AI Integration',
    descJa:
      'ツール選定から業務フローの再設計まで一気通貫。ROIを意識した実装ロードマップを策定します。',
    descEn:
      'From tool selection to workflow redesign, end-to-end. We build an ROI-conscious implementation roadmap.',
  },
  {
    step: '03',
    titleJa: '定着支援・人材育成',
    titleEn: 'Adoption Support & People Development',
    descJa:
      '現場スタッフへのトレーニング、マニュアル整備、KPIモニタリングまで。「使われ続ける」状態を作ります。',
    descEn:
      'Staff training, documentation, KPI monitoring — we build the conditions for sustained use.',
  },
]

const strengths = [
  {
    titleJa: 'ホスピタリティ業界の現場知見',
    titleEn: 'Deep Hospitality Operations Knowledge',
    descJa:
      'F&B・テーマパーク・ホテルなど、ホスピタリティ現場の実務を知るチームが支援します。業界特有の制約と文化を理解した上でDXを設計します。',
    descEn:
      'Our team has hands-on experience in F&B, theme parks, and hotels. We design DX with full understanding of industry-specific constraints and culture.',
  },
  {
    titleJa: '戦略から実行まで一気通貫',
    titleEn: 'Strategy Through Execution, End-to-End',
    descJa:
      '「提案して終わり」ではなく、実装・定着まで責任を持って伴走。外部と内部の間を埋めるブリッジ役として機能します。',
    descEn:
      "We don't stop at proposals — we own implementation and adoption. We serve as the bridge between external expertise and internal operations.",
  },
  {
    titleJa: 'AIネイティブな組織設計',
    titleEn: 'AI-Native Organizational Design',
    descJa:
      '私たち自身がAIを前提とした組織で動いています。ツールの使い方だけでなく、AI時代の働き方・組織設計ごと支援します。',
    descEn:
      'We ourselves operate as an AI-native organization. We support not just tool usage, but work design and org structure for the AI era.',
  },
]

const supportPhases = [
  {
    phaseJa: 'キックオフ・現場診断',
    phaseEn: 'Kickoff & Diagnosis',
    durationJa: '2〜4週',
    durationEn: '2–4 weeks',
  },
  {
    phaseJa: '業務設計・ロードマップ策定',
    phaseEn: 'Workflow Design & Roadmap',
    durationJa: '4〜6週',
    durationEn: '4–6 weeks',
  },
  {
    phaseJa: 'パイロット実装・検証',
    phaseEn: 'Pilot Implementation',
    durationJa: '4〜8週',
    durationEn: '4–8 weeks',
  },
  {
    phaseJa: '全体展開・定着支援',
    phaseEn: 'Full Rollout & Adoption',
    durationJa: '継続',
    durationEn: 'Ongoing',
  },
]

const relatedCases = [
  {
    slug: 'us-ibank-executive-dining',
    titleJa: '米国系投資銀行 オフィスホスピタリティ運営',
    titleEn: 'US Investment Bank — Office Hospitality',
    categoryJa: 'データドリブン運営',
    categoryEn: 'Data-Driven Operations',
  },
  {
    slug: 'us-bank-office-cafe',
    titleJa: '米国系金融機関 オフィスカフェ運営',
    titleEn: 'US Financial Institution — Office Café',
    categoryJa: '利用データに基づく改善',
    categoryEn: 'Data-Driven Improvement',
  },
  {
    slug: 'enterprise-office-relocation-fb',
    titleJa: 'エンタープライズ オフィス移転 F&B PM',
    titleEn: 'Enterprise Office Relocation — F&B PM',
    categoryJa: 'KPIモニタリング',
    categoryEn: 'KPI Monitoring',
  },
]

const faqs = [
  {
    qJa: 'ホスピタリティ業界以外でも相談できますか？',
    qEn: 'Can we engage you outside the hospitality industry?',
    aJa: '主軸はホスピタリティ業界ですが、「現場の属人化をAIで解く」方法論は他業種の現場にも応用可能です。まずはご相談ください。',
    aEn: 'Our focus is hospitality, but our "solve floor-level individual-dependence with AI" methodology applies to other on-site industries too. Let’s talk.',
  },
  {
    qJa: 'AIの知識が社内になくても大丈夫ですか？',
    qEn: 'Is in-house AI knowledge required?',
    aJa: '不要です。現場理解・業務設計・人材育成まで含めて伴走するため、AIの専門知識がない状態から始められます。',
    aEn: 'No. We accompany you through operations understanding, workflow design, and people development — you can start with no AI expertise.',
  },
  {
    qJa: 'PoCにはどのくらいの期間・費用がかかりますか？',
    qEn: 'How long and how much is a PoC?',
    aJa: '具体課題に対する短期PoC（2〜3ヶ月）から始めます。費用は応相談、成果ベースの設計も可能です。',
    aEn: 'We start with a short PoC (2–3 months) on a specific problem. Fees are negotiable, including outcome-based structures.',
  },
  {
    qJa: '既存のツールやシステムは活かせますか？',
    qEn: 'Can we keep our existing tools and systems?',
    aJa: '既存システムを前提に、業務に溶け込む形で設計します。ツールの入れ替えありきではありません。',
    aEn: 'We design around your existing systems so AI fits into the workflow — no rip-and-replace by default.',
  },
]

export default async function DxAiPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <JsonLd
        data={serviceJsonLd(language, {
          nameJa: 'AI/DX × Hospitality',
          nameEn: 'AI/DX × Hospitality',
          path: 'dx-ai',
          descriptionJa:
            '現場を知っているからこそ作れる、ホスピタリティ業界専用のAI/DX。属人化したノウハウを構造化し、現場で定着する仕組みへと再設計するMUSICOの注力領域。PoCパートナー募集中。',
          descriptionEn:
            'Built by people who run the floor — AI/DX designed specifically for the hospitality industry. We structure knowledge trapped in individuals into systems that take root on-site. PoC partners welcome.',
        })}
      />
      <JsonLd data={faqPageJsonLd(language, faqs)} />
      <div className="bg-ivory">
        {/* Hero */}
        <div className="bg-darkNavy text-white">
          <div className="max-w-[calc(100vw-32px)] mx-auto py-20 md:py-28">
            <Reveal className="flex flex-col gap-y-4 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
              <div className="flex items-center gap-x-3">
                <span className="inline-block px-2 py-1 bg-paper text-darkNavy text-[10px] font-roboto font-semibold tracking-widest rounded">
                  FOCUS
                </span>
                <p className="text-sm md:text-sm font-roboto tracking-widest text-brass uppercase font-semibold">
                  AI/DX × Hospitality
                </p>
              </div>
              <h1 className="text-3xl md:text-5xl font-display leading-tight whitespace-pre-line">
                {language === 'ja'
                  ? 'ホスピタリティ業界専用の、\nAI/DX。'
                  : 'AI/DX, designed\nfor the hospitality industry.'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-300 max-w-[640px]">
                {language === 'ja'
                  ? '現場を知っているからこそ作れる、ホスピタリティ業界専用のAI/DX。属人化したノウハウを構造化し、現場で定着する仕組みへと再設計します。'
                  : 'Built by people who run the floor — AI/DX designed specifically for the hospitality industry. We structure knowledge trapped in individuals into systems that take root on-site.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href={`/${language}/contact`}>
                  <Button
                    type="button"
                    text={
                      language === 'ja'
                        ? 'PoCパートナーになる'
                        : 'Become a PoC Partner'
                    }
                    className="rounded-full bg-paper text-darkNavy px-8 py-3 hover:opacity-80 duration-300 font-roboto text-sm font-semibold w-fit"
                  />
                </Link>
                <Link href={`/${language}/contact`}>
                  <Button
                    type="button"
                    text={
                      language === 'ja'
                        ? '30分壁打ち相談 →'
                        : '30-Min Free Session →'
                    }
                    className="rounded-full border border-white text-white px-8 py-3 hover:bg-paper hover:text-darkNavy duration-300 font-roboto text-sm font-semibold w-fit"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-b border-hairline bg-paper">
          <div className="max-w-[800px] lg:max-w-[1000px] w-full mx-auto px-4 py-8 md:py-10 flex flex-col gap-y-6">
            <p className="text-center text-sm font-roboto tracking-[0.2em] uppercase text-brass">
              {language === 'ja' ? '対象業界' : 'Who We Build For'}
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                { ja: 'ホテル', en: 'Hotels' },
                { ja: 'レストラン・飲食チェーン', en: 'Restaurants & Chains' },
                { ja: 'イベント運営', en: 'Event Operators' },
                { ja: 'リゾート', en: 'Resorts' },
              ].map((s) => (
                <span
                  key={s.ja}
                  className="px-4 py-2 rounded-full border border-hairline bg-ivory text-xs md:text-sm font-semibold text-darkNavy"
                >
                  {language === 'ja' ? s.ja : s.en}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                {
                  vJa: '現場運用者発',
                  vEn: 'Built by Operators',
                  lJa: '机上論ではない実装',
                  lEn: 'implementation, not theory',
                },
                {
                  vJa: 'AIネイティブ',
                  vEn: 'AI-Native',
                  lJa: '自社で実証した方法論',
                  lEn: 'methodology proven in-house',
                },
                {
                  vJa: '属人化→仕組み化',
                  vEn: 'Individual → System',
                  lJa: '現場で定着するDX',
                  lEn: 'DX that takes root on-site',
                },
              ].map((st) => (
                <div
                  key={st.lJa}
                  className="flex flex-col items-center text-center gap-y-1"
                >
                  <p className="text-xl md:text-2xl font-bold text-darkNavy">
                    {language === 'ja' ? st.vJa : st.vEn}
                  </p>
                  <p className="text-xs md:text-sm text-muted leading-relaxed">
                    {language === 'ja' ? st.lJa : st.lEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[calc(100vw-32px)] mx-auto py-24 md:py-32 flex flex-col gap-y-20 lg:gap-y-28">
          {/* Vision / Our Stance */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Our Stance
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center whitespace-pre-line leading-snug">
                  <MaskReveal delay={0.05}>
                    {language === 'ja'
                      ? '"Hospitality" の属人化は、\nAIで解ける。'
                      : "Hospitality's individual-dependence\ncan be solved by AI."}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="flex flex-col gap-y-3 text-base md:text-lg leading-relaxed text-darkNavy max-w-[720px] mx-auto">
              <p>
                {language === 'ja'
                  ? 'ホスピタリティ業界の現場には、長年「属人化した品質」「再現できないノウハウ」「スケールしない仕組み」が常態化してきました。'
                  : 'For decades, hospitality operations have lived with quality trapped in individuals, knowledge that cannot be reproduced, and systems that do not scale.'}
              </p>
              <p>
                {language === 'ja'
                  ? '私たちは、現場運用者として日々この課題と向き合いながら、ホスピタリティ業界専用のAI/DXを設計しています。一般企業向けDXコンサルではなく、ホスピタリティの文脈に深くチューニングされた方法論を作るパートナーです。'
                  : 'We design AI/DX specifically for the hospitality industry, working through these problems on the floor every day. We are not a generic DX consultancy — we are a partner building methodology deeply tuned to the hospitality context.'}
              </p>
              <p>
                {language === 'ja'
                  ? '私たち自身もAIネイティブな組織として動いています。自分たちが実証した方法論を、業界に還元する。それが私たちのスタンスです。'
                  : 'We ourselves operate as an AI-native organization. Our stance: give back to the industry the methodologies we have proven in our own operations.'}
              </p>
            </div>
          </div>

          {/* 課題提起 */}
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
              {painPoints.map((point) => (
                <div
                  key={point.ja}
                  className="flex items-start gap-x-3 bg-paper rounded-md px-6 py-5 border border-hairline"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-darkNavy text-white flex items-center justify-center text-xs font-bold"
                  >
                    ✓
                  </span>
                  <p className="text-base text-ink/80 leading-relaxed">
                    {language === 'ja' ? point.ja : point.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* なぜ失敗するか */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Why DX Fails
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center whitespace-pre-line">
                  <MaskReveal delay={0.05}>
                    {language === 'ja'
                      ? 'AIを導入するだけでは\n現場は変わらない'
                      : "Simply deploying AI\ndoesn't change the floor"}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
                <p className="text-base text-muted leading-relaxed text-center max-w-[600px] mx-auto">
                  {language === 'ja'
                    ? 'DXが失敗する理由は、ほぼ決まっています。ツール・ベンダー・予算の問題ではなく、設計と伴走の問題です。'
                    : "DX failures follow predictable patterns. It's rarely about tools, vendors, or budgets — it's about design and sustained support."}
                </p>
              </div>
            </Reveal>
            <div className="flex flex-col gap-y-4">
              {failureReasons.map((reason, index) => (
                <div
                  key={reason.titleJa}
                  className="flex gap-x-5 bg-paper rounded-md px-6 py-6 border border-hairline"
                >
                  <span className="text-4xl font-display text-brass/40 shrink-0 leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-y-2">
                    <p className="text-darkNavy font-bold text-base">
                      {language === 'ja' ? reason.titleJa : reason.titleEn}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {language === 'ja' ? reason.descJa : reason.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 提供価値 */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Our Approach
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja' ? '私たちが提供するもの' : 'What We Deliver'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
                <p className="text-base text-muted leading-relaxed text-center max-w-[600px] mx-auto">
                  {language === 'ja'
                    ? '現場理解・業務設計・人材育成を三位一体で支援。ツールではなく、「定着する仕組み」を構築します。'
                    : 'We integrate operations understanding, workflow design, and people development. We build systems that stick — not just tools.'}
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {valueSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="flex flex-col gap-y-4 bg-paper rounded-md px-6 py-8 border border-hairline relative"
                >
                  {index < valueSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 z-10 text-zinc-300 text-xl font-bold">
                      →
                    </div>
                  )}
                  <span className="text-5xl font-display text-brass/40 leading-none">
                    {step.step}
                  </span>
                  <div className="flex flex-col gap-y-2">
                    <p className="text-darkNavy font-bold text-lg">
                      {language === 'ja' ? step.titleJa : step.titleEn}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {language === 'ja' ? step.descJa : step.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 強み */}
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
              {strengths.map((strength) => (
                <div
                  key={strength.titleJa}
                  className="flex flex-col md:flex-row md:items-start gap-4 bg-paper rounded-md px-6 py-6 border border-hairline"
                >
                  <div className="md:w-[240px] shrink-0">
                    <p className="text-darkNavy font-bold text-base">
                      {language === 'ja' ? strength.titleJa : strength.titleEn}
                    </p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {language === 'ja' ? strength.descJa : strength.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 支援イメージ */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Engagement Model
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja' ? '支援の流れ' : 'How We Engage'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
                <p className="text-base text-muted leading-relaxed text-center max-w-[600px] mx-auto">
                  {language === 'ja'
                    ? '初回の無料壁打ちから始まり、貴社の状況に応じたスコープでプロジェクトを設計します。'
                    : 'Starting from a free session, we design the project scope around your situation.'}
                </p>
              </div>
            </Reveal>
            <div className="bg-paper rounded-md px-6 md:px-10 py-8 border border-hairline">
              <div className="flex flex-col gap-y-0">
                {supportPhases.map((phase, index) => (
                  <div key={phase.phaseJa} className="flex items-start gap-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-darkNavy text-white flex items-center justify-center text-xs font-bold font-roboto shrink-0">
                        {index + 1}
                      </div>
                      {index < supportPhases.length - 1 && (
                        <div className="w-px h-12 bg-zinc-200" />
                      )}
                    </div>
                    <div className="pb-8 pt-1">
                      <p className="text-darkNavy font-bold text-base leading-none mb-1">
                        {language === 'ja' ? phase.phaseJa : phase.phaseEn}
                      </p>
                      <p className="text-xs text-muted font-roboto">
                        {language === 'ja'
                          ? phase.durationJa
                          : phase.durationEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PoC Partner */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-paper rounded-md px-8 md:px-12 py-12 border-2 border-darkNavy">
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-3">
                <span className="inline-block px-2 py-1 bg-darkNavy text-white text-[10px] font-roboto font-semibold tracking-widest rounded">
                  {language === 'ja' ? '募集中' : 'OPEN'}
                </span>
                <p className="text-sm font-roboto tracking-[0.2em] text-darkNavy uppercase font-semibold">
                  PoC Partners
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy leading-snug">
                <MaskReveal delay={0.05}>
                  {language === 'ja'
                    ? '業界の方法論を、一緒に作るパートナー企業を募集しています。'
                    : 'Looking for partner companies to build the industry methodology with us.'}
                </MaskReveal>
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {language === 'ja'
                  ? '具体課題に対する短期PoC（2〜3ヶ月）から始め、効果が見えれば本格展開へ移行する形です。'
                  : 'We start with a short PoC (2–3 months) on a specific problem, then expand once results are visible.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  labelJa: '募集対象',
                  labelEn: 'Who we work with',
                  descJa:
                    'ホテル / レストラン / 飲食チェーン / イベント運営 / リゾート など、ホスピタリティ業界全般',
                  descEn:
                    'Hotels, restaurants, F&B chains, event operators, resorts, and other hospitality businesses.',
                },
                {
                  labelJa: '共に作るもの',
                  labelEn: 'What we build together',
                  descJa:
                    '業界・業態に応じたAI/DX実装の型、現場定着の方法論、データ活用のKPI設計',
                  descEn:
                    'Implementation patterns by sub-vertical, on-site adoption methodology, and KPI design for data-driven operations.',
                },
                {
                  labelJa: '取り組み形態',
                  labelEn: 'How we engage',
                  descJa:
                    'PoC費用は応相談、成果ベース設計可。取り組みは機密保持のもと、業界事例として一部公開可',
                  descEn:
                    'PoC fees are negotiable; outcome-based pricing possible. Engagements can be partially published as industry case studies under NDA.',
                },
              ].map((item) => (
                <div
                  key={item.labelJa}
                  className="flex flex-col gap-y-2 bg-ivory rounded-md px-5 py-5 border border-hairline"
                >
                  <p className="text-sm font-roboto tracking-widest text-darkNavy uppercase font-semibold">
                    {language === 'ja' ? item.labelJa : item.labelEn}
                  </p>
                  <p className="text-base text-ink/80 leading-relaxed">
                    {language === 'ja' ? item.descJa : item.descEn}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <Link href={`/${language}/contact`}>
                <Button
                  type="button"
                  text={
                    language === 'ja'
                      ? 'PoCパートナーに応募する →'
                      : 'Apply as a PoC Partner →'
                  }
                  className="rounded-full bg-darkNavy text-white px-8 py-3 hover:opacity-80 duration-300 font-roboto font-semibold text-sm w-fit"
                />
              </Link>
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
                    {language === 'ja'
                      ? 'データドリブン運営の実績'
                      : 'Data-Driven Operations in Practice'}
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

          {/* CTA */}
          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-darkNavy rounded-md px-8 md:px-12 py-12 text-white text-center items-center">
            <p className="text-sm font-roboto tracking-widest text-brass uppercase">
              Get Started
            </p>
            <p className="text-2xl md:text-3xl font-display leading-snug">
              {language === 'ja'
                ? 'まずは30分の壁打ちから'
                : 'Start with a 30-Min Conversation'}
            </p>
            <p className="text-sm leading-relaxed opacity-80 max-w-[520px]">
              {language === 'ja'
                ? 'PoCパートナー応募はハードルが高い、まずは課題感だけ話したい、という方は、30分の無料壁打ちセッションをご利用ください。提案・売り込みは一切ありません。'
                : "If applying as a PoC partner feels like too much commitment, start with a free 30-minute session to just talk through what's on your mind. No pitch, no sales."}
            </p>
            <Link href={`/${language}/contact`}>
              <Button
                type="button"
                text={
                  language === 'ja'
                    ? '30分壁打ちを申し込む →'
                    : 'Book 30-Min Session →'
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
            labelJa: 'AI/DX × Hospitality',
            labelEn: 'AI/DX × Hospitality',
            href: '/dx-ai',
          },
        ]}
      />
    </>
  )
}
