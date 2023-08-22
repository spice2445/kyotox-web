import { styled } from "../../../lib/styles"

export const FooterBackground = styled("div", {
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: "-1",

  height: "33.75rem",

  // backgroundImage: "url(/images/backgrounds/background.png)",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover",
  // backgroundPosition: "bottom",

  background:
    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 17.34%), url(/images/backgrounds/background.png)",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  objectFit: "cover",
})
