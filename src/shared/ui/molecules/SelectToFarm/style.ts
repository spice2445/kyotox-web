import { Root } from "@radix-ui/react-accordion"

import { styled } from "../../../lib/styles"

export const Collapse = styled(Root, {
  width: "100%",
})

export const TextMessage = styled("p", {})

export const BoldText = styled("span", {
  fontWeight: "$bold",
})

export const Title = styled("h2", {
  color: "$black",
  fontWeight: "$bold",
  fontSize: "$default",
  lineHeight: "22px",
  textAlign: "center",
  maxWidth: "70%",
  marginBottom: 16,
  textTransform: "uppercase",
})

export const WrapperAccordion = styled("div", {
  marginBottom: "32px",
  width: "100%",
})

export const DropdownWindow = styled("div", {
  backgroundColor: "$grey",
  padding: "16px 13px",
  borderRadius: "8px",
  width: "100%",

  overflow: "hidden",
})

export const InfoBalance = styled("div", {
  marginBottom: "14px",
})

export const TokenBalance = styled("div", {
  fontSize: "$smallMedium",
  display: "flex",
  justifyContent: "space-between",
})

export const TextBalance = styled("p", {
  variants: {
    isActive: {
      true: {
        color: "$white",
      },
    },
  },
})

export const TokenName = styled("span", {
  fontWeight: "$bold",
})

export const TotalBalance = styled("span", {
  display: "block",
})

export const WrapperBuyButton = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "center",
  gap: "7px",
  marginBottom: "8px",
})

export const ButtonText = styled("span", {
  fontWeight: "$bold",
  fontSize: "$smallMedium",
  letterSpacing: "0.1em",

  variants: {
    white: {
      true: {
        color: "$white",
      },
    },
    bigText: {
      true: {
        fontSize: "$default",
      },
    },
  },
})
