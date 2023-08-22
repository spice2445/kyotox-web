import { styled } from "../../../../../shared/lib/styles"

export const WrapperDetails = styled("section", {
  position: "relative",
})

export const Title = styled("h3", {
  marginBottom: "32px",
  marginTop: "56px",

  fontFamily: "$Poppins",
  fontWeight: "$bold",
  fontSize: "$titleSmall",
  lineHeight: "31px",
  textTransform: "uppercase",

  color: "$red",
})

export const Text = styled("p", {
  fontFamily: "$Poppins",
  fontWeight: "$regular",
  fontSize: "$smallLarge",
  lineHeight: "22px",

  marginBottom: "32px",
})

export const SubTitle = styled("p", {
  fontWeight: "$bold",
  fontFamily: "$Poppins",
  fontSize: "$smallLarge",
  lineHeight: "22px",

  marginBottom: "32px",
})

export const WrapperImage = styled("div", {
  marginBottom: "32px",
})

export const Image = styled("img")
