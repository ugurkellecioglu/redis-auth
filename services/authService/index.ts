import { createUser, findUserByEmail } from "@/data/userRepository"
import { signIn } from "@/lib/auth"
import { hashPassword } from "@/utils/hash"
import { Adapter } from "next-auth/adapters"
import { JWT, JWTEncodeParams } from "next-auth/jwt"
import { v4 as uuid } from "uuid"
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

// JWT Session Creation Helper
export async function createSessionToken(
  params: JWTEncodeParams<JWT>,
  adapter: Adapter
) {
  const sessionToken = uuid()
  if (!params.token?.sub) {
    throw new Error("No user ID found in token")
  }

  const createdSession = await adapter?.createSession?.({
    sessionToken: sessionToken,
    userId: params.token.sub,
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
  })

  if (!createdSession) {
    throw new Error("Failed to create session")
  }

  return sessionToken
}
