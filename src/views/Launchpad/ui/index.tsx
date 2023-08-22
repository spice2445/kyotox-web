import { FC, useState } from "react"

import { ProjectsList } from "../../../views/Launchpad/lib/ui"
import { ACCEPT_MODAL } from "../../../shared/lib/constants/data/modals"
import { Button, Container } from "../../../shared/ui/atoms"
import { AcceptReadModal, ModalAmount, ModalVesting } from "../../../shared/ui/molecules"
import { NewsletterSubscription } from "../../../shared/ui/molecules/NewsletterSubscription"

import { useWeb3Context } from "../../../shared/lib/hooks/useWeb3Context"
import { pairsList } from "../../../context/web3/tokens"

import { Molecule } from "../../../shared/lib/icons/Molecule"
import * as S from "./style"

export const LaunchpadPage: FC = () => {
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

  return (
    <Container>
      <S.Title>
        Investments
        <br />
        Simplified
      </S.Title>
      <S.SubTitle>
        Catch the projects before they
        <br />
        become public.
      </S.SubTitle>

      <ProjectsList
        onParticipate={handleOpenAcceptModal}
        completedList={completedList}
        onClaim={handleOpenClaimModal}
      />

      <S.Background />

      <NewsletterSubscription />
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
        title={ACCEPT_MODAL.title}
        icon={<Molecule />}
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
    </Container>
  )
}
