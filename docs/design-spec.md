# MUSICO デザイン仕様（リフレッシュ）

「温かいエディトリアル × ホスピタリティ」方向。`docs/design-references.md` のエッセンスを具体トークン化。
実装は Tailwind + next/font 前提。

---

## 1. カラートークン

| 役割 | 名前 | HEX | 用途 |
|---|---|---|---|
| 地色 | `ivory` | `#F7F3EC` | ページ背景（冷たいzincを置換） |
| 代替面 | `sand` | `#EFE8DA` | セクション交互の背景でリズム |
| 面・白 | `paper` | `#FCFAF5` | 温かい白（カード等、枠は基本なし） |
| ブランド濃色 | `darkNavy` | `#1B264F` | 既存維持。ヒーロー/CTA/見出し |
| 墨（本文） | `ink` | `#2A2620` | 本文（純黒を避け温かく） |
| 補助文字 | `muted` | `#6E675B` | キャプション・補足 |
| 罫線 | `hairline` | `#E0D8C8` | 細い区切り（枠の代わり） |
| **アクセント** | `brass` | `#B0894F` | eyebrow・罫・ホバー・CTA差し色 |
| アクセント代替 | `clay` | `#BB6A45` | テラコッタ希望ならこちら |

> アクセントは **brass（真鍮/金）を既定**。テラコッタにするなら `brass`→`clay` を全置換。

## 2. タイポグラフィ

**見出し＝洗練セリフ、本文＝クリーンサンセリフ** の対比で品を出す。

```
--font-display-ja: 'Shippori Mincho', 'Hiragino Mincho ProN', 'Yu Mincho', serif;
--font-display-en: 'Fraunces', Georgia, 'Times New Roman', serif;
--font-body-ja:    'Sawarabi Gothic', sans-serif;   （既存維持）
--font-body-en:    'Roboto', system-ui, sans-serif;  （既存維持）
```

- 追加Webフォント：**Fraunces**（欧文見出し）/ **Shippori Mincho**（和文見出し）を next/font/google で。
- ※社内ネットworkのSSL制約でローカルはGoogle Fontsが落ちることがあるが、**フォールバックの明朝/セリフ（Yu Mincho / Georgia）で見え方は確認可能**。本番（Vercel）は実フォントが載る。

**タイプスケール（流体）**

| 役割 | size |
|---|---|
| Hero display | `clamp(2.5rem, 6vw, 4.5rem)` |
| H1 | `clamp(2rem, 4vw, 3rem)` |
| H2 | `clamp(1.6rem, 3vw, 2.25rem)` |
| H3 | `1.25rem` |
| 本文 | `1rem`（行間 `1.8`） |
| eyebrow | `0.75rem` / `letter-spacing: 0.2em` / brass / 大文字 |

## 3. スペーシング

- セクション縦：`py-24 md:py-32`（現状 py-16/20 より広く＝"静けさ"）
- コンテナ：`max-w-[1100px]`、左右 `px-6 md:px-10`
- 縦リズム：要素間 `gap-8〜12`

## 4. 形・装飾

- **角丸を抑える**：画像 `rounded-none`（or 2px）、カード `rounded`(4px)、ボタンのみ `rounded-full`
- **影は使わない**（フラット）。区切りは `hairline` の細罫 or 背景の交互（ivory/sand）
- **枠線カードを減らす**：白カード反復をやめ、余白＋細罫で分節

## 5. コンポーネント原則

- **見出しブロック**：eyebrow（brass・大文字・字間）→ セリフ見出し → 36px幅の brass 細罫 → 本文
- **画像**：可能な限り全幅／大きく。箱に閉じ込めない
- **ボタン**：1次＝navy塗り/ivory字（pill）、2次＝navy輪郭。ホバーで brass
- **CTAは1画面1つ**に絞る
- **モーション**：既存 `MotionUp` を流用、duration 0.8〜1s でゆっくり

## 6. 実装ステップ

1. `globals.css` の `:root` に上記CSS変数を追加
2. `tailwind.config.ts` の `colors` に ivory/sand/paper/ink/muted/hairline/brass、`fontFamily` に displayJa/displayEn を追加
3. `layout.tsx` に Fraunces / Shippori Mincho を next/font で追加（variable）
4. 共通の見出しコンポーネント（eyebrow＋セリフ＋brass罫）を用意
5. 代表1ページから適用 → 確認 → 横展開

## 7. 注意

- ブランド濃色 `darkNavy` は維持（既存資産・ロゴと整合）。**変えるのは"地と差し色と書体"**が主。
- やり過ぎ注意：CPF系（Graza等）の遊びは入れない。狙いは「上質な静けさ」。
