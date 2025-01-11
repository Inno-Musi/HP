import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Props = {
  language: 'en' | 'ja'
}

const inquiryTypes = [
  {
    labelJa: '採用について',
    labelEn: 'About recruitment',
  },
  {
    labelJa: 'その他',
    labelEn: 'Other',
  },
]

export const SelectInquiryType = ({ language }: Props) => {
  return (
    <Select name="inquiryType">
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
