import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'

type Props = {
  email: string
  username?: string
  organizationName: string
  link: string
}

export default function ContactFormUser({
  email,
  username,
  organizationName,
  link,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>
        {username ? `${username}様、` : ''}
        {organizationName}から社内日報アプリへの招待メールが届いています。
      </Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/static/vercel-logo.png`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[20px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>{organizationName}</strong> から{' '}
              <strong>社内日報アプリ</strong> へ参加
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              {username ? `${username} 様、` : `${email} 様、`}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>社内日報アプリ</strong> への招待が{' '}
              <strong>{organizationName}</strong> から届いています。
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              下記リンクから <strong>社内日報アプリ</strong>{' '}
              に参加してください。
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={link}
              >
                日報アプリを開く
              </Button>
            </Section>
            <Text className="text-black text-[13px] leading-[24px]">
              または、こちらからリンクをコピーしてブラウザで開いてください：{' '}
              <Link href={link} className="text-blue-600 no-underline">
                {link}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              本メールにお心当たりがない場合は、恐れ入りますが、このメールを破棄していただきますようお願いいたします。
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
