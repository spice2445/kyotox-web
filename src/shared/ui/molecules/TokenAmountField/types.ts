import { Token } from "../../../../context/web3/type"

export type TokenSelectorProps = {
  tokens: Token[]
  address?: string
  onChangeAddress?: (address: string) => void
}

export type TokenAmountFieldProps = {
  items: string[]
  address?: string
  amount?: bigint
  balance?: bigint
  usdPrice?: number
  onChangeAmount: (value?: bigint) => void
  onChangeAddress?: (string: string) => void
  max?: bigint
  showMax?: boolean
}
