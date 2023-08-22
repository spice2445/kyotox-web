import { styled } from "../../../lib/styles"

export const WrapperWindow = styled("div", {
  backgroundColor: "$white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  maxWidth: "373px",
  margin: "0 auto",
  borderRadius: "8px",
  border: "1px solid $accent",
  marginBottom: "30px",

  variants: {
    wide: {
      true: {
        padding: "20px 41px 56px 41px",
        maxWidth: "960px",
        borderRadius: "12px",
      },
    },
  },
})

export const WrapperBlock = styled("div", {})
