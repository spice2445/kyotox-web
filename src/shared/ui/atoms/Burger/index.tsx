import React, { FC } from "react"

import * as S from "./style"
import { BurgerProps } from "./types"

export const Burger: FC<BurgerProps> = ({ onCLick, isActive, size = "small" }) => (
  <S.Burger onClick={onCLick} isActive={isActive} size={size}>
    <S.MiddleLine isActive={isActive} size={size} />
  </S.Burger>
)
