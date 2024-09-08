import { createUser, findUserByEmail } from "@/data/userRepository"
import { signIn } from "@/lib/auth"
import { hashPassword } from "@/utils/hash"
import { LoginInput } from "./types"

export async function signupUser(registerInput: LoginInput) {
  const existingUser = await findUserByEmail(registerInput.email)

  if (existingUser) {
    throw new Error("User already exists")
  }

  const hashedPassword = await hashPassword(registerInput.password)
  return createUser(registerInput.email, hashedPassword)
}

export async function login({ email, password }: LoginInput) {
  return signIn("credentials", {
    redirect: false, // this is important because next 14 throws an error if we try to make a redirect in the server
    email,
    password,
  })
}
