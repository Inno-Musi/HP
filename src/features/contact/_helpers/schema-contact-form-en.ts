import { z } from 'zod'

export const schemaContactFormEn = z.object({
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required'),
  affiliation: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z
    .string()
    .refine(
      (value) => value === '' || /^[0-9]{10}$/.test(value),
      'Please enter a 10-digit integer in half-width characters.',
    ),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  inquiryDetails: z
    .string()
    .min(1, 'Please enter an inquiry details')
    .max(4000, 'Please enter a maximum of 4000 characters'),
})
