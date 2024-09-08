"use server"
import * as userService from "@/services/authService"
import {
  LoginFormSchema,
  loginSchema,
  RegisterFormSchema,
  registerSchema,
} from "@/services/authService/types"

export const login = async (formData: LoginFormSchema) => {
  try {
    loginSchema.parse(formData)

    const res = await userService.login(formData)
    return {
      data: res,
    }
  } catch (error: any) {
    return {
      error: error.message,
    }
  }
}

export const register = async (formData: RegisterFormSchema) => {
  try {
    registerSchema.parse(formData)

    const res = await userService.signupUser(formData)
    return {
      data: res,
    }
  } catch (error: any) {
    return {
      error: error.message,
    }
  }
}
