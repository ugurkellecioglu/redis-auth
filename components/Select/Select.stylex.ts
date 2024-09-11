import * as stylex from "@stylexjs/stylex"
import { colors } from "../../styles/tokens/colors.stylex" // relative path because of https://github.com/facebook/stylex/issues/71
import { sizes } from "../../styles/tokens/sizes.stylex"

export const selectStyles = stylex.create({
  trigger: {
    padding: `${sizes[2]} ${sizes[3]}`,
    borderRadius: sizes[2],
    border: `1px solid ${colors.border}`,
    color: colors.text,
    backgroundColor: colors.background,
    cursor: "pointer",
    fontSize: sizes[4],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: sizes[2],
  },
  content: {
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: sizes[2],
  },
  group: {
    padding: sizes[2],
  },
  label: {
    fontSize: sizes[3],
    color: colors.muted,
  },
  item: {
    padding: sizes[1],
    cursor: "pointer",

    ":focus": {
      backgroundColor: colors.focus,
      borderColor: colors.focus,
      color: colors.focusText,
    },
  },
  separator: {
    height: 1,
    backgroundColor: colors.border,
  },
  scrollButton: {
    padding: sizes[1],
    cursor: "pointer",
  },
  icon: {
    color: colors.muted,
  },
})
