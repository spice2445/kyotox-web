import { useTokenContract } from "./useTokenContract"
import { useCallback, useMemo, useState } from "react"
import { useWeb3Context } from "./useWeb3Context"

type TokenApprovalResult = {
  loading: boolean
  error: Error | undefined
  approve: () => Promise<void>
}

export const useApprove = (
  tokenAddress: string,
  spenderAddress: string,
  amount: bigint,
  onSuccess?: () => void,
): TokenApprovalResult => {
  const tokenContract = useTokenContract(tokenAddress)
  const { account, provider } = useWeb3Context()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const approve = useCallback(async () => {
    if (!account || !tokenContract || loading) {
      return
    }
    setError(undefined)
    setLoading(true)
    const gasPrice = await provider.eth.getGasPrice()
    const method = tokenContract.methods.approve(spenderAddress, amount)
    await method
      .estimateGas({ from: account })
      .then(async (gas) => method.send({ from: account, gas, gasPrice }))
      .then(() => onSuccess && onSuccess())
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [account, tokenContract, loading, amount, spenderAddress, onSuccess, provider])

  return useMemo(() => ({ loading, error, approve }), [approve, error, loading])
}
