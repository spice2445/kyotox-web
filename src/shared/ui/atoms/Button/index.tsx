import React, { FC } from "react"

import * as S from "./style"
import { ButtonProps } from "./types"

export const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  radius = "medium",
  theme = "outlined",
  isLoading,
  disabled,
  size = "smallMedium",
  stretch = false,
  leftPosition,
  isLetterSpacing,
  uppercase,
}) => (
  <S.Button
    onClick={() => {
      if (!disabled && typeof onClick != "undefined") {
        onClick()
      }
    }}
    theme={theme}
    type={type}
    radius={radius}
    isLoading={isLoading}
    disabled={disabled}
    size={size}
    stretch={stretch}
    leftPosition={leftPosition}
    isLetterSpacing={isLetterSpacing}
    uppercase={uppercase}
  >
    {children}
  </S.Button>
)
