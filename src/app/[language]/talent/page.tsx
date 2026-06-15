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
      title: '人材支援 | 株式会社MUSICO',
      description:
        '人材紹介会社ではなく、人材課題ソリューションファーム。中立コンサルから入り、採用・育成・派遣・業務委託・業務再設計を組み合わせて根本解決します。MUSICOの注力領域。',
    }
  }
  return {
    title: 'Talent Solutions | MUSICO Inc.',
    description:
      'Not a staffing agency — a talent solutions firm. Starting from a neutral diagnosis, we combine hiring, development, staffing, outsourcing, and workflow redesign to solve at the root.',
  }
}

const painPoints = [
  {
    ja: '採用ありきで動いてしまい、結果的に何も変わっていない',
    en: 'Hired more people, but the underlying problem never changed',
  },
  {
    ja: '人材紹介会社の提案が、事業フェーズと合っていない',
    en: "Staffing agency proposals don't fit our business stage",
  },
  {
    ja: '育成・派遣・業務委託のどれが最適か、判断材料が足りない',
    en: 'Not enough information to choose between training, staffing, or outsourcing',
  },
  {
    ja: 'ホスピタリティに精通した中立アドバイザーが社内にいない',
    en: 'No neutral advisor on staff who understands the hospitality context',
  },
  {
    ja: 'グローバル / バイリンガル人材の調達ルートが限られている',
    en: 'Channels for sourcing global and bilingual talent are limited',
  },
  {
    ja: '採用・育成・定着のどこにボトルネックがあるか分析できていない',
    en: "Can't pinpoint whether the bottleneck is hiring, development, or retention",
  },
]

const approachSteps = [
  {
    step: '01',
    titleJa: '中立診断',
    titleEn: 'Neutral Diagnosis',
    descJa:
      '事業状況・組織課題・既存リソースを多面的にヒアリング。「本当に人材を増やすべきか」「採用ではなく業務再設計で解けないか」までを含めて、根本課題を見極めます。',
    descEn:
      'We interview across business situation, organizational challenges, and existing resources — including whether you should actually hire more people, or whether the problem dissolves through workflow redesign instead.',
  },
  {
    step: '02',
    titleJa: '最適手段の設計',
    titleEn: 'Designing the Right Mix',
    descJa:
      '採用 / 育成 / 派遣 / 業務委託 / 業務再設計 の中から、最も筋のいい手段を組み合わせて提示。短期と中長期、コストと効果のバランスを設計します。',
    descEn:
      'We present the strongest combination from hiring, development, staffing, outsourcing, and workflow redesign — balancing short-term against long-term, cost against impact.',
  },
  {
    step: '03',
    titleJa: '実行と継続伴走',
    titleEn: 'Execute & Sustain',
    descJa:
      '組み合わせた手段を実装。採用は紹介・派遣・スカウトを使い分け、育成は研修と連携、業務委託は実行チームを稼働。定着まで継続伴走します。',
    descEn:
      'We implement the combined approach — using placement, dispatch, and scouting for hiring, partnering on training, and deploying execution teams for outsourcing. We stay with you through adoption and retention.',
  },
]

