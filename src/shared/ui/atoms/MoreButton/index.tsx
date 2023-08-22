import React, { FC } from "react"

import * as S from "./style"
import { MoreButtonProps } from "./types"
import { ArrowToDown } from "../../../lib/icons"

export const MoreButton: FC<MoreButtonProps> = ({ text }) => (
  <S.WrapperButton>
    {text} <ArrowToDown />
  </S.WrapperButton>
)
