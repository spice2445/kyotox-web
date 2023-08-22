import { TokenList } from "./type"
import { Chain } from "../../shared/lib/constants/data/enums"

export const tokenList: TokenList = {
  [Chain.BSC_TESTNET]: [
    "0xCdf02841942B47674c0B1b18FB2A135280f15E72",
    "0x30C40EDB18F8f60166e4fa9abEE41ca2879Bc7b5",
    "0x6A2886efAB5648CdcfAa16eA94372b39ace373ca",
  ],
  [Chain.BSC_MAINNET]: [
    "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    "0x153C0c947177e631e3DFc594ba28750d3a921FB5",
    "0xC3e1796ecaD8f738E8f86D967f551791F9fe165B",
    "0x55d398326f99059fF775485246999027B3197955",
    "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  ],
}

export interface Pair {
  address0: string
  address1: string
}

export const pairsList: { [chainId: number]: Pair[] } = {
  [Chain.BSC_TESTNET]: [
    {
      address0: "0xCdf02841942B47674c0B1b18FB2A135280f15E72",
      address1: "0x30C40EDB18F8f60166e4fa9abEE41ca2879Bc7b5",
    },
  ],
  [Chain.BSC_MAINNET]: [
    {
      address0: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      address1: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    },
  ],
}
