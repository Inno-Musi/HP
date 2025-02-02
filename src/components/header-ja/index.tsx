'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkCompanyName } from '../link-company-name'
import { LinkSwitchLanguage } from '../link-switch-language'
import { links } from './_assets/const/links'
import { HeaderSp } from './_components/header-sp'

export const HeaderJa = () => {
  const pathname = usePathname()
  const restPath = pathname.split('/').slice(2).join('/')

  return (
    <header className="h-16 border-b border-gray flex items-center px-5 md:px-6 shadow justify-between sticky top-0 z-50 bg-white">
      <LinkCompanyName />
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
        <LinkSwitchLanguage switchTo="en" restPath={restPath} />
      </div>
      <div className="flex items-center gap-x-4 md:hidden">
        <LinkSwitchLanguage switchTo="en" restPath={restPath} />
        <HeaderSp restPath={restPath} />
      </div>
    </header>
  )
}
