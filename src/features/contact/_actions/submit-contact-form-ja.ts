'use server'

import { schemaContactFormJa } from '../_helpers/schema-contact-form-ja'

export const submitContactFormJa = async (
  _prevState: any,
  formData: FormData,
) => {
  const formObject = Object.fromEntries(formData.entries())
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
    }
  }
}
