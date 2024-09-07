import { register } from "@/actions/userActions"
import Container from "@/components/Container"
import RegisterForm from "@/components/RegisterForm"
export default function LoginPage() {
  return (
    <Container>
      <RegisterForm signup={register} />
    </Container>
  )
}
