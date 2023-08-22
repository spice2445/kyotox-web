import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion"

import { keyframes, styled } from "../../../../shared/lib/styles"

const open = keyframes({
  from: { height: 0 },
  to: {
    height: "var(--radix-accordion-content-height)",
  },
})

const close = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
})

export const Collapse = styled(Root, {
  width: "100%",
})

export const StyledTrigger = styled(Trigger, {
  display: "flex",
  alignItems: "center",

  border: "1px solid $black",
  borderRadius: "8px",

  backgroundColor: "$white",

  padding: "11px 14px 10px 14px",
  width: "100%",

  color: "$black",
  fontSize: "$default",
  textAlign: "center",
  transition: "$default",

  "& > svg": {
    transition: "$default",
  },

  '&[data-state="open"]': {
    backgroundColor: "$black",
    color: "$white",

    "& > svg": {
      transform: "rotate(180deg)",
    },
  },

  '&[data-state="close"]': {
    backgroundColor: "$white",
    color: "$black",
  },
})

export const StyledTriggerDefault = styled(Trigger, {
  display: "flex",
  alignItems: "center",
  width: "100%",

  backgroundColor: "inherit",

  "& > svg": {
    transition: "$default",
  },

  "&:hover": {
    "& > svg": {
      color: "$red",
    },
  },

  '&[data-state="open"]': {
    "& > svg": {
      transform: "rotate(180deg)",
    },
  },
})

export const StyledContent = styled(Content, {
  overflow: "hidden",
  width: "100%",
  padding: "0",

  '&[data-state="open"]': {
    animation: `${open} 300ms cubic-bezier(0.87, 0, 0.13, 1) 0s 1 normal`,
  },
  '&[data-state="closed"]': {
    animation: `${close} 300ms cubic-bezier(0.87, 0, 0.13, 1) 0s 1 normal`,
  },
})

export const CollapseItem = styled(Item, {
  margin: "16px 0",
  width: "100%",

  "&:first-child": {
    marginTop: "0px",
  },

  variants: {
    isDefault: {
      true: {
        margin: "12px 0",
        "&:last-child": {
          marginBottom: "0px",
        },
      },
    },
  },
})

export const StyledHeader = styled(Header, {
  marginBottom: 0,
})
