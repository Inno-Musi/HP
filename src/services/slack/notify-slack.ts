export const notifySlack = async (message: string) => {
  if (!process.env.SLACK_WEBHOOK_URL) {
    return {
      status: 'error',
      message: 'Slack Webhook URLが設定されていません。',
    }
  }

  const res = await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify({ text: message }),
  })

  if (!res.ok) {
    return {
      status: 'error',
      message: 'Slackに通知を送信できませんでした。',
    }
  }

  return { status: 'success', message: 'Slackに通知を送信しました。' }
}
