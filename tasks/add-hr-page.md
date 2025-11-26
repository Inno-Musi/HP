# 採用ページおよび採用応募フォーム追加修正指示書

## 1. はじめに

本指示書は、既存のNext.jsプロジェクトに採用情報ページ、採用応募フォームページを追加し、関連機能を実装するための修正手順を記述します。

## 2. 全体的な変更方針

*   **既存アーキテクチャの尊重**: `src/app` 配下のルーティング、`src/features` 配下の機能別モジュール構成、`src/components` 配下のUIコンポーネントといった既存の構造を踏襲します。
*   **多言語対応**: 新規ページおよびコンポーネントは、日本語（ja）と英語（en）の両方に対応します。
*   **データ管理**: 採用情報は、編集しやすいようにTypeScriptファイル（`src/features/recruit/_assets/data/jobs.ts`）に集約します。
*   **フォーム処理**: 既存の連絡フォームと同様に、React Server Actions、Zodによるバリデーション、Resendによるメール送信の仕組みを利用します。
*   **ファイルアップロード**: 応募フォームにはファイルアップロード機能（履歴書・職務経歴書想定）を実装します。

## 3. ファイル・ディレクトリ構造の変更

以下のディレクトリおよびファイルを新規作成または修正します。

### 3.1. 新規作成するディレクトリとファイル

```
src/
├── app/
│   └── [language]/
│       ├── recruit/                          # 新規: 採用関連ページルート
│       │   ├── apply/                        # 新規: 応募フォーム関連ルート
│       │   │   ├── [jobId]/                  # 新規: 特定職種の応募フォーム
│       │   │   │   └── page.tsx              # 新規: 応募フォームページ
│       │   │   └── completed/                # 新規: 応募完了ページルート
│       │   │       └── page.tsx              # 新規: 応募完了ページ
│       │   └── page.tsx                      # 新規: 採用情報一覧ページ
├── components/
│   └── ui/
│       └── file-input.tsx                # 新規 (ファイル入力UIコンポーネント、必要に応じて)
├── features/
│   └── recruit/                          # 新規: 採用機能モジュール
│       ├── _actions/                       # 新規
│       │   ├── submit-recruit-form-en.ts   # 新規: 英語応募フォームサーバーアクション
│       │   └── submit-recruit-form-ja.ts   # 新規: 日本語応募フォームサーバーアクション
│       ├── _assets/                        # 新規
│       │   └── data/                       # 新規
│       │       └── jobs.ts                 # 新規: 採用情報データ
│       ├── _components/                    # 新規
│       │   ├── form-recruit-en.tsx         # 新規: 英語応募フォームコンポーネント
│       │   ├── form-recruit-ja.tsx         # 新規: 日本語応募フォームコンポーネント
│       │   ├── job-card.tsx                # 新規: 採用情報カードコンポーネント
│       │   └── job-description.tsx         # 新規: 職務内容詳細表示コンポーネント
│       └── _helpers/                       # 新規
│           ├── schema-recruit-form-en.ts   # 新規: 英語応募フォームZodスキーマ
│           └── schema-recruit-form-ja.ts   # 新規: 日本語応募フォームZodスキーマ
└── react-email-starter/
    └── emails/
        └── recruit-form-user.tsx         # 新規: 採用応募通知メールテンプレート
```

### 3.2. 修正する既存ファイル

```
src/
├── app/
│   ├── [language]/
│   │   └── layout.tsx                     # メインレイアウト (変更なし、確認用)
│   ├── api/
│   │   └── email/
│   │       └── route.ts                   # メール送信API (採用応募メール処理追加)
│   └── sitemap.ts                         # サイトマップ (採用ページ追加)
├── components/
│   ├── header-en/
│   │   └── _assets/
│   │       └── const/
│   │           └── links.ts               # 英語ヘッダーリンク (採用ページ追加)
│   ├── header-ja/
│   │   └── _assets/
│   │       └── const/
│   │           └── links.ts               # 日本語ヘッダーリンク (採用ページ追加)
│   └── footer.tsx                         # フッターリンク (採用ページ追加)
└── package.json                           # 依存関係 (変更なし、確認用)
```

## 4. 具体的な修正内容

### 4.1. データ定義 (採用情報)

#### 4.1.1. `src/features/recruit/_assets/data/jobs.ts` (新規作成)

