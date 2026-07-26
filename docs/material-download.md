# 資料ダウンロード（中間CV）

問い合わせフォームまで踏み切れない層を拾うための中間コンバージョン。

## なぜ作るか

GA4実測（2026-06-27〜07-24・28日）:

| 段階 | 実績 |
|---|---|
| セッション | 429 |
| `/contact` 到達 | 19人（9.6%） |
| 問い合わせ完了 | **0** |

`/contact` の滞在は11秒（サイト平均60秒の約1/5）で、フォームを見て離脱している。
「まだ相談する段階ではない」層の受け皿が無いことが構造的な穴なので、
**会社名・お名前・メールの3項目だけ**で資料を渡す導線を用意する。

⚠️ 入力項目を増やさないこと。問い合わせフォームは必須9項目でCVR 0%だった。

## 構成

| パス | 役割 |
|---|---|
| `/[language]/materials` | 資料の内容説明＋3項目フォーム |
| `/[language]/materials/completed` | 完了＋PDFダウンロードボタン（`robots: noindex`／robots.txtでも disallow） |
| `src/features/materials/` | schema / server action / フォーム |
| `public/materials/musico-company-profile.pdf` | 配布する実ファイル（**未配置**） |

通知は問い合わせと同じ経路（Slack＋メール）に流し、種別を「資料ダウンロード」にして区別する。
既に見ている受信箱に届くのが最も確実なため、新しい通知先は作らない。

## ⚠️ 未完了: 配布するPDFが未確定

`public/materials/musico-company-profile.pdf` はまだ置いていない。そのため
**`/materials` はナビにもsitemapにも載せていない**（PDFが無い状態で導線を張ると
完了ページのダウンロードが404になるため）。

候補だった `20260526_FY2026_MUSICO Inc. Company Profile.pdf`（共有ドライブ
`02_管理本部/01_社長室/01_Corporate Strategy/97_会社紹介/`）は、2026-07-26に全39ページを
目視確認した結果、**そのままでは公開配布に使えない**と判断した:

1. **全ページのフッターが `©2025 MUSICO Inc. All Rights Reserved Confidential.`** ＝ 社外秘表記
2. **表紙が「FY2025」** なのにファイル名は FY2026（表紙が更新されていない）
3. 取組事例②のページに **クライアント店舗の看板ロゴが読める写真** がある
   （本文は「外資系金融機関」と匿名化されているが、写真から特定され得る）

なお同フォルダの `【修正中】20260526_MUSICO Inc. Company Profile(取引先名無).pptx` が
取引先名無し版だが、ファイル名のとおり修正中。

### 公開までにやること

1. 配布用PDFを決める（Confidential表記を外す／年度表記を直す／クライアント写真を差し替えるか、
   公開用に別途作る）
2. `public/materials/musico-company-profile.pdf` として配置
3. `src/app/sitemap.ts` の `staticPages` に `{ path: 'materials', priority: 0.6 }` を追加
4. `/contact` ページに「まだ相談段階の方へ」の導線を置く（到達19人／完了0人の受け皿）
5. GA4でキーイベント登録: `page_view` かつ URL に `materials/completed` を含む条件で
   `download_material` を作成（`generate_lead` と同じ「イベント作成ルール」方式・コード不要）

## 関連

- `docs/seo-keyword-map.md` — KPI（非ブランド語のクリック数）
- `docs/analytics-setup.md` — GA4/GSCの設定
