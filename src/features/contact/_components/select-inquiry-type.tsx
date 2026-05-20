import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Props = {
  language: 'en' | 'ja'
  defaultValue?: string
}

const inquiryTypes = [
  {
    labelJa: '協業・提携について',
    labelEn: 'About collaboration',
  },
  {
    labelJa: '事業やサービスのご相談',
    labelEn: 'Consultation about business and services',
  },
  {
    labelJa: '新規取引のお申込',
    labelEn: 'Application for new business',
  },
  {
    labelJa: 'その他',
    labelEn: 'Other',
  },
]

export const SelectInquiryType = ({ language, defaultValue }: Props) => {
  return (
    <Select name="inquiryType" defaultValue={defaultValue}>
      <SelectTrigger className="border-gray">
        <SelectValue
          placeholder={language === 'ja' ? '選択してください' : 'Please select'}
        />
      </SelectTrigger>
      <SelectContent>
        {inquiryTypes.map((inquiryType) => (
          <SelectItem
            key={inquiryType.labelEn}
            value={inquiryType.labelJa}
            className="cursor-pointer"
          >
            {language === 'ja' ? inquiryType.labelJa : inquiryType.labelEn}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
