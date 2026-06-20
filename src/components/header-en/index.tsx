'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkCompanyName } from '../link-company-name'
import { LinkSwitchLanguage } from '../link-switch-language'
import { links } from './_assets/const/links'
import { HeaderSp } from './_components/header-sp'

export const HeaderEn = () => {
  const pathname = usePathname()
  const restPath = pathname.split('/').slice(2).join('/')

  return (
    <header className="h-16 w-full border-b border-gray flex items-center px-5 md:px-6 shadow justify-between fixed top-0 z-50 bg-paper">
      <LinkCompanyName language="en" />
      <div className="items-center gap-x-5 hidden md:flex font-semibold">
        {links.map((link) => (
          <Link
            href={`/en${link.href}`}
            className="flex flex-col items-center group mt-1"
            key={link.href}
          >
            <span>{link.text}</span>
            <span className="h-[1px] w-[0%] bg-darkNavy group-hover:w-[100%] duration-300" />
          </Link>
        ))}
        <LinkSwitchLanguage
          switchTo="ja"
          restPath={restPath}
          className="font-sawarabiGothic"
        />
      </div>
      <div className="flex items-center gap-x-4 md:hidden">
        <LinkSwitchLanguage
          switchTo="ja"
          restPath={restPath}
          className="font-sawarabiGothic"
        />
        <HeaderSp restPath={restPath} />
      </div>
    </header>
  )
}
