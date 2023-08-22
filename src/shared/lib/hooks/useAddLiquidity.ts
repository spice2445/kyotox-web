import { useCallback, useMemo, useState } from "react"
import { useRouter } from "./useRouter"
import { useWeb3Context } from "./useWeb3Context"

type AddLiquidityResult = {
  loading: boolean
  error: Error | undefined
  addLiquidity: () => Promise<void>
}

export const useAddLiquidity = (
  address0: string,
  address1: string,
  amount0: bigint,
  amount1: bigint,
  onSuccess?: () => void,
): AddLiquidityResult => {
  const { account, provider } = useWeb3Context()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const addLiquidity = useCallback(async () => {
    if (!router || loading || !address0 || !address0 || !amount0 || !amount1) {
      return
    }

    const gasPrice = await provider.eth.getGasPrice()
    const method = await router.methods.addLiquidity(
      address0,
      address1,
      amount0,
      amount1,
      BigInt(0),
      BigInt(0),
      account,
      Math.round(new Date().getTime() / 1000) + 300,
    )

    setLoading(true)
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
  }, [account, loading, amount0, amount1, onSuccess, provider.eth, router, address0, address1])

  return useMemo(() => ({ loading, error, addLiquidity }), [loading, error, addLiquidity])
}
