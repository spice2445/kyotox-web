import Web3 from "web3"

export const ProviderBasedOnChainId = (chainId: number): Web3 => {
  if (chainId === 97) {
    return new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/")
  }
  if (chainId === 56) {
    return new Web3("https://bsc-dataseed.binance.org/")
  }
  return new Web3()
}
