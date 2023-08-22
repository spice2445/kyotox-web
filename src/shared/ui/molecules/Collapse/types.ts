import { AccordionMultipleProps, AccordionSingleProps } from "@radix-ui/react-accordion"
import { ReactNode, RefAttributes } from "react"

type RadixCollapseProps =
  | (AccordionSingleProps & RefAttributes<HTMLDivElement>)
  | (AccordionMultipleProps & RefAttributes<HTMLDivElement>)

export type CollapseProps = RadixCollapseProps

export interface CollapseItemProps {
  header: string | ReactNode
  value: string
  children?: string | ReactNode
  triggerArrow?: ReactNode
  onClickHeader?: () => void
  isActive?: boolean
  isDefault?: boolean
}
