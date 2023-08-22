import { FC, useState } from "react"
import { useSetState } from "react-use"
import { SupplyModalCard } from "./ModalMarket/Modal/SupplyModalCard"
import { WithdrawModalCard } from "./ModalMarket/Modal/WithdrawModalCard"
import s from "./css/supplies.module.css"
import Image from "next/image"

export const SuppliesCard: FC = () => {
  const dataBalance = [
    { 1: "Balance", 2: "$62,375.08" },
    { 1: "APY", 2: "5.81%" },
    { 1: "Collateral", 2: "$60,000.02" },
  ]

  const [dataMarket] = useSetState([
    { 0: "svg/AGIX.svg", 1: "324.00", 2: "$2,324.00", 3: "21%", 4: "0.23%", 5: false, 6: "AGIX" },
    { 0: "svg/OCEAN.svg", 1: "324.00", 2: "$2,324.00", 3: "21%", 4: "0.23%", 5: true, 6: "OCEAN" },
    {
      0: "svg/NMR.svg",
      1: "68,000,22...",
      2: "$2,324.00",
      3: "21%",
      4: "0.23%",
      5: false,
      6: "NMR",
    },
  ])

  return (
    <div className={s.containerBlock}>
      <div className={s.containerHeader}>YOUR supplies</div>
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
  const [isOpenModalSupply, setIsOpenModalSupply] = useState(false)
  const [isOpenModalWithdraw, setIsOpenModalWithdraw] = useState(false)

  const [, setReadingId] = useState(0)

  const handleCloseAcceptModal = () => {
    setIsOpenModalSupply(false)
    setIsOpenModalWithdraw(false)
    setReadingId(1)
  }

  return (
    <div>
      <SupplyModalCard
        handleCloseAcceptModal={handleCloseAcceptModal}
        setIsOpenModal={setIsOpenModalSupply}
        isOpenModal={isOpenModalSupply}
      />
      <WithdrawModalCard
        handleCloseAcceptModal={handleCloseAcceptModal}
        setIsOpenModal={setIsOpenModalWithdraw}
        isOpenModal={isOpenModalWithdraw}
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
            <Image src={"svg/close.svg"} alt="" />
          )}
        </div>
        <div className={s.ButtonWrapper}>
          <button onClick={(el) => setIsOpenModalWithdraw(!el)} className={s.WithdrawButton}>
            Withdraw
          </button>
          {/* <Button theme="red" radius="medium" size="smallMedium" type="button" uppercase={true} stretch>
            Withdraw
          </Button> */}
          <button onClick={(el) => setIsOpenModalSupply(!el)} className={s.SupplyButton}>
            Supply
          </button>
        </div>
      </div>
    </div>
  )
}
