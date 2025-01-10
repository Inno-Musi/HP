import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  text: string
  required?: boolean
} & ComponentPropsWithoutRef<'label'>

export const Label = (props: Props) => {
  const { text, className, required = false, ...rest } = props

  return (
    <div className="flex items-center gap-x-0.5">
      <label
        {...rest}
        className={twMerge('cursor-pointer font-bold', className)}
      >
        {text}
      </label>
      {required && <span className="text-error font-semibold text-xs">*</span>}
    </div>
  )
}
