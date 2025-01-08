'use client'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Textarea } from '@/components/textarea'

type Props = {
  language: 'en' | 'ja'
}

export const FormContact = ({ language }: Props) => {
  return (
    <form
      action=""
      className="bg-white p-6 max-w-[800px] mx-auto w-full flex flex-col gap-y-5"
    >
      <div className="flex flex-col gap-y-1">
        <Label text={language === 'ja' ? 'お名前' : 'Full Name'} required />
        <Input type="text" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label
          text={language === 'ja' ? 'メールアドレス' : 'Email Address'}
          required
        />
        <Input type="email" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label
          text={language === 'ja' ? '電話番号' : 'Phone Number'}
          required
        />
        <Input type="tel" />
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
          text={language === 'ja' ? 'お問い合わせ内容' : 'Inquiry Details'}
          required
        />
        <Textarea />
      </div>
      <Button
        text={language === 'ja' ? '送信する' : 'Submit'}
        className="rounded-full px-20 py-4 text-lg mx-auto"
      />
    </form>
  )
}
