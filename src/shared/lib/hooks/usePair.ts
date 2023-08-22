import { useEffect, useMemo, useState } from "react"
import { useFactory } from "./useFactory"
import Contract from "web3-eth-contract"
import { AbiItem } from "web3-utils"
import { useWeb3Context } from "./useWeb3Context"
import PairAbi from "../../../abi/pair.json"
import { ZERO_ADDRESS } from "../constants/data/utils"

const pairsAddresses = {}

export const usePair = (
  address0: string | undefined,
  address1: string | undefined,
): Contract | undefined | null => {
  const [pairAddress, setPairAddress] = useState<string>()
  const factory = useFactory()
  const { chainId, provider } = useWeb3Context()

  useEffect(() => {
    if (!address0 || !address1 || !factory) {
      return
    }
    const key =
      address0.localeCompare(address1) < 0
        ? `${chainId}-${address0}-${address1}`
        : `${chainId}-${address1}-${address0}`
    if (!pairsAddresses[key]) {
      factory.methods
        .getPair(address0, address1)
        .call()
        .then((result) => {
          pairsAddresses[key] = result.toString()
          setPairAddress(result.toString())
        })
    } else {
      setPairAddress(pairsAddresses[key])
    }
  }, [address0, factory, address1, chainId])

  return useMemo(() => {
    if (pairAddress === ZERO_ADDRESS) {
      return null
    }
    return pairAddress ? new provider.eth.Contract(PairAbi as AbiItem[], pairAddress) : undefined
  }, [pairAddress, provider])
}
