import React, { FC, useMemo, useState } from "react"

import { Done } from "../../../lib/icons"
import { Button } from "../../atoms"

import * as S from "./style"
import { ApproveAllProps, ApproveButtonProps } from "./types"
import { useApprove } from "../../../lib/hooks/useApprove"
import { useRouter } from "../../../lib/hooks/useRouter"
import { useAddLiquidity } from "../../../lib/hooks/useAddLiquidity"
import { useStake } from "../../../lib/hooks/useStake"
import { useBalance } from "../../../lib/hooks/useBalance"
import { useLiquidityFarm } from "../../../lib/hooks/useLiquidityFarm"
import { useToken } from "../../../lib/hooks/useToken"
import { useAllowance } from "../../../lib/hooks/useAllowance"
import { Pair } from "../../../../context/web3/tokens"

const ApproveButton = ({
  loading,
  address,
  spender,
  amount,
  done,
  onSuccess,
  stepNumber,
}: ApproveButtonProps) => {
  const token = useToken(address)

  const {
    approve,
    loading: approveLoading,
    error,
  } = useApprove(address, spender, amount, onSuccess)

  const theme = useMemo(() => {
    if (approveLoading || loading) {
      return "lightEmerald"
    } else if (done) {
      return "black"
    }
    return undefined
  }, [approveLoading, done, loading])

  if (!token) {
    return null
  }

  return (
    <Button
      onClick={approve}
      stretch
      type="button"
      size="large"
      leftPosition
      theme={theme}
      disabled={approveLoading || loading || done}
    >
      <S.InnerWrapper>
        <S.InfoTransition>
          <S.CountButton>{stepNumber}</S.CountButton>
          {!loading && !error && `APPROVE ${token.symbol}`}
          {loading && "LOADING..."}
          {error && "Ooops! Something went wrong!"}
        </S.InfoTransition>
        {done && <Done />}
      </S.InnerWrapper>
    </Button>
  )
}

const AddLiquidityButton: FC<{
  disabled: boolean
  pair: Pair
  amount0: bigint
  amount1: bigint
  done: boolean
  onSuccess: () => void
}> = ({ disabled, pair, amount0, amount1, done, onSuccess }) => {
  const { addLiquidity, error, loading } = useAddLiquidity(
    pair.address0,
    pair.address1,
    amount0,
    amount1,
    onSuccess,
  )

  const theme = useMemo(() => {
    if (loading) {
      return "lightEmerald"
    } else if (done) {
      return "black"
    }
    return undefined
  }, [done, loading])

  return (
    <Button
      onClick={addLiquidity}
      stretch
      type="button"
      size="large"
      theme={theme}
      leftPosition
      disabled={disabled}
    >
      <S.InnerWrapper>
        <S.InfoTransition>
          <S.CountButton>3</S.CountButton>
          {!loading && !error && "CONFIRM ADD LIQUIDITY"}
          {loading && "LOADING..."}
          {error && "Ooops! Something went wrong!"}
        </S.InfoTransition>
        {done && <Done />}
      </S.InnerWrapper>
    </Button>
  )
}

const StakeButton: FC<{
  amount?: bigint
  onSuccess: () => void
  done: boolean
  disabled: boolean
}> = ({ amount, onSuccess, done, disabled }) => {
  const { stake, error: errorStake, loading: loadingStake } = useStake(amount, onSuccess)

  const theme = useMemo(() => {
    if (loadingStake) {
      return "lightEmerald"
    } else if (done) {
      return "black"
    }
    return undefined
  }, [done, loadingStake])

  return (
    <Button
      theme={theme}
      disabled={disabled}
      onClick={stake}
      stretch
      type="button"
      size="large"
      leftPosition
    >
      <S.InnerWrapper>
        <S.InfoTransition>
          <S.CountButton>5</S.CountButton>
          {!loadingStake && !errorStake && "STAKE LIQUIDITY"}
          {loadingStake && "LOADING..."}
          {errorStake && "Ooops! Something went wrong!"}
        </S.InfoTransition>
        {done && <Done />}
      </S.InnerWrapper>
    </Button>
  )
}

export const ApproveAll: FC<ApproveAllProps> = ({ pair, pairContract, amounts }) => {
  const [amount0, amount1] = amounts

  const liquidityFarm = useLiquidityFarm()
  const router = useRouter()

  const [done, setDone] = useState<boolean>(false)
  const [liquidityDone, setLiquidityDone] = useState<boolean>(false)

  const { balance: balanceLp, fetchBalance: fetchBalanceLp } = useBalance(
    pairContract.options.address,
  )
  const {
    allowance: allowance0,
    fetch: fetchAllowance0,
    loading: loadingAllowance0,
  } = useAllowance(pair.address0, router.options.address)
  const {
    allowance: allowance1,
    fetch: fetchAllowance1,
    loading: loadingAllowance1,
  } = useAllowance(pair.address1, router.options.address)

  const {
    allowance: allowanceLp,
    fetch: fetchAllowanceLp,
    loading: loadingAllowanceLp,
  } = useAllowance(pairContract.options.address, liquidityFarm.options.address)

  const canAddLiquidity = useMemo(() => {
    return allowance0 && allowance0 >= amount0 && allowance1 && allowance1 >= amount1
  }, [allowance0, allowance1, amount0, amount1])
  const onSuccessLiquidity = () => {
    fetchBalanceLp()
    setLiquidityDone(true)
  }

  const canStake = useMemo(
    () => balanceLp && liquidityDone && allowanceLp && allowanceLp >= balanceLp,
    [liquidityDone, allowanceLp, balanceLp],
  )

  return (
    <>
      <S.Title>approve all transactions to proceed</S.Title>
      <S.ListApprove>
        <ApproveButton
          done={liquidityDone || (!!allowance0 && allowance0 >= amount0)}
          loading={loadingAllowance0}
          onSuccess={fetchAllowance0}
          stepNumber={1}
          address={pair.address0}
          spender={router.options.address}
          amount={amount0}
        />
        <ApproveButton
          done={liquidityDone || (!!allowance1 && allowance1 >= amount1)}
          loading={loadingAllowance1}
          onSuccess={fetchAllowance1}
          stepNumber={2}
          address={pair.address1}
          spender={router.options.address}
          amount={amount1}
        />
        <AddLiquidityButton
          disabled={!canAddLiquidity}
          pair={pair}
          amount0={amount0}
          amount1={amount1}
          done={liquidityDone}
          onSuccess={onSuccessLiquidity}
        />
        <ApproveButton
          spender={liquidityFarm.options.address}
          done={!!allowanceLp && !!balanceLp && liquidityDone && allowanceLp >= balanceLp}
          loading={loadingAllowanceLp}
          address={pairContract.options.address}
          amount={balanceLp || BigInt(0)}
          onSuccess={fetchAllowanceLp}
          stepNumber={4}
        />

        <StakeButton
          done={done}
          onSuccess={() => setDone(true)}
          disabled={!canStake}
          amount={balanceLp}
        />
      </S.ListApprove>
    </>
  )
}
