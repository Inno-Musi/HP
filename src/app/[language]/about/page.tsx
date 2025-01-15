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
    <div className="max-w-[calc(100vw-32px)] mx-auto py-[80px] flex flex-col gap-y-16">
      <TitleMain titleJa="会社概要" titleEn="About Us" language={language} />
      <div className="flex flex-col gap-y-8 max-w-[1000px] w-full mx-auto bg-white px-4 md:px-10 py-8 md:py-12 rounded-md">
        {overviews.map((overview) => (
          <div
            key={overview.label}
            className="flex items-center border-b pb-1 border-gray"
          >
            <p className="w-[250px] text-emerald font-bold text-xl ml-4">
              {overview.label}
            </p>
            <div className="text-lg">{overview.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