const solutionMenu = [
  {
    labelJa: '採用支援',
    labelEn: 'Placement',
    descJa:
      'ホスピタリティ業界に特化した候補者ネットワーク。バイリンガル・グローバル対応も可。',
    descEn:
      'Hospitality-specialized candidate network. Bilingual and global-ready talent available.',
    licenseJa: '有料職業紹介 13-ユ-319136',
    licenseEn: 'Paid placement license 13-ユ-319136',
  },
  {
    labelJa: '派遣',
    labelEn: 'Dispatch',
    descJa: 'シーズン・繁忙期の柔軟な人材配置。即戦力を即時投入できます。',
    descEn:
      'Flexible staffing for seasonal peaks. Skilled workers deployed immediately.',
    licenseJa: '労働者派遣 派13-318465',
    licenseEn: 'Worker dispatch license 派13-318465',
  },
  {
    labelJa: '業務委託 / BPO',
    labelEn: 'Outsourcing / BPO',
    descJa:
      'MUSICOチームが現場業務を巻き取って実行。属人化を解消し、業務をスケール化します。',
    descEn:
      'MUSICO team takes over operations end-to-end — dissolving individual dependencies and scaling the work.',
    licenseJa: '',
    licenseEn: '',
  },
  {
    labelJa: '育成・研修',
    labelEn: 'Development & Training',
    descJa:
      'ホスピタリティ業界の現場知見を持つメンバーが研修を設計。OJTから体系研修まで対応。',
    descEn:
      'Training designed by people with hospitality floor experience — from OJT to structured programs.',
    licenseJa: '',
    licenseEn: '',
  },
  {
    labelJa: '業務再設計',
    labelEn: 'Workflow Redesign',
    descJa:
      '「人材を増やす」前に、業務そのものを見直す。AI/DX領域とも連携可能です。',
    descEn:
      'Before adding people, redesign the work itself — coordinating with our AI/DX practice when relevant.',
    licenseJa: '',
    licenseEn: '',
  },
]

const strengths = [
  {
    titleJa: '中立アドバイザリー',
    titleEn: 'Neutral Advisory',
    descJa:
      '紹介・派遣・委託のサービスをすべて提供できる立場ながら、「採用しない」という結論も出せる中立性。サービスを売るために課題を狭く定義しません。',
    descEn:
      'We can provide placement, dispatch, and outsourcing — yet we are willing to conclude "do not hire." We do not narrow the problem to fit what we sell.',
  },
  {
    titleJa: 'ホスピタリティ業界の現場知見',
    titleEn: 'Hospitality Operations Expertise',
    descJa:
      'F&B・テーマパーク・外資金融の現場経験を持つメンバーが、業務文脈を深く理解した上で診断します。机上の理論ではなく、現場で動く打ち手を提示します。',
    descEn:
      'Our team brings hands-on experience from F&B, theme parks, and global financial environments — diagnosing with deep understanding of operational context, not just theory.',
  },
  {
    titleJa: 'ワンストップ実行力',
    titleEn: 'End-to-End Execution',
    descJa:
      '紹介・派遣・委託・育成・業務再設計まで、診断結果に応じてすべて自社で実行可能。複数ベンダーの調整負担なく、責任ある一本の窓口で進められます。',
    descEn:
      'From placement, dispatch, outsourcing, training, to workflow redesign — we execute all in-house based on the diagnosis. One accountable point of contact, no multi-vendor coordination burden.',
  },
]

