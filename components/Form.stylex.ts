import { sizes } from "@stylexjs/open-props/lib/sizes.stylex"
import * as stylex from "@stylexjs/stylex"
import { colors, spacing } from "./globalTokens.stylex"
export const formStyle = stylex.create({
  root: {
    borderRadius: spacing.md,
    border: `${spacing.xxxs} solid ${colors.gray5}`,
    padding: spacing.xl,
    gap: spacing.xl,
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    gap: sizes.spacing2,
  },
  label: {
    color: colors.gray8,
  },
  input: {
    padding: sizes.spacing1,
    borderRadius: spacing.xs,
    border: `${spacing.xxxs} solid ${colors.gray5}`,
  },
})
