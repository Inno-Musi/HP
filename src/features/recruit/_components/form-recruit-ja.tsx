'use client';

import { Button } from '@/components/button';
import { ErrorMessage } from '@/components/error-message';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Textarea } from '@/components/textarea';
import { FileInput } from '@/components/ui/file-input';
import { useActionState } from 'react';
import { submitRecruitFormJa } from '../_actions/submit-recruit-form-ja';
import type { Job } from '../_assets/data/jobs';

type Props = {
  job: Job;
};

export const FormRecruitJa = ({ job }: Props) => {
  const [actionState, formAction, isPending] = useActionState(submitRecruitFormJa, null);

  const nameError = actionState?.errors?.lastName || actionState?.errors?.firstName;
  const nameKanaError = actionState?.errors?.lastNameKana || actionState?.errors?.firstNameKana;

  return (
    <form
      action={formAction}
      className="bg-white px-4 py-6 md:px-6 md:py-8 max-w-[800px] mx-auto w-full flex flex-col gap-y-6 rounded-md"
    >
      <input type="hidden" name="jobId" value={job.id} />
      <h2 className="text-xl font-semibold text-darkNavy mb-2">応募職種: {job.titleJa}</h2>

      <div className="flex flex-col gap-y-1">
        <Label text="お名前" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="lastName"
            className="w-full"
            placeholder="姓"
            defaultValue={actionState?.formObject?.lastName as string}
            aria-required="true"
          />
          <Input
            type="text"
            name="firstName"
            className="w-full"
            placeholder="名"
            defaultValue={actionState?.formObject?.firstName as string}
            aria-required="true"
          />
        </div>
        <ErrorMessage error={nameError} />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label text="お名前（カタカナ）" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="lastNameKana"
            className="w-full"
            placeholder="セイ"
            defaultValue={actionState?.formObject?.lastNameKana as string}
            aria-required="true"
          />
          <Input
            type="text"
            name="firstNameKana"
            className="w-full"
            placeholder="メイ"
            defaultValue={actionState?.formObject?.firstNameKana as string}
            aria-required="true"
          />
        </div>
        <ErrorMessage error={nameKanaError} />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label text="メールアドレス" htmlFor="email" required />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="musico@example.com"
          defaultValue={actionState?.formObject?.email as string}
          aria-required="true"
        />
        <ErrorMessage error={actionState?.errors?.email} />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label text="電話番号（ハイフンなし）" htmlFor="phoneNumber" required />
        <Input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="09012345678"
          defaultValue={actionState?.formObject?.phoneNumber as string}
          aria-required="true"
        />
        <ErrorMessage error={actionState?.errors?.phoneNumber} />
      </div>
      
      <FileInput
        name="resumeFile"
        label="履歴書・職務経歴書 (PDF, DOC, DOCX, 5MBまで)"
        required
        error={actionState?.errors?.resumeFile}
        accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />

      <div className="flex flex-col gap-y-1">
        <Label text="志望動機（任意、2000文字以内）" htmlFor="coverLetter" />
        <Textarea
          name="coverLetter"
          id="coverLetter"
          className="h-[200px]"
          defaultValue={actionState?.formObject?.coverLetter as string}
          maxLength={2000}
        />
        <ErrorMessage error={actionState?.errors?.coverLetter} />
      </div>

      <Button
        text={isPending ? '送信中...' : '応募する'}
        className="rounded-full px-20 py-4 text-lg mx-auto"
        disabled={isPending}
        type="submit"
      />
      {actionState?.toast && (
        <p className={`mt-4 text-center font-semibold ${actionState.toast.status === 'error' ? 'text-error' : 'text-green-600'}`}>
          {actionState.toast.message}
        </p>
      )}
    </form>
  );
}; 