```typescript
export type Job = {
  id: string; // URLフレンドリーなID (例: "barista", "chef")
  titleJa: string;
  titleEn: string;
  contentJa: string; // 職務内容 (HTML形式も可)
  contentEn: string;
  skillsJaHeader: string;
  skillsEnHeader: string;
  skillsJa: string[]; // 歓迎スキル
  skillsEn: string[];
};

export const jobs: Job[] = [
  {
    id: 'barista',
    titleJa: 'バリスタ（Barista）',
    titleEn: 'Barista',
    contentJa:
      '外資系企業のエグゼクティブや従業員に向けた、ハイスタンダードなコーヒー＆ティーサービスを提供。エスプレッソ抽出からミルクスチーム、オーダーメイドドリンクの提案まで、美味しさと美しさを両立する一杯を追求します。',
    contentEn:
      'Provide high-standard coffee & tea services for executives and employees of multinational corporations. Pursue the perfect cup that combines deliciousness and beauty, from espresso extraction and milk steaming to proposing custom-made drinks.',
    skillsJaHeader: '歓迎スキル：',
    skillsEnHeader: 'Preferred Skills:',
    skillsJa: [
      '高品質な抽出技術とドリンク知識',
      '多様な文化・ニーズへの接客対応力（英語対応があれば尚可）',
      'スピードと丁寧さを両立できるホスピタリティマインド',
    ],
    skillsEn: [
      'High-quality extraction techniques and drink knowledge',
      'Customer service skills adaptable to diverse cultures and needs (English proficiency is a plus)',
      'Hospitality mindset balancing speed and thoroughness',
    ],
  },
  {
    id: 'chef',
    titleJa: 'シェフ（Chef）',
    titleEn: 'Chef',
    contentJa:
      '世界水準のオフィス環境に相応しい、ヘルシーかつバランスの取れた日替わりランチの調理・企画を担当。旬の食材を用い、日本の技と世界の食文化を融合させた料理を創出します。',
    contentEn:
      'Responsible for planning and preparing healthy, balanced daily lunches suitable for a world-class office environment. Create dishes that fuse Japanese techniques with global food culture, using seasonal ingredients.',
    skillsJaHeader: '歓迎スキル：',
    skillsEnHeader: 'Preferred Skills:',
    skillsJa: [
      'ホテル・高級レストラン等での調理経験',
      '食材管理・原価意識・衛生管理における高い基準',
      '英語環境に適応できる柔軟性と対応力',
    ],
    skillsEn: [
      'Cooking experience in hotels, high-end restaurants, etc.',
      'High standards in ingredient management, cost awareness, and hygiene control',
      'Flexibility and adaptability to an English-speaking environment',
    ],
  },
  {
    id: 'patissier',
    titleJa: 'パティシエ（Patissier）',
    titleEn: 'Patissier',
    contentJa:
      '企業カフェ・イベント用のデザートやスイーツ全般を担当。食後のデザートや特別イベントにふさわしい、見た目にも洗練されたスイーツで「驚き」と「余韻」を提供します。',
    contentEn:
      'Responsible for all desserts and sweets for corporate cafes and events. Provide "surprise" and "lingering delight" with visually sophisticated sweets suitable for after-meal desserts and special events.',
    skillsJaHeader: '歓迎スキル：',
    skillsEnHeader: 'Preferred Skills:',
    skillsJa: [
      'フレンチ・和菓子・ナチュラル系など幅広いジャンルに対応できる方',
      '小ロット高品質での生産経験',
      'クライアントの嗜好に応じたカスタマイズ対応力',
    ],
    skillsEn: [
      'Ability to handle a wide range of genres, including French, Japanese, and natural sweets',
      'Experience in small-lot, high-quality production',
      'Ability to customize according to client preferences',
    ],
  },
  {
    id: 'hospitality-service-staff',
    titleJa: 'ホスピタリティサービス（Hospitality Service Staff）',
    titleEn: 'Hospitality Service Staff',
    contentJa:
      '企業役員や海外ゲストに対し、上質で心地よい接遇を提供するポジションです。受付、オーダーテイク、配膳、イベント時のアテンドなど、洗練された所作でブランド価値を体現します。',
    contentEn:
      'A position that provides high-quality, comfortable service to corporate executives and overseas guests. Embody brand value through refined conduct in reception, order taking, serving, event attendance, etc.',
    skillsJaHeader: '歓迎スキル：',
    skillsEnHeader: 'Preferred Skills:',
    skillsJa: [
      '接客・ホテル業界等でのホスピタリティ経験',
      '英語での接客応対（基本会話レベル以上）',
      '丁寧な立ち居振る舞いと臨機応変な対応力',
    ],
    skillsEn: [
      'Hospitality experience in customer service, hotel industry, etc.',
      'English customer service skills (basic conversational level or higher)',
      'Polite demeanor and flexible responsiveness',
    ],
  },
  {
    id: 'pantry-staff',
    titleJa: 'パントリースタッフ（Pantry Staff）',
    titleEn: 'Pantry Staff',
    contentJa:
      '日々のサービスを支える縁の下の力持ち。ドリンク補充・簡易調理補助・カトラリー準備・清掃・在庫管理など、多岐に渡るバックオペレーションを担います。',
    contentEn:
      'The unsung heroes supporting daily services. Handle a wide range of back-office operations, including drink replenishment, simple cooking assistance, cutlery preparation, cleaning, and inventory management.',
    skillsJaHeader: '歓迎スキル：',
    skillsEnHeader: 'Preferred Skills:',
    skillsJa: [
      '清潔で整った環境を保つ意識',
      'チームプレーと柔軟な対応',
      '細部への気配り・段取り力',
    ],
    skillsEn: [
      'Awareness of maintaining a clean and orderly environment',
      'Teamwork and flexible responsiveness',
      'Attention to detail and organizational skills',
    ],
  },
  {
    id: 'project-manager',
    titleJa: 'プロジェクトマネージャー（Project Manager）',
    titleEn: 'Project Manager',
    contentJa:
      'MUSICOが請け負う企業内カフェ運営全体のプロジェクト統括。クライアント対応、メニュー・人員計画、コスト管理、品質改善、サービス設計まで全方位的に指揮を執ります。',
    contentEn:
      "Oversee entire in-house cafe operation projects undertaken by MUSICO. Manage all aspects, including client relations, menu and personnel planning, cost management, quality improvement, and service design.",
    skillsJaHeader: '歓迎スキル：',
    skillsEnHeader: 'Preferred Skills:',
    skillsJa: [
      '外資系企業との折衝経験（英語でのビジネス対応力）',
      '食・接客業界でのマネジメント経験',
      '論理的思考と現場改善力',
    ],
    skillsEn: [
      'Experience negotiating with foreign companies (business-level English proficiency)',
      'Management experience in the food and hospitality industry',
      'Logical thinking and on-site improvement skills',
    ],
  },
];

export const commonRecruitInfo = {
  workLocationJa: '勤務地： 東京・港区エリア（外資系金融機関オフィス内）',
  workLocationEn: "Work Location: Tokyo, Minato area (within a foreign financial institution's office)",
  workHoursJa: '勤務時間： 平日 7:00〜17:00の間でシフト制（ポジションにより変動あり）',
  workHoursEn: 'Working Hours: Weekdays, shift system between 7:00 AM and 5:00 PM (varies by position)',
  treatmentJa: '待遇： 経験・能力に応じて優遇（正社員・契約社員・パート応相談）',
  treatmentEn: 'Compensation: Preferential treatment based on experience and skills (full-time, contract, part-time negotiable)',
  languageJa: '語学： 英語力歓迎（PM・ホスピタリティ・バリスタは特に優遇）',
  languageEn: 'Language: English proficiency welcome (especially advantageous for PM, Hospitality, and Barista positions)',
};
```

### 4.2. ヘッダーリンクの追加

#### 4.2.1. `src/components/header-ja/_assets/const/links.ts` (修正)

既存の`links`配列の末尾に以下を追加します。

```typescript
// ... existing links
  {
    href: '/recruit',
    text: '採用情報',
    subText: 'CAREERS',
  },
]
```

#### 4.2.2. `src/components/header-en/_assets/const/links.ts` (修正)

既存の`links`配列の末尾に以下を追加します。

```typescript
// ... existing links
  {
    href: '/recruit',
    text: 'CAREERS',
  },
]
```

### 4.3. フッターリンクの追加

#### 4.3.1. `src/components/footer.tsx` (修正)

