'use server';

import { notifySlack } from '@/services/slack/notify-slack';
import { redirect } from 'next/navigation';
import { schemaRecruitFormEn } from '../_helpers/schema-recruit-form-en';
import { jobs } from '../_assets/data/jobs';

type ActionState = {
  errors?: {
    jobId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    resumeFile?: string;
    coverLetter?: string;
  };
  formObject?: { [key: string]: string };
  toast?: {
    status: 'error' | 'success';
    message: string;
    timeStamp: number;
  };
} | null;

export const submitRecruitFormEn = async (_prevState: ActionState, formData: FormData): Promise<ActionState> => {
  const formObject = Object.fromEntries(formData.entries()) as { [key: string]: string | File };
  const file = formData.get('resumeFile');
  if (file instanceof File) {
    formObject.resumeFile = file;
  } else {
    formObject.resumeFile = null as any;
  }

  const result = schemaRecruitFormEn.safeParse(formObject);

  if (!result.success) {
    const { fieldErrors } = result.error.flatten();
    const serializableFormObject = { ...formObject };
    delete serializableFormObject.resumeFile;

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
      formObject: serializableFormObject as { [key: string]: string },
    };
  }

  const {
    jobId,
    firstName,
    lastName,
    email,
    phoneNumber,
    resumeFile, // Fileオブジェクト
    coverLetter,
  } = result.data;

  const appliedJob = jobs.find(job => job.id === jobId);
  const jobTitleEn = appliedJob ? appliedJob.titleEn : 'Unknown Position';

  const resumeFileBuffer = Buffer.from(await (resumeFile as File).arrayBuffer());

  const slackMessage = `New job application received
    【Applied Position】: ${jobTitleEn} (${jobId})
    【Name】: ${firstName} ${lastName}
    【Email】: ${email}
    【Phone】: ${phoneNumber}
    【File Name】: ${(resumeFile as File).name}
    【Cover Letter】: ${coverLetter || 'Not provided'}
  `;

  const emailProps = {
    jobTitle: jobTitleEn,
    name: `${firstName} ${lastName}`,
    email: email,
    phoneNumber: phoneNumber,
    coverLetter: coverLetter || 'Not provided',
    fileName: (resumeFile as File).name,
  };

  try {
    await Promise.all([
      notifySlack(slackMessage),
      fetch(
         `${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/email`,
        {
          method: 'POST',
          headers: {
            'X-API-KEY': process.env.X_API_KEY ?? '',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            template: 'recruit',
            props: emailProps,
            subject: `[MUSICO Career Application] ${jobTitleEn} - ${firstName} ${lastName}`,
            attachments: [
              {
                filename: (resumeFile as File).name,
                content: resumeFileBuffer.toString('base64'),
              },
            ],
          }),
        },
      ).then(async res => {
        if (!res.ok) {
          const errorBody = await res.json();
          console.error("Email API error:", errorBody);
          throw new Error(`Email sending failed: ${res.statusText}`);
        }
        return res;
      })
    ]);
  } catch (error) {
    console.error('Error submitting application:', error);
     await notifySlack(
      `Failed to send job application email or Slack notification.
      Applicant: ${firstName} ${lastName} (${email})
      Position: ${jobTitleEn}
      Error: ${error instanceof Error ? error.message : String(error)}`,
    );
    const serializableFormObject = { ...formObject };
    delete serializableFormObject.resumeFile;
    return {
      toast: {
        status: 'error',
        message: 'Failed to submit application. Please try again later.',
        timeStamp: Date.now(),
      },
      formObject: serializableFormObject as { [key: string]: string },
      errors: {},
    };
  }

  redirect(`/en/recruit/apply/completed?jobId=${jobId}`);
}; 
