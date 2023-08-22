import React, { FC } from "react"

import * as S from "./style"
import { InputProps } from "./types"

export const Input: FC<InputProps> = ({
  size,
  children,
  placeholder,
  name,
  radius,
  disabled,
  type,
  stretch,
  theme,
}) => (
  <S.InputWrapper disabled={disabled} size={size} radius={radius} stretch={stretch} theme={theme}>
    {children}
    <S.Input name={name} placeholder={placeholder} type={type} theme={theme} />
  </S.InputWrapper>
)
