type Props = {
  data: Record<string, unknown>
}

export const JsonLd = ({ data }: Props) => (
  <script
    type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)
