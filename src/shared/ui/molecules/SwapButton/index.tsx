import s from "../../../../views/Swap/ui/swap.module.css"
import { useSwap } from "../../../lib/hooks/useSwap"
import React, { FC } from "react"
import { SwapButtonProp } from "./types"
import { Loader } from "../../atoms"

export const SwapButton: FC<SwapButtonProp> = ({ token0, token1, amount0, amount1, onSuccess }) => {
  const { swap, loading } = useSwap(token0, token1, amount0, amount1, onSuccess)
  return (
    <button disabled={loading} className={s.swapWrapperButton} onClick={swap}>
      {loading && <Loader theme={"light"} size={"small"} />}
      Swap
    </button>
  )
}
