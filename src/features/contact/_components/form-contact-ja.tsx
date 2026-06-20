'use client'

import { Button } from '@/components/button'
import { ErrorMessage } from '@/components/error-message'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Textarea } from '@/components/textarea'
import { useActionState } from 'react'
import { submitContactFormJa } from '../_actions/submit-contact-form-ja'
import { SelectInquiryType } from './select-inquiry-type'

export const FormContactJa = () => {
  const [actionState, formAction, isPending] = useActionState(
    submitContactFormJa,
    null,
  )

  const nameError =
    actionState?.errors?.lastName || actionState?.errors?.firstName
  const nameKanaError =
    actionState?.errors?.lastNameKana || actionState?.errors?.firstNameKana

  return (
    <form
      action={formAction}
      className="bg-paper px-4 py-6 md:px-6 md:py-8 max-w-[800px] mx-auto w-full flex flex-col gap-y-6 rounded-md"
    >
      <div className="flex flex-col gap-y-1">
        <Label text="お名前" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="lastName"
            className="w-full"
            placeholder="姓"
            defaultValue={actionState?.formObject?.lastName}
          />
          <Input
            type="text"
            name="firstName"
            className="w-full"
            placeholder="名"
            defaultValue={actionState?.formObject?.firstName}
          />
        </div>
        <ErrorMessage error={nameError} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="お名前（カタカナ）" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="lastNameKana"
            className="w-full"
            placeholder="セイ"
            defaultValue={actionState?.formObject?.lastNameKana}
          />
          <Input
            type="text"
            name="firstNameKana"
            className="w-full"
            placeholder="メイ"
            defaultValue={actionState?.formObject?.firstNameKana}
          />
        </div>
        <ErrorMessage error={nameKanaError} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="affiliation" text="所属組織・役職（任意）" />
        <Input
          type="text"
          name="affiliation"
          placeholder="株式会社musico 営業部部長"
          defaultValue={actionState?.formObject?.affiliation}
        />
        <ErrorMessage error={actionState?.errors?.affiliation} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="メールアドレス" htmlFor="email" required />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="musico@example.com"
          defaultValue={actionState?.formObject?.email}
        />
        <ErrorMessage error={actionState?.errors?.email} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="電話番号（ハイフンなし）" htmlFor="phoneNumber" required />
        <Input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="09012345678"
          defaultValue={actionState?.formObject?.phoneNumber}
        />
        <ErrorMessage error={actionState?.errors?.phoneNumber} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="お問い合わせ種別" htmlFor="inquiryType" required />
        <SelectInquiryType
          language="ja"
          defaultValue={actionState?.formObject?.inquiryType}
        />
        <ErrorMessage error={actionState?.errors?.inquiryType} />
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
          defaultValue={actionState?.formObject?.inquiryDetails}
        />
        <ErrorMessage error={actionState?.errors?.inquiryDetails} />
      </div>
      <Button
        text={isPending ? '送信中...' : '送信する'}
        className="rounded-full px-20 py-4 text-lg mx-auto"
        disabled={isPending}
      />
    </form>
  )
}
