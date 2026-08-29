import ContactFormUser from '@/react-email-starter/emails/contact-from-user'
import { render } from '@react-email/render'
import { Resend } from 'resend'
import type { ContactEmailProps } from './types'

export type ContactEmailPayload = {
  template: 'contact'
  props: ContactEmailProps
  subject: string
}

export type NotificationResult = {
  status: 'success' | 'error'
  message: string
}

const RECIPIENT_EMAIL = 'info@musico.co.jp'

/**
 * フォームの通知メールを送る。
 * サーバーアクションから自分自身の /api/email を fetch すると、
 * ベースURLの設定ミスやAPIキー不一致で通知が丸ごと落ちるため直接送信する。
 * 例外は投げず、必ず結果を返す（呼び出し側が失敗を検知できるようにするため）。
 */
export const sendEmailNotification = async (
  payload: ContactEmailPayload,
): Promise<NotificationResult> => {
  if (!process.env.RESEND_API_KEY) {
    return {
      status: 'error',
      message: 'RESEND_API_KEYが設定されていません。',
    }
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const htmlContent = await render(ContactFormUser(payload.props))

    const { error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL ?? 'MUSICO Web <noreply@musico.co.jp>',
      to: RECIPIENT_EMAIL,
      subject: payload.subject,
      html: htmlContent,
    })

    // Resendはエラーを例外ではなく戻り値で返すため、必ず error を見る。
    if (error) {
      console.error('Email sending error:', error)

      return {
        status: 'error',
        message: error.message,
      }
    }

    return {
      status: 'success',
      message: 'お問い合わせをメールで通知しました。',
    }
  } catch (error) {
    console.error('Email sending error:', error)

    return {
      status: 'error',
      message: 'メールの送信に失敗しました',
    }
  }
}
