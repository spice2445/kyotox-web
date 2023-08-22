import { FC } from "react"
import { useMedia } from "react-use"

import { HeaderDesktop, HeaderMobile } from "../widgets/Header/media"
// import { media } from "../../../../../../../../../shared/lib/styles"
import { media } from "../shared/lib/styles"

export const Header: FC = () => {
  const isMedia = useMedia(media.toWideTablet, false)

  return isMedia ? <HeaderMobile /> : <HeaderDesktop />
}
