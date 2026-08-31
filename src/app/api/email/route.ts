import {
  type ContactEmailPayload,
  sendEmailNotification,
} from '@/services/email/send-email-notification'
import { type NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const apiKey = req.headers.get('X-API-KEY')
  if (apiKey !== process.env.X_API_KEY) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = (await req.json()) as ContactEmailPayload
  if (body.template !== 'contact') {
    return NextResponse.json(
      { error: 'Invalid email template specified' },
      { status: 400 },
    )
  }

  const result = await sendEmailNotification(body)

  if (result.status === 'error') {
    return NextResponse.json(result, { status: 500 })
  }

  return NextResponse.json(result, { status: 201 })
}
