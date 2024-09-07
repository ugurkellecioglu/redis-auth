import * as stylex from "@stylexjs/stylex"
import { colors, spacing } from "./globalTokens.stylex"

const buttonStyle = stylex.create({
  root: {
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: spacing.sm,
    border: "none",
    cursor: "pointer",
  },
  primary: {
    backgroundColor: colors.background,
    color: colors.foreground,
  },
  secondary: {
    backgroundColor: colors.foreground,
    color: colors.background,
  },
})

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export default function Button({ children, variant = "primary" }: IButton) {
  return (
    <button {...stylex.props(buttonStyle.root, buttonStyle[variant])}>
      {children}
    </button>
  )
}
