'use client'

import { Button } from '@/components/button'
import { ErrorMessage } from '@/components/error-message'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Textarea } from '@/components/textarea'
import { useActionState } from 'react'
import { submitContactFormEn } from '../_actions/submit-contact-form-en'
import { SelectInquiryType } from './select-inquiry-type'

export const FormContactEn = () => {
  const [actionState, formAction, isPending] = useActionState(
    submitContactFormEn,
    null,
  )

  const nameError =
    actionState?.errors?.firstName || actionState?.errors?.lastName

  return (
    <form
      action={formAction}
      className="bg-paper px-4 py-6 md:px-6 md:py-8 max-w-[800px] mx-auto w-full flex flex-col gap-y-6 rounded-md"
    >
      <div className="flex flex-col gap-y-1">
        <Label text="Full Name" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="firstName"
            className="w-full"
            placeholder="First Name"
            defaultValue={actionState?.formObject?.firstName}
          />
          <Input
            type="text"
            name="middleName"
            className="w-full"
            placeholder="Middle Name (Optional)"
            defaultValue={actionState?.formObject?.middleName}
          />
          <Input
            type="text"
            name="lastName"
            className="w-full"
            placeholder="Last Name"
            defaultValue={actionState?.formObject?.lastName}
          />
        </div>
        <ErrorMessage error={nameError} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label
          htmlFor="affiliation"
          text="Affiliation and Position (Optional)"
        />
        <Input
          type="text"
          name="affiliation"
          placeholder="musico Co., Ltd. Sales Department Manager"
          defaultValue={actionState?.formObject?.affiliation}
        />
        <ErrorMessage error={actionState?.errors?.affiliation} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="Email Address" htmlFor="email" required />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="musico@example.com"
          defaultValue={actionState?.formObject?.email}
        />
        <ErrorMessage error={actionState?.errors?.email} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="Phone Number (Optional)" htmlFor="phoneNumber" />
        <Input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="0901234567"
          defaultValue={actionState?.formObject?.phoneNumber}
        />
        <ErrorMessage error={actionState?.errors?.phoneNumber} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="Inquiry Type" htmlFor="inquiryType" required />
        <SelectInquiryType
          language="en"
          defaultValue={actionState?.formObject?.inquiryType}
        />
        <ErrorMessage error={actionState?.errors?.inquiryType} />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label
          text="Inquiry Details (within 4000 characters)"
          htmlFor="inquiryDetails"
          required
        />
        <Textarea
          name="inquiryDetails"
          id="inquiryDetails"
          className="h-[300px]"
          defaultValue={actionState?.formObject?.inquiryDetails}
        />
        <ErrorMessage error={actionState?.errors?.inquiryDetails} />
      </div>
      <Button
        text={isPending ? 'Sending...' : 'Submit'}
        className="rounded-full px-20 py-4 text-lg mx-auto"
        disabled={isPending}
      />
    </form>
  )
}