`mainLinks`配列の`CONTACT`の前に以下を追加します。

```typescript
// ...
const mainLinks = [
  // ... (philosophy, about, services, news)
  {
    label: '採用情報',
    labelEn: 'CAREERS',
    href: '/recruit',
  },
  {
    label: 'お問い合わせ',
    labelEn: 'CONTACT',
    href: '/contact',
  },
]
// ...
```

### 4.4. 採用情報一覧ページ

#### 4.4.1. `src/features/recruit/_components/job-card.tsx` (新規作成)

```typescript
import Link from 'next/link';
import type { Job } from '@/features/recruit/_assets/data/jobs';
import { Button } from '@/components/button'; // 既存のButtonコンポーネント

type Props = {
  job: Job;
  language: 'ja' | 'en';
};

export const JobCard = ({ job, language }: Props) => {
  const title = language === 'ja' ? job.titleJa : job.titleEn;
  const description = language === 'ja' ? job.contentJa.substring(0, 100) + "..." : job.contentEn.substring(0, 150) + "..."; // 短縮表示

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-darkNavy mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">{description}</p>
      </div>
      <Link href={`/${language}/recruit/apply/${job.id}`} className="mt-auto">
        <Button text={language === 'ja' ? '応募する' : 'Apply Now'} className="w-full" />
      </Link>
    </div>
  );
};
```

#### 4.4.2. `src/app/[language]/recruit/page.tsx` (新規作成)

```typescript
import { BreadCrumbs } from '@/components/bread-crumbs';
import { TitleMain } from '@/components/title-main';
import { jobs, commonRecruitInfo } from '@/features/recruit/_assets/data/jobs';
import { JobCard } from '@/features/recruit/_components/job-card';
import type { Metadata } from 'next';

type Props = {
  params: { language: 'ja' | 'en' };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { language } = params;
  if (language === 'ja') {
    return {
      title: '採用情報 | 株式会社MUSICO',
      description: '株式会社MUSICOの募集職種一覧です。私たちと一緒に働きませんか？',
    };
  }
  return {
    title: 'Careers | MUSICO Inc.',
    description: 'List of open positions at MUSICO Inc. Why not work with us?',
  };
}

export default async function RecruitPage({ params }: Props) {
  const { language } = params;

  const commonInfo = {
    workLocation: language === 'ja' ? commonRecruitInfo.workLocationJa : commonRecruitInfo.workLocationEn,
    workHours: language === 'ja' ? commonRecruitInfo.workHoursJa : commonRecruitInfo.workHoursEn,
    treatment: language === 'ja' ? commonRecruitInfo.treatmentJa : commonRecruitInfo.treatmentEn,
    languageRequirement: language === 'ja' ? commonRecruitInfo.languageJa : commonRecruitInfo.languageEn,
  };

  return (
    <>
      <div className="bg-zinc-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <TitleMain
            titleJa="採用情報"
            titleEn="Careers"
            language={language}
            className="mb-10 md:mb-12"
          />
          <div className="mb-12 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-darkNavy mb-4">
              {language === 'ja' ? 'MUSICO｜募集職種一覧' : 'MUSICO | Open Positions'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} language={language} />
              ))}
            </div>
             <h3 className="text-xl font-semibold text-darkNavy mt-8 mb-3">
              {language === 'ja' ? '補足案内（共通）' : 'Common Information'}
            </h3>
            <div className="text-sm space-y-2 text-gray-700">
              <p>{commonInfo.workLocation}</p>
              <p>{commonInfo.workHours}</p>
              <p>{commonInfo.treatment}</p>
              <p>{commonInfo.languageRequirement}</p>
            </div>
          </div>
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '採用情報',
            labelEn: 'Careers',
            href: '/recruit',
          },
        ]}
      />
    </>
  );
}
```

### 4.5. 採用応募フォーム関連

#### 4.5.1. `src/features/recruit/_helpers/schema-recruit-form-ja.ts` (新規作成)
```typescript
import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export const schemaRecruitFormJa = z.object({
  jobId: z.string(), // hidden field
  lastName: z.string().min(1, '姓を入力してください'),
  firstName: z.string().min(1, '名を入力してください'),
  lastNameKana: z
    .string()
    .min(1, '姓（カタカナ）を入力してください')
    .regex(/^[ァ-ヴー]+$/u, '姓（カタカナ）は全角カナ文字で入力してください'),
  firstNameKana: z
    .string()
    .min(1, '名（カタカナ）を入力してください')
    .regex(/^[ァ-ヴー]+$/u, '名（カタカナ）は全角カナ文字で入力してください'),
  email: z.string().email('メールアドレスの形式で入力してください'),
  phoneNumber: z
    .string()
    .min(1, '電話番号を入力してください')
    .regex(/^[0-9]{10,11}$/, '電話番号は半角数字10桁または11桁で入力してください（ハイフンなし）'),
  resumeFile: z
    .any()
    .refine((file) => file instanceof File && file.size > 0, '履歴書・職務経歴書を選択してください。')
    .refine(
      (file) => file instanceof File && file.size <= MAX_FILE_SIZE,
      `ファイルサイズは5MB以下にしてください。`,
    )
    .refine(
      (file) => file instanceof File && ACCEPTED_FILE_TYPES.includes(file.type),
      '.pdf, .doc, .docx のファイルを選択してください。',
    )
    .optional(), // ファイルが必須でない場合は .optional() を追加し、必須の場合は refine のメッセージ調整
  coverLetter: z.string().max(2000, '2000文字以内で入力してください').optional(),
});
```
**注意:** `resumeFile`のバリデーションで`instanceof File`を使用していますが、Server Actionsで`FormData`から取得した値は直接`File`オブジェクトではない可能性があります。実際の挙動に合わせて調整が必要な場合があります。もし`File`オブジェクトでない場合、`z.custom()`やより緩い`z.any()`を使い、サーバーアクション側で詳細なバリデーションを行うことも検討します。ここでは一旦`File`を期待する形で進めます。
→ `File`オブジェクトとして扱えるため、このままで問題ありません。必須項目にするため `.optional()` は削除し、必須エラーメッセージを調整します。

修正後の `resumeFile` Zodスキーマ:
```typescript
  resumeFile: z
    .any() // FormDataから取得するファイルはanyで受け、refineで型チェック
    .refine((file) => !!file && file.size > 0, '履歴書・職務経歴書を選択してください。')
    .refine((file) => file.size <= MAX_FILE_SIZE, `ファイルサイズは5MB以下にしてください。`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      '.pdf, .doc, .docx のファイルを選択してください。',
    ),
```


