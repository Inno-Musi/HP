import Image from 'next/image'
import Link from 'next/link'

export const LinkCompanyName = () => {
  return (
    <Link href="/ja" className="flex items-center gap-x-2">
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
