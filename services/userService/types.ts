import { z } from "zod"

export interface LoginInput {
  email: string
  password: string
}

// ideally we should have a confirm password field in the register form
// but in this demo we'll keep it simple
export interface RegisterInput {
  email: string
  password: string
}

// Define Zod schema for validation
export const loginSchema = z.object({
  email: z.string().email("Please provide a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export type LoginFormSchema = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  email: z.string().email("Please provide a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export type RegisterFormSchema = z.infer<typeof registerSchema>
