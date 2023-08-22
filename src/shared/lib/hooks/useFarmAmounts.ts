import { useCallback, useMemo, useState } from "react"
import { useRouter } from "./useRouter"
import { Token } from "../../../context/web3/type"

type FarmAmountsHookResult = {
  amount0: bigint | undefined
  amount1: bigint | undefined
  changeInputAmount: (value: bigint) => void
  changeOutputAmount: (value: bigint) => void
  loading: boolean
  error: Error | undefined
}

export const useFarmAmounts = (
  token0: Token | undefined,
  token1: Token | undefined,
): FarmAmountsHookResult => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const [amount0, setAmount0] = useState<bigint>()
  const [amount1, setAmount1] = useState<bigint>()

  const fetchAmountsOut = useCallback(
    (value: bigint | undefined) => {
      if (value === undefined) {
        setAmount1(undefined)
        return
      } else if (value === BigInt(0)) {
        setAmount1(BigInt(0))
        return
      } else if (!token0 || !token1 || !router) {
        return
      }
      setLoading(true)
      router.methods
        .getAmountsOut(value, [token0.address, token1.address])
        .call()
        .then((result: string[]) => {
          setAmount1(BigInt(result[1]))
        })
        .catch((e) => {
          setError(e)
          setAmount1(undefined)
        })
        .finally(() => setLoading(false))
    },
    [router, token0, token1],
  )

  const fetchAmountsIn = useCallback(
    (value: bigint | undefined) => {
      if (value === undefined) {
        setAmount0(undefined)
        return
      } else if (value === BigInt(0)) {
        setAmount0(BigInt(0))
        return
      } else if (!token0 || !token1 || !router) {
        return
      }
      setLoading(true)
      router.methods
        .getAmountsIn(value, [token0.address, token1.address])
        .call()
        .then((result: string[]) => {
          setAmount0(BigInt(result[0]))
        })
        .catch((e) => {
          setError(e)
          setAmount0(undefined)
        })
        .finally(() => setLoading(false))
    },
    [router, token0, token1],
  )

  const changeInputAmount = useCallback(
    async (value: bigint) => {
      setAmount0(value)
      fetchAmountsOut(value)
    },
    [fetchAmountsOut],
  )

  const changeOutputAmount = useCallback(
    async (value: bigint) => {
      setAmount1(value)
      fetchAmountsIn(value)
    },
    [fetchAmountsIn],
  )

  return useMemo(
    () => ({
      amount0,
      amount1,
      changeInputAmount,
      changeOutputAmount,
      loading,
      error,
    }),
    [amount0, amount1, changeInputAmount, changeOutputAmount, loading, error],
  )
}
