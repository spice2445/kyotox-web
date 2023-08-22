import { useCallback, useMemo, useState } from "react"
import { useRouter } from "./useRouter"
import { Token } from "../../../context/web3/type"
import Contract from "web3-eth-contract"

type SwapAmountsHookResult = {
  amount0: bigint | undefined
  amount1: bigint | undefined
  changeInputAmount: (value: bigint) => void
  changeOutputAmount: (value: bigint) => void
  changePair: (pairContract: Contract | undefined | null) => void
  revert: () => void
  reset: () => void
  loading: boolean
  error: Error | undefined
}

export const useSwapAmounts = (
  token0: Token | undefined,
  token1: Token | undefined,
): SwapAmountsHookResult => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const [amount0, setAmount0] = useState<bigint>()
  const [amount1, setAmount1] = useState<bigint>()

  const [fee, setFee] = useState<bigint>()

  const fetchAmountsOut = useCallback(
    (value: bigint | undefined) => {
      if (value === undefined) {
        setAmount1(undefined)
        return
      } else if (value === BigInt(0)) {
        setAmount1(BigInt(0))
        return
      } else if (!token0 || !token1 || !router || !fee) {
        return
      }
      setLoading(true)
      router.methods
        .getAmountsOut((value * (BigInt(10000) - fee)) / BigInt(10000), [
          token0.address,
          token1.address,
        ])
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
    [fee, router, token0, token1],
  )

  const fetchAmountsIn = useCallback(
    (value: bigint | undefined) => {
      if (value === undefined) {
        setAmount0(undefined)
        return
      } else if (value === BigInt(0)) {
        setAmount0(BigInt(0))
        return
      } else if (!token0 || !token1 || !router || !fee) {
        return
      }
      setLoading(true)
      router.methods
        .getAmountsIn(value, [token0.address, token1.address])
        .call()
        .then((result: string[]) => {
          setAmount0((BigInt(result[0]) / (BigInt(10000) - fee)) * BigInt(10000))
        })
        .catch((e) => {
          setError(e)
          setAmount0(undefined)
        })
        .finally(() => setLoading(false))
    },
    [fee, router, token0, token1],
  )

  const [lastFieldChanged, setLastFieldChanged] = useState<"0" | "1" | undefined>()

  const changePair = useCallback(
    (pair: Contract | undefined | null) => {
      if (!pair) {
        if (lastFieldChanged === "0") {
          setAmount1(undefined)
        } else if (lastFieldChanged === "1") {
          setAmount0(undefined)
        }
        return
      }
      pair.methods
        .fee()
        .call()
        .then((result: string) => {
          setFee(BigInt(result))
          if (lastFieldChanged === "0") {
            fetchAmountsOut(amount0)
          } else if (lastFieldChanged === "1") {
            fetchAmountsIn(amount1)
          }
        })
        .catch((e) => setError(e))
    },
    [amount0, amount1, fetchAmountsIn, fetchAmountsOut, lastFieldChanged],
  )

  const changeInputAmount = useCallback(
    async (value: bigint) => {
      setAmount0(value)
      setLastFieldChanged("0")
      fetchAmountsOut(value)
    },
    [fetchAmountsOut],
  )

  const changeOutputAmount = useCallback(
    async (value: bigint) => {
      setAmount1(value)
      setLastFieldChanged("1")
      fetchAmountsIn(value)
    },
    [fetchAmountsIn],
  )

  const revert = useCallback(() => {
    setAmount0(amount1)
    setAmount1(amount0)
  }, [amount0, amount1])

  const reset = useCallback(() => {
    setAmount0(undefined)
    setAmount1(undefined)
  }, [])

  return useMemo(
    () => ({
      amount0,
      amount1,
      changeInputAmount,
      changeOutputAmount,
      loading,
      revert,
      reset,
      error,
      changePair,
    }),
    [
      amount0,
      amount1,
      changeInputAmount,
      changeOutputAmount,
      loading,
      reset,
      revert,
      error,
      changePair,
    ],
  )
}
