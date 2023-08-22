import { ReactNode } from "react"

export interface WarningMessageProps {
  children?: ReactNode | string
  handleClose?: () => void
  isClosed?: boolean
}
