import { Pair } from "../../../../context/web3/tokens"
import { Token } from "../../../../context/web3/type"

export interface AmountOfTokensProps {
  pair: Pair
  onSubmit: ([amount0, amount1]: [amount0: bigint | undefined, amount1: bigint | undefined]) => void
}

export interface AmountActionProps {
  max0: bigint
  max1: bigint
  nextSlide: () => void
  amount0?: bigint
  amount1?: bigint
  token0: Token
  token1: Token
  loading: boolean
}
