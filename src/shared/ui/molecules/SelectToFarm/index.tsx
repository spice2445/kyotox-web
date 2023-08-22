import { FC, useCallback, useLayoutEffect, useState } from "react"

import { Button, Loader, TokensHeader } from "../../atoms"
import { Collapse, CollapseItem, WarningMessage } from "../../../../shared/ui/molecules"
import * as S from "./style"
import { SelectToFarmProps } from "./types"
import { toDecimal } from "../../../../views/Swap/ui"
import { Pair, pairsList } from "../../../../context/web3/tokens"
import { useToken } from "../../../lib/hooks/useToken"
import { useBalance } from "../../../lib/hooks/useBalance"
import { useWeb3Context } from "../../../lib/hooks/useWeb3Context"

const pancakeLink = "https://pancakeswap.finance/swap?outputCurrency="

const SelectPairItem: FC<{ pair: Pair; onSelect: (pair: Pair) => void }> = ({ pair, onSelect }) => {
  const token0 = useToken(pair.address0)
  const token1 = useToken(pair.address1)

  const { balance: balance0 } = useBalance(token0?.address)
  const { balance: balance1 } = useBalance(token1?.address)

  const continueClick = useCallback(() => {
    onSelect(pair)
  }, [onSelect, pair])

  if (!token0 || !token1 || balance0 === undefined || balance1 === undefined) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader size={"large"} theme={"dark"} />
      </div>
    )
  }

  return (
    <CollapseItem
      value={`${token0.symbol}/${token1.symbol}`}
      header={<TokensHeader firstToken={token0} secondToken={token1} isSelectToFarm />}
    >
      <S.DropdownWindow>
        <S.InfoBalance>
          <S.TokenBalance>
            <S.TextBalance>
              Your <S.TokenName>{token0.symbol}</S.TokenName> token balance:
            </S.TextBalance>
            <S.TotalBalance>{toDecimal(balance0, token0.decimals, 3)}</S.TotalBalance>
          </S.TokenBalance>
          <S.TokenBalance>
            <S.TextBalance>
              Your <S.TokenName>{token1.symbol}</S.TokenName> token balance:
            </S.TextBalance>
            <S.TotalBalance>{toDecimal(balance1, token1.decimals, 3)}</S.TotalBalance>
          </S.TokenBalance>
        </S.InfoBalance>
        <S.WrapperBuyButton>
          <Button stretch type="button" isLetterSpacing size="smallMedium">
            <a href={pancakeLink + token0.address} target="_blank" rel="noreferrer">
              <S.ButtonText>BUY {token0.symbol}</S.ButtonText>
            </a>
          </Button>
          <Button stretch type="button" isLetterSpacing size="smallMedium">
            <a href={pancakeLink + token1.address} target="_blank" rel="noreferrer">
              <S.ButtonText>BUY {token1.symbol}</S.ButtonText>
            </a>
          </Button>
        </S.WrapperBuyButton>
        <Button stretch theme="red" type="button" size="large" onClick={continueClick}>
          <S.ButtonText white bigText>
            CONTINUE
          </S.ButtonText>
        </Button>
      </S.DropdownWindow>
    </CollapseItem>
  )
}

export const SelectToFarm: FC<SelectToFarmProps> = ({ onSelect }) => {
  const [isClosed, setIsClose] = useState(false)
  const { chainId } = useWeb3Context()

  const handleClose = () => {
    setIsClose(true)
    localStorage.setItem("selectTokensPair", "false")
  }

  useLayoutEffect(() => {
    const Item = localStorage.getItem("selectTokensPair")
    if (Item === "false") {
      setIsClose(true)
    }
  }, [])

  return (
    <>
      <S.Title>Select what you want to farm</S.Title>
      <WarningMessage isClosed={isClosed} handleClose={handleClose}>
        <S.TextMessage>
          You will need to have each of the two tokens in your selected pair to farm trading fees.
          <br />
          <S.BoldText>Select a pair below.</S.BoldText>
        </S.TextMessage>
      </WarningMessage>
      <S.WrapperAccordion>
        <Collapse type="single" collapsible>
          {pairsList[chainId].map((pair, index) => (
            <SelectPairItem pair={pair} key={index} onSelect={onSelect} />
          ))}
        </Collapse>
      </S.WrapperAccordion>
    </>
  )
}
