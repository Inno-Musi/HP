import Link from 'next/link'

type Props = {
  language: 'en' | 'ja'
  /** 濃色カード（bg-darkNavy）の上に置く場合は true。明色背景なら false */
  onDark?: boolean
}

/**
 * 中間CV導線。「まだ問い合わせる段階ではない」層の受け皿として
 * 会社紹介資料のダウンロード（/materials）へ送る。
 *
 * 2026-07-28 の実測時点で /materials への内部リンクは /contact の1ページのみで、
 * GA4では 429セッション中 /contact 到達が19人・完了0人。
 * 「/contact に来ない層」を拾う設計だったのに /contact からしか到達できず、
 * 母数が構造的に頭打ちになっていたため、フッターと各LP・insights記事の
 * CTA直下へ展開した。
 */
export const LinkMaterialDownload = ({ language, onDark = true }: Props) => {
  const linkClassName =
    'underline underline-offset-2 hover:opacity-80 duration-300'

  return (
    <p
      className={`text-xs md:text-sm ${
        onDark ? 'text-white/70' : 'text-darkNavy/70'
      }`}
    >
      {language === 'ja' ? (
        <>
          まだ情報収集の段階という方は{' '}
          <Link href={`/${language}/materials`} className={linkClassName}>
            会社紹介資料のダウンロード
          </Link>{' '}
          もご利用ください。
        </>
      ) : (
        <>
          Just gathering information? You can also{' '}
          <Link href={`/${language}/materials`} className={linkClassName}>
            download our company profile
          </Link>
          .
        </>
      )}
    </p>
  )
}
