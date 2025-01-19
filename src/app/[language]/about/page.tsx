import { BreadCrumbs } from '@/components/bread-crumbs'
import { TitleMain } from '@/components/title-main'
import {
  overviewsEn,
  overviewsJa,
} from '@/features/about/_assets/const/overviews'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export default async function AboutPage({ params }: Props) {
  const { language } = await params
  const overviews = language === 'ja' ? overviewsJa : overviewsEn

  return (
    <>
      <div className="max-w-[calc(100vw-32px)] mx-auto py-[80px] flex flex-col gap-y-12 lg:gap-y-16">
        <TitleMain titleJa="会社概要" titleEn="About Us" language={language} />
        <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-[800px] lg:max-w-[1000px] w-full mx-auto bg-white px-4 md:px-10 py-6 md:py-12 rounded-md">
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
