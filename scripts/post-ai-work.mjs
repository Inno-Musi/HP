// One-off: publish the "AI活用・AX・DX事例" first case (Semoto's in-house
// payables management system) to the microCMS `works` API.
// Content provided by Semoto (代表) via chat; confidential details generalized.
//
// Usage: node scripts/post-ai-work.mjs        (POST as published)
//        node scripts/post-ai-work.mjs --draft (POST as draft)

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { buildBody } from './seed-works.mjs'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const root = resolve(import.meta.dirname, '..')
const env = readFileSync(resolve(root, '.env.local'), 'utf8')
const KEY = env
  .split('\n')
  .find((l) => l.startsWith('MICROCMS_API_KEY='))
  ?.split('=')[1]
  ?.trim()

const STATUS = process.argv.includes('--draft') ? 'draft' : 'publish'
const ENDPOINT = 'https://musico-hp.microcms.io/api/v1/works'

const work = {
  slug: 'ai-payables-management',
  titleJa: '債務管理システムの内製化 — AI・自動化で支払業務を再設計する',
  titleEn:
    'Building an In-House Payables Management System — Redesigning Payment Operations with AI and Automation',
  categoryJa: 'AI活用・AX・DX / 社内業務DX',
  categoryEn: 'AI / AX / DX / Internal Operations',
  descriptionJa:
    '請求書の受領から支払データ作成までを生成AIと自動化で再設計した、MUSICOの社内経理DX事例。属人化していた支払業務を「AIが下ごしらえ、人が最終判断」の仕組みに作り替えました。',
  descriptionEn:
    'A MUSICO internal finance DX case: we redesigned the entire payables process—from invoice intake to payment-file creation—with generative AI and automation, turning a manual, person-dependent workflow into a system where AI does the groundwork and people make the final call.',
  summaryJa: [
    'MUSICOは「品質が全て」「仕組みで勝つ」という考え方を、現場のホスピタリティだけでなく、それを支えるバックオフィスにも一貫して適用しています。とりわけ毎月発生する取引先への支払業務は、請求書の確認・仕分け・台帳への転記・振込データの作成と工程が多く、担当者の経験に依存しやすい領域でした。',
    'そこで代表自らが、請求書の受領から支払データの作成までを生成AIと自動化で再設計した「債務管理システム」を内製で開発しました。請求書を集約すると、生成AI（Claude）が記載内容を読み取り、支払先や勘定科目を判定します。確認を経て全銀フォーマットの支払データに変換し、オンラインバンキングへの取り込みまでを一気通貫で行います。最終的な承認と振込の実行は必ず人が担い、「AIが下ごしらえをし、人が最終判断を下す」二層構造でガバナンスを保っています。',
    '結果として、仕分けや転記に費やしていた工数を大幅に削減し、手作業に起因する転記ミスを抑え、これまで属人的だった経理業務を再現可能な仕組みへと変えました。テクノロジーを現場のためのインフラと捉え、ホスピタリティの品質を裏側から支える——これもMUSICOが実践するDXのかたちです。',
  ].join('\n'),
  summaryEn: [
    'At MUSICO, the principles of "quality is everything" and "winning through systems" apply not only to frontline hospitality but to the back office that supports it. Monthly payments to suppliers were a prime example: checking invoices, sorting them, transcribing them into ledgers, and preparing transfer data involved many steps and relied heavily on individual experience.',
    'To address this, our representative personally developed an in-house "payables management system" that redesigns the entire flow—from receiving invoices to generating payment data—using generative AI and automation. Once invoices are gathered, generative AI (Claude) reads their contents and determines the payee and accounting category. After review, the data is converted into a standardized bank-transfer payment file and carried all the way through to upload into online banking. Final approval and execution of each transfer are always handled by a person, preserving governance through a two-layer structure: AI prepares the groundwork, and people make the final decision.',
    'As a result, we have significantly reduced the hours spent on sorting and transcription, curbed manual transcription errors, and turned a previously person-dependent finance operation into a repeatable system. Treating technology as infrastructure for the frontline and supporting the quality of hospitality from behind the scenes—this, too, is what DX looks like at MUSICO.',
  ].join('\n'),
  initiativesJa: [
    '請求書の受領・集約から支払データ作成までの業務フロー全体の再設計',
    '生成AIによる請求書PDFの読取・支払先／勘定科目の自動判定',
    '全銀フォーマット支払データの自動生成とオンラインバンキング連携',
    '「AIが下ごしらえ・人が最終承認」の二層チェック体制の構築',
    '経理ノウハウのシステム化による属人化の解消・内製化',
  ],
  initiativesEn: [
    'Redesign of the end-to-end workflow, from invoice intake and consolidation to payment-data creation',
    'Automated reading of invoice PDFs and classification of payee / accounting category using generative AI',
    'Automatic generation of standardized bank-transfer payment files and integration with online banking',
    'A two-layer check structure: AI prepares, people give final approval',
    'Systematizing finance know-how to eliminate person-dependency and enable in-house operation',
  ],
  areasJa: '業務設計 / 自動化実装 / 生成AI活用 / 経理オペレーション / 内製化',
  areasEn:
    'Process design / Automation engineering / Generative AI / Finance operations / In-house development',
}

const main = async () => {
  if (!KEY) {
    console.error('MICROCMS_API_KEY not found in .env.local')
    process.exit(1)
  }
  const body = buildBody(work)
  const res = await fetch(`${ENDPOINT}?status=${STATUS}`, {
    method: 'POST',
    headers: { 'X-MICROCMS-API-KEY': KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  console.log(`${res.status}  status=${STATUS}  ${work.slug}  ${await res.text()}`)
}

// Run only when executed directly — NOT on import — to avoid an accidental
// duplicate POST. The work has already been published once.
if (
  process.argv[1] &&
  import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/').split('/').pop())
) {
  main()
}
