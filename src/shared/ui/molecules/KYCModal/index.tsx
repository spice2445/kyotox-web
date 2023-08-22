import React, { FC, useState } from "react"

import { Button, Input, Modal } from "../../../../shared/ui/atoms"

import * as S from "./style"
import { KYCModalProps } from "./types"

export const KYCModal: FC<KYCModalProps> = ({ isOpened, handleClose }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    dateOhBirth: "",
    country: "",
  })

  return (
    <Modal handleClose={handleClose} isOpened={isOpened}>
      <S.Title>Fill up all empty fields</S.Title>

      <S.FormWrapper>
        <S.WrapperInputs>
          <S.WrapperInput>
            <S.Label>
              <S.TitleInput>First Name*</S.TitleInput>
              (First Name must match your government-issued ID)
            </S.Label>
            <Input
              size="small"
              type="text"
              placeholder="Enter First Name"
              theme="light"
              stretch
              name="firstName"
              radius="medium"
              value={userInfo.firstName}
              onChange={(value) => setUserInfo({ ...userInfo, firstName: value })}
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <S.Label>
              <S.TitleInput>Last Name*</S.TitleInput>
              (Last Name must match your government-issued ID)
            </S.Label>
            <Input
              size="small"
              type="text"
              placeholder="Enter Last Name"
              theme="light"
              stretch
              name="lastName"
              radius="medium"
              value={userInfo.lastName}
              onChange={(value) => setUserInfo({ ...userInfo, lastName: value })}
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <S.Label>
              <S.TitleInput>Date of birth*</S.TitleInput>
              (DoB must match your government-issued ID)
            </S.Label>
            <Input
              size="small"
              type="text"
              placeholder="yyyy-mm-dd"
              theme="light"
              stretch
              name="dateOfBirth"
              radius="medium"
              value={userInfo.dateOhBirth}
              onChange={(value) => setUserInfo({ ...userInfo, dateOhBirth: value })}
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <S.Label>
              <S.TitleInput>Country</S.TitleInput>
              (Country must match your Proof of Address document)
            </S.Label>
            <Input
              size="small"
              type="text"
              placeholder="Enter Country"
              theme="light"
              stretch
              name="country"
              radius="medium"
              value={userInfo.country}
              onChange={(value) => setUserInfo({ ...userInfo, country: value })}
            />
          </S.WrapperInput>
        </S.WrapperInputs>

        <S.WrapperButton>
          <Button theme="red" size="large" type="button" onClick={handleClose} stretch>
            CONTINUE TO KYC
          </Button>
          <Button size="large" type="button" onClick={handleClose} stretch>
            CLOSE
          </Button>
        </S.WrapperButton>
      </S.FormWrapper>
    </Modal>
  )
}
