import { ReactNode } from "react"

export interface Trigger {
  value: string
  header: string | ReactNode
  onClickHeader?: (() => void) | undefined
}

export interface Content {
  value: string
  children: ReactNode
}

export interface TabsProps {
  triggerList: Trigger[]
  contentList: Content[]
}
