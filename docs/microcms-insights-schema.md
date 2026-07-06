# microCMS `insights` API 作成手順（Insights記事用）

Sprint 4（記事コンテンツ）を公開するために、microCMS管理UIで新しいAPIを1本作成します。**APIキーでは作成できないため、石黒さんの画面操作が必要**です（既知の制約）。コード側（`/insights`一覧・詳細ページ、sitemap、Article構造化データ）は実装済みで、このAPIができ次第そのまま動きます。

## 1. API基本設定

- スペース: `musico-hp`
- **APIの種類**: リスト形式
- **エンドポイント**: `insights`（※コードがこの名前を参照。変更不可）
- **API名**: インサイト（任意）

## 2. APIスキーマ（フィールド定義）

works / news と同じ思想。以下のフィールドID・種類で作成してください（**フィールドIDは完全一致必須**、型定義 `src/services/insights/types.ts` と対応）。

| フィールドID | 表示名 | 種類 | 必須 | 備考 |
|---|---|---|---|---|
| `slug` | スラッグ | テキストフィールド | ✅ | URLに使う。半角英数字とハイフン（例 `office-cafe-introduction-guide`） |
| `titleJa` | タイトル（日本語） | テキストフィールド | ✅ | |
| `titleEn` | タイトル（英語） | テキストフィールド | | |
| `descriptionJa` | ディスクリプション（日本語） | テキストエリア | | メタ説明。110〜120字目安 |
| `descriptionEn` | ディスクリプション（英語） | テキストエリア | | |
| `categoryJa` | カテゴリ（日本語） | テキストフィールド | | 例: オフィスフード / コーポレートダイニング / ケータリング / AI/DX |
| `categoryEn` | カテゴリ（英語） | テキストフィールド | | 例: Office Food / Corporate Dining / Catering / AI/DX |
| `contentJa` | 本文（日本語） | リッチエディタ | ✅ | 見出し(H2/H3)・段落・箇条書き。冒頭に3行まとめ＋末尾にFAQ推奨 |
| `contentEn` | 本文（英語） | リッチエディタ | | |
| `image` | サムネイル画像 | 画像 | | 任意。一覧カード・OGP・Article schemaに使用 |
| `imageEn` | サムネイル画像（英語用） | 画像 | | 任意 |

> カテゴリはテキストフィールドで開始（works/newsと同じ運用）。将来的にセレクトフィールド化してもよい。

## 3. APIキー権限

- 既存の Content APIキー（default, 末尾 `lyAw`）に **`insights` の GET 権限**が必要。
- APIキー詳細 →「変更」で `insights` の GET にチェック →「変更する」（鍵値は再生成されない）。
- 本番はGETのみでOK（投稿はスクリプト経由。PUT/DELETEを一時付与するのは公開昇格時のみ、works/newsと同じ運用）。

## 4. 初回記事の投入

`src/services/insights/dev-seed.json` に初回5記事の下書き（日英・本文HTML・FAQ入り）が用意済みです。

- **ローカルプレビュー**: 開発モードでは dev-seed フォールバックが効くため、APIが無くても `/ja/insights` `/en/insights` と各記事詳細をプレビュー確認できます。
- **本番公開**: works の `scripts/post-*.mjs` と同じ要領で、dev-seed.json を microCMS へ POST する投入スクリプトを用意して実行します（日本語はNode/JSON.stringify経由・`status=publish`でPOST・直接実行ガード必須、の既知ルールを踏襲）。※スクリプトはAPI作成後に用意します。

## 5. ナビゲーション導線（公開後）

現状 `/insights` は sitemap と直リンクからのみ到達可能。**ヘッダー/フッターへの「インサイト」リンク追加は、初回記事が本番公開されてから**行う想定（空ページへの導線を避けるため）。追加時はヘッダーの `links.ts` とフッターに1項目足すだけ。

## チェックリスト（石黒さん用）
- [ ] microCMSで `insights` API（リスト形式）を作成
- [ ] 上表のフィールドを作成（IDは完全一致）
- [ ] APIキーに `insights` GET 権限を付与
- [ ] （Claude側）投入スクリプトで初回5記事を公開
- [ ] 本番 `/ja/insights` で表示確認
- [ ] ヘッダー/フッターに導線を追加
