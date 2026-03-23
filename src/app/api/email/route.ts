import ContactFormUser from '@/react-email-starter/emails/contact-from-user'
import RecruitFormUser from '@/react-email-starter/emails/recruit-form-user'
import type { EmailPayload } from '@/services/email/types'
import { render } from '@react-email/render'
import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const POST = async (req: NextRequest) => {
  try {
    const apiKey = req.headers.get('X-API-KEY')
    if (apiKey !== process.env.X_API_KEY) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = (await req.json()) as EmailPayload

    const resend = new Resend(process.env.RESEND_API_KEY)

    if (body.template !== 'contact' && body.template !== 'recruit') {
      return NextResponse.json(
        { error: 'Invalid email template specified' },
        { status: 400 },
      )
    }

    const htmlContent =
      body.template === 'contact'
        ? await render(ContactFormUser(body.props))
        : await render(RecruitFormUser(body.props))

    const mailOptions = {
      from: process.env.SENDER_EMAIL ?? 'MUSICO Web <noreply@musico.co.jp>',
      to: 'info@musico.co.jp',
      subject: body.subject,
      html: htmlContent,
      attachments: body.template === 'recruit' ? body.attachments : undefined,
    }

    await resend.emails.send(mailOptions)

    return NextResponse.json(
      { status: 'success', message: body.template === 'recruit' ? '採用応募をメールで通知しました。' : 'お問い合わせをメールで通知しました。' },
      { status: 201 },
    )
  } catch (error) {
    console.error('Email sending error:', error)
    if (error instanceof Error) {
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    } else {
      console.error('Unknown error type:', typeof error, error)
    }
    return NextResponse.json(
      { status: 'error', message: 'メールの送信に失敗しました' },
      { status: 500 },
    )
  }
}
