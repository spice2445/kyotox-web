import React, { FC } from "react"

import { linksNavigationMobile } from "../../../lib/constants/data"
import { Close } from "../../../lib/icons"

import * as S from "./style"
import { NavigationMobileProps } from "./types"

export const NavigationMobile: FC<NavigationMobileProps> = ({ isOpened, handleClose }) => (
  <S.NavigationOverlay isOpened={isOpened}>
    <S.Navigation isActive={isOpened} onClick={(e) => e.stopPropagation()}>
      <S.NavigationInnerWrapper>
        <S.NavLinks>
          {linksNavigationMobile.map((link, index) => (
            <S.NavLink href={link.path} key={index}>
              {link.image && <S.ImageLink src={link.image} alt="red dye" width="21" height="18" />}
              {link.title}
            </S.NavLink>
          ))}
        </S.NavLinks>
      </S.NavigationInnerWrapper>
      <S.WrapperCloseButton onClick={handleClose}>
        <Close />
      </S.WrapperCloseButton>
    </S.Navigation>
  </S.NavigationOverlay>
)
