import { FC, useState } from "react"
import { ModalMarket } from ".."
import s from "../../css/modalBorrow.module.css"
import Image from "next/image"

export const BorrowModalCard: FC<{
  handleCloseAcceptModal: () => void
  setIsOpenModal: (arg: boolean) => void
  isOpenModal: boolean
}> = ({ handleCloseAcceptModal, setIsOpenModal, isOpenModal }) => {
  const [inputValue, setInputValue] = useState(346.08)

  return (
    <ModalMarket
      isOpened={isOpenModal}
      handleClose={handleCloseAcceptModal}
      actions={true}
      actionsDirection="row"
      size="large"
    >
      <div className={s.ModalWrapper}>
        <div className={s.modalCard}>
          <Image className={s.modalImg} src="svg/AGIX.svg" alt="AGIX" />
        </div>
        <div className={s.modalTitle}>Borrow</div>
        <div className={s.modalTitleTwo}>AGIX</div>
        <div>
          <div className={s.modalTextFirstBlock}>
            Amount of <strong> AGIX </strong> token
            <Image className={s.modalImgAlert} src="svg/alert.svg" alt="alert" />
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
                <div className={s.modalBlockTwoText}>Health factor</div>
                <div className={s.modalBlockTwoPro}>
                  <Image className={s.modalInfinityBlock} src="svg/inf.svg" alt="infinity" />
                  <Image src="svg/arrowRight.svg" alt="arrow" />
                  <div className={s.modalBlockOverText}>1.03</div>
                </div>
              </div>
              <div className={s.modalBlockWrapper}>
                <div className={s.modalBlockTwoText}></div>
                <div className={s.modalBlockEnabled}>{"Liquidation at <1.0"}</div>
              </div>
            </div>
          </div>
          <div className={s.modalGasBlock}>
            <Image className={s.modalGasImg} src="svg/gas.svg" alt="gas" />
            <div>
              Gas fee: $18.16
              <Image className={s.modalImgAlert} src="svg/alert.svg" alt="alert" />
            </div>
          </div>
          <div className={s.modalAttentionWrapper}>
            <div className={s.modalAttention}>Attention</div>
            <div className={s.modalAttentionTextTwo}>
              Parameter changes via governance can alter
            </div>
            <div className={s.modalAttentionTextTwo}>your account health factor and risk of</div>
            <div className={s.modalAttentionTextTwo}>liquidation.</div>
          </div>
          <button className={s.modalSupplyButton}>Borrow</button>
          <button className={s.modalCloseButton} onClick={() => setIsOpenModal(false)}>
            close
          </button>
        </div>
      </div>
    </ModalMarket>
  )
}
