'use server';

import { notifySlack } from '@/services/slack/notify-slack';
import { redirect } from 'next/navigation';
import { schemaRecruitFormJa } from '../_helpers/schema-recruit-form-ja';
import { jobs } from '../_assets/data/jobs';

type ActionState = {
  errors?: {
    jobId?: string;
    lastName?: string;
    firstName?: string;
    lastNameKana?: string;
    firstNameKana?: string;
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

export const submitRecruitFormJa = async (_prevState: ActionState, formData: FormData): Promise<ActionState> => {
  const formObject = Object.fromEntries(formData.entries()) as { [key: string]: string | File };
  // ファイルを正しく扱うため、Zodスキーマに渡す前にFileオブジェクトを保持
  const file = formData.get('resumeFile');
  if (file instanceof File) {
    formObject.resumeFile = file;
  } else {
    // ファイルがない場合はnullやundefinedを設定してバリデーションエラーを発生させる
    formObject.resumeFile = null as any; 
  }
  
  const result = schemaRecruitFormJa.safeParse(formObject);

  if (!result.success) {
    const { fieldErrors } = result.error.flatten();
    // formObjectからFileオブジェクトを除外して返す（シリアライズ可能なオブジェクトのみ）
    const serializableFormObject = { ...formObject };
    delete serializableFormObject.resumeFile;

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
      formObject: serializableFormObject as { [key: string]: string },
    };
  }

  const {
    jobId,
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    email,
    phoneNumber,
    resumeFile, // Fileオブジェクト
    coverLetter,
  } = result.data;

  const appliedJob = jobs.find(job => job.id === jobId);
  const jobTitleJa = appliedJob ? appliedJob.titleJa : '不明な職種';

  const resumeFileBuffer = Buffer.from(await (resumeFile as File).arrayBuffer());

  // Slack通知とメール送信
  const slackMessage = `採用応募がありました
    【応募職種】: ${jobTitleJa} (${jobId})
    【名前】: ${lastName} ${firstName} (${lastNameKana} ${firstNameKana})
    【メールアドレス】: ${email}
    【電話番号】: ${phoneNumber}
    【ファイル名】: ${(resumeFile as File).name}
    【志望動機】: ${coverLetter || '未入力'}
  `;

  const emailProps = {
    jobTitle: jobTitleJa,
    name: `${lastName} ${firstName} (${lastNameKana} ${firstNameKana})`,
    email: email,
    phoneNumber: phoneNumber,
    coverLetter: coverLetter || '未入力',
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
            template: 'recruit', // 新しいテンプレートを指定
            props: emailProps,
            subject: `【MUSICO採用応募】${jobTitleJa} - ${lastName} ${firstName}様`,
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
      `採用応募のメール送信またはSlack通知に失敗しました。
      応募者: ${lastName} ${firstName} (${email})
      職種: ${jobTitleJa}
      エラー: ${error instanceof Error ? error.message : String(error)}`,
    );
    const serializableFormObject = { ...formObject };
    delete serializableFormObject.resumeFile;
    return {
      toast: {
        status: 'error',
        message: '応募の送信に失敗しました。しばらくしてから再度お試しください。',
        timeStamp: Date.now(),
      },
      formObject: serializableFormObject as { [key: string]: string },
      errors: {}, // 必要に応じて詳細なエラーを返す
    };
  }

  redirect(`/ja/recruit/apply/completed?jobId=${jobId}`);
}; 
