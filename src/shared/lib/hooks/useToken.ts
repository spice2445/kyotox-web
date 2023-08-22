import { useTokenContract } from "./useTokenContract"
import { useCallback, useEffect, useState } from "react"
import { Token } from "../../../context/web3/type"
import { useWeb3Context } from "./useWeb3Context"
import { Chain } from "../constants/data/enums"
import Contract from "web3-eth-contract"
import ERC20Abi from "../../../abi/erc20.json"
import { AbiItem } from "web3-utils"

const fetchToken = (tokenContract: Contract) => {
  return Promise.all([
    tokenContract.methods
      .decimals()
      .call()
      .then((result) => Number(result)),
    tokenContract.methods.name().call(),
    tokenContract.methods.symbol().call(),
  ]).then(([decimals, name, symbol]) => ({
    decimals,
    name,
    symbol,
    address: tokenContract.options.address,
  }))
}

const cached: { [chainId: number]: { [address: string]: Token } } = {
  [Chain.BSC_MAINNET]: {},
  [Chain.BSC_TESTNET]: {},
}

const getCached = (chainId: number, address?: string) => {
  return cached[chainId] && address ? cached[chainId][address] : undefined
}

export const useToken = (address?: string): Token | undefined => {
  const { chainId } = useWeb3Context()
  const tokenContract = useTokenContract(address)
  const [token, setToken] = useState<Token | undefined>(getCached(chainId, address))

  const fetch = useCallback(async () => {
    if (!tokenContract || !address) {
      return
    }
    cached[chainId][address] = await fetchToken(tokenContract)
    setToken(getCached(chainId, address))
  }, [address, chainId, tokenContract])

  useEffect(() => {
    if (!address) {
      setToken(undefined)
    }
    const inCache = getCached(chainId, address)
    if (!inCache) {
      fetch()
    } else {
      setToken(inCache)
    }
  }, [address, chainId, fetch])

  return token || getCached(chainId, address)
}

export const useTokens = (addresses: string[]): Token[] => {
  const [tokens, setTokens] = useState<Token[]>([])
  const { provider } = useWeb3Context()

  useEffect(() => {
    Promise.all(
      addresses.map((address) => {
        return fetchToken(new provider.eth.Contract(ERC20Abi as AbiItem[], address))
      }),
    ).then((tokens) => {
      setTokens(tokens)
    })
  }, [addresses, provider])

  return tokens
}
