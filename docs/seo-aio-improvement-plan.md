# MUSICO公式サイト SEO / AIO 改善計画書

作成日: 2026-07-05 ／ 対象: musico.co.jp（GitHub `Inno-Musi/HP`, Next.js 15 App Router + microCMS + Vercel）
思想: **Brand First / SEO Second / AIO Everywhere** — トップはブランドサイト、下層でSEO、AIには構造化情報を。

---

## Phase 1 — 現状分析（コード＋本番実測）

### 1-1. 確認済みの現状（2026-07-05 実測）

**できていること（強み）**
| 項目 | 状態 | 根拠 |
|---|---|---|
| title / meta description | ✅ 全ページ個別設定済（generateMetadata） | 各 `page.tsx` |
| 動的ページのメタ | ✅ news/works詳細も動的生成（HTML除去+80/120字） | `works/[slug]/page.tsx:10-42` |
| robots.txt | ✅ 存在。completed のみ disallow | `src/app/robots.ts` |
| sitemap.xml | ✅ 静的14ページ×2言語、hreflang代替付き | `src/app/sitemap.ts` |
| パンくず（UI） | ✅ 16ページで表示 | `src/components/bread-crumbs.tsx` |
| H1（下層） | ✅ サービス5LP・works/news詳細・servicesに存在 | 各ページ |
| FAQセクション（UI） | ✅ サービス各LPに「よくあるご質問」h2あり | 例 `corporate-food/page.tsx:458` |
| GTM | ✅ 導入済 | `[language]/layout.tsx:48` |
| Google Search Console | ✅ 検証ファイルあり | `public/googlefba99e68cb98d5c1.html` |
| 多言語ルーティング | ✅ `/` → `/ja` へ307、/ja /en 分離、旧 /philosophy → /about リダイレクト | `src/middleware.ts` |
| 404 | ✅ not-found.tsx あり | `src/app/not-found.tsx` |
| 画像alt | ✅ ほぼ設定済（空altは装飾ヒーロー4件のみ＝正しい用法） | 監査結果 |

**欠落・問題点一覧（優先度付き）**

| # | 優先度 | 問題 | 影響 | 場所 |
|---|---|---|---|---|
| 1 | 🔴 P0 | **トップページにH1が無い**。FVは背景画像＋CTAボタン2つのみで、会社説明テキストがファーストビューに存在しない | 「何の会社か」が検索エンジンにもAIにも人にも伝わらない。最重要ページの主題が不明 | `features/root/_components/section-fv.tsx` |
| 2 | 🔴 P0 | **JSON-LDがゼロ**（Organization / BreadcrumbList / FAQPage / Article / Service すべて無し） | AI検索・リッチリザルトの土台が無い。AIOの根幹 | 全ページ（grep 0件） |
| 3 | 🔴 P0 | **OGP / Twitter Card が全ページ無し**。OG画像素材も無し | SNS・Slack・チャット共有時にプレビューが出ない。AIクローラーの理解も低下 | 全 generateMetadata |
| 4 | 🔴 P0 | **canonical / hreflang がページメタに無い**（sitemap内のみ） | ja/en の重複コンテンツリスク。/ja と /en の評価分散 | 全 generateMetadata |
| 5 | 🔴 P0 | **works詳細8件がsitemap未掲載**・news sitemapは空実装（`return []`） | 事例＝最強のSEO/AIO資産がクロール対象から漏れる | `sitemap.ts` / `news/sitemap.ts:4` |
| 6 | 🟠 P1 | FAQセクションはUIのみで FAQPage schema 無し | リッチリザルト・AI引用の機会損失 | サービス5LP |
| 7 | 🟠 P1 | works/news詳細に generateStaticParams 無し | ビルド時プリレンダされずTTFB劣化・クロール効率低下 | 動的ルート2本 |
| 8 | 🟠 P1 | works詳細に **CTA・関連サービス・関連事例リンクが無い**（本文→フッターで終了） | 事例流入が問い合わせに繋がらない | `work-content.tsx` |
| 9 | 🟠 P1 | works一覧の description が汎用文（「実績・事例をご紹介します」） | 検索結果でのCTR低下 | `works/page.tsx` |
| 10 | 🟡 P2 | 旧 `/philosophy` ページがファイルとして残存。title/descがコンサル時代の古い文言（現ブランドと矛盾） | AIが古い定義を学習するリスク。redirect済だが直リンクで到達可 | `philosophy/page.tsx` |
| 11 | 🟡 P2 | 「MUSICOとは」を定義する引用可能な定義文・会社データ（設立年・代表・所在地等の構造化）が about に無い | AI検索が引用する一次情報が弱い | `about/page.tsx` |
| 12 | 🟡 P2 | Insights（記事）セクションが存在しない | 非指名検索の流入経路ゼロ | — |
| 13 | 🟡 P2 | パンくずが BreadcrumbList schema 未対応 | #2 に含む | `bread-crumbs.tsx` |
| 14 | 🟡 P2 | newsの日付がseedプレースホルダ（6/6〜6/16） | E-E-A-T・AI引用時の信頼性 | microCMS運用 |
| 15 | ⚪ P3 | `/` → `/ja` が **307**（一時リダイレクト） | 恒久なら308が適切。実害は小 | `middleware.ts:9` |
| 16 | ⚪ P3 | LocalBusiness schema 無し | B2B主体なのでOrganizationで十分。優先度低 | — |
| 17 | ⚪ P3 | Core Web Vitals 未計測（PSI APIは当日クォータ切れで未実測）。トップはframer-motionの InitialAnimation → hero表示のためLCP遅延の懸念 | LCP要実測 | `initial-animation.tsx` |

