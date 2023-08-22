import { styled } from "../../../lib/styles"

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontWeight: "$bold",

  border: "1px solid transparent",

  transition: "$default",

  variants: {
    radius: {
      none: {
        borderRadius: "none",
      },
      medium: {
        borderRadius: "8px",
      },
      large: {
        borderRadius: "500px",
      },
    },
    theme: {
      black: {
        backgroundColor: "$black",
        color: "$white",
      },
      red: {
        backgroundColor: "$red",
        color: "$white",

        "&:hover": {
          backgroundColor: "$caral",
        },

        "&:active": {
          backgroundColor: "$darkRed",
        },
      },
      outlined: {
        borderColor: "$black",
        backgroundColor: "inherit",
      },
      overLightEmerald: {
        backgroundColor: "$overLightEmerald",
        color: "$black",
      },
      lightEmerald: {
        backgroundColor: "$lightEmerald",
        color: "$white",
      },
    },
    size: {
      little: {
        padding: "6px 15px",
      },
      small: {
        padding: "10px 20px",
      },
      smallMedium: {
        padding: "8px 16px",
      },
      medium: {
        padding: "11px 14px 10px 14px",
      },
      average: {
        padding: "6px 30px",
      },
      large: {
        padding: "13px",
      },
      biggest: {
        padding: "19px 23px",
      },
      largest: {
        padding: "12px 40px",
      },
    },
    isLoading: {
      true: {},
    },
    disabled: {
      true: {
        cursor: "not-allowed",
      },
    },
    stretch: {
      true: {
        width: "100%",
      },
    },
    leftPosition: {
      true: {
        justifyContent: "left",
      },
    },
    isLetterSpacing: {
      true: {
        letterSpacing: "0.1em",
      },
    },
    uppercase: {
      true: {
        textTransform: "uppercase",
      },
    },
  },
})
