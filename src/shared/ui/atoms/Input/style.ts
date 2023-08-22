import { styled } from "../../../lib/styles"

export const InputWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  border: "1px solid $black",

  variants: {
    size: {
      small: {
        padding: "8px 12px",
      },
      medium: {
        padding: "12px 13px 16px 13px",
      },
    },
    radius: {
      small: {
        borderRadius: "4px",
      },
      medium: {
        borderRadius: "8px",
      },
    },
    theme: {
      light: {
        border: "1px solid $accent",
      },
      dark: {
        border: "1px solid $black",
      },
    },
    stretch: {
      true: {},
    },
    disabled: {
      true: {},
    },
  },
})

export const Input = styled("input", {
  lineHeight: "24px",
  fontWeight: 700,
  backgroundColor: "inherit",

  variants: {
    theme: {
      light: {
        "&::placeholder": {
          fontWeight: 400,
          color: "$emerald",
          opacity: "0.3",
          fontFamily: "$IbmPlexSans",
        },
      },
      dark: {
        "&::placeholder": {
          fontWeight: 400,
          color: "$black",
          opacity: "0.3",
          fontFamily: "$IbmPlexSans",
        },
      },
    },
  },
})
