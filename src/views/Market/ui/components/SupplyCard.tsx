import { FC, useState } from "react"
import { useSetState } from "react-use"
import { SupplyModalCard } from "./ModalMarket/Modal/SupplyModalCard"
import s from "./css/supply.module.css"
import Image from "next/image"

export const SupplyCard: FC = () => {
  const [dataMarket] = useSetState([
    { 0: "svg/AGIX.svg", 1: "324.00", 2: "$2,324.00", 3: "21%", 4: "0.23%", 5: false, 6: "AGIX" },
    { 0: "svg/OCEAN.svg", 1: "324.00", 2: "$2,324.00", 3: "21%", 4: "0.23%", 5: true, 6: "OCEAN" },
    { 0: "svg/NMR.svg", 1: "324.00", 2: "$2,324.00", 3: "21%", 4: "0.23%", 5: false, 6: "NMR" },
  ])

  return (
    <div className={s.containerBlock}>
      <div className={s.containerHeader}>Assets to supply</div>
      <div className={s.containerListWrapper}>
        <div className={s.ListTop}>
          <div className={s.listAssets}>Assets</div>
          <div>Balance</div>
          <div>APY</div>
          <div>Collateral</div>
        </div>
        <div>
          {dataMarket.map((el) => {
            return <ContainerCoins key={el[0]} el={el} />
          })}
        </div>
      </div>
    </div>
  )
}

const ContainerCoins = ({ el }: any) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [, setReadingId] = useState(0)

  const handleCloseAcceptModal = () => {
    setIsOpenModal(false)
    setReadingId(1)
  }

  return (
    <div>
      <SupplyModalCard
        handleCloseAcceptModal={handleCloseAcceptModal}
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
      />

      <div className={s.ContainerCoinsWrapper} key={el[1]}>
        <div className={s.CoinsIMGWrapper}>
          <Image src={el[0]} alt="1" />
          <div className={s.CoinsText}>{el[6]}</div>
        </div>
        <div className={s.balanceWrappersBlock}>
          <div className={s.firstCoins}>{el[1]}</div>
          <div className={s.secondCoins}>{el[2]}</div>
        </div>
        <div className={s.balanceWrappersBlock}>
          <div className={s.firstCoins}>{el[3]}</div>
          <div className={s.secondCoins}>{el[4]}</div>
        </div>
        <div className={s.CollateralBlock}>
          {el[5] ? (
            <Image src={"svg/BlackOk.svg"} alt="" />
          ) : (
            <Image src={"svg/GrayClothe.svg"} alt="" />
          )}
        </div>
        <div className={s.ButtonWrapper}>
          <button onClick={(el) => setIsOpenModal(!el)} className={s.WithdrawButton}>
            supply
          </button>
          <button className={s.SupplyButton}>details</button>
        </div>
      </div>
    </div>
  )
}