export default async function TalentPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-zinc-50">
        {/* Hero */}
        <div className="relative bg-darkNavy text-white overflow-hidden">
          <Image
            src="/talent-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darkNavy via-darkNavy/85 to-darkNavy/40" />
          <div className="relative max-w-[calc(100vw-32px)] mx-auto py-20 md:py-28">
            <div className="flex flex-col gap-y-4 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
              <div className="flex items-center gap-x-3">
                <span className="inline-block px-2 py-1 bg-white text-darkNavy text-[10px] font-roboto font-semibold tracking-widest rounded">
                  FOCUS
                </span>
                <p className="text-xs md:text-sm font-roboto tracking-widest text-zinc-300 uppercase font-semibold">
                  Talent × Hospitality
                </p>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight whitespace-pre-line">
                {language === 'ja'
                  ? '人材紹介会社では、\nありません。'
                  : 'We are not\na staffing agency.'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-200 max-w-[640px]">
                {language === 'ja'
                  ? '「人を増やす」ことだけが答えとは限りません。私たちは課題そのものを見極め、採用・育成・派遣・業務委託・業務再設計を組み合わせて、ホスピタリティ業界の人材課題を根本から解決します。'
                  : "Adding headcount isn't always the answer. We diagnose the real problem first, then combine hiring, development, staffing, outsourcing, and workflow redesign to solve hospitality's talent challenges at the root."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href={`/${language}/contact`}>
                  <Button
                    type="button"
                    text={
                      language === 'ja'
                        ? '無料診断を申し込む'
                        : 'Book a Free Diagnosis'
                    }
                    className="rounded-full bg-white text-darkNavy px-8 py-3 hover:opacity-80 duration-300 font-roboto text-sm font-semibold w-fit"
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
                    className="rounded-full border border-white text-white px-8 py-3 hover:bg-white hover:text-darkNavy duration-300 font-roboto text-sm font-semibold w-fit"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[calc(100vw-32px)] mx-auto py-16 md:py-20 flex flex-col gap-y-20 lg:gap-y-28">
          {/* Vision / Our Stance */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                Our Stance
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center whitespace-pre-line leading-snug">
                {language === 'ja'
                  ? '「人材」ではなく、\n「人材課題」を解く。'
                  : 'We solve the talent problem —\nnot just supply talent.'}
              </h2>
            </div>
            <div className="flex flex-col gap-y-3 text-base md:text-lg leading-relaxed text-darkNavy max-w-[720px] mx-auto">
              <p>
                {language === 'ja'
                  ? '業界の人材会社は、サービスを売る構造上、「採用ありき」「研修ありき」で課題を切り取りがちです。本来は人材を増やさなくても解ける課題なのに、最初から人材ソリューションが前提として提示されます。'
                  : "Staffing agencies are structurally biased — they have to sell their service, so they frame the problem as 'hiring-first' or 'training-first.' Problems that could be solved without adding people get presented as talent problems from the start."}
              </p>
              <p>
                {language === 'ja'
                  ? '私たちは、その逆を行きます。クライアントの人材課題を中立に診断し、採用 / 育成 / 派遣 / 業務委託 / 業務再設計の中から、最も筋のいい打ち手を組み合わせて返す。結論として「採用しない方が良い」という結論を出すこともあります。'
                  : 'We do the opposite. We diagnose talent problems neutrally and return the strongest combination from hiring, development, staffing, outsourcing, and workflow redesign. Sometimes the conclusion is "do not hire."'}
              </p>
              <p>
                {language === 'ja'
                  ? '人材紹介会社ではなく、人材課題ソリューションファーム。それが私たちの立ち位置です。'
                  : 'Not a staffing agency — a talent solutions firm. That is our position.'}
              </p>
            </div>
          </div>

          {/* Pain Points */}
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

          {/* Difference: vs. typical staffing agency */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                The Difference
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center">
                {language === 'ja'
                  ? '人材会社と、人材課題ソリューションファームの違い'
                  : 'Staffing Agency vs. Talent Solutions Firm'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Typical staffing agency */}
              <div className="flex flex-col gap-y-3 bg-zinc-100 rounded-md px-6 py-6 border border-zinc-200">
                <p className="text-xs font-roboto tracking-widest text-zinc-500 uppercase font-semibold">
                  {language === 'ja'
                    ? '一般的な人材会社'
                    : 'Typical Staffing Agency'}
                </p>
                <p className="text-darkNavy font-bold text-lg">
                  {language === 'ja'
                    ? '人材紹介 / 派遣 / 研修 ありき'
                    : 'Placement / Dispatch / Training — first'}
                </p>
                <ul className="flex flex-col gap-y-2 text-sm text-zinc-700 leading-relaxed">
                  <li>
                    {language === 'ja'
                      ? '・提案できる手段が自社サービスに限られる'
                      : '・Solutions limited to what the agency sells'}
                  </li>
                  <li>
                    {language === 'ja'
                      ? '・課題と手段の不一致が起きやすい'
                      : '・Problem and solution often misaligned'}
                  </li>
                  <li>
                    {language === 'ja'
                      ? '・「採用しない」という結論は出てこない'
                      : '・Cannot conclude "do not hire"'}
                  </li>
                </ul>
              </div>
              {/* MUSICO */}
              <div className="flex flex-col gap-y-3 bg-white rounded-md px-6 py-6 border-2 border-darkNavy shadow-sm">
                <p className="text-xs font-roboto tracking-widest text-darkNavy uppercase font-semibold">
                  MUSICO
                </p>
                <p className="text-darkNavy font-bold text-lg">
                  {language === 'ja'
                    ? '人材課題の中立診断から'
                    : 'Starts with a neutral diagnosis'}
                </p>
                <ul className="flex flex-col gap-y-2 text-sm text-zinc-700 leading-relaxed">
                  <li>
                    {language === 'ja'
                      ? '・採用 / 育成 / 派遣 / 委託 / 業務再設計の組合せ'
                      : '・Combines hiring, training, staffing, outsourcing, redesign'}
                  </li>
                  <li>
                    {language === 'ja'
                      ? '・課題から逆算した最適手段を提示'
                      : '・Solutions reverse-engineered from the problem'}
                  </li>
                  <li>
                    {language === 'ja'
                      ? '・「採用は不要」という結論もあり得る'
                      : '・"Do not hire" is a valid conclusion'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                Our Approach
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center">
                {language === 'ja' ? '支援の進め方' : 'How We Work'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {approachSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="flex flex-col gap-y-3 bg-white rounded-md px-6 py-8 shadow-sm border border-zinc-100 relative"
                >
                  {index < approachSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 z-10 text-zinc-300 text-xl font-bold">
                      →
                    </div>
                  )}
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

          {/* Solution Menu */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase text-center">
                Solution Menu
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-darkNavy text-center">
                {language === 'ja'
                  ? '私たちが扱う、5つの打ち手'
                  : 'Five Solutions in Our Toolkit'}
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed text-center max-w-[600px] mx-auto">
                {language === 'ja'
                  ? '診断結果に応じて、これらを組み合わせて提案・実行します。'
                  : 'Based on the diagnosis, we combine and execute these solutions.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutionMenu.map((item) => (
                <div
                  key={item.labelJa}
                  className="flex flex-col gap-y-2 bg-white rounded-md px-6 py-6 shadow-sm border border-zinc-100"
                >
                  <p className="text-darkNavy font-bold text-base">
                    {language === 'ja' ? item.labelJa : item.labelEn}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === 'ja' ? item.descJa : item.descEn}
                  </p>
                  {item.licenseJa && (
                    <p className="text-[10px] font-roboto text-zinc-400 mt-auto pt-2 tracking-wide">
                      {language === 'ja' ? item.licenseJa : item.licenseEn}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why MUSICO */}
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

          {/* CTA */}
          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-darkNavy rounded-md px-8 md:px-12 py-12 text-white text-center items-center">
            <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase">
              Get Started
            </p>
            <p className="text-2xl md:text-3xl font-bold leading-snug">
              {language === 'ja'
                ? 'まずは、人材課題の中立診断から。'
                : 'Start with a Neutral Diagnosis.'}
            </p>
            <p className="text-sm leading-relaxed opacity-80 max-w-[560px]">
              {language === 'ja'
                ? '人材を増やすべきか、業務を見直すべきか、それすら分からない段階でも結構です。30分の無料診断セッションで、課題の構造を一緒に整理しましょう。結論として「採用は不要」になることもあります。'
                : "Even if you don't yet know whether to hire or to redesign the work, that's fine. In a free 30-minute diagnosis session, let's structure the problem together. The conclusion may well be \"do not hire.\""}
            </p>
            <Link href={`/${language}/contact`}>
              <Button
                type="button"
                text={
                  language === 'ja'
                    ? '無料診断を申し込む →'
                    : 'Book a Free Diagnosis →'
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
          { labelJa: '人材支援', labelEn: 'Talent Solutions', href: '/talent' },
        ]}
      />
    </>
  )
}
