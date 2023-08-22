import { styled } from "../../../lib/styles"

export const WrapperInput = styled("div", {
  border: "1px solid $accent",
  borderRadius: "8px",
  padding: "8px 12px",

  variants: {
    type: {
      error: { border: "solid 1px $red" },
    },
  },
})

export const Input = styled("input", {
  width: "70%",
  padding: 0,
  left: "8px",

  color: "$black",
  fontSize: "$titleMedium",
  lineHeight: "24px",

  "&:placeholder": {
    color: "$emerald",
    fontSize: "$titleSmall",
    lineHeight: "24px",
  },
})

export const InputValue = styled("div", {
  position: "absolute",
  top: "39px",
  left: "11px",
  display: "flex",
  flexWrap: "wrap",
  color: "#96B1A4x",
  width: "128px",
  height: "16px",

  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "10px",
  lineHeight: "24px",
})

export const InnerWrapper = styled("div", {
  width: "100%",
  lineHeight: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
})

export const Token = styled("div", {
  display: "flex",
  alignItems: "center",
})

export const Balance = styled("div", {
  color: "$emerald",
  fontSize: "$little",
  lineHeight: "24px",
  textAlign: "right",
})

export const WrapperImage = styled("div", {
  marginRight: "4px",
  display: "flex",
  alignItems: "center",

  "& > svg": {
    width: 20,
    height: 20,
  },
})