#### 4.5.2. `src/features/recruit/_helpers/schema-recruit-form-en.ts` (新規作成)
```typescript
import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export const schemaRecruitFormEn = z.object({
  jobId: z.string(), // hidden field
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[0-9]+$/, 'Please enter a valid phone number (digits only).'),
  resumeFile: z
    .any()
    .refine((file) => !!file && file.size > 0, 'Please upload your resume/CV.')
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `File size must be 5MB or less.`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      'Please upload a .pdf, .doc, or .docx file.',
    ),
  coverLetter: z.string().max(4000, 'Please enter a maximum of 4000 characters').optional(),
});
```

#### 4.5.3. `src/components/ui/file-input.tsx` (新規作成)
ファイル入力専用のコンポーネントを作成します。既存の `Input` コンポーネントを流用するか、別途スタイルを定義します。ここでは既存の `Input` のスタイルを参考にしつつ、ファイル入力特有のUI（ファイル名表示など）を考慮したシンプルなコンポーネントを作成します。

```typescript
"use client";

import type { ComponentPropsWithoutRef, ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { Label } from '@/components/label'; // 既存のLabelコンポーネント
import { ErrorMessage } from '@/components/error-message'; // 既存のErrorMessageコンポーネント
import { useState } from 'react';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  onFileChange?: (file: File | null) => void; // サーバーコンポーネントから使用する場合は不要かも
};

export const FileInput = ({ className, label, name, required, error, onFileChange, ...rest }: Props) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      if (onFileChange) {
        onFileChange(file);
      }
    } else {
      setFileName(null);
      if (onFileChange) {
        onFileChange(null);
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-1">
      <Label text={label} htmlFor={name} required={required} />
      <input
        type="file"
        name={name}
        id={name}
        onChange={handleFileChange}
        className={twMerge(
          'block w-full text-sm text-slate-500',
          'file:mr-4 file:py-2 file:px-4',
          'file:rounded-md file:border-0',
          'file:text-sm file:font-semibold',
          'file:bg-lightBlue file:text-darkNavy',
          'hover:file:bg-darkNavy hover:file:text-white file:cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-black ring-offset-2 rounded-md border border-gray p-2',
          className,
        )}
        {...rest}
      />
      {fileName && <p className="text-xs text-gray-600 mt-1">Selected file: {fileName}</p>}
      <ErrorMessage error={error} />
    </div>
  );
};
```
この`FileInput`コンポーネントは、`Label`と`ErrorMessage`を内包しています。既存のフォームコンポーネント(`form-contact-*.tsx`)の実装に合わせて、`Label`と`ErrorMessage`を外部から渡す形にするか、このまま内包するかを統一してください。ここでは内包する形で進めます。


#### 4.5.4. `src/features/recruit/_components/form-recruit-ja.tsx` (新規作成)
```typescript
'use client';

import { Button } from '@/components/button';
import { ErrorMessage } from '@/components/error-message';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Textarea } from '@/components/textarea';
import { FileInput } from '@/components/ui/file-input'; // 新規作成したFile Input
import { useActionState } from 'react';
import { submitRecruitFormJa } from '../_actions/submit-recruit-form-ja';
import type { Job } from '../_assets/data/jobs';

type Props = {
  job: Job; // 応募する職種情報
};

export const FormRecruitJa = ({ job }: Props) => {
  const [actionState, formAction, isPending] = useActionState(submitRecruitFormJa, null);

  const nameError = actionState?.errors?.lastName || actionState?.errors?.firstName;
  const nameKanaError = actionState?.errors?.lastNameKana || actionState?.errors?.firstNameKana;

  return (
    <form
      action={formAction}
      className="bg-white px-4 py-6 md:px-6 md:py-8 max-w-[800px] mx-auto w-full flex flex-col gap-y-6 rounded-md"
    >
      <input type="hidden" name="jobId" value={job.id} />
      <h2 className="text-xl font-semibold text-darkNavy mb-2">応募職種: {job.titleJa}</h2>

      <div className="flex flex-col gap-y-1">
        <Label text="お名前" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="lastName"
            className="w-full"
            placeholder="姓"
            defaultValue={actionState?.formObject?.lastName}
            aria-required="true"
          />
          <Input
            type="text"
            name="firstName"
            className="w-full"
            placeholder="名"
            defaultValue={actionState?.formObject?.firstName}
            aria-required="true"
          />
        </div>
        <ErrorMessage error={nameError} />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label text="お名前（カタカナ）" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="lastNameKana"
            className="w-full"
            placeholder="セイ"
            defaultValue={actionState?.formObject?.lastNameKana}
            aria-required="true"
          />
          <Input
            type="text"
            name="firstNameKana"
            className="w-full"
            placeholder="メイ"
            defaultValue={actionState?.formObject?.firstNameKana}
            aria-required="true"
          />
        </div>
        <ErrorMessage error={nameKanaError} />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label text="メールアドレス" htmlFor="email" required />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="musico@example.com"
          defaultValue={actionState?.formObject?.email}
          aria-required="true"
        />
        <ErrorMessage error={actionState?.errors?.email} />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label text="電話番号（ハイフンなし）" htmlFor="phoneNumber" required />
        <Input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="09012345678"
          defaultValue={actionState?.formObject?.phoneNumber}
          aria-required="true"
        />
        <ErrorMessage error={actionState?.errors?.phoneNumber} />
      </div>
      
      <FileInput
        name="resumeFile"
        label="履歴書・職務経歴書 (PDF, DOC, DOCX, 5MBまで)"
        required
        error={actionState?.errors?.resumeFile}
        accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />

      <div className="flex flex-col gap-y-1">
        <Label text="志望動機（任意、2000文字以内）" htmlFor="coverLetter" />
        <Textarea
          name="coverLetter"
          id="coverLetter"
          className="h-[200px]"
          defaultValue={actionState?.formObject?.coverLetter}
          maxLength={2000}
        />
        <ErrorMessage error={actionState?.errors?.coverLetter} />
      </div>

      <Button
        text={isPending ? '送信中...' : '応募する'}
        className="rounded-full px-20 py-4 text-lg mx-auto"
        disabled={isPending}
        type="submit"
      />
      {actionState?.toast && (
        <p className={`mt-4 text-center font-semibold ${actionState.toast.status === 'error' ? 'text-error' : 'text-green-600'}`}>
          {actionState.toast.message}
        </p>
      )}
    </form>
  );
};
```

