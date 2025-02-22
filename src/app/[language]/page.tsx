import { SectionContact } from '@/features/root/_components/section-contact'
import { SectionFv } from '@/features/root/_components/section-fv'
import { SectionNews } from '@/features/root/_components/section-news'
import { SectionServices } from '@/features/root/_components/section-services'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{
    language: 'en' | 'ja'
  }>
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { language } = await params

  if (language === 'ja') {
    return {
      title: '株式会社MUSICO',
      description:
        '私たちは、企業のコーポレートサービスを支援するオーダーメイドのBPO企業として、経営・財務・ITなどの業務最適化を通じて、効率的で持続可能なビジネス運営に伴走します。',
    }
  }

  return {
    title: 'MUSICO Inc.',
    description:
      'We are a custom-made BPO company that supports corporate services, optimizing operations in management, finance, and IT to ensure efficient and sustainable business operations.',
  }
}

export default async function HomePage({ params }: Props) {
  const { language } = await params

  return (
    <div className="flex flex-col gap-y-12 lg:gap-y-20 bg-zinc-50 overflow-hidden">
      <SectionFv language={language} />
      <SectionServices language={language} />
      <SectionNews language={language} />
      <SectionContact language={language} />
    </div>
  )
}
