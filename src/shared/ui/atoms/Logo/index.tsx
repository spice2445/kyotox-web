import Image from "next/image"
import React, { FC } from "react"

import * as S from "./style"
import { LogoProps } from "./types"
import { KyotoxLogo } from "../../../lib/icons"

export const Logo: FC<LogoProps> = ({ kind = "kyotox", width, height }) => (
  <S.WrapperLogoLink href="/">
    {kind === "kyotox" ? (
      <KyotoxLogo />
    ) : (
      <Image src="/images/logo/onidexRed.svg" alt="onidex logo" width={width} height={height} />
    )}
    {kind === "onidex" ? (
      <Image src="/images/logo/onidex.svg" alt="onidex logo" width={width} height={height} />
    ) : (
      <div />
    )}
  </S.WrapperLogoLink>
)