> hreflang: sitemap.xml内には実装済み（有効な実装方法の1つ）だが、ページ側 `alternates` との併用が安全。x-default が無い点は要追加。

---

## Phase 2 — 情報設計（サイトマップ再設計）

### 2-1. 方針: **既存URLは動かさない。足りないページを足す**

提示いただいた `/services/office-cafe` 型のネスト構成は理想形だが、**現サイトはフラットURL（/corporate-food 等）で公開済み・被リンク獲得中**。全面移行は 301設計・内部リンク書換・Vercel再検証のコストに対し得られるSEO効果が小さい（URL階層自体はランキング要因としてほぼ中立）。よって:

- **維持**: `/corporate-food` `/catering` `/dx-ai` `/talent` `/regional` `/works` `/news` `/about` `/careers` `/contact`
- **新設**: 下記4本
- **廃止**: `/philosophy`（ファイル削除。redirectは維持）

### 2-2. 目標サイトマップ

```
/ (ja|en)
├── about                ← 強化:「MUSICOとは」定義文＋会社概要（Phase 4-1, 5）
├── services             ← 事業一覧ハブ（既存）
│   （個別LPはフラットURLのまま services から内部リンク）
├── corporate-food       ← 法人向けフードサービス（既存・強化）
├── office-cafe          ★新設: オフィスカフェ運営
├── executive-dining     ★新設: エグゼクティブダイニング
├── catering             ← ケータリング・イベント（既存・強化）
├── dx-ai                ← ホスピタリティDX（既存・強化）
├── talent               ← 人材支援（既存・強化）
├── regional             ← 地方創生（既存・強化）
├── works                ← 事例ハブ（既存: 事例・実績 ＋ AI/DX事例の2セクション）
│   └── works/[slug]     ← テンプレ統一（Phase 6）
├── insights             ★新設: 記事ハブ（Phase 7）
│   └── insights/[slug]  ★新設: 記事詳細（microCMSに insights API 新規作成）
├── news / news/[id]     ← 既存
├── careers / contact    ← 既存
└── privacy-policy / security-policy
```

**理由と期待効果**
- office-cafe / executive-dining の分離新設: works に「米国系金融 オフィスカフェ」「米系投資銀行 エグゼクティブダイニング」の実例が既にあり、**1ページ=1検索意図**の原則で corporate-food から独立させると「オフィスカフェ 運営」「エグゼクティブダイニング」の指名外検索を取れる。corporate-food は「社員食堂・法人フード全般」に意図を純化。
- insights 新設: 非指名キーワードの受け皿。microCMSに `insights` API（works/newsと同パターン）を追加。
- microCMS変更: `insights` API 新規作成（管理UIでのみ作成可・APIキーでは不可 ← 既知の制約）。

---

## Phase 3 — トップページ改善（変更は最小限・ブランド維持）

