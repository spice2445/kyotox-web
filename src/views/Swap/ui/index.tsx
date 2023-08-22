import React, { FC, useCallback, useEffect, useMemo, useState } from "react"
import { NewsletterSubscription } from "../../../shared/ui/molecules/NewsletterSubscription"
import s from "./swap.module.css"
import { tokenList } from "../../../context/web3/tokens"
import { useWeb3Context } from "../../../shared/lib/hooks/useWeb3Context"
import { useRouter } from "../../../shared/lib/hooks/useRouter"
import { Token } from "../../../context/web3/type"
import { useToken } from "../../../shared/lib/hooks/useToken"
import { useBalance } from "../../../shared/lib/hooks/useBalance"
import { useUsdPrice } from "../../../shared/lib/hooks/useUsdPrice"
import { useAllowance } from "../../../shared/lib/hooks/useAllowance"
import { ApproveButton, SwapButton } from "../../../shared/ui/molecules"
import Image from "next/image"
import { Loader } from "../../../shared/ui/atoms"
import { useSwapAmounts } from "../../../shared/lib/hooks/useSwapAmounts"
import { usePair } from "../../../shared/lib/hooks/usePair"
import Contract from "web3-eth-contract"
import { TokenAmountField } from "../../../shared/ui/molecules/TokenAmountField"

export const Swap: FC = () => {
  return (
    <>
      <SwapMainComponent />
      <NewsletterSubscription />
    </>
  )
}

type SwapRateProps = {
  token0?: Token
  token1?: Token
  pair: Contract | undefined | null
  amount0?: bigint
  amount1?: bigint
  loading: boolean
  usdPrice1?: number
}

type SwapActionProps = {
  token0?: Token
  token1?: Token
  pair: Contract | undefined | null
  amount0?: bigint
  amount1?: bigint
  balance0?: bigint
  onSuccessSwap: () => void
}

export const toDecimal = (value: bigint, decimals: number, precision: number): number => {
  const power = Math.pow(10, precision || 0)
  return Math.floor((Number(value) / 10 ** decimals) * power) / power
}

const SwapRate: FC<SwapRateProps> = ({
  token0,
  token1,
  amount0,
  amount1,
  loading,
  pair,
  usdPrice1,
}) => {
  const [rate, setRate] = useState<bigint>()
  const router = useRouter()
  const [error, setError] = useState<Error>()
  const [detailsIsOpen, setDetailsIsOpen] = useState(false)

  useEffect(() => {
    if (!router || !pair || !token0 || !token1) {
      return
    }
    if (amount0 && amount1) {
      setRate(
        (amount1 * BigInt(token0.decimals) * BigInt(10 ** 4)) / (amount0 * BigInt(token1.decimals)),
      )
    } else {
      router.methods
        .getAmountsOut(BigInt(10 ** token0.decimals), [token0.address, token1.address])
        .call()
        .then((result: bigint) => {
          setRate(
            (BigInt(result[1]) * BigInt(10 ** token0.decimals) * BigInt(10 ** 4)) /
              (BigInt(result[0]) * BigInt(10 ** token1.decimals)),
          )
          setError(undefined)
        })
        .catch((e) => setError(e))
    }
  }, [router, amount0, amount1, token0, token1, pair])

  if (pair === null || error) {
    return null
  }

  if (loading || !rate || pair === undefined || !token0 || !token1) {
    return (
      <div className={s.swapRate}>
        <Loader size={"small"} theme={"dark"} />
      </div>
    )
  }

  const rateValue = toDecimal(rate || BigInt(0), 4, 3)
  const rateUsd = usdPrice1 ? rateValue * usdPrice1 : 0

  return (
    <>
      <div className={s.swapRateWrapper}>
        <div className={s.swapRate}>
          <Image src="svg/gas.svg" alt={""} width={22} height={22} />
          <div className={s.swapValueCount}>
            1 {token0.symbol} = {`${toDecimal(rate || BigInt(0), 4, 3)} ${token1.symbol}`}{" "}
            {rateUsd ? <span className={s.swapRateUsdValue}>(${rateUsd})</span> : ""}
          </div>
        </div>
        <div
          className={s.chevron + " " + (!detailsIsOpen ? s.bottom : "")}
          onClick={() => setDetailsIsOpen(!detailsIsOpen)}
        />
      </div>
      <SwapOutput isOpen={detailsIsOpen} amount1={amount1 || BigInt(0)} token1={token1} />
    </>
  )
}

