import Image from "next/image"
import React, { FC } from "react"

import * as S from "./style"
import { WarningMessageProps } from "./types"

export const WarningMessage: FC<WarningMessageProps> = ({ children, handleClose, isClosed }) =>
  isClosed ? null : (
    <S.WarningMessageWrapper>
      <S.WrapperClose onClick={handleClose}>
        <Image src="/images/helpers/CloseIcon.svg" alt="close button" width="10" height="10" />
      </S.WrapperClose>
      {children}
    </S.WarningMessageWrapper>
  )
