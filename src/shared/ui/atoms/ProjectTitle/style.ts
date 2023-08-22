import { styled } from "../../../lib/styles"

export const ProjectTitle = styled("h3", {
  marginBottom: "32px",

  fontFamily: "$Poppins",
  fontWeight: "$bold",
  fontSize: "$titleMediumLarge",
  lineHeight: "42px",
  textTransform: "uppercase",

  color: "$red",

  variants: {
    size: {
      small: {
        marginTop: "56px",

        fontSize: "$titleSmall",
        lineHeight: "31px",
      },
      default: {},
    },
  },
})
