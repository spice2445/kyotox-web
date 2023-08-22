import { FC } from "react"
import { BTCB, BusdLogo, DatumLogo, GPTLogo } from "../../../lib/icons"

const TokenSymbol: FC<{ symbol: string }> = ({ symbol }) => {
  if (symbol === "DATUM") {
    return <DatumLogo />
  } else if (symbol === "GPT") {
    return <GPTLogo />
  } else if (symbol === "BUSD") {
    return <BusdLogo />
  }
  return <BTCB />
}

export const TokenLogo: FC<{ size: number; symbol: string }> = ({ size, symbol }) => {
  return (
    <div style={{ width: size, height: size, borderRadius: size / 2 }}>
      <TokenSymbol symbol={symbol} />
    </div>
  )
}
