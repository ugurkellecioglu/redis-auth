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
