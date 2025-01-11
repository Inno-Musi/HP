'use client'

import { Button } from '@/components/button'
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

  return (
    <form
      action={formAction}
      className="bg-white px-6 py-8 max-w-[800px] mx-auto w-full flex flex-col gap-y-6 rounded-md"
    >
      <div className="flex flex-col gap-y-1">
        <Label text="Full Name" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="firstName"
            className="w-full"
            placeholder="First Name"
          />
          <Input
            type="text"
            name="middleName"
            className="w-full"
            placeholder="Middle Name (Optional)"
          />
          <Input
            type="text"
            name="lastName"
            className="w-full"
            placeholder="Last Name"
          />
        </div>
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
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="Email Address" htmlFor="email" required />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="musico@example.com"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="Phone Number" htmlFor="phoneNumber" required />
        <Input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="09012345678"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label text="Inquiry Type" htmlFor="inquiryType" required />
        <SelectInquiryType language="en" />
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
        />
      </div>
      <Button
        text={isPending ? 'Sending...' : 'Submit'}
        className="rounded-full px-20 py-4 text-lg mx-auto"
        disabled={isPending}
      />
    </form>
  )
}
