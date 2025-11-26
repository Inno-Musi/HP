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
