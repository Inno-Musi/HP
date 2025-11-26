# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 開発コマンド

```bash
# 開発サーバー起動（Turbopack使用）
npm run dev

# プロダクションビルド
npm run build

# プロダクション起動
npm run start

# Linting（Next.js内蔵）
npm run lint
```

## プロジェクト概要

MUSICO株式会社のコーポレートサイト（Next.js 15、TypeScript、多言語対応）

## アーキテクチャと重要なパターン

### 1. 多言語対応の実装

- **動的ルーティング**: `app/[language]/` で日本語（ja）・英語（en）を切り替え
- **ミドルウェア**: `src/middleware.ts` でデフォルト言語（ja）へのリダイレクト処理
- **型定義パターン**: 言語別フィールドは `*Ja` / `*En` サフィックスで区別

### 2. Server Actions の使用

React 19の`useActionState`フックとServer Actionsパターンを採用：

```typescript
// クライアント側
const [actionState, formAction, isPending] = useActionState(submitContactFormJa, null)

// サーバー側（"use server"ディレクティブ）
export async function submitContactFormJa(prevState: any, formData: FormData) {
  // Zodバリデーション → API通信 → リダイレクト
}
```

### 3. 外部サービス統合

**microCMS（ニュース管理）**:
- エンドポイント: `https://musico-hp.microcms.io/api/v1/news`
- 認証: `X-MICROCMS-API-KEY` ヘッダー
- 実装: `src/services/news/`

**Resend（メール送信）**:
- API Route: `/api/email`
- React Emailテンプレート: `src/react-email-starter/emails/`
- 環境変数: `RESEND_API_KEY`, `SENDER_EMAIL`

**Slack通知**:
- Webhook使用: `src/services/slack/notify-slack.ts`
- 環境変数: `SLACK_WEBHOOK_URL`

### 4. フォームバリデーション

Zodスキーマによる厳密なバリデーション：

```typescript
// スキーマ定義
const schema = z.object({
  email: z.string().email('メールアドレスの形式で入力してください'),
  phoneNumber: z.string().regex(/^[0-9]{10,11}$/, '半角整数10桁または11桁で入力してください')
})

// Server Actionでの使用
const parsed = schema.safeParse(Object.fromEntries(formData))
if (!parsed.success) {
  return { errors: parsed.error.flatten().fieldErrors }
}
```

### 5. コンポーネント構造

```
src/
├── components/         # 共通UIコンポーネント（button, input, label等）
├── components/ui/      # 複雑なUIコンポーネント（select等、Radix UI使用）
└── features/          # 機能別コンポーネント
    ├── contact/       # お問い合わせ機能
    ├── news/          # ニュース表示
    ├── recruit/       # 採用情報（6職種対応）
    └── services/      # サービス紹介
```

### 6. スタイリング

- **Tailwind CSS** 中心の設計
- **カスタムカラー**: `darkNavy`, `passion`, `error`, `emerald`, `moss`, `lightBlue`, `vividBlue`
- **ユーティリティ関数**: `cn()` (clsx + tailwind-merge)
- **アニメーション**: Framer Motion + Lottie React

### 7. 環境変数

必須の環境変数：
- `MICROCMS_API_KEY` - microCMS認証
- `RESEND_API_KEY` - メール送信
- `SLACK_WEBHOOK_URL` - Slack通知（オプション）
- `X_API_KEY` - 内部API認証
- `GTM_ID` - Google Tag Manager
- `SENDER_EMAIL` - 送信元メールアドレス

### 8. 重要な実装パターン

**エラーハンドリング**:
- Server Actionで`{ success: boolean, errors?: FieldErrors }`形式で返却
- クライアント側で`<ErrorMessage>`コンポーネントで表示

**画像最適化**:
- Next.js Imageコンポーネント使用
- 外部画像はnext.config.jsでドメイン許可設定が必要

**型安全性**:
- 厳密な型定義（`ComponentPropsWithoutRef`等を活用）
- Promise型のparamsに注意（Next.js 15の仕様）

## 開発時の注意点

1. **Biomeによるコード品質管理** - コミット前に`npm run lint`実行推奨
2. **多言語対応** - 新機能追加時は必ず日英両方の実装が必要
3. **Server Actions** - "use server"ディレクティブとクライアント/サーバー境界に注意
4. **環境変数** - クライアント側で使用する場合は`NEXT_PUBLIC_`プレフィックス必須