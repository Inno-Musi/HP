import ContactFormUser from '@/react-email-starter/emails/contact-from-user'
import RecruitFormUser from '@/react-email-starter/emails/recruit-form-user'
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
    
    // メールテンプレートのマッピング
    const mailTemplateMap: { [key: string]: any } = {
      contact: ContactFormUser,
      recruit: RecruitFormUser,
    }

    const TemplateComponent = mailTemplateMap[body.template]

    if (!TemplateComponent) {
      return NextResponse.json({ error: 'Invalid email template specified' }, { status: 400 })
    }

    const htmlContent = await render(TemplateComponent(body.props))

    const mailOptions: any = {
      from: process.env.SENDER_EMAIL ?? 'MUSICO Web <noreply@musico.co.jp>',
      to: 'info@musico.co.jp',
      subject: body.subject,
      html: htmlContent,
    }

    // 添付ファイルがある場合の処理 (採用応募フォームのみ)
    if (body.template === 'recruit' && body.attachments && body.attachments.length > 0) {
      mailOptions.attachments = body.attachments.map((att: { filename: string; content: string }) => ({
        filename: att.filename,
        content: att.content,
      }))
    }
    
    await resend.emails.send(mailOptions)

    return NextResponse.json(
      { status: 'success', message: body.template === 'recruit' ? '採用応募をメールで通知しました。' : 'お問い合わせをメールで通知しました。' },
      { status: 201 },
    )
  } catch (error) {
    console.error("Email sending error:", error)
    // エラーオブジェクトの内容をより詳細にログ出力
    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    } else {
      console.error("Unknown error type:", typeof error, error)
    }
    return NextResponse.json(
      { status: 'error', message: 'メールの送信に失敗しました' },
      { status: 500 },
    )
  }
}
