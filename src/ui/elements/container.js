import styled from 'styled-components'

import { Box } from 'Elements/box'

import { breakpoints as bp } from 'Base/theme'

export const Container = styled(Box)`
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;

  width: 100%;

  @media (min-width: ${bp.sm}) {
    max-width: 750px;
  }
  @media (min-width: ${bp.md}) {
    max-width: 970px;
  }
  @media (min-width: ${bp.lg}) {
    max-width: 1120px;
  }
`
