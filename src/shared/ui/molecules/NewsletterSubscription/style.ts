import { styled } from "../../../../shared/lib/styles"
import { InputWrapper } from "../../../../shared/ui/atoms/Input/style"

export const Wrapper = styled("div", {
  maxWidth: "374px",
  margin: "550px auto 0",
  paddingBottom: 80,

  variants: {
    topMargin: {
      default: {},
      small: {
        marginTop: 50,
      },
    },
  },
})

export const Title = styled("div", {
  lineHeight: "20px",
  textAlign: "center",
  fontFamily: "$IbmPlexSans",
})

export const WrapperInput = styled("div", {
  marginTop: 12,
  marginBottom: 28,

  display: "flex",
  justifyContent: "center",

  [`& ${InputWrapper}`]: {
    borderRadius: "4px 0 0 4px",
    borderRight: 0,
  },
})

export const SocialNetworks = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "16px",
})

export const WrapperSocialNetwork = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 44,
  height: 44,

  borderRadius: 100,
  backgroundColor: "$caral",

  color: "$white",

  "& > svg": {
    width: 22,
  },
})

export const WrapperButton = styled("div", {
  cursor: "pointer",
  backgroundColor: "$caral",
  borderRadius: "0 4px 4px 0",

  display: "flex",
  alignItems: "center",

  padding: "14px 18px 14px 20px",
})
