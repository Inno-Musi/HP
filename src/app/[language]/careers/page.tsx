import { BreadCrumbs } from '@/components/bread-crumbs'
import { Button } from '@/components/button'
import { TitleMain } from '@/components/title-main'
import Link from 'next/link'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return {
      title: '採用情報 | 株式会社MUSICO',
      description:
        '株式会社MUSICOの採用情報です。私たちと一緒にホスピタリティの未来を創りませんか。',
    }
  }

  return {
    title: 'Careers | MUSICO Inc.',
    description:
      'Career opportunities at MUSICO Inc. Join us in shaping the future of hospitality.',
  }
}

const values = [
  {
    titleJa: 'カスタマーファースト',
    titleEn: 'Customer First',
    descJa:
      '「Noと言わず、どうやったらできるか」を徹底し、顧客の卓越性を追求します。',
    descEn:
      'We relentlessly pursue customer excellence by asking "how can we make it work?" rather than saying no.',
  },
  {
    titleJa: 'データドリブン',
    titleEn: 'Data-Driven',
    descJa:
      '気合と根性ではなく、利用ログ・満足度・KPIなどの数字で組織を動かします。',
    descEn:
      'We drive the organization with data — usage logs, satisfaction scores, and KPIs — not gut feel.',
  },
  {
    titleJa: 'AIネイティブ',
    titleEn: 'AI Native',
    descJa: 'AIを前提とした組織設計で、判断速度と実装速度を最大化します。',
    descEn:
      'We maximize decision and implementation speed through AI-native organizational design.',
  },
  {
    titleJa: '迅速な行動',
    titleEn: 'Bias for Action',
    descJa:
      '机上の計画より現場での実装と修正を重視。失敗を恐れず挑戦し続けます。',
    descEn:
      'We value on-the-ground implementation and iteration over desk planning. We embrace failure as part of growth.',
  },
]

export default async function CareersPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="bg-ivory">
        <div className="max-w-[calc(100vw-32px)] mx-auto py-24 md:py-32 flex flex-col gap-y-16 lg:gap-y-24">
          {/* ヒーロー */}
          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <TitleMain
              titleJa="採用情報"
              titleEn="Careers"
              language={language}
            />
            <p className="text-lg md:text-xl leading-relaxed text-darkNavy">
              {language === 'ja'
                ? 'MUSICOは、ホスピタリティとテクノロジーの力で、企業・地域・社会に新しい価値を生み出しています。あなたの経験と情熱を、ここで活かしませんか。'
                : 'MUSICO creates new value for businesses, communities, and society through the power of hospitality and technology. Bring your experience and passion here.'}
            </p>
          </div>

          {/* カルチャー・バリュー */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-display text-darkNavy">
              {language === 'ja' ? 'Our Values' : 'Our Values'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.titleJa}
                  className="bg-paper rounded-md px-6 py-5 shadow-sm border border-hairline"
                >
                  <p className="text-darkNavy font-bold text-base mb-2">
                    {language === 'ja' ? value.titleJa : value.titleEn}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === 'ja' ? value.descJa : value.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 募集職種 */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-display text-darkNavy">
              {language === 'ja' ? '募集職種' : 'Open Positions'}
            </h2>
            <div className="bg-paper rounded-md px-6 md:px-10 py-8 shadow-sm flex flex-col gap-y-6">
              <p className="text-base text-zinc-600 leading-relaxed">
                {language === 'ja'
                  ? '現在、Wantedlyにて募集中のポジションを掲載しています。学生インターン、広報、F&BプロジェクトPMなど多様なポジションでメンバーを募集しています。'
                  : 'We are currently posting open positions on Wantedly. We are recruiting for a variety of roles including student interns, PR, and F&B Project PMs.'}
              </p>
              <Link
                href="https://www.wantedly.com/companies/company_3531768"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="button"
                  text={
                    language === 'ja'
                      ? 'Wantedlyで募集を見る'
                      : 'View Openings on Wantedly'
                  }
                  className="rounded-full bg-darkNavy text-white px-8 py-3 hover:opacity-80 duration-300 font-roboto"
                />
              </Link>
            </div>
          </div>

          {/* 問い合わせ */}
          <div className="flex flex-col gap-y-6 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-darkNavy rounded-md px-8 md:px-12 py-10 text-white">
            <p className="text-xl md:text-2xl font-bold">
              {language === 'ja'
                ? '採用に関するお問い合わせ'
                : 'Recruitment Inquiries'}
            </p>
            <p className="text-sm leading-relaxed opacity-80">
              {language === 'ja'
                ? '募集要項に掲載されていないポジションへのご応募や、採用に関するご質問はお問い合わせフォームよりお気軽にご連絡ください。'
                : 'For applications to positions not listed, or for any recruitment-related questions, please feel free to contact us via the inquiry form.'}
            </p>
            <Link href={`/${language}/contact`}>
              <Button
                type="button"
                text={language === 'ja' ? 'お問い合わせはこちら' : 'Contact Us'}
                className="rounded-full bg-paper text-darkNavy px-8 py-3 hover:opacity-80 duration-300 font-roboto w-fit"
              />
            </Link>
          </div>
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '採用情報',
            labelEn: 'Careers',
            href: `/${language}/careers`,
          },
        ]}
      />
    </>
  )
}
