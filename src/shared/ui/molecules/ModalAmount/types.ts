import { Pair } from "../../../../context/web3/tokens"

export interface ModalAmountProps {
  isOpened: boolean
  handleClose: () => void
  onSubmit: () => void
  tokens: Pair[]
}
