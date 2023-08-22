import { useCallback, useEffect, useMemo, useState } from "react"
import { useTokenContract } from "./useTokenContract"
import { useWeb3Context } from "./useWeb3Context"

type AllowanceResult = {
  allowance: bigint | undefined
  loading: boolean
  error: Error | undefined
  fetch: () => Promise<void>
}

export const useAllowance = (tokenAddress?: string, spenderAddress?: string): AllowanceResult => {
  const tokenContract = useTokenContract(tokenAddress)
  const [loading, setLoading] = useState(false)
  const { account } = useWeb3Context()
  const [allowance, setAllowance] = useState<bigint>()
  const [error, setError] = useState<Error>()

  const fetch = useCallback(async () => {
    if (!tokenContract || !account || !spenderAddress) {
      return
    }
    tokenContract.methods
      .allowance(account, spenderAddress)
      .call()
      .then((result) => setAllowance(BigInt(result)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [tokenContract, account, spenderAddress])

  useEffect(() => {
    fetch()
  }, [tokenAddress, spenderAddress, fetch])

  useEffect(() => {
    const interval = setInterval(fetch, 5000)
    return () => clearInterval(interval)
  }, [fetch])

  return useMemo(() => ({ allowance, loading, error, fetch }), [allowance, loading, error, fetch])
}
