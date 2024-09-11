import * as stylex from "@stylexjs/stylex"
import { colors } from "../../styles/tokens/colors.stylex" // relative path because of https://github.com/facebook/stylex/issues/71
import { sizes } from "../../styles/tokens/sizes.stylex"

export const buttonStyles = stylex.create({
  common: {
    padding: `${sizes[2]} ${sizes[3]}`,
    borderRadius: sizes[2],
    border: `1px solid ${colors.border}`,
    cursor: "pointer",
    fontSize: sizes[4],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[2],
    transition: "background-color 0.2s, color 0.2s",
  },
  primary: {
    backgroundColor: {
      default: colors.background,
      ":disabled": colors.disabled,
    },
    color: {
      default: colors.foreground,
      ":hover": colors.foreground,
    },
  },
  secondary: {
    backgroundColor: {
      default: colors.secondary,
      ":disabled": colors.disabled,
    },
    color: {
      default: colors.foreground,
      ":hover": colors.foreground,
    },
  },
  withIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[1],
  },
  icon: {
    color: colors.muted,
  },
  sm: {
    padding: `${sizes[1]} ${sizes[2]}`,
    fontSize: sizes[3],
  },
  md: {
    padding: `${sizes[2]} ${sizes[2]}`,
    fontSize: sizes[4],
  },
  lg: {
    padding: `${sizes[3]} ${sizes[4]}`,
    fontSize: sizes[5],
  },
})
