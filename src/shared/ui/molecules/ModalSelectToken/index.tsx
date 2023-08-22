import React, { FC, useCallback, useMemo, useState } from "react"
import { Button, Modal } from "../../atoms"
import * as S from "./style"
import { TokenSearchImage, TokenSearchInput } from "./style"
import { ModalSelectTokenProps } from "./types"
import { TokenLogo } from "../../atoms/TokenLogo"
import { useBalance } from "../../../lib/hooks/useBalance"
import { toDecimal } from "../../../../views/Swap/ui"
import Image from "next/image"
import { Token } from "../../../../context/web3/type"

type TokenSelectorItemProps = { token: Token; onSelect: (address: string) => void }

const TokenSelectorItem: FC<TokenSelectorItemProps> = ({ token, onSelect }) => {
  const { balance } = useBalance(token.address)

  const onClick = useCallback(() => {
    onSelect(token.address)
  }, [token, onSelect])

  if (!token) {
    return null
  }
  return (
    <S.Item onClick={onClick}>
      <S.ItemLeft>
        <TokenLogo size={35} symbol={token.symbol} />
      </S.ItemLeft>
      <S.ItemCenter>
        <S.TokenName>{token.name}</S.TokenName>
        <S.TokenSymbol>{token.symbol}</S.TokenSymbol>
      </S.ItemCenter>
      <S.ItemRight>
        {balance !== undefined ? toDecimal(balance, token.decimals, 3) : null}
      </S.ItemRight>
    </S.Item>
  )
}

export const ModalSelectToken: FC<ModalSelectTokenProps> = ({
  isOpened,
  onClose,
  tokens,
  onSelect,
}) => {
  const [search, setSearch] = useState("")

  const changeSearch = useCallback((e) => {
    setSearch(e.target.value)
  }, [])

  const filteredTokens = useMemo(() => {
    const lowerSearch = search.toLowerCase()
    return !lowerSearch
      ? tokens
      : tokens.filter((token) => {
          return (
            token.name.toLowerCase().includes(lowerSearch) ||
            token.symbol.toLowerCase().includes(lowerSearch) ||
            token.address.toLowerCase().includes(lowerSearch)
          )
        })
  }, [tokens, search])

  return (
    <Modal
      isOpened={isOpened}
      handleClose={onClose}
      actions={
        <S.WrapperButton>
          <Button stretch size="large" isLetterSpacing onClick={onClose}>
            CLOSE
          </Button>
        </S.WrapperButton>
      }
    >
      <S.Title>Select token</S.Title>
      <S.TokenSearch>
        <TokenSearchImage>
          <Image src={"/images/search/search.svg"} alt={""} width={15} height={15} />
        </TokenSearchImage>
        <TokenSearchInput
          placeholder={"Search name or paste address"}
          onChange={changeSearch}
          value={search}
        />
      </S.TokenSearch>
      <S.ListWrapper>
        <S.List>
          {filteredTokens.map((token) => (
            <TokenSelectorItem onSelect={onSelect} key={token.address} token={token} />
          ))}
        </S.List>
      </S.ListWrapper>
    </Modal>
  )
}
