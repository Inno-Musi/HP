# デザインリファレンス — 世界の定評サイト100 + エッセンス

MUSICOコーポレートサイトのリデザイン指針。世界で「有名・人気・デザイン定評」のあるサイトを、
MUSICOに近い順（ホスピタリティ→食→デザイン→テック→コーポレート）でカテゴリ別に整理し、
共通するデザインエッセンスを抽出した。出典：Awwwards / CSS Design Awards / 各業界ベスト集 + デザイン知識。

---

## A. ラグジュアリー・ホスピタリティ／ホテル（最重要）
Aman / Belmond / Six Senses / Four Seasons / Rosewood / Park Hyatt / 星のや（Hoshino Resorts） /
Aman Tokyo / Bulgari Hotels / Edition Hotels / 1 Hotels / Singita / Soho House / Ace Hotel / The Hoxton

**エッセンス**：シネマティックな全幅写真／動画、過剰な余白による"静けさ"、ブラウン・トープ・ゴールドの温色、
予約導線は1つに集約。Aman は「沈黙の余白」の教科書。

## B. ファインダイニング／レストラン
Noma / Eleven Madison Park / The French Laundry / Alinea / Pujol / Central (Lima) /
Osteria Francescana / Le Bernardin / Den（東京）/ Narisawa / Tartine / Sweetgreen

**エッセンス**：料理写真を主役に、テキストは最小。静かなセリフ見出し＋大量の余白。「体験の予感」を売る。

## C. フード&ビバレッジ・ブランド
Graza / Brightland / Oatly / Omsom / Fly By Jing / Ghia / Haus / Olipop / Magic Spoon / Recess / Liquid Death / Oddbox

**エッセンス**：強い個性・温かいコピー・大胆な色／アナログ質感。
※B2B高級なMUSICOは寄せすぎ注意。参考は「色温度」と「写真の使い方」だけ。

## D. 建築・デザインスタジオ
Herzog & de Meuron / BIG / MVRDV / SOM / Snøhetta / OMA / Zaha Hadid / Foster + Partners /
Heatherwick / Effekt / Olson Kundig / Studio MK27

**エッセンス**：タイポグラフィが主役、ロゴすら控えめ。厳格なグリッド＋意図的な非対称。作品＝写真で語る。

## E. クリエイティブエージェンシー／ポートフォリオ
Pentagram / Collins / Instrument / Active Theory / Locomotive / Noomo / Resn / Hello Monday /
Bruno Simon / Robin Noguier / Tobias van Schneider / Studio Lievito

**エッセンス**：エディトリアル＋実験的タイポ、スクロール演出、余白の抜き。作り手の美意識を全面に。

## F. プレミアム消費財／ファッション・ビューティ
Aesop / Apple / Hermès / Bottega Veneta / COS / Le Labo / Byredo / Glossier / Kinfolk / Cereal / Muji / Acne Studios

**エッセンス**：Aesop＝抑制と知性、Kinfolk/Cereal＝雑誌的余白とセリフ。色を削り、写真と文字の質で勝負。

## G. テック／SaaS／プロダクト（クリーンな設計系）
Stripe / Linear / Vercel / Figma / Notion / Framer / Arc / Raycast / Mercury / Pitch / Superlist / Height

**エッセンス**：圧倒的な明快さ、余白、1次CTA、トークン化された一貫システム。MUSICOのAI/DX面の信頼感に効く。

## H. コーポレート／コンサル／金融
McKinsey / Bloomberg / Goldman Sachs / BlackRock / Ramp / Brex / Palantir / Monzo / iCOMAT / N26

**エッセンス**：権威性＋抑制。少ない色、大きな見出し、データの見せ方。固くなりすぎない最新例＝Ramp / Mercury。

## I. 編集・文化・美術館
Frans Hals Museum（Awwwards年間最優秀）/ MoMA / Cooper Hewitt / The Met / It's Nice That / The Pudding / NYT特集 / Bloomberg Businessweek

**エッセンス**：大胆なタイポ・色、コンテンツ＝デザイン。読み物としての強度。

---

## 抽出した「効くエッセンス」12（全カテゴリ横断）

1. 写真が主役・全幅：箱に入れず、シネマティックに見せる
2. "静けさ"の余白：密度ではなく余白が高級感（Aman）
3. 温かい抑制配色：アイボリー／ストーン／チャコール＋アクセント1色（ブラス／クレイ／セージ）。色は削る
4. エディトリアル・タイポ：大きな洗練セリフ見出し＋クリーンなサンセリフ本文。文字＝デザイン要素
5. 脱・箱（枠線を減らす）：余白と細い罫で区切る。カードの反復をやめる
6. 静かなモーション：スクロールでゆっくり現れる。派手にしない
7. グリッド＋意図的な非対称：対称グリッドの単調さを崩す
8. CTAは絞る：1次アクション1つ。迷わせない
9. 物語＞機能列挙：体験・思想を語る（特にホスピタリティ）
10. ディテールの工芸性：カーニング・ホバー・余白の精度が"品"を作る
11. 一貫したシステム：色・型・余白のトークン統一
12. 高速・モバイル最適：WebP・軽量・指で押せる

---

## MUSICOへの落とし込み（三層ミックス）

ホスピタリティ（A/B/F）の温かさ ＋ デザインスタジオ（D/E）の編集力 ＋ テック（G）の明快さ。

| 要素 | 現状 | 推奨 |
|---|---|---|
| 地色 | 冷たいグレー(zinc) | アイボリー／ストーン（温色） |
| アクセント | なし | ブラス or クレイ 1色（eyebrow・罫・CTA） |
| 見出し | 太字サンセリフ | 洗練セリフ（和：明朝系／欧：Fraunces等）＋大きく |
| カード | 白＋枠＋角丸の反復 | 脱・箱、余白＋細罫、写真は全幅 |
| 余白 | 密 | 大胆に広く（静けさ） |
| モーション | フェードのみ | スクロールで静かに現れる |
| AI/DX系ページ | 同じ質感 | Stripe的な明快システムで信頼感 |

具体トークンは `docs/design-spec.md` を参照。
