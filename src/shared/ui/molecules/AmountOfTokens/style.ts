import { styled } from "../../../lib/styles"

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
  marginBottom: 24,
  textTransform: "uppercase",
})

export const WrapperButtons = styled("div", {
  marginBottom: "16px",
})

export const WrapperEnterButton = styled("div", {
  width: "100%",
  marginBottom: "32px",
})

export const LabelInput = styled("h3", {
  fontSize: "$little",
  textAlign: "left",
  fontWeight: "$medium",
  marginRight: "auto",
})

export const BoldToken = styled("span", {
  fontWeight: "$bold",
})

export const WrapperInput = styled("div", {
  marginBottom: "16px",
  width: "100%",
})

export const WrapperInputBottom = styled("div", {
  marginBottom: "24px",
  width: "100%",
})
