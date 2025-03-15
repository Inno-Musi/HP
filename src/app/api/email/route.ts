import ContactFormUser from '@/react-email-starter/emails/contact-from-user'
import { render } from '@react-email/render'
import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const POST = async (req: NextRequest) => {
  try {
    const apiKey = req.headers.get('X-API-KEY')
    if (apiKey !== process.env.X_API_KEY) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await req.json()

    const resend = new Resend(process.env.RESEND_API_KEY)
    const mailTemplateMap: { [key: string]: any } = {
      contact: ContactFormUser,
    }
    const Template = mailTemplateMap[body.template]
    const htmlContent = await render(
      Template({
        ...body.props,
      }),
    )

    await resend.emails.send({
      from: process.env.SENDER_EMAIL ?? '',
      to: 'ayumu_note@outlook.jp',
      // to: 'info@musico.co.jp',
      subject: body.subject,
      html: htmlContent,
    })

    return NextResponse.json(
      { status: 'success', message: 'お問い合わせをメールで通知しました。' },
      { status: 201 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { status: 'error', message: 'メールの送信に失敗しました' },
      { status: 500 },
    )
  }
}
