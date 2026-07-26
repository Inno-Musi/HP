import { BreadCrumbs } from '@/components/bread-crumbs'
import { GeometricBackground } from '@/components/geometric-background'
import { FormMaterial } from '@/features/materials/_components/form-material'
import { buildMetadata } from '@/lib/metadata'

type Props = {
  params: Promise<{ language: 'ja' | 'en' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return buildMetadata({
      language,
      path: 'materials',
      title: '会社紹介資料ダウンロード | 株式会社MUSICO',
      description:
        '社員食堂・オフィスカフェ・エグゼクティブダイニングの運営実績や支援範囲をまとめた、株式会社MUSICOの会社紹介資料をダウンロードいただけます。',
    })
  }

  return buildMetadata({
    language,
    path: 'materials',
    title: 'Download Company Profile | MUSICO Inc.',
    description:
      'Download the MUSICO Inc. company profile — our track record and scope across employee dining, office cafés, and executive dining.',
  })
}

const BULLETS = {
  ja: [
    '外資・大手企業でのオフィスカフェ／社員食堂／エグゼクティブダイニングの運営実績',
    '企画・立ち上げから日々の運営・改善までの支援範囲',
    'ホスピタリティ業界向けAI/DX、人材支援を含む事業領域の全体像',
  ],
  en: [
    'Track record across office cafés, employee dining, and executive dining for global and large enterprises',
    'Scope of support — from planning and launch through daily operations and improvement',
    'The full picture of our business areas, including hospitality AI/DX and talent solutions',
  ],
} as const

export default async function MaterialsPage({ params }: Props) {
  const { language } = await params
  const isJa = language === 'ja'

  return (
    <>
      <GeometricBackground className="fixed" />
      <div className="py-[100px] md:py-[140px] px-4">
        <div className="max-w-[800px] mx-auto flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4 text-center">
            <h1 className="text-2xl md:text-3xl font-display text-darkNavy">
              {isJa ? '会社紹介資料ダウンロード' : 'Download Company Profile'}
            </h1>
            <p className="text-sm md:text-base leading-7 md:leading-8 text-zinc-700">
              {isJa
                ? 'MUSICOの実績と支援範囲をまとめた会社紹介資料です。まずは情報収集から、という段階でもお気軽にご利用ください。'
                : 'A company profile covering our track record and scope of support. Feel free to use it even if you are only gathering information at this stage.'}
            </p>
          </div>

          <ul className="bg-paper rounded-md px-6 py-6 md:px-8 md:py-7 flex flex-col gap-y-3">
            {BULLETS[language].map((text) => (
              <li
                key={text}
                className="text-sm md:text-base leading-relaxed text-darkNavy flex gap-x-3"
              >
                <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-brass shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <FormMaterial language={language} />
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '会社紹介資料',
            labelEn: 'Company Profile',
            href: '/materials',
          },
        ]}
      />
    </>
  )
}
