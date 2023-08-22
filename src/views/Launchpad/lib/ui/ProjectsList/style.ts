import { css, styled } from "../../../../../shared/lib/styles"

export const Root = styled("section", {
  position: "relative",

  width: "100%",
  maxWidth: "826px",
  margin: "0 auto",

  "& .swiper": {
    width: "100%",
    height: "100%",
  },

  "& .swiper-pagination": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,

    height: 56,
    marginTop: 50,
  },
})

const NavigationButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "absolute",
  top: "calc(50% - 56px)",

  width: 60,
  height: 60,
  padding: 0,

  transform: "translateY(-50%)",
  backgroundColor: "$black",
  borderRadius: 100,
  border: "none",

  transition: "$default",

  "&:hover:not(:disabled)": {
    backgroundColor: "$red",
    cursor: "pointer",
  },

  "&:disabled": {
    opacity: 0.8,
    cursor: "default",
  },
})

export const LeftNavigation = styled(NavigationButton, {
  right: "calc(100% + 26px)",

  "& > svg": {
    transform: "rotate(180deg)",
  },
})

export const RightNavigation = styled(NavigationButton, {
  left: "calc(100% + 26px)",
})

export const PaginationBullet = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 35,
  height: 35,
  padding: 0,

  backgroundColor: "transparent",
  borderRadius: 8,
  cursor: "pointer",

  transition: "$long",

  "& > img": {
    width: 25,
    height: 25,

    filter: "blur(6px)",

    transition: "$long",
  },

  "&.swiper-pagination-bullet-active": {
    width: 56,
    height: 56,

    filter: "blur(0)",

    "& > img": {
      width: 34,
      height: 34,

      filter: "blur(0)",
    },
  },
})
