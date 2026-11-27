import { z } from 'zod'

const requiredText = (label, max) =>
  z
    .string({ error: `${label} is required.` })
    .trim()
    .min(1, `${label} is required.`)
    .max(max, `${label} must be ${max} characters or fewer.`)

export const contactSchema = z.object({
  name: requiredText('Name', 100),
  email: requiredText('Email', 254).pipe(z.email('Please enter a valid email address.')),
  phone: z.string().trim().max(20, 'Phone must be 20 characters or fewer.').default(''),
  message: requiredText('Message', 2000),
})
