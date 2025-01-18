import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  text: string
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: Props) => {
  const { text, className, ...rest } = props

  return (
    <button
      {...rest}
      className={twMerge(
        'bg-darkNavy text-white rounded-md px-4 py-2 font-semibold hover:opacity-80 duration-100 w-fit',
        className,
      )}
    >
      {text}
    </button>
  )
}
