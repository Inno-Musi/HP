import { BreadCrumbs } from '@/components/bread-crumbs'
import { SubtitlePolicy } from '@/components/subtitle-policy'
import { TitleMain } from '@/components/title-main'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export const generateMetadata = async ({ params }: Props) => {
  const { language } = await params

  if (language === 'ja') {
    return {
      title: 'プライバシーポリシー | 株式会社MUSICO',
      description:
        'MUSICOのプライバシーポリシーです。個人情報の取り扱いに関して、基本方針をご案内しております。',
    }
  }

  return {
    title: 'Privacy Policy | MUSICO Inc.',
    description:
      "This is MUSICO's Privacy Policy, outlining our fundamental principles regarding the handling of personal information.",
  }
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { language } = await params

  return (
    <>
      <div className="max-w-[calc(100vw-32px)] mx-auto py-16 md:py-20 flex flex-col gap-y-10 md:gap-y-12">
        <TitleMain
          titleJa="プライバシーポリシー"
          titleEn="Privacy Policy"
          language={language}
        />
        <div className="max-w-[800px] mx-auto leading-6 md:leading-7 flex flex-col gap-y-2 text-sm md:text-base px-2">
          {language === 'ja' ? (
            <>
              <p>
                株式会社MUSICO（以下「当社」といいます。）は、お客様（以下「ユーザー」といいます。）の個人情報を適切に取り扱い、保護することを社会的責務と認識しております。
              </p>
              <p>
                当社は、個人情報保護法その他関連法令・ガイドラインを遵守し、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定め、これを実行・維持するとともに、継続的な改善に努めます。本ポリシーは、当社が運営・管理するウェブサイト（以下「本サイト」といいます。）および当社のサービス全般に関して適用されます。
              </p>
            </>
          ) : (
            <>
              <p>
                MUSICO Inc. (hereinafter referred to as "the Company")
                recognizes the proper handling and protection of customers'
                (hereinafter referred to as "Users") personal information as a
                social responsibility.
              </p>
              <p>
                The Company complies with the Personal Information Protection
                Law, other related laws, and guidelines, and establishes this
                Privacy Policy (hereinafter referred to as "this Policy") as
                outlined below. We are committed to implementing, maintaining,
                and continuously improving this Policy. This Policy applies to
                the website operated and managed by the Company (hereinafter
                referred to as "this Site") as well as to all services provided
                by the Company.
              </p>
            </>
          )}
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
                : 'In this Policy, "personal information" refers to "personal information" as defined by the Personal Information Protection Law and other related laws and regulations. This includes information that identifies or can identify a specific individual, such as name, address, telephone number, email address, credit card information, bank account information, and other descriptions or numerical data.'}
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
              <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
                <p>
                  The Company collects personal information through lawful and
                  fair means in the following situations:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    When filling out inquiry forms or membership registration
                    forms on this site
                  </li>
                  <li>When applying for services or entering into contracts</li>
                  <li>
                    When participating in various campaigns or responding to
                    surveys
                  </li>
                  <li>
                    During interactions via phone, email, or other face-to-face
                    communications
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-4">
            <SubtitlePolicy
              language={language}
              subtitleJa="3. 個人情報の利用目的"
              subtitleEn="3. Purpose of Use of Personal Information"
            />
            {language === 'ja' ? (
              <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
                <p>当社は、取得した個人情報を以下の目的で利用いたします。</p>
                <ul className="list-disc pl-6">
                  <li>ユーザーからのお問い合わせ・ご相談等への対応</li>
                  <li>
                    当社が提供するサービス・製品等のご案内・提供・維持・運営
                  </li>
                  <li>ユーザー登録の管理、および契約・決済手続きの実施</li>
                  <li>新サービス・新機能の開発及び既存サービスの改善</li>
                  <li>
                    キャンペーン、アンケートの実施、プレゼント発送等の遂行
                  </li>
                  <li>
                    ユーザーの趣味・嗜好に応じた広告やコンテンツの表示・配信
                  </li>
                  <li>
                    統計データの作成・分析（個人を特定できない形でのデータの活用）
                  </li>
                  <li>個人情報保護法その他の法令で認められた範囲内での利用</li>
                  <li>上記利用目的に付随する業務の遂行</li>
                </ul>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
                <p>
                  The Company uses the collected personal information for the
                  following purposes:
                </p>
                <ul className="list-disc pl-6">
                  <li>Responding to inquiries and consultations from users</li>
                  <li>
                    Providing, maintaining, and operating services and products
                    offered by the Company
                  </li>
                  <li>
                    Managing user registrations and carrying out contract and
                    payment procedures
                  </li>
                  <li>
                    Developing new services and features and improving existing
                    services
                  </li>
                  <li>Conducting campaigns, surveys, and sending gifts</li>
                  <li>
                    Displaying and delivering advertisements and content
                    tailored to users' interests and preferences
                  </li>
                  <li>
                    Creating and analyzing statistical data (utilizing data in a
                    form that does not identify individuals)
                  </li>
                  <li>
                    Utilizing information within the scope permitted by the
                    Personal Information Protection Law and other relevant laws
                  </li>
                  <li>Performing tasks related to the above purposes</li>
                </ul>
              </div>
            )}
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
              <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
                <p>
                  The Company will not disclose or provide personal information
                  to third parties except in the following cases:
                </p>
                <ul className="list-disc pl-6">
                  <li>When the user has given their consent</li>
                  <li>
                    When outsourcing operations to subcontractors (including
                    providing the minimum necessary information to the
                    subcontractors)
                  </li>
                  <li>When disclosure is required by laws and regulations</li>
                  <li>
                    When it is necessary to protect a person's life, body, or
                    property, and it is difficult to obtain the user's consent
                  </li>
                  <li>
                    When it is particularly necessary to improve public health
                    or promote the sound growth of children, and it is difficult
                    to obtain the user's consent
                  </li>
                  <li>
                    When it is necessary to cooperate with national or local
                    governments or their designees in carrying out duties
                    prescribed by law, and obtaining the user's consent is
                    likely to hinder the execution of those duties
                  </li>
                </ul>
                <p>
                  If the third party to whom personal information is provided is
                  located in a foreign country, the Company will take
                  appropriate measures in accordance with the Personal
                  Information Protection Law and other relevant laws and
                  regulations.
                </p>
              </div>
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
              <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
                <p>
                  The Company takes appropriate technical and organizational
                  security measures, including the following, to prevent
                  leakage, loss, or damage of personal information and to ensure
                  the safe management of personal information.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Access Control: Granting and managing access permissions to
                    personal information
                  </li>
                  <li>
                    Establishing Internal Policies: Developing and implementing
                    regulations and guidelines for personal information
                    protection
                  </li>
                  <li>
                    Employee Training: Conducting regular training sessions for
                    employees and related parties
                  </li>
                  <li>
                    Physical Controls: Managing access to server rooms and
                    document storage areas, including entry/exit control and
                    locking mechanisms
                  </li>
                  <li>
                    Technical Measures: Implementing SSL/TLS communication,
                    installing firewalls and antivirus software, and conducting
                    vulnerability assessments
                  </li>
                </ul>
              </div>
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
              <p className="text-sm md:text-base leading-6 md:leading-7">
                The Company may use cookies, web beacons, and other similar
                technologies for purposes such as improving user convenience,
                traffic analysis, and delivering advertisements. Users can
                refuse to accept cookies by adjusting their browser settings;
                however, some services on this site may become unavailable as a
                result.
              </p>
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
              <p className="text-sm md:text-base leading-6 md:leading-7">
                Users may request the disclosure, correction, addition,
                deletion, suspension of use, or suspension of third-party
                provision of their personal information in accordance with the
                Personal Information Protection Law and other relevant laws. To
                make such requests, please contact the "Contact Information"
                below. We will respond appropriately and promptly in accordance
                with the applicable laws and regulations.
              </p>
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
              <p className="text-sm md:text-base leading-6 md:leading-7">
                If a minor user wishes to use the Company’s services, they must
                provide personal information only after obtaining the consent of
                a guardian. If consent from the guardian is not obtained, the
                Company may refuse to provide services.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-4">
            <SubtitlePolicy
              language={language}
              subtitleJa="9. プライバシーポリシーの改定"
              subtitleEn="9. Revision of Privacy Policy"
            />
            {language === 'ja' ? (
              <p className="text-sm md:text-base leading-6 md:leading-7">
                当社は、法令や社会情勢、サービス内容の変更等に応じて、予告なく本ポリシーを改定することがあります。重要な変更を行う場合には、改定内容と施行時期を本サイト上で周知いたします。改定後のプライバシーポリシーは、本サイト上に掲載された時点より効力を生じるものとします。
              </p>
            ) : (
              <p className="text-sm md:text-base leading-6 md:leading-7">
                The Company may revise this Policy without prior notice in
                response to changes in laws, social circumstances, or service
                content. In the case of significant changes, we will announce
                the revised content and implementation date on this site. The
                revised Privacy Policy will take effect from the time it is
                posted on this site.
              </p>
            )}
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
                <div className="flex flex-col gap-y-1">
                  <p>【株式会社MUSICO】</p>
                  <div className="pl-2">
                    <p>〒150-0042 東京都渋谷区宇田川町1-12</p>
                    <p>E-mail：info@musico.co.jp</p>
                    <p>（受付時間：平日9:00～17:00）</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
                <p>
                  For inquiries regarding this Policy or requests for
                  disclosure, correction, etc. of personal information, please
                  contact us at:
                </p>
                <div className="flex flex-col gap-y-1">
                  <p>【MUSICO Inc.】</p>
                  <div className="pl-2">
                    <p>1-12 Udagawacho, Shibuya-ku, Tokyo 150-0042</p>
                    <p>E-mail: info@musico.co.jp</p>
                    <p>(Business hours: Weekdays 9:00-17:00)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: 'プライバシーポリシー',
            labelEn: 'Privacy Policy',
            href: `/${language}/privacy-policy`,
          },
        ]}
      />
    </>
  )
}
