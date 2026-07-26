'use client'

import { Button } from '@/components/button'
import { ErrorMessage } from '@/components/error-message'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { useActionState } from 'react'
import { submitMaterialFormEn } from '../_actions/submit-material-form-en'
import { submitMaterialFormJa } from '../_actions/submit-material-form-ja'

type Props = {
  language: 'ja' | 'en'
}

const COPY = {
  ja: {
    name: 'お名前',
    namePlaceholder: '山田 太郎',
    company: '会社名',
    companyPlaceholder: '株式会社MUSICO',
    email: 'メールアドレス',
    emailPlaceholder: 'musico@example.com',
    submit: '資料をダウンロード',
    submitting: '送信中...',
    note: 'ご入力いただいた情報は、資料のご案内とご連絡のみに使用します。',
  },
  en: {
    name: 'Name',
    namePlaceholder: 'Taro Yamada',
    company: 'Company',
    companyPlaceholder: 'MUSICO Inc.',
    email: 'Email',
    emailPlaceholder: 'musico@example.com',
    submit: 'Download the deck',
    submitting: 'Submitting...',
    note: 'We use your details only to share the material and follow up.',
  },
} as const

export const FormMaterial = ({ language }: Props) => {
  const [actionState, formAction, isPending] = useActionState(
    language === 'ja' ? submitMaterialFormJa : submitMaterialFormEn,
    null,
  )
  const t = COPY[language]

  return (
    <form
      action={formAction}
      className="bg-paper px-4 py-6 md:px-6 md:py-8 max-w-[560px] mx-auto w-full flex flex-col gap-y-5 rounded-md"
    >
      <div className="flex flex-col gap-y-1">
        <Label text={t.name} htmlFor="name" required />
        <Input
          type="text"
          name="name"
          id="name"
          placeholder={t.namePlaceholder}
          defaultValue={actionState?.formObject?.name}
        />
        <ErrorMessage error={actionState?.errors?.name} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text={t.company} htmlFor="company" required />
        <Input
          type="text"
          name="company"
          id="company"
          placeholder={t.companyPlaceholder}
          defaultValue={actionState?.formObject?.company}
        />
        <ErrorMessage error={actionState?.errors?.company} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text={t.email} htmlFor="email" required />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder={t.emailPlaceholder}
          defaultValue={actionState?.formObject?.email}
        />
        <ErrorMessage error={actionState?.errors?.email} />
      </div>
      <Button
        text={isPending ? t.submitting : t.submit}
        className="rounded-full px-12 py-4 text-base md:text-lg mx-auto"
        disabled={isPending}
      />
      <p className="text-xs text-zinc-500 text-center leading-relaxed">
        {t.note}
      </p>
    </form>
  )
}
