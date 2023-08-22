import { useContext } from "react"
import { Web3Context, Web3ContextValue } from "../../../context/web3"

export const useWeb3Context = (): Web3ContextValue => {
  return useContext(Web3Context)
}
