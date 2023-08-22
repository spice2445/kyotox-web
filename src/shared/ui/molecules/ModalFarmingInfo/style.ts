import { styled } from "../../../lib/styles"
import { Button } from "../../../../shared/ui/atoms/Button/style"

export const Icon = styled("div", {
  display: "flex",
  justifyContent: "center",
})

export const Text = styled("p", {
  textAlign: "center",
  fontSize: "$smallLarge",
  fontWeight: "$medium",
  lineHeight: "20px",
  marginTop: "8px",
})

export const WrapperButton = styled("div", {
  display: "flex",
  justifyContent: "center",

  marginTop: "20px",

  [`& > ${Button}`]: {
    maxWidth: "166px",
  },
})
