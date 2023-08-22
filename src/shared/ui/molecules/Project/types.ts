import { Project } from "../../../lib/types"

export type ProjectProps = Project & {
  hideDetails?: boolean
  onParticipate?: (id: number) => void
  isCompleted?: boolean
  onClaim?: () => void
}
