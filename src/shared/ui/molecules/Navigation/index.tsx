import { useRouter } from "next/router"
import React, { FC } from "react"

import { linksDesktop } from "../../../lib/constants/data"

import * as S from "./style"

export const Navigation: FC = () => {
  const router = useRouter()

  return (
    <S.NavigationWrapper>
      <S.NavList>
        {linksDesktop
          .filter(({ enabled }) => !!enabled)
          .map((link) => (
            <S.NavLinkWrapper key={link.path}>
              <S.NavLink
                href={link.path}
                isActive={
                  router.asPath == link.path ||
                  (router.asPath.includes(link.path.toString()) && link.path !== "/")
                }
              >
                {link.title}
              </S.NavLink>
            </S.NavLinkWrapper>
          ))}
      </S.NavList>
    </S.NavigationWrapper>
  )
}
