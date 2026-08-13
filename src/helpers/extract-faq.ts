import { removeHtmlTag } from './remove-html-tag'

export type ExtractedFaq = { question: string; answer: string }

// microCMS のリッチエディタで書いた本文から FAQ を取り出す。
// insights 記事の FAQ は「<h2>よくあるご質問|FAQ</h2>」のあとに
// <h3>設問</h3><p>回答</p> が並ぶ形で統一されている（全9記事で実測）。
// 本文が構造化データの唯一のソースなので、記事を直せば schema も追従する。
// ⚠️ 見出し文言は記事ごとに揺れている。実測（2026-08-13・全18ページ）では
// 日本語=「よくあるご質問」、英語=第9記事のみ「FAQ」で残り8本は
// 「Frequently Asked Questions」だった。新しい表記を使った記事を足すときは
// ここに追加すること（追加し忘れるとその記事だけ schema が静かに消える）。
const FAQ_HEADING =
  /<h2[^>]*>\s*(?:よくあるご質問|よくある質問|FAQ|FAQs|Frequently Asked Questions)\s*<\/h2>/i
const QA_PAIR = /<h3[^>]*>([\s\S]*?)<\/h3>\s*((?:<p[^>]*>[\s\S]*?<\/p>\s*)+)/gi

export const extractFaqFromHtml = (html: string | undefined): ExtractedFaq[] => {
  if (!html) return []

  const heading = FAQ_HEADING.exec(html)
  if (!heading) return []

  // FAQ 見出し以降だけを対象にする（本文中の h3 を設問として拾わないため）
  const section = html.slice(heading.index + heading[0].length)

  const faqs: ExtractedFaq[] = []
  QA_PAIR.lastIndex = 0

  let match: RegExpExecArray | null = QA_PAIR.exec(section)
  while (match) {
    const question = removeHtmlTag(match[1]).trim()
    const answer = removeHtmlTag(match[2]).replace(/\s+/g, ' ').trim()

    if (question && answer) faqs.push({ question, answer })

    match = QA_PAIR.exec(section)
  }

  return faqs
}
