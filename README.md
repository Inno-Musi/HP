# MUSICO HP Renewal

株式会社MUSICO のコーポレートサイトです。`Next.js App Router` で構成されており、日本語・英語の2言語ページ、問い合わせフォーム、採用応募フォーム、お知らせ連携を提供します。

## セットアップ

必要環境:

- Node.js 20 以上
- npm

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

`http://localhost:3000/ja` または `http://localhost:3000/en` を開いて確認します。

## 主な構成

- `src/app/[language]`: 言語別のページ
- `src/features`: ページ単位の UI / action / schema
- `src/components`: 共通コンポーネント
- `src/services/news`: microCMS からのお知らせ取得
- `src/app/api/email`: Resend 経由の通知メール送信
- `src/react-email-starter/emails`: メールテンプレート

## 環境変数

少なくとも以下を設定してください。

- `MICROCMS_API_KEY`
- `RESEND_API_KEY`
- `X_API_KEY`
- `SENDER_EMAIL`
- `SLACK_WEBHOOK_URL`
- `GTM_ID`
- `NEXT_PUBLIC_VERCEL_URL`
- `NEXT_PUBLIC_VERCEL_ENV`
- `NEXT_PUBLIC_APP_URL` 任意。ローカルやプレビューで絶対 URL を固定したい場合に使用

## コマンド

- `npm run dev`: 開発サーバー
- `npm run build`: 本番ビルド
- `npm run start`: 本番サーバー起動

## 補足

仕様・運用系の資料はリポジトリ直下の `仕様書.md`、`取扱説明書.md`、`機能一覧.csv`、`サイトマップ.csv`、`docs/` を参照してください。
