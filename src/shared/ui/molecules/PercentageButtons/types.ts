export interface PercentageButtonsProps {
  maxAmount: bigint
  currentAmount?: bigint
  setAmount: (value: bigint) => void
  isLittle?: boolean
}
