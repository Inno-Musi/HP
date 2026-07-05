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
      path: 'executive-dining',
      title:
        'エグゼクティブダイニング運営 | 役員フロア・VIP対応 | 株式会社MUSICO',
      description:
        '米系投資銀行で実績のあるエグゼクティブダイニング（役員食堂・VIPダイニング）の設計・運営。シェフ・サービススタッフの採用育成から会食オペレーションまで、最高水準のホスピタリティを提供します。',
    })
  }
  return buildMetadata({
    language,
    path: 'executive-dining',
    title: 'Executive Dining Operation | MUSICO Inc.',
    description:
      'Executive dining (executive floor and VIP dining) design and operation, proven at a US investment bank. From chef and service-staff hiring and training to full dining operations, we deliver hospitality of the highest standard.',
  })
}

const standards = [
  {
    titleJa: '機密性',
    titleEn: 'Confidentiality',
    descJa:
      '役員・来賓の会話や来客情報を守る運用設計。機密保持を前提としたスタッフ教育と情報管理を徹底します。',
    descEn:
      'Operations designed to protect the conversations and visitor information of executives and guests. We enforce staff training and information handling built on strict confidentiality.',
  },
  {
    titleJa: 'プロトコル遵守',
    titleEn: 'Protocol Adherence',
    descJa:
      '席次・サービス手順・来賓対応の作法を標準化。国際的な会食プロトコルに則った一貫した接遇を提供します。',
    descEn:
      'Standardized seating, service sequence, and guest-handling etiquette. Consistent hospitality that follows international dining protocol.',
  },
  {
    titleJa: '一貫した食とサービスの質',
    titleEn: 'Consistent Food & Service Quality',
    descJa:
      'シェフとサービスチームの内製育成により、担当者が変わっても品質がぶれない体制を構築します。',
    descEn:
      'In-house training of chefs and service teams builds a system where quality never wavers, even as staff change.',
  },
]

const operations = [
  {
    titleJa: 'シェフ・サービススタッフの採用育成',
    titleEn: 'Chef & Service-Staff Hiring and Training',
    descJa:
      '採用から育成までを内製化し、最高水準の食とサービスを担える人材を継続的に確保・維持します。',
    descEn:
      'We handle hiring through training in-house, continuously securing and retaining talent capable of the highest standard of food and service.',
  },
  {
    titleJa: '会食オペレーション設計',
    titleEn: 'Dining Operations Design',
    descJa:
      '少人数の役員会食から来賓を迎える公式会食まで、求められる水準に合わせてオペレーションを設計します。',
    descEn:
      'From small executive lunches to formal dining with distinguished guests, we design operations to the level each occasion demands.',
  },
  {
    titleJa: '外資系投資銀行での実績',
    titleEn: 'Proven at a US Investment Bank',
    descJa:
      '米系投資銀行のエグゼクティブダイニングを運営してきた実績をもとに、ハイエンドな現場の要求に応えます。',
    descEn:
      'Backed by a track record operating executive dining at a US investment bank, we meet the demands of high-end environments.',
  },
]

// Related case study (link into /works).
const works = [
  {
    slug: 'us-ibank-executive-dining',
    titleJa: '米系投資銀行 エグゼクティブダイニング',
    titleEn: 'US Investment Bank — Executive Dining',
    categoryJa: 'エグゼクティブダイニング',
    categoryEn: 'Executive Dining',
  },
]

const faqs = [
  {
    qJa: '役員フロア専用の少人数運営でも依頼できますか？',
    qEn: 'Can you operate a small, executive-floor-only setup?',
    aJa: '可能です。少人数の役員ダイニングから対応します。求められる水準に合わせて体制を設計します。',
    aEn: 'Yes. We handle everything from small executive dining. We design the operating model to the level required.',
  },
  {
    qJa: '機密性の高い会食に対応できますか？',
    qEn: 'Can you handle highly confidential dining?',
    aJa: '機密保持を前提としたスタッフ教育・運用設計を行います。外資系金融機関での実績があります。',
    aEn: 'We conduct staff training and operational design built on confidentiality. We have a track record at a global financial institution.',
  },
  {
    qJa: 'シェフやサービススタッフはどう確保しますか？',
    qEn: 'How do you secure chefs and service staff?',
    aJa: '採用から育成まで内製で行い、一貫した品質を担保します。',
    aEn: 'We handle hiring through training in-house, ensuring consistent quality.',
  },
  {
    qJa: '相談だけでも費用はかかりますか？',
    qEn: 'Is the initial consultation free?',
    aJa: '初回のご相談は無料です。提案・売り込みは一切ありません。',
    aEn: 'The first consultation is free, with no pitch and no sales.',
  },
]

