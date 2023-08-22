import s from "../../../../views/Swap/ui/swap.module.css"
import React, { FC } from "react"
import { ApproveButtonProps } from "./types"
import { useApprove } from "../../../lib/hooks/useApprove"
import { Loader } from "../../atoms"

export const ApproveButton: FC<ApproveButtonProps> = ({ token, spender, amount }) => {
  const { approve, loading } = useApprove(token.address, spender, amount)
  return (
    <button disabled={loading} className={s.swapWrapperButton} onClick={approve}>
      {loading && <Loader theme={"light"} size={"small"} />}
      Approve {token.symbol}
    </button>
  )
}
