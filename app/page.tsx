import Button from "@/components/Button"
import Container from "@/components/Container"
import SelectDemo from "@/components/Select"
import { auth } from "@/lib/auth"
import * as stylex from "@stylexjs/stylex"
import Link from "next/link"

const groups = [
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "blueberry", label: "Blueberry" },
      { value: "grapes", label: "Grapes" },
      { value: "pineapple", label: "Pineapple" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { value: "aubergine", label: "Aubergine" },
      { value: "broccoli", label: "Broccoli" },
      { value: "carrot", label: "Carrot", disabled: true },
      { value: "courgette", label: "Courgette" },
      { value: "leek", label: "Leek" },
    ],
  },
  {
    label: "Meat",
    items: [
      { value: "beef", label: "Beef" },
      { value: "chicken", label: "Chicken" },
      { value: "lamb", label: "Lamb" },
      { value: "pork", label: "Pork" },
    ],
  },
]

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
      <p>{JSON.stringify(session, null, 2)}</p>
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
        <Button variant="primary" size="md">
          Themed Button
        </Button>
      </div>
      <SelectDemo groups={groups} placeholder="Select a food item..." />
    </Container>
  )
}
