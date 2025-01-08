import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentPropsWithoutRef<'input'>

export const Input = (props: Props) => {
  const { className, ...rest } = props

  return (
    <input
      {...rest}
      className={twMerge(
        'border border-gray outline-none focus:ring-2 focus:ring-black ring-offset-2 rounded-md py-2 px-3 text-sm text-black',
        className,
      )}
    />
  )
}
