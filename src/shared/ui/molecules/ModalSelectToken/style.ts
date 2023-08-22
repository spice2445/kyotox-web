import { styled } from "../../../lib/styles"

export const Title = styled("h3", {
  textAlign: "center",
  marginBottom: "16px",
})

export const ListWrapper = styled("div", {
  maxHeight: "80vh",
  overflow: "y-scroll",
})

export const List = styled("div", {})

export const Item = styled("div", {
  cursor: "pointer",
  display: "flex",
  height: "51px",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 20px",

  "&:hover": {
    backgroundColor: "$grey",
  },
})

export const ItemLeft = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
})

export const ItemCenter = styled("div", {
  flex: 1,
  textAlign: "left",
  padding: "0 12px",
  lineHeight: "51px",
})

export const TokenName = styled("div", {
  color: "#000000",
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "19px",
  paddingTop: "7px",
})

export const TokenSymbol = styled("div", {
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "19px",
  color: "#96B1A4",
})

export const ItemRight = styled("div", {
  lineHeight: "51px",
  textAlign: "right",
  fontWeight: 700,
})

export const WrapperButton = styled("div", {
  marginBottom: "12px",
  width: "100%",
})

export const TokenSearch = styled("div", {
  border: "1px solid #E7ECE9",
  borderRadius: "8px",
  color: "#E7ECE9",
  display: "flex",
  margin: "0 20px 22px",
})

export const TokenSearchImage = styled("div", {
  display: "flex",
  padding: 10,
})

export const TokenSearchInput = styled("input", {
  backgroundColor: "transparent",
  border: "none",
  color: "#96B1A4",
  flex: 1,
  height: "35px",
})
