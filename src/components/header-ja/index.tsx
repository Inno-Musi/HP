'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from './_assets/const/links'
import { HeaderSp } from './_components/header-sp'

export const HeaderJa = () => {
  const pathname = usePathname()
  const restPath = pathname.split('/').slice(2).join('/')

  return (
    <header className="h-16 border-b border-gray flex items-center px-5 md:px-6 shadow justify-between sticky top-0 z-50">
      <Link href="/ja" className="text-xl">
        MUSICO
      </Link>
      <div className="items-center gap-x-5 hidden md:flex font-semibold">
        {links.map((link) => (
          <Link
            href={`/ja/${link.href}`}
            className="flex flex-col mt-2 items-center group"
            key={link.href}
          >
            <span className="leading-4">{link.text}</span>
            <span className="text-[10px]">{link.subText}</span>
            <span className="h-[1px] w-[0%] bg-darkNavy group-hover:w-[100%] duration-300" />
          </Link>
        ))}
        <Link
          href={`/en/${restPath}`}
          className="border border-darkNavy px-2 py-1"
        >
          English
        </Link>
      </div>
      <HeaderSp />
    </header>
  )
}
