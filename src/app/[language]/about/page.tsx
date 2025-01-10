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
    <div className="max-w-[calc(100vw-32px)] mx-auto py-14 flex flex-col gap-y-10">
      <TitleMain titleJa="会社概要" titleEn="About Us" language={language} />
      <div className="flex flex-col gap-y-4 max-w-[1000px] w-full mx-auto">
        {overviews.map((overview) => (
          <div
            key={overview.label}
            className="flex items-center border-b pb-2 border-gray"
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
