const PRODUCTION_SITE_URL = 'https://www.musico.co.jp'

const normalizePath = (path: string) => (path.startsWith('/') ? path : `/${path}`)

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL
  }

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
    return 'http://localhost:3000'
  }

  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  return PRODUCTION_SITE_URL
}

export const getSiteUrl = (path = '/') =>
  new URL(normalizePath(path), getBaseUrl()).toString()
