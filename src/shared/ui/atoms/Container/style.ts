import { styled } from "../../../lib/styles"

export const Container = styled("div", {
  maxWidth: "1152px",
  margin: "0 auto",

  variants: {
    maxWidth: {
      small: {
        maxWidth: 960,
      },
      default: {},
    },
  },
})
