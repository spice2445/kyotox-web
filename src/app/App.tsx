import { useRouter } from "next/router"
import { FC } from "react"

import * as S from "./style"
import { AppProps } from "./types"
import { FooterBackground, TopBackground } from "../shared/ui/atoms"
import { Header } from "../widgets"
import { setupGlobalStyles } from "../shared/lib/styles"

export const App: FC<AppProps> = ({ children }) => {
  setupGlobalStyles()
  const { asPath } = useRouter()

  const isBackgroundVisible = asPath !== "/farm"

  return (
    <>
      {isBackgroundVisible && <TopBackground />}
      <S.Main>
        <Header />

        {children}
        {isBackgroundVisible && <FooterBackground />}
      </S.Main>
    </>
  )
}
