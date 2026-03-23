export type ContactEmailProps = {
  name: string
  affiliation: string
  email: string
  phoneNumber: string
  inquiryType: string
  inquiryDetails: string
}

export type RecruitEmailProps = {
  jobTitle: string
  name: string
  email: string
  phoneNumber: string
  coverLetter: string
  fileName: string
}

export type EmailAttachment = {
  filename: string
  content: string
}

export type EmailPayload =
  | {
      template: 'contact'
      props: ContactEmailProps
      subject: string
      attachments?: never
    }
  | {
      template: 'recruit'
      props: RecruitEmailProps
      subject: string
      attachments?: EmailAttachment[]
    }
