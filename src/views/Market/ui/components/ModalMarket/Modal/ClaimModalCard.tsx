import { FC, useState } from "react"
import { ModalMarket } from ".."
import s from "../../css/modalClaim.module.css"
import Image from "next/image"

export const ClaimModalCard: FC<{
  handleCloseAcceptModal: () => void
  setIsOpenModal: (arg: boolean) => void
  isOpenModal: boolean
}> = ({ handleCloseAcceptModal, setIsOpenModal, isOpenModal }: any) => {
  const [inputValue, setInputValue] = useState(346.08)
  return (
    <ModalMarket
      isOpened={isOpenModal}
      handleClose={handleCloseAcceptModal}
      actions={true}
      actionsDirection="row"
      size="default"
    >
      <div className={s.ModalWrapper}>
        <div className={s.modalTitle}>Claim all available</div>
        <div className={s.modalTitleTwo}>rewars</div>
        <div>
          <div className={s.modalTextFirstBlock}>All available rewards</div>
          <div className={s.modalBlockTwo}>
            <div>
              <div>
                <div className={s.modalBlockWrapper}>
                  <div className={s.modalBlockTwoText}>
                    <Image className={s.modalImgBlockTwo} src="svg/AGIX.svg" alt="AGIX" />
                    <div>AGIX</div>
                  </div>
                  <div className={s.modalBlockTwoPro}>1,293.02</div>
                </div>
                <div className={s.modalBlockWrapper}>
                  <div className={s.modalBlockTwoText}>
                    <Image className={s.modalImgBlockTwo} src="svg/OCEAN.svg" alt="OCEAN" />
                    <div>Ocean</div>
                  </div>
                  <div className={s.modalBlockTwoPro}>12,379,293.0221</div>
                </div>
                <div className={s.modalBlockWrapper}>
                  <div className={s.modalBlockTwoText}>
                    <Image className={s.modalImgBlockTwo} src="svg/NMR.svg" alt="NMR" />
                    <div>NMR</div>
                  </div>
                  <div className={s.modalBlockTwoPro}>93.022</div>
                </div>
              </div>
            </div>
            <div className={s.selectMenuWrapper}>
              <select className={s.modalSelectClaim} name="select" id="1">
                <option className={s.modalSelectClaimOptions} value="">
                  3 More
                </option>
              </select>
            </div>
          </div>
          <div className={s.modalTextTwoBlock}>Choose tokens for claim</div>
          <div className={s.modalBlockOne}>
            <div className={s.modalBlockWrapper}>
              <div className={s.modalBlockNumberOne}>
                <input
                  type="number"
                  className={s.inputValueToken}
                  value={inputValue}
                  onChange={(e: any) => setInputValue(e.target.value)}
                />
              </div>
              <div className={s.modalImgWrapper}>
                <Image className={s.modalImgBlock} src="svg/AGIX.svg" alt="AGIX" />
                <div>AGIX</div>
              </div>
            </div>
            <div className={s.modalBlockWrapperWallet}>
              <div>$143.400.15</div>
              <div>Wallet balance: 1256.16</div>
            </div>
          </div>
          <div className={s.modalWrapperButton}>
            <button className={s.modalSupplyButton}>Claim</button>
            <button className={s.modalSupplyButton}>Claim all</button>
            <button className={s.modalCloseButton} onClick={() => setIsOpenModal(false)}>
              close
            </button>
          </div>
        </div>
      </div>
    </ModalMarket>
  )
}