export default async function ExecutiveDiningPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <JsonLd
        data={serviceJsonLd(language, {
          nameJa: 'エグゼクティブダイニング',
          nameEn: 'Executive Dining',
          path: 'executive-dining',
          descriptionJa:
            '米系投資銀行で実績のあるエグゼクティブダイニング（役員食堂・VIPダイニング）の設計・運営。シェフ・サービススタッフの採用育成から会食オペレーションまで、最高水準のホスピタリティを提供します。',
          descriptionEn:
            'Executive dining (executive floor and VIP dining) design and operation, proven at a US investment bank. From chef and service-staff hiring and training to full dining operations, we deliver hospitality of the highest standard.',
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
                {language === 'ja' ? 'エグゼクティブ\nダイニング' : 'Executive\nDining'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-zinc-200 max-w-[620px]">
                {language === 'ja'
                  ? '役員フロア・VIP対応のエグゼクティブダイニングを、設計から運営まで一気通貫で。機密性・プロトコル・食の質を同時に満たす、最高水準のホスピタリティを提供します。'
                  : 'Executive dining for executive floors and VIP guests, from design through operation. We deliver hospitality of the highest standard — confidentiality, protocol, and food quality met at once.'}
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
                  ? '米系投資銀行のエグゼクティブダイニングで実証。'
                  : 'Proven at a US investment bank executive dining.'}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="max-w-[calc(100vw-32px)] mx-auto py-24 md:py-32 flex flex-col gap-y-20 lg:gap-y-28">
          {/* What is Executive Dining */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Definition
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja'
                      ? 'エグゼクティブダイニングとは'
                      : 'What Is Executive Dining?'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="bg-paper rounded-md px-6 md:px-10 py-8 md:py-10 border border-hairline">
              <p className="text-base md:text-lg text-ink/80 leading-relaxed">
                {language === 'ja'
                  ? 'エグゼクティブダイニングとは、役員・来賓向けに提供される最高水準の社内食体験であり、機密性・プロトコル・食の質が同時に求められる領域です。一般の社員食堂とは異なり、会話の秘匿性、来賓を迎える作法、そして料理とサービスの一貫した品質を、どの場面でも崩さず提供することが本質です。'
                  : 'Executive dining is the highest-standard in-house dining experience provided for executives and distinguished guests — a domain where confidentiality, protocol, and food quality are demanded at the same time. Unlike a general employee cafeteria, its essence is delivering confidentiality of conversation, the etiquette of receiving guests, and consistent quality of food and service without compromise on any occasion.'}
              </p>
            </div>
          </div>

          {/* Required standards */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Standards
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darkNavy text-center">
                  <MaskReveal delay={0.05}>
                    {language === 'ja' ? '求められる水準' : 'The Standard Required'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {standards.map((s) => (
                <div
                  key={s.titleJa}
                  className="flex flex-col gap-y-3 bg-paper rounded-md px-6 py-8 border border-hairline"
                >
                  <p className="text-darkNavy font-bold text-lg">
                    {language === 'ja' ? s.titleJa : s.titleEn}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {language === 'ja' ? s.descJa : s.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MUSICO operations */}
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
                      : 'How MUSICO Operates'}
                  </MaskReveal>
                </h2>
                <div className="w-10 h-px bg-brass mt-1" />
              </div>
            </Reveal>
            <div className="flex flex-col gap-y-4">
              {operations.map((o) => (
                <div
                  key={o.titleJa}
                  className="flex flex-col md:flex-row md:items-start gap-4 bg-paper rounded-md px-6 py-6 border border-hairline"
                >
                  <div className="md:w-[240px] shrink-0">
                    <p className="text-darkNavy font-bold text-base">
                      {language === 'ja' ? o.titleJa : o.titleEn}
                    </p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {language === 'ja' ? o.descJa : o.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Case study */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <Reveal>
              <div className="flex flex-col items-center gap-y-3">
                <p className="text-sm font-roboto tracking-widest text-brass uppercase text-center">
                  Case Studies
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

          {/* FAQ */}
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

          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-darkNavy rounded-md px-8 md:px-12 py-12 text-white text-center items-center">
            <p className="text-2xl md:text-3xl font-display">
              {language === 'ja'
                ? 'まずは無料相談から'
                : 'Start with a Free Consultation'}
            </p>
            <p className="text-sm leading-relaxed opacity-80 max-w-[520px]">
              {language === 'ja'
                ? 'エグゼクティブダイニングの課題をヒアリングし、最適な運営体制をご提案します。提案・売り込みは一切なし。まずは率直に話しましょう。'
                : "We'll listen to your executive dining challenges and propose the right operating model. No pitch, no sales — just a candid conversation."}
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
            labelJa: 'エグゼクティブダイニング',
            labelEn: 'Executive Dining',
            href: '/executive-dining',
          },
        ]}
      />
    </>
  )
}
