import React, { FC, useCallback, useEffect, useState } from "react"
import { useToken, useTokens } from "../../../lib/hooks/useToken"
import { useDebounce } from "react-use"
import { toDecimal } from "../../../../views/Swap/ui"
import { TokenLogo } from "../../atoms/TokenLogo"
import { ModalSelectToken } from "../ModalSelectToken"
import { TokenAmountFieldProps, TokenSelectorProps } from "./types"
import {
  ShowMax,
  TokenAmountInput,
  TokenAmountFieldWrapper,
  TokenBalance,
  TokenSelectorBlock,
  TokenSelectorLabel,
  TokenUsdBalance,
} from "./style"

const TokenSelector: FC<TokenSelectorProps> = ({ address, onChangeAddress, tokens }) => {
  const token = useToken(address)
  const [modalIsOpened, setModalIsOpen] = useState(false)

  const closeModal = useCallback(() => {
    setModalIsOpen(false)
  }, [])

  const openModal = useCallback(() => {
    if (onChangeAddress) {
      setModalIsOpen(true)
    }
  }, [onChangeAddress])

  const onSelect = useCallback(
    (address: string) => {
      setModalIsOpen(false)
      if (onChangeAddress) {
        onChangeAddress(address)
      }
    },
    [onChangeAddress],
  )

  return (
    <TokenSelectorBlock onClick={openModal}>
      {token ? (
        <>
          <TokenLogo size={20} symbol={token.symbol} />
          <TokenSelectorLabel>{token.symbol}</TokenSelectorLabel>
        </>
      ) : (
        <TokenSelectorLabel>Select token</TokenSelectorLabel>
      )}
      <ModalSelectToken
        isOpened={modalIsOpened}
        onClose={closeModal}
        onSelect={onSelect}
        tokens={tokens}
      />
    </TokenSelectorBlock>
  )
}

export const TokenAmountField: FC<TokenAmountFieldProps> = (props) => {
  const {
    items,
    address,
    amount,
    onChangeAmount,
    onChangeAddress,
    showMax,
    balance,
    max,
    usdPrice,
  } = props
  const selectedToken = useToken(address)
  const [inputValue, setInputValue] = useState("")
  const tokens = useTokens(items)

  useDebounce(
    () => {
      if (!inputValue) {
        onChangeAmount(undefined)
        return
      }
      if (!inputValue.endsWith(".") && !inputValue.startsWith(".") && selectedToken) {
        const formattedOldValue = toDecimal(amount || BigInt(0), selectedToken.decimals, 3)
          .toString()
          .replace(",", ".")
        if (formattedOldValue !== inputValue) {
          onChangeAmount(BigInt(parseFloat(inputValue) * 10 ** selectedToken.decimals))
        }
      }
    },
    500,
    [inputValue],
  )

  useEffect(() => {
    if (amount !== undefined && !!selectedToken) {
      setInputValue(toDecimal(amount, selectedToken.decimals, 3).toString().replace(",", "."))
    } else {
      setInputValue("")
    }
  }, [amount, selectedToken])

  const setMax = useCallback(() => {
    if (!!selectedToken && balance !== undefined) {
      setInputValue(toDecimal(balance, selectedToken.decimals, 3).toString().replace(",", "."))
    }
  }, [balance, selectedToken])

  const changeValue = useCallback((e) => {
    if (e.target.value.match(/^[0-9]*\.?[0-9]*$/)) {
      setInputValue(e.target.value)
    }
  }, [])

  return (
    <TokenAmountFieldWrapper className={max !== undefined && max < (amount || 0) ? "error" : ""}>
      <div>
        <TokenAmountInput placeholder="0.0" value={inputValue} onChange={changeValue} />
        {amount && usdPrice && selectedToken ? (
          <TokenUsdBalance>
            ${toDecimal(amount, selectedToken.decimals, 2) * usdPrice}
          </TokenUsdBalance>
        ) : null}
      </div>
      <TokenSelector address={address} tokens={tokens} onChangeAddress={onChangeAddress} />
      {selectedToken && balance !== undefined ? (
        <TokenBalance>
          Balance: {toDecimal(balance, selectedToken.decimals, 3)} {selectedToken.symbol}
          {showMax && <ShowMax onClick={setMax}>Max</ShowMax>}
        </TokenBalance>
      ) : null}
    </TokenAmountFieldWrapper>
  )
}
