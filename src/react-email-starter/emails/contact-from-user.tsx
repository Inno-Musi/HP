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
} from '@react-email/components'

type Props = {
  name: string
  affiliation: string
  email: string
  phoneNumber: string
  inquiryType: string
  inquiryDetails: string
}

export default function ContactFormUser({
  name,
  affiliation,
  email,
  phoneNumber,
  inquiryType,
  inquiryDetails,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>MUSICOホームページにお問い合わせがありました</Preview>
      <Tailwind>
        <Body className="bg-paper my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            {/* <Section>
              <Img
                src={`${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_VERCEL_URL}/musico-logo.png`}
                width="1008"
                height="456"
                alt="musico logo"
                className="my-0 mx-auto"
                style={{ width: '140px', objectFit: 'contain' }}
              />
            </Section> */}
            <Heading className="text-black text-[20px] font-bold text-center p-0 my-[30px] mx-0">
              musicoホームページに
              <br />
              お問い合わせがありました
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>氏名:</strong> {name}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>所属:</strong> {affiliation}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>メールアドレス:</strong> {email}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>電話番号:</strong> {phoneNumber}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>お問い合わせ種別:</strong> {inquiryType}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>お問い合わせ内容:</strong> {inquiryDetails}
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
