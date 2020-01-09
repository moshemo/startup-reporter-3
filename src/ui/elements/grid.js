import styled, { css } from 'styled-components'
import { grid } from 'styled-system'

import theme from 'Base/theme'

const { breakpoints } = theme

const xs = `@media (min-width: ${breakpoints.xs})`

export const Grid = styled.div(
  ({ autoFit, center }) => css`
    display: grid;

    ${autoFit &&
      `
      grid-template-columns: 1fr;
      ${xs} { 
        grid-template-columns: repeat(auto-fit, minmax(${autoFit}, 1fr));
      }
      `}

    ${center && 'justify-items: center; align-content: center;'}
  
      ${grid}
  `
)
