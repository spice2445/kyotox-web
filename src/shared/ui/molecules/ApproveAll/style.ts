import { styled } from "../../../lib/styles"

export const InnerWrapper = styled("p", {
  display: "flex",
  alignItems: "center",
  width: "100%",
})

export const ListApprove = styled("ul", {
  display: "grid",
  gap: "16px",
  width: "100%",
  marginBottom: "32px",
})

export const CountButton = styled("span", {
  display: "block",
  marginRight: "20px",
  marginLeft: "3px",
})

export const Title = styled("h2", {
  color: "$black",
  fontWeight: "$bold",
  fontSize: "$default",
  lineHeight: "22px",
  textAlign: "center",
  maxWidth: "78%",
  marginBottom: 16,
  textTransform: "uppercase",
})

export const InfoTransition = styled("span", {
  display: "flex",
  marginRight: "auto",
})
