# アクセス解析セットアップ＆計測計画（musico.co.jp）

## 🔴 現状（2026-07-05 診断）

**現在、公式サイトはアクセス解析データを一切取得していません。**

- 本番サイトは `https://www.googletagmanager.com/gtm.js?id=undefined` を読み込んでいる
  = Vercelの環境変数 **`GTM_ID` が未設定**のため、GTMコンテナが繋がらず、GA4も発火していない
- Google Search Console の認証ファイル（`/googlefba99e68cb98d5c1.html`）は存在＝**GSCは設定済み**の可能性が高い（検索データはGSC側に蓄積されている見込み）
- Meta Pixel / Clarity / Hotjar 等の他の計測タグも無し

→ SEO改修の効果測定（流入・ビュー・問い合わせ）をするには、**まずGA4計測を起動する**必要があります。SEO改修が本番に出る前の今がベースライン取得の好機です。

## このリポジトリ側の対応（このPRで実施済み）

`src/app/[language]/layout.tsx` を修正:
- `GTM_ID` が**設定されている時だけ** GTMを読み込む（`id=undefined` の壊れた読み込みを解消）
- `GA_ID`（GA4測定ID `G-XXXXXXX`）が設定されていれば **GA4を直接読み込む**（GTMコンテナ設定不要の最短ルート）

→ あとは下記の「やること」で測定IDを発行し、Vercelの環境変数に入れるだけで計測が始まります。

## 計測方式の選択（どちらか一方を推奨）

| 方式 | 設定 | 向いている場合 |
|---|---|---|
| **A. GA4直接（推奨）** | Vercelに `GA_ID=G-XXXXXXX` を設定するだけ | まずはページビュー・流入を測りたい。最短・確実 |
| B. GTM経由 | GTMコンテナを作り中でGA4タグを設定＋Vercelに `GTM_ID=GTM-XXXX` | 将来イベントを多数管理／広告タグも一括管理したい |

> **両方同時に設定しない**（GA4が二重計測になる）。まずは A で開始し、必要になったら B へ移行を推奨。

## やること（石黒さん／瀬本さん — Googleアカウント権限が必要）

### 1. GA4プロパティを作成
1. https://analytics.google.com/ →「管理」→「プロパティを作成」
2. プロパティ名: MUSICO / タイムゾーン: 日本 / 通貨: JPY
3. データストリーム →「ウェブ」→ URL `https://www.musico.co.jp`、ストリーム名「MUSICO Web」
4. 発行される **測定ID `G-XXXXXXX`** をメモ

### 2. Vercelに環境変数を設定（Minさん）
1. Vercelプロジェクト → Settings → Environment Variables
2. `GA_ID` = `G-XXXXXXX`（Production/Preview/Development すべて。Previewは検証用に入れてOK）
3. 再デプロイ（環境変数は再デプロイで反映）

### 3. Google Search Console を確認・GA4と連携
1. https://search.google.com/search-console で `musico.co.jp` プロパティを確認（認証ファイルは配置済み）
2. 未登録なら、ドメインプロパティで追加（DNS TXT）または既存のHTMLファイル認証を利用
3. サイトマップ送信: `https://www.musico.co.jp/sitemap.xml` を登録（SEO改修で works/news/insights も含む動的サイトマップに更新済み）
4. GA4「管理」→「Search Console のリンク」でGA4とGSCを連携（GA4上で検索クエリが見られる）

### 4. コンバージョン（問い合わせ完了）を計測
- お問い合わせフォーム送信成功時、サイトは **`/ja/contact/completed`（EN: `/en/contact/completed`）** にリダイレクトします
- GA4「管理」→「イベント」→ `/contact/completed` への `page_view` を**キーイベント（コンバージョン）**として登録
  - 具体的には、GA4で「イベントを作成」→ 条件 `page_location` が `contact/completed` を含む → イベント名 `generate_lead` → これをキーイベント化
- これで**追加コードなしで問い合わせ完了を計測**できます（フォームは既にcompletedへ遷移するため）

### 5.（任意）Microsoft Clarity でヒートマップ
- 無料。ページ内のどこを見て/クリックしているか可視化。導入するなら別途タグ追加（このPRのlayout同様、env-gateで足せます）

## 計測すべきKPI（SEO改修の効果検証）

SEO/AIO改修計画（`docs/seo-aio-improvement-plan.md`）に対応した指標：

| KPI | 見る場所 | 目的 |
|---|---|---|
| **オーガニック流入セッション** | GA4（デフォルトチャネル=Organic Search） | 検索流入の総量トレンド |
| **非指名クエリの表示回数・クリック** | GSC（検索パフォーマンス、"musico"を除外） | SEO改修で新規キーワードが取れているか |
| ページ別ビュー（新規LP） | GA4（ページとスクリーン） | /office-cafe /executive-dining /insights の立ち上がり |
| **問い合わせ完了数** | GA4（キーイベント generate_lead） | 最終ゴール。流入→問い合わせのCV |
| 参照元/メディア | GA4（トラフィック獲得） | Organic/Direct/Referral/Social の内訳 |
| リッチリザルト表示 | GSC（拡張→FAQ・パンくず） | 構造化データが効いているか |
| Core Web Vitals | GSC（ウェブに関する主な指標）/ PageSpeed Insights | LCP/CLS/INP |
| AI検索での引用 | ChatGPT/Perplexityで手動確認（月次） | AIO効果。「MUSICO 会社」「オフィスカフェ 運営会社」等 |

## ベースライン取得（改修が本番に出る前に）

SEO改修（PR #9〜#12）が本番反映される前に、以下の「Before」を記録しておくと効果が明確になります：

1. **GSCの現状**: 過去3ヶ月の総クリック・表示回数・平均掲載順位・主要クエリ（GSCは既に蓄積している見込み。GA4起動を待たずに取得可能）
2. GA4は起動直後からの計測なので「改修前後」ではなく「起動後トレンド」で見る
3. PageSpeed Insights で主要ページ（トップ・corporate-food）のCWVを1回計測して記録

> ベースラインを月次で追う「計測シート」を Google スプレッドシートで用意することも可能です（GSC/GA4を手動またはエクスポートで転記）。ご希望あれば作成します。

## チェックリスト
- [ ] GA4プロパティ作成 → 測定ID `G-XXXXXXX` 取得
- [ ] Vercel に `GA_ID` を設定 → 再デプロイ（Minさん）
- [ ] 本番でGA4のリアルタイムに自分のアクセスが出るか確認
- [ ] GSCのプロパティ確認＋サイトマップ送信＋GA4連携
- [ ] `/contact/completed` をキーイベント化
- [ ] GSCの現状値をベースラインとして記録
- [ ] （任意）Clarity導入 / 計測シート作成
