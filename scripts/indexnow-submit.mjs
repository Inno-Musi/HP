// IndexNow へ URL を送信する。Bing/Yandex 等に更新を即時通知でき、
// 新規ドメインのインデックスが速くなる。
//
//   node scripts/indexnow-submit.mjs --dry-run
//   node scripts/indexnow-submit.mjs https://www.musico.co.jp/ja/insights/office-coffee-options
//   node scripts/indexnow-submit.mjs --from-sitemap
//
// キーファイル(public/<KEY>.txt)が本番で200を返せることを送信前に必ず検証する。
// 検証を挟まないと、middleware にリダイレクトされていても IndexNow 側は
// 202 を返すため「送れたつもりで実は無効」という状態に気づけない。

const KEY = '2444ec73a3cf564159e848ce13a903a0'
const HOST = 'www.musico.co.jp'
const ORIGIN = `https://${HOST}`
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`
const ENDPOINT = 'https://api.indexnow.org/indexnow'
const MAX_URLS = 10000

const verifyKeyFile = async () => {
  const res = await fetch(KEY_LOCATION, { redirect: 'manual' })

  if (res.status !== 200) {
    throw new Error(
      `キーファイルが200を返しません (${res.status} ${res.headers.get('location') ?? ''})\n` +
        `  ${KEY_LOCATION}\n` +
        '  middleware の matcher が .txt を除外しているか確認してください。',
    )
  }

  const body = (await res.text()).trim()
  if (body !== KEY) {
    throw new Error(
      `キーファイルの中身がキーと一致しません\n  期待: ${KEY}\n  実際: ${body.slice(0, 80)}`,
    )
  }
}

const urlsFromSitemap = async () => {
  const xml = await fetch(`${ORIGIN}/sitemap.xml`).then((r) => r.text())
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

const main = async () => {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const fromSitemap = args.includes('--from-sitemap')
  const explicit = args.filter((a) => a.startsWith('http'))

  console.log('キーファイルを検証中: ' + KEY_LOCATION)
  await verifyKeyFile()
  console.log('  OK')

  const urlList = fromSitemap ? await urlsFromSitemap() : explicit

  if (urlList.length === 0) {
    console.log(
      'URLが指定されていません。URLを引数で渡すか --from-sitemap を付けてください。',
    )
    return
  }

  const foreign = urlList.filter((u) => !u.startsWith(`${ORIGIN}/`))
  if (foreign.length > 0) {
    throw new Error(`${HOST} 以外のURLが含まれています: ${foreign[0]}`)
  }

  if (urlList.length > MAX_URLS) {
    throw new Error(`URLが多すぎます (${urlList.length} > ${MAX_URLS})`)
  }

  console.log(`送信対象 ${urlList.length} 件`)
  for (const u of urlList) console.log('  ' + u.replace(ORIGIN, ''))

  if (dryRun) {
    console.log('[dry-run] 送信はしていません。')
    return
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  })

  // 200=受理 / 202=受理(キー検証中) がいずれも正常
  console.log(`IndexNow レスポンス: ${res.status} ${res.statusText}`)
  if (res.status !== 200 && res.status !== 202) {
    console.log(await res.text())
    process.exitCode = 1
  }
}

// 直接実行時のみ走らせる（import しただけで送信してしまう事故の防止）
if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, '/')}`) {
  main().catch((e) => {
    console.error('失敗: ' + e.message)
    process.exitCode = 1
  })
}
