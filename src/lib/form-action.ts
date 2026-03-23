export type ToastState = {
  status: 'error' | 'success'
  message: string
  timeStamp: number
}

export type FormActionState<TField extends string> = {
  errors?: Partial<Record<TField, string>>
  formObject?: Record<string, string>
  toast?: ToastState
} | null

export const createErrorToast = (message: string): ToastState => ({
  status: 'error',
  message,
  timeStamp: Date.now(),
})

export const toSerializableFormObject = (
  formObject: Record<string, FormDataEntryValue>,
  keysToOmit: string[] = [],
) =>
  Object.fromEntries(
    Object.entries(formObject)
      .filter(([key, value]) => !keysToOmit.includes(key) && typeof value === 'string')
      .map(([key, value]) => [key, value]),
  ) as Record<string, string>
