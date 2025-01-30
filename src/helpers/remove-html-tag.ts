export const removeHtmlTag = (text: string) => {
  return text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
}