| # | 改善 | 差分 | 理由・期待効果 |
|---|---|---|---|
| T1 | **FVにH1＋タグライン追加** | `section-fv.tsx` のCTAボタン群の上に追加:<br>`<h1>` = 「ホスピタリティを、再設計する。」（en: "Redesigning Hospitality, End to End."）<br>`<p>` = 「MUSICOは食・空間・運用・テクノロジーを一気通貫で設計・実装する Hospitality Innovation Firm です」<br>既存の serif（Shippori Mincho / Fraunces）+ 白文字 + MotionUp で hero 左下に配置。**デザイン変更というより「空いていた場所に本来あるべきコピーを置く」** | 5秒理解の達成＋トップの主題宣言（SEO最重要）。hero画像の左下は現在ボタンしか無く余白があるためブランドを壊さない |
| T2 | FVのhero画像を `next/image (priority)` 化 | `background-image` (CSS) → `<Image fill priority>` | CSS背景はpreloadされずLCP悪化要因。priority付与でLCP改善 |
| T3 | InitialAnimation をスキップ可能に（初回訪問のみ表示 or 時間短縮） | sessionStorage で2回目以降スキップ | LCP/INP改善。ブランド演出は初回に残す |
| T4 | お知らせ最新3件枠をWorksとContactの間に追加 | 既存 `news-card.tsx`（未使用で残置中）またはnews一覧のエディトリアル行形式を流用 | 更新性のシグナル（クロール頻度・E-E-A-T）。※以前から「欲しければ新設」と保留していた項目 |
| T5 | SectionServices の説明文を `<h2>`＋`<p>` の正しい階層に（現状の見出し構造を維持しつつタグだけ意味付け） | マークアップのみ | 見た目不変でアウトライン改善 |
| T6 | CTA・導線 | 変更なし（事業内容を見る/お問い合わせの2CTA、Works・Contactセクション既存）。SectionWorksに「AI/DX事例」への直リンクを1本追加のみ | 既存導線は良好。触らない |

---

## Phase 4 — SEOページ設計（8ページ）

共通ルール: title=全角30字前後・主要キーワード前方 / description=全角110〜120字・行動+価値+実績 / H1は1つ / CTAは「お問い合わせ」+「事例を見る」の2種 / 全ページに Service or AboutPage schema＋BreadcrumbList＋FAQPage(該当時)。

### 4-1. MUSICOとは（/about 強化）
- **title**: `MUSICOとは | ホスピタリティを再設計する会社 | 株式会社MUSICO`
- **description**: `株式会社MUSICOは、食・空間・運用・テクノロジーを一気通貫で設計・実装するHospitality Innovation Firm。外資系金融機関のオフィスカフェ運営からAI/DX、人材支援まで、会社概要・代表・沿革をご紹介します。`
- **H1**: `MUSICOとは`
- **H2構成**: ①MUSICOの定義（Phase 5の定義文をそのまま掲載）②3つの注力領域と2つの関連領域 ③選ばれる理由（現場×経営×テクノロジー）④会社概要（表: 社名/設立/代表/所在地/事業内容）⑤代表メッセージ ⑥メンバー（既存）
- **CTA**: 事業内容へ / お問い合わせ
- **内部リンク**: services・5LP・works・careers
- **schema**: AboutPage + Organization(参照) + Person(代表)

### 4-2. 法人向けフードサービス（/corporate-food 強化）
- **title**: `法人向けフードサービス・社員食堂運営 | 株式会社MUSICO`
- **description**: `外資系・大手企業のオフィスカフェ・社員食堂・社内カフェテリアを企画から運営まで一貫支援。品質・コスト・従業員エンゲージメントを同時に高める法人向けフードサービスです。導入事例つき。`
- **H1**: `法人向けフードサービス`
- **H2**: 課題提起（福利厚生×採用×エンゲージメント）/ サービス範囲（企画・立上げ・運営・改善）/ 提供形態（社員食堂・カフェテリア・置き型 等）/ 導入の流れ / 導入事例（works 3件を埋込）/ よくあるご質問（既存FAQ拡充: 費用感・最小規模・契約形態・食品衛生体制）
- **CTA**: 資料・お見積り相談（contact） / 事例を見る
- **内部リンク**: office-cafe・executive-dining・catering・works該当事例・insights関連記事
- **狙うクエリ**: 社員食堂 委託 / 法人 フードサービス / オフィス カフェテリア 運営

