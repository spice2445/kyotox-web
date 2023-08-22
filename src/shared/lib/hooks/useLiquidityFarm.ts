import { useWeb3Context } from "./useWeb3Context"
import { useMemo } from "react"
import LiquidityFarmAbi from "../../../abi/liquidityFarm.json"
import { AbiItem } from "web3-utils"
import Contract from "web3-eth-contract"

const LIQUIDITY_FARM_ADDRESSES: { [chainId: number]: string } = {
  97: "0xc20F60c35045B7701dc4fE2d57360E233D6ADDe3",
}

export const useLiquidityFarm = (): Contract => {
  const { provider, chainId } = useWeb3Context()

  return useMemo(() => {
    return new provider.eth.Contract(
      LiquidityFarmAbi as AbiItem[],
      LIQUIDITY_FARM_ADDRESSES[chainId],
    )
  }, [chainId, provider])
}
