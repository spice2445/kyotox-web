import { styled } from "../../../lib/styles"

export const Title = styled("h3", {
  textAlign: "center",

  fontWeight: 700,
  fontSize: "$medium",
  lineHeight: "25px",
  textTransform: "uppercase",

  marginBottom: 16,
})

export const SubTitle = styled("h3", {
  textAlign: "center",

  fontWeight: 500,
  fontSize: "$smallLarge",
  lineHeight: "20px",

  marginBottom: 24,
})

export const WrapperButton = styled("div", {
  display: "grid",
  gap: "12px",
})
