import Image from 'next/image'
import Link from 'next/link'

type Props = {
  language: 'ja' | 'en'
}

export const LinkCompanyName = ({ language }: Props) => {
  return (
    <Link href={`/${language}`} className="flex items-center gap-x-2">
      <Image
        src="/icon-512.png"
        width={512}
        height={512}
        alt="musico"
        className="w-8"
      />
      <Image
        src="/musico-company-name.png"
        width={472}
        height={158}
        alt="musico"
        className="w-20"
      />
    </Link>
  )
}
