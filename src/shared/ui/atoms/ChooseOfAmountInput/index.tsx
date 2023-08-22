import React, { FC, useCallback, useEffect, useState } from "react"
import { useDebounce } from "react-use"
import { toDecimal } from "../../../lib/helpers"
import { useBalance } from "../../../lib/hooks/useBalance"
import { Loader } from "../Loader"

import { TokenLogo } from "../TokenLogo"
import * as S from "./style"
import { ChooseOfAmountInputProps } from "./types"

export const ChooseOfAmountInput: FC<ChooseOfAmountInputProps> = ({
  token,
  amount,
  onChangeAmount,
  max,
}) => {
  const [inputValue, setInputValue] = useState("")
  const { balance } = useBalance(token?.address)

  useDebounce(
    () => {
      if (!inputValue) {
        onChangeAmount(undefined)
        return
      }
      if (!inputValue.endsWith(".") && !inputValue.startsWith(".") && token) {
        const formattedOldValue = toDecimal(amount || BigInt(0), token.decimals, 3)
          .toString()
          .replace(",", ".")
        if (formattedOldValue !== inputValue) {
          onChangeAmount(BigInt(parseFloat(inputValue) * 10 ** token.decimals))
        }
      }
    },
    500,
    [inputValue],
  )

  useEffect(() => {
    if (amount !== undefined && !!token) {
      setInputValue(toDecimal(amount, token.decimals, 3).toString().replace(",", "."))
    } else {
      setInputValue("")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount])

  const changeValue = useCallback((e) => {
    if (e.target.value.match(/^[0-9]*\.?[0-9]*$/)) {
      setInputValue(e.target.value)
    }
  }, [])

  if (!token || !balance) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader theme="dark" size="medium" />
      </div>
    )
  }
  return (
    <S.WrapperInput type={(amount || BigInt(0)) > (max || BigInt(0)) ? "error" : undefined}>
      <S.InnerWrapper>
        <S.Input placeholder="0.0" value={inputValue} onChange={changeValue} />
        <S.Token>
          <S.WrapperImage>
            <TokenLogo size={20} symbol={token.symbol} />
          </S.WrapperImage>
          {token.name}
        </S.Token>
      </S.InnerWrapper>
      <S.Balance>Balance: {toDecimal(balance, token.decimals, 3)}</S.Balance>
    </S.WrapperInput>
  )
}
