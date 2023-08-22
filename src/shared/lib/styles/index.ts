import { createStitches } from "@stitches/react"

import { setupFonts } from "./fonts"
import { setupStyles } from "./global"

export const media = {
  toWideMobile: "only screen and (max-width: 560px)",
  toTablet: "only screen and (max-width: 768px)",
  toWideTablet: "only screen and (max-width: 960px)",
  toLaptop: "only screen and (max-width: 1200px)",
}

export const { styled, getCssText, keyframes, css, theme } = createStitches({
  theme: {
    colors: {
      accent: "#E7ECE8",
      black: "#000000",
      white: "#FFFFFF",
      red: "#C51428",
      emerald: "#96B1A4",
      overLightEmerald: "#DBE9DF",
      lightEmerald: "#CEDCD3",
      brightRed: "#DC0000",
      grey: "#EFEFEF",
      caral: "#DF4F50",
      saturatedRed: "#C51428",
      darkRed: "#942323",
    },
    shadows: {},
    fonts: {
      Poppins: "Poppins, sans-serif",
      Hakio: "Hakio-Free-Trial",
      Rosario: "Rosario",
      IbmPlexSans: "IbmPlexSans",
    },
    fontSizes: {
      little: "11px",
      small: "12px",
      smallMedium: "13px",
      smallLarge: "14px",
      defaultSmall: "15px",
      default: "16px",
      medium: "18px",
      large: "20px",
      largeMedium: "22px",
      titleSmall: "24px",
      titleMediumSmall: "26px",
      titleMedium: "28px",
      titleMediumLarge: "30px",
      titleLarge: "32px",
      big: "40px",
      biggest: "42px",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    letterSpacings: {
      default: 0,
      defaultLarge: "0.01em",
      small: "0.02em",
    },
    transitions: {
      default: "0.2s ease-in-out",
      long: "0.3s ease-in-out",
    },
    radii: {},
    zIndices: {
      modal: 100,
      warningMessage: 50,
      backgroundImage: 20,
    },
  },
  media,
  utils: {
    radius: (value) => ({
      borderRadius: value / 2,
      width: value,
      height: value,
    }),
  },
})

export const setupGlobalStyles = (): void => {
  setupFonts()
  setupStyles()
}
