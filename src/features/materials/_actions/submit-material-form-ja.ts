'use server'

import { createErrorToast, type FormActionState } from '@/lib/form-action'
import { sendEmailNotification } from '@/services/email/send-email-notification'
import { notifyGoogleChat } from '@/services/google-chat/notify-google-chat'
import { redirect } from 'next/navigation'
import { schemaMaterialFormJa } from '../_helpers/schema-material-form'

type MaterialFormJaState = FormActionState<'name' | 'company' | 'email'>

export const submitMaterialFormJa = async (
  _prevState: MaterialFormJaState,
  formData: FormData,
) => {
  const formObject = Object.fromEntries(formData.entries()) as Record<
    string,
    string
  >
  const result = schemaMaterialFormJa.safeParse(formObject)

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

  // 通知は問い合わせと同じ経路に流す（既に見ている受信箱に届くのが最も確実なため）。
  // 種別を「資料ダウンロード」にして問い合わせと区別する。
  const [chatResult, emailResult] = await Promise.all([
    notifyGoogleChat(
      `資料ダウンロードがありました
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
        inquiryType: '資料ダウンロード',
        inquiryDetails:
          '会社紹介資料をダウンロードされました（サイトの資料請求フォーム経由）。',
      },
      subject: '【musicoホームページ】資料ダウンロードがありました',
    }),
  ])

  // 資料ダウンロードは通知が落ちてもPDFは渡す。両方の通知が落ちた時だけエラーを返す。
  if (emailResult.status === 'error') {
    await notifyGoogleChat(
      `⚠️ 上の資料ダウンロードのメール通知に失敗しました（${emailResult.message}）。info@musico.co.jp には届いていないので、この内容で対応してください。`,
    )
  }

  if (chatResult.status === 'error' && emailResult.status === 'error') {
    return {
      toast: createErrorToast('送信に失敗しました。'),
      formObject,
    }
  }

  redirect('/ja/materials/completed')
}
