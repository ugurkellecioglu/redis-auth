"use client"
import Button from "@/components/Button"
import { formStyle } from "@/components/Form.stylex"
import { LoginFormSchema, loginSchema } from "@/services/userService/types"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Form from "@radix-ui/react-form"
import stylex from "@stylexjs/stylex"
import Link from "next/link"
import { useForm } from "react-hook-form"

export default function LoginForm({
  login,
}: {
  login: (formData: LoginFormSchema) => Promise<
    | {
        data: unknown
        error?: undefined
      }
    | {
        error: unknown
        data?: undefined
      }
  >
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormSchema) => {
    const res = await login(data)
    if (!res.error) {
      return (window.location.href = "/")
    }
  }

  return (
    <Form.Root
      onSubmit={handleSubmit(onSubmit)}
      {...stylex.props(formStyle.root)}
    >
      <Form.Field name="email">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label {...stylex.props(formStyle.label)}>Email</Form.Label>
          {errors.email && (
            <Form.Message className="FormMessage">
              {errors.email.message}
            </Form.Message>
          )}
        </div>
        <Form.Control asChild>
          <input {...stylex.props(formStyle.input)} {...register("email")} />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="password">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label {...stylex.props(formStyle.label)}>Password</Form.Label>
          {errors.password && (
            <Form.Message className="FormMessage">
              {errors.password.message}
            </Form.Message>
          )}
        </div>
        <Form.Control asChild>
          <input
            {...stylex.props(formStyle.input)}
            {...register("password")}
            type="password"
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <Button>Login</Button>
      </Form.Submit>
      if you don{"'"}t have an account, <Link href="/register">register</Link>
    </Form.Root>
  )
}
