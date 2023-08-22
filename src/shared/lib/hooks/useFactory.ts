import { useMemo } from "react"
import { AbiItem } from "web3-utils"
import FactoryAbi from "../../../abi/factory.json"
import { useWeb3Context } from "./useWeb3Context"
import Contract from "web3-eth-contract"

const FACTORY_ADDRESSES: { [chainId: number]: string } = {
  97: "0xd009Eb849e8E6e0512c0267C88C641D1F8D2A992",
}

export const useFactory = (): Contract | undefined => {
  const { provider, chainId } = useWeb3Context()

  return useMemo(() => {
    return new provider.eth.Contract(FactoryAbi as AbiItem[], FACTORY_ADDRESSES[chainId])
  }, [chainId, provider.eth.Contract])
}
