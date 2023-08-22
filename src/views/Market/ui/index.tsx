import { FC, useState } from "react"
import { NewsletterSubscription } from "../../../shared/ui/molecules/NewsletterSubscription"
import { BorrowCard } from "./components/BorrowCard"
import { BorrowsCard } from "./components/BorrowsCard"
import { ClaimModalCard } from "./components/ModalMarket/Modal/ClaimModalCard"
import { SuppliesCard } from "./components/SuppliesCard"
import { SupplyCard } from "./components/SupplyCard"
import s from "./market.module.css"

export const Market: FC = () => {
  const data = [
    { 1: "Net worth", 2: "$50.18K" },
    { 1: "Net APY", 2: "2.33%" },
    { 1: "Available rewards", 2: "$1.38K", 3: "#C51428", 4: "underline" },
  ]
  const [isOpenModalClaim, setIsOpenModalClaim] = useState(false)

  const [, setReadingId] = useState(0)

  const handleCloseAcceptModal = () => {
    setIsOpenModalClaim(false)
    setReadingId(1)
  }
  return (
    <div>
      <ClaimModalCard
        handleCloseAcceptModal={handleCloseAcceptModal}
        setIsOpenModal={setIsOpenModalClaim}
        isOpenModal={isOpenModalClaim}
      />
      <div className={s.marketWrapper}>
        <div className={s.title}>Money Market</div>
        <div className={s.rectangleWrapper}>
          {data.map((el) => (
            <div className={s.rectangle} key={el[1]}>
              <div className={s.rectangleEl}>{el[1]}</div>
              <div style={{ color: el[3], textDecoration: el[4] }} className={s.rectangleElTwo}>
                <div onClick={(el) => setIsOpenModalClaim(!el)}>{el[2]}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={s.containerWrapper}>
          <SuppliesCard />
          <BorrowsCard />
        </div>
        <div className={s.containerWrapper}>
          <SupplyCard />
          <BorrowCard />
        </div>
        <NewsletterSubscription />
      </div>
    </div>
  )
}
