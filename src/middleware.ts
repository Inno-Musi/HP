import { type NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname
  const pathSegments = pathname.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]

  if (pathSegments.length === 0 || !['ja', 'en'].includes(firstSegment)) {
    return NextResponse.redirect(new URL('/ja', req.url), 308)
  }

  if (pathSegments[1] === 'philosophy') {
    return NextResponse.redirect(
      new URL(`/${pathSegments[0]}/about`, req.url),
      308,
    )
  }

  // BASIC認証
  // if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
  //   return NextResponse.next()
  // }

  // const basicAuth = req.headers.get('Authorization')

  // if (basicAuth) {
  //   const authValue = basicAuth.split(' ')[1]
  //   const [user, password] = atob(authValue).split(':')

  //   if (user === 'admin' && password === 'adminuser55') {
  //     return NextResponse.next()
  //   }
  // }

  // return NextResponse.json(
  //   { error: 'Basic Auth Required' },
  //   {
  //     headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
  //     status: 401,
  //   },
  // )
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|googlefba99e68cb98d5c1.html|sitemap.xml|robots.txt|llms.txt|public|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp)$).*)',
  ],
}
