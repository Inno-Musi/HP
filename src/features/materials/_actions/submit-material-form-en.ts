'use server'

import { createErrorToast, type FormActionState } from '@/lib/form-action'
import { sendEmailNotification } from '@/services/email/send-email-notification'
import { notifyGoogleChat } from '@/services/google-chat/notify-google-chat'
import { redirect } from 'next/navigation'
import { schemaMaterialFormEn } from '../_helpers/schema-material-form'

type MaterialFormEnState = FormActionState<'name' | 'company' | 'email'>

export const submitMaterialFormEn = async (
  _prevState: MaterialFormEnState,
  formData: FormData,
) => {
  const formObject = Object.fromEntries(formData.entries()) as Record<
    string,
    string
  >
  const result = schemaMaterialFormEn.safeParse(formObject)

  if (!result.success) {
    const { fieldErrors } = result.error.flatten()

    return {
      errors: {
        name: fieldErrors.name?.[0],
        company: fieldErrors.company?.[0],
        email: fieldErrors.email?.[0],
      },
      formObject,
    }
  }

  const { name, company, email } = result.data

  const [_resChat, res] = await Promise.all([
    notifyGoogleChat(
      `資料ダウンロードがありました（英語ページ）
      【名前】: ${name}
      【会社名】: ${company}
      【メールアドレス】: ${email}
      `,
    ),
    sendEmailNotification({
      template: 'contact',
      props: {
        name,
        affiliation: company,
        email,
        phoneNumber: '',
        inquiryType: '資料ダウンロード（EN）',
        inquiryDetails:
          'Company profile was downloaded via the English material request form.',
      },
      subject: '【musicoホームページ】資料ダウンロードがありました（EN）',
    }),
  ])

  if (!res.ok) {
    await notifyGoogleChat(
      '資料ダウンロード（EN）の通知送信に失敗しました。速やかに確認してください。',
    )
    return {
      toast: createErrorToast('Failed to submit. Please try again.'),
      formObject,
    }
  }

  redirect('/en/materials/completed')
}