### 4-3. オフィスカフェ運営（/office-cafe 新設）
- **title**: `オフィスカフェ運営代行・導入支援 | 株式会社MUSICO`
- **description**: `外資系金融機関で実績のあるオフィスカフェ運営。バリスタ採用・育成、メニュー開発、利用データに基づく改善までワンストップ。従業員体験を高めるオフィスカフェの導入・運営代行はMUSICOへ。`
- **H1**: `オフィスカフェ運営`
- **H2**: オフィスカフェが生む価値（採用・定着・社内交流）/ MUSICOの運営体制（バリスタ内製育成・品質管理・データ改善）/ 導入パターンと費用の考え方 / 導入事例（us-bank-office-cafe を中心に）/ FAQ（広さ・人数規模・水回り要件・営業時間 等）
- **CTA**: 導入相談 / 事例を見る
- **内部リンク**: corporate-food（親概念）・executive-dining・works/us-bank-office-cafe
- **狙うクエリ**: オフィスカフェ 運営 / オフィスカフェ 導入 / 社内カフェ 運営代行

### 4-4. ケータリング（/catering 強化）
- **title**: `法人向けケータリング・イベントフード | 株式会社MUSICO`
- **description**: `VIP会食・レセプション・社内イベント・ビジネスランチまで、グレードに応じた食体験を設計・運営。外資系金融機関での豊富な実績を持つMUSICOの法人向けケータリングサービスです。`
- **H1**: `ケータリング・イベント`
- **H2**: シーン別提案（VIP/レセプション/社内イベント/定例ランチ）/ MUSICOの強み（設計→当日運営→撤収まで一気通貫）/ ご利用の流れ（リードタイム・最小ロット）/ 事例 / FAQ（対応エリア・人数・アレルギー対応・直前変更）
- **狙うクエリ**: ケータリング 法人 / レセプション ケータリング / VIP 会食 ケータリング

### 4-5. ホスピタリティDX（/dx-ai 強化）
- **title**: `ホスピタリティDX・飲食業界のAI活用支援 | 株式会社MUSICO`
- **description**: `現場を運営する会社だから作れる、ホスピタリティ・飲食業界専用のAI/DX。属人化したノウハウを構造化し、現場に定着する仕組みへ再設計。PoCパートナー募集中。社内AI活用事例を公開しています。`
- **H1**: `AI/DX × Hospitality`
- **H2**: 業界の構造課題（属人化・紙運用・データ不在）/ MUSICOのアプローチ（現場理解×実装）/ 提供メニュー（業務診断・AI導入PoC・帳票デジタル化・データ基盤）/ 事例（ai-payables-management ほか）/ FAQ
- **狙うクエリ**: 飲食 DX / ホスピタリティ DX / 飲食店 AI 活用 / 外食 業務効率化

### 4-6. エグゼクティブダイニング（/executive-dining 新設）
- **title**: `エグゼクティブダイニング運営 | 役員フロア・VIP対応 | 株式会社MUSICO`
- **description**: `米系投資銀行で実績のあるエグゼクティブダイニング（役員食堂・VIPダイニング）の設計・運営。シェフ・サービススタッフの採用育成から会食オペレーションまで、最高水準のホスピタリティを提供します。`
- **H1**: `エグゼクティブダイニング`
- **H2**: エグゼクティブダイニングとは（定義文=AIO用）/ 求められる水準（機密性・プロトコル・食の質）/ MUSICOの運営体制 / 事例（us-ibank-executive-dining）/ FAQ
- **狙うクエリ**: エグゼクティブダイニング / 役員食堂 運営 / 役員 会食 社内
- ※検索量は小さいが競合がほぼ不在＋単価が高い=BOFU効率最良

### 4-7. 人材支援（/talent 強化）
- **title**: `ホスピタリティ・飲食業界の人材支援 | 株式会社MUSICO`
- **description**: `人材紹介会社ではなく、人材課題ソリューションファーム。中立的な診断から、採用・育成・派遣・業務委託・業務再設計を組み合わせ、ホスピタリティ・飲食業界の人材課題を根本から解決します。`
- **H1**: `人材支援`
- **H2**: 業界の人材課題 / 紹介会社との違い（診断起点）/ ソリューション一覧 / 進め方 / FAQ
- **狙うクエリ**: 飲食 人材 課題 / ホスピタリティ 人材 / 飲食店 採用 支援

