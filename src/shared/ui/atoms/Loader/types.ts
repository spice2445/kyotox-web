import { HTMLAttributes } from "react"

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: "medium" | "small" | "large" | "tiny"
  theme?: "light" | "dark"
}
