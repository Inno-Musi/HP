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
      title: '現場DX・AI導入支援 | 株式会社MUSICO',
      description:
        'AIを導入するだけでは現場は変わらない。現場理解・業務設計・人材育成まで含めて伴走する、ホスピタリティ×AIの実行支援サービス。',
    }
  }

  return {
    title: 'On-Site DX & AI Implementation | MUSICO Inc.',
    description:
      "Simply deploying AI doesn't change the shop floor. We walk alongside you — from understanding operations, designing workflows, to developing people. Hospitality × AI execution support.",
  }
}

const painPoints = [
  {
    ja: 'ツールを導入したが、現場スタッフが使いこなせていない',
    en: "Tools were introduced, but frontline staff can't actually use them",
  },
  {
    ja: 'AI活用の方向性が決まらず、PoC止まりになっている',
    en: 'No clear AI direction — stuck at proof-of-concept',
  },
  {
    ja: 'DX推進担当が孤立し、現場と経営の橋渡しができていない',
    en: 'DX leads are isolated; no bridge between ops and management',
  },
  {
    ja: '外部ベンダーに丸投げしたが、運用が社内に定着しなかった',
    en: 'Outsourced to a vendor, but operations never took root internally',
  },
  {
    ja: '何から始めればいいか分からず、検討が止まっている',
    en: 'Not sure where to start — everything is on hold',
  },
  {
    ja: 'ROIの見せ方が分からず、経営層への説明に困っている',
    en: "Can't demonstrate ROI — struggling to explain value to leadership",
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

export default async function DxAiPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-zinc-50">
        {/* Hero */}
        <div className="bg-darkNavy text-white">
          <div className="max-w-[calc(100vw-32px)] mx-auto py-20 md:py-28">
            <div className="flex flex-col gap-y-4 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
              <p className="text-xs md:text-sm font-roboto tracking-widest text-zinc-400 uppercase">
                {language === 'ja'
                  ? 'DX・AI導入支援'
                  : 'DX & AI Implementation'}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {language === 'ja' ? (
                  <>
                    現場で
                    <br />
                    定着するAI/
                    <br className="md:hidden" />
                    DX支援
                  </>
                ) : (
                  <>
                    AI & DX That Actually
                    <br />
                    Sticks on the Floor
                  </>
                )}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-300 max-w-[600px]">
                {language === 'ja'
                  ? 'AIを導入するだけでは現場は変わらない。現場理解・業務設計・人材育成まで含めて伴走する、ホスピタリティ×AIの実行支援サービスです。'
                  : "Simply deploying AI doesn't change the floor. We walk alongside you through operations understanding, workflow design, and people development — Hospitality × AI execution support."}
              </p>
              <div className="pt-4">
                <Link href={`/${language}/contact`}>
                  <Button
                    type="button"
                    text={
                      language === 'ja'
                        ? '60分無料壁打ちを申し込む'
                        : 'Book a Free 60-Min Session'
                    }
                    className="rounded-full bg-white text-darkNavy px-8 py-3 hover:opacity-80 duration-300 font-roboto text-sm font-semibold"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[calc(100vw-32px)] mx-auto py-16 md:py-20 flex flex-col gap-y-20 lg:gap-y-28">
          {/* 課題提起 */}
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
              {painPoints.map((point) => (
                <div
                  key={point.ja}
                  className="flex items-start gap-x-3 bg-white rounded-md px-6 py-5 shadow-sm border border-zinc-100"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-darkNavy text-white flex items-center justify-center text-xs font-bold"
                  >
                    ✓
                  </span>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    {language === 'ja' ? point.ja : point.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* なぜ失敗するか */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                Why DX Fails
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center whitespace-pre-line">
                {language === 'ja'
                  ? 'AIを導入するだけでは\n現場は変わらない'
                  : "Simply deploying AI\ndoesn't change the floor"}
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed text-center max-w-[600px] mx-auto">
                {language === 'ja'
                  ? 'DXが失敗する理由は、ほぼ決まっています。ツール・ベンダー・予算の問題ではなく、設計と伴走の問題です。'
                  : "DX failures follow predictable patterns. It's rarely about tools, vendors, or budgets — it's about design and sustained support."}
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              {failureReasons.map((reason, index) => (
                <div
                  key={reason.titleJa}
                  className="flex gap-x-5 bg-white rounded-md px-6 py-6 shadow-sm border border-zinc-100"
                >
                  <span className="text-4xl font-bold font-roboto text-zinc-100 shrink-0 leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-y-2">
                    <p className="text-darkNavy font-bold text-base">
                      {language === 'ja' ? reason.titleJa : reason.titleEn}
                    </p>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {language === 'ja' ? reason.descJa : reason.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 提供価値 */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                Our Approach
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center">
                {language === 'ja' ? '私たちが提供するもの' : 'What We Deliver'}
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed text-center max-w-[600px] mx-auto">
                {language === 'ja'
                  ? '現場理解・業務設計・人材育成を三位一体で支援。ツールではなく、「定着する仕組み」を構築します。'
                  : 'We integrate operations understanding, workflow design, and people development. We build systems that stick — not just tools.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {valueSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="flex flex-col gap-y-4 bg-white rounded-md px-6 py-8 shadow-sm border border-zinc-100 relative"
                >
                  {index < valueSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 z-10 text-zinc-300 text-xl font-bold">
                      →
                    </div>
                  )}
                  <span className="text-5xl font-bold font-roboto text-zinc-100 leading-none">
                    {step.step}
                  </span>
                  <div className="flex flex-col gap-y-2">
                    <p className="text-darkNavy font-bold text-lg">
                      {language === 'ja' ? step.titleJa : step.titleEn}
                    </p>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {language === 'ja' ? step.descJa : step.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 強み */}
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
              {strengths.map((strength) => (
                <div
                  key={strength.titleJa}
                  className="flex flex-col md:flex-row md:items-start gap-4 bg-white rounded-md px-6 py-6 shadow-sm border border-zinc-100"
                >
                  <div className="md:w-[240px] shrink-0">
                    <p className="text-darkNavy font-bold text-base">
                      {language === 'ja' ? strength.titleJa : strength.titleEn}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === 'ja' ? strength.descJa : strength.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 支援イメージ */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                Engagement Model
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center">
                {language === 'ja' ? '支援の流れ' : 'How We Engage'}
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed text-center max-w-[600px] mx-auto">
                {language === 'ja'
                  ? '初回の無料壁打ちから始まり、貴社の状況に応じたスコープでプロジェクトを設計します。'
                  : 'Starting from a free session, we design the project scope around your situation.'}
              </p>
            </div>
            <div className="bg-white rounded-md px-6 md:px-10 py-8 shadow-sm border border-zinc-100">
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
                      <p className="text-xs text-zinc-400 font-roboto">
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

          {/* 発信・知見 */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                Knowledge
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center">
                {language === 'ja'
                  ? '私たちの知見・発信'
                  : 'Our Thinking & Insights'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  labelJa: 'AI導入の失敗パターン5選',
                  labelEn: '5 Common AI Rollout Failures',
                  tagJa: 'ナレッジ',
                  tagEn: 'Knowledge',
                },
                {
                  labelJa: 'ホスピタリティ×DXの現在地',
                  labelEn: 'Hospitality × DX: Where We Are Now',
                  tagJa: 'コラム',
                  tagEn: 'Column',
                },
                {
                  labelJa: '現場定着を左右する3つの要素',
                  labelEn: '3 Factors That Determine Adoption',
                  tagJa: 'ナレッジ',
                  tagEn: 'Knowledge',
                },
              ].map((item) => (
                <div
                  key={item.labelJa}
                  className="bg-white rounded-md px-6 py-6 shadow-sm border border-zinc-100 flex flex-col gap-y-3"
                >
                  <span className="text-xs font-roboto text-zinc-400 uppercase tracking-wide">
                    {language === 'ja' ? item.tagJa : item.tagEn}
                  </span>
                  <p className="text-sm font-bold text-darkNavy leading-relaxed">
                    {language === 'ja' ? item.labelJa : item.labelEn}
                  </p>
                  <p className="text-xs text-zinc-400 mt-auto">
                    {language === 'ja' ? '準備中' : 'Coming soon'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-darkNavy rounded-md px-8 md:px-12 py-12 text-white text-center items-center">
            <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase">
              Get Started
            </p>
            <p className="text-2xl md:text-3xl font-bold leading-snug">
              {language === 'ja'
                ? 'まずは壁打ちから'
                : 'Start with a Conversation'}
            </p>
            <p className="text-sm leading-relaxed opacity-80 max-w-[520px]">
              {language === 'ja'
                ? '現場DX・AI活用に関するお悩みを、60分の無料セッションでお聞きします。提案・売り込みは一切なし。まずは率直に話しましょう。'
                : 'Share your on-site DX and AI challenges in a free 60-minute session. No pitch, no sales. Just a candid conversation.'}
            </p>
            <Link href={`/${language}/contact`}>
              <Button
                type="button"
                text={
                  language === 'ja'
                    ? '60分無料壁打ちを申し込む →'
                    : 'Book Free 60-Min Session →'
                }
                className="rounded-full bg-white text-darkNavy px-10 py-3 hover:opacity-80 duration-300 font-roboto font-semibold text-sm w-fit"
              />
            </Link>
            <p className="text-xs text-zinc-500">
              {language === 'ja'
                ? 'お問い合わせフォームより「DX・AI支援について」とご記入ください。'
                : 'In the contact form, please write "Regarding DX/AI Support."'}
            </p>
          </div>
        </div>
      </div>

      <BreadCrumbs
        language={language}
        crumbs={[
          { labelJa: '事業内容', labelEn: 'Services', href: '/services' },
          {
            labelJa: '現場DX・AI導入支援',
            labelEn: 'DX & AI Implementation',
            href: '/dx-ai',
          },
        ]}
      />
    </>
  )
}
