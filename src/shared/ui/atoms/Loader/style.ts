import { styled, keyframes } from "../../../lib/styles"

const rotation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const Loader = styled("div", {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  display: "inline-block",
  boxSizing: "border-box",
  animation: `${rotation} 1s linear infinite`,
  marginRight: "10px",

  variants: {
    theme: {
      light: {
        border: "5px solid #FFF",
        borderBottomColor: "transparent",
      },
      dark: {
        border: "5px solid #CEDCD3",
        borderBottomColor: "transparent",
      },
    },
    size: {
      tiny: {
        height: "16px",
        width: "16px",
      },
      small: {
        height: "20px",
        width: "20px",
      },
      medium: {
        height: "40px",
        width: "40px",
      },
      large: {
        height: "60px",
        width: "60px",
      },
    },
  },
})
