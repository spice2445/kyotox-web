import { styled } from "../../../lib/styles"

export const Root = styled("div")

export const Icon = styled("div", {
  display: "flex",
  justifyContent: "center",

  marginBottom: "24px",
})

export const Title = styled("h2", {
  margin: "0 0 18px",

  fontSize: "$medium",
  fontWeight: "$bold",
  lineHeight: "140%",
  textAlign: "center",
  textTransform: "uppercase",
})

export const Content = styled("div", {
  maxHeight: 250,
  padding: "0 30px",

  overflow: "auto",
})
