type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export default async function ContactPage({ params }: Props) {
  const { language } = await params
  return (
    <div>
      <h1>{language === 'en' ? 'Contact' : 'お問い合わせ'}</h1>
    </div>
  )
}
