import { FC } from "react"

import { GptFullLogo } from "../../../lib/icons"
import { Button, ChooseOfAmountInput, Modal } from "../../atoms"
import { PercentageButtons } from "../PercentageButtons"

import * as S from "./style"
import { ModalAmountProps } from "./types"
import { useBalance } from "../../../lib/hooks/useBalance"
import { useFarmAmounts } from "../../../lib/hooks/useFarmAmounts"
import { useTokens } from "../../../lib/hooks/useToken"

export const ModalAmount: FC<ModalAmountProps> = ({ tokens, isOpened, handleClose, onSubmit }) => {
  const tokensData = useTokens([tokens[0].address0, tokens[0].address1])
  const { balance } = useBalance(tokens[0].address0)
  const { amount0, changeInputAmount } = useFarmAmounts(tokensData[0], tokensData[1])

  if (!balance || !tokens) {
    return null
  }
  return (
    <Modal isOpened={isOpened} handleClose={handleClose}>
      <S.WrapperLogo>
        <GptFullLogo />
      </S.WrapperLogo>
      <S.Title>
        Enter amount of tokens
        <br />
        you want to deposit
      </S.Title>
      <S.WrapperInfoContent>
        <S.Row>
          <S.Text>Total participants:</S.Text>
          <S.Value>3,424</S.Value>
        </S.Row>
        <S.Row>
          <S.Text>Your rank:</S.Text>
          <S.Value>452</S.Value>
        </S.Row>
        <S.Row>
          <S.Text>Available allocation:</S.Text>
          <S.Value isRed>458 BUSD</S.Value>
        </S.Row>
      </S.WrapperInfoContent>
      <ChooseOfAmountInput
        amount={amount0}
        onChangeAmount={changeInputAmount}
        token={tokensData[0]}
        max={balance}
      />
      <S.WrapperPercentageButtons>
        <PercentageButtons
          maxAmount={balance}
          currentAmount={amount0 || BigInt(0)}
          setAmount={changeInputAmount}
        />
      </S.WrapperPercentageButtons>
      <S.WrapperButton>
        <Button stretch size="large" theme="red" isLetterSpacing onClick={onSubmit}>
          DEPOSIT
        </Button>
      </S.WrapperButton>
      <Button stretch size="large" isLetterSpacing>
        STAKE MORE
      </Button>
    </Modal>
  )
}
