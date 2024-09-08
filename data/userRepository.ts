import redis from "@/lib/redis"
import { defaultOptions } from "@auth/upstash-redis-adapter"
import { User } from "next-auth"
import { v4 as uuid } from "uuid"

export async function findUserByEmail(email: string): Promise<User | null> {
  const userKey = `${defaultOptions.userKeyPrefix}${email}`
  const userExists = await redis.exists(userKey)

  if (!userExists) {
    return null
  }

  const userRecord = await redis.hgetall(userKey)

  if (!userRecord || !userRecord.password) {
    return null
  }

  return userRecord as unknown as User
}

export async function createUser(
  email: string,
  hashedPassword: string
): Promise<User> {
  const id = uuid()
  const user = { id, email, password: hashedPassword }

  const userKey = `${defaultOptions.userKeyPrefix}${email}`
  const userIdKey = `${defaultOptions.userKeyPrefix}${id}`

  await redis.set(userIdKey, user)
  await redis.hmset(userKey, user)

  return user
}
