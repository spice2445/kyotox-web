import { useWeb3Context } from "./useWeb3Context"
import { useMemo } from "react"
import RouterAbi from "../../../abi/router.json"
import { AbiItem } from "web3-utils"
import Contract from "web3-eth-contract"

const ROUTER_ADDRESSES: { [chainId: number]: string } = {
  97: "0x872Fd4CC017dFbfdbb7A64dd6662c24a1DE3CBBC",
}

export const useRouter = (): Contract => {
  const { provider, chainId } = useWeb3Context()

  return useMemo(() => {
    return new provider.eth.Contract(RouterAbi as AbiItem[], ROUTER_ADDRESSES[chainId])
  }, [chainId, provider])
}
