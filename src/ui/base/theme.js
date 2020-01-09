import { material } from './colors/material-colors'

const theme = {
  colors: {
    grey: material.grey,
    primary: material.lightBlue,
    secondary: material.green,
    tertiary: material.purple,
    accent: material.orange,
    info: material.blue.m400,
    success: material.green.m400,
    warning: material.yellow.m400,
    error: material.red.m400,
    link: {
      base: material.blue.m500,
      visited: material.purple.m600,
      hover: material.grey.m700,
      focus: material.grey.m800,
      active: material.grey.m900,
    },
  },
  borderWidths: [
    0,
    '0.0625rem',
    '0.125rem',
    '0.25rem',
    '0.5rem',
    '1rem',
    '2rem',
  ],
  breakpoints: [480, 768, 992, 1200, 1600],
  fontSizes: {
    html: '16px',
    tiny: '0.75rem',
    small: '0.875rem',
    base: '1rem',
    h6: '0.875rem',
    h5: '1rem',
    h4: '1.25rem',
    h3: '1.75rem',
    h2: '2.5rem',
    h1: '3rem',
    subtitle: '3rem',
    title: '4.25rem',
    subheading: '5rem',
    heading: '6rem',
  },
  fontWeights: {
    thin: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.375,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'inherit',
    code: 'Consolas, monaco, monospace',
  },
  radii: {
    none: 0,
    curved: '0.25rem',
    rounded: '0.5rem',
    pill: '290486px',
    half: '50%',
    circle: '100%',
  },
  shadows: {
    none: 'none',
    smallest:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    smaller:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    small:
      '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
    medium:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    large:
      '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
    larger:
      '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    largest:
      '0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
  },
  sizes: [
    0,
    '0.0625rem',
    '0.125rem',
    '0.25rem',
    '0.5rem',
    '1rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
    '64rem',
  ],
  space: [
    0,
    '0.0625rem',
    '0.125rem',
    '0.25rem',
    '0.5rem',
    '1rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
  ],
  buttons: {
    primary: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: 'primary.accent.dark',
      color: 'light',

      borderRadius: 'curved',
      borderColor: 'initial',
      borderImage: 'initial',
      borderStyle: 'initial',
      borderWidth: '0px',

      cursor: 'pointer',

      fontFamily: 'inherit',
      fontSize: 'base',
      fontWeight: 'bold',
      textDecoration: 'none',
      textTransform: 'capitalize',

      minHeight: '42px',
      minWidth: '48px',
      padding: '12px 20px',

      transition: 'all 0.3s ease 0s',
      ':hover': {
        backgroundColor: 'primary.accent.base',
      },
      ':focus': {
        outline: 'none',
      },
    },
    text: {
      variant: 'buttons.primary',
      backgroundColor: 'transparent',
      color: 'primary.accent.dark',
      ':hover': {
        backgroundColor: 'transparent',
        color: 'primary.accent.base',
      },
    },
    secondary: {
      variant: 'buttons.primary',
      backgroundColor: 'secondaryDark',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary.dark',
      backgroundColor: 'transparent',
      borderColor: 'primary.dark',
      borderStyle: 'solid',
      borderWidth: '2px',
      boxShadow: 'inset 0 0 2px',
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0,
      },
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center',
    },
  },
}

export default theme

export const breakpoints = theme.breakpoints

breakpoints.xs = `${breakpoints[0]}px` // 480
breakpoints.sm = `${breakpoints[1]}px` // 768
breakpoints.md = `${breakpoints[2]}px` // 992
breakpoints.lg = `${breakpoints[3]}px` // 1200
breakpoints.xl = `${breakpoints[4]}px` // 1600
