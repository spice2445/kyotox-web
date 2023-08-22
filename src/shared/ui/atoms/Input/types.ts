import { HTMLAttributes, ReactNode } from "react"

export interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  children?: ReactNode
  value?: string
  onChange?: (value: string) => void
  name?: string
  type?: "text" | "password" | "email"
  disabled?: boolean
  size?: "medium" | "small"
  radius?: "small" | "medium"
  theme?: "light" | "dark"
  stretch?: boolean
}
