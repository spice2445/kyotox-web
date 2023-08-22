import { steps } from "../../../shared/lib/constants/data"
import { Block, Container, Loader } from "../../../shared/ui/atoms"
import {
  AmountOfTokens,
  ApproveAll,
  FarmingPositions,
  SelectToFarm,
  StepsProcess,
} from "../../../shared/ui/molecules"
import React, { FC, useCallback, useState } from "react"

import * as S from "./style"
import { usePair } from "../../../shared/lib/hooks/usePair"
import { Pair } from "../../../context/web3/tokens"
import { useWeb3Context } from "../../../shared/lib/hooks/useWeb3Context"

const FarmInit = () => {
  const { isSupportedChain, isConnected, isLoading } = useWeb3Context()

  if (isLoading) {
    return (
      <Block>
        <Loader size={"large"} theme={"dark"} />
      </Block>
    )
  } else if (!isConnected) {
    return <Block>Connect wallet</Block>
  } else if (!isSupportedChain) {
    return <Block>Wrong network</Block>
  }
  return null
}

const FarmSteps = () => {
  const [step, setStep] = useState(1)
  const [pair, setPair] = useState<Pair>()
  const [amounts, setAmounts] = useState<bigint[]>()

  const pairContract = usePair(pair?.address0, pair?.address1)

  const selectPair = useCallback((pair: Pair) => {
    setPair(pair)
    setStep(2)
  }, [])

  const submitAmount = useCallback(([amount0, amount1]: [amount0: bigint, amount1: bigint]) => {
    setAmounts([amount0, amount1])
    setStep(3)
  }, [])

  return (
    <>
      {step === 1 ? (
        <S.SubText>
          In Farming, you can deposit a pair of tokens in a liquidity pool to earn trading fees.
          Follow the steps below to begin.
        </S.SubText>
      ) : null}
      <Block>
        {step === 1 ? <SelectToFarm onSelect={selectPair} /> : null}
        {step === 2 ? (
          !!pair ? (
            <AmountOfTokens onSubmit={submitAmount} pair={pair} />
          ) : (
            <Loader size={"large"} theme={"dark"} />
          )
        ) : null}
        {step === 3 ? (
          pair && pairContract && amounts ? (
            <ApproveAll
              amounts={amounts}
              pair={pair}
              pairContract={pairContract}
              nextStep={setStep}
            />
          ) : (
            <Loader size={"large"} theme={"dark"} />
          )
        ) : null}
        {step === 4 ? (
          <FarmingPositions />
        ) : (
          <StepsProcess steps={steps} stepActive={step} setStep={setStep} />
        )}
      </Block>
    </>
  )
}

export const FarmAndEarnPage: FC = () => {
  const { isSupportedChain, isConnected, isLoading } = useWeb3Context()

  return (
    <Container>
      <S.WrapperPage>
        <S.Title>Farm & Earn</S.Title>
        {!isSupportedChain || isLoading || !isConnected ? <FarmInit /> : <FarmSteps />}
        <S.FooterBackground />
      </S.WrapperPage>
    </Container>
  )
}
