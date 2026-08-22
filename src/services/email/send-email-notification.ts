import { getSiteUrl } from '@/lib/site-url'
import type { ContactEmailProps } from './types'

type ContactEmailPayload = {
  template: 'contact'
  props: ContactEmailProps
  subject: string
}

/**
 * /api/email 経由で通知メールを送る。
 * fetch が例外を投げるケース（URL組み立て失敗・ネットワーク断など）でも呼び出し元に
 * 500 を伝播させず `{ ok: false }` を返す。原因は Vercel のランタイムログに残す。
 */
export const sendEmailNotification = async (
  payload: ContactEmailPayload,
): Promise<{ ok: boolean; status?: number }> => {
  try {
    const res = await fetch(getSiteUrl('/api/email'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.X_API_KEY ?? '',
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      console.error('[sendEmailNotification] non-OK response:', res.status)
    }
    return { ok: res.ok, status: res.status }
  } catch (error) {
    console.error('[sendEmailNotification] failed:', error)
    return { ok: false }
  }
}
