import React, { FC } from "react"

import { ConnectWalletIcon } from "../../../../shared/ui/atoms"
import { Button } from "../../../../shared/ui/atoms/Button"

import * as S from "./style"
import { ConnectWalletProps } from "./types"

export const ConnectWallet: FC<ConnectWalletProps> = ({ children }) => (
  <S.ConnectWalletWrapper>
    <ConnectWalletIcon />
    <S.WrapperConnectButton>
      <Button type="button" theme="overLightEmerald" radius="medium" size="smallMedium">
        {children}
      </Button>
    </S.WrapperConnectButton>
  </S.ConnectWalletWrapper>
)
