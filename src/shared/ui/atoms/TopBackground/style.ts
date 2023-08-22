import { styled } from "../../../lib/styles"

export const TopBackground = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  zIndex: "-1",
  display: "inline-block",
  height: "stretch",
  // overflow: 'hidden',

  // backgroundImage: "url(/images/backgrounds/topBackground.png)",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover",
  // backgroundPosition: "top",
  // objectFit: "contain",

  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0) 80.89%, #FFFFFF 100%), url(/images/backgrounds/topBackground.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
})
