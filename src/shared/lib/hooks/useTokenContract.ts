import { useWeb3Context } from "./useWeb3Context"
import ERC20Abi from "../../../abi/erc20.json"
import { AbiItem } from "web3-utils"
import { useMemo } from "react"
import Contract from "web3-eth-contract"

export const useTokenContract = (address?: string): Contract | undefined => {
  const { provider } = useWeb3Context()

  return useMemo(() => {
    return !address ? undefined : new provider.eth.Contract(ERC20Abi as AbiItem[], address)
  }, [address, provider])
}
