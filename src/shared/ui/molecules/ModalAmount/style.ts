import { styled } from "../../../lib/styles"

export const Title = styled("h3", {
  textAlign: "center",

  marginBottom: "16px",
})

export const WrapperInfoContent = styled("div", {
  backgroundColor: "$grey",
  padding: "12px 16px",
  borderRadius: "9px",
  width: "100%",

  marginBottom: "16px",
})

export const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  margin: "4px",
})

export const Text = styled("p", {
  fontSize: "$smallLarge",
  fontWeight: "$medium",
  lineHeight: "24px",
})

export const Value = styled("p", {
  fontSize: "$smallLarge",
  fontWeight: "$bold",
  lineHeight: "24px",

  variants: {
    isRed: {
      true: {
        color: "$red",
      },
    },
  },
})

export const WrapperLogo = styled("div", {
  display: "flex",
  justifyContent: "center",

  marginBottom: "24px",
})

export const WrapperPercentageButtons = styled("div", {
  marginBottom: "32px",
  marginTop: "16px",
})

export const WrapperButton = styled("div", {
  marginBottom: "12px",

  width: "100%",
})
