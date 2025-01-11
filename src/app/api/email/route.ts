import { type NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const origin = req.headers.get('origin')

  const allowedOrigin =
    process.env.ENVIRONMENT === 'development'
      ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`

  if (origin !== allowedOrigin) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
}
