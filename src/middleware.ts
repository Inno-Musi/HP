import { type NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
    return NextResponse.next()
  }

  const basicAuth = req.headers.get('Authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, password] = atob(authValue).split(':')

    if (user === 'admin' && password === 'adminuser55') {
      return NextResponse.next()
    }
  }

  return NextResponse.json(
    { error: 'Basic Auth Required' },
    {
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
      status: 401,
    },
  )
}
