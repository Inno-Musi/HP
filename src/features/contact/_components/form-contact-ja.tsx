'use client'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Textarea } from '@/components/textarea'
import { useActionState } from 'react'
import { submitContactFormEn } from '../_actions/submit-contact-form-en'
import { submitContactFormJa } from '../_actions/submit-contact-form-ja'
import { SelectInquiryType } from './select-inquiry-type'

export const FormContactJa = () => {
  const [actionState, formAction, isPending] = useActionState(
    submitContactFormJa,
    null,
  )

  return (
    <form
      action={formAction}
      className="bg-white px-6 py-8 max-w-[800px] mx-auto w-full flex flex-col gap-y-6 rounded-md"
    >
      <div className="flex flex-col gap-y-1">
        <Label text="お名前" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="lastName"
            className="w-full"
            placeholder="姓"
          />
          <Input
            type="text"
            name="firstName"
            className="w-full"
            placeholder="名"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="お名前（カタカナ）" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="lastNameKana"
            className="w-full"
            placeholder="セイ"
          />
          <Input
            type="text"
            name="firstNameKana"
            className="w-full"
            placeholder="メイ"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="affiliation" text="所属組織・役職（任意）" />
        <Input
          type="text"
          name="affiliation"
          placeholder="株式会社musico 営業部部長"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="メールアドレス" htmlFor="email" required />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="musico@example.com"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="電話番号（ハイフンなし）" htmlFor="phoneNumber" required />
        <Input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="09012345678"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="お問い合わせ種別" htmlFor="inquiryType" required />
        <SelectInquiryType language="ja" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label
          text="お問い合わせ内容（2000文字以内）"
          htmlFor="inquiryDetails"
          required
        />
        <Textarea
          name="inquiryDetails"
          id="inquiryDetails"
          className="h-[300px]"
        />
      </div>
      <Button
        text={isPending ? '送信中...' : '送信する'}
        className="rounded-full px-20 py-4 text-lg mx-auto"
        disabled={isPending}
      />
    </form>
  )
}
