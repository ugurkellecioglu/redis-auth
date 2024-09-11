import { primary } from "@/styles/themes/primary"
import * as stylex from "@stylexjs/stylex"
import React from "react"
import { buttonStyles } from "./Button.stylex"

interface ButtonProps {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  icon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  size = "md",
  onClick,
  children,
  icon,
}) => {
  const variantStyle = buttonStyles[variant] || buttonStyles.primary
  const sizeStyle = buttonStyles[size] || buttonStyles.md
  return (
    <button
      {...stylex.props(
        primary,
        buttonStyles.common,
        variantStyle,
        sizeStyle,
        icon ? buttonStyles.withIcon : null,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && (
        <span {...stylex.props(primary, buttonStyles.icon)}>{icon}</span>
      )}
      {children}
    </button>
  )
}

export default Button
