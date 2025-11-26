'use client';

import { Button } from '@/components/button';
import { ErrorMessage } from '@/components/error-message';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Textarea } from '@/components/textarea';
import { FileInput } from '@/components/ui/file-input';
import { useActionState } from 'react';
import { submitRecruitFormEn } from '../_actions/submit-recruit-form-en';
import type { Job } from '../_assets/data/jobs';

type Props = {
  job: Job;
};

export const FormRecruitEn = ({ job }: Props) => {
  const [actionState, formAction, isPending] = useActionState(submitRecruitFormEn, null);

  const nameError = actionState?.errors?.firstName || actionState?.errors?.lastName;

  return (
    <form
      action={formAction}
      className="bg-white px-4 py-6 md:px-6 md:py-8 max-w-[800px] mx-auto w-full flex flex-col gap-y-6 rounded-md"
    >
      <input type="hidden" name="jobId" value={job.id} />
      <h2 className="text-xl font-semibold text-darkNavy mb-2">Applying for: {job.titleEn}</h2>
      
      <div className="flex flex-col gap-y-1">
        <Label text="Full Name" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="firstName"
            className="w-full"
            placeholder="First Name"
            defaultValue={actionState?.formObject?.firstName as string}
            aria-required="true"
          />
          <Input
            type="text"
            name="lastName"
            className="w-full"
            placeholder="Last Name"
            defaultValue={actionState?.formObject?.lastName as string}
            aria-required="true"
          />
        </div>
        <ErrorMessage error={nameError} />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label text="Email Address" htmlFor="email" required />
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
        <Label text="Phone Number" htmlFor="phoneNumber" required />
        <Input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter phone number"
          defaultValue={actionState?.formObject?.phoneNumber as string}
          aria-required="true"
        />
        <ErrorMessage error={actionState?.errors?.phoneNumber} />
      </div>

      <FileInput
        name="resumeFile"
        label="Resume/CV (PDF, DOC, DOCX, up to 5MB)"
        required
        error={actionState?.errors?.resumeFile}
        accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />

      <div className="flex flex-col gap-y-1">
        <Label text="Cover Letter (Optional, max 4000 characters)" htmlFor="coverLetter" />
        <Textarea
          name="coverLetter"
          id="coverLetter"
          className="h-[200px]"
          defaultValue={actionState?.formObject?.coverLetter as string}
          maxLength={4000}
        />
        <ErrorMessage error={actionState?.errors?.coverLetter} />
      </div>

      <Button
        text={isPending ? 'Submitting...' : 'Submit Application'}
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
