import { createGlobalStyle } from 'styled-components'

import { minireset } from './minireset'
import { Generic } from './generic'

export const GlobalCss = createGlobalStyle`
  ${minireset}
  ${Generic}
`
