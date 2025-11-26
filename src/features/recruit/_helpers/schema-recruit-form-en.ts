import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export const schemaRecruitFormEn = z.object({
  jobId: z.string(),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[0-9]+$/, 'Please enter a valid phone number (digits only).'),
  resumeFile: z
    .any()
    .refine((file) => !!file && file.size > 0, 'Please upload your resume/CV.')
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `File size must be 5MB or less.`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      'Please upload a .pdf, .doc, or .docx file.',
    ),
  coverLetter: z.string().max(4000, 'Please enter a maximum of 4000 characters').optional(),
}); 
