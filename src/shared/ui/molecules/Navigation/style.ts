import Link from "next/link"
import { styled } from "../../../lib/styles"

export const NavigationWrapper = styled("nav", {
  margin: ".625rem 2.8125rem .625rem 2.8125rem",
  flex: "1",
})

export const NavList = styled("ul", {
  display: "flex",
})

export const NavLinkWrapper = styled("li", {})

export const NavLink = styled(Link, {
  fontWeight: "$bold",
  fontSize: "16px",
  lineHeight: "24px",
  color: "$black",
  marginRight: "28px",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  transition: "$default",

  "&:hover": {
    color: "$caral",
  },

  "&:active": {
    color: "$saturatedRed",
  },

  variants: {
    isActive: {
      true: {
        color: "$red",
      },
    },
    disabled: {
      true: {
        cursor: "default",
        opacity: 0.6,
        pointerEvents: "none",

        "&:hover": {
          color: "$black",
        },
      },
    },
  },
})
