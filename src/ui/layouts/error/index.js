import React from 'react'
import PropTypes from 'prop-types'

import Base from 'Base'

const ErrorLayout = ({ children }) => <Base>{children}</Base>

ErrorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorLayout
