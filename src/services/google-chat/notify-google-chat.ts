/**
 * Google Chat スペースの Incoming Webhook へテキスト通知を送る。
 *
 * - 通知は「あれば助かる」副次経路。失敗しても問い合わせ本体（メール送信・完了ページ遷移）を
 *   止めてはいけないので、ここからは決して throw しない（URL不正・ネットワーク断も握って返す）。
 * - Webhook URL は Google Chat のスペース →「アプリと統合」→「Webhook」で発行し、
 *   Vercel の環境変数 GOOGLE_CHAT_WEBHOOK_URL に設定する。
 */
export const notifyGoogleChat = async (message: string) => {
  const url = process.env.GOOGLE_CHAT_WEBHOOK_URL?.trim()
  if (!url) {
    return {
      status: 'error' as const,
      message: 'Google Chat Webhook URLが設定されていません。',
    }
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ text: message }),
    })

    if (!res.ok) {
      console.error('[notifyGoogleChat] non-OK response:', res.status)
      return {
        status: 'error' as const,
        message: 'Google Chatに通知を送信できませんでした。',
      }
    }

    return { status: 'success' as const, message: 'Google Chatに通知を送信しました。' }
  } catch (error) {
    console.error('[notifyGoogleChat] failed:', error)
    return {
      status: 'error' as const,
      message: 'Google Chatへの通知で例外が発生しました。',
    }
  }
}
