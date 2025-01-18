import { SectionContact } from '@/features/root/_components/section-contact'

type Props = {
  params: Promise<{
    language: 'en' | 'ja'
  }>
}

export default async function HomePage({ params }: Props) {
  const { language } = await params

  return (
    <div className="pb-[100px]">
      <SectionContact language={language} />
    </div>
  )
}
