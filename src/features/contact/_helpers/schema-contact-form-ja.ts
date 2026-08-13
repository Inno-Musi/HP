import { z } from 'zod'
import { normalizeKana, normalizePhoneNumber } from './normalize-input'

// 必須は お名前 / メールアドレス / お問い合わせ種別 / お問い合わせ内容 の4つだけ。
// 任意項目（ふりがな・所属・電話番号）は正規化するが、書式で送信を止めない。
// 理由は normalize-input.ts の冒頭コメント（GA4実測: 入力開始11・完了0）を参照。
export const schemaContactFormJa = z.object({
  lastName: z.string().min(1, '姓を入力してください'),
  firstName: z.string().min(1, '名を入力してください'),
  lastNameKana: z.preprocess(normalizeKana, z.string()),
  firstNameKana: z.preprocess(normalizeKana, z.string()),
  affiliation: z.string().optional(),
  email: z.string().email('メールアドレスの形式で入力してください'),
  phoneNumber: z.preprocess(normalizePhoneNumber, z.string()),
  inquiryType: z.string().min(1, 'お問い合わせ種別を選択してください'),
  inquiryDetails: z
    .string()
    .min(1, 'お問い合わせ内容を入力してください')
    .max(2000, '2000文字以内で入力してください'),
})
