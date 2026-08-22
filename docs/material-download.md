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

通知は問い合わせと同じ経路（Google Chat＋メール）に流し、種別を「資料ダウンロード」にして区別する。
既に見ている受信箱に届くのが最も確実なため、新しい通知先は作らない。

## ⚠️ #31 のマージが前提

現在の middleware matcher は `.pdf` を除外していないため、
`/materials/musico-company-profile.pdf` が **308 で `/ja` へ飛ばされる**。
つまり「資料をダウンロード」を押すとトップページに飛ぶ。#31 が matcher に `pdf` を
追加するので、それが入れば解決する（実測: #31のmiddlewareを当てると 200・application/pdf・
1,300,781 bytes で配信される）。

## 配布するPDFについて

`public/materials/musico-company-profile.pdf` は**公開配布用に新規作成**したもの（14ページ）。
生成元は `C:\Users\black\scratch\pptx-runs\20260726_MUSICO会社紹介資料_公開版\`
（pptx・build.py・PDF）。雛形v3準拠、`musico-pptx` skillで生成。

**素材はすべて公開サイト（musico.co.jp）掲載の情報のみ**。新規の開示情報はゼロ。
実績はサイト掲載済みの匿名化表現（「米系投資銀行」等）のまま。写真はサイトで配信中の
画像と雛形の写真のみ。Confidential表記・年度表記は入れていない。

### なぜ既存の会社紹介資料を使わなかったか

候補だった `20260526_FY2026_MUSICO Inc. Company Profile.pdf`（共有ドライブ
`02_管理本部/01_社長室/01_Corporate Strategy/97_会社紹介/`）は、2026-07-26に全39ページを
目視確認した結果、**そのままでは公開配布に使えない**と判断した:

1. **全ページのフッターが `©2025 MUSICO Inc. All Rights Reserved Confidential.`** ＝ 社外秘表記
2. **表紙が「FY2025」** なのにファイル名は FY2026（表紙が更新されていない）
3. 取組事例②のページに **クライアント店舗の看板ロゴが読める写真** がある
   （本文は「外資系金融機関」と匿名化されているが、写真から特定され得る）

⚠️ テキスト抽出（39ページで8,469字＝1ページ217字）では画像内の情報を検出できず、
**目視でないと判定できなかった**。配布物を差し替える時も必ず全ページを目視すること。

なお同フォルダの `【修正中】20260526_MUSICO Inc. Company Profile(取引先名無).pptx` が
取引先名無し版だが、ファイル名のとおり修正中。

### 残っていること

- GA4でキーイベント登録: `page_view` かつ URL に `materials/completed` を含む条件で
  `download_material` を作成（`generate_lead` と同じ「イベント作成ルール」方式・コード不要）
- 資料を更新したら `public/materials/musico-company-profile.pdf` を差し替える
  （ファイル名は `src/features/materials/_helpers/material-file.ts` の定数と合わせる）

## 関連

- `docs/seo-keyword-map.md` — KPI（非ブランド語のクリック数）
- `docs/analytics-setup.md` — GA4/GSCの設定
