'use server'

import { createErrorToast, type FormActionState } from '@/lib/form-action'
import { sendEmailNotification } from '@/services/email/send-email-notification'
import { notifySlack } from '@/services/slack/notify-slack'
import { redirect } from 'next/navigation'
import { schemaContactFormEn } from '../_helpers/schema-contact-form-en'

type ContactFormEnState = FormActionState<
  | 'firstName'
  | 'middleName'
  | 'lastName'
  | 'affiliation'
  | 'email'
  | 'phoneNumber'
  | 'inquiryType'
  | 'inquiryDetails'
>

export const submitContactFormEn = async (
  _prevState: ContactFormEnState,
  formData: FormData,
) => {
  const formObject = Object.fromEntries(formData.entries()) as Record<string, string>
  const result = schemaContactFormEn.safeParse(formObject)

  if (!result.success) {
    const { fieldErrors } = result.error.flatten()

    return {
      errors: {
        firstName: fieldErrors.firstName?.[0],
        middleName: fieldErrors.middleName?.[0],
        lastName: fieldErrors.lastName?.[0],
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
    firstName,
    middleName,
    lastName,
    affiliation,
    email,
    phoneNumber,
    inquiryType,
    inquiryDetails,
  } = result.data

  const [_resSlack, res] = await Promise.all([
    notifySlack(
      `お問い合わせがありました
      【名前】: ${firstName} ${middleName ? `${middleName} ` : ''} ${lastName}
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
        name: `${firstName} ${middleName ? `${middleName} ` : ''} ${lastName}`,
        affiliation: affiliation ?? '',
        email,
        phoneNumber,
        inquiryType,
        inquiryDetails,
      },
      subject: '【musicoホームページ】お問い合わせがありました',
    }),
  ])

  if (!res.ok) {
    await notifySlack(
      'お問い合わせの送信に失敗しました。速やかに確認してください。',
    )
    return {
      toast: createErrorToast('Failed to send contact form.'),
      formObject,
    }
  }

  redirect('/en/contact/completed')
}
