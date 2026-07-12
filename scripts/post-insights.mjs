// One-off: publish the initial 5 insights articles (from src/services/insights/dev-seed.json)
// to the microCMS `insights` API.
//
// Usage: node scripts/post-insights.mjs         (POST as published)
//        node scripts/post-insights.mjs --draft (POST as draft)
//
// Prereq: microCMS `insights` API must exist (docs/microcms-insights-schema.md)
//         and the Content API key must have POST permission on it.

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const root = resolve(import.meta.dirname, '..')
const env = readFileSync(resolve(root, '.env.local'), 'utf8')
const KEY = env
  .split('\n')
  .find((l) => l.startsWith('MICROCMS_API_KEY='))
  ?.split('=')[1]
  ?.trim()

const STATUS = process.argv.includes('--draft') ? 'draft' : 'publish'
const ENDPOINT = 'https://musico-hp.microcms.io/api/v1/insights'

// スキーマ上のフィールドだけをPOSTする（id/publishedAt等のseed用メタは除外）
const FIELDS = [
  'slug',
  'titleJa',
  'titleEn',
  'descriptionJa',
  'descriptionEn',
  'categoryJa',
  'categoryEn',
  'contentJa',
  'contentEn',
]

const main = async () => {
  if (!KEY) {
    console.error('MICROCMS_API_KEY not found in .env.local')
    process.exit(1)
  }
  const seed = JSON.parse(
    readFileSync(resolve(root, 'src/services/insights/dev-seed.json'), 'utf8'),
  )
  const items = Array.isArray(seed) ? seed : seed.contents
  for (const item of items) {
    const body = {}
    for (const f of FIELDS) {
      if (item[f] != null && item[f] !== '') body[f] = item[f]
    }
    const res = await fetch(`${ENDPOINT}?status=${STATUS}`, {
      method: 'POST',
      headers: { 'X-MICROCMS-API-KEY': KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    console.log(`${res.status}  status=${STATUS}  ${item.slug}  ${await res.text()}`)
    await new Promise((r) => setTimeout(r, 1200))
  }
}

// Run only when executed directly — NOT on import — to avoid accidental
// duplicate POSTs (same guard convention as post-ai-work.mjs).
if (
  process.argv[1] &&
  import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/').split('/').pop())
) {
  main()
}
