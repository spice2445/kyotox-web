import { useCallback, useMemo, useState } from "react"
import { useWeb3Context } from "./useWeb3Context"
import { useRouter } from "./useRouter"
import { Token } from "../../../context/web3/type"

type SwapResult = {
  loading: boolean
  error: Error | undefined
  swap: () => Promise<void>
}

export const useSwap = (
  token0: Token,
  token1: Token,
  amount0: bigint,
  amount1: bigint,
  onSuccess?: () => void,
): SwapResult => {
  const { account, provider } = useWeb3Context()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const swap = useCallback(async () => {
    if (!router || !token0 || !token1 || !amount0 || !amount1) {
      return
    }

    const method = router.methods.swapExactTokensForTokens(
      amount0,
      amount1,
      [token0.address, token1.address],
      account,
      Math.round(new Date().getTime() / 1000) + 300,
    )

    setLoading(true)
    const gasPrice = await provider.eth.getGasPrice()
    await method
      .estimateGas({ from: account })
      .then(async (gas) => {
        await method.send({ from: account, gas, gasPrice })
        if (onSuccess) {
          onSuccess()
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [account, amount0, amount1, onSuccess, provider.eth, router, token0, token1])

  return useMemo(() => ({ loading, error, swap }), [loading, error, swap])
}
