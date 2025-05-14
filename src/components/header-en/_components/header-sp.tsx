import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { twMerge } from 'tailwind-merge'
import { links } from '../_assets/const/links'

type Props = {
  restPath: string
}

export const HeaderSp = ({ restPath }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <div>
      <RxHamburgerMenu
        className="cursor-pointer"
        size={24}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={twMerge(
          'w-0 z-50 bg-white fixed h-screen top-0 right-0 duration-300 overflow-hidden',
          isOpen && 'w-[100%]',
        )}
      >
        {isOpen && (
          <>
            <IoCloseOutline
              size={34}
              onClick={() => setIsOpen(!isOpen)}
              className="m-2 cursor-pointer"
            />
            <div className="flex flex-col gap-y-6 items-center max-w-[345px] px-4 mx-auto pt-4">
              {links.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  className="font-semibold flex flex-col items-center w-full border-b border-darkNavy/50 pb-2"
                  onClick={() => {
                    setIsOpen(false)
                    router.push(`/en${link.href}`)
                  }}
                >
                  <span className="text-xl">{link.text}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
