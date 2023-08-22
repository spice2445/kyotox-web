interface TokenWithoutAddress {
  symbol: string
  decimals: number
  name: string
}

export interface Token extends TokenWithoutAddress {
  address: string
}

export interface TokenInfoList {
  [address: string]: TokenWithoutAddress
}

export interface TokenList {
  [chainId: number]: string[]
}
