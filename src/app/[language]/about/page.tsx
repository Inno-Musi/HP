import { BreadCrumbs } from '@/components/bread-crumbs'
import { TitleMain } from '@/components/title-main'
import {
  overviewsEn,
  overviewsJa,
} from '@/features/about/_assets/const/overviews'
import Image from 'next/image'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return {
      title: '会社概要 | 株式会社MUSICO',
      description: '株式会社MUSICOの会社概要です。',
    }
  }

  return {
    title: 'About Us | MUSICO Inc.',
    description: 'This is the company profile of MUSICO Inc.',
  }
}

const members = [
  {
    nameJa: '瀬本 頼一',
    nameEn: 'Yorikazu Semoto',
    titleJa: '代表取締役',
    titleEn: 'Representative Director',
    bioJa:
      '立教大学卒業後、株式会社オリエンタルランドにてテーマパークF&B事業・アグリビジネスに7年間従事。2022年、株式会社MUSICOを創業。「Innovating Hospitality, End to End」をミッションに、ホスピタリティ領域の戦略・空間・運用を一気通貫で支援している。',
    bioEn:
      'After graduating from Rikkyo University, spent 7 years at Oriental Land Co. in theme park F&B operations and agribusiness. Founded MUSICO Inc. in 2022. Under the mission "Innovating Hospitality, End to End," he leads end-to-end support across strategy, space, and operations in the hospitality domain.',
    imageSrc: 'https://images.wantedly.com/i/PVjgi76',
  },
  {
    nameJa: '石黒 啓介',
    nameEn: 'Keisuke Ishiguro',
    titleJa: '社長室 Director',
    titleEn: "Director, President's Office",
    bioJa:
      '早稲田大学ビジネススクール（MBA）修了。株式会社オリエンタルランドにてフード開発・農園事業を経験後、Ridgelinezにてシニアコンサルタントとして大手企業のDX・基幹システム刷新を牽引。2025年よりMUSICOに参画し、事業戦略・営業・バックオフィス全般を統括。',
    bioEn:
      'Completed MBA at Waseda Business School. After experience in food development and farm operations at Oriental Land Co., led DX and core system transformation projects as Senior Consultant at Ridgelinez. Joined MUSICO in 2025, overseeing business strategy, sales, and back-office operations.',
    imageSrc: '/ishiguro.jpg',
  },
]

export default async function AboutPage({ params }: Props) {
  const { language } = await params
  const overviews = language === 'ja' ? overviewsJa : overviewsEn

  return (
    <>
      <div className="bg-zinc-50">
        <div className="max-w-[calc(100vw-32px)] mx-auto py-16 md:py-20 flex flex-col gap-y-16 lg:gap-y-24">
          {/* 経営理念 */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <TitleMain
              titleJa="経営理念"
              titleEn="Philosophy"
              language={language}
            />
            <div className="flex flex-col gap-y-6 text-darkNavy">
              <p className="text-2xl md:text-3xl font-bold leading-snug">
                {language === 'ja'
                  ? 'Innovating Hospitality, End to End'
                  : 'Innovating Hospitality, End to End'}
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                {language === 'ja'
                  ? '私たちは、ホスピタリティをデザインするイノベーション・ファームです。戦略策定に留まらず、実行と成果創出にコミットするコンサルティング＆ソリューションパートナーとして、食・空間・体験の領域を横断しながらクライアントの事業成長を力強く後押しします。'
                  : "We are an innovation firm that designs hospitality. As a consulting and solution partner committed not just to strategy formulation but to execution and results, we support our clients' business growth across the domains of food, space, and experience."}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                {[
                  {
                    ja: '変化を機会と捉え\n事業成長を実現する',
                    en: 'Turn Change into\nOpportunity',
                  },
                  {
                    ja: 'アイデアを現実にし\n着実に成果を残す',
                    en: 'Turn Ideas into\nTangible Results',
                  },
                  {
                    ja: 'ホスピタリティ × AI で\n新たな価値を創造する',
                    en: 'Create New Value with\nHospitality × AI',
                  },
                ].map((item) => (
                  <div
                    key={item.ja}
                    className="bg-white rounded-md px-6 py-5 shadow-sm border border-zinc-100"
                  >
                    <p className="text-darkNavy font-bold text-base leading-relaxed whitespace-pre-line">
                      {language === 'ja' ? item.ja : item.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 会社概要 */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <TitleMain
              titleJa="会社概要"
              titleEn="Company Overview"
              language={language}
            />
            <div className="flex flex-col gap-y-6 lg:gap-y-8 w-full bg-white px-4 md:px-10 py-6 md:py-12 rounded-md">
              {overviews.map((overview) => (
                <div
                  key={overview.label}
                  className="flex flex-col gap-y-2 lg:flex-row lg:items-center border-b pb-2 border-gray"
                >
                  <p className="lg:w-[250px] shrink-0 text-darkNavy font-bold text-xl lg:ml-4">
                    {overview.label}
                  </p>
                  <div className="text-lg">{overview.content}</div>
                </div>
              ))}
            </div>
          </div>

          {/* メンバー */}
          <div className="flex flex-col gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto">
            <TitleMain
              titleJa="メンバー"
              titleEn="Members"
              language={language}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {members.map((member) => (
                <div
                  key={member.nameJa}
                  className="bg-white rounded-md overflow-hidden shadow-sm"
                >
                  <div className="relative aspect-[4/3] bg-zinc-100">
                    {member.imageSrc ? (
                      <Image
                        src={member.imageSrc}
                        alt={language === 'ja' ? member.nameJa : member.nameEn}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-300 text-sm">
                        Photo Coming Soon
                      </div>
                    )}
                  </div>
                  <div className="px-6 py-6 flex flex-col gap-y-3">
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                        {language === 'ja' ? member.titleJa : member.titleEn}
                      </p>
                      <p className="text-xl font-bold text-darkNavy">
                        {language === 'ja' ? member.nameJa : member.nameEn}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {language === 'ja' ? member.bioJa : member.bioEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '会社概要',
            labelEn: 'About Us',
            href: `/${language}/about`,
          },
        ]}
      />
    </>
  )
}
