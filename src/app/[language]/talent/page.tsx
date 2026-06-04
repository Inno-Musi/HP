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
      title: '人材支援 | 株式会社MUSICO',
      description:
        'ホスピタリティ領域に特化した人材紹介・派遣サービス。採用要件の定義から定着支援まで、現場を知るチームが伴走します。有料職業紹介 13-ユ-319136 / 労働者派遣 派13-318465。',
    }
  }
  return {
    title: 'Talent Support | MUSICO Inc.',
    description:
      'Staffing and placement services specialized in hospitality — from defining hiring requirements to supporting retention, with a team that knows the floor. License: 13-ユ-319136 / 派13-318465.',
  }
}

const painPoints = [
  {
    ja: 'ホスピタリティ業界に精通した人材がなかなか採用できない',
    en: 'Hard to find candidates who truly understand the hospitality industry',
  },
  {
    ja: '採用しても定着せず、育成コストが無駄になっている',
    en: "New hires don't stay — training investment keeps going to waste",
  },
  {
    ja: '求人票を出しても応募が集まらず、採用活動が長期化している',
    en: 'Job postings attract few applicants — the search drags on',
  },
  {
    ja: 'グローバル企業向けにバイリンガルのホスピタリティ人材が必要',
    en: 'Need bilingual hospitality talent for a global corporate environment',
  },
  {
    ja: 'シーズン・繁忙期に合わせた柔軟な人材配置が難しい',
    en: 'Flexible staffing for seasonal peaks is difficult to manage',
  },
  {
    ja: '業務委託・派遣・紹介の違いが分からず、最適な形を選べていない',
    en: "Unclear on the difference between outsourcing, dispatch, and placement — can't choose the right model",
  },
]

const valueSteps = [
  {
    step: '01',
    titleJa: '採用要件の定義',
    titleEn: 'Defining Hiring Requirements',
    descJa:
      '現場の業務内容・必要スキル・カルチャーフィットを整理し、「どんな人を採るべきか」を明確化します。採用ペルソナの設計から始めます。',
    descEn:
      'Clarifying job duties, required skills, and culture fit to define exactly who you should be hiring. Starting with candidate persona design.',
  },
  {
    step: '02',
    titleJa: '候補者マッチング・紹介',
    titleEn: 'Candidate Matching & Placement',
    descJa:
      'ホスピタリティ領域に特化したネットワークを活用し、要件に合った候補者をご紹介。派遣・紹介・業務委託の最適な雇用形態もご提案します。',
    descEn:
      'Leveraging our hospitality-specialized network to introduce matched candidates. We also advise on the optimal employment structure — dispatch, placement, or outsourcing.',
  },
  {
    step: '03',
    titleJa: '入職後の定着支援',
    titleEn: 'Post-Placement Retention Support',
    descJa:
      '採用して終わりではなく、オンボーディング支援・スキルアップ研修・定期面談を通じて定着を促進。長期活躍できる環境づくりを支援します。',
    descEn:
      "We don't stop at placement — we support retention through onboarding assistance, skills training, and regular check-ins to build an environment where people thrive long-term.",
  },
]

const strengths = [
  {
    titleJa: 'ホスピタリティ現場を知るチームが対応',
    titleEn: 'A Team That Knows the Floor',
    descJa:
      'F&B・テーマパーク・外資金融の現場経験を持つメンバーが採用支援を行います。職務内容を深く理解した上でマッチングするため、ミスマッチが起きにくい。',
    descEn:
      'Our team has hands-on experience in F&B, theme parks, and global financial environments. Deep understanding of the work means better matches and fewer mismatches.',
  },
  {
    titleJa: '紹介・派遣・業務委託をワンストップで',
    titleEn: 'Placement, Dispatch & Outsourcing — All in One',
    descJa:
      '有料職業紹介（13-ユ-319136）と労働者派遣（派13-318465）の両ライセンスを保有。状況に応じた最適な雇用形態をご提案します。',
    descEn:
      'Licensed for both paid placement (13-ユ-319136) and worker dispatch (派13-318465) — we recommend the right model for your situation.',
  },
  {
    titleJa: 'グローバル対応の人材ネットワーク',
    titleEn: 'Global-Ready Talent Network',
    descJa:
      'バイリンガル人材・インバウンド対応スタッフ・外資グレードのサービス経験者など、グローバル企業のニーズに応えられる人材ネットワークを持ちます。',
    descEn:
      'Our network includes bilingual talent, inbound-experienced staff, and service professionals with global corporate standards — ready for international work environments.',
  },
]

export default async function TalentPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-zinc-50">
        <div className="bg-darkNavy text-white">
          <div className="max-w-[calc(100vw-32px)] mx-auto py-20 md:py-28">
            <div className="flex flex-col gap-y-4 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
              <p className="text-xs font-roboto tracking-widest text-zinc-400 uppercase">
                Talent Support
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {language === 'ja' ? '人材支援' : 'Talent\nSupport'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-300 max-w-[600px]">
                {language === 'ja'
                  ? 'ホスピタリティ領域に特化した人材紹介・派遣サービス。採用要件の定義から定着支援まで、現場を知るチームが伴走します。'
                  : 'Staffing and placement services specialized in hospitality — from defining hiring requirements to supporting retention, with a team that knows the floor.'}
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
                ? '採用課題・必要な人材像・時期をお聞きし、最適な支援の形をご提案します。提案・売り込みは一切なし。'
                : "Tell us about your hiring challenges, ideal candidate profile, and timeline — we'll propose the right form of support. No pitch, no sales."}
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
          { labelJa: '人材支援', labelEn: 'Talent Support', href: '/talent' },
        ]}
      />
    </>
  )
}
