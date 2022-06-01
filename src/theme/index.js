import { extendTheme } from '@chakra-ui/react'


const colors = {
  base: {
    50: '#2F1893',
    100: '#E93A7D',
    200: '#25DAC4',
  },
  accent: {
    50: '#2F1893',
    100: '#E93A7D',
    200: '#25DAC4',
  },
  neutral: {
    50: '#2F1893',
    100: '#E93A7D',
    200: '#25DAC4',
  },
}

const breakpoints = {
  xs: '200px',
  sm: '300px',
  md: '700px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1920px',
  xxxl: '2560px',
}

const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  main: 600,
  bold: 700,
  black: 800,
  extrabold: 900,
}

const theme = extendTheme({
    fonts: {
      heading: 'DM Sans, sans-serif',
      body: 'DM Sans, sans-serif',
    },
    colors,
    breakpoints,
    fontWeights,
  })

export default theme;