import { BreadCrumbs } from '@/components/bread-crumbs'

type Props = {
  params: Promise<{ language: 'ja' | 'en' }>
}

export default async function ServicesPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div>Services Page</div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '事業内容',
            labelEn: 'Services',
            href: `/${language}/services`,
          },
        ]}
      />
    </>
  )
}
