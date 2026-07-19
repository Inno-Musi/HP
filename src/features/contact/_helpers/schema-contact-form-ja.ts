import { z } from 'zod'

export const schemaContactFormJa = z.object({
  lastName: z.string().min(1, '姓を入力してください'),
  firstName: z.string().min(1, '名を入力してください'),
  lastNameKana: z
    .string()
    .refine(
      (value) => value === '' || /^[ァ-ヴー]+$/u.test(value),
      '姓（カタカナ）は全角カナ文字で入力してください',
    ),
  firstNameKana: z
    .string()
    .refine(
      (value) => value === '' || /^[ァ-ヴー]+$/u.test(value),
      '名（カタカナ）は全角カナ文字で入力してください',
    ),
  affiliation: z.string().optional(),
  email: z.string().email('メールアドレスの形式で入力してください'),
  phoneNumber: z
    .string()
    .refine(
      (value) => value === '' || /^[0-9]{10,11}$/.test(value),
      '半角整数10桁または11桁で入力してください',
    ),
  inquiryType: z.string().min(1, 'お問い合わせ種別を選択してください'),
  inquiryDetails: z
    .string()
    .min(1, 'お問い合わせ内容を入力してください')
    .max(2000, '2000文字以内で入力してください'),
})
