import { login } from "@/actions/userActions"
import Container from "@/components/Container"
import LoginForm from "@/components/LoginForm"
export default function LoginPage() {
  return (
    <Container>
      <LoginForm login={login} />
    </Container>
  )
}
