import Image from "next/image"
import React, { FC, useState } from "react"

import { Button, Modal } from "../../../../shared/ui/atoms"

import * as S from "./style"

export const ModalFarmingInfo: FC = () => {
  const [isOpened, setIsOpened] = useState(true)

  const handleClose = () => {
    setIsOpened(false)
  }

  return (
    <Modal handleClose={handleClose} isOpened={isOpened}>
      <S.Icon>
        <Image src="/images/helpers/redDye.svg" alt="red dye" width="50" height="45" />
      </S.Icon>
      <S.Text>
        In Farming, you can deposit a pair of tokens in a liquidity pool to earn trading fees.
        Follow the steps below to begin.
      </S.Text>
      <S.WrapperButton>
        <Button theme="red" size="small" type="button" onClick={handleClose} stretch>
          OK
        </Button>
      </S.WrapperButton>
    </Modal>
  )
}
