# IndexNow

更新したURLを Bing / Yandex 等へ**即時通知**する仕組み。クローラーの巡回を待たずに済むため、
被リンクが少なく巡回頻度が低い新規ドメインほど効果が大きい。

## 構成

| 項目 | 値 |
|---|---|
| キー | `2444ec73a3cf564159e848ce13a903a0` |
| キーファイル | `public/2444ec73a3cf564159e848ce13a903a0.txt` → `https://www.musico.co.jp/2444ec73a3cf564159e848ce13a903a0.txt` |
| エンドポイント | `https://api.indexnow.org/indexnow` |
| 送信スクリプト | `scripts/indexnow-submit.mjs` |

キーは秘密情報ではない（所有権証明のためにあえて公開する）。ただし**キーファイルとスクリプト内の
KEY は必ず同じ値**にすること。ずれると送信が無効になる。

## ⚠️ 前提: middleware がキーファイルをリダイレクトしないこと

`middleware.ts` の matcher が `.txt` を除外していないと、`/<KEY>.txt` が 308 で `/ja` に
飛ばされ、**IndexNow 側は 202 を返すのに実際には無効**という状態になる（`llms.txt` で実際に
起きた事象と同型）。

送信スクリプトは冒頭でキーファイルが 200 を返すか検証し、駄目なら送信せず落ちる。

## 使い方

```bash
# 送信内容の確認だけ（送信しない）
node scripts/indexnow-submit.mjs --dry-run --from-sitemap

# 特定URLを送信（記事公開・タイトル変更のたびに実行）
node scripts/indexnow-submit.mjs https://www.musico.co.jp/ja/insights/office-coffee-options

# サイトマップ全URLを送信（大きな変更のあと）
node scripts/indexnow-submit.mjs --from-sitemap
```

レスポンスは **200（受理）または 202（受理・キー検証中）が正常**。

## 運用

- microCMS で insights / works / news を公開したら、そのURLを送信する
- money page の title や本文を大きく変えたときも送信する
- 送信結果は Bing Webmaster Tools の **IndexNow** 画面（Submitted Urls list）で確認できる
  - 参考: 2024-12-09 に Wix 由来の送信履歴が3件残っている（旧サイトの名残）

## 関連

- `docs/seo-keyword-map.md` — キーワード設計とAIOチェックリスト
- `public/llms.txt` — AI検索向けのサイトインデックス（こちらも静的なので手で更新する）
