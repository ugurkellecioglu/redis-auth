"use server"
import userService from "@/services/userService"
import { LoginInput, RegisterInput } from "@/services/userService/types"

export const login = async (formData: FormData) => {
  const loginInput: LoginInput = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }
  if (!loginInput.email || !loginInput.password) {
    return {
      error: "Email and password are required",
    }
  }

  try {
    const res = await userService.login(loginInput)
    return {
      data: res,
    }
  } catch (error: any) {
    return {
      error: error.message,
    }
  }
}

export const register = async (formData: FormData) => {
  const registerInput: RegisterInput = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }
  if (!registerInput.email || !registerInput.password) {
    return {
      error: "Email and password are required",
    }
  }

  try {
    const res = await userService.signupUser(registerInput)
    return {
      data: res,
    }
  } catch (error: any) {
    return {
      error: error.message,
    }
  }
}
