import { styled } from "../../../lib/styles"

export const Dropdown = styled("div", {
  position: "relative",
})

export const Trigger = styled("div", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
})

export const Content = styled("div", {
  position: "absolute",
  top: "calc(100% + 30px)",
  right: 0,

  width: 330,
  padding: "18px 16px",

  visibility: "hidden",
  opacity: 0,
  backgroundColor: "$grey",
  borderRadius: 12,

  transition: "$default",

  variants: {
    isOpened: {
      true: {
        top: "calc(100% + 25px)",

        visibility: "visible",
        opacity: 1,
      },
    },
  },
})
