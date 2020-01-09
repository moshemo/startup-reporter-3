import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Box, Grid, Text } from 'Elements'

import theme, { breakpoints as bp } from 'Base/theme'
const { colors } = theme

export const HomeList = () => (
  <Grid autoFit="300px" gridAutoRows="auto" gridGap={0} mx={32} my={0}>
    <ListItem>
      <Link to="/">
        <Title>This is the Title of the Article</Title>
        <Excerpt>And here is a short excerpt from the article</Excerpt>
      </Link>
    </ListItem>
  </Grid>
)

const ListItem = styled(Box)`
  padding: 4px;
  :hover {
    background-color: ${colors.light};
  }
`

const Title = styled(Text)`
  color: ${colors.offBlack};
  font-weight: 600;
`
const Excerpt = styled(Text)`
  color: ${colors.grey.darker};
  font-size: 15px;
`
