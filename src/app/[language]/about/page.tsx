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
      description:
        'MUSICOは、ホスピタリティを再設計する "A Hospitality Innovation Firm"。食・空間・運用・テクノロジーを一気通貫で組み立て、ヒトの幸福な時間を仕組みで増やしていきます。',
    }
  }

  return {
    title: 'About Us | MUSICO Inc.',
    description:
      'MUSICO is "A Hospitality Innovation Firm," redesigning hospitality end to end. We weave food, space, operations, and technology into one continuous system to multiply meaningful time — by design.',
  }
}

const members = [
  {
    nameJa: '瀬本 頼一',
    nameEn: 'Yorikazu Semoto',
    titleJa: '代表取締役',
    titleEn: 'Representative Director',
    bioJa:
      '立教大学卒業後、株式会社オリエンタルランドにてテーマパークF&B事業・アグリビジネスに従事。その後、株式会社MUSICOを創業。「Innovating Hospitality, End to End」をミッションに、ホスピタリティ領域の戦略・空間・運用を一気通貫で支援している。',
    bioEn:
      'After graduating from Rikkyo University, worked at Oriental Land Co. in theme park F&B operations and agribusiness, then founded MUSICO Inc. Under the mission "Innovating Hospitality, End to End," he leads end-to-end support across strategy, space, and operations in the hospitality domain.',
    imageSrc: 'https://images.wantedly.com/i/PVjgi76',
  },
  {
    nameJa: '高田 ゆき',
    nameEn: 'Yuki Takada',
    titleJa: '副社長兼CCO',
    titleEn: 'Vice President & CCO',
    bioJa:
      'パリのLe Cordon Bleu・Alain Ducasseで料理哲学と空間演出を学ぶ。帰国後は食・空間・感性による体験価値の構造化・収益化を手がける。MUSICOへ参画し、グローバル金融機関・富裕層向けエグゼクティブ専用ホスピタリティ事業を統括。属人的な体験を再現可能・高収益・定期型のモデルへ設計している。',
    bioEn:
      'Studied culinary philosophy and spatial design at Le Cordon Bleu and Alain Ducasse in Paris. After returning to Japan, she focused on structuring and monetizing experiential value through food, space, and sensibility. At MUSICO, she leads the executive-exclusive hospitality business for global financial institutions and high-net-worth clients — redesigning individual-dependent experiences into reproducible, high-margin, recurring models.',
    imageSrc: '/takada.jpg',
  },
  {
    nameJa: '石黒 啓介',
    nameEn: 'Keisuke Ishiguro',
    titleJa: '執行役員Partner',
    titleEn: 'Executive Officer / Partner',
    bioJa:
      '早稲田大学ビジネススクール（MBA）修了。株式会社オリエンタルランドにてフード開発・農園事業を経験後、Ridgelinezにてシニアコンサルタントとして大手企業のDX・基幹システム刷新を牽引。その後MUSICOに参画し、事業戦略・営業・バックオフィス全般を統括。',
    bioEn:
      'Completed MBA at Waseda Business School. After experience in food development and farm operations at Oriental Land Co., led DX and core system transformation projects as Senior Consultant at Ridgelinez. He then joined MUSICO, overseeing business strategy, sales, and back-office operations.',
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

            {/* Mission tagline + lead + 3 cards */}
            <div className="flex flex-col gap-y-6 text-darkNavy">
              <p className="text-2xl md:text-3xl font-bold leading-snug">
                Innovating Hospitality, End to End
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                {language === 'ja'
                  ? '私たちは、ホスピタリティを再設計する Hospitality Innovation Firm です。食・空間・運用・テクノロジーを一気通貫で組み立てることで、ヒトの幸福な時間を、仕組みで増やしていきます。'
                  : 'We are a Hospitality Innovation Firm, redesigning hospitality end to end. By weaving food, space, operations, and technology into one continuous system, we engineer more meaningful time — by design.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                {[
                  {
                    ja: '現場でつくり\n現場で証明する',
                    en: 'Built on-site\nProven on-site',
                  },
                  {
                    ja: '属人化に頼らず\n個の力を仕組みで磨く',
                    en: 'From individual craft\nto scalable systems',
                  },
                  {
                    ja: '完璧な計画より\n早い実装と早い修正',
                    en: 'Ship early, fix early\nover perfect plans',
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

            {/* WHY */}
            <div className="flex flex-col gap-y-4 pt-8 border-t border-zinc-200 text-darkNavy">
              <div className="flex flex-col gap-y-2">
                <p className="text-xs tracking-[0.2em] font-semibold text-zinc-500">
                  WHY
                </p>
                <p className="text-xl md:text-2xl font-bold leading-snug">
                  {language === 'ja'
                    ? 'ヒトの幸福な時間を、仕組みで増やす。'
                    : 'Multiply meaningful time, by design.'}
                </p>
              </div>
              <div className="flex flex-col gap-y-3 text-base md:text-lg leading-relaxed">
                <p>
                  {language === 'ja'
                    ? '私たちは、ホスピタリティを再設計することで、ヒトの幸福な時間を増やしていきます。'
                    : 'By redesigning hospitality, we set out to bring more meaningful time into the world.'}
                </p>
                <p>
                  {language === 'ja'
                    ? '食、空間、運用、テクノロジー。これらを一気通貫で組み立てることで、属人化したノウハウや再現できない品質を、スケールできる仕組みへと変えていきます。'
                    : 'By weaving food, space, operations, and technology into one continuous system, we transform skills locked in individuals and quality that cannot be reproduced into scalable systems.'}
                </p>
                <p>
                  {language === 'ja'
                    ? 'グローバルエリートから現場の日常まで、関わるすべてのステークホルダーに、より良い時間を届けることが、私たちの目的です。'
                    : 'From global elites to everyday operations on the floor, delivering better time to every stakeholder we serve is our purpose.'}
                </p>
              </div>
            </div>

            {/* HOW */}
            <div className="flex flex-col gap-y-4 pt-8 border-t border-zinc-200 text-darkNavy">
              <div className="flex flex-col gap-y-2">
                <p className="text-xs tracking-[0.2em] font-semibold text-zinc-500">
                  HOW
                </p>
                <p className="text-xl md:text-2xl font-bold leading-snug">
                  {language === 'ja'
                    ? '属人化に頼らず、個の力を仕組みで磨く。'
                    : 'From individual craft to scalable systems.'}
                </p>
              </div>
              <div className="flex flex-col gap-y-3 text-base md:text-lg leading-relaxed">
                <p>
                  {language === 'ja'
                    ? '「属人化したノウハウ」「再現できない品質」「スケールしない仕組み」— 多くの現場で常態化しているこれらの課題を、私たちはハンズオンで設計し、解決します。'
                    : '"Knowledge trapped in individuals," "quality that cannot be reproduced," "systems that do not scale" — these are routine problems on every floor. We tackle them hands-on, by design.'}
                </p>
                <p>
                  {language === 'ja'
                    ? '戦略・空間・運用までを切れ目なく一気通貫で組み立て、現場で実装し、データで検証する。これが私たちの再設計のアプローチです。'
                    : 'Strategy, space, and operations — built as one continuous system, implemented on-site, validated by data. This is our approach to redesign.'}
                </p>
                <p>
                  {language === 'ja'
                    ? '"Noといわず、どうやったらできるか"を起点に、完璧な計画より早い実装と早い修正を選び、現場でつくり、現場で証明していきます。'
                    : 'Starting from "How can we make this work?" instead of "no," we choose fast implementation and fast correction over perfect plans — building on-site, proving on-site.'}
                </p>
              </div>
            </div>

            {/* WHAT / VALUES */}
            <div className="flex flex-col gap-y-4 pt-8 border-t border-zinc-200 text-darkNavy">
              <div className="flex flex-col gap-y-2">
                <p className="text-xs tracking-[0.2em] font-semibold text-zinc-500">
                  WHAT / VALUES
                </p>
                <p className="text-xl md:text-2xl font-bold leading-snug">
                  {language === 'ja'
                    ? '現場でつくり、現場で証明する。'
                    : 'Built on-site. Proven on-site.'}
                </p>
              </div>
              <div className="flex flex-col gap-y-3 text-base md:text-lg leading-relaxed">
                <p>
                  {language === 'ja'
                    ? '私たちは提案にとどまらず、専任チームを持ち、実行までハンズオンで伴走します。'
                    : 'We go beyond proposals — with dedicated teams, we accompany clients hands-on through execution.'}
                </p>
                <p>
                  {language === 'ja'
                    ? 'ハイエンドホスピタリティ、コーポレートフード、ケータリング、AI/DX、地方創生など、複数の実行領域で実績を積み重ね、グローバル金融機関から地域コミュニティまで、多様な現場で成果を共に創り出してきました。'
                    : 'Across multiple execution domains — high-end hospitality, corporate food, catering, AI/DX, regional revitalization — we have delivered tangible results, from global financial institutions to local communities.'}
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { ja: 'カスタマーファースト', en: 'Customer First' },
                  { ja: 'データドリブン', en: 'Data Driven' },
                  { ja: '創造性と革新性', en: 'Creativity & Innovation' },
                  { ja: 'とにかく早く動く', en: 'Move Fast' },
                  { ja: '失敗を恐れない', en: 'No Fear of Failure' },
                  { ja: '優秀なメンバー', en: 'Outstanding People' },
                ].map((v) => (
                  <div
                    key={v.ja}
                    className="bg-white rounded-md px-4 py-3 border border-zinc-100 text-center"
                  >
                    <p className="text-sm md:text-base font-bold text-darkNavy">
                      {language === 'ja' ? v.ja : v.en}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm md:text-base text-zinc-600 mt-2">
                {language === 'ja'
                  ? 'この6つを行動規範に、新しい価値をつくり続けます。'
                  : 'These six guide our conduct as we continue to create new value.'}
              </p>
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
