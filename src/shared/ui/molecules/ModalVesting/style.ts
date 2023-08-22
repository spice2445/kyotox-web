import { styled } from "../../../lib/styles"

export const Icon = styled("div", {
  display: "flex",
  justifyContent: "center",

  marginBottom: 24,
})

export const InnerWrapper = styled("div", {
  width: "100%",
})

export const Title = styled("h3", {
  textAlign: "center",

  marginBottom: 9,
})

export const Wallet = styled("p", {
  textAlign: "center",
  color: "$emerald",

  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.1em",

  marginBottom: 20,
})

export const WrapperInfo = styled("div", {
  backgroundColor: "$grey",
  borderRadius: "9px",

  padding: "12px 16px",

  marginBottom: 24,
})

export const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",
})

export const RowTitle = styled("div", {
  fontWeight: 500,
  fontSize: "$smallLarge",
  lineHeight: "24px",
})

export const RowValue = styled("div", {
  fontWeight: 700,
  fontSize: "$smallLarge",
  lineHeight: "24px",

  variants: {
    red: {
      true: {
        color: "$red",
      },
    },
  },
})

export const WrapperButton = styled("div", {
  display: "grid",
  gap: "12px",
})
