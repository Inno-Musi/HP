// Publish the 7 `news` items. microCMS Content API cannot promote a draft-only
// item to published (PATCH keeps it draft; PUT rejects existing ids), so we
// delete the draft items and re-POST them as published with the intended dates.
// Requires DELETE + POST permission on the Content API key (enabled in admin).
//
// Usage: node scripts/publish-news.mjs

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { news, buildBody } from './seed-news.mjs'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const root = resolve(import.meta.dirname, '..')
const env = readFileSync(resolve(root, '.env.local'), 'utf8')
const KEY = env
  .split('\n')
  .find((l) => l.startsWith('MICROCMS_API_KEY='))
  ?.split('=')[1]
  ?.trim()

const ENDPOINT = 'https://musico-hp.microcms.io/api/v1/news'
const H = { 'X-MICROCMS-API-KEY': KEY, 'Content-Type': 'application/json' }

// Existing draft ids from the initial seed run, plus the one POST test item.
const staleIds = [
  'rm0_1q3dfb2',
  'ao5l59xkqke5',
  '7b_1bsvywpu',
  '7zyq9winpt3',
  '9mf9_b0fg',
  'bxwg1eex5gs',
  'lwcuylsf4wus',
  'jb4-trqgbens',
]

const main = async () => {
  if (!KEY) {
    console.error('MICROCMS_API_KEY not found in .env.local')
    process.exit(1)
  }

  console.log('--- Deleting stale draft/test items ---')
  for (const id of staleIds) {
    const res = await fetch(`${ENDPOINT}/${id}`, { method: 'DELETE', headers: H })
    console.log(`DELETE ${id}  ${res.status}  ${res.status === 202 ? 'ok' : await res.text()}`)
  }

  console.log('\n--- Posting as published ---')
  for (const n of news) {
    const body = { ...buildBody(n), publishedAt: n.publishedAt }
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: H,
      body: JSON.stringify(body),
    })
    console.log(`POST ${res.status}  ${n.publishedAt.slice(0, 10)}  ${n.titleJa}  ${await res.text()}`)
  }

  console.log('\n--- Verify (published list) ---')
  const g = await fetch(`${ENDPOINT}?fields=id,titleJa,publishedAt&limit=20`, { headers: H })
  const data = await g.json()
  console.log(`totalCount=${data.totalCount}`)
  for (const c of data.contents || []) console.log(`${c.publishedAt?.slice(0, 10)}  ${c.titleJa}`)
}

main()
