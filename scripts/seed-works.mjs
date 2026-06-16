// One-off: seed microCMS `works` with the 7 Wantedly case studies.
// Usage:
//   node scripts/seed-works.mjs --draft   (create as draft, default)
//   node scripts/seed-works.mjs --publish  (create as published)
// Reads MICROCMS_API_KEY from .env.local. SSL verify is disabled for the
// corporate-proxy environment (same as the dev server workaround).

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

if (!KEY) {
  console.error('MICROCMS_API_KEY not found in .env.local')
  process.exit(1)
}

const STATUS = process.argv.includes('--publish') ? 'publish' : 'draft'
const ENDPOINT = 'https://musico-hp.microcms.io/api/v1/works'

// Build HTML body from sections (JA).
const html = ({ summary, initiatives, areas }) => {
  const lis = initiatives.map((i) => `<li>${i}</li>`).join('')
  const summaryHtml = summary
    .split('\n')
    .filter(Boolean)
    .map((p) => `<p>${p}</p>`)
    .join('')
  return (
    `${summaryHtml}` +
    `<h3>主な取り組み</h3><ul>${lis}</ul>` +
    `<h3>担当領域</h3><p>${areas}</p>`
  )
}

const htmlEn = ({ summary, initiatives, areas }) => {
  const lis = initiatives.map((i) => `<li>${i}</li>`).join('')
  const summaryHtml = summary
    .split('\n')
    .filter(Boolean)
    .map((p) => `<p>${p}</p>`)
    .join('')
  return (
    `${summaryHtml}` +
    `<h3>Key Initiatives</h3><ul>${lis}</ul>` +
    `<h3>Scope</h3><p>${areas}</p>`
  )
}

