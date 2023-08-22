import { styled } from "../../../lib/styles"

export const Wrapper = styled("div", {
  backgroundColor: "$white",
  borderRadius: "12px",
  display: "flex",
})

export const StyledImage = styled("img", {
  borderRadius: "12px",
})

export const InnerWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",

  width: "100%",
  padding: "42px 32px",

  variants: {
    smallPadding: {
      true: {
        padding: 32,
      },
    },
  },
})

export const TopWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  marginBottom: "24px",
})

export const Technology = styled("div", {
  display: "flex",
})

export const SocialNetwork = styled("div", {
  display: "flex",
  gap: "16px",

  color: "$red",

  variants: {
    margin: {
      true: {
        margin: "6px 0 18px",
      },
    },
  },
})

export const WrapperInfo = styled("div", {
  display: "flex",
  flexDirection: "column",

  maxWidth: "460px",
  height: "100%",
})

export const Title = styled("h3", {
  marginBottom: "12px",

  fontWeight: "$bold",
  fontSize: "$titleLarge",
  lineHeight: "45px",
})

export const SubTitle = styled("h4", {
  marginBottom: "20px",

  fontSize: "$smallLarge",
  fontFamily: "$Poppins",
  fontWeight: "$regular",
  lineHeight: "155%",
})

export const CloseTimer = styled("p", {
  marginBottom: "24px",

  fontWeight: "$medium",
  color: "$red",
  lineHeight: "24px",

  variants: {
    gap: {
      true: {
        display: "flex",
        alignItems: "center",
        gap: 8,
      },
    },
  },
})

export const WrapperButtons = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",

  marginTop: "auto",
})

export const WrapperButton = styled("div", {
  marginRight: "16px",
})
