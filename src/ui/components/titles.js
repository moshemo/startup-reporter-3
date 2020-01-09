import React from 'react'
import styled from 'styled-components'

import theme, { breakpoints as bp } from 'Base/theme'
const { colors } = theme

export const IntroTitles = ({ title, subtitle }) => (
  <Base>
    <Subtitle>{subtitle}</Subtitle>
    <Title>{title}</Title>
  </Base>
)

// --- STYLES
const Base = styled.div`
  max-width: 352px;
  margin: 0px auto 58px;
  text-align: center;
  width: 100%;
`

const Title = styled.h2`
  color: ${colors.offBlack};
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 36px;
  margin: 0px;
`

const Subtitle = styled.h5`
  color: ${colors.primary.a700};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.5px;
  line-height: 24px;
  margin-bottom: 12px;
  text-transform: uppercase;
`
