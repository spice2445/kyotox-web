import { FC, useContext } from "react"

import { tokensInfo } from "../../../../shared/lib/constants/data"
import { Block, MoreButton, TokensHeader } from "../../../../shared/ui/atoms"
import { Collapse, CollapseItem } from "../../../../shared/ui/molecules"

import { Web3Context } from "../../../../context/web3"
import * as S from "./style"

export const FarmingPositions: FC = () => {
  const { tokensPair } = useContext<any>(Web3Context)
  return (
    <Block>
      <S.Title>all your Open Farming positions</S.Title>
      <S.WrapperInfoFarm>
        <Collapse type="multiple">
          {tokensInfo.map((token: any) => (
            <CollapseItem
              isDefault
              key={token.id}
              value={token.value}
              header={
                <S.InnerWrapperButton>
                  <S.FarmHeaderTitle>{token.title}</S.FarmHeaderTitle>
                  <S.FarmHeaderAmountToken>{token.amountGpt} GPT</S.FarmHeaderAmountToken>
                </S.InnerWrapperButton>
              }
            >
              <S.WrapperContent>
                <S.AmountToken>{token.amountDatum} DATUM</S.AmountToken>
                <S.AmountToken>{token.amountBusd} BUSD</S.AmountToken>
              </S.WrapperContent>
            </CollapseItem>
          ))}
        </Collapse>
      </S.WrapperInfoFarm>
      <Collapse type="single" collapsible>
        {tokensPair?.map((pair: any) => (
          <CollapseItem
            key={pair.id}
            value={pair.id}
            header={<TokensHeader firstToken={pair.firstToken} secondToken={pair.secondToken} />}
          >
            <S.WrapperInfoContent>
              <S.Row>
                <S.Text>Total dollar value:</S.Text>
                <S.Value>$12.842</S.Value>
              </S.Row>
              <S.Row>
                <S.Text>Percentage of total LP pool:</S.Text>
                <S.Value>+231%</S.Value>
              </S.Row>
              <S.Row>
                <S.Text>Earnings per day:</S.Text>
                <S.Value isRed>312 LAI</S.Value>
              </S.Row>
            </S.WrapperInfoContent>
          </CollapseItem>
        ))}
      </Collapse>
      <S.WrapperMoreButton>
        <MoreButton text="More" />
      </S.WrapperMoreButton>
    </Block>
  )
}
