import { FC, useState } from "react"
import { useMedia } from "react-use"

import { media } from "../../../../shared/lib/styles"
import { Burger, Logo } from "../../../../shared/ui/atoms"
import { NavigationMobile } from "../../../../shared/ui/template"

import * as S from "./style"

export const HeaderMobile: FC = () => {
  const [openNavigation, setOpenNavigation] = useState(false)
  const isMedia = useMedia(media.toWideMobile, false)

  const handleClose = () => {
    setOpenNavigation(false)
  }

  return (
    <S.WrapperHeaderMobile>
      <Logo height="57" width="33" />
      {isMedia ? (
        <Burger isActive={openNavigation} onCLick={() => setOpenNavigation(!openNavigation)} />
      ) : (
        <Burger
          isActive={openNavigation}
          onCLick={() => setOpenNavigation(!openNavigation)}
          size="medium"
        />
      )}
      <NavigationMobile isOpened={openNavigation} handleClose={handleClose} />
    </S.WrapperHeaderMobile>
  )
}
