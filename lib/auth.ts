import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import bcryptjs from "bcryptjs"
import { v4 as uuid } from "uuid"
import redis from "./redis"

import type { NextAuthConfig } from "next-auth"
import NextAuth from "next-auth"
import { encode as defaultEncode } from "next-auth/jwt"
import Credentials from "next-auth/providers/credentials"

const adapter = UpstashRedisAdapter(redis)

const authConfig: NextAuthConfig = {
  adapter,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        const user = (await redis.hmget(
          `user:${email}`,
          "email",
          "password"
        )) as {
          email: string
          password: string
        }
        if (!user) {
          return null
        }

        const isValid = await bcryptjs.compare(password, user.password)
        if (!isValid) {
          return null
        }

        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, session }) {
      if (account?.provider === "credentials") {
        token.credentials = true
      }
      return token
    },
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid()

        if (!params.token.sub) {
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
      return defaultEncode(params)
    },
  },
  secret: process.env.SECRET_KEY!,
}

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)
