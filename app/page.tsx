import Container from "@/components/Container"
import { auth } from "@/lib/auth"

export default async function Home() {
  const session = await auth()

  return (
    <Container>
      Current session:
      {JSON.stringify(session)}
    </Container>
  )
}
