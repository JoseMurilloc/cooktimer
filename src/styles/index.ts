import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  theme,
  createTheme,
  css,
  getCssText
} = createStitches({
  theme: {
    colors: {
      primary: '#FF970F', 
      primary_800: '#FDAB40', 
      primary_600: '#FFC880', 
      primary_400: '#FEE0B7', 
      primary_200: '#FFF6EA', 
      primary_000: '#FFF9F2', 

      success: '#228738',
      success_800: '#28A443',
      success_600: '#33C653',
      success_400: '#B9FFC8',
      success_200: '#E2FFE9',
      success_000: '#F1FFF4',

      text: '#171717', 
      text_800:  '#292929', 
      text_600: '#444444', 
      text_400: '#444444', 
      text_200: '#EEEEEE', 
      text_000: '#FDFDFD',

      error: '#A9361C',
      error_800: '#D44F31',
      error_600: '#EE5A39',
      error_400: '#F68C74',
      error_200: '#FFC1B4',
      error_000: '#FFE3DD ',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fonts: {
      default: 'Nunito, sans-serif',
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
      '5xl': '2.25rem',
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