import { useEffect } from "react"
import { useFarmAmounts } from "./useFarmAmounts"
import { Token } from "../../../context/web3/type"
import { useBalance } from "./useBalance"

export const useMaxTokenAvailable = (
  token0: Token,
  token1: Token,
): [bigint | undefined, bigint | undefined] => {
  const { amount0, amount1, changeInputAmount, changeOutputAmount } = useFarmAmounts(token0, token1)
  const { balance: balance0 } = useBalance(token0?.address)
  const { balance: balance1 } = useBalance(token1?.address)

  useEffect(() => {
    if (balance0 && balance1) {
      if (balance0 > balance1) {
        changeOutputAmount(balance1)
      } else if (balance0 < balance1) {
        changeInputAmount(balance0)
      }
    }
  }, [balance0, balance1, changeInputAmount, changeOutputAmount])

  return [amount0, amount1]
}
