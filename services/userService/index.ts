"use server"
import { signIn } from "@/lib/auth"
import { hashPassword } from "@/lib/hash"
import redis from "@/lib/redis"
import { v4 as uuid } from "uuid"
import { LoginInput } from "./types"

export async function signupUser(registerInput: LoginInput) {
  // check if user already exists
  const userKey = `user:${registerInput.email}`
  const userExists = await redis.exists(userKey)

  if (userExists) {
    throw new Error("User already exists")
  }

  // hash password using bcrypt
  const hashedPassword = await hashPassword(registerInput.password)
  const id = uuid()

  const user = {
    id,
    email: registerInput.email,
  }

  await redis.set(`user:${id}`, user)

  // insert user into Redis
  await redis.hmset(userKey, {
    ...user,
    password: hashedPassword,
  })

  return user
}
export async function login({ email, password }: LoginInput) {
  return signIn("credentials", {
    redirect: false,
    email,
    password,
  })
}
