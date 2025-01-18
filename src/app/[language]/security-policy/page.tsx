import { SubtitlePolicy } from '@/components/subtitle-policy'
import { TitleMain } from '@/components/title-main'

type Props = {
  params: Promise<{ language: 'en' | 'ja' }>
}

export default async function SecurityPolicyPage({ params }: Props) {
  const { language } = await params

  return (
    <div className="max-w-[calc(100vw-32px)] mx-auto py-16 md:py-[80px] flex flex-col gap-y-10 md:gap-y-12 lg:gap-y-12">
      <TitleMain
        titleJa="セキュリティポリシー"
        titleEn="Security Policy"
        language={language}
      />
      <div className="max-w-[800px] mx-auto leading-6 md:leading-7 flex flex-col gap-y-2 text-sm md:text-base px-2">
        {language === 'ja' ? (
          <>
            <p>
              株式会社MUSICO（以下「当社」といいます。）は、当社が取り扱う情報資産（顧客情報、社員情報、システム、ネットワーク等）が、外部・内部を問わず多様な脅威にさらされるリスクがあることを認識し、その保護を経営上の最重要課題の一つとして位置づけています。
            </p>
            <p>
              当社は、以下のセキュリティポリシー（以下「本ポリシー」といいます。）を定め、情報セキュリティの確保・維持・向上に努めます。
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="bg-white max-w-[1000px] w-full mx-auto px-4 md:px-10 py-6 md:py-12 flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="1. 適用範囲"
            subtitleEn="1. Scope of Application"
          />
          {language === 'ja' ? (
            <p className="text-sm md:text-base leading-6 md:leading-7">
              本ポリシーは、当社の全役員・従業員（パート、アルバイト、派遣社員等を含む）および当社の業務委託先に適用されます。また、全ての情報資産（情報システム、ネットワーク、データ、ハードウェア、ソフトウェア等）を対象とします。
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="2. 情報セキュリティ体制の構築"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <p className="text-sm md:text-base leading-6 md:leading-7">
              当社は、情報セキュリティ責任者（CISO等）を任命し、情報セキュリティに関する統括管理を行います。定期的にリスクアセスメントを実施し、情報セキュリティに係る方針・規程・手順を策定・運用・見直しすることで、継続的なセキュリティレベルの向上を目指します。
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="3. リスクアセスメント"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <p className="text-sm md:text-base leading-6 md:leading-7">
              当社は、情報資産の価値を正しく把握した上で、想定される脅威および脆弱性を評価し、リスクアセスメントを行います。評価結果に応じて、優先度を付与し、必要なセキュリティ対策を実施・改善いたします。
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="4. アクセス制御"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
              <p>
                当社は、情報資産へのアクセス権限を適切に管理し、不正なアクセスを防止します。
              </p>
              <ul className="list-disc pl-6">
                <li>アクセス権限の付与・変更・削除等の管理プロセスの明確化</li>
                <li>
                  パスワードポリシー（定期的な変更、複雑性の要件等）の設定・運用
                </li>
                <li>退職者や異動者のアカウント管理の徹底</li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="5. 技術的セキュリティ対策"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
              <p>
                当社は、情報システムおよびネットワークを保護するために、以下の技術的対策を実施します。
              </p>
              <ul className="list-disc pl-6">
                <li>
                  ファイアウォール、侵入検知・防止システム（IDS/IPS）の導入・運用
                </li>
                <li>ウイルス対策ソフトウェアの導入・定期スキャンの実施</li>
                <li>通信の暗号化（SSL/TLS等）の利用</li>
                <li>
                  最新のセキュリティパッチの適用、および定期的な脆弱性診断の実施
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="6. 物理的・環境的セキュリティ"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
              <p>
                当社は、情報資産を保管する場所への不正アクセス・盗難・破壊を防ぐために、以下の物理的・環境的対策を講じます。
              </p>
              <ul className="list-disc pl-6">
                <li>
                  サーバルームやオフィスの入退室管理（ICカード、セキュリティゲート等）
                </li>
                <li>施錠設備、防犯カメラ等の設置</li>
                <li>
                  火災・災害発生時に備えたバックアップ体制の整備、耐火・耐震設備の確保
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="7. 人事セキュリティ・教育"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
              <p>
                当社は、情報セキュリティの維持・向上のために、以下の人事管理・教育を実施します。
              </p>
              <ul className="list-disc pl-6">
                <li>
                  雇用契約や業務委託契約において、守秘義務等の遵守事項を明文化
                </li>
                <li>
                  従業員の入社時、就業中、退職時における情報セキュリティ遵守事項の説明、管理
                </li>
                <li>定期的な情報セキュリティ研修・勉強会の実施</li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="8. 運用管理・インシデント対応"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
              <p>
                当社は、情報資産の安定運用を図るとともに、万が一セキュリティインシデント（情報漏えい、システム障害、不正アクセス等）が発生した場合には、被害を最小限に抑えるため、迅速かつ適切な対応を行います。
              </p>
              <ul className="list-disc pl-6">
                <li>インシデント発生時の報告体制・連絡体制の整備</li>
                <li>原因調査、影響範囲の特定、再発防止策の策定・実行</li>
                <li>監査・記録（ログ）の定期的な確認</li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="9. 外部委託先の管理"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <p className="text-sm md:text-base leading-6 md:leading-7">
              当社は、業務の一部を外部に委託する場合、情報セキュリティに関する契約を締結し、委託先が本ポリシーと同等の水準で情報セキュリティを確保できるように管理・監督を行います。
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="10. 継続的な改善"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <p className="text-sm md:text-base leading-6 md:leading-7">
              当社は、社会情勢や技術の進歩、法令・規制の変更等に合わせて、適宜本ポリシーを含む情報セキュリティ対策を見直し、継続的な改善に取り組みます。
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="11. 違反行為への対処"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <p className="text-sm md:text-base leading-6 md:leading-7">
              当社は、本ポリシーや関連規定に違反する行為が確認された場合、就業規則等に基づき厳正に処分を行うとともに、必要に応じて法的措置を取る場合があります。
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <SubtitlePolicy
            language={language}
            subtitleJa="12. セキュリティポリシーに関するお問い合わせ"
            subtitleEn="2. Establishment of an Information Security Framework"
          />
          {language === 'ja' ? (
            <div className="flex flex-col gap-y-4 text-sm md:text-base leading-6 md:leading-7">
              <p>本ポリシーに関するお問い合わせは、下記までご連絡ください。</p>
              <div className="flex flex-col gap-y-1">
                <p>【株式会社MUSICO】</p>
                <div className="pl-2">
                  <p>〒150-0042　東京都渋谷区宇田川町1-12</p>
                  <p>E-mail：info@musico.co.jp</p>
                  <p>（受付時間：平日9:00～17:00）</p>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
