import React, { FC } from "react"

import * as S from "./style"
import { BlockProps } from "./types"

export const Block: FC<BlockProps> = ({ children, wide }) => (
  <S.WrapperBlock>
    <S.WrapperWindow wide={wide}>{children}</S.WrapperWindow>
  </S.WrapperBlock>
)
