import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentPropsWithoutRef<'textarea'>

export const Textarea = (props: Props) => {
  const { className, ...rest } = props

  return (
    <textarea
      {...rest}
      className={twMerge(
        'resize-none border border-gray outline-none focus:ring-2 focus:ring-black ring-offset-2 rounded-md py-2 px-3 text-sm text-black h-40',
        className,
      )}
    />
  )
}
