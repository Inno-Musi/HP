import { getSiteUrl } from '@/lib/site-url'
import type { ContactEmailProps } from './types'

type ContactEmailPayload = {
  template: 'contact'
  props: ContactEmailProps
  subject: string
}

export const sendEmailNotification = async (payload: ContactEmailPayload) =>
  fetch(getSiteUrl('/api/email'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.X_API_KEY ?? '',
    },
    body: JSON.stringify(payload),
  })
