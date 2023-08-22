import { ReactNode } from "react"

export interface AcceptReadModalProps {
  icon?: ReactNode
  isOpened: boolean
  handleClose: () => void
  title: ReactNode
  children: ReactNode
  actions?: ReactNode
}
