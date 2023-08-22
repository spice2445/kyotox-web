import { useSetState } from "react-use"
import s from "./css/borrows.module.css"
import { FC, useState } from "react"
import { BorrowModalCard } from "./ModalMarket/Modal/BorrowModalCard"
import Image from "next/image"

export const BorrowsCard: FC = () => {
  const dataBalance = [
    { 1: "Balance", 2: "$62,375.08" },
    { 1: "APY", 2: "5.81%" },
    { 1: "Borrow power used", 2: "$60,000.02" },
  ]

  const [dataMarket] = useSetState([
    {
      0: "svg/AGIX.svg",
      1: "324.00",
      2: "$2,324.00",
      3: "21%",
      4: "0.23%",
      5: "Variable",
      6: "AGIX",
    },
    {
      0: "svg/OCEAN.svg",
      1: "324.00",
      2: "$2,324.00",
      3: "21%",
      4: "0.23%",
      5: "Stable",
      6: "OCEAN",
    },
    { 0: "svg/NMR.svg", 1: "324.00", 2: "$2,324.00", 3: "21%", 4: "0.23%", 5: "Stable", 6: "NMR" },
  ])

  return (
    <div className={s.containerBlock}>
      <div className={s.containerHeader}>Your borrows</div>
      <div className={s.containerBalance}>
        {dataBalance?.map((el: any) => {
          return (
            <div key={el[1]} className={s.containerBlockBalance}>
              <div className={s.elementBlockBalance}>{el[1]}</div>
              <div className={s.elementBlockBalanceTwo}>{el[2]}</div>
            </div>
          )
        })}
      </div>
      <div className={s.containerListWrapper}>
        <div className={s.ListTop}>
          <div>Assets</div>
          <div>Balance</div>
          <div>APY</div>
          <div>APY type</div>
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
  const [isOpenModalBorrow, setIsOpenModalBorrow] = useState(false)

  const [, setReadingId] = useState(0)

  const handleCloseAcceptModal = () => {
    setIsOpenModalBorrow(false)
    setReadingId(1)
  }
  return (
    <div>
      <BorrowModalCard
        handleCloseAcceptModal={handleCloseAcceptModal}
        setIsOpenModal={setIsOpenModalBorrow}
        isOpenModal={isOpenModalBorrow}
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
          <select value={el[5]} className={s.SelectChange}>
            <optgroup>
              <option>{el[5]}</option>
            </optgroup>
          </select>
        </div>
        <div className={s.ButtonWrapper}>
          <button className={s.WithdrawButton}>Repay</button>
          <button onClick={(el) => setIsOpenModalBorrow(!el)} className={s.SupplyButton}>
            Borrow
          </button>
        </div>
      </div>
    </div>
  )
}
