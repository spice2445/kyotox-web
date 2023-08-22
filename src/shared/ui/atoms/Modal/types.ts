import { ReactNode } from "react"

export interface ModalProps {
  isOpened?: boolean
  handleClose?: () => void
  children?: ReactNode
  actions?: ReactNode
  actionsDirection?: "row" | "column"
  size?: "default" | "large"
}
