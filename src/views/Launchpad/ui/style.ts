import { styled } from "../../../shared/lib/styles"

export const Title = styled("h2", {
  fontSize: "90px",
  lineHeight: "80px",
  textAlign: "center",
  textTransform: "uppercase",
  fontFamily: "$Hakio",
  fontWeight: "$regular",

  marginTop: "72px",
})

export const SubTitle = styled("p", {
  fontSize: "$titleSmall",
  lineHeight: "32px",
  textAlign: "center",
  fontFamily: "$Poppins",
  fontWeight: "$medium",

  marginTop: "20px",
  marginBottom: "56px",
})

export const Background = styled("div", {
  position: "absolute",
  right: 280,
  bottom: 470,
  left: 0,

  height: 570,

  backgroundImage: "url('/images/backgrounds/tree.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center left",
})
