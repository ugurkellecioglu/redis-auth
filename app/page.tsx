import Button from "@/components/Button"
import Container from "@/components/Container"
import { formStyle } from "@/components/Form.stylex"
import * as Form from "@radix-ui/react-form"
import * as stylex from "@stylexjs/stylex"

export default function Home() {
  return (
    <Container>
      <Form.Root {...stylex.props(formStyle.root)}>
        <Form.Field name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label {...stylex.props(formStyle.label)}>Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input {...stylex.props(formStyle.input)} type="email" required />
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
            <Form.Label {...stylex.props(formStyle.label)}>password</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter a password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              {...stylex.props(formStyle.input)}
              required
              type="password"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <Button>Login</Button>
        </Form.Submit>
      </Form.Root>
    </Container>
  )
}
