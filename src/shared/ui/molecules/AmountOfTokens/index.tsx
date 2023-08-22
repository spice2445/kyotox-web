import { FC, useLayoutEffect, useState } from "react"

import { Button, ChooseOfAmountInput, Loader } from "../../atoms"
import { PercentageButtons, WarningMessage } from "../../../../shared/ui/molecules"

import * as S from "./style"
import { AmountActionProps, AmountOfTokensProps } from "./types"

import { useMaxTokenAvailable } from "../../../lib/hooks/useMaxTokenAvailable"
import { useTokens } from "../../../lib/hooks/useToken"
import { useBalance } from "../../../lib/hooks/useBalance"
import { useFarmAmounts } from "../../../lib/hooks/useFarmAmounts"

const AmountAction: FC<AmountActionProps> = ({
  max0,
  max1,
  nextSlide,
  amount0,
  amount1,
  token0,
  token1,
  loading,
}: AmountActionProps) => {
  if (!token0 || !token1) {
    return null
  } else if (!amount0 || !amount1) {
    return (
      <Button stretch type="button" size="large" theme="lightEmerald" disabled>
        ENTER AN AMOUNT
      </Button>
    )
  } else if (loading) {
    return (
      <Button stretch type="button" size="large" theme="lightEmerald" disabled>
        <Loader theme="light" size="tiny" />
      </Button>
    )
  } else if (amount0 > max0) {
    return (
      <Button stretch type="button" size="large" theme="lightEmerald" disabled>
        INSUFFICIENT AMOUNT
      </Button>
    )
  } else if (amount1 > max1) {
    return (
      <Button stretch type="button" size="large" theme="lightEmerald" disabled>
        INSUFFICIENT AMOUNT
      </Button>
    )
  }
  return (
    <Button stretch type="button" size="large" theme="red" onClick={nextSlide}>
      ADD LIQUIDITY
    </Button>
  )
}

export const AmountOfTokens: FC<AmountOfTokensProps> = ({ onSubmit, pair }) => {
  const tokens = useTokens([pair.address0, pair.address1])
  const { balance: balance0 } = useBalance(pair.address0)

  const [max0, max1] = useMaxTokenAvailable(tokens[0], tokens[1])
  const { amount0, amount1, changeInputAmount, changeOutputAmount, loading } = useFarmAmounts(
    tokens[0],
    tokens[1],
  )

  const [isClosed, setIsClosed] = useState(false)

  const nextSlide = () => onSubmit([amount0, amount1])

  const handleClose = () => {
    setIsClosed(true)
    localStorage.setItem("selectStepTwoDepositToggle", "false")
  }

  useLayoutEffect(() => {
    const Item = localStorage.getItem("selectStepTwoDepositToggle")
    if (Item === "false") {
      setIsClosed(true)
    }
  }, [])

  if (!tokens || balance0 === undefined) {
    return null
  }

  return (
    <>
      <S.Title>Enter amount of tokens you want to deposit</S.Title>
      <WarningMessage isClosed={isClosed} handleClose={handleClose}>
        <S.TextMessage>
          To begin farming, enter the amount of tokens you want to deposit.
          <br />
          <S.BoldText>More tokens = more farming rewards</S.BoldText>
        </S.TextMessage>
      </WarningMessage>
      <S.LabelInput>
        Choose amount of <S.BoldToken>{tokens[0]?.symbol}</S.BoldToken> token
      </S.LabelInput>
      <S.WrapperInput>
        <ChooseOfAmountInput
          token={tokens[0]}
          amount={amount0}
          onChangeAmount={changeInputAmount}
          max={max0}
        />
      </S.WrapperInput>
      <S.WrapperButtons>
        <PercentageButtons
          maxAmount={balance0}
          currentAmount={amount0 || BigInt(0)}
          setAmount={changeInputAmount}
        />
      </S.WrapperButtons>
      <S.LabelInput>
        <S.BoldToken>{tokens[0]?.symbol}</S.BoldToken>
        &nbsp;amount gets matched to chosen <S.BoldToken>{tokens[1]?.symbol} </S.BoldToken>
        amount
      </S.LabelInput>
      <S.WrapperInputBottom>
        <ChooseOfAmountInput
          token={tokens[1]}
          amount={amount1}
          onChangeAmount={changeOutputAmount}
          max={max1}
        />
      </S.WrapperInputBottom>
      <S.WrapperEnterButton>
        <AmountAction
          loading={loading}
          max0={max0 || BigInt(0)}
          max1={max1 || BigInt(0)}
          amount0={amount0}
          amount1={amount1}
          nextSlide={nextSlide}
          token0={tokens[0]}
          token1={tokens[1]}
        />
      </S.WrapperEnterButton>
    </>
  )
}
