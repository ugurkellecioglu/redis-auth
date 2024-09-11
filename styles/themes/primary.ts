import * as stylex from "@stylexjs/stylex"
import { colors } from "../tokens/colors.stylex"
const DARK = "@media (prefers-color-scheme: dark)"

export const primary = stylex.createTheme(colors, {
  primary: { default: "#3498db", [DARK]: "#2980b9" }, // Primary blue
  secondary: { default: "#2ecc71", [DARK]: "#27ae60" }, // Secondary green
  accent: { default: "#9b59b6", [DARK]: "#8e44ad" }, // Accent purple
  background: { default: "#ecf0f1", [DARK]: "#2c3e50" }, // Light background, [DARK] background
  foreground: { default: "#2c3e50", [DARK]: "#ecf0f1" }, // Light foreground, [DARK] foreground
  border: { default: "#dcdcdc", [DARK]: "#7f8c8d" }, // Border color for both themes
  error: { default: "#e74c3c", [DARK]: "#c0392b" }, // Error red
  success: { default: "#2ecc71", [DARK]: "#27ae60" }, // Success green
  warning: { default: "#f1c40f", [DARK]: "#f39c12" }, // Warning yellow
  info: { default: "#3498db", [DARK]: "#2980b9" }, // Info blue
  text: { default: "#333333", [DARK]: "#ecf0f1" }, // Regular text color
  link: { default: "#2980b9", [DARK]: "#3498db" }, // Link color
  visited: { default: "#8e44ad", [DARK]: "#9b59b6" }, // Visited link
  disabled: { default: "#95a5a6", [DARK]: "#7f8c8d" }, // Disabled color
  muted: { default: "#7f8c8d", [DARK]: "#95a5a6" }, // Muted text color
  placeholder: { default: "#bdc3c7", [DARK]: "#7f8c8d" }, // Placeholder color
  selected: { default: "#1abc9c", [DARK]: "#16a085" }, // Selected item color
  hover: { default: "#34495e", [DARK]: "#2c3e50" }, // Hover state color
  active: { default: "#2980b9", [DARK]: "#1abc9c" }, // Active state color
  focus: { default: "#e67e22", [DARK]: "#d35400" },
  focusText: { default: "#fff", [DARK]: "#fff" },
})
