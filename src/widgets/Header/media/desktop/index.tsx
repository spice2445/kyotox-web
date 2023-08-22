import { FC, useCallback, useState } from "react"

import { ConnectButton } from "@rainbow-me/rainbowkit"

import * as S from "./style"
import { Chevron } from "./style"
import { Button, Logo, Modal } from "../../../../shared/ui/atoms"
import { Navigation } from "../../../../shared/ui/molecules"
import Image from "next/image"
import { useDisconnect } from "wagmi"

export const HeaderDesktop: FC = () => {
  const [accountModalIsOpen, setAccountModalIsOpen] = useState(false)
  const { disconnect } = useDisconnect()

  const onClickDisconnect = useCallback(() => {
    disconnect()
    setAccountModalIsOpen(false)
  }, [disconnect])

  return (
    <>
      <S.WrapperDesktopHeader>
        <Logo width="33" height="57" />
        <Navigation />

        <ConnectButton.Custom>
          {({
            account,
            chain,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            const ready = mounted && authenticationStatus !== "loading"
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus || authenticationStatus === "authenticated")

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        style={{
                          background: "#CEDCD3",
                          borderRadius: 8,
                          padding: "0 12px",
                          fontWeight: 500,
                          height: 36,
                        }}
                      >
                        Connect Wallet
                      </button>
                    )
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        type="button"
                        style={{
                          background: "#CEDCD3",
                          borderRadius: 8,
                          padding: "0 12px",
                          fontWeight: 500,
                          height: 36,
                        }}
                      >
                        Wrong network
                      </button>
                    )
                  }

                  return (
                    <div style={{ display: "flex", gap: 24 }}>
                      <button
                        onClick={openChainModal}
                        style={{ display: "flex", alignItems: "center", background: "none" }}
                        type="button"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              width: 45,
                              height: 36,
                            }}
                          >
                            {chain.iconUrl && (
                              <Image
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                width={36}
                                height={36}
                              />
                            )}
                          </div>
                        )}
                        <Chevron direction={"bottom"} />
                      </button>

                      <button
                        onClick={() => setAccountModalIsOpen(true)}
                        type="button"
                        style={{
                          background: "#CEDCD3",
                          borderRadius: 8,
                          padding: "0 12px",
                          fontWeight: 500,
                        }}
                      >
                        {account.displayName}
                      </button>

                      <Modal
                        isOpened={accountModalIsOpen}
                        handleClose={() => setAccountModalIsOpen(false)}
                      >
                        <div style={{ padding: "0 20px" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              lineHeight: "50px",
                            }}
                          >
                            <div>Wallet address:</div>
                            <div style={{ fontWeight: "bold" }}>{account.displayName}</div>
                          </div>
                          <Button stretch uppercase onClick={onClickDisconnect}>
                            Log out
                          </Button>
                        </div>
                      </Modal>
                    </div>
                  )
                })()}
              </div>
            )
          }}
        </ConnectButton.Custom>
      </S.WrapperDesktopHeader>
    </>
  )
}
