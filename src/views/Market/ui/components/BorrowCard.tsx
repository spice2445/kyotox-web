import { useSetState } from "react-use"
import s from "./css/borrow.module.css"
import Image from "next/image"
import { FC } from "react"

export const BorrowCard: FC = () => {
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
      <div className={s.containerHeader}>Assets to borrow</div>
      <div className={s.containerListWrapper}>
        <div className={s.ListTop}>
          <div className={s.conAssets}>Assets</div>
          <div className={s.conBalance}>Balance</div>
          <div className={s.APYcontainerVar}>
            <div className={s.APYcontainerVarApy}>APY</div>
            <div>variable</div>
          </div>
          <div className={s.APYcontainerStab}>APY stable</div>
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
  return (
    <div>
      <div className={s.ContainerCoinsWrapper} key={el[1]}>
        <div className={s.CoinsIMGWrapper}>
          <Image src={el[0]} alt="1" />
          <div className={s.CoinsText}>{el[6]}</div>
        </div>
        <div className={s.balanceWrappersBlock}>
          <div className={s.firstCoins}>{el[1]}</div>
          <div className={s.secondCoins}>{el[2]}</div>
        </div>
        <div className={s.apiWrappersBlock}>
          <div className={s.firstCoins}>{el[3]}</div>
          <div className={s.secondCoins}>{el[4]}</div>
        </div>
        <div className={s.apiStableWrappersBlock}>
          <div className={s.firstCoins}>{el[3]}</div>
          <div className={s.secondCoins}>{el[4]}</div>
        </div>
        <div className={s.ButtonWrapper}>
          <button className={s.WithdrawButton}>Repay</button>
          <button className={s.SupplyButton}>Borrow</button>
        </div>
      </div>
    </div>
  )
}
