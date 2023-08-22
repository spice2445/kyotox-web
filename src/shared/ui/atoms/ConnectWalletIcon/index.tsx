import Image from "next/image"
import React, { FC } from "react"

import * as S from "./style"

export const ConnectWalletIcon: FC = () => (
  <S.WalletIcon>
    <S.ImageWallet
      src="/images/helpers/connectWallet.svg"
      width="27"
      height="32"
      alt="Connect wallet icon"
    />
    <Image src="/images/helpers/arrowToDown.svg" alt="Arrow to down" width="10" height="10" />
  </S.WalletIcon>
)
