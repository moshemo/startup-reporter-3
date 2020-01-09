import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

import styled from 'styled-components'

import Base from 'Base'
import theme from 'Base/theme'

import { Box } from 'Elements'
import { Logo, Navbar } from 'Components'

const { colors } = theme

const MainLayout = ({ children }) => (
  <Base>
    <Box as="header" bg="primary.m800">
      <Navbar py="0" px="64px">
        <Logo
          firstName="Startup"
          secondName="Reporter"
          firstColor="grey.m300"
          secondColor="grey.m100"
          fontSize="20px"
          textTransform="uppercase"
        />
      </Navbar>
    </Box>
    <Header>
      <Nav>
        <Brand>
          Startup<span>Reporter</span>
        </Brand>
        <Menu>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/about">About</Link>
          <Link to="/newsletter">Newsletter</Link>
          <Dropdown>
            <Droplink to="/advertise">Advertise</Droplink>
            <Submenu>
              <Sublink to="/advertise/events">Events</Sublink>
              <Sublink to="/advertise/classifieds">Classifieds</Sublink>
              <Sublink to="/advertise/banner-ads">Banner Ads</Sublink>
              <Sublink to="/advertise/press-releases">Press Releases</Sublink>
            </Submenu>
          </Dropdown>
          <Link to="/contact">Contact</Link>
        </Menu>
      </Nav>
    </Header>
    <Main>{children}</Main>
  </Base>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout

// ------- STYLES -------

// Header
const Header = styled.header`
  background-color: ${colors.primary.m800};
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px;
  width: 100%;
`

const Brand = styled.div`
  color: ${colors.grey.m300};
  font-size: 20px;
  text-transform: uppercase;

  :focus {
    background-color: rgba(0, 0, 0, 0.07);
  }

  span {
    color: ${colors.grey.m100};
    margin-left: 2px;
  }
`

const Menu = styled.div``

const Link = styled(GatsbyLink)`
  color: ${colors.grey.m100};
  display: inline-block;
  font-size: 16px;
  padding: 18px;
  text-transform: uppercase;

  :hover {
    color: ${colors.grey.m100};
    background-color: ${colors.primary.m700};
  }

  :focus {
    outline: none;
    background-color: ${colors.primary.m700};
  }

  ::moz-focus-inner {
    border: 0;
  }
`

const Submenu = styled.div`
  display: none;

  background-color: ${colors.primary.m700};
  box-shadow: 0 20px 15px rgba(0, 0, 0, 0.15);
  min-width: 200px;

  position: absolute;
  top: 100%;
  left: 0;
`
const Droplink = styled(Link)``

const Sublink = styled(Link)`
  display: inline-block;
  width: 100%;
  :hover {
    background-color: ${colors.primary.m800};
  }
`

const Dropdown = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 10;

  :hover {
    ${Droplink} {
      background-color: ${colors.primary.m700};
    }

    ${Submenu} {
      display: block;
    }
  }
`

// --- Main
const Main = styled.main``