### 4-8. 地方創生（/regional 強化）
- **title**: `食と観光による地方創生支援 | 株式会社MUSICO`
- **description**: `食・農・観光を掛け合わせた地域ブランディングと事業開発を支援。道北地域での実績をもとに、自治体・地域事業者と持続可能なホスピタリティの仕組みを構築します。`
- **H1**: `地方創生支援`
- **H2**: 課題認識 / 支援メニュー（地域ブランディング・観光食体験開発・事業伴走）/ 事例（dohoku-regional-revitalization / hakuba-resort-fb）/ 進め方 / FAQ
- **狙うクエリ**: 地方創生 食 / 地域活性化 観光 支援 / 道の駅 プロデュース 等

---

## Phase 5 — AIO対応（AI検索最適化）

### 5-1. AIが引用しやすい定義文（/about 冒頭・トップmeta・Organization schemaのdescriptionで統一使用）

> **株式会社MUSICO（ムジコ）は、東京を拠点とするHospitality Innovation Firmです。外資系金融機関をはじめとする企業向けに、オフィスカフェ・社員食堂・エグゼクティブダイニングの運営、ケータリング、ホスピタリティ業界向けAI/DX支援、人材支援、地方創生支援を提供しています。食・空間・運用・テクノロジーを一気通貫で設計・実装することを強みとし、「幸福な時間を仕組みで増やす」ことをミッションとしています。2022年設立、代表取締役は瀬本頼一です。**

- 「AはBである。AはCを提供する。Aの強みはDである」という**主語明示・三段構造**がLLMの引用に最適。同一文言を複数箇所（about本文・schema・OG description）で使い回すことで、AIの学習・検索時の一貫性を確保する。
- en版も同構造で作成。

### 5-2. JSON-LD設計（実装は共通コンポーネント `src/components/json-ld.tsx` を新設）

| Schema | 配置ページ | 主要プロパティ |
|---|---|---|
| **Organization** | 全ページ（layout） | name(株式会社MUSICO/MUSICO Inc.), alternateName(ムジコ), url, logo, description(5-1定義文), foundingDate(2022), founder(Person: 瀬本頼一), address, sameAs(Wantedly/X/Facebook), contactPoint |
| **WebSite** | トップ | name, url, inLanguage |
| **BreadcrumbList** | パンくず表示の全16ページ | 既存 `bread-crumbs.tsx` に統合し UI と schema を単一ソース化 |
| **Service** | サービス7LP | serviceType, provider(→Organization), areaServed(JP), description |
| **FAQPage** | FAQを持つサービスLP | 既存FAQデータを配列化し UI と schema を単一ソース化 |
| **Article**(NewsArticle/BlogPosting) | news詳細・insights詳細 | headline, datePublished, dateModified, author(→Organization), image |
| **Person** | about（代表・役員） | name, jobTitle, worksFor |
| **AboutPage / ContactPage** | about / contact | mainEntity → Organization |

実装パターン（Server Componentでそのまま出力）:
```tsx
export const JsonLd = ({ data }: { data: object }) => (
  <script type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
)
```

### 5-3. その他AIO施策
- **FAQの拡充**: 各LP4〜6問。「〜とは何ですか」「費用はいくらですか」形式＝AI検索の質問形クエリに直答。
- **works/insightsの冒頭に「まとめ（3行）」ブロック**: AIが抜きやすい要約を先頭に置く。
- **llms.txt**（`public/llms.txt`）: サイト構造と定義文を記載。標準化途上だが低コスト・リスクゼロ。
- **news日付の実態化**: プレースホルダ日付をやめ、以後は実日付で公開（信頼性）。
- **/philosophy の削除**: 旧ブランド文言をAIに拾わせない。

---

## Phase 6 — 事例（works）ページ改善

### 6-1. テンプレート統一（8件共通）

```
[カテゴリ] [クライアント属性] [サービス種別]   ← H1（既存踏襲）
■ まとめ（3行サマリー: 誰の/何を/どうなった）  ★AIO用・新設
■ 課題        (H2)
■ 支援内容     (H2) — MUSICOの担当範囲を明記
■ 実施内容     (H2)
■ 成果        (H2) — 可能な限り定量（数値NGなら定性でも「Before→After」形式）
■ 関連サービス  (H2) — 該当サービスLPへカード型リンク    ★新設
■ 関連事例・関連記事                              ★新設
■ CTA「同様の課題をお持ちの方はご相談ください」→ /contact ★新設
```

