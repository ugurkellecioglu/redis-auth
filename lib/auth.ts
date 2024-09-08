import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import redis from "./redis"

import { findUserByEmail } from "@/data/userRepository"
import { createSessionToken } from "@/services/authService"
import { comparePassword } from "@/utils/hash"
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

        const user = await findUserByEmail(email)
        if (!user) {
          console.error("User not found")
          return null
        }

        const isValid = await comparePassword(password, user.password)
        if (!isValid) {
          console.error("Invalid password")
          return null
        }

        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true
      }
      return token
    },
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        return createSessionToken(params, adapter)
      }
      return defaultEncode(params)
    },
  },
  secret: process.env.SECRET_KEY!,
}

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)
