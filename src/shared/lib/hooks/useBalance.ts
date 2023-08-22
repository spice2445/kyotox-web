import { useTokenContract } from "./useTokenContract"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useWeb3Context } from "./useWeb3Context"

type TokenBalanceResult = {
  fetchBalance: () => Promise<void>
  balance: bigint | undefined
  loading: boolean
  error: Error | undefined
}

export const useBalance = (tokenAddress?: string): TokenBalanceResult => {
  const tokenContract = useTokenContract(tokenAddress)
  const [balance, setBalance] = useState<bigint>()
  const [loading, setLoading] = useState(false)
  const { account } = useWeb3Context()
  const [error, setError] = useState<Error>()

  const fetch = useCallback(async () => {
    if (!tokenContract || !account) {
      return
    }
    setLoading(true)
    await tokenContract.methods
      .balanceOf(account)
      .call()
      .then((result) => setBalance(BigInt(result)))
      .catch((e) => setError(e))
      .finally(() => setLoading(false))
  }, [tokenContract, account])

  useEffect(() => {
    const interval = setInterval(fetch, 5000)
    return () => clearInterval(interval)
  }, [fetch])

  useEffect(() => {
    fetch()
  }, [tokenAddress, fetch])

  return useMemo(
    () => ({ fetchBalance: fetch, balance, loading, error }),
    [fetch, balance, loading, error],
  )
}
