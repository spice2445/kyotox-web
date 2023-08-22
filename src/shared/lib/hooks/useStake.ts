import { useCallback, useMemo, useState } from "react"
import { useLiquidityFarm } from "./useLiquidityFarm"
import { useWeb3Context } from "./useWeb3Context"

type StakeResult = {
  loading: boolean
  error: Error | undefined
  stake: () => Promise<void>
}

export const useStake = (amount: bigint | undefined, onSuccess: () => void): StakeResult => {
  const { account, provider } = useWeb3Context()
  const liquidityFarm = useLiquidityFarm()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const stake = useCallback(async () => {
    if (!liquidityFarm || loading || !account || !amount) {
      return
    }
    const gasPrice = await provider.eth.getGasPrice()
    const method = await liquidityFarm.methods.deposit(amount)

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
  }, [account, loading, amount, liquidityFarm, onSuccess, provider.eth])

  return useMemo(() => ({ loading, error, stake }), [loading, error, stake])
}
