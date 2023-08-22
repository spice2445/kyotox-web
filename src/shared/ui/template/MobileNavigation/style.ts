import Image from "next/image"
import Link from "next/link"
import { styled } from "../../../lib/styles"

export const NavigationOverlay = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  zIndex: "$modal",

  visibility: "hidden",
  overflow: "auto",
  backgroundColor: "$overlay",
  transition: "$default",
  opacity: "0",

  variants: {
    isOpened: {
      true: {
        visibility: "visible",
        opacity: "1",
      },
    },
  },
})

export const NavigationInnerWrapper = styled("div", {
  overflowY: "scroll",
})

export const Navigation = styled("div", {
  width: "100%",
  backgroundColor: "$white",
  transform: "translateX(-100%)",
  transition: "$default",
  height: "100%",
  zIndex: "$modal",
  position: "relative",

  variants: {
    isActive: {
      true: {
        transform: "translateX(0)",
      },
    },
  },
})

export const NavLinks = styled("ul", {
  padding: "80px 32px",
})

export const NavLink = styled(Link, {
  color: "$black",
  display: "flex",
  alignItems: "center",
  margin: "35px 0",

  "&:first-child": {
    marginTop: "0",
  },

  "&:last-child": {
    marginBottom: "25px",
  },
})

export const WrapperCloseButton = styled("button", {
  position: "absolute",
  top: "21px",
  right: "37px",
  background: "inherit",
})

export const ImageLink = styled(Image, {
  marginRight: "6px",
})
