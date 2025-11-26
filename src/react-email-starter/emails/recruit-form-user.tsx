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
  Column,
  Row,
} from '@react-email/components';

type Props = {
  jobTitle: string;
  name: string;
  email: string;
  phoneNumber: string;
  coverLetter: string;
  fileName: string;
};

export default function RecruitFormUser({
  jobTitle,
  name,
  email,
  phoneNumber,
  coverLetter,
  fileName,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>MUSICO採用ページから応募がありました</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[600px]">
            <Heading className="text-black text-[20px] font-normal text-center p-0 my-[30px] mx-0">
              MUSICO採用ページから応募がありました
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              以下の内容で採用応募がありました。
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section>
              <Row>
                <Column className="w-[120px] text-gray-500 font-medium">応募職種:</Column>
                <Column>{jobTitle}</Column>
              </Row>
              <Row>
                <Column className="w-[120px] text-gray-500 font-medium">氏名:</Column>
                <Column>{name}</Column>
              </Row>
              <Row>
                <Column className="w-[120px] text-gray-500 font-medium">メールアドレス:</Column>
                <Column>{email}</Column>
              </Row>
              <Row>
                <Column className="w-[120px] text-gray-500 font-medium">電話番号:</Column>
                <Column>{phoneNumber}</Column>
              </Row>
              <Row>
                <Column className="w-[120px] text-gray-500 font-medium">添付ファイル:</Column>
                <Column>{fileName}</Column>
              </Row>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-black text-[14px] leading-[24px] font-medium">
              志望動機:
            </Text>
            <Text className="text-black text-[14px] leading-[24px] whitespace-pre-wrap">
              {coverLetter || '未入力'}
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              このメールはMUSICOホームページの採用応募フォームから送信されました。
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
} 
