# UTMパラメータ規約（musico.co.jp への外部リンク）

外部媒体からサイトへ張るリンクには、必ずUTMパラメータを付けます。GA4（測定ID G-7BJBFDNG4T）で「どの媒体が流入と問い合わせを運んだか」を媒体別に計測するためです。

## 基本形

```
https://www.musico.co.jp/ja/<path>?utm_source=<媒体>&utm_medium=<種別>&utm_campaign=<施策>
```

## 値の規約（小文字・英数字のみ）

| パラメータ | 使う値 | 意味 |
|---|---|---|
| `utm_source` | `x` / `linkedin` / `note` / `wantedly` / `newsletter` / `chat` | 流入元の媒体名 |
| `utm_medium` | `social`（SNS投稿） / `profile`（プロフィール欄の固定リンク） / `email`（メール署名・配信） / `referral`（その他サイト） | リンクの置き場所の種別 |
| `utm_campaign` | `works`（事例告知） / `insights`（記事告知） / `recruiting`（採用） / `corporate`（会社案内一般） | 何の施策か |

## よく使う完成形（コピペ用）

- X（Twitter）で事例を告知:
  `?utm_source=x&utm_medium=social&utm_campaign=works`
- LinkedInで事例を告知:
  `?utm_source=linkedin&utm_medium=social&utm_campaign=works`
- Noteの記事本文から:
  `?utm_source=note&utm_medium=referral&utm_campaign=works`
- Wantedlyのストーリー・募集ページから:
  `?utm_source=wantedly&utm_medium=referral&utm_campaign=recruiting`
- メール署名の「事例公開中」リンク:
  `?utm_source=email&utm_medium=email&utm_campaign=corporate`

例（議事録自動化の事例をXで告知する場合）:

```
https://www.musico.co.jp/ja/works/ai-meeting-notes-automation?utm_source=x&utm_medium=social&utm_campaign=works
```

## ルール

1. **社外に張るリンクには必ず付ける**（SNS・Wantedly・メール署名・外部記事）。社内チャットや資料は任意
2. 値は**この表から選ぶ**。新しい値が必要になったらこのファイルに追記してから使う（表記ゆれるとGA4で集計が割れる）
3. サイト内部のリンクには付けない（内部遷移にUTMを付けるとセッションが切れる）
4. 計測結果は GA4 →「集客」→「トラフィック獲得」で `セッションのキャンペーン` / `セッションの参照元` を見る

## なぜ必要か

UTMが無いと、GA4上でSNS流入は「x.com / referral」等に丸められ、**どの投稿・どの施策が効いたか区別できません**。特に事例公開（works）と採用（recruiting）は目的が違うので、campaign を分けておくと「事例経由の問い合わせが何件」まで追えます。
