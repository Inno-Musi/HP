'use server'

import { createErrorToast, type FormActionState } from '@/lib/form-action'
import { sendEmailNotification } from '@/services/email/send-email-notification'
import { notifyGoogleChat } from '@/services/google-chat/notify-google-chat'
import { redirect } from 'next/navigation'
import { schemaContactFormJa } from '../_helpers/schema-contact-form-ja'

type ContactFormJaState = FormActionState<
  | 'lastName'
  | 'firstName'
  | 'lastNameKana'
  | 'firstNameKana'
  | 'affiliation'
  | 'email'
  | 'phoneNumber'
  | 'inquiryType'
  | 'inquiryDetails'
>

export const submitContactFormJa = async (
  _prevState: ContactFormJaState,
  formData: FormData,
) => {
  const formObject = Object.fromEntries(formData.entries()) as Record<string, string>
  const result = schemaContactFormJa.safeParse(formObject)

  if (!result.success) {
    const { fieldErrors } = result.error.flatten()

    return {
      errors: {
        lastName: fieldErrors.lastName?.[0],
        firstName: fieldErrors.firstName?.[0],
        lastNameKana: fieldErrors.lastNameKana?.[0],
        firstNameKana: fieldErrors.firstNameKana?.[0],
        affiliation: fieldErrors.affiliation?.[0],
        email: fieldErrors.email?.[0],
        phoneNumber: fieldErrors.phoneNumber?.[0],
        inquiryType: fieldErrors.inquiryType?.[0],
        inquiryDetails: fieldErrors.inquiryDetails?.[0],
      },
      formObject,
    }
  }

  const {
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    affiliation,
    email,
    phoneNumber,
    inquiryType,
    inquiryDetails,
  } = result.data

  const [chatResult, emailResult] = await Promise.all([
    notifyGoogleChat(
      `お問い合わせがありました
      【名前】: ${lastName} ${firstName} (${lastNameKana} ${firstNameKana})
      【所属】: ${affiliation}
      【メールアドレス】: ${email}
      【電話番号】: ${phoneNumber}
      【問い合わせ種類】: ${inquiryType}
      【問い合わせ内容】: ${inquiryDetails}
      `,
    ),
    sendEmailNotification({
      template: 'contact',
      props: {
        name: `${lastName} ${firstName} (${lastNameKana} ${firstNameKana})`,
        affiliation: affiliation ?? '',
        email,
        phoneNumber,
        inquiryType,
        inquiryDetails,
      },
      subject: '【musicoホームページ】お問い合わせがありました',
    }),
  ])

  // 通知はメールとGoogle Chatの2経路。片方でも届いていれば問い合わせは失われていないので
  // 送信者を止めない。両方落ちた時だけエラーを返す（＝再送してもらうしかないケース）。
  if (emailResult.status === 'error') {
    await notifyGoogleChat(
      `⚠️ 上のお問い合わせのメール通知に失敗しました（${emailResult.message}）。info@musico.co.jp には届いていないので、この内容で対応してください。`,
    )
  }

  if (chatResult.status === 'error' && emailResult.status === 'error') {
    return {
      toast: createErrorToast('お問い合わせの送信に失敗しました。'),
      formObject,
    }
  }

  redirect('/ja/contact/completed')
}