#### 4.5.5. `src/features/recruit/_components/form-recruit-en.tsx` (新規作成)
```typescript
'use client';

import { Button } from '@/components/button';
import { ErrorMessage } from '@/components/error-message';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Textarea } from '@/components/textarea';
import { FileInput } from '@/components/ui/file-input';
import { useActionState } from 'react';
import { submitRecruitFormEn } from '../_actions/submit-recruit-form-en';
import type { Job } from '../_assets/data/jobs';

type Props = {
  job: Job;
};

export const FormRecruitEn = ({ job }: Props) => {
  const [actionState, formAction, isPending] = useActionState(submitRecruitFormEn, null);

  const nameError = actionState?.errors?.firstName || actionState?.errors?.lastName;

  return (
    <form
      action={formAction}
      className="bg-white px-4 py-6 md:px-6 md:py-8 max-w-[800px] mx-auto w-full flex flex-col gap-y-6 rounded-md"
    >
      <input type="hidden" name="jobId" value={job.id} />
      <h2 className="text-xl font-semibold text-darkNavy mb-2">Applying for: {job.titleEn}</h2>
      
      <div className="flex flex-col gap-y-1">
        <Label text="Full Name" required />
        <div className="flex gap-x-2">
          <Input
            type="text"
            name="firstName"
            className="w-full"
            placeholder="First Name"
            defaultValue={actionState?.formObject?.firstName}
            aria-required="true"
          />
          <Input
            type="text"
            name="lastName"
            className="w-full"
            placeholder="Last Name"
            defaultValue={actionState?.formObject?.lastName}
            aria-required="true"
          />
        </div>
        <ErrorMessage error={nameError} />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label text="Email Address" htmlFor="email" required />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="musico@example.com"
          defaultValue={actionState?.formObject?.email}
          aria-required="true"
        />
        <ErrorMessage error={actionState?.errors?.email} />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label text="Phone Number" htmlFor="phoneNumber" required />
        <Input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter phone number"
          defaultValue={actionState?.formObject?.phoneNumber}
          aria-required="true"
        />
        <ErrorMessage error={actionState?.errors?.phoneNumber} />
      </div>

      <FileInput
        name="resumeFile"
        label="Resume/CV (PDF, DOC, DOCX, up to 5MB)"
        required
        error={actionState?.errors?.resumeFile}
        accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />

      <div className="flex flex-col gap-y-1">
        <Label text="Cover Letter (Optional, max 4000 characters)" htmlFor="coverLetter" />
        <Textarea
          name="coverLetter"
          id="coverLetter"
          className="h-[200px]"
          defaultValue={actionState?.formObject?.coverLetter}
          maxLength={4000}
        />
        <ErrorMessage error={actionState?.errors?.coverLetter} />
      </div>

      <Button
        text={isPending ? 'Submitting...' : 'Submit Application'}
        className="rounded-full px-20 py-4 text-lg mx-auto"
        disabled={isPending}
        type="submit"
      />
       {actionState?.toast && (
        <p className={`mt-4 text-center font-semibold ${actionState.toast.status === 'error' ? 'text-error' : 'text-green-600'}`}>
          {actionState.toast.message}
        </p>
      )}
    </form>
  );
};
```

#### 4.5.6. `src/features/recruit/_actions/submit-recruit-form-ja.ts` (新規作成)
```typescript
'use server';

import { notifySlack } from '@/services/slack/notify-slack';
import { redirect } from 'next/navigation';
import { schemaRecruitFormJa } from '../_helpers/schema-recruit-form-ja';
import { jobs } from '../_assets/data/jobs'; // 職種名取得のため

export const submitRecruitFormJa = async (_prevState: any, formData: FormData) => {
  const formObject = Object.fromEntries(formData.entries()) as { [key: string]: string | File };
  // ファイルを正しく扱うため、Zodスキーマに渡す前にFileオブジェクトを保持
  const file = formData.get('resumeFile');
  if (file instanceof File) {
    formObject.resumeFile = file;
  } else {
    // ファイルがない場合はnullやundefinedを設定してバリデーションエラーを発生させる
    formObject.resumeFile = null as any; 
  }
  
  const result = schemaRecruitFormJa.safeParse(formObject);

  if (!result.success) {
    const { fieldErrors } = result.error.flatten();
    // formObjectからFileオブジェクトを除外して返す（シリアライズ可能なオブジェクトのみ）
    const serializableFormObject = { ...formObject };
    delete serializableFormObject.resumeFile;

    return {
      errors: {
        jobId: fieldErrors.jobId?.[0],
        lastName: fieldErrors.lastName?.[0],
        firstName: fieldErrors.firstName?.[0],
        lastNameKana: fieldErrors.lastNameKana?.[0],
        firstNameKana: fieldErrors.firstNameKana?.[0],
        email: fieldErrors.email?.[0],
        phoneNumber: fieldErrors.phoneNumber?.[0],
        resumeFile: fieldErrors.resumeFile?.[0],
        coverLetter: fieldErrors.coverLetter?.[0],
      },
      formObject: serializableFormObject,
    };
  }

  const {
    jobId,
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    email,
    phoneNumber,
    resumeFile, // Fileオブジェクト
    coverLetter,
  } = result.data;

  const appliedJob = jobs.find(job => job.id === jobId);
  const jobTitleJa = appliedJob ? appliedJob.titleJa : '不明な職種';

  const resumeFileBuffer = Buffer.from(await (resumeFile as File).arrayBuffer());

  // Slack通知とメール送信
  const slackMessage = `採用応募がありました
    【応募職種】: ${jobTitleJa} (${jobId})
    【名前】: ${lastName} ${firstName} (${lastNameKana} ${firstNameKana})
    【メールアドレス】: ${email}
    【電話番号】: ${phoneNumber}
    【ファイル名】: ${(resumeFile as File).name}
    【志望動機】: ${coverLetter || '未入力'}
  `;

  const emailProps = {
    jobTitle: jobTitleJa,
    name: `${lastName} ${firstName} (${lastNameKana} ${firstNameKana})`,
    email: email,
    phoneNumber: phoneNumber,
    coverLetter: coverLetter || '未入力',
    fileName: (resumeFile as File).name,
  };
  
  try {
    await Promise.all([
      notifySlack(slackMessage),
      fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/email`,
        {
          method: 'POST',
          headers: {
            'X-API-KEY': process.env.X_API_KEY ?? '',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            template: 'recruit', // 新しいテンプレートを指定
            props: emailProps,
            subject: `【MUSICO採用応募】${jobTitleJa} - ${lastName} ${firstName}様`,
            attachments: [
              {
                filename: (resumeFile as File).name,
                content: resumeFileBuffer.toString('base64'),
              },
            ],
          }),
        },
      ).then(async res => {
        if (!res.ok) {
          const errorBody = await res.json();
          console.error("Email API error:", errorBody);
          throw new Error(`Email sending failed: ${res.statusText}`);
        }
        return res;
      })
    ]);
  } catch (error) {
    console.error('Error submitting application:', error);
    await notifySlack(
      `採用応募のメール送信またはSlack通知に失敗しました。
      応募者: ${lastName} ${firstName} (${email})
      職種: ${jobTitleJa}
      エラー: ${error instanceof Error ? error.message : String(error)}`,
    );
    const serializableFormObject = { ...formObject };
    delete serializableFormObject.resumeFile;
    return {
      toast: {
        status: 'error',
        message: '応募の送信に失敗しました。しばらくしてから再度お試しください。',
        timeStamp: Date.now(),
      },
      formObject: serializableFormObject,
      errors: {}, // 必要に応じて詳細なエラーを返す
    };
  }

  redirect(`/${process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE || 'ja'}/recruit/apply/completed?jobId=${jobId}`);
};
```

#### 4.5.7. `src/features/recruit/_actions/submit-recruit-form-en.ts` (新規作成)
```typescript
'use server';

