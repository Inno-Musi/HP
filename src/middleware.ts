import { type NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname
  const pathSegments = pathname.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]

  if (pathSegments.length === 0) {
    const url = req.nextUrl.clone()
    url.pathname = '/ja'
    return NextResponse.redirect(url, 308)
  }

  // ロケール無しの旧URL（/about・/works 等）は、トップではなく
  // 同じパスの日本語版へ送る。トップへ丸めるとGoogleがソフト404扱いし、
  // 旧URLの被リンク・ブックマークの評価も落ちるため。
  if (!['ja', 'en'].includes(firstSegment)) {
    const url = req.nextUrl.clone()
    url.pathname = `/ja/${pathSegments.join('/')}`
    return NextResponse.redirect(url, 308)
  }

  if (pathSegments[1] === 'philosophy') {
    const url = req.nextUrl.clone()
    url.pathname = `/${firstSegment}/about`
    return NextResponse.redirect(url, 308)
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
    // 拡張子付きの静的ファイルはロケール付与の対象外。
    // ここに漏れると /manifest.webmanifest のように 308 → /ja へ飛ばされ、
    // ファイルとして配信されなくなる（llms.txt で発生した事象と同型）。
    '/((?!api|_next/static|_next/image|favicon.ico|googlefba99e68cb98d5c1.html|sitemap.xml|robots.txt|llms.txt|manifest.webmanifest|public|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|txt|xml|json|webmanifest|woff|woff2|ttf|otf|pdf|mp4|webm|css|js|map)$).*)',
  ],
}
