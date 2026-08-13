import { z } from 'zod'
import { normalizePhoneNumber } from './normalize-input'

// Required: first/last name, email, inquiry type, inquiry details.
// Optional fields are normalised but never block submission.
// ⚠️ phoneNumber previously required exactly 10 digits, which rejected every
// 11-digit Japanese mobile number — the JA form has always allowed 10–11.
export const schemaContactFormEn = z.object({
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required'),
  affiliation: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.preprocess(normalizePhoneNumber, z.string()),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  inquiryDetails: z
    .string()
    .min(1, 'Please enter an inquiry details')
    .max(4000, 'Please enter a maximum of 4000 characters'),
})
