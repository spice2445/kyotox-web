import { Token } from "../../../../context/web3/type"

export interface ChooseOfAmountInputProps {
  token: Token
  amount?: bigint
  onChangeAmount: (value?: bigint) => void
  max?: bigint
}
