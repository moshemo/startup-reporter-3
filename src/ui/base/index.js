import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'

import { GlobalCss } from './global'
import theme from './theme'

import SEO from 'Components/seo'

const Base = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <SEO title="Gatsby AntD" />
      {children}
    </ThemeProvider>
    <GlobalCss />
  </>
)

Base.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Base