const works = [
  {
    slug: 'sports-cx-basketball',
    titleJa: 'プロバスケットボールクラブ CX構想プロジェクト',
    titleEn: 'Pro Basketball Club — Customer Experience Initiative',
    categoryJa: 'スポーツ&ホスピタリティ / 観戦体験デザイン',
    categoryEn: 'Sports & Hospitality / Experience Design',
    descriptionJa:
      '東海地方を本拠地とするB.LEAGUEクラブのCX構想に Phase 01 から参画。観戦体験そのものを「再設計」しています。',
    descriptionEn:
      'Joined a B.LEAGUE club’s customer-experience initiative from Phase 01 — redesigning the game-day experience itself.',
    summaryJa:
      '東海地方を本拠地とするプロバスケットボールクラブのカスタマーエクスペリエンス（CX）構想プロジェクトに、Phase 01から参画しています。観戦体験そのものを「再設計」することがミッション。試合は約2時間ですが、ファンの体験はそれよりずっと長く、深い。それを設計するのが私たちの仕事です。\nプレシーズンマッチからレギュラーシーズン全試合まで、複数会場を巡回しながら、フード・グッズ・パートナーシップ・運営マニュアルまでを横断的にプロデュースしています。\n「観るだけのスポーツ」を「五感で参加するエンターテインメント」に変える。ホスピタリティのプロフェッショナルだからこそ実装できる、スポーツビジネスの新しいかたちです。',
    summaryEn:
      'We joined the customer-experience (CX) initiative of a professional basketball club (B.LEAGUE) based in the Tokai region from Phase 01. Our mission is to redesign the game-day experience itself. A game lasts about two hours, but the fan experience is far longer and deeper — and designing it is our work.\nFrom preseason matches through every regular-season game, we travel across multiple venues, producing food, merchandise, partnerships, and operating manuals in an integrated way.\nWe turn "a sport you only watch" into "entertainment you join with all five senses" — a new form of sports business that only hospitality professionals can implement.',
    initiativesJa: [
      'CX（カスタマーエクスペリエンス）構想の設計と実装',
      '観戦体験を高めるオリジナルフードの開発',
      '試合運営オペレーションの構想',
      'グッズのポートフォリオ設計',
      '複数会場での運営オペレーション統合',
    ],
    initiativesEn: [
      'Design and implementation of the CX (customer experience) concept',
      'Development of original food that elevates the game-day experience',
      'Conceptual design of match-day operations',
      'Merchandise portfolio design',
      'Integration of operations across multiple venues',
    ],
    areasJa: 'CX構想 / 観戦体験設計 / フード開発 / グッズプロデュース',
    areasEn:
      'CX strategy / Experience design / Food development / Merchandise production',
    image: '01_sports_basketball_cx.png',
  },
  {
    slug: 'hakuba-resort-fb',
    titleJa: '白馬エリア スキーリゾート F&B施設支援',
    titleEn: 'Hakuba Ski Resort — F&B Operations Support',
    categoryJa: 'リゾートF&B / シーズナル運営',
    categoryEn: 'Resort F&B / Seasonal Operations',
    descriptionJa:
      '長野県白馬のスキーリゾート内F&B施設を運営支援。インバウンドと国内ゲスト双方に応えるリゾートグレードの食体験を設計。',
    descriptionEn:
      'Supporting F&B operations at a Hakuba ski resort — resort-grade dining for both inbound and domestic guests.',
    summaryJa:
      '長野県白馬エリアのスキーリゾート内F&B施設の運営支援を担当。インバウンド観光客と国内ゲストの両方に応える、リゾートグレードの食体験を設計しています。\n白馬は、ニセコと並ぶ日本を代表する国際的スキーリゾート。世界中から訪れるゲストを満足させるためには、「リゾートらしい食体験」と「シーズン特化型のオペレーション」が不可欠です。\n都心のオフィス運営で培ったノウハウを、リゾートというまったく異なる文脈に翻訳しながら支援を進めています。',
    summaryEn:
      'We support the operation of F&B facilities within a ski resort in the Hakuba area of Nagano, designing resort-grade dining that satisfies both inbound tourists and domestic guests.\nAlongside Niseko, Hakuba is one of Japan’s leading international ski resorts. Satisfying guests from around the world demands a resort-caliber dining experience and season-specific operations.\nWe translate the know-how built in urban office operations into the entirely different context of a resort.',
    initiativesJa: [
      'リゾートF&Bコンセプト設計',
      'シーズン特化型メニュー開発',
      'インバウンド対応のサービス設計',
      '繁忙期オペレーション構築',
    ],
    initiativesEn: [
      'Resort F&B concept design',
      'Season-specific menu development',
      'Service design for inbound guests',
      'Peak-season operations build-out',
    ],
    areasJa:
      'リゾートF&Bコンセプト設計 / シーズナルメニュー開発 / インバウンド対応 / 繁忙期オペレーション',
    areasEn:
      'Resort F&B concept / Seasonal menu development / Inbound service / Peak-season operations',
    image: '02_hakuba_resort_fb.png',
  },
  {
    slug: 'us-bank-office-cafe',
    titleJa: '米国系金融機関 オフィスカフェ運営',
    titleEn: 'US Financial Institution — Office Café Operations',
    categoryJa: 'コーポレートホスピタリティ / オフィスカフェ',
    categoryEn: 'Corporate Hospitality / Office Café',
    descriptionJa:
      '米国系金融機関の東京オフィス内カフェを運営。日常使いの中で品質・スピード・体験のバランスを実装。',
    descriptionEn:
      'Running the in-office café of a US financial institution in Tokyo — balancing quality, speed, and experience for daily use.',
    summaryJa:
      '米国系金融機関の東京オフィス内カフェの運営を担当。日常的に利用されるオフィスカフェとして、品質・スピード・体験のバランスを実装しています。\nオフィスカフェは毎日の利用が前提であり、品質を担保しつつ、スピードと体験を両立させる運営設計が必要です。バリスタの育成から利用データに基づく改善PDCAまでを内製化し、安定運営を実現しています。',
    summaryEn:
      'We operate the in-office café of a US financial institution’s Tokyo office, implementing a balance of quality, speed, and experience for everyday use.\nAn office café is used daily, so it requires operational design that guarantees quality while reconciling speed and experience. From barista training to data-driven improvement cycles, we bring everything in-house to deliver stable operations.',
    initiativesJa: [
      'カフェオペレーション構築',
      'メニュー開発（コーヒー・軽食・ランチ）',
      'バリスタ・スタッフ教育プログラム',
      '利用データに基づく改善PDCA',
    ],
    initiativesEn: [
      'Café operations build-out',
      'Menu development (coffee, light meals, lunch)',
      'Barista and staff training programs',
      'Data-driven improvement cycles (PDCA)',
    ],
    areasJa: 'カフェ運営 / メニュー設計 / バリスタ育成 / 改善PDCA',
    areasEn: 'Café operations / Menu design / Barista training / Improvement (PDCA)',
    image: '03_us_bank_office_cafe.png',
  },
  {
    slug: 'us-ibank-executive-dining',
    titleJa: '米国系投資銀行 オフィスホスピタリティ運営',
    titleEn: 'US Investment Bank — Office Hospitality Operations',
    categoryJa: 'コーポレートホスピタリティ / エグゼクティブダイニング',
    categoryEn: 'Corporate Hospitality / Executive Dining',
    descriptionJa:
      '米国系大手投資銀行の東京オフィスで、エグゼクティブダイニングとオフィスカフェを統合運営。金融グレードの基準を日本で実装。',
    descriptionEn:
      'Integrated operation of executive dining and an office café at a major US investment bank in Tokyo — finance-grade standards implemented in Japan.',
    summaryJa:
      '米国系大手投資銀行の東京オフィスにて、エグゼクティブダイニングおよびオフィスカフェの統合運営を担当。\n金融グレードの守秘義務、米国本社水準の品質基準、グローバルエグゼクティブを満足させる接遇 — 求められる基準はホスピタリティ業界の最上位です。私たちは、これらすべてを日本で実装できる稀有なホスピタリティ・パートナーとして選ばれました。',
    summaryEn:
      'At the Tokyo office of a major US investment bank, we handle the integrated operation of executive dining and the office café.\nFinance-grade confidentiality, quality standards set by US headquarters, and hospitality that satisfies global executives — the bar is the very highest in the hospitality industry. We were chosen as one of the rare hospitality partners able to implement all of this in Japan.',
    initiativesJa: [
      'エグゼクティブ向けレストランの運営設計',
      'オフィスカフェの日次オペレーション構築',
      '多言語・多文化対応のサービス設計',
      '厳格な衛生・コンプライアンス管理',
    ],
    initiativesEn: [
      'Operational design of the executive restaurant',
      'Daily operations build-out for the office café',
      'Multilingual, multicultural service design',
      'Rigorous hygiene and compliance management',
    ],
    areasJa: '統合運営 / メニュー設計 / スタッフマネジメント / 接遇品質管理',
    areasEn:
      'Integrated operations / Menu design / Staff management / Service-quality control',
    image: '04_us_ibank_hospitality.png',
  },
  {
    slug: 'enterprise-office-relocation-fb',
    titleJa: 'エンタープライズ オフィス移転 F&Bプロジェクトマネジメント',
    titleEn: 'Enterprise Office Relocation — F&B Project Management',
    categoryJa: 'コーポレートF&B / オフィスホスピタリティ',
    categoryEn: 'Corporate F&B / Office Hospitality',
    descriptionJa:
      '大手企業のオフィス移転に伴うF&B部門を、設計支援から運営定着まで一気通貫でプロジェクトマネジメント。1000名以上規模で稼働。',
    descriptionEn:
      'End-to-end project management of the F&B function for a large enterprise office relocation — from design support to operational rollout at 1,000+ scale.',
    summaryJa:
      '大手エンタープライズ企業のオフィス移転に伴うF&B部門（社員食堂・カフェ・接遇ラウンジ・ケータリング）の全体プロジェクトマネジメントを担当。設計支援から現場運営の定着までを一気通貫で担い、1000名以上規模のオフィスで稼働させました。\nオフィス移転におけるF&Bは、単なる食堂運営ではありません。設計段階から動線・コンセプト・スタッフ体験までを統合的にデザインし、移転後の社員満足度・利用率を高める「体験インフラ」として設計する必要があります。設計会社・メーカー・卸・管理会社・クライアント総務と連携しながら、F&B視点でのオフィス全体最適化に貢献しました。',
    summaryEn:
      'We led the overall project management of the F&B function (employee cafeteria, café, reception lounge, catering) for a large enterprise’s office relocation, owning everything from design support to operational rollout at an office of 1,000+ people.\nF&B in an office relocation is not mere cafeteria operation. From the design stage, flow lines, concept, and staff experience must be designed holistically as an "experience infrastructure" that raises post-move employee satisfaction and utilization. Working with the design firm, manufacturers, distributors, the property manager, and the client’s general-affairs team, we contributed to whole-office optimization from an F&B perspective.',
    initiativesJa: [
      'F&Bゾーニング・動線設計（厨房 / カフェ / ラウンジ）',
      '社員リサーチに基づくメニュー構成設計',
      '運営オペレーション構築・スタッフ採用および育成',
      '移転後のKPIモニタリングと改善PDCA',
    ],
    initiativesEn: [
      'F&B zoning and flow-line design (kitchen / café / lounge)',
      'Menu composition based on employee research',
      'Operations build-out, staff hiring and training',
      'Post-move KPI monitoring and improvement (PDCA)',
    ],
    areasJa: 'F&Bプロマネ / 空間設計 / 動線設計 / 運営オペレーション構築',
    areasEn:
      'F&B project management / Space design / Flow-line design / Operations build-out',
    image: '05_enterprise_office_relocation.png',
  },
  {
    slug: 'smb-new-business-launch',
    titleJa: '中小企業の新規事業 立ち上げ支援',
    titleEn: 'SMB New-Business Launch Support',
    categoryJa: '事業開発 / スタートアップ伴走',
    categoryEn: 'Business Development / Startup Partnering',
    descriptionJa:
      '飲食・ペットサービス・一次産業など業種横断で新規事業の立ち上げを伴走。4フェーズ型支援モデルを実証。',
    descriptionEn:
      'Hands-on launch support for new businesses across food, pet services, and primary industry — proving a 4-phase support model.',
    summaryJa:
      '個人・中小オーナー企業の新規事業立ち上げを伴走支援してきました。\n業種を横断し、飲食施設、ペットサロン、牧場の事業化など、企画段階から運営定着までを一気通貫で担当。\nこのフェーズで確立したのが、「Discovery → Design → Implementation → Operations」という4フェーズ型支援モデルです。コンセプト設計から空間設計、運営オペレーション構築、そして継続運営まで、事業の立ち上げに必要なすべての要素を一つの組織でカバーするアプローチは、ここで原型が作られました。',
    summaryEn:
      'We have provided hands-on support for new-business launches at individual and small-to-mid-sized owner companies.\nAcross industries — food facilities, pet salons, ranch businesses, and more — we covered everything from the planning stage through to operational rollout.\nIt was in this phase that we established our four-phase support model: Discovery → Design → Implementation → Operations. The approach of covering every element a launch requires — concept design, space design, operations build-out, and ongoing operation — within a single organization had its origin here.',
    initiativesJa: [
      '飲食ニューブランドの立ち上げ（コンセプト〜開業）',
      '都心ペットグルーミングサロンの事業化支援',
      '牧場運営の組織改善',
    ],
    initiativesEn: [
      'Launch of a new F&B brand (concept to opening)',
      'Business-development support for an urban pet-grooming salon',
      'Organizational improvement of a ranch operation',
    ],
    areasJa: '事業企画 / 立ち上げプロマネ / 運営構築 / 収益化支援',
    areasEn:
      'Business planning / Launch project management / Operations build-out / Monetization support',
    image: '06_smb_newbiz.png',
  },
  {
    slug: 'dohoku-regional-revitalization',
    titleJa: '北海道道東エリア 地方創生 共創プロジェクト',
    titleEn: 'Eastern Hokkaido — Regional Revitalization Co-Creation',
    categoryJa: '地方創生 / 地域価値創造',
    categoryEn: 'Regional Revitalization / Local Value Creation',
    descriptionJa:
      '北海道道東の自治体・まちづくり会社と共創し、一次産業を起点とした事業群を立ち上げ。観光と地域経済を循環させる仕組みを設計。',
    descriptionEn:
      'Co-creating with municipalities and a town-development company in eastern Hokkaido — building primary-industry-rooted ventures that cycle tourism and the local economy.',
    summaryJa:
      '北海道道東エリアの自治体およびまちづくり会社と共創し、地域の一次産業を起点とした事業群を立ち上げています。\nホスピタリティと一次産業をつなぐサプライチェーンを設計し、観光と地域経済を循環させる仕組みづくりを担っています。MUSICOにとって「ホスピタリティ」は都心のサービス業に限らず、地域価値を創造する手段であるという思想を、体現しているプロジェクトです。',
    summaryEn:
      'Co-creating with municipalities and a town-development company in eastern Hokkaido, we are launching a group of ventures rooted in the region’s primary industries.\nWe design supply chains that connect hospitality with primary industry, building mechanisms that circulate tourism and the local economy. For MUSICO, this project embodies the idea that "hospitality" is not limited to urban service businesses but is a means of creating regional value.',
    initiativesJa: [
      'ワイナリー建設プロジェクトの戦略設計と運営支援',
      '地域乳業と協業したチーズ工場の立ち上げ',
      '既存マルシェのリブランディングおよび運営再生',
      '地域産品のふるさと納税商品の開発と販路設計',
    ],
    initiativesEn: [
      'Strategy design and operational support for a winery construction project',
      'Launch of a cheese factory in collaboration with a regional dairy',
      'Rebranding and operational revival of an existing marché',
      'Development of hometown-tax (furusato nozei) products from local goods and channel design',
    ],
    areasJa:
      '戦略設計 / F&Bプロデュース / 商品開発 / サプライチェーン構築 / 運営支援',
    areasEn:
      'Strategy design / F&B production / Product development / Supply-chain build-out / Operations support',
    image: '07_dohoku_regional.png',
  },
]

