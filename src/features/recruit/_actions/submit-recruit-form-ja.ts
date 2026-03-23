'use server'

import {
  createErrorToast,
  type FormActionState,
  toSerializableFormObject,
} from '@/lib/form-action'
import { sendEmailNotification } from '@/services/email/send-email-notification'
import { notifySlack } from '@/services/slack/notify-slack'
import { redirect } from 'next/navigation'
import { jobs } from '../_assets/data/jobs'
import { schemaRecruitFormJa } from '../_helpers/schema-recruit-form-ja'

type RecruitFormJaState = FormActionState<
  | 'jobId'
  | 'lastName'
  | 'firstName'
  | 'lastNameKana'
  | 'firstNameKana'
  | 'email'
  | 'phoneNumber'
  | 'resumeFile'
  | 'coverLetter'
>

export const submitRecruitFormJa = async (
  _prevState: RecruitFormJaState,
  formData: FormData,
): Promise<RecruitFormJaState> => {
  const file = formData.get('resumeFile')
  const formObject = Object.fromEntries(formData.entries()) as Record<
    string,
    FormDataEntryValue
  >
  const input = {
    ...formObject,
    resumeFile: file instanceof File ? file : undefined,
  }

  const result = schemaRecruitFormJa.safeParse(input)

  if (!result.success) {
    const { fieldErrors } = result.error.flatten()

    return {
      errors: {
        jobId: fieldErrors.jobId?.[0],
        lastName: fieldErrors.lastName?.[0],
        firstName: fieldErrors.firstName?.[0],
        lastNameKana: fieldErrors.lastNameKana?.[0],
        firstNameKana: fieldErrors.firstNameKana?.[0],
        email: fieldErrors.email?.[0],
        phoneNumber: fieldErrors.phoneNumber?.[0],
        resumeFile: fieldErrors.resumeFile?.[0],
        coverLetter: fieldErrors.coverLetter?.[0],
      },
      formObject: toSerializableFormObject(formObject, ['resumeFile']),
    }
  }

  const {
    jobId,
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    email,
    phoneNumber,
    resumeFile,
    coverLetter,
  } = result.data

  const jobTitleJa =
    jobs.find((job) => job.id === jobId)?.titleJa ?? '不明な職種'
  const resumeFileBuffer = Buffer.from(await resumeFile.arrayBuffer())

  try {
    const emailResponse = await sendEmailNotification({
      template: 'recruit',
      props: {
        jobTitle: jobTitleJa,
        name: `${lastName} ${firstName} (${lastNameKana} ${firstNameKana})`,
        email,
        phoneNumber,
        coverLetter: coverLetter || '未入力',
        fileName: resumeFile.name,
      },
      subject: `【MUSICO採用応募】${jobTitleJa} - ${lastName} ${firstName}様`,
      attachments: [
        {
          filename: resumeFile.name,
          content: resumeFileBuffer.toString('base64'),
        },
      ],
    })

    if (!emailResponse.ok) {
      throw new Error(`Email sending failed: ${emailResponse.statusText}`)
    }

    await notifySlack(`採用応募がありました
    【応募職種】: ${jobTitleJa} (${jobId})
    【名前】: ${lastName} ${firstName} (${lastNameKana} ${firstNameKana})
    【メールアドレス】: ${email}
    【電話番号】: ${phoneNumber}
    【ファイル名】: ${resumeFile.name}
    【志望動機】: ${coverLetter || '未入力'}
  `)
  } catch (error) {
    console.error('Error submitting application:', error)
    await notifySlack(`採用応募のメール送信またはSlack通知に失敗しました。
      応募者: ${lastName} ${firstName} (${email})
      職種: ${jobTitleJa}
      エラー: ${error instanceof Error ? error.message : String(error)}`)

    return {
      toast: createErrorToast(
        '応募の送信に失敗しました。しばらくしてから再度お試しください。',
      ),
      formObject: toSerializableFormObject(formObject, ['resumeFile']),
      errors: {},
    }
  }

  redirect(`/ja/recruit/apply/completed?jobId=${jobId}`)
}