const SwapAction: FC<SwapActionProps> = ({
  amount0,
  amount1,
  token0,
  token1,
  pair,
  balance0,
  onSuccessSwap,
}) => {
  const router = useRouter()
  const { allowance, loading: allowanceLoading } = useAllowance(
    token0?.address,
    router?.options.address,
  )

  if (!token0 || !token1) {
    return (
      <button className={s.swapWrapperButton} disabled>
        Select tokens
      </button>
    )
  } else if (balance0 === undefined || !router) {
    return null
  } else if (pair === null) {
    return (
      <button className={s.swapWrapperButton} disabled>
        No pool available
      </button>
    )
  } else if (!amount0 || !amount1) {
    return (
      <button className={s.swapWrapperButton} disabled>
        Enter amounts
      </button>
    )
  } else if (allowanceLoading || allowance === undefined) {
    return (
      <button className={s.swapWrapperButton} disabled>
        Checking allowance...
      </button>
    )
  } else if (amount0 > balance0) {
    return (
      <button className={s.swapWrapperButton} disabled>
        Insufficient amount
      </button>
    )
  } else if (allowance < amount0) {
    return <ApproveButton token={token0} spender={router.options.address} amount={amount0} />
  }
  return (
    <SwapButton
      token0={token0}
      token1={token1}
      amount0={amount0}
      amount1={amount1}
      onSuccess={onSuccessSwap}
    />
  )
}

const SwapOutput: FC<{ isOpen: boolean; amount1: bigint; token1: Token }> = ({
  isOpen,
  amount1,
  token1,
}) => {
  return (
    <div className={s.swapOutputWrapper + " " + (isOpen ? s.isOpen : "")}>
      <div className={s.swapOutput}>
        <div className={s.swapOutputRow}>
          <div>Expected output</div>
          <div className={s.swapOutputValue}>
            {toDecimal(amount1, token1.decimals, 2)} {token1.symbol}
          </div>
        </div>
        <div className={s.swapOutputRow}>
          <div>Minimal output</div>
          <div className={s.swapOutputValue}>
            {toDecimal((amount1 * BigInt(995)) / BigInt(1000), token1.decimals, 3)} {token1.symbol}
          </div>
        </div>
      </div>
    </div>
  )
}

const SwapForm: FC = () => {
  const { chainId } = useWeb3Context()

  useEffect(() => {
    setAddress0(tokenList[chainId][0])
    setAddress1(tokenList[chainId][1])
  }, [chainId])

  const [address0, setAddress0] = useState<string>()
  const [address1, setAddress1] = useState<string>()

  const changeAddress0 = useCallback(
    (address: string) => {
      if (address === address1) {
        setAddress1(undefined)
      }
      setAddress0(address)
    },
    [address1],
  )

  const changeAddress1 = useCallback(
    (address: string) => {
      if (address === address0) {
        setAddress0(undefined)
      }
      setAddress1(address)
    },
    [address0],
  )

  const { balance: balance0 } = useBalance(address0)
  const { balance: balance1 } = useBalance(address1)

  const token0 = useToken(address0)
  const token1 = useToken(address1)

  const pair = usePair(token0?.address, token1?.address)

  const {
    amount0,
    amount1,
    revert: revertAmounts,
    reset: resetAmounts,
    changeInputAmount,
    changeOutputAmount,
    loading: amountsIsLoading,
    changePair,
  } = useSwapAmounts(token0, token1)

  const { price: usdPrice0 } = useUsdPrice(address0)
  const { price: usdPrice1 } = useUsdPrice(address1)

  const tokens = useMemo(() => tokenList[chainId], [chainId])

  useEffect(() => {
    changePair(pair)
  }, [changePair, pair])

  const changeDirection = useCallback(() => {
    setAddress0(address1)
    setAddress1(address0)
    revertAmounts()
  }, [address0, address1, revertAmounts])

  return (
    <div className={s.swapMainWrapper}>
      <div className={s.swapLogo}>Swap</div>
      <TokenAmountField
        items={tokens}
        address={address0}
        amount={amount0}
        usdPrice={usdPrice0}
        onChangeAmount={changeInputAmount}
        onChangeAddress={changeAddress0}
        showMax
        balance={balance0}
        max={balance0}
      />
      <div onClick={changeDirection} className={s.swapArrowDownChange} />
      <TokenAmountField
        items={tokens}
        address={address1}
        amount={amount1}
        usdPrice={usdPrice1}
        onChangeAmount={changeOutputAmount}
        onChangeAddress={changeAddress1}
        balance={balance1}
      />
      <SwapRate
        token0={token0}
        token1={token1}
        amount0={amount0}
        amount1={amount1}
        pair={pair}
        loading={amountsIsLoading}
        usdPrice1={usdPrice1}
      />
      <SwapAction
        amount0={amount0}
        amount1={amount1}
        token0={token0}
        token1={token1}
        pair={pair}
        balance0={balance0}
        onSuccessSwap={resetAmounts}
      />
    </div>
  )
}

const SwapMainComponent = () => {
  const { isSupportedChain, isConnected, isLoading } = useWeb3Context()

  if (isLoading) {
    return (
      <div className={s.swapMainWrapper}>
        <div className={s.swapMainWrapperLoading}>
          <Loader theme={"dark"} />
        </div>
      </div>
    )
  } else if (!isConnected) {
    return (
      <div className={s.swapMainWrapper}>
        <button className={s.swapWrapperButton} disabled>
          Connect wallet
        </button>
      </div>
    )
  } else if (!isSupportedChain) {
    return (
      <div className={s.swapMainWrapper}>
        <button className={s.swapWrapperButton} disabled>
          Wrong network
        </button>
      </div>
    )
  }

  return <SwapForm />
}
