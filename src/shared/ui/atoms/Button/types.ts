import { ReactNode } from "react"

export interface ButtonProps {
  children?: ReactNode
  disabled?: boolean
  isLoading?: boolean
  type?: "submit" | "button"
  radius?: "none" | "medium" | "large"
  theme?: "black" | "red" | "outlined" | "overLightEmerald" | "lightEmerald"
  size?: "small" | "medium" | "large" | "little" | "biggest" | "average" | "largest" | "smallMedium"
  stretch?: boolean
  onClick?: () => void
  leftPosition?: boolean
  isLetterSpacing?: boolean
  uppercase?: boolean
}
