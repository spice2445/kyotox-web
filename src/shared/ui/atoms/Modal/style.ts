import { styled } from "../../../lib/styles"

export const ModalWrapper = styled("div", {
  position: "fixed",
  zIndex: "1050",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  visibility: "hidden",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.64)",
  transition: "$long",
  opacity: 0,
  padding: "0 10px",
  cursor: "pointer",
  transform: "translateY(10px)",

  variants: {
    isOpened: {
      true: {
        visibility: "visible",
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },
})

export const Content = styled("div", {
  position: "relative",
  top: 100,

  maxWidth: 375,
  width: "100%",
  margin: "0 auto",
  padding: "48px 0",

  backgroundColor: "$white",
  borderRadius: 12,
  border: "1px solid $border",
  cursor: "default",

  variants: {
    size: {
      default: {},
      large: {
        maxWidth: 680,
      },
    },
  },
})

export const Actions = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,

  padding: "0 20px",
  marginTop: 32,

  variants: {
    direction: {
      column: {
        flexDirection: "column",
        alignItems: "unset",
        justifyContent: "unset",
        gap: 12,

        marginTop: 48,
      },
      row: {},
    },
  },
})
