type Props = {
  error?: string
}

export const ErrorMessage = ({ error }: Props) => {
  if (!error) return null

  return <p className="text-error font-semibold text-xs text-start">{error}</p>
}