import { notifySlack } from '@/services/slack/notify-slack';
import { redirect } from 'next/navigation';
import { schemaRecruitFormEn } from '../_helpers/schema-recruit-form-en';
import { jobs } from '../_assets/data/jobs';

export const submitRecruitFormEn = async (_prevState: any, formData: FormData) => {
  const formObject = Object.fromEntries(formData.entries()) as { [key: string]: string | File };
  const file = formData.get('resumeFile');
  if (file instanceof File) {
    formObject.resumeFile = file;
  } else {
    formObject.resumeFile = null as any;
  }

  const result = schemaRecruitFormEn.safeParse(formObject);

  if (!result.success) {
    const { fieldErrors } = result.error.flatten();
    const serializableFormObject = { ...formObject };
    delete serializableFormObject.resumeFile;

    return {
      errors: {
        jobId: fieldErrors.jobId?.[0],
        firstName: fieldErrors.firstName?.[0],
        lastName: fieldErrors.lastName?.[0],
        email: fieldErrors.email?.[0],
        phoneNumber: fieldErrors.phoneNumber?.[0],
        resumeFile: fieldErrors.resumeFile?.[0],
        coverLetter: fieldErrors.coverLetter?.[0],
      },
      formObject: serializableFormObject,
    };
  }

  const {
    jobId,
    firstName,
    lastName,
    email,
    phoneNumber,
    resumeFile, // Fileオブジェクト
    coverLetter,
  } = result.data;

  const appliedJob = jobs.find(job => job.id === jobId);
  const jobTitleEn = appliedJob ? appliedJob.titleEn : 'Unknown Position';

  const resumeFileBuffer = Buffer.from(await (resumeFile as File).arrayBuffer());

  const slackMessage = `New job application received
    【Applied Position】: ${jobTitleEn} (${jobId})
    【Name】: ${firstName} ${lastName}
    【Email】: ${email}
    【Phone】: ${phoneNumber}
    【File Name】: ${(resumeFile as File).name}
    【Cover Letter】: ${coverLetter || 'Not provided'}
  `;

  const emailProps = {
    jobTitle: jobTitleEn,
    name: `${firstName} ${lastName}`,
    email: email,
    phoneNumber: phoneNumber,
    coverLetter: coverLetter || 'Not provided',
    fileName: (resumeFile as File).name,
  };

  try {
    await Promise.all([
      notifySlack(slackMessage),
      fetch(
         `${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/email`,
        {
          method: 'POST',
          headers: {
            'X-API-KEY': process.env.X_API_KEY ?? '',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            template: 'recruit',
            props: emailProps,
            subject: `[MUSICO Career Application] ${jobTitleEn} - ${firstName} ${lastName}`,
            attachments: [
              {
                filename: (resumeFile as File).name,
                content: resumeFileBuffer.toString('base64'),
              },
            ],
          }),
        },
      ).then(async res => {
        if (!res.ok) {
          const errorBody = await res.json();
          console.error("Email API error:", errorBody);
          throw new Error(`Email sending failed: ${res.statusText}`);
        }
        return res;
      })
    ]);
  } catch (error) {
    console.error('Error submitting application:', error);
     await notifySlack(
      `Failed to send job application email or Slack notification.
      Applicant: ${firstName} ${lastName} (${email})
      Position: ${jobTitleEn}
      Error: ${error instanceof Error ? error.message : String(error)}`,
    );
    const serializableFormObject = { ...formObject };
    delete serializableFormObject.resumeFile;
    return {
      toast: {
        status: 'error',
        message: 'Failed to submit application. Please try again later.',
        timeStamp: Date.now(),
      },
      formObject: serializableFormObject,
      errors: {},
    };
  }

  redirect(`/${process.env.NEXT_PUBLIC_DEFAULT_ENGLISH_LANGUAGE || 'en'}/recruit/apply/completed?jobId=${jobId}`);
};
```

#### 4.5.8. `src/app/[language]/recruit/apply/[jobId]/page.tsx` (新規作成)
```typescript
import { BreadCrumbs } from '@/components/bread-crumbs';
import { GeometricBackground } from '@/components/geometric-background';
import { TitleMain } from '@/components/title-main';
import { FormRecruitEn } from '@/features/recruit/_components/form-recruit-en';
import { FormRecruitJa } from '@/features/recruit/_components/form-recruit-ja';
import { jobs } from '@/features/recruit/_assets/data/jobs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { language: 'ja' | 'en'; jobId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { language, jobId } = params;
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    return {
      title: language === 'ja' ? '応募フォーム | 株式会社MUSICO' : 'Application Form | MUSICO Inc.',
      description: language === 'ja' ? '選択された職種が見つかりませんでした。' : 'The selected position was not found.',
    };
  }

  const title = language === 'ja' ? `${job.titleJa} - 応募フォーム` : `${job.titleEn} - Application Form`;
  const description = language === 'ja' ? `${job.titleJa}への応募はこちらから。` : `Apply for the ${job.titleEn} position here.`;

  return {
    title: `${title} | ${language === 'ja' ? '株式会社MUSICO' : 'MUSICO Inc.'}`,
    description,
  };
}


