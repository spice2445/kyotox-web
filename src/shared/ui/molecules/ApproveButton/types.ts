import { Token } from "../../../../context/web3/type"

export type ApproveButtonProps = {
  token: Token
  spender: string
  amount: bigint
}
