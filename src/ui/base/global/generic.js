import { css } from 'styled-components'

import theme from 'Base/theme'

const { colors, fonts, fontSizes, fontWeights, letterSpacing } = theme

export const Generic = css`
  * {
    background-repeat: no-repeat;
    box-sizing: inherit;
    margin: 0;
    padding: 0;

    :before,
    :after {
      box-sizing: inherit;
    }
  }

  html {
    background-color: ${colors.offWhite};
    box-sizing: border-box;
    font-size: ${fontSizes.html};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }

  article,
  aside,
  figure,
  footer,
  header,
  hgroup,
  section {
    display: block;
  }

  body,
  button,
  input,
  select,
  textarea {
    font-size: ${fontSizes.base};
  }

  code,
  pre {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-family: ${fonts.code};
  }

  body {
    color: ${colors.black};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    font-family: ${fonts.body};
  }

  a {
    color: ${colors.link.base};
    cursor: pointer;
    text-decoration: none;
  }

  a strong {
    color: currentColor;
  }

  a:hover {
    color: ${colors.link.hover};
  }

  code {
    background-color: ${colors.light};
    color: ${colors.code};
    font-size: ${fontSizes.small};
    font-weight: 400;
    padding: 0.25em 0.5em;
  }

  hr {
    background-color: ${colors.light};
    border: none;
    display: block;
    height: 2px;
    margin: 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  input[type='checkbox'],
  input[type='radio'] {
    vertical-align: baseline;
  }

  small {
    font-size: ${fontSizes.small};
  }

  span {
    font-style: inherit;
    font-weight: inherit;
  }

  strong {
    color: ${colors.black};
    font-weight: 700;
  }

  fieldset {
    border: none;
  }

  pre {
    -webkit-overflow-scrolling: touch;
    background-color: ${colors.light};
    color: ${colors.dark};
    font-size: 0.875em;
    overflow-x: auto;
    padding: 1.25rem 1.5rem;
    white-space: pre;
    word-wrap: normal;
  }

  pre code {
    background-color: transparent;
    color: currentColor;
    font-size: 1em;
    padding: 0;
  }

  table td,
  table th {
    text-align: left;
    vertical-align: top;
  }

  table th {
    color: ${colors.black};
  }
`
