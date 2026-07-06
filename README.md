# MUSICO コーポレートサイト（musico.co.jp）

株式会社MUSICO の公式コーポレートサイトのソースコードです。Next.js（App Router）＋ microCMS ＋ Vercel で構成し、日本語・英語の2言語で提供しています。

**本番サイト:** https://www.musico.co.jp/ja

---

## 株式会社MUSICOについて

> 株式会社MUSICO（ムジコ）は、東京を拠点とする **Hospitality Innovation Firm** です。外資系金融機関をはじめとする企業向けに、オフィスカフェ・社員食堂・エグゼクティブダイニングの運営、ケータリング、ホスピタリティ業界向けAI/DX支援、人材支援、地方創生支援を提供しています。食・空間・運用・テクノロジーを一気通貫で設計・実装することを強みとし、「幸福な時間を仕組みで増やす」ことをミッションとしています。2022年5月設立、代表取締役は瀬本頼一。

> MUSICO Inc. is a Tokyo-based **Hospitality Innovation Firm**. We operate office cafés, employee dining, and executive dining for corporations including global financial institutions, and provide catering, AI/DX solutions for the hospitality industry, talent solutions, and regional revitalization support. Our strength is designing and implementing food, space, operations, and technology as one continuous system, guided by our mission to multiply meaningful time by design. Founded in May 2022; Representative Director: Yorikazu Semoto.

### 会社概要

| 項目 | 内容 |
| --- | --- |
| 社名 | 株式会社MUSICO（MUSICO Inc.） |
| 設立 | 2022年5月 |
| 代表取締役 | 瀬本 頼一（Yorikazu Semoto） |
| 所在地 | 〒152-0023 東京都目黒区八雲3-17-20 |
| 事業内容 | フード／ホスピタリティ、AI/DX、人材支援（注力領域）／ ケータリング・イベント、地方創生（関連領域） |

### 提供サービス

- **法人向けフードサービス** — 外資系・大手企業のオフィスカフェ・社員食堂の企画〜運営
- **オフィスカフェ運営** — バリスタ育成・メニュー開発・データ改善までのワンストップ運営
- **エグゼクティブダイニング** — 役員フロア・VIP向けの最高水準ダイニングの設計・運営
- **ケータリング・イベント** — VIP会食・レセプション・社内イベントの食体験設計
- **ホスピタリティDX（AI/DX）** — 飲食・ホスピタリティ業界に特化したAI/DX支援
- **人材支援** — 採用・育成・派遣・業務委託・業務再設計を組み合わせた人材課題ソリューション
- **地方創生支援** — 食・農・観光を掛け合わせた地域ブランディング・事業開発

---

## 技術構成

| レイヤー | 採用技術 |
| --- | --- |
| フレームワーク | Next.js 15（App Router, React 19） |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| アニメーション | Framer Motion |
| ヘッドレスCMS | microCMS（news / works / insights） |
| メール送信 | Resend（React Email テンプレート） |
| ホスティング | Vercel |
| 解析 | Google Analytics 4 / Google Search Console（`@next/third-parties`） |

---

## セットアップ

必要環境:

- Node.js 20 以上
- npm

```bash
npm install
npm run dev
```

`http://localhost:3000/ja` または `http://localhost:3000/en` を開いて確認します。

> microCMS の API キーが未設定でも、`news` / `works` / `insights` は開発モードでシードデータ（`src/services/*/dev-seed.json`）にフォールバックするため、CMS 接続なしでプレビューできます。

### コマンド

- `npm run dev` — 開発サーバー（Turbopack）
- `npm run build` — 本番ビルド
- `npm run start` — 本番サーバー起動

---

## ディレクトリ構成

```
src/
├── app/
│   ├── [language]/            言語別ページ（ja / en）
│   │   ├── page.tsx           トップ
│   │   ├── about/             会社概要（MUSICOとは）
│   │   ├── services/          事業内容ハブ
│   │   ├── corporate-food/    法人向けフードサービス
│   │   ├── office-cafe/       オフィスカフェ運営
│   │   ├── executive-dining/  エグゼクティブダイニング
│   │   ├── catering/          ケータリング
│   │   ├── dx-ai/             ホスピタリティDX
│   │   ├── talent/            人材支援
│   │   ├── regional/          地方創生
│   │   ├── works/             実績・事例（一覧 / [slug]）
│   │   ├── insights/          記事・コラム（一覧 / [slug]）
│   │   ├── news/              お知らせ（一覧 / [id]）
│   │   ├── careers/           採用
│   │   └── contact/           お問い合わせ（/completed）
│   ├── sitemap.ts             動的サイトマップ（works/news/insights を含む）
│   ├── robots.ts              robots.txt
│   └── layout.tsx             ルート（GA4/GTM, Organization/WebSite JSON-LD）
├── features/                  ページ単位の UI / actions / schema
├── components/                共通コンポーネント（json-ld, bread-crumbs 等）
├── services/                  microCMS 取得（news / works / insights）
├── lib/                       metadata / structured-data ヘルパー
└── react-email-starter/       メールテンプレート
```

---

## SEO / AIO（AI検索最適化）方針

「Brand First / SEO Second / AIO Everywhere」を基本方針としています。

- **メタデータ**: `src/lib/metadata.ts` の `buildMetadata` で canonical・hreflang（ja/en/x-default）・OGP・Twitter Card を全ページに付与
- **構造化データ（JSON-LD）**: `src/lib/structured-data.ts` に集約。Organization / WebSite / BreadcrumbList / Service / FAQPage / AboutPage / Article / Person
- **AIが引用しやすい定義文**: 会社概要ページ冒頭とスキーマの description で同一文言を使用（本 README 冒頭の定義文と同一）
- **サイトマップ**: `works` / `news` / `insights` の詳細ページを含む動的生成
- 詳細な設計・改善計画は `docs/seo-aio-improvement-plan.md` を参照

---

## 環境変数

| 変数 | 用途 | 必須 |
| --- | --- | --- |
| `MICROCMS_API_KEY` | microCMS（news / works / insights）取得 | 本番 |
| `RESEND_API_KEY` | お問い合わせ通知メール送信（Resend） | 本番 |
| `SENDER_EMAIL` | 通知メールの送信元アドレス | 本番 |
| `SLACK_WEBHOOK_URL` | 問い合わせの Slack 通知 | 本番 |
| `X_API_KEY` | 外部連携用 API キー | 任意 |
| `GA_ID` | Google Analytics 4 測定ID（`G-XXXXXXX`） | 任意 |
| `GTM_ID` | Google Tag Manager コンテナID（`GTM-XXXX`） | 任意 |
| `NEXT_PUBLIC_VERCEL_URL` | Vercel が付与するデプロイ URL | 自動 |
| `NEXT_PUBLIC_VERCEL_ENV` | 実行環境（development / preview / production） | 自動 |
| `NEXT_PUBLIC_APP_URL` | ローカル/プレビューで絶対 URL を固定したい場合に使用 | 任意 |

> `GA_ID` / `GTM_ID` は設定されている場合のみ読み込まれます（未設定なら計測タグは出力されません）。

---

## ドキュメント

- `docs/seo-aio-improvement-plan.md` — SEO/AIO 改善計画（全体設計）
- `docs/analytics-setup.md` — GA4 / Search Console セットアップと計測計画
- `docs/microcms-insights-schema.md` — microCMS `insights` API のスキーマ定義
- `仕様書.md` / `取扱説明書.md` / `機能一覧.csv` / `サイトマップ.csv` — 仕様・運用資料

---

© MUSICO Inc. All rights reserved.
