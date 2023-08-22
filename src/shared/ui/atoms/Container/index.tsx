import { FC } from "react"

import * as S from "./style"
import { ContainerProps } from "./types"

export const Container: FC<ContainerProps> = ({ children, maxWidth }) => (
  <S.Container maxWidth={maxWidth}>{children}</S.Container>
)