### 6-2. 実装方式
- microCMS `works` スキーマは現状フラットなリッチエディタ（contentJa/En）のため、**スキーマ変更せず「本文内H2を上記見出しに統一」する運用ルール**で開始（コスト最小）。将来 `relatedService`(セレクト), `summaryJa`(テキストエリア) フィールドを追加。
- `work-content.tsx` に追加実装: 関連サービスマップ（categoryJa → サービスLPのURL対応表）・CTAセクション・Article schema・generateStaticParams・OGP画像（`public/works/*.jpg` が既にあるためそのまま og:image に使用）。
- 既存8件の本文をテンプレに沿ってリライト（microCMS上でPATCH。日本語はNode経由の既知ルール遵守）。

---

## Phase 7 — Insights 記事30本（カテゴリ×検索意図）

意図: Know=情報収集 / Compare=比較検討 / Do=導入直前。→内部リンク先LPを併記。

### Office Food（→ /corporate-food, /office-cafe）
| # | タイトル案 | 主要クエリ | 意図 |
|---|---|---|---|
| 1 | 社員食堂の運営委託とは？費用相場・契約形態・選び方を解説 | 社員食堂 委託 費用 | Compare |
| 2 | オフィスカフェ導入ガイド：スペース要件・体制・費用の考え方 | オフィスカフェ 導入 | Do |
| 3 | 福利厚生としての「食」が採用・定着に効く理由（データで見る） | 福利厚生 食事 効果 | Know |
| 4 | 社員食堂 vs 置き型社食 vs デリバリー：規模別の最適解 | 社食 サービス 比較 | Compare |
| 5 | 外資系企業のオフィスフードが日本企業と違う5つのポイント | 外資系 社員食堂 | Know |
| 6 | オフィスコーヒーの内製バリスタ育成という選択肢 | オフィス コーヒー バリスタ | Know |
| 7 | 社員食堂の喫食率を上げるメニュー設計とデータ活用 | 社員食堂 喫食率 | Do |
| 8 | フードサービス委託先の切り替え手順と注意点 | 社員食堂 委託先 変更 | Do |

### Corporate Dining / Executive（→ /executive-dining）
| 9 | エグゼクティブダイニングとは？外資系金融で標準の役員フロア食体験 | エグゼクティブダイニング とは | Know |
| 10 | 役員会食を社内で行うメリットと運営体制の作り方 | 役員 会食 社内 | Know |
| 11 | 機密性の高い会食運営：プロトコルとスタッフ教育 | 会食 プロトコル | Know |

### Catering（→ /catering）
| 12 | 法人ケータリングの選び方：価格帯・グレード・対応範囲 | ケータリング 法人 選び方 | Compare |
| 13 | オフィスレセプションの企画チェックリスト（人数・動線・食事量） | レセプション 企画 | Do |
| 14 | アレルギー・宗教対応（ハラル/ビーガン）ケータリング実務ガイド | ケータリング ビーガン対応 | Do |
| 15 | 社内イベントの食事で失敗しない発注リードタイムと数量計算 | ケータリング 数量 目安 | Do |

### AI / DX（→ /dx-ai）
| 16 | 飲食・ホスピタリティ業界のDXが進まない構造的理由 | 飲食 DX 課題 | Know |
| 17 | 飲食業のAI活用事例10選：発注・シフト・帳票・請求 | 飲食 AI 活用事例 | Know |
| 18 | 紙の衛生管理帳票をデジタル化する方法（Google Forms実践例） | 衛生管理 記録 デジタル化 | Do |
| 19 | 属人化したベテランのノウハウを仕組みに変える手順 | 属人化 解消 方法 | Know |
| 20 | 中小飲食企業のためのAI導入PoCの始め方（費用と期間） | AI 導入 PoC 進め方 | Do |
| 21 | 買掛・支払業務をAIで自動化した実例（自社事例公開） | 支払業務 自動化 | Know |

