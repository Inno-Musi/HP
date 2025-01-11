'use server'

export const submitContactFormJa = async (
  _prevState: any,
  formData: FormData,
) => {
  const formObject = Object.fromEntries(formData.entries())
}
