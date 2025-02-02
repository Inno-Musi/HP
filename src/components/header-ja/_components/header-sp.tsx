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
            <div className="flex flex-col gap-y-4 items-center max-w-[345px] px-4 mx-auto pt-4">
              {links.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  className="font-semibold flex flex-col items-center w-full"
                  onClick={() => {
                    setIsOpen(false)
                    router.push(`/ja/${link.href}`)
                  }}
                >
                  <span className="text-lg">{link.text}</span>
                  <span className="text-sm">{link.subText}</span>
                </button>
              ))}
              <button
                type="button"
                className="border border-darkNavy px-3 py-1 font-semibold mt-2"
                onClick={() => {
                  setIsOpen(false)
                  router.push(`/en/${restPath}`)
                }}
              >
                English
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