### Hospitality（→ /about, /corporate-food）
| 22 | ホスピタリティとサービスの違い：現場設計にどう落とすか | ホスピタリティ サービス 違い | Know |
| 23 | 「ホスピタリティ×テクノロジー」先進事例（国内外） | ホスピタリティ テクノロジー | Know |

### Sports Hospitality（→ /works/sports-cx-basketball）
| 24 | スポーツ観戦のCXを変えるスタジアムフード・ホスピタリティ | スタジアム グルメ 企画 | Know |
| 25 | Bリーグ・プロスポーツのVIPホスピタリティ設計事例 | スポーツ ホスピタリティ 事例 | Know |

### Regional Revitalization（→ /regional）
| 26 | 食による地方創生の成功パターンと失敗パターン | 地方創生 食 事例 | Know |
| 27 | 地域食材のブランディング：道北での実践から | 地域食材 ブランディング | Know |
| 28 | 観光×食体験の作り方：リゾート地のF&B再設計（白馬の事例） | リゾート 飲食 再生 | Know |

### 採用（→ /careers, /talent）
| 29 | 飲食業界のキャリアは「現場止まり」ではない：経営×現場×テックの人材論 | 飲食 キャリア パス | Know |
| 30 | ホスピタリティ人材の採用がうまくいかない会社の共通点 | 飲食 採用 うまくいかない | Know |

**運用**: 月2〜4本。1記事=2,000〜4,000字、冒頭3行サマリー＋FAQ 2問＋関連サービスCTA＋Article schema を必須テンプレに。まず #1, #2, #9, #12, #16（各サービスのBOFU/定義系）から着手。

---

## Phase 8 — 技術SEO改善一覧

| # | 項目 | 現状 | 改善 | 効果 |
|---|---|---|---|---|
| 1 | canonical | 無し | `[language]/layout.tsx` で共通生成 or 各ページ alternates.canonical | 重複防止 |
| 2 | hreflang | sitemapのみ | ページメタに ja / en / **x-default(=ja)** を追加 | 言語評価の統合 |
| 3 | OGP/Twitter | 無し | metadata共通ヘルパー `src/lib/metadata.ts` を作り全ページ適用。OG画像は 1200×630 を新規作成（トップ用1枚＋サービス用は既存 service-*.jpg 流用可） | SNS/チャット共有・AI理解 |
| 4 | sitemap | works詳細・news詳細が漏れ | `sitemap.ts` を async 化し microCMS から works/news/insights を動的取得（`news/sitemap.ts` の空実装は削除して本体に統合） | クロール網羅 |
| 5 | JSON-LD | 0件 | Phase 5-2 の通り | AIO根幹 |
| 6 | generateStaticParams | 無し | works/news 詳細に追加＋ `revalidate = 3600`（ISR） | TTFB/クロール効率 |
| 7 | LCP | hero が CSS background + 初回アニメ後に表示 | next/image priority化（T2）＋InitialAnimation最適化（T3）＋hero画像の圧縮（home-hero.jpg 要サイズ確認） | LCP < 2.5s |
| 8 | CLS | フォント4種読込 | `display: swap`（next/font標準）維持・heroに固定高あり=リスク低。計測のみ | CLS < 0.1 |
| 9 | INP | framer-motion多用 | 計測して問題があれば LazyMotion 化。先回り最適化はしない | INP < 200ms |
| 10 | リダイレクト | `/` → `/ja` が307 | middleware で 308 に（`NextResponse.redirect(url, 308)`） | シグナル明確化 |
| 11 | 404 | not-found あり | 404にトップ/サービスへの導線リンク追加（要確認） | UX |
| 12 | robots | completed のみ disallow | `/api/` を disallow に追加 | クロールバジェット |
| 13 | 旧philosophy | ファイル残存 | `philosophy/page.tsx` と features/philosophy を削除（redirectは維持） | 旧ブランド文言排除 |
| 14 | 画像 | alt良好・装飾4件 | 装飾画像に `aria-hidden` 追加（任意） | a11y |
| 15 | PSI計測 | 未実測（APIクォータ切れ） | 実装前後で PSI 計測しベースライン記録 | 効果検証 |

---

## Phase 9 — 実行計画

### 9-1. ロードマップ（4スプリント）

