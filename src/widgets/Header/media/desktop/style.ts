import { styled } from "../../../../shared/lib/styles"
import { Button } from "../../../../shared/ui/atoms/Button/style"
import { Trigger } from "../../../../shared/ui/atoms/Dropdown/style"

export const WrapperDesktopHeader = styled("header", {
  maxWidth: "1152px",
  margin: "0 auto",
  padding: "0px 0px",
  paddingTop: "1.25rem",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [`& ${Trigger} ${Button}`]: {
    lineHeight: "24px",
  },
})
export const ConnectButtonStyle = styled("div", {
  fontSize: "8px",
  display: "inline-block",
})
export const NumberWallet = styled("div", {
  fontWeight: "$bold",
  display: "inline",
  lineHeight: "24px",
  width: "169px",
  overflow: "hidden",
  letterSpacing: "0.1em",
})
export const CurrentAccount = styled("div", {
  width: "129px",
  overflow: "hidden",
})

export const Actions = styled("div", {
  display: "grid",
  gap: 12,

  marginTop: 16,
})

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
})

export const Column = styled("div", {
  display: "grid",
  gap: 6,
})

export const Text = styled("span", {
  padding: 0,

  backgroundColor: "transparent",

  fontSize: "$smallLarge",
  fontWeight: "$medium",
  textAlign: "left",
  lineHeight: "24px",

  transition: "$default",

  variants: {
    bold: {
      true: {
        fontWeight: "$bold",
      },
    },
    red: {
      true: {},
    },
    underline: {
      true: {
        textDecoration: "underline",

        "&:hover": {
          color: "$red",
        },
      },
    },
  },
})

export const Chevron = styled("span", {
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  overflow: "hidden",

  "&:before": {
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: "3px 3px 0 0",
    content: "",
    display: "inline-block",
    height: "12px",
    position: "relative",
    transformOrigin: "center",
    verticalAlign: "top",
    width: "12px",
  },

  variants: {
    direction: {
      top: {
        transform: "rotate(-45deg)",
        top: "5px",
      },
      bottom: {
        transform: "rotate(135deg)",
        top: "-5px",
      },
    },
  },
})
