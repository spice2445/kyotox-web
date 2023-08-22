import { styled } from "../../../lib/styles"

export const StepsList = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  width: "100%",
})

export const StepItem = styled("li", {
  borderTop: "2px solid $overLightEmerald",
  padding: "16px 16px 6px 16px",
  textAlign: "center",
  color: "$overLightEmerald",
  cursor: "pointer",

  variants: {
    isActive: {
      true: {
        borderTop: "2px solid $red",
        color: "$red",
      },
    },
  },
})

export const Text = styled("p", {
  fontSize: "$small",
})