// Build the CMS body for one work (shared by the seeder and the dev seed).
export const buildBody = (w) => ({
  slug: w.slug,
  titleJa: w.titleJa,
  titleEn: w.titleEn,
  categoryJa: w.categoryJa,
  categoryEn: w.categoryEn,
  descriptionJa: w.descriptionJa,
  descriptionEn: w.descriptionEn,
  contentJa: html({
    summary: w.summaryJa,
    initiatives: w.initiativesJa,
    areas: w.areasJa,
  }),
  contentEn: htmlEn({
    summary: w.summaryEn,
    initiatives: w.initiativesEn,
    areas: w.areasEn,
  }),
})

export const workItems = works.map((w, i) => ({
  id: `seed-${i + 1}`,
  ...buildBody(w),
}))

const main = async () => {
  console.log(`Seeding ${works.length} works as status=${STATUS}\n`)
  for (const w of works) {
    const body = buildBody(w)

    // POST (auto-generated id). slug field drives detail-page routing.
    // NOTE: POST is not idempotent — run this script only once per status.
    const res = await fetch(`${ENDPOINT}?status=${STATUS}`, {
      method: 'POST',
      headers: {
        'X-MICROCMS-API-KEY': KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const text = await res.text()
    console.log(`${res.status}  ${w.slug}  ${text}`)
  }
  console.log('\nNote: image fields are NOT set here (upload via admin).')
  console.log(`Image filenames to attach later:`)
  for (const w of works) console.log(`  ${w.slug}  <-  ${w.image}`)
}

// Only run the seeder when executed directly (not when imported for workItems).
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/').split('/').pop())) {
  main()
}
