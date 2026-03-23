import ContactFormUser from '@/react-email-starter/emails/contact-from-user'
import type { ContactEmailProps } from '@/services/email/types'
import { render } from '@react-email/render'
import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactEmailPayload = {
  template: 'contact'
  props: ContactEmailProps
  subject: string
}

export const POST = async (req: NextRequest) => {
  try {
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

    const resend = new Resend(process.env.RESEND_API_KEY)
    const htmlContent = await render(ContactFormUser(body.props))

    await resend.emails.send({
      from: process.env.SENDER_EMAIL ?? 'MUSICO Web <noreply@musico.co.jp>',
      to: 'info@musico.co.jp',
      subject: body.subject,
      html: htmlContent,
    })

    return NextResponse.json(
      { status: 'success', message: 'お問い合わせをメールで通知しました。' },
      { status: 201 },
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { status: 'error', message: 'メールの送信に失敗しました' },
      { status: 500 },
    )
  }
}
