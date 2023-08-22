interface Link {
  path: string
  title: string
  enabled: boolean
}

export const linksDesktop: Link[] = [
  {
    path: "/",
    title: "SWAP",
    enabled: true,
  },
  {
    path: "/farm",
    title: "FARM & EARN",
    enabled: !!parseInt(process.env.NEXT_PUBLIC_SHOW_DEV_SECTIONS || "0"),
  },
  {
    path: `/launchpad`,
    title: "Launchpad",
    enabled: !!parseInt(process.env.NEXT_PUBLIC_SHOW_DEV_SECTIONS || "0"),
  },
  {
    path: "/market",
    title: "Money market",
    enabled: !!parseInt(process.env.NEXT_PUBLIC_SHOW_DEV_SECTIONS || "0"),
  },
]

export const linksNavigationMobile = [
  {
    path: "/",
    title: "SWAP",
    image: "/images/helpers/redDye.svg",
    enabled: true,
  },
  {
    path: "/farm",
    title: "FARM & EARN",
    image: "/images/helpers/redDye.svg",
    enabled: !!parseInt(process.env.NEXT_PUBLIC_SHOW_DEV_SECTIONS || "0"),
  },
  {
    path: `/launchpad`,
    title: "Launchpad",
    image: "/images/helpers/redDye.svg",
    enabled: !!parseInt(process.env.NEXT_PUBLIC_SHOW_DEV_SECTIONS || "0"),
  },
  {
    path: "/market",
    title: "Money market",
    image: "/images/helpers/redDye.svg",
    enabled: !!parseInt(process.env.NEXT_PUBLIC_SHOW_DEV_SECTIONS || "0"),
  },
]
