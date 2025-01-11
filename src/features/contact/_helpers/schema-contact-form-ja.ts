import { z } from 'zod'

export const schemaContactFormJa = z.object({
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
  affiliation: z.string().optional(),
  email: z.string().email('メールアドレスの形式で入力してください'),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10,11}$/, '半角整数10桁または11桁で入力してください'),
  inquiryType: z.string().min(1, 'お問い合わせ種別を選択してください'),
  inquiryDetails: z
    .string()
    .min(1, 'お問い合わせ内容を入力してください')
    .max(2000, '2000文字以内で入力してください'),
})
