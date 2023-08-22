import { Token } from "../../../../context/web3/type"

export type SwapButtonProp = {
  token0: Token
  token1: Token
  amount0: bigint
  amount1: bigint
  onSuccess?: () => void
}
