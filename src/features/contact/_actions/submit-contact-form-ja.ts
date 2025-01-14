'use server'

import { redirect } from 'next/navigation'
import { schemaContactFormJa } from '../_helpers/schema-contact-form-ja'

export const submitContactFormJa = async (
  _prevState: any,
  formData: FormData,
) => {
  const formObject = Object.fromEntries(formData.entries()) as {
    [key: string]: string
  }
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

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/email`,
    {
      method: 'POST',
      headers: {
        'X-API-KEY': process.env.X_API_KEY ?? '',
      },
      body: JSON.stringify({
        template: 'contact',
        props: {
          name: '',
          affiliation: '',
          email: '',
          phoneNumber: '',
          inquiryType: '',
          inquiryDetails: '',
        },
        subject: '【musicoホームページ】お問い合わせがありました',
      }),
    },
  )

  const now = new Date().getTime()

  if (!res.ok) {
    return {
      toast: {
        status: 'error',
        message: 'お問い合わせの送信に失敗しました。',
        timeStamp: now,
      },
      formObject,
    }
  }

  redirect('/ja/contact/completed')
}