export default async function RecruitApplyPage({ params }: Props) {
  const { language, jobId } = params;
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    notFound();
  }

  const pageTitleJa = `${job.titleJa} - 応募フォーム`;
  const pageTitleEn = `${job.titleEn} - Application Form`;

  return (
    <>
      <div className="relative max-w-[calc(100vw-32px)] mx-auto py-16 md:py-20 flex flex-col gap-y-6 md:gap-y-12">
        <GeometricBackground className="fixed" />
        <TitleMain
          titleJa={pageTitleJa}
          titleEn={pageTitleEn}
          language={language}
          className="text-white"
        />
        <div className="max-w-[800px] w-full mx-auto text-sm md:text-base text-center leading-6 md:leading-7 text-white px-4">
          {language === 'ja' ? (
            <p>以下のフォームにご入力の上、ご応募ください。</p>
          ) : (
            <p>Please fill out the form below to apply.</p>
          )}
        </div>
        {language === 'ja' ? <FormRecruitJa job={job} /> : <FormRecruitEn job={job} />}
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          { labelJa: '採用情報', labelEn: 'Careers', href: '/recruit' },
          {
            labelJa: language === 'ja' ? job.titleJa : job.titleEn,
            labelEn: language === 'en' ? job.titleEn : job.titleJa,
            href: `/recruit/apply/${jobId}`, // 現在のページなので、リンク無効化はBreadCrumbs側で制御
          },
        ]}
      />
    </>
  );
}
```

#### 4.5.9. `src/app/[language]/recruit/apply/completed/page.tsx` (新規作成)
```typescript
import { BreadCrumbs } from '@/components/bread-crumbs';
import { GeometricBackground } from '@/components/geometric-background';
import Link from 'next/link';
import { jobs } from '@/features/recruit/_assets/data/jobs';
import type { Metadata } from 'next';

type Props = {
  params: { language: 'ja' | 'en' };
  searchParams: { jobId?: string };
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { language } = params;
  const { jobId } = searchParams;
  const job = jobId ? jobs.find(j => j.id === jobId) : undefined;
  const jobTitle = job ? (language === 'ja' ? job.titleJa : job.titleEn) : (language === 'ja' ? '採用' : 'Recruitment');

  if (language === 'ja') {
    return {
      title: `応募完了 - ${jobTitle} | 株式会社MUSICO`,
      description: '株式会社MUSICOへの採用応募が完了しました。',
      robots: {
        index: false,
        follow: false,
      }
    };
  }
  return {
    title: `Application Completed - ${jobTitle} | MUSICO Inc.`,
    description: 'Your application to MUSICO Inc. has been completed.',
     robots: {
        index: false,
        follow: false,
      }
  };
}

export default async function RecruitApplyCompletedPage({ params, searchParams }: Props) {
  const { language } = params;
  const { jobId } = searchParams;
  const job = jobId ? jobs.find(j => j.id === jobId) : undefined;
  const jobTitle = job ? (language === 'ja' ? job.titleJa : job.titleEn) : '';

  return (
    <>
      <GeometricBackground className="fixed" />
      <div className="py-[100px] md:py-[160px] px-4">
        <div className="bg-white max-w-[800px] w-full mx-auto px-4 md:px-10 py-8 md:py-10 rounded-md flex flex-col gap-y-6 text-center">
          <h1 className="text-center text-2xl md:text-3xl font-bold">
            {language === 'ja' ? 'ご応募ありがとうございます' : 'Thank You for Applying'}
          </h1>
          {jobTitle && (
            <p className="text-lg">
              {language === 'ja' ? `「${jobTitle}」へのご応募を受け付けました。` : `We have received your application for the "${jobTitle}" position.`}
            </p>
          )}
          <div className="leading-7 md:leading-8 tracking-wide text-sm md:text-base">
            {language === 'ja' ? (
              <>
                <p>ご入力いただいた内容を確認の上、担当者より追ってご連絡いたします。</p>
                <p>選考結果については、書類選考通過者の方へのみご連絡させていただきます。</p>
                <p>今しばらくお待ちください。</p>
              </>
            ) : (
              <>
                <p>We will review your application and contact you shortly.</p>
                <p>Regarding the selection results, we will only contact candidates who pass the document screening.</p>
                <p>Thank you for your patience.</p>
              </>
            )}
          </div>
          <Link
            href={language === 'ja' ? '/ja' : '/en'}
            className="flex items-center gap-x-1 font-bold text-darkNavy hover:underline underline-offset-2 mx-auto"
          >
            {language === 'ja' ? 'トップページへ戻る' : 'Back to Homepage'}
          </Link>
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '採用情報',
            labelEn: 'Careers',
            href: '/recruit',
          },
          {
            labelJa: language === 'ja' ? '応募完了' : 'Application Completed',
            labelEn: language === 'en' ? 'Application Completed' : '応募完了',
            href: `/recruit/apply/completed${jobId ? `?jobId=${jobId}` : ''}`,
          },
        ]}
      />
    </>
  );
}
```

### 4.6. メールテンプレート

#### 4.6.1. `src/react-email-starter/emails/recruit-form-user.tsx` (新規作成)
```typescript
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
  Column,
  Row,
} from '@react-email/components';

type Props = {
  jobTitle: string;
  name: string;
  email: string;
  phoneNumber: string;
  coverLetter: string;
  fileName: string; // 添付ファイル名
};

