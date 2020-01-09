import { css } from 'styled-components'
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system'

export const base = css(
  { boxSizing: 'border-box', margin: 0, minWidth: 0 },
  compose(
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography
  )
)
