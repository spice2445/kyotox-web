import { Token } from "../../../../context/web3/type"

export interface ModalSelectTokenProps {
  isOpened: boolean
  onClose: () => void
  onSelect: (address: string) => void
  tokens: Token[]
}
