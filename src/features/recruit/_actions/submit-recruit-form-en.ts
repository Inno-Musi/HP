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
import { schemaRecruitFormEn } from '../_helpers/schema-recruit-form-en'

type RecruitFormEnState = FormActionState<
  | 'jobId'
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phoneNumber'
  | 'resumeFile'
  | 'coverLetter'
>

export const submitRecruitFormEn = async (
  _prevState: RecruitFormEnState,
  formData: FormData,
): Promise<RecruitFormEnState> => {
  const file = formData.get('resumeFile')
  const formObject = Object.fromEntries(formData.entries()) as Record<
    string,
    FormDataEntryValue
  >
  const input = {
    ...formObject,
    resumeFile: file instanceof File ? file : undefined,
  }

  const result = schemaRecruitFormEn.safeParse(input)

  if (!result.success) {
    const { fieldErrors } = result.error.flatten()

    return {
      errors: {
        jobId: fieldErrors.jobId?.[0],
        firstName: fieldErrors.firstName?.[0],
        lastName: fieldErrors.lastName?.[0],
        email: fieldErrors.email?.[0],
        phoneNumber: fieldErrors.phoneNumber?.[0],
        resumeFile: fieldErrors.resumeFile?.[0],
        coverLetter: fieldErrors.coverLetter?.[0],
      },
      formObject: toSerializableFormObject(formObject, ['resumeFile']),
    }
  }

  const { jobId, firstName, lastName, email, phoneNumber, resumeFile, coverLetter } =
    result.data
  const jobTitleEn =
    jobs.find((job) => job.id === jobId)?.titleEn ?? 'Unknown Position'
  const resumeFileBuffer = Buffer.from(await resumeFile.arrayBuffer())

  try {
    const emailResponse = await sendEmailNotification({
      template: 'recruit',
      props: {
        jobTitle: jobTitleEn,
        name: `${firstName} ${lastName}`,
        email,
        phoneNumber,
        coverLetter: coverLetter || 'Not provided',
        fileName: resumeFile.name,
      },
      subject: `[MUSICO Career Application] ${jobTitleEn} - ${firstName} ${lastName}`,
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

    await notifySlack(`New job application received
    【Applied Position】: ${jobTitleEn} (${jobId})
    【Name】: ${firstName} ${lastName}
    【Email】: ${email}
    【Phone】: ${phoneNumber}
    【File Name】: ${resumeFile.name}
    【Cover Letter】: ${coverLetter || 'Not provided'}
  `)
  } catch (error) {
    console.error('Error submitting application:', error)
    await notifySlack(`Failed to send job application email or Slack notification.
      Applicant: ${firstName} ${lastName} (${email})
      Position: ${jobTitleEn}
      Error: ${error instanceof Error ? error.message : String(error)}`)

    return {
      toast: createErrorToast(
        'Failed to submit application. Please try again later.',
      ),
      formObject: toSerializableFormObject(formObject, ['resumeFile']),
      errors: {},
    }
  }

  redirect(`/en/recruit/apply/completed?jobId=${jobId}`)
}
