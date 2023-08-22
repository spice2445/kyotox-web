import React, { FC, ReactNode, useEffect, useMemo, useState } from "react"
import { useAccount, useNetwork } from "wagmi"
import { ProviderBasedOnChainId } from "../../shared/lib/constants/data"
import Web3 from "web3"
import { Chain } from "../../shared/lib/constants/data/enums"

export type Account = (`0x${string}` | string) | undefined

interface Web3ProviderProps {
  children: ReactNode
}

export interface Web3ContextValue {
  provider: Web3
  chainId: Chain
  isLoading: boolean
  isConnected: boolean
  isSupportedChain: boolean
  account: Account
}

export const DEFAULT_CHAIN = Chain.BSC_TESTNET
export const SUPPORTED_CHAINS = [Chain.BSC_MAINNET, Chain.BSC_TESTNET]

export const Web3Context = React.createContext<Web3ContextValue>({
  provider: ProviderBasedOnChainId(DEFAULT_CHAIN),
  chainId: DEFAULT_CHAIN,
  isLoading: true,
  isConnected: false,
  account: undefined,
  isSupportedChain: false,
})

export const Web3Provider: FC<Web3ProviderProps> = ({ children }) => {
  const { chain } = useNetwork()

  const { address: account, status } = useAccount()
  const chainId = chain?.id || DEFAULT_CHAIN

  const [provider, setProvider] = useState<Web3>(ProviderBasedOnChainId(chain?.id || DEFAULT_CHAIN))

  useEffect(() => {
    if (chain) {
      const newProvider = ProviderBasedOnChainId(chain.id)
      newProvider.eth.setProvider(Web3.givenProvider)
      setProvider(newProvider)
    }
  }, [chain])

  const web3ContextValue = useMemo(
    () => ({
      provider,
      chainId,
      isLoading: status === "connecting" || status === "reconnecting",
      isConnected: status === "connected",
      account,
      isSupportedChain: SUPPORTED_CHAINS.includes(chainId),
    }),
    [provider, chainId, status, account],
  )

  return <Web3Context.Provider value={web3ContextValue}>{children}</Web3Context.Provider>
}
