import Link from 'next/link'

export const overviewsJa = [
  {
    label: '会社名',
    content: '株式会社MUSICO',
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
  {
    label: '設立',
    content: '2022年5月20日',
  },
  {
    label: '資本金',
    content: '1000万円',
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
          東京都渋谷区宇田川町１番１２ パークコート渋谷ザタワー ３０７号
        </Link>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5173698274175!2d139.6951900754988!3d35.66426083090642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d49ffd6fa81%3A0xbbd741e835f7f07b!2z44OR44O844Kv44Kz44O844OI5riL6LC3IOOCtiDjgr_jg6_jg7w!5e0!3m2!1sja!2sjp!4v1737171291017!5m2!1sja!2sjp"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps location of MUSICO office"
          className="w-full aspect-video mt-3"
        />
      </div>
    ),
  },
  {
    label: '主要取引銀行',
    content: (
      <ul className="list-disc pl-6">
        <li>みずほ銀行</li>
        <li>昭和信用金庫</li>
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
  {
    label: 'Established',
    content: 'May 20, 2022',
  },
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
          1-12 Udagawacho, Shibuya-ku, Tokyo, Park Court Shibuya The Tower, Room
          307
        </Link>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5173698274175!2d139.6951900754988!3d35.66426083090642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d49ffd6fa81%3A0xbbd741e835f7f07b!2z44OR44O844Kv44Kz44O844OI5riL6LC3IOOCtiDjgr_jg6_jg7w!5e0!3m2!1sja!2sjp!4v1737171291017!5m2!1sja!2sjp"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps location of MUSICO office"
          className="w-full aspect-video mt-3"
        />
      </div>
    ),
  },
  {
    label: 'Main Banks',
    content: (
      <ul className="list-disc pl-6">
        <li>Mizuho Bank</li>
        <li>Showa Shinkin Bank</li>
      </ul>
    ),
  },
]