export default function RecruitFormUser({
  jobTitle,
  name,
  email,
  phoneNumber,
  coverLetter,
  fileName,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>MUSICO採用ページから応募がありました</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[600px]">
            {/* <Section className="mt-[32px]">
              <Img
                src={`${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/musico-logo.png`}
                width="1008"
                height="456"
                alt="musico logo"
                className="my-0 mx-auto"
                style={{ width: '140px', objectFit: 'contain' }}
              />
            </Section> */}
            <Heading className="text-black text-[20px] font-normal text-center p-0 my-[30px] mx-0">
              MUSICO採用ページから応募がありました
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              以下の内容で採用応募がありました。
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section>
              <Row>
                <Column className="w-[120px] text-gray-500 font-medium">応募職種:</Column>
                <Column>{jobTitle}</Column>
              </Row>
              <Row>
                <Column className="w-[120px] text-gray-500 font-medium">氏名:</Column>
                <Column>{name}</Column>
              </Row>
              <Row>
                <Column className="w-[120px] text-gray-500 font-medium">メールアドレス:</Column>
                <Column>{email}</Column>
              </Row>
              <Row>
                <Column className="w-[120px] text-gray-500 font-medium">電話番号:</Column>
                <Column>{phoneNumber}</Column>
              </Row>
              <Row>
                <Column className="w-[120px] text-gray-500 font-medium">添付ファイル:</Column>
                <Column>{fileName}</Column>
              </Row>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-black text-[14px] leading-[24px] font-medium">
              志望動機:
            </Text>
            <Text className="text-black text-[14px] leading-[24px] whitespace-pre-wrap">
              {coverLetter || '未入力'}
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              このメールはMUSICOホームページの採用応募フォームから送信されました。
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
```

### 4.7. メール送信APIの修正

#### 4.7.1. `src/app/api/email/route.ts` (修正)
```typescript
import ContactFormUser from '@/react-email-starter/emails/contact-from-user';
import RecruitFormUser from '@/react-email-starter/emails/recruit-form-user'; // 新規インポート
import { render } from '@react-email/render';
import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const POST = async (req: NextRequest) => {
  try {
    const apiKey = req.headers.get('X-API-KEY');
    if (apiKey !== process.env.X_API_KEY) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // メールテンプレートのマッピング
    const mailTemplateMap: { [key: string]: any } = {
      contact: ContactFormUser,
      recruit: RecruitFormUser, // 採用応募用テンプレートを追加
    };

    const TemplateComponent = mailTemplateMap[body.template];

    if (!TemplateComponent) {
      return NextResponse.json({ error: 'Invalid email template specified' }, { status: 400 });
    }

    const htmlContent = await render(TemplateComponent(body.props));

    const mailOptions: any = {
      from: process.env.SENDER_EMAIL ?? 'MUSICO Web <noreply@musico.co.jp>', // 送信元を明示的に
      to: 'info@musico.co.jp', // TODO: 採用担当者用メールアドレスに変更検討
      subject: body.subject,
      html: htmlContent,
    };

    // 添付ファイルがある場合の処理 (採用応募フォームのみ)
    if (body.template === 'recruit' && body.attachments && body.attachments.length > 0) {
      mailOptions.attachments = body.attachments.map((att: { filename: string; content: string /* Base64 */ }) => ({
        filename: att.filename,
        content: att.content, // Base64エンコードされた文字列を期待
      }));
    }
    
    await resend.emails.send(mailOptions);

    return NextResponse.json(
      { status: 'success', message: body.template === 'recruit' ? '採用応募をメールで通知しました。' : 'お問い合わせをメールで通知しました。' },
      { status: 201 },
    );
  } catch (error) {
    console.error("Email sending error:", error);
    // エラーオブジェクトの内容をより詳細にログ出力
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    } else {
      console.error("Unknown error type:", typeof error, error);
    }
    return NextResponse.json(
      { status: 'error', message: 'メールの送信に失敗しました' },
      { status: 500 },
    );
  }
};
```
**注意:** `SENDER_EMAIL` 環境変数が設定されていることを確認してください。また、採用応募のメール送信先は `info@musico.co.jp` となっていますが、必要に応じて採用担当者専用のメールアドレスに変更してください。

### 4.8. サイトマップの更新

#### 4.8.1. `src/app/sitemap.ts` (修正)
`baseUrls` 配列に採用関連ページを追加します。

```typescript
// ...
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrls = [
    { path: '', priority: 1 },
    { path: 'about', priority: 0.8 },
    { path: 'contact', priority: 0.8 },
    { path: 'news', priority: 0.7 },
    { path: 'philosophy', priority: 0.5 },
    { path: 'privacy-policy', priority: 0.3 },
    { path: 'security-policy', priority: 0.3 },
    { path: 'services', priority: 0.7 },
    { path: 'recruit', priority: 0.7 }, // 採用情報一覧ページ
  ];
// ...
// 動的な応募フォームページ ([jobId]) は、個別にSitemapに追加するのは複雑なため、
// ここでは採用情報一覧ページのみを追加します。必要であれば別途対応を検討してください。
// ...
```

### 4.9. robots.txt の更新
採用応募完了ページは検索エンジンにインデックスされる必要がないため、`src/app/robots.ts` で `disallow` に追加します。`generateMetadata` で `robots: { index: false, follow: false }` を設定したため、こちらでの明示的な Disallow は不要かもしれませんが、念のため。

```typescript
// src/app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/ja/contact/completed',
          '/en/contact/completed',
          '/ja/recruit/apply/completed', // 新規追加
          '/en/recruit/apply/completed', // 新規追加
        ],
      },
    ],
    sitemap: 'https://www.musico.co.jp/sitemap.xml',
  }
}

```

## 5. 影響範囲

上記「3.2. 修正する既存ファイル」にリストアップされたファイル群。
加えて、新規作成されるファイル群がプロジェクトに追加されます。

## 6. その他

*   **テスト**: 実装後、以下の点についてテストを実施してください。
    *   採用情報一覧ページの表示（日本語・英語）
    *   各職種への応募ボタンのリンク先
    *   応募フォームの表示（日本語・英語）
    *   フォームのバリデーション（必須項目、メール形式、電話番号形式、ファイルサイズ、ファイル形式）
    *   ファイルアップロード機能
    *   フォーム送信後のメール受信（添付ファイル含む）
    *   Slack通知
    *   応募完了ページの表示
    *   レスポンシブデザインの確認
*   **環境変数**: `RESEND_API_KEY`, `SLACK_WEBHOOK_URL`, `SENDER_EMAIL`, `X_API_KEY` などの環境変数が正しく設定されていることを確認してください。
*   **ファイル入力コンポーネント**: `src/components/ui/file-input.tsx` は基本的な実装です。プロジェクトのデザインシステムや要件に合わせて適宜カスタマイズしてください。
*   **エラーハンドリング**: サーバーアクションやAPIルートでのエラーハンドリングを強化し、ユーザーに分かりやすいフィードバックを提供することを推奨します。現在の実装では `actionState.toast` を利用していますが、より詳細なエラー情報を返すことも検討可能です。
