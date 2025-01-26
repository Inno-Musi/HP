import { SectionContact } from '@/features/root/_components/section-contact'
import { SectionFv } from '@/features/root/_components/section-fv'
import { SectionNews } from '@/features/root/_components/section-news'
import { SectionServices } from '@/features/root/_components/section-services'

type Props = {
  params: Promise<{
    language: 'en' | 'ja'
  }>
}

export default async function HomePage({ params }: Props) {
  const { language } = await params

  return (
    <div className="pb-[100px] flex flex-col gap-y-12 lg:gap-y-20">
      <SectionFv language={language} />
      <SectionServices language={language} />
      <SectionNews language={language} />
      <SectionContact language={language} />
    </div>
  )
}
