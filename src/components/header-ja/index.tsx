import Link from 'next/link'
import { links } from './_assets/const/links'
import { HeaderSp } from './_components/header-sp'

export const HeaderJa = () => {
  return (
    <header className="h-16 border-b border-gray flex items-center px-5 sm:px-7 shadow justify-between sticky top-0 z-50 bg-white">
      <Link href="/" className="font-semibold text-lg">
        MUSICO
      </Link>
      <div className="items-center gap-x-4 hidden sm:flex">
        {links.map((link) => (
          <Link
            href={`/${link.href}`}
            className="flex flex-col mt-2 items-center font-semibold group"
            key={link.href}
          >
            <span className="leading-4">{link.text}</span>
            <span className="text-[10px]">{link.subText}</span>
            <span className="h-[2px] w-[0%] bg-passion group-hover:w-[100%] duration-300" />
          </Link>
        ))}
      </div>
      <HeaderSp />
    </header>
  )
}
