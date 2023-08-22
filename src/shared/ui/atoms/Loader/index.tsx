import React, { FC } from "react"
import * as S from "./style"
import { LoaderProps } from "./types"

export const Loader: FC<LoaderProps> = ({ size, theme }) => <S.Loader size={size} theme={theme} />
