import { styled } from "../../../lib/styles"

export const TokenSelectorBlock = styled("div", {
  position: "absolute",
  right: 4,
  top: 14,
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  width: 135,
  height: 24,
  cursor: "pointer",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "24px",
})

export const TokenSelectorLabel = styled("div", {
  marginLeft: 5,
})

export const TokenAmountFieldWrapper = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 71,
  border: "1px solid #E7ECE9",
  borderRadius: 8,
  width: "100%",

  "&.error": {
    borderColor: "#C51428",
  },
})

export const TokenAmountInput = styled("input", {
  position: "absolute",
  top: 10,
  left: 8,
  fontWeight: 400,
  width: 203,
  height: 31,
  fontStyle: "normal",
  fontSize: 28,
  lineHeight: "24px",
})

export const TokenBalance = styled("div", {
  position: "absolute",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  right: 8,
  bottom: 14,
  width: 194,
  height: 16,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 10,
  lineHeight: "24px",
  color: "#96B1A4",
})

export const TokenUsdBalance = styled("div", {
  position: "absolute",
  top: 39,
  left: 11,
  display: "flex",
  flexWrap: "wrap",
  color: "#96B1A4",
  width: 128,
  height: 16,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 10,
  lineHeight: "24px",
})

export const ShowMax = styled("div", {
  display: "inline-block",
  cursor: "pointer",
  color: "#C51428",
  paddingLeft: 2,
})
