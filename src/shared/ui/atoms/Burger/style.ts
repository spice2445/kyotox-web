import { styled } from "../../../lib/styles"

export const Burger = styled("span", {
  display: "flex",
  alignItems: "center",
  position: "relative",
  backgroundColor: "inherit",
  transition: "$default",
  border: "none",
  outline: "none",
  cursor: "pointer",

  "&::before": {
    content: "",
    backgroundColor: "$black",
    position: "absolute",
    width: "100%",
    height: "2px",
    top: "0",
    left: "0",
    borderRadius: "9999px",
    transform: "rotate(0deg)",
    transition: "$default",
  },

  "&::after": {
    content: "",
    backgroundColor: "$black",
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: "0",
    left: "0",
    borderRadius: "9999px",
    transform: "rotate(0deg)",
    transition: "$default",
  },

  variants: {
    size: {
      small: {
        width: "20px",
        height: "18px",
      },
      medium: {
        width: "24px",
        height: "20px",

        "&::before": {
          height: "3px",
        },

        "&::after": {
          height: "3px",
        },
      },
    },
    isActive: {
      true: {
        "&::before": {
          width: "120%",
          transform: "rotate(45deg)",
          top: "45%",
          height: "3px",
        },
        "&::after": {
          width: "120%",
          top: "45%",
          transform: "rotate(-45deg)",
          height: "3px",
        },
      },
    },
  },
})

export const MiddleLine = styled("span", {
  display: "block",
  width: "100%",
  height: "2px",
  backgroundColor: "$black",
  borderRadius: "9999px",
  transition: "$default",

  variants: {
    size: {
      small: {
        width: "20px",
      },
      medium: {
        width: "24px",
        height: "3px",
      },
    },
    isActive: {
      true: {
        display: "none",
      },
    },
  },
})
