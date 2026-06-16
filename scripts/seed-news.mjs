// One-off: seed microCMS `news` with the 7 announcement drafts.
// NOTE: the microCMS `news` API does not exist yet (GET returns 404).
// This seeder is ready for when that API is created in the admin.
// For now it also powers src/services/news/dev-seed.json for local preview.
//
// Usage:
//   node scripts/seed-news.mjs --draft    (POST as draft once the API exists)
//   node scripts/seed-news.mjs --publish  (POST as published)
//
// Dates below are PLACEHOLDERS (inventory marks them 要確定) — confirm with
// Semoto before any production publish.

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

const STATUS = process.argv.includes('--publish') ? 'publish' : 'draft'
const ENDPOINT = 'https://musico-hp.microcms.io/api/v1/news'

const p = (body) =>
  body
    .split('\n')
    .filter(Boolean)
    .map((line) => `<p>${line}</p>`)
    .join('')

const news = [
  {
    publishedAt: '2026-06-16T00:00:00.000Z', // 要確定
    titleJa: 'コーポレートサイトを公開しました',
    titleEn: 'We have launched our corporate website',
    bodyJa:
      '株式会社MUSICOのコーポレートサイトを公開しました。「Innovating Hospitality, End to End」をミッションに、ホスピタリティ領域の戦略・空間・運用を一気通貫で支援する当社の事業をご紹介しています。',
    bodyEn:
      'We have launched the MUSICO corporate website. Under our mission "Innovating Hospitality, End to End," it introduces how we support strategy, space, and operations across the hospitality domain.',
  },
  {
    publishedAt: '2026-06-13T00:00:00.000Z', // 要確定
    titleJa: '有料職業紹介事業・労働者派遣事業の許可を取得しました',
    titleEn: 'We obtained paid placement and worker dispatch licenses',
    bodyJa:
      '当社は、有料職業紹介事業（許可番号：13-ユ-319136）および労働者派遣事業（許可番号：派13-318465）の許可を取得しました。ホスピタリティ領域に精通したチームが、採用要件の定義から定着支援まで人材支援をワンストップでご提供します。',
    bodyEn:
      'We have obtained licenses for paid employment placement (No. 13-ユ-319136) and worker dispatch (No. 派13-318465). Our team, fluent in hospitality, provides end-to-end talent support from defining hiring requirements to retention.',
  },
  {
    publishedAt: '2026-06-12T00:00:00.000Z', // 要確定
    titleJa: '事業内容（5領域）を公開しました',
    titleEn: 'We published our services (five domains)',
    bodyJa:
      'コーポレートフードサービス、ケータリングサービス、地方創生支援、現場DX・AI導入支援、人材支援の5領域で、戦略立案から現場運営まで一気通貫の支援を提供しています。',
    bodyEn:
      'Across five domains — corporate food service, catering, regional revitalization, on-site DX/AI implementation, and talent support — we provide end-to-end support from strategy to on-site operations.',
  },
  {
    publishedAt: '2026-06-11T00:00:00.000Z', // 要確定
    titleJa: '実績・事例ページを公開しました',
    titleEn: 'We published our works & case studies',
    bodyJa:
      '外資系金融機関のオフィスホスピタリティ、リゾートF&B、オフィス移転F&Bプロジェクトマネジメント、地方創生まで、これまでのプロジェクト事例を「実績・事例」ページに公開しました。',
    bodyEn:
      'From office hospitality for global financial institutions to resort F&B, office-relocation F&B project management, and regional revitalization, we have published our past projects on the Works page.',
  },
  {
    publishedAt: '2026-06-10T00:00:00.000Z', // 要確定
    titleJa: '米国系投資銀行のオフィスホスピタリティ運営を担当しています',
    titleEn: 'We operate office hospitality for a US investment bank',
    bodyJa:
      '米国系大手投資銀行の東京オフィスにて、エグゼクティブダイニングおよびオフィスカフェの統合運営を担当しています。金融グレードの守秘義務・米国本社水準の品質基準・グローバル接遇に対応します。',
    bodyEn:
      'At the Tokyo office of a major US investment bank, we run the integrated operation of executive dining and an office café — meeting finance-grade confidentiality, US-HQ quality standards, and global hospitality expectations.',
  },
  {
    publishedAt: '2026-06-09T00:00:00.000Z', // 要確定
    titleJa: '北海道道東エリアで地方創生プロジェクトを推進しています',
    titleEn: 'We are driving a regional revitalization project in eastern Hokkaido',
    bodyJa:
      '自治体・まちづくり会社と共創し、地域の一次産業を起点とした事業群（ワイナリー建設、地域乳業とのチーズ工房、マルシェ再生、ふるさと納税商品開発）を立ち上げています。ホスピタリティを地域価値創造の手段として体現するプロジェクトです。',
    bodyEn:
      'Co-creating with local governments and a town-development company, we are launching primary-industry-rooted ventures — winery construction, a cheese workshop with a regional dairy, marché revival, and hometown-tax product development — embodying hospitality as a means of regional value creation.',
  },
  {
    publishedAt: '2026-06-06T00:00:00.000Z', // 要確定
    titleJa: '採用情報を公開しました（Wantedlyで募集中）',
    titleEn: 'We are hiring (now open on Wantedly)',
    bodyJa:
      'ホスピタリティとテクノロジーの力で新しい価値を生み出すメンバーを募集しています。学生インターン、広報、F&BプロジェクトPMなど多様なポジションを、Wantedlyにて公開中です。',
    bodyEn:
      'We are looking for people to create new value through hospitality and technology. A variety of positions — student interns, PR, and F&B project PMs — are open now on Wantedly.',
  },
]

export const buildBody = (n) => ({
  titleJa: n.titleJa,
  titleEn: n.titleEn,
  contentJa: p(n.bodyJa),
  contentEn: p(n.bodyEn),
})

export const newsItems = news.map((n, i) => ({
  id: `news-${i + 1}`,
  publishedAt: n.publishedAt,
  ...buildBody(n),
}))

const main = async () => {
  if (!KEY) {
    console.error('MICROCMS_API_KEY not found in .env.local')
    process.exit(1)
  }
  console.log(`Seeding ${news.length} news as status=${STATUS}\n`)
  for (const n of news) {
    const res = await fetch(`${ENDPOINT}?status=${STATUS}`, {
      method: 'POST',
      headers: { 'X-MICROCMS-API-KEY': KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify(buildBody(n)),
    })
    console.log(`${res.status}  ${n.titleJa}  ${await res.text()}`)
  }
  console.log(
    '\nIf you see 404: the microCMS `news` API does not exist yet — create it first.',
  )
}

if (
  process.argv[1] &&
  import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/').split('/').pop())
) {
  main()
}
