import Link from 'next/link'

export const overviewsJa = [
  {
    label: '会社名',
    content: '株式会社MUSICO（ミュジコ）',
  },
  {
    label: '事業内容',
    content: (
      <ul className="list-disc pl-6">
        <li>コーポレートサービス支援</li>
        <li>企業内フードサービス運営</li>
        <li>経営およびITコンサルティング</li>
      </ul>
    ),
  },
  // {
  //   label: '設立',
  //   content: '2022年5月20日',
  // },
  {
    label: '資本金',
    content: '1,000万円',
  },
  {
    label: '代表取締役',
    content: '瀬本 頼一',
  },
  {
    label: 'オフィス',
    content: (
      <div>
        <p>〒150-0042</p>
        <Link
          href="https://maps.app.goo.gl/1nxgkQ6hnSwfmmJr6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-vividBlue underline"
        >
          東京都渋谷区宇田川町１番１２
        </Link>
      </div>
    ),
  },
  {
    label: '主要取引銀行',
    content: (
      <ul className="list-disc pl-6">
        <li>商工中金</li>
        <li>みずほ銀行</li>
        <li>昭和信用金庫</li>
        <li>日本政策金融公庫</li>
      </ul>
    ),
  },
]

export const overviewsEn = [
  {
    label: 'Company Name',
    content: 'MUSICO Inc.',
  },
  {
    label: 'Business Activities',
    content: (
      <ul className="list-disc pl-6">
        <li>Corporate service support</li>
        <li>In-house food service management</li>
        <li>Management and IT consulting</li>
      </ul>
    ),
  },
  // {
  //   label: 'Established',
  //   content: 'May 20, 2022',
  // },
  {
    label: 'Capital',
    content: '10 million yen',
  },
  {
    label: 'Representative Director',
    content: 'Yorikazu Semoto',
  },
  {
    label: 'Office',
    content: (
      <div>
        <p>150-0042</p>
        <Link
          href="https://maps.app.goo.gl/1nxgkQ6hnSwfmmJr6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-vividBlue underline"
        >
          1-12 Udagawacho, Shibuya-ku, Tokyo
        </Link>
      </div>
    ),
  },
  {
    label: 'Main Banks',
    content: (
      <ul className="list-disc pl-6">
        <li>The Shoko Chukin Bank, Ltd.</li>
        <li>Mizuho Bank</li>
        <li>Showa Shinkin Bank</li>
        <li>Japan Finance Corporation</li>
      </ul>
    ),
  },
]
