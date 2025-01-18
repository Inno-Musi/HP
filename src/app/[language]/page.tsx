import { SectionContact } from '@/features/root/_components/section-contact'
import { SectionNews } from '@/features/root/_components/section-news'

type Props = {
  params: Promise<{
    language: 'en' | 'ja'
  }>
}

export default async function HomePage({ params }: Props) {
  const { language } = await params

  return (
    <div className="pb-[100px] flex flex-col gap-y-[100px]">
      <SectionNews language={language} />
      <SectionContact language={language} />
    </div>
  )
}
