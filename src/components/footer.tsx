import Image from 'next/image'
import Link from 'next/link'

type Props = {
  language: 'en' | 'ja'
}

const policies = [
  {
    label: 'プライバシーポリシー',
    labelEn: 'PRIVACY POLICY',
    href: '/privacy-policy',
  },
  {
    label: 'セキュリティーポリシー',
    labelEn: 'SECURITY POLICY',
    href: '/security-policy',
  },
]

const mainLinks = [
  {
    label: '経営理念',
    labelEn: 'PHILOSOPHY',
    href: '/philosophy',
  },
  {
    label: '会社概要',
    labelEn: 'ABOUT US',
    href: '/about',
  },
  {
    label: '事業内容',
    labelEn: 'SERVICES',
    href: '/services',
  },
  {
    label: 'お知らせ',
    labelEn: 'NEWS',
    href: '/news',
  },
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

export const Footer = ({ language }: Props) => {
  return (
    <footer className="shadow-lg">
      <div className="bg-white flex flex-col gap-y-3 items-center py-6 md:py-8 px-4 md:px-8">
        <Image
          src="/musico-logo.png"
          alt="musico logo"
          width={1008}
          height={456}
          className="w-[230px]"
        />
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {language === 'ja' ? (
            <>
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/ja${link.href}`}
                  className="flex flex-col items-center leading-none group"
                >
                  <span className="font-semibold text-lg">{link.label}</span>
                  <span className="text-xs font-roboto">{link.labelEn}</span>
                  <span className="group-hover:w-[100%] transition-all duration-300 w-0 h-[1px] bg-emerald" />
                </Link>
              ))}
            </>
          ) : (
            <>
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/en${link.href}`}
                  className="flex flex-col items-center leading-none group"
                >
                  <span className="font-semibold text-lg">{link.labelEn}</span>
                  <span className="group-hover:w-[100%] transition-all duration-300 w-0 h-[1px] bg-emerald" />
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="bg-darkNavy text-white px-4 md:px-8 py-5 lg:py-3 flex flex-col gap-y-3 lg:flex-row justify-between items-center">
        <div className="flex gap-x-5">
          {policies.map((policy) => (
            <Link
              key={policy.href}
              href={`/${language}/${policy.href}`}
              className="flex flex-col items-center leading-none"
            >
              {language === 'ja' ? (
                <>
                  <span className="font-semibold text-sm">{policy.label}</span>
                  <span className="text-xs font-roboto">{policy.labelEn}</span>
                </>
              ) : (
                <span className="font-roboto">{policy.labelEn}</span>
              )}
            </Link>
          ))}
        </div>
        <p className="text-sm font-roboto">
          Copyright &copy; MUSICO Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
