import { ReactNode } from "react"

export interface ContainerProps {
  children: ReactNode
  maxWidth?: "small" | "default"
}
