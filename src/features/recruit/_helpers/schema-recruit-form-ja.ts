import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export const schemaRecruitFormJa = z.object({
  jobId: z.string(),
  lastName: z.string().min(1, '姓を入力してください'),
  firstName: z.string().min(1, '名を入力してください'),
  lastNameKana: z
    .string()
    .min(1, '姓（カタカナ）を入力してください')
    .regex(/^[ァ-ヴー]+$/u, '姓（カタカナ）は全角カナ文字で入力してください'),
  firstNameKana: z
    .string()
    .min(1, '名（カタカナ）を入力してください')
    .regex(/^[ァ-ヴー]+$/u, '名（カタカナ）は全角カナ文字で入力してください'),
  email: z.string().email('メールアドレスの形式で入力してください'),
  phoneNumber: z
    .string()
    .min(1, '電話番号を入力してください')
    .regex(/^[0-9]{10,11}$/, '電話番号は半角数字10桁または11桁で入力してください（ハイフンなし）'),
  resumeFile: z
    .any()
    .refine((file) => !!file && file.size > 0, '履歴書・職務経歴書を選択してください。')
    .refine((file) => file.size <= MAX_FILE_SIZE, `ファイルサイズは5MB以下にしてください。`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      '.pdf, .doc, .docx のファイルを選択してください。',
    ),
  coverLetter: z.string().max(2000, '2000文字以内で入力してください').optional(),
}); 
