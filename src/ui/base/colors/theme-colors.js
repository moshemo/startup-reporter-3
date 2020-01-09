import { material } from './material-colors'

export const colors = {
  white: material.shades.white,
  offWhite: material.grey.m50,
  light: material.grey.m100,

  dark: material.grey.m800,
  offBlack: material.grey.m900,
  black: material.shades.black,

  grey: {
    lighter: material.grey.m200,
    light: material.grey.m300,
    base: material.grey.m400,
    dark: material.grey.m500,
    darker: material.grey.m600,
    darkest: material.grey.m700,
  },

  primary: {
    faintest: material.lightBlue.m50,
    fainter: material.lightBlue.m100,
    faint: material.lightBlue.m200,
    lighter: material.lightBlue.m400,
    light: material.lightBlue.m500,
    base: material.lightBlue.m600,
    dark: material.lightBlue.m700,
    darker: material.lightBlue.m800,
    accent: {
      light: material.lightBlue.accent.a200,
      base: material.lightBlue.accent.a400,
      dark: material.lightBlue.accent.a700,
    },
  },

  secondary: {
    lighter: material.green.m100,
    light: material.green.m200,
    base: material.green.m300,
    dark: material.green.m400,
    darker: material.green.m500,
  },

  tertiary: {
    lighter: material.purple.m100,
    light: material.purple.m200,
    base: material.purple.m300,
    dark: material.purple.m500,
    darker: material.purple.m600,
  },

  accent: {
    light: material.orange.a200,
    base: material.orange.a400,
    dark: material.orange.a700,
  },

  on: {
    primary: material.grey.m50,
    secondary: material.grey.m900,
    background: material.grey.m900,
    surface: material.grey.m900,
    error: material.grey.m50,
  },

  info: material.blue.m400,
  success: material.green.m400,
  warning: material.yellow.m400,
  error: material.red.m400,

  link: {
    base: material.blue.m500,
    visited: material.purple.m600,
    hover: material.grey.m800,
    focus: material.grey.m800,
    active: material.grey.m800,
  },

  code: material.red.m500,
}
