import Contract from "web3-eth-contract"
import { Pair } from "../../../../context/web3/tokens"

export interface ApproveAllProps {
  nextStep: (value: number) => void
  pair: Pair
  pairContract: Contract
  amounts: bigint[]
}

export interface ApproveButtonProps {
  loading: boolean
  address: string
  spender: string
  amount: bigint
  done: boolean
  onSuccess: () => void
  stepNumber: number
}
