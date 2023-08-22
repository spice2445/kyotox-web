import { styled } from "../../../lib/styles"

export const WarningMessageWrapper = styled("div", {
  backgroundColor: "$overLightEmerald",
  borderRadius: "8px",
  border: "1px solid $emerald",
  padding: "18px 28px",
  display: "block",
  marginBottom: 16,
  zIndex: "$warningMessage",

  fontSize: "$small",
  lineHeight: "17px",
  textAlign: "center",
  position: "relative",

  transition: "$long",
})

export const WrapperClose = styled("button", {
  position: "absolute",
  top: "10px",
  right: "12px",

  padding: 0,

  background: "inherit",
})
