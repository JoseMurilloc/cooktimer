import { createStitches } from "@stitches/react";
import { colors } from "../stories/designSystems/colors";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  theme,
  createTheme,
  css,
  getCssText,
} = createStitches({
  theme: {
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
    },
    breakpoints: {
      sm: '@media (min-width: 640px)',
      md: '@media (min-width: 768px)',
      lg: '@media (min-width: 1024px)',
      xl: '@media (min-width: 1280px)',
    },
    colors,
    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fonts: {
      default: 'Nunito, sans-serif',
      secondary: 'Inter, sans-serif'
    },
    fontSizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.50rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem',
    },
    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%'
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    }
  }
})