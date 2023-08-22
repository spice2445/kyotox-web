import { useRouter } from "next/router"
import { FC, useState } from "react"

import { tabsContent, tabsList } from "../../../shared/lib/constants/data"
import { ACCEPT_MODAL } from "../../../shared/lib/constants/data/modals"
import { Project } from "../../../shared/lib/types"
import { Block, Button, Container } from "../../../shared/ui/atoms"
import {
  AcceptReadModal,
  ModalAmount,
  ModalVesting,
  ProjectItem,
  TabsWrapper,
} from "../../../shared/ui/molecules"
import { NewsletterSubscription } from "../../../shared/ui/molecules/NewsletterSubscription"
import { Content } from "../../../shared/ui/molecules/Tabs/types"

import { Molecule } from "../../../shared/lib/icons/Molecule"
import * as S from "./style"

import { useWeb3Context } from "../../../shared/lib/hooks/useWeb3Context"
import { pairsList } from "../../../context/web3/tokens"

export const LaunchpadProjectPage: FC = () => {
  const { query } = useRouter()
  const [isOpenModalAmount, setIsOpenModalAmount] = useState<boolean>(false)
  const [isAcceptModal, setIsAcceptModal] = useState<boolean>(false)
  const [readingId, setReadingId] = useState(-1)
  const [completedList, setCompletedList] = useState<number[]>([])
  const [isClaimModal, setIsClaimModal] = useState<boolean>(false)

  const { chainId } = useWeb3Context()
  const tokens = pairsList[chainId]

  const handleCloseModalAmount = () => {
    setReadingId(-1)
    setIsOpenModalAmount(false)
  }

  const handleSubmitModalAmount = () => {
    setCompletedList((prevState) => [...prevState, readingId])
    handleCloseModalAmount()
  }

  const handleOpenAcceptModal = (id: number) => {
    setReadingId(id)
    setIsAcceptModal(true)
  }

  const handleCloseAcceptModal = () => {
    setIsAcceptModal(false)
    setReadingId(-1)
  }

  const handleSubmitAcceptModal = () => {
    setIsOpenModalAmount(true)
    setIsAcceptModal(false)
  }

  const handleOpenClaimModal = () => {
    setIsClaimModal(true)
  }

  const handleCloseClaimModal = () => {
    setIsClaimModal(false)
  }

  const content: { info: Project; tabs: Content[] } = tabsContent[+(query.id || -1)]
  const info = content?.info || null
  const tabs = content?.tabs

  return (
    <S.Root>
      <Container maxWidth="small">
        <S.Content>
          {info && (
            <ProjectItem
              id={info.id}
              logo={info.logo}
              logoColor={info.logoColor}
              img={info.img}
              altImg={info.altImg}
              title={info.title}
              subtitle={info.subtitle}
              closedIn={info.closedIn}
              listTechnology={info.listTechnology}
              hideDetails
              onParticipate={handleOpenAcceptModal}
              isCompleted={completedList?.includes(info.id)}
              onClaim={handleOpenClaimModal}
            />
          )}
          <S.Tabs>
            <Block wide>
              <TabsWrapper contentList={tabs || []} triggerList={tabsList} />
            </Block>
          </S.Tabs>
        </S.Content>
      </Container>

      <NewsletterSubscription topMargin="small" />
      {tokens.length > 0 ? (
        <ModalAmount
          tokens={tokens}
          isOpened={isOpenModalAmount}
          handleClose={handleCloseModalAmount}
          onSubmit={handleSubmitModalAmount}
        />
      ) : null}
      <AcceptReadModal
        isOpened={isAcceptModal}
        handleClose={handleCloseAcceptModal}
        icon={<Molecule />}
        title={ACCEPT_MODAL.title}
        actions={
          <>
            <Button
              uppercase
              isLetterSpacing
              theme="red"
              size="largest"
              onClick={handleSubmitAcceptModal}
            >
              Accept
            </Button>
            <Button
              uppercase
              isLetterSpacing
              theme="outlined"
              size="largest"
              onClick={handleCloseAcceptModal}
            >
              Back
            </Button>
          </>
        }
      >
        {ACCEPT_MODAL.content}
      </AcceptReadModal>
      <ModalVesting isOpened={isClaimModal} handleClose={handleCloseClaimModal} />
    </S.Root>
  )
}
