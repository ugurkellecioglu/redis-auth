import Container from "@/components/Container"
import { auth } from "@/lib/auth"
import * as stylex from "@stylexjs/stylex"
import Link from "next/link"

const styles = stylex.create({
  root: {
    padding: "20px",
  },
  link: {
    margin: "0 10px",
  },
  row: {
    display: "flex",
    gap: "10px",
  },
})

export default async function Home() {
  const session = await auth()

  return (
    <Container>
      Current session:
      {JSON.stringify(session)}
      <div>
        {session?.user && (
          <a {...stylex.props(styles.link)} href="/api/auth/signout">
            Logout
          </a>
        )}
        {!session && (
          <div {...stylex.props(styles.root)}>
            <Link {...stylex.props(styles.link)} href="/login">
              Login
            </Link>
            <Link {...stylex.props(styles.link)} href="/register">
              Register
            </Link>
          </div>
        )}
      </div>
    </Container>
  )
}
