import React, { FC } from "react"

import { PercentageButton } from "../../../lib/constants/data"
import { Button } from "../../atoms"

import * as S from "./style"

import { PercentageButtonsProps } from "./types"

export const PercentageButtons: FC<PercentageButtonsProps> = ({
  currentAmount,
  setAmount,
  maxAmount,
  isLittle,
}) => {
  return (
    <S.ListPercentageBtn>
      {PercentageButton.map((button) => {
        return (
          <S.WrapperButton
            key={button.id}
            onClick={() => setAmount((maxAmount * BigInt(button.id * 25)) / BigInt(100))}
          >
            <Button
              type="button"
              size={isLittle ? "little" : "small"}
              theme={
                (maxAmount * BigInt(button.id * 25)) / BigInt(100) === currentAmount
                  ? "red"
                  : "outlined"
              }
              isLetterSpacing
              stretch={!!isLittle}
            >
              {button.title}
            </Button>
          </S.WrapperButton>
        )
      })}
    </S.ListPercentageBtn>
  )
}
