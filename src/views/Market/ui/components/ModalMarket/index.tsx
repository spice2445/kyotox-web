import React, { FC, useEffect } from "react"

import * as S from "./style"
import { ModalProps } from "./types"

export const ModalMarket: FC<ModalProps> = ({ children, isOpened, handleClose, size }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden"
      return
    }

    document.body.style.overflow = ""
  }, [isOpened])

  return (
    <S.ModalWrapper isOpened={isOpened} onClick={handleClose}>
      <S.Content size={size} onClick={(event) => event.stopPropagation()}>
        {children}
      </S.Content>
    </S.ModalWrapper>
  )
}
