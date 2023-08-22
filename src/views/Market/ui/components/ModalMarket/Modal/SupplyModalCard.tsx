import { FC, useState } from "react"
import { ModalMarket } from ".."
import s from "../../css/supply.module.css"
import Image from "next/image"

export const SupplyModalCard: FC<{
  handleCloseAcceptModal: () => void
  setIsOpenModal: (value: boolean) => void
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
        <div className={s.modalCard}>
          <Image className={s.modalImg} src="svg/AGIX.svg" alt="AGIX" />
        </div>
        <div className={s.modalTitle}>supply</div>
        <div className={s.modalTitleTwo}>AGIX</div>
        <div>
          <div className={s.modalTextFirstBlock}>
            Amount of <strong>AGIX</strong> token
          </div>
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
          <div className={s.modalTextTwoBlock}>Transaction overview</div>
          <div className={s.modalBlockTwo}>
            <div>
              <div className={s.modalBlockWrapper}>
                <div className={s.modalBlockTwoText}>Supply APY:</div>
                <div className={s.modalBlockTwoPro}>1.83%</div>
              </div>
              <div className={s.modalBlockWrapper}>
                <div className={s.modalBlockTwoText}>Collateralization:</div>
                <div className={s.modalBlockEnabled}>Enabled</div>
              </div>
            </div>
          </div>
          <div className={s.modalGasBlock}>
            <Image className={s.modalGasImg} src="svg/gas.svg" alt="gas" />
            <div>Gas fee: $18.16</div>
          </div>
          <button className={s.modalSupplyButton}>Supply agix</button>
          <button className={s.modalCloseButton} onClick={() => setIsOpenModal(false)}>
            close
          </button>
        </div>
      </div>
    </ModalMarket>
  )
}
