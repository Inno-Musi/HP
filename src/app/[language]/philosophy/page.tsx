import { SectionFv } from '@/features/philosophy/_components/section-fv'

type Props = {
  params: Promise<{
    language: 'en' | 'ja'
  }>
}

export default async function PhilosophyPage({ params }: Props) {
  const { language } = await params

  return (
    <div>
      <SectionFv language={language} />
    </div>
  )
}
