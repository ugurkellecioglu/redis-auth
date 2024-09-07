import { signIn } from "@/lib/auth"
import redis from "@/lib/redis"
import bcryptjs from "bcryptjs"
import { v4 as uuid } from "uuid"
import { LoginInput } from "./types"

class UserService {
  async signupUser(registerInput: LoginInput) {
    // check if user already exists
    const userKey = `user:${registerInput.email}`
    const userExists = await redis.exists(userKey)

    if (userExists) {
      throw new Error("User already exists")
    }

    // hash password using bcrypt
    const hashedPassword = await bcryptjs.hash(registerInput.password, 10)
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
  async login({ email, password }: LoginInput) {
    return signIn("credentials", {
      redirect: true,
      email,
      password,
    })
  }
}

export default new UserService()
