import { useEffect, useMemo, useState } from "react"
import axios from "axios"
import { useWeb3Context } from "./useWeb3Context"

type UsdPriceResult = {
  price: number | undefined
  loading: boolean
  error: Error | undefined
}

export const useUsdPrice = (address?: string): UsdPriceResult => {
  const [price, setPrice] = useState<number>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const { chainId } = useWeb3Context()

  useEffect(() => {
    if (address) {
      axios
        .get("/api/convert", { params: { amount: 1, address, chainId } })
        .then((result) => setPrice(result?.data.data.quote.USD.price))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }
  }, [chainId, address])

  return useMemo(() => ({ price, loading, error }), [price, loading, error])
}
