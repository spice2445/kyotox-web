import { styled } from "../../../../shared/lib/styles"
import { StyledTriggerDefault } from "../../../../shared/ui/molecules/Collapse/style"

export const Title = styled("h2", {
  color: "$black",
  fontWeight: "$bold",
  fontSize: "$default",
  lineHeight: "22px",
  textAlign: "center",
  maxWidth: "60%",
  marginBottom: 24,
  textTransform: "uppercase",
})

export const WrapperInfoFarm = styled("div", {
  marginBottom: "24px",
  width: "100%",
})

export const WrapperMoreButton = styled("div", {
  marginTop: "16px",
  marginBottom: "14px",
})

export const WrapperContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "right",
})

export const AmountToken = styled("p", {
  fontSize: "$smallLarge",
  fontWeight: "$bold",
  color: "$emerald",
  lineHeight: "24px",
  marginLeft: "auto",
  marginRight: "21px",
})

export const WrapperInfoContent = styled("div", {
  backgroundColor: "$grey",
  padding: "12px 12px 14px 12px",
  borderRadius: "9px",
})

export const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  margin: "4px",
})

export const Text = styled("p", {
  fontSize: "$small",
  fontWeight: "$medium",
  lineHeight: "24px",
})

export const Value = styled("p", {
  fontSize: "$small",
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

export const InnerWrapperButton = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
})

export const FarmHeaderTitle = styled("div", {
  fontSize: "$smallLarge",
  fontWeight: "$medium",
  lineHeight: "24px",
})

export const FarmHeaderAmountToken = styled("div", {
  fontSize: "$smallLarge",
  fontWeight: "$bold",
  lineHeight: "24px",
  marginRight: "6px",

  transition: "$default",

  [`${StyledTriggerDefault}:hover &`]: {
    color: "$red",
    textDecoration: "underline",
  },
})
