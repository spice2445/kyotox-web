import { FC } from "react"

import { GptFullLogo } from "../../../../shared/lib/icons"
import { Button, Modal } from "../../../../shared/ui/atoms"

import * as S from "./style"
import { ModalVestingProps } from "./types"

export const ModalVesting: FC<ModalVestingProps> = ({ isOpened, handleClose }) => (
  <Modal handleClose={handleClose} isOpened={isOpened}>
    <S.InnerWrapper>
      <S.Icon>
        <GptFullLogo />
      </S.Icon>
      <S.Title>YOUR VESTING</S.Title>
      <S.Wallet>0x4Y2b...sC5u</S.Wallet>
      <S.WrapperInfo>
        <S.Row>
          <S.RowTitle>Total:</S.RowTitle>
          <S.RowValue>3,424 LAI</S.RowValue>
        </S.Row>
        <S.Row>
          <S.RowTitle>Claimed:</S.RowTitle>
          <S.RowValue>452 LAI</S.RowValue>
        </S.Row>
        <S.Row>
          <S.RowTitle>Available for claim:</S.RowTitle>
          <S.RowValue red>154 LAI</S.RowValue>
        </S.Row>
      </S.WrapperInfo>
      <S.WrapperButton>
        <Button theme="red" size="large" type="button" onClick={handleClose} stretch>
          CLAIM
        </Button>
        <Button size="large" type="button" onClick={handleClose} stretch>
          CLOSE
        </Button>
      </S.WrapperButton>
    </S.InnerWrapper>
  </Modal>
)
