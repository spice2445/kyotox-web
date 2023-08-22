import { styled } from "../../../lib/styles"

export const Title = styled("h3", {
  textAlign: "center",

  fontWeight: 700,
  fontSize: "$medium",
  lineHeight: "25px",
  textTransform: "uppercase",

  marginBottom: 24,
})

export const FormWrapper = styled("form", {})

export const WrapperInputs = styled("div", {
  marginBottom: 24,
})

export const WrapperInput = styled("label", {
  display: "block",
  marginBottom: 16,
})

export const WrapperButton = styled("div", {
  display: "grid",
  gap: "12px",
})

export const Label = styled("p", {
  textAlign: "left",

  fontWeight: 500,
  fontSize: "$little",
  lineHeight: "20px",

  marginBottom: 6,
})

export const TitleInput = styled("span", {
  display: "block",

  fontWeight: "$bold",
  textAlign: "left",
  fontSize: "$smallLarge",
  color: "$red",
  lineHeight: "20px",
})
