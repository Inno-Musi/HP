import { SubtitlePolicy } from '@/components/subtitle-policy'
import { TitleMain } from '@/components/title-main'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { language } = await params

  return (
    <div className="max-w-[calc(100vw-32px)] mx-auto py-[80px] flex flex-col gap-y-10 md:gap-y-12 lg:gap-y-12">
      <TitleMain
        titleJa="プライバシーポリシー"
        titleEn="Privacy Policy"
        language={language}
      />
      <div className="max-w-[800px] mx-auto leading-6 md:leading-7 flex flex-col gap-y-2 text-sm md:text-base px-2">
        <p>
          株式会社MUSICO（以下「当社」といいます。）は、お客様（以下「ユーザー」といいます。）の個人情報を適切に取り扱い、保護することを社会的責務と認識しております。
        </p>
        <p>
          当社は、個人情報保護法その他関連法令・ガイドラインを遵守し、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定め、これを実行・維持するとともに、継続的な改善に努めます。本ポリシーは、当社が運営・管理するウェブサイト（以下「本サイト」といいます。）および当社のサービス全般に関して適用されます。
        </p>
      </div>
      <div className="bg-white max-w-[1000px] w-full mx-auto px-4 md:px-10 py-6 md:py-12 flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="1. 個人情報の定義"
            subtitleEn="1. Definition of Personal Information"
          />
          <div className="text-sm md:text-base leading-6 md:leading-7">
            {language === 'ja'
              ? '本ポリシーにおける「個人情報」とは、個人情報保護法その他の関連法令で定義される「個人情報」を指し、特定の個人を識別し、または識別し得る情報（氏名、住所、電話番号、メールアドレス、クレジットカード情報、銀行口座情報、その他の記述・数値など）を含みます。'
              : ''}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="2. 個人情報の取得方法"
            subtitleEn="2. Method of Acquisition of Personal Information"
          />
          {language === 'ja' ? (
            <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
              <p>
                当社は、以下のような場面で、適法かつ公正な手段によって個人情報を取得します。
              </p>
              <ul className="list-disc pl-6">
                <li>本サイトの問い合わせフォームや会員登録フォームの入力</li>
                <li>サービス利用申し込みや契約の締結時</li>
                <li>各種キャンペーン応募やアンケート回答時</li>
                <li>お電話やメール、その他対面でのやり取り</li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="3. 個人情報の利用目的"
            subtitleEn="3. Purpose of Use of Personal Information"
          />
          <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
            <p>当社は、取得した個人情報を以下の目的で利用いたします。</p>
            <ul className="list-disc pl-6">
              <li>ユーザーからのお問い合わせ・ご相談等への対応</li>
              <li>当社が提供するサービス・製品等のご案内・提供・維持・運営</li>
              <li>ユーザー登録の管理、および契約・決済手続きの実施</li>
              <li>新サービス・新機能の開発及び既存サービスの改善</li>
              <li>キャンペーン、アンケートの実施、プレゼント発送等の遂行</li>
              <li>ユーザーの趣味・嗜好に応じた広告やコンテンツの表示・配信</li>
              <li>
                統計データの作成・分析（個人を特定できない形でのデータの活用）
              </li>
              <li>個人情報保護法その他の法令で認められた範囲内での利用</li>
              <li>上記利用目的に付随する業務の遂行</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="4. 個人情報の第三者提供"
            subtitleEn="4. Provision of Personal Information to Third Parties"
          />
          {language === 'ja' ? (
            <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
              <p>
                当社は、以下の場合を除き、個人情報を第三者に開示または提供することはありません。
              </p>
              <ul className="list-disc pl-6">
                <li>ユーザーの同意がある場合</li>
                <li>
                  業務委託先へ業務を委託する場合（委託先への必要最小限の情報提供含む）
                </li>
                <li>法令に基づく開示要請があった場合</li>
                <li>
                  人の生命、身体または財産の保護のために必要があり、本人の同意を得ることが困難な場合
                </li>
                <li>
                  公衆衛生の向上や児童の健全育成推進のため、特に必要がある場合であって、本人の同意を得ることが困難な場合
                </li>
                <li>
                  国の機関、地方公共団体またはその委託を受けた者が法令の定める事務を遂行するために協力する場合で、本人の同意を得ることが当該事務の遂行に支障を及ぼすおそれがある場合
                </li>
              </ul>
              <p>
                なお、個人情報を提供する第三者が外国にある場合には、個人情報保護法等の法令に従い、適切な措置を講じた上で行います。
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="5. 個人情報の管理と安全対策"
            subtitleEn="5. Management and Security Measures for Personal Information"
          />
          {language === 'ja' ? (
            <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
              <p>
                当社は、取り扱う個人情報について漏えい、滅失またはき損の防止その他の個人情報の安全管理のため、以下の措置を含む適切な技術的・組織的セキュリティ対策を講じます。
              </p>
              <ul className="list-disc pl-6">
                <li>アクセス管理：個人情報へのアクセス権限の付与・管理</li>
                <li>
                  内部規程の整備：個人情報保護に関する規程・ガイドラインの策定及び運用
                </li>
                <li>従業員教育：従業員・関係者への定期的な研修の実施</li>
                <li>
                  物理的管理：サーバルームや書類保管場所への入退室管理、施錠等
                </li>
                <li>
                  技術的対策：SSL/TLS通信の実装、ファイアウォールやウイルス対策ソフトの導入、脆弱性診断等
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="6. クッキー（Cookie）および類似技術の利用"
            subtitleEn="6. Use of Cookies and Similar Technologies"
          />
          {language === 'ja' ? (
            <p className="text-sm md:text-base leading-6 md:leading-7">
              当社は、ユーザーの利便性向上やトラフィック分析、広告配信などの目的で、クッキー（Cookie）やウェブビーコン、その他類似技術を利用する場合があります。ユーザーは、ブラウザの設定によりクッキーの受け取りを拒否することができますが、本サイトのサービスの一部が利用できなくなる可能性があります。
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="7. 個人情報の開示・訂正・利用停止等の手続き"
            subtitleEn="7. Request for Disclosure, Correction, Deletion, or Suspension of Use of Personal Information"
          />
          {language === 'ja' ? (
            <p className="text-sm md:text-base leading-6 md:leading-7">
              ユーザーは、個人情報保護法その他の法令に基づき、当社に対して自己の個人情報の開示・訂正・追加・削除・利用停止・第三者提供の停止等を請求することができます。
              これらの請求を行う場合は、下記「お問い合わせ先」までご連絡ください。法令の定めに従って適切かつ迅速に対応いたします。
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="8. 未成年の個人情報"
            subtitleEn="8. Personal Information of Minors"
          />
          {language === 'ja' ? (
            <p className="text-sm md:text-base leading-6 md:leading-7">
              未成年のユーザーが当社のサービスを利用する場合には、必ず保護者の同意を得た上で個人情報を提供してください。保護者の同意がない場合、当社はサービスの提供をお断りする場合がございます。
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="9. プライバシーポリシーの改定"
            subtitleEn="9. Revision of Privacy Policy"
          />
          <p className="text-sm md:text-base leading-6 md:leading-7">
            当社は、法令や社会情勢、サービス内容の変更等に応じて、予告なく本ポリシーを改定することがあります。重要な変更を行う場合には、改定内容と施行時期を本サイト上で周知いたします。改定後のプライバシーポリシーは、本サイト上に掲載された時点より効力を生じるものとします。
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="10. お問い合わせ先"
            subtitleEn="10. Contact Us"
          />
          {language === 'ja' ? (
            <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
              <p>
                本ポリシーに関するお問い合わせや、個人情報の開示・訂正等の請求につきましては、下記までご連絡ください。
              </p>
              <div className="flex flex-col gap-y-2">
                <p>【株式会社MUSICO】</p>
                <div className="pl-2">
                  <p>〒150-0042 東京都渋谷区宇田川町1-12</p>
                  <p>E-mail：info@musico.co.jp</p>
                  <p>（受付時間：平日9:00～17:00）</p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
