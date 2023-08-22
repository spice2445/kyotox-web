import React, { FC } from "react"

import { Button, Modal } from "../../../../shared/ui/atoms"

import * as S from "./style"
import { VerificationModalProps } from "./types"

export const VerificationModal: FC<VerificationModalProps> = ({
  isOpened,
  handleClose,
  handleContinue,
}) => (
  <Modal handleClose={handleClose} isOpened={isOpened}>
    <S.Title>Identity Verification</S.Title>
    <S.SubTitle>Submit your documents to increase account functionalities.</S.SubTitle>

    <S.WrapperButton>
      <Button theme="red" size="large" type="button" onClick={handleContinue} stretch>
        CONTINUE TO KYC
      </Button>
      <Button size="large" type="button" onClick={handleClose} stretch>
        CLOSE
      </Button>
    </S.WrapperButton>
  </Modal>
)
