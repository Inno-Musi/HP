import { z } from 'zod'

// 中間CV（資料ダウンロード）は「まだ問い合わせるほどではない」層を拾うのが目的なので、
// 入力項目は営業判断に必要な最小限（お名前・会社名・メール）に絞る。
// 問い合わせフォーム側の教訓（必須9項目でCVR 0%）を踏まえ、ここを増やさないこと。
export const schemaMaterialFormJa = z.object({
  name: z.string().min(1, 'お名前を入力してください').max(100),
  company: z.string().min(1, '会社名を入力してください').max(200),
  email: z.string().email('メールアドレスの形式で入力してください'),
})

export const schemaMaterialFormEn = z.object({
  name: z.string().min(1, 'Please enter your name.').max(100),
  company: z.string().min(1, 'Please enter your company name.').max(200),
  email: z.string().email('Please enter a valid email address.'),
})
