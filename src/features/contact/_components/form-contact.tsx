'use client'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Textarea } from '@/components/textarea'
import { useActionState } from 'react'
import { submitContactFormEn } from '../_actions/submit-contact-form-en'
import { submitContactFormJa } from '../_actions/submit-contact-form-ja'

type Props = {
  language: 'en' | 'ja'
}

export const FormContact = ({ language }: Props) => {
  const [actionState, formAction, isPending] = useActionState(
    language === 'ja' ? submitContactFormJa : submitContactFormEn,
    null,
  )

  return (
    <form
      action={formAction}
      className="bg-white px-6 py-8 max-w-[800px] mx-auto w-full flex flex-col gap-y-6 rounded-md"
    >
      <div className="flex flex-col gap-y-1">
        <Label text={language === 'ja' ? 'お名前' : 'Full Name'} required />
        <div className="flex gap-x-2">
          <Input type="text" className="w-full" placeholder="姓" />
          <Input type="text" className="w-full" placeholder="名" />
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <Label
          text={language === 'ja' ? 'お名前（カタカナ）' : 'Full Name'}
          required
        />
        <div className="flex gap-x-2">
          <Input type="text" className="w-full" placeholder="セイ" />
          <Input type="text" className="w-full" placeholder="メイ" />
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <Label
          text={language === 'ja' ? 'メールアドレス' : 'Email Address'}
          required
        />
        <Input type="email" placeholder="musico@example.com" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label
          text={language === 'ja' ? '電話番号（ハイフンなし）' : 'Phone Number'}
          required
        />
        <Input type="tel" placeholder="09012345678" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label
          text={language === 'ja' ? 'お問い合わせ種別' : 'Inquiry Type'}
          required
        />
        <Input type="text" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label
          text={
            language === 'ja'
              ? 'お問い合わせ内容（2000文字以内）'
              : 'Inquiry Details'
          }
          required
        />
        <Textarea />
      </div>
      <Button
        text={
          isPending
            ? language === 'ja'
              ? '送信中...'
              : 'Sending...'
            : language === 'ja'
              ? '送信する'
              : 'Submit'
        }
        className="rounded-full px-20 py-4 text-lg mx-auto"
        disabled={isPending}
      />
    </form>
  )
}