| Sprint | テーマ | 内容 | 工数感 |
|---|---|---|---|
| **S1（即効・基盤）** | メタ基盤とスキーマ | metadataヘルパー（canonical/hreflang/OGP）全ページ適用、OG画像作成、Organization/WebSite/BreadcrumbList schema、sitemap動的化、generateStaticParams、philosophy削除、robots修正、307→308 | 2〜3日 |
| **S2（トップ＆AIO）** | 5秒理解と引用可能性 | FV H1＋タグライン、hero next/image化、InitialAnimation最適化、about「MUSICOとは」再構成＋定義文＋会社概要表＋Person/AboutPage schema、FAQPage schema化（既存FAQのデータ化）、llms.txt | 2〜3日 |
| **S3（下層SEO）** | 新規LPと既存LP強化 | /office-cafe・/executive-dining 新設、5LPのtitle/desc/H2/FAQ拡充（Phase 4設計の適用）、Service schema、works テンプレ統一＋CTA＋関連リンク＋Article schema、news最新3件枠 | 4〜5日 |
| **S4（Insights）** | コンテンツエンジン | microCMS insights API 作成、/insights 実装（一覧・詳細・Article schema・sitemap）、初回5記事（#1,2,9,12,16）公開、以後月2〜4本 | 3日＋継続 |

### 9-2. GitHub Issue 分解（S1から順）

| Issue | タイトル | 依存 |
|---|---|---|
| 1 | feat(seo): 共通metadataヘルパー導入（canonical/hreflang/x-default/OGP/Twitter を全ページに） | — |
| 2 | feat(seo): OG画像作成・配置（トップ1200×630、サービスLPは既存画像流用） | 1 |
| 3 | feat(seo): JsonLdコンポーネント＋Organization/WebSite schema（layout） | — |
| 4 | feat(seo): BreadcrumbList schema（bread-crumbs.tsx にUIと統合） | 3 |
| 5 | feat(seo): sitemap動的化（works/news詳細を含める・news/sitemap.ts空実装の削除） | — |
| 6 | feat(seo): works/news詳細に generateStaticParams + ISR | — |
| 7 | chore(seo): /philosophy ページ削除（redirect維持）・robotsに/api/追加・307→308 | — |
| 8 | feat(top): FVにH1タグライン追加＋hero next/image(priority)化 | — |
| 9 | perf(top): InitialAnimation を初回セッションのみに | 8 |
| 10 | feat(about): 「MUSICOとは」再構成（定義文・会社概要表・AboutPage/Person schema） | 3 |
| 11 | feat(seo): FAQデータの配列化＋FAQPage schema（サービス5LP） | 3 |
| 12 | feat(aio): public/llms.txt 追加 | 10 |
| 13 | feat(pages): /office-cafe 新設（Phase 4-3設計） | 1,3 |
| 14 | feat(pages): /executive-dining 新設（Phase 4-6設計） | 1,3 |
| 15 | feat(seo): 既存5LPのtitle/description/H2/FAQ拡充（Phase 4設計） | 11 |
| 16 | feat(works): 詳細テンプレ統一（サマリー/CTA/関連サービス/Article schema） | 3 |
| 17 | content(works): 既存8事例の本文を課題→成果テンプレへリライト（microCMS） | 16 |
| 18 | feat(top): お知らせ最新3件セクション追加 | — |
| 19 | feat(insights): microCMS insights API作成＋/insights 一覧・詳細実装 | 5 |
| 20 | content(insights): 初回5記事の執筆・公開 | 19 |
| 21 | chore(seo): PSIベースライン計測と実装後の再計測記録 | — |

### 9-3. 成功指標
- GSC: 表示回数/クリック（3ヶ月で非指名クエリの表示回数を計測開始→6ヶ月で問い合わせ経路に「検索」が出現）
- リッチリザルト: FAQ・パンくずの表示（GSC拡張レポート）
- AI検索: ChatGPT/Perplexityで「MUSICO 会社」「オフィスカフェ 運営会社」を月次で目視確認
- CWV: PSIモバイルで LCP<2.5s / CLS<0.1 / INP<200ms

---

## 運用上の注意（既知の制約）
- microCMS: スキーマ追加は管理UIのみ／日本語書込はNode経由／draft→publish昇格はPOSTし直し
- デプロイ: 実装→Vercelプレビュー→石黒さん確認→本番。本番反映は都度承認
- ブランド調整: 変更内容はGoogleチャット【広報・プロモーション】で瀬本さん・Minさんに共有
