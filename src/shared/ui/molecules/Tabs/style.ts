import { Content, List, Root, Trigger } from "@radix-ui/react-tabs"

import { styled } from "../../../lib/styles"

export const TabsRoot = styled(Root, {
  width: "100%",
})

export const StyledTabsList = styled(List, {
  position: "relative",

  "&::before": {
    content: "",

    position: "absolute",
    zIndex: 0,
    right: 0,
    bottom: 0,
    left: 0,

    height: 2,

    backgroundColor: "$overLightEmerald",
  },
})

export const StyledTrigger = styled(Trigger, {
  position: "relative",
  zIndex: 1,

  background: "inherit",
  color: "$emerald",

  borderBottom: "2px solid $overLightEmerald",
  textTransform: "uppercase",
  fontWeight: "$bold",
  lineHeight: "24px",

  transition: "$default",

  padding: "16px 30px",

  '&[data-state="active"]': {
    color: "$red",
    borderBottom: "2px solid $red",
  },
  '&[data-state="inactive"]': {},
})

export const StyledContent = styled(Content, {
  marginTop: "61px",

  '&[data-state="active"]': {
    display: "block",
  },
  '&[data-state="inactive"]': {},
})
