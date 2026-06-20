export const removeHtmlTag = (text: string) => {
  return text
    .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
}
