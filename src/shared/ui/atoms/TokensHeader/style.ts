import { styled } from "../../../lib/styles"

export const InnerWrapperButton = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
})

export const WrapperNameTokens = styled("span", {
  fontWeight: "$bold",
})

export const textPair = styled("span", {
  fontWeight: "$regular",
})

export const TokenImages = styled("div", {
  position: "relative",
  marginRight: "28px",
  display: "flex",
})

export const TokenInfoWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
})

export const SecondTokenImg = styled("span", {
  position: "absolute",
  left: "18px",
  width: "28px",
})

export const FirstTokenImg = styled("div", {
  maxHeight: "28px",
  maxWidth: "28px",
})
