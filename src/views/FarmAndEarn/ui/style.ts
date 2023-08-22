import { styled } from "../../../shared/lib/styles"

export const WrapperPage = styled("div", {
  paddingTop: "68px",
})

export const FooterBackground = styled("div", {
  backgroundImage: "url(/images/backgrounds/background.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  position: "fixed !important",
  inset: 0,
  zIndex: "-1",
  objectFit: "cover",
})

export const SubText = styled("p", {
  fontSize: "$small",
  lineHeight: "17px",
  margin: "0 auto",
  display: "block",
  maxWidth: "278px",
  textAlign: "center",
  marginBottom: "24px",
})

export const Title = styled("h2", {
  fontFamily: "$Hakio",
  fontWeight: 400,
  fontSize: "$big",
  lineHeight: "32px",
  textAlign: "center",
  marginBottom: "32px",
})
