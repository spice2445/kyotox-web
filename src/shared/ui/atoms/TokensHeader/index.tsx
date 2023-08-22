import React, { FC } from "react"

import * as S from "./style"
import { TokensHeaderProps } from "./types"
import { TokenLogo } from "../TokenLogo"

export const TokensHeader: FC<TokensHeaderProps> = ({
  firstToken,
  secondToken,
  isSelectToFarm,
}) => {
  return (
    <S.InnerWrapperButton>
      <S.TokenInfoWrapper>
        <S.TokenImages>
          <S.FirstTokenImg>
            <TokenLogo size={20} symbol={firstToken.symbol} />
          </S.FirstTokenImg>
          <S.SecondTokenImg>
            <TokenLogo size={20} symbol={firstToken.symbol} />
          </S.SecondTokenImg>
        </S.TokenImages>
        <S.WrapperNameTokens>
          {firstToken.symbol} - {secondToken.symbol}
          {isSelectToFarm && <S.textPair>&nbsp;Pair</S.textPair>}
        </S.WrapperNameTokens>
      </S.TokenInfoWrapper>
    </S.InnerWrapperButton>
  )
}
