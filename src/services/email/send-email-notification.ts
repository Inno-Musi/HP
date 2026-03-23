import { getSiteUrl } from '@/lib/site-url'
import type { EmailPayload } from './types'

export const sendEmailNotification = async (payload: EmailPayload) =>
  fetch(getSiteUrl('/api/email'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.X_API_KEY ?? '',
    },
    body: JSON.stringify(payload),
  })
