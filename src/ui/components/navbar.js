import React from 'react'
import PropTypes from 'prop-types'

import { Box, Icon } from 'Elements'

export const Navbar = ({ children, ...props }) => (
  <Box
    as="nav"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    width="100%"
    {...props}
  >
    {children}
  </Box>
)

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Logo = ({
  icon,
  firstName,
  secondName,
  firstColor,
  secondColor,
  ...props
}) => (
  <Box>
    {icon && <Icon name={icon} mr="4px" />}
    <Box color={firstColor} {...props}>
      {firstName}
      <Box as="span" color={secondColor} ml="2px">
        {secondName}
      </Box>
    </Box>
  </Box>
)
